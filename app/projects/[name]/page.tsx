import "./mdx.css";
import { Project } from "@/types/github";
import { fetchProjects } from "@/lib/projects";
import ProjectPage from "./project";
import useSWR from "swr";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  const { data: projs, error } = useSWR<Project[]>("projects", fetchProjects);
  if (error || !projs) return [];
  return projs.map((proj) => ({ name: proj.name }));
}

export default async function ProjectLoadingPage({ params }: Props) {
  const name = params?.name;
  if (!name) return <div className="relative bg-black h-dvh flex justify-center items-center">No Projects found!</div>
  return (
    <main className="px-6 pt-8 mx-auto space-y-2 max-w-7xl lg:px-8 md:space-y-8 md:pt-8 lg:pt-16">
      <ProjectPage project_name={name} />
    </main>
  );
}