"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RoughNotationWrapper } from "@/lib/roughNotationHelpers";

export default function Hero() {
  const [showNotation, setShowNotation] = useState(false);

  useEffect(() => {
    // Trigger rough notation animation after component mounts
    const timer = setTimeout(() => setShowNotation(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header>
        <h1 className="text-4xl font-semibold tracking-tight mb-1">
          {/* TODO: Replace with actual name */}
          Hello, I&apos;m John.
        </h1>

        <h2 className="text-2xl text-slate-500 font-normal ">
          {/* TODO: Replace with actual title and location */}A{" "}
          <RoughNotationWrapper show={showNotation} delay={0}>
            Frontend Developer
          </RoughNotationWrapper>{" "}
          based in Cambridge.
        </h2>
      </header>

      {/* Description Section */}
      <section className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4 mb-8">
        {/* TODO: Replace with actual description */}I work with modern
        technologies to create exceptional user experiences. I specialize in
        React , UI Design , and Performance optimization.
        <div className="mt-6">
          <Link href="/about">
            <Button className="text-base bg-black text-white hover:bg-gray-800">
              Learn more about me
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}


