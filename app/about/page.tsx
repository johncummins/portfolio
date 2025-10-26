"use client";

import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <article>
        {/* Hero Section */}
        <header>
          <h1 className="text-4xl font-semibold tracking-tight mb-1">
            About Me
          </h1>
        </header>

        {/* Profile Section */}
        <section className="text-lg md:text-xl text-black max-w-2xl leading-relaxed mt-4 mb-8">
          <p className="mb-6">
            Frontend developer with 4 years&apos; experience in a fast-paced
            startup, building scalable, high-quality applications with
            JavaScript, React, and Next.js using modern tools like TanStack
            Query, Zustand and Tailwind CSS.
          </p>

          <p className="mb-6">
            I specialize in delivering responsive, accessible frontend solutions
            for production applications, working closely with stakeholders and
            cross-functional teams to bring ideas to life through clean,
            maintainable code and thoughtful user interfaces.
          </p>

          <p className="mb-6">
            Beyond my core development work, I enjoy mentoring junior
            developers, defining frontend best practices, and contributing to
            open-source projects. When I&apos;m not coding, I&apos;m training
            for triathlons, exploring new places through travel, or working on
            personal projects that solve real-world problems.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-medium tracking-tight mb-6">
            Work Experience
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-1">
                Frontend Developer
              </h3>
              <p className="text-sm text-slate-500 mb-1">
                cThings, Cambridge, UK (2022 - Present)
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Deliver scalable, responsive frontend solutions for the main
                    IoT platform (1,200 active users) and other customer-led
                    projects, using React, Next.js, and modern JavaScript.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Build interactive dashboards and data visualisations (React
                    Flow, Highcharts) to monitor 146,000+ IoT devices, with a
                    focus on writing clean, readable, and maintainable code.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Collaborate with directors and backend team to ensure
                    smooth, reliable feature delivery for customers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Mentor junior developers and define frontend best practices,
                    improving consistency and maintainability.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-medium tracking-tight mb-6">Skills</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-1">
                Frontend Development
              </h3>
              <p className="text-muted-foreground">
                JavaScript (ES6+), TypeScript, HTML5, CSS3, Responsive Web
                Design
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-1">
                Libraries & Frameworks
              </h3>
              <p className="text-muted-foreground">
                React, React Native, Next.js, React Flow, Highcharts, shadcn/ui,
                Vite, Tailwind
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-1">
                Data Fetching & State Management
              </h3>
              <p className="text-muted-foreground">
                TanStack Query, Zustand, React Hook Form, REST APIs, WebSockets
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-1">
                Testing & Tools
              </h3>
              <p className="text-muted-foreground">
                Cypress, Git, Figma, Chrome DevTools, Cursor, GitHub Copilot
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-medium tracking-tight mb-6">
            Education
          </h2>

          <div className="space-y-3">
            <div>
              <p className="font-medium text-slate-700">
                M.Sc. UX Design, Mobile and Web App Development
              </p>
              <p className="text-sm text-slate-500">2020 - 2021</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">
                B.Sc. Computer Science and IT
              </p>
              <p className="text-sm text-slate-500">2016 - 2020</p>
            </div>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
