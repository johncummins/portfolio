"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/johncummins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Github className="h-5 w-5" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/johncummins3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>

            <a
              href="https://medium.com/@johncummins1997"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
              <ExternalLink className="h-5 w-5" />
              Medium
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div>© {currentYear} John Cummins</div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/johncummins/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Github className="h-3 w-3" />
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
