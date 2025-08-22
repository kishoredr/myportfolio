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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600" />
              <span className="text-xl font-bold gradient-text">YourName</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              DevOps Engineer focused on building scalable infrastructure and automation solutions. 
              Passionate about cloud-native technologies and reliability engineering.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YourName. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/rss.xml"
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Rss className="h-4 w-4" />
                <span>RSS</span>
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}