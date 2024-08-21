"use client";

import { Header } from "./header";
import { fetchProject, fetchProjectReadme } from "@/lib/projects";
import { Project } from "@/types/github";
import useSWR from "swr";
import ReadMePage from "./readme";

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
  } = useSWR<string | null>(`${project_name}-readme`, fetchProjectReadme);

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

  return (
    <article>
      <Header project={project} views={5} />
      <ReadMePage
        readMe={readMe ? readMe : "# No Content Loaded yet! Please wait..."}
      />
    </article>
  );
};

export default ProjectPage;
