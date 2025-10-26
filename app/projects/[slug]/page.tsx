import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import PageLayout from "@/app/components/PageLayout";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <article>
        {/* Project Header */}
        <header className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-gray-600 transition-colors mb-4 inline-block">
            ← Back
          </Link>

          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </header>

        {/* Project Image */}
        <div className="relative rounded-xl mb-8 box-shadow-project w-full overflow-hidden">
          <Image
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-xl bg-cover w-full h-auto"
            src={project.image}
          />
        </div>

        {/* Links */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {project.appStoreUrl && (
            <Button asChild variant="default" className="max-w-[200px]">
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer">
                View on App Store
              </a>
            </Button>
          )}
          {project.liveUrl && !project.appStoreUrl && (
            <Button asChild variant="default" className="max-w-[200px]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer">
                View Live Site
              </a>
            </Button>
          )}
          {project.liveUrl && project.appStoreUrl && (
            <Button asChild variant="outline" className="max-w-[200px]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer">
                View Website
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" className="max-w-[200px]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          )}
        </div>

        {/* Project Details */}
        <div className="max-w-4xl space-y-8">
          {/* Tech Stack */}
          <section>
            <h3 className="text-2xl font-medium tracking-tight mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-100 text-sm text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Main Content - About */}
          <section>
            <h3 className="text-2xl font-medium tracking-tight mb-3">About</h3>
            <div className="text-lg md:text-xl text-black leading-relaxed whitespace-pre-line">
              {project.longDescription
                .split("Key features")
                .map((part, index) => {
                  if (index === 0) return part;
                  return (
                    <span key={index}>
                      <span className="font-medium text-muted-foreground">
                        Key features
                      </span>
                      {part}
                    </span>
                  );
                })}
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
}
