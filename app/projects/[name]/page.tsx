import axios from "axios";
import { useEffect, useState } from "react";

import { Header } from "./header";
import "./mdx.css";
import { GIT_USERNAME, Project } from "@/types/github";


type Props = {
  params: {
    slug: string;
  };
};

async function fetchProject() {
  try {
    const { data: repo } = await axios.get(
      `https://api.github.com/repos/${GIT_USERNAME}/blog`
    );

    return {
      id: repo.id,
      name: repo.name,
      title: repo.name,
      url: repo.html_url,
      description: repo.description,
      date: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at,
      private: repo.private,
      published: true,
    };
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams(name: string): Promise<Props["params"][]> {
  const proj = await fetchProject();
  return proj ? [{ slug: proj.name }] : [];
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  // const [project, setProject] = useState<Project>();

  // useEffect(() => {
  //   fetchProject();
  // }, []);

  // if (!project) {
  //   return <h1>No Content Found!</h1>
  // }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={5} />
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <code>
          {project.description}
        </code>
      </article>
    </div>
  );
}