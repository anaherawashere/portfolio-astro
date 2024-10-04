import type { Project, ProjectProps } from "../types/interfaces";

export default function sortByDateDescending(projects: Project[]) {
  return projects.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};
