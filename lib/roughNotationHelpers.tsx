import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export const RoughNotationWrapper = ({
  children,
  show,
  type = "highlight",
  delay = 0,
}: {
  children: string;
  show: boolean;
  type?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<ReturnType<typeof annotate> | null>(null);

  useEffect(() => {
    if (ref.current && show && !annotationRef.current) {
      const timer = setTimeout(() => {
        try {
          annotationRef.current = annotate(ref.current!, {
            type: type as
              | "highlight"
              | "underline"
              | "box"
              | "circle"
              | "strike-through"
              | "crossed-off"
              | "bracket",
            color: "#64748b20", // Very light slate-500 with low opacity for subtle effect
            strokeWidth: 2,
            padding: 4,
            animationDuration: 1200, // slower, smoother animation
            iterations: 1,
          });
          annotationRef.current.show();
        } catch (error) {
          console.warn("Failed to create rough notation:", error);
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [show, type, delay]);

  // Clean up annotation when component unmounts
  useEffect(() => {
    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove?.();
      }
    };
  }, []);

  return <span ref={ref}>{children}</span>;
};
