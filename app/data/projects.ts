export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

// TODO: Add actual project data here
export const projects: Project[] = [
  // Example structure - replace with actual projects
  // {
  //   id: "project-1",
  //   title: "Project Title",
  //   description: "Short description of the project",
  //   longDescription: "Detailed description of the project, what it does, challenges faced, etc.",
  //   image: "/images/project-1.jpg",
  //   techStack: ["React", "TypeScript", "Tailwind CSS"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/project",
  //   featured: true,
  //   date: "2024-01-01"
  // }
];
