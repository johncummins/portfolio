import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-medium tracking-tight mb-6">Projects</h2>

      {projects.length > 0 && (
        <div className="space-y-12">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8 w-full">
                <div className="relative rounded-xl mb-4 box-shadow-project w-full">
                  <Image
                    alt={project.title}
                    width={800}
                    height={400}
                    className="rounded-xl bg-cover w-full h-auto"
                    src={project.image}
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </Link>
            ))}
        </div>
      )}
    </section>
  );
}
