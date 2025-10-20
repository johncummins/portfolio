"use client";

import { articles } from "@/app/data/articles";

export default function Articles() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="mt-16">
      {/* Section Header */}
      <h2 className="text-2xl font-medium tracking-tight mb-6">Writing</h2>

      {/* Articles List */}
      <div className="divide-y divide-slate-200">
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <a
              key={article.id}
              className="flex flex-col gap-4 py-8 first:pt-0"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer">
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl tracking-tight">
                  {article.title}
                </h2>
                <span className="text-slate-500 text-sm tracking-tight font-mono block mt-2">
                  Published on{" "}
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                </span>
                <p className="mt-2 text-slate-700 text-base">
                  {article.readTime} • {article.publishedOn}
                </p>
              </div>
            </a>
          ))
        ) : (
          <div className="text-center py-20">
            <div className="text-muted-foreground">
              <h3 className="text-xl font-medium mb-2">No articles yet</h3>
              <p>Articles will appear here once added to the data file.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
