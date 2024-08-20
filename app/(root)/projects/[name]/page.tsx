import "./mdx.css";
import { Project } from "@/types/github";
import { fetchProjects } from "@/lib/projects";
import ProjectPage from "./project";

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
  return (
    <main className="space-y-2">
      <ProjectPage project_name={name} />
    </main>
  );
}
