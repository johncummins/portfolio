"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button asChild variant="ghost" size="sm">
              <a
                href="https://github.com/johncummins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button asChild variant="ghost" size="sm">
              <a
                href="https://linkedin.com/in/johncummins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button asChild variant="ghost" size="sm">
              <a
                href="https://medium.com/@johncummins1997"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Medium
              </a>
            </Button>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div>© {currentYear} John Cummins</div>

              <div className="flex items-center gap-4">
                <Button asChild variant="ghost" size="sm">
                  <a
                    href="https://github.com/johncummins/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs">
                    <Github className="h-3 w-3" />
                    View Source
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
