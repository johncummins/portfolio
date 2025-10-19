"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let&apos;s work together
            </h2>

            <div className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {/* TODO: Replace with actual about text */}
              <p>
                I&apos;m passionate about creating exceptional user experiences
                through clean code and thoughtful design. Whether you&apos;re
                looking to build a new product or improve an existing one,
                I&apos;d love to hear about your project.
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium">
                <a href="mailto:john@example.com">
                  {/* TODO: Replace with actual email */}
                  Get in touch
                </a>
              </Button>
            </div>
          </div>

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
                href="https://medium.com/@johncummins"
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
        </motion.div>
      </div>
    </footer>
  );
}
