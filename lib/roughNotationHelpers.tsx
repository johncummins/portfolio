import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export const RoughNotationWrapper = ({
  children,
  show,
  type = "highlight",
}: {
  children: string;
  show: boolean;
  type?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<any>(null);

  useEffect(() => {
    if (ref.current && show && !annotationRef.current) {
      try {
        annotationRef.current = annotate(ref.current, {
          type: type as any,
          color: "#3b82f633", // Blue accent color with 20% opacity (33 in hex = ~20%)
          strokeWidth: 2,
          padding: 4,
          animationDuration: 1200, // slower, smoother animation
          iterations: 1,
        });
        annotationRef.current.show();
      } catch (error) {
        console.warn("Failed to create rough notation:", error);
      }
    }
  }, [show, type]);

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
