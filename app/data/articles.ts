export interface Article {
  id: string;
  title: string;
  url: string;
  date: string;
  readTime?: string;
  publishedOn: string;
}

export const articles: Article[] = [
  {
    id: "react-legacy-integration",
    title: "How I Integrated React into Our Legacy MVC App Without a Rewrite",
    url: "https://medium.com/@johncummins1997/how-i-integrated-react-into-our-legacy-mvc-app-without-a-rewrite-3846e2f46490",
    date: "2025-05-03",
    readTime: "4 min read",
    publishedOn: "Medium",
  },
  {
    id: "css-grid-modern-layouts",
    title: "Building Modern Layouts with CSS Grid: A Complete Guide",
    url: "https://example.com/css-grid-modern-layouts",
    date: "2024-02-20",
    readTime: "12 min read",
    publishedOn: "Dev.to",
  },
];
