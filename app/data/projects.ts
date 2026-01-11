export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  motivation?: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "cambridge-bins",
    title: "Cambridge Bin Collection",
    description:
      "A React Native app built and maintained end-to-end, focusing on reliability, accessibility, and a smooth everyday user experience.",
    motivation:
      "I kept forgetting to put my bins out on collection day. When I'd finally remember, I'd have to navigate to the Cambridge City Council website and enter my postcode every single time, scrolling, a cumbersome process that became frustratingly repetitive. After speaking with friends, I discovered they experienced the same pain points, which validated the need for a better solution. I researched existing apps and found there were very few good options specifically designed for Cambridge residents, so I decided to build one myself.",
    longDescription:
      "Cambridge Bin Collection is a React Native mobile app I built and maintain end-to-end, fetching real-time bin schedules from the Cambridge City Council API and delivering reliable local notifications for everyday use. Built with a focus on responsive, intuitive UI with smooth flows, the app enhances accessibility and usability for Cambridge residents.\n\nThe app stores your postcode locally, eliminating the need to enter it repeatedly. Once set up, you'll receive notifications before collection day, ensuring you never miss putting out the right bins.",
    image: "/images/projects/camrbidge-bins.png",
    techStack: [
      "React Native",
      "Expo",
      "JavaScript",
      "Local Notifications",
    ],
    appStoreUrl: "https://apps.apple.com/gb/app/cambridge-bins/id6753903230",
    githubUrl: "",
    featured: true,
    date: "2025-02-01",
  },
  {
    id: "find-my-bike",
    title: "Find My Bike",
    description:
      "A Next.js web app built to solve a real problem, focusing on clear UX, scalable architecture, and automated alerts.",
    motivation:
      "After my bike was stolen, I found myself manually checking eBay daily, hoping to spot it among thousands of listings. The process was incredibly time-consuming, scrolling through countless bike listings with no way to search by image or set up automated alerts. Realizing there had to be a better way, I built Find My Bike to streamline this process and help others in the same situation.",
    longDescription:
      "Find My Bike is a Next.js web application I designed and built to automate the process of tracking stolen bikes, integrating with the eBay API to surface potential matches efficiently.\n\nThe application features a modern UI built with shadcn/ui, based on Radix principles for accessible, consistent user interactions. Users can upload an image of their stolen bike, and the system automatically searches eBay for potential matches. A daily notification system is currently in development.",
    image: "/images/projects/find-my-bike.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "eBay API",
      "Tailwind CSS",
    ],
    liveUrl: "https://find-my-bike-sigma.vercel.app/",
    githubUrl: "",
    featured: true,
    date: "2025-09-01",
  },
];
