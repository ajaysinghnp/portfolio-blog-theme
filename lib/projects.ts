import { GIT_USERNAME, Project, Repo } from "@/types/github";
import axios from "axios";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${GIT_USERNAME}/repos`
    );
    return data.map((repo: Repo) => ({
      name: repo.name,
      title: repo.name,
      url: repo.html_url,
      description: repo.description,
      date: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at,
      private: repo.private,
      published: true,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchProject = async (slug: string): Promise<Project | null> => {
  try {
    const { data: repo } = await axios.get(
      `https://api.github.com/repos/${GIT_USERNAME}/${slug}`
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
    console.error(`Error fetching project [${slug}]: ${error}`);
    return null;
  }
};
