"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RoughNotationWrapper } from "@/lib/roughNotationHelpers";
import { JOB_TITLE } from "../data/constants";

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
          Hello, I&apos;m John.
        </h1>

        <h2 className="text-2xl text-slate-500 font-normal ">
          <RoughNotationWrapper show={showNotation} delay={0}>
            {JOB_TITLE}
          </RoughNotationWrapper>{" "}
          based in Cambridge.
        </h2>
      </header>

      {/* Description Section */}
      <section className="text-lg md:text-xl text-black max-w-2xl leading-relaxed mt-4 mb-8">
        With over 4 years&apos; experience building production web and mobile
        apps in a fast-paced startup, I lead frontend architecture and UX
        delivery, defining patterns and standards and shipping features
        end-to-end with React, React Native, and Next.js.
        <div className="mt-6">
          <Link href="/about">
            <Button className="text-base bg-black text-white hover:bg-gray-800 cursor-pointer group">
              Learn more about me
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
