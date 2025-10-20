import PageLayout from "../components/PageLayout";
import Articles from "../components/Articles";

export default function WritingPage() {
  return (
    <PageLayout>
      <article>
        <header className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts on frontend development, design, and technology.
          </p>
        </header>

        <section className="mt-16">
          <Articles />
        </section>
      </article>
    </PageLayout>
  );
}
