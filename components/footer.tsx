import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Rss } from "lucide-react"

import { cn } from "@/lib/utils"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
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
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600" />
              <span className="text-xl font-bold gradient-text">YourName</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              DevOps Engineer focused on building scalable infrastructure and automation solutions.
              Passionate about cloud-native technologies and reliability engineering.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/resume"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/open-source"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Open Source
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/talks-writing"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Talks & Writing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/rss.xml"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                    >
                      <Rss className="h-4 w-4" />
                      <span>RSS</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} YourName. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}