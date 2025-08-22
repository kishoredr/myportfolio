"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Star, GitBranch, Calendar, ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - replace with actual GitHub API calls
const pinnedRepos = [
  {
    id: 1,
    name: "terraform-aws-eks",
    description: "Terraform module for creating and managing EKS clusters with best practices",
    language: "HCL",
    stars: 245,
    forks: 89,
    updated: "2024-01-15",
    url: "https://github.com/yourusername/terraform-aws-eks",
    topics: ["terraform", "aws", "kubernetes", "eks", "infrastructure"],
  },
  {
    id: 2,
    name: "helm-charts",
    description: "Collection of production-ready Helm charts for common applications",
    language: "YAML",
    stars: 156,
    forks: 34,
    updated: "2024-01-10",
    url: "https://github.com/yourusername/helm-charts",
    topics: ["helm", "kubernetes", "charts", "deployment"],
  },
  {
    id: 3,
    name: "devops-toolkit",
    description: "Collection of scripts and tools for common DevOps tasks",
    language: "Bash",
    stars: 89,
    forks: 23,
    updated: "2024-01-08",
    url: "https://github.com/yourusername/devops-toolkit",
    topics: ["bash", "automation", "devops", "scripts"],
  },
  {
    id: 4,
    name: "monitoring-stack",
    description: "Complete monitoring solution with Prometheus, Grafana, and AlertManager",
    language: "YAML",
    stars: 134,
    forks: 45,
    updated: "2024-01-05",
    url: "https://github.com/yourusername/monitoring-stack",
    topics: ["prometheus", "grafana", "monitoring", "kubernetes"],
  },
]

const recentContributions = [
  {
    id: 1,
    repo: "kubernetes/kubernetes",
    type: "Pull Request",
    title: "Fix EKS node group scaling issue",
    status: "merged",
    date: "2024-01-12",
    url: "https://github.com/kubernetes/kubernetes/pull/12345",
  },
  {
    id: 2,
    repo: "hashicorp/terraform",
    type: "Issue",
    title: "Documentation improvement for EKS module",
    status: "closed",
    date: "2024-01-10",
    url: "https://github.com/hashicorp/terraform/issues/67890",
  },
  {
    id: 3,
    repo: "prometheus/prometheus",
    type: "Pull Request",
    title: "Add support for custom metrics in EKS",
    status: "open",
    date: "2024-01-08",
    url: "https://github.com/prometheus/prometheus/pull/11111",
  },
  {
    id: 4,
    repo: "helm/helm",
    type: "Issue",
    title: "Feature request: Better EKS integration",
    status: "open",
    date: "2024-01-05",
    url: "https://github.com/helm/helm/issues/22222",
  },
]

const stats = [
  { label: "Repositories", value: "25+", icon: Github },
  { label: "Stars Earned", value: "624", icon: Star },
  { label: "Forks", value: "191", icon: GitBranch },
  { label: "Contributions", value: "150+", icon: Calendar },
]

export default function OpenSourcePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading open source contributions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Open Source
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Contributing to the DevOps ecosystem and sharing knowledge through open source projects. 
              Building tools that help teams deploy faster and more reliably.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="gradient">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pinned Repositories */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                My most popular and impactful open source contributions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {pinnedRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{repo.name}</CardTitle>
                          <p className="text-muted-foreground text-sm mb-3">{repo.description}</p>
                        </div>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors ml-4"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Stats */}
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitBranch className="h-4 w-4" />
                          <span>{repo.forks}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Updated {repo.updated}</span>
                        </div>
                      </div>

                      {/* Language */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Language:</span>
                        <Badge variant="secondary">{repo.language}</Badge>
                      </div>

                      {/* Topics */}
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {repo.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-2">
                        <Button asChild className="w-full" size="sm">
                          <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Repository
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Contributions */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Recent Contributions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Latest pull requests, issues, and contributions to the open source community
              </p>
            </div>

            <div className="space-y-4">
              {recentContributions.map((contribution, index) => (
                <motion.div
                  key={contribution.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge 
                              variant={contribution.status === 'merged' ? 'default' : 
                                     contribution.status === 'open' ? 'secondary' : 'outline'}
                            >
                              {contribution.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{contribution.type}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-1">{contribution.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{contribution.repo}</span>
                            <span>•</span>
                            <span>{contribution.date}</span>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Want to collaborate?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm always open to new contributions, collaborations, and ideas for open source projects.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="gradient">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Follow on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}