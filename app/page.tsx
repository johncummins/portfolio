"use client";

import PageLayout from "./components/PageLayout";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Projects />
      <Articles />
    </PageLayout>
  );
}
