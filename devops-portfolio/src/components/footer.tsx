import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Rss } from "lucide-react";

import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Content",
    links: [
      { name: "Experience", href: "/experience" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Open Source", href: "/open-source" },
      { name: "Talks & Writing", href: "/talks-writing" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Resume", href: "/resume" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "RSS Feed", href: "/rss.xml" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-bold">DE</span>
              </div>
              <span className="font-bold">DevOps Engineer</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Specializing in AWS EKS, Terraform, and production reliability.
              Building scalable infrastructure and automation solutions.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevOps Engineer. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/rss.xml" className="hover:text-foreground transition-colors flex items-center">
              <Rss className="h-3 w-3 mr-1" />
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}