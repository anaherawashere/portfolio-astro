export interface ProjectProps {
  date: string;
  title: string;
  description: string;
  company?: string;
  image: string;
  href: string[];
  tech: string[];
  selected: boolean;
}

export interface JobProps {
  role: string;
  company: string;
  description: string;
  href: string;
  tech: string[];
}

export interface Project {
  frontmatter: ProjectProps;
}

export interface Job {
  frontmatter: JobProps;
}
