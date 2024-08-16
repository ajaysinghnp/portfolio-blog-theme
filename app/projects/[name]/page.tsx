"use client";
import { useEffect, useState } from "react";

import { Header } from "./header";
import "./mdx.css";
import { Project } from "@/types/github";
import { fetchProjects, fetchProject } from "@/lib/projects";


type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  const projs: Project[] = await fetchProjects();
  return projs.map((proj) => ({ name: proj.name }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.name;
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    (async () => {
      const p: Project | null = await fetchProject(slug);
      p ? setProject(p) : console.log("No Project")
    })();
  }, []);

  if (!project) {
    return <h1>No Content Found!</h1>
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* <Header project={project} views={5} /> */}
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <code>
          {"project.description"}
        </code>
      </article>
    </div>
  );
}