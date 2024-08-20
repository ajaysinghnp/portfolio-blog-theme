"use client";

import { Header } from "./header";
import { fetchProject, fetchProjectReadme } from "@/lib/projects";
import { Project } from "@/types/github";
import useSWR from "swr";

interface Props {
  project_name: string;
}

const ProjectPage = ({ project_name }: Props) => {
  const {
    data: project,
    error: d_error,
    isLoading: d_isLoading,
  } = useSWR<Project | null>(project_name, fetchProject);
  const {
    data: readMe,
    error: r_error,
    isLoading: r_isLoading,
  } = useSWR<string | null>(project_name, fetchProjectReadme);

  if (d_error)
    return (
      <div className="relative h-dvh flex justify-center items-center">
        Something happened while fetching project details...
      </div>
    );
  if (d_isLoading)
    return (
      <div className="relative h-dvh flex justify-center items-center">
        Loading...
      </div>
    );
  if (!project)
    return (
      <div className="relative h-dvh flex justify-center items-center">
        Project not found...
      </div>
    );
  console.log(readMe);
  return (
    <article>
      <Header project={project} views={5} />
      <article className="px-4 py-12 mx-auto text-white">
        {/* {r_error && (
          <div>Something happened while fetching project details...</div>
        )}
        {r_isLoading && <div>Loading...</div>}*/}
        {readMe && <code>{readMe}</code>}
      </article>
    </article>
  );
};

export default ProjectPage;
