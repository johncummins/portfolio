import React from "react";

// Simple highlight component to replace rough notation for now
export const createRoughNotation = (text: string) => {
  return (
    <span className="bg-accent/20 px-1 rounded-sm font-medium">{text}</span>
  );
};
