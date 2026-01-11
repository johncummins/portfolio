"use client";

import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { projects } from "../data/projects";
import { JOB_TITLE } from "../data/constants";

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
        <section className="text-lg text-black max-w-2xl leading-relaxed mt-4 mb-8">
          <p className="mb-6">
            {JOB_TITLE} with over 4 years&apos; experience building and owning
            scalable web and mobile applications in a fast-paced startup
            environment. I lead frontend architecture and UX delivery using
            React, React Native, Next.js, and TypeScript.
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
                Lead Frontend Engineer
              </h3>
              <p className="text-lg text-slate-500 mb-1">
                cThings, Cambridge, UK (2022 - Present)
              </p>
              <p className="text-lg text-black mb-3">
                I lead frontend architecture and technical direction for the
                core IoT platform, shaping UX and defining patterns and
                standards across web and mobile applications. Since 2025, I’ve
                taken on lead responsibility for frontend technical direction,
                defining patterns and standards and shaping the overall user
                experience of the platform.
              </p>
              <ul className="space-y-2 text-lg text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Delivered scalable, responsive frontend solutions for the
                    main IoT platform (1,200 active users) and customer-led
                    projects using React, Next.js, and TypeScript.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Built a React Native Android kiosk app for secure Tap-to-Pay
                    payments using Stripe and NFC/RFID meter top-ups, supporting
                    6,000 service points.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Built interactive dashboards and data visualisations (React
                    Flow, Highcharts) to monitor 146,000+ IoT devices, focusing
                    on performance, maintainability, and clarity.
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
              <h3 className="text-lg font-medium text-black mb-1">
                Frontend &amp; Mobile Development
              </h3>
              <p className="text-muted-foreground">
                React, React Native, Next.js, TypeScript, JavaScript
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black mb-1">
                Data &amp; State Management
              </h3>
              <p className="text-muted-foreground">
                TanStack Query, Zustand, REST APIs, WebSockets
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black mb-1">
                Data Visualisation
              </h3>
              <p className="text-muted-foreground">Highcharts</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black mb-1">
                UX &amp; Delivery
              </h3>
              <p className="text-muted-foreground">Figma, Cypress, Git</p>
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

        {/* Personal Projects Section */}
        <section className="mt-16 mb-16">
          <h2 className="text-2xl font-medium tracking-tight mb-6">
            Personal Projects
          </h2>

          <div className="space-y-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group block">
                  <div className="pb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-black group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>
                      <svg
                        className="ml-4 w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
