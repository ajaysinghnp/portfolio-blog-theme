"use client";

import Link from "next/link"; // Assuming you are using Next.js
import { Eye } from "lucide-react"; // Ensure you have the correct path for Eye
import useSWR from "swr";

import { Card } from "@/components/card"; // Ensure you have the correct path for Card
import { Article } from "./article"; // Ensure you have the correct path for Article
import { Project } from "@/types/github";
import { fetchProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const { data: projects, error, isLoading } = useSWR<Project[]>("projects", fetchProjects);

  if (error) {
    return <div className="relative bg-black h-dvh flex justify-center items-center">Something happened while fetching Projects!</div>;
  }

  if (isLoading) {
    return <div className="relative bg-black h-dvh flex justify-center items-center">Loading Projects...</div>;
  }

  const featured = projects?.find(
    (project) => project.name === "mentormaya.github.io"
  )!;
  const top2 = projects?.find((project) => project.name === "blog")!;
  const top3 = projects?.find(
    (project) => project.name === "addons-example"
  )!;
  const sorted = projects
    ?.filter(
      (project) =>
        project.name !== featured.name &&
        project.name !== top2.name &&
        project.name !== top3.name
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <main className="px-6 pt-8 mx-auto space-y-2 max-w-7xl lg:px-8 md:space-y-8 md:pt-8 lg:pt-16">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Open Source Projects
        </h2>
        <p className="mt-4 text-zinc-400">
          Some of my open source projects that I have worked on in the past and currently woking on. You can explore the projects and contribute to them on GitHub by following the links below.
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {projects && projects?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            <Card>
              <Link href={`/projects/${featured.name}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                        0
                      )}
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>

            <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
              {[top2, top3].map((project) => (
                <Card key={project.name}>
                  <Article project={project} views={0} />
                </Card>
              ))}
            </div>
          </div>
          <div className="hidden w-full h-px md:block bg-zinc-800" />

          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            <div className="grid grid-cols-1 gap-4">
              {sorted
                ?.filter((_, i) => i % 3 === 0)
                .map((project) => (
                  <Card key={project.name}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {sorted
                ?.filter((_, i) => i % 3 === 1)
                .map((project) => (
                  <Card key={project.name}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {sorted
                ?.filter((_, i) => i % 3 === 2)
                .map((project) => (
                  <Card key={project.name}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className="relative flex justify-start items-center text-white">Could not Load the Projects</div>
      )}
    </main>
  );
}
