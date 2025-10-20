"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Personal Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Below is a selection of recent projects that I've worked on.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <div key={project.id}>
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
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex space-x-2">
                            {project.githubUrl && (
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="h-8 w-8 p-0 hover:bg-accent/10">
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {project.liveUrl && (
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="h-8 w-8 p-0 hover:bg-accent/10">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack &&
                            project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                                {tech}
                              </span>
                            ))}
                        </div>

                        {/* Project Link */}
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                          <Link href={`/projects/${project.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="text-muted-foreground">
                  <h3 className="text-xl font-medium mb-2">No projects yet</h3>
                  <p>Projects will appear here once added to the data file.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
