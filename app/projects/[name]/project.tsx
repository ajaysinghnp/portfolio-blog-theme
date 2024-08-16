"use client";

import { useEffect } from "react";
import { Header } from "./header";
import { fetchProject } from "@/lib/projects";
import { Project } from "@/types/github";

interface Props {
  project_name: string;
}

const ProjectPage = ({ project_name }: Props) => {
  const [project, setProject] = useState()
  useEffect(() => {
    (async () => {
      const p: Project | null = await fetchProject(project_name);
      p ? setProject(p) : console.log("No Projects")
    })();
  })
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={5} />
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <code>
          {"project.description"}
        </code>
      </article>
    </div>
  )
}

export default ProjectPage;

function useState(): [any, any] {
  throw new Error("Function not implemented.");
}
