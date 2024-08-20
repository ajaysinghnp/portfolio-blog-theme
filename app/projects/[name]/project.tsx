"use client";

import { Header } from "./header";
import { fetchProject } from "@/lib/projects";
import { Project } from "@/types/github";
import useSWR from "swr";

interface Props {
  project_name: string;
}

const ProjectPage = ({ project_name }: Props) => {
  const { data: project, error, isLoading } = useSWR<Project | null>(project_name, fetchProject);

  if (error) return <div className="relative bg-black h-dvh flex justify-center items-center">Something happened while fetching project details...</div>;
  if (isLoading) return <div className="relative bg-black h-dvh flex justify-center items-center">Loading...</div>;
  if (!project) return <div className="relative bg-black h-dvh flex justify-center items-center">Project not found...</div>;

  return (
    <article>
      <Header project={project} views={5} />
      <article className="px-4 py-12 mx-auto text-white">
        <code>{project.description}</code>
      </article>
    </article>
  );
};

export default ProjectPage;
