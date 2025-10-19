import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { projects } from "@/app/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>

              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(project.date)}</span>
                </div>

                {project.featured && (
                  <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-full">
                    Featured Project
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}

              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  About this project
                </h2>
                <div className="prose prose-neutral max-w-none">
                  {/* TODO: Replace with actual project description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Live Site
                      </a>
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
