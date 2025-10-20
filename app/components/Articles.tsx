"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";
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
    <section id="articles" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Writing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts and insights on frontend development, design, and
              technology.
            </p>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles && articles.length > 0 ? (
              articles.map((article) => (
                <Card
                  key={article.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      {article.url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="ml-4 h-8 w-8 p-0 hover:bg-accent/10">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        {article.readTime && (
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                          {article.publishedOn}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
        </div>
      </div>
    </section>
  );
}
