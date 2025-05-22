export interface ProjectLinks {
  href: string;
  name: string;
}

export interface ProjectProps {
  company?: string;
  date: string;
  description: string;
  href: string[];
  image: string;
  links: ProjectLinks[];
  selected: boolean;
  tech: string[];
  title: string;
}

export interface Project {
  frontmatter: ProjectProps;
}

export interface JobProps {
  company: string;
  description: string;
  endDate: string;
  href: string;
  role: string;
  startDate: string;
  tech: string[];
}

export interface Job {
  frontmatter: JobProps;
}
