import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <article>
        <header className="space-y-8">
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="text-lg text-black max-w-2xl">
            I&apos;m always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about
            frontend development, feel free to reach out.
          </p>
        </header>

        <section className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <nav className="space-y-4" aria-label="Contact links">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:johncummins1997@gmail.com"
                  className="text-black hover:text-gray-600 transition-colors">
                  johncummins1997@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/johncummins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors">
                  github.com/johncummins
                </a>
              </div>
            </nav>

            <nav className="space-y-4" aria-label="Social media links">
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/johncummins3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors">
                  linkedin.com/in/johncummins3
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Medium</p>
                <a
                  href="https://medium.com/@johncummins1997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors">
                  @johncummins1997
                </a>
              </div>
            </nav>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
