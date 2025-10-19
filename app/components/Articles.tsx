"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { articles } from "@/app/data/articles";

export default function Articles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}>
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Writing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* TODO: Replace with actual description */}
              Thoughts and insights on frontend development, design, and
              technology.
            </p>
          </motion.div>

          {/* Articles List */}
          <motion.div variants={containerVariants} className="space-y-6">
            {articles.length === 0 ? (
              // Empty state with placeholder structure
              <motion.div variants={itemVariants} className="text-center py-20">
                <div className="text-muted-foreground">
                  <h3 className="text-xl font-medium mb-2">No articles yet</h3>
                  <p>Articles will appear here once added to the data file.</p>
                </div>
              </motion.div>
            ) : (
              articles.map((article) => (
                <motion.div key={article.id} variants={itemVariants}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Article Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {article.summary}
                          </p>

                          {/* Meta Information */}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                Published on {formatDate(article.date)}
                              </span>
                            </div>

                            {article.readTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                              </div>
                            )}

                            <span className="text-accent">
                              {article.publishedOn}
                            </span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <div className="flex-shrink-0">
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2">
                              Read More
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>

          {/* View More Button */}
          {articles.length > 0 && (
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Button variant="outline" size="lg">
                {/* TODO: Replace with actual Medium profile link */}
                View More Posts →
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
