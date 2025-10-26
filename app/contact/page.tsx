import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <article>
        <header className="space-y-8">
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get in touch to discuss your next project.
          </p>
        </header>

        <section className="mt-16 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                I&apos;m always interested in new opportunities and
                collaborations. Whether you have a project in mind or just want
                to chat about frontend development, feel free to reach out.
              </p>
              <address className="space-y-2 not-italic">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:johncummins1997@gmail.com"
                  className="text-black hover:text-gray-600 transition-colors">
                  johncummins1997@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-4">Phone</p>
                <a
                  href="tel:+447846136013"
                  className="text-black hover:text-gray-600 transition-colors">
                  +44 7846 13 6013
                </a>
                <p className="text-sm text-muted-foreground mt-4">Website</p>
                <a
                  href="http://johncummins.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors">
                  johncummins.info
                </a>
              </address>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">Connect</h2>
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
            </section>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
