"use client";

import axios from "axios";
import { Header } from "./header";
import "./mdx.css";
import { useEffect, useState } from "react";
import { GIT_USERNAME, Project } from "@/types/github";

export default async function PostPage() {
  const slug = "blog";

  const [project, setProject] = useState<Project>();

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data: repo } = await axios.get(
          `https://api.github.com/repos/${GIT_USERNAME}/${slug}`
        );

        setProject({
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
        });
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProject();
  }, []);

  if (!project) {
    return <h1>No Content Found!</h1>
  }

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