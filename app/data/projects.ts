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
    title: "Cambridge Bin Collection",
    description:
      "A React Native app to track Cambridge bin collection schedules with timely reminders.",
    longDescription:
      "Cambridge Bin Collection is a React Native mobile app that helps Cambridge residents track their bin collection schedules with timely reminders. The app fetches real-time bin schedules from the Cambridge City Council API and implements local notifications to provide timely reminders, improving user engagement.\n\nBuilt with a focus on responsive, intuitive UI with smooth flows, the app enhances accessibility and usability for Cambridge residents. The project solves a real local problem by ensuring residents never miss a collection and always put out the right bins.\n\nKey features include:\n- Real-time bin schedules from Cambridge City Council API\n- Local notifications for timely reminders\n- Responsive, intuitive UI\n- Smooth user flows",
    image: "/images/projects/camrbidge-bins.png",
    techStack: ["React Native", "JavaScript", "Local Notifications"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    date: "2025-02-01",
  },
  {
    id: "find-my-bike",
    title: "Find My Bike",
    description:
      "A Next.js web app that integrates with the eBay API to locate stolen bikes by matching uploaded images.",
    longDescription:
      "Find My Bike is a Next.js web application that helps bike owners locate their stolen bikes by matching uploaded images with listings on eBay. The app integrates with the eBay API to search for matching bikes and implements daily notifications to keep users informed of new matches.\n\nThe application features a modern UI built with shadcn/ui, based on Radix principles for accessible, consistent user interactions. Users can upload an image of their stolen bike, and the system automatically searches eBay for potential matches, sending notifications when new listings appear.\n\nKey features include:\n- eBay API integration for bike matching\n- Image upload and matching functionality\n- Daily notification system for new matches\n- Modern UI with shadcn/ui components\n- Accessible design based on Radix principles",
    image: "/images/projects/find-my-bike.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "eBay API",
      "Tailwind CSS",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    date: "2025-09-01",
  },
];
