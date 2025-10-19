export interface Article {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: string;
  readTime?: string;
  publishedOn: string;
}

// TODO: Add actual article data here
export const articles: Article[] = [
  // Example structure - replace with actual articles
  // {
  //   id: "article-1",
  //   title: "Article Title",
  //   summary: "Brief summary of the article content",
  //   url: "https://medium.com/@username/article-slug",
  //   date: "2024-01-01",
  //   readTime: "5 min read",
  //   publishedOn: "Medium"
  // }
];
