import "./mdx.css";
import { Project } from "@/types/github";
import { fetchProjectReadme, fetchProjects } from "@/lib/projects";
import ProjectPage from "./project";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  const projs: Project[] = await fetchProjects();
  return projs.map((proj) => ({ name: proj.name }));
}

export default async function ProjectLoadingPage({ params }: Props) {
  const name = params?.name;
  const readMe: string = await fetchProjectReadme(name);

  return (
    <main className="space-y-2">
      <ProjectPage project_name={name} />
      <Suspense fallback={<>Loading ReadMe...</>}>
        <article className="px-4 py-12 mx-auto text-white">
          <MDXRemote
            source={readMe}
            options={{ mdxOptions: { format: "md" } }}
          />
        </article>
      </Suspense>
    </main>
  );
}
