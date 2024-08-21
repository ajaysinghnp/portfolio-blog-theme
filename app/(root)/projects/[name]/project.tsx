"use client";

import { Header } from "./header";
import { fetchProject, fetchProjectReadme } from "@/lib/projects";
import { Project } from "@/types/github";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from 'next-mdx-remote/serialize'
import { useState } from "react";
import useSWR from "swr";

interface Props {
  project_name: string;
}

const ProjectPage = ({ project_name }: Props) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult>();
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

  if (!r_isLoading && !r_error && readMe) {
    serialize(readMe).then((source) => setMdxSource(source));
  }

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
      <article className="px-4 py-12 mx-auto text-white">
        {readMe && mdxSource && <MDXRemote {...mdxSource} />}
      </article>
    </article>
  );
};

export default ProjectPage;
