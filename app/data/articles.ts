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
    date: "2024-01-15",
    readTime: "8 min read",
    publishedOn: "Medium",
  },
];
