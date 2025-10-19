"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

export default function Projects() {
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

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}>
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Personal Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* TODO: Replace with actual description */}
              Below is a selection of recent projects that I&apos;ve worked on.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 ? (
              // Empty state with placeholder structure
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-20">
                <div className="text-muted-foreground">
                  <h3 className="text-xl font-medium mb-2">No projects yet</h3>
                  <p>Projects will appear here once added to the data file.</p>
                </div>
              </motion.div>
            ) : (
              projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1">
                            <Link href={`/projects/${project.id}`}>
                              View Details
                            </Link>
                          </Button>

                          {project.liveUrl && (
                            <Button asChild variant="ghost" size="sm">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}

                          {project.githubUrl && (
                            <Button asChild variant="ghost" size="sm">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>

          {/* View More Button */}
          {projects.length > 0 && (
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Button variant="outline" size="lg">
                {/* TODO: Replace with actual link */}
                View older projects →
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
