"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { createRoughNotation } from "@/lib/roughNotationHelpers";

export default function Hero() {
  const [showNotation, setShowNotation] = useState(false);

  useEffect(() => {
    // Trigger rough notation animation after component mounts
    const timer = setTimeout(() => setShowNotation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          {/* Navigation */}
          <nav className="flex justify-center space-x-8 mb-16">
            <a
              href="#projects"
              className="text-black hover:text-gray-600 transition-colors duration-200">
              Projects
            </a>
            <a
              href="#articles"
              className="text-black hover:text-gray-600 transition-colors duration-200">
              Writing
            </a>
            <a
              href="#contact"
              className="text-black hover:text-gray-600 transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight">
            {/* TODO: Replace with actual name */}
            Hello, I&apos;m John.
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl text-slate-500 font-normal ">
            {/* TODO: Replace with actual title and location */}A Frontend
            Developer from Ireland based in Cambridge.
          </h2>

          {/* Description with rough notation */}
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4 mb-8">
            {/* TODO: Replace with actual description */}I work with modern
            technologies to create exceptional user experiences. I specialize in{" "}
            {showNotation && createRoughNotation("React")},
            {showNotation && createRoughNotation("UI Design")}, and
            {showNotation && createRoughNotation("Performance")} optimization.
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium">
              View my work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
