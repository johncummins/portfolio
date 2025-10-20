import PageLayout from "../components/PageLayout";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <article>
        <header className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my recent work and side projects.
          </p>
        </header>

        <section className="mt-16">
          <Projects />
        </section>
      </article>
    </PageLayout>
  );
}
