import type { Job, Project } from "../types/interfaces";

export function sortProjects(projects: Project[]) {
  return projects.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

export function sortJobs(jobs: Job[]) {
  return jobs.sort((a, b) => new Date(b.frontmatter.startDate).getTime() - new Date(a.frontmatter.startDate).getTime());
};