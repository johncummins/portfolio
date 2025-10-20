"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "./components/PageLayout";
import Link from "next/link";
import { RoughNotationWrapper } from "@/lib/roughNotationHelpers";

export default function Home() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-1">
            {/* TODO: Replace with actual name */}
            Hello, I&apos;m John.
          </h1>

          <h2 className="text-2xl text-slate-500 font-normal ">
            {/* TODO: Replace with actual title and location */}A{" "}
            <RoughNotationWrapper show={showNotation}>
              Frontend Developer
            </RoughNotationWrapper>{" "}
            from Ireland based in Cambridge.
          </h2>
        </header>

        {/* Description Section */}
        <section className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4 mb-8">
          {/* TODO: Replace with actual description */}I work with modern
          technologies to create exceptional user experiences. I specialize in{" "}
          <RoughNotationWrapper show={showNotation}>
            React{" "}
          </RoughNotationWrapper>
          ,
          <RoughNotationWrapper show={showNotation}>
            UI Design
          </RoughNotationWrapper>
          , and{" "}
          <RoughNotationWrapper show={showNotation}>
            Performance
          </RoughNotationWrapper>{" "}
          optimization.
        </section>

        {/* Call to Action Section */}
        <section className="pt-8">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium">
              View my work
            </Button>
          </Link>
        </section>

        {/* Projects Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            Projects
          </h2>
          <p className="text-muted-foreground mb-8">
            A selection of my recent work and side projects.
          </p>
          {/* Projects will be added here */}
        </section>
      </article>
    </PageLayout>
  );
}
