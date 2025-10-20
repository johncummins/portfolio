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

export const projects: Project[] = [
  {
    id: "cambridge-bins",
    title: "Cambridge Bins",
    description:
      "A web application to help Cambridge residents track bin collection schedules and get reminders for waste disposal.",
    longDescription:
      "Cambridge Bins is a community-focused web application designed to help residents of Cambridge stay organized with their waste collection schedules. The app provides personalized bin collection reminders, tracks different waste types (general waste, recycling, garden waste), and sends notifications to ensure residents never miss a collection.\n\nThe project was built to solve a real local problem - many residents struggle to remember which bins to put out and when. The application integrates with Cambridge City Council's collection schedule API and provides a clean, mobile-first interface that works seamlessly across all devices.\n\nKey features include:\n- Personalized collection schedules\n- SMS and email reminders\n- Multiple waste type tracking\n- Mobile-responsive design\n- Integration with council APIs\n- Offline schedule viewing",
    image: "/images/projects/camrbidge-bins.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Twilio SMS",
      "SendGrid",
    ],
    liveUrl: "https://cambridge-bins.vercel.app",
    githubUrl: "https://github.com/username/cambridge-bins",
    featured: true,
    date: "2024-02-10",
  },
  {
    id: "task-manager-app",
    title: "Task Manager Pro",
    description:
      "A modern, full-stack task management application with real-time collaboration features, built with Next.js and TypeScript.",
    longDescription:
      "Task Manager Pro is a comprehensive productivity application designed to help teams and individuals organize their work efficiently. The application features a clean, intuitive interface with drag-and-drop functionality for task organization, real-time updates using WebSocket connections, and advanced filtering options.\n\nThe project was built as a learning exercise to explore modern web development practices, including server-side rendering with Next.js, type safety with TypeScript, and responsive design with Tailwind CSS. Key challenges included implementing real-time synchronization across multiple users and optimizing performance for large task lists.\n\nNotable features include:\n- Drag-and-drop task reordering\n- Real-time collaboration\n- Advanced search and filtering\n- Dark/light mode toggle\n- Mobile-responsive design\n- Offline support with service workers",
    image: "/next.svg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "WebSockets",
      "React Query",
    ],
    liveUrl: "https://task-manager-pro-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager-pro",
    featured: false,
    date: "2024-01-15",
  },
];
