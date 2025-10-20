"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import { RoughNotationWrapper } from "@/lib/roughNotationHelpers";

export default function About() {
  const [showNotation, setShowNotation] = useState(false);

  useEffect(() => {
    // Trigger rough notation animation after component mounts
    const timer = setTimeout(() => setShowNotation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <article>
        {/* Hero Section */}
        <header>
          <h1 className="text-4xl font-semibold tracking-tight mb-1">
            About Me
          </h1>

          <h2 className="text-2xl text-slate-500 font-normal">
            A{" "}
            <RoughNotationWrapper show={showNotation} delay={0}>
              Frontend Developer
            </RoughNotationWrapper>{" "}
            passionate about creating exceptional digital experiences.
          </h2>
        </header>

        {/* Description Section */}
        <section className="text-lg md:text-xl text-black max-w-2xl leading-relaxed mt-4 mb-8">
          <p className="mb-6">
            I work with modern technologies to create exceptional user
            experiences. I specialize in React , UI Design , and Performance
            optimization .
          </p>

          <p className="mb-6">
            With a keen eye for design and a passion for clean, efficient code,
            I bring ideas to life through thoughtful user interfaces and
            seamless interactions. I believe in the power of technology to solve
            real-world problems and create meaningful connections.
          </p>

          <p className="mb-6">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-medium tracking-tight mb-6">
            Skills & Technologies
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-3">
                Frontend Development
              </h3>
              <p className="text-muted-foreground">
                React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind
                CSS
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-3">
                Design & UX
              </h3>
              <p className="text-muted-foreground">
                UI/UX Design, Figma, Responsive Design, Accessibility, User
                Research
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-slate-700 mb-3">
                Performance & Tools
              </h3>
              <p className="text-muted-foreground">
                Performance Optimization, Web Vitals, Git, Testing, CI/CD
              </p>
            </div>
          </div>
        </section>
      </article>
    </PageLayout>
  );
}
