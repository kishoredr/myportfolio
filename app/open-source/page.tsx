"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Star, GitBranch, Eye, Calendar, ExternalLink, Code, Users } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for demonstration - replace with actual GitHub API integration
const pinnedRepos = [
  {
    id: 1,
    name: "terraform-aws-eks-cluster",
    description: "Terraform module for creating production-ready EKS clusters with best practices",
    language: "HCL",
    stars: 245,
    forks: 89,
    watchers: 12,
    updatedAt: "2024-01-15",
    topics: ["terraform", "aws", "eks", "kubernetes", "infrastructure"],
    url: "https://github.com/yourusername/terraform-aws-eks-cluster",
    featured: true
  },
  {
    id: 2,
    name: "kubernetes-monitoring-stack",
    description: "Complete monitoring solution for Kubernetes using Prometheus, Grafana, and AlertManager",
    language: "YAML",
    stars: 189,
    forks: 67,
    watchers: 8,
    updatedAt: "2024-01-10",
    topics: ["kubernetes", "monitoring", "prometheus", "grafana", "observability"],
    url: "https://github.com/yourusername/kubernetes-monitoring-stack"
  },
  {
    id: 3,
    name: "devops-automation-tools",
    description: "Collection of scripts and tools for common DevOps tasks and automation",
    language: "Python",
    stars: 156,
    forks: 43,
    watchers: 6,
    updatedAt: "2024-01-08",
    topics: ["devops", "automation", "python", "scripts", "tools"],
    url: "https://github.com/yourusername/devops-automation-tools"
  },
  {
    id: 4,
    name: "helm-charts",
    description: "Production-ready Helm charts for common applications and services",
    language: "YAML",
    stars: 134,
    forks: 38,
    watchers: 5,
    updatedAt: "2024-01-05",
    topics: ["helm", "kubernetes", "charts", "deployment"],
    url: "https://github.com/yourusername/helm-charts"
  },
  {
    id: 5,
    name: "security-scanning-pipeline",
    description: "Automated security scanning and vulnerability assessment for CI/CD pipelines",
    language: "Shell",
    stars: 98,
    forks: 29,
    watchers: 4,
    updatedAt: "2024-01-03",
    topics: ["security", "ci-cd", "vulnerability", "scanning", "automation"],
    url: "https://github.com/yourusername/security-scanning-pipeline"
  },
  {
    id: 6,
    name: "cost-optimization-tools",
    description: "Tools and scripts for AWS cost optimization and resource management",
    language: "Python",
    stars: 87,
    forks: 25,
    watchers: 3,
    updatedAt: "2024-01-01",
    topics: ["aws", "cost-optimization", "python", "automation", "finops"],
    url: "https://github.com/yourusername/cost-optimization-tools"
  }
]

const recentContributions = [
  {
    id: 1,
    repo: "kubernetes/kubernetes",
    type: "Pull Request",
    title: "Fix EKS node group scaling issue",
    status: "merged",
    date: "2024-01-12",
    url: "https://github.com/kubernetes/kubernetes/pull/12345"
  },
  {
    id: 2,
    repo: "hashicorp/terraform",
    type: "Issue",
    title: "Documentation improvement for EKS module",
    status: "closed",
    date: "2024-01-10",
    url: "https://github.com/hashicorp/terraform/issues/67890"
  },
  {
    id: 3,
    repo: "prometheus/prometheus",
    type: "Pull Request",
    title: "Add support for custom metrics in EKS",
    status: "open",
    date: "2024-01-08",
    url: "https://github.com/prometheus/prometheus/pull/11111"
  },
  {
    id: 4,
    repo: "grafana/grafana",
    type: "Issue",
    title: "Feature request: EKS dashboard templates",
    status: "open",
    date: "2024-01-05",
    url: "https://github.com/grafana/grafana/issues/22222"
  }
]

const stats = {
  totalRepos: 25,
  totalStars: 1200,
  totalForks: 450,
  totalContributions: 89,
  languages: ["HCL", "Python", "YAML", "Shell", "Go", "JavaScript"],
  topTopics: ["terraform", "kubernetes", "aws", "devops", "monitoring", "security"]
}

export default function OpenSourcePage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("")
  const [filteredRepos, setFilteredRepos] = useState(pinnedRepos)

  useEffect(() => {
    if (selectedTopic) {
      setFilteredRepos(pinnedRepos.filter(repo => 
        repo.topics.includes(selectedTopic)
      ))
    } else {
      setFilteredRepos(pinnedRepos)
    }
  }, [selectedTopic])

  const clearFilter = () => {
    setSelectedTopic("")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Github className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Open Source Contributions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Contributing to the DevOps and cloud-native ecosystem through open source projects, 
              tools, and community engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{stats.totalRepos}</div>
                <div className="text-sm text-muted-foreground">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{stats.totalStars}</div>
                <div className="text-sm text-muted-foreground">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{stats.totalForks}</div>
                <div className="text-sm text-muted-foreground">Forks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{stats.totalContributions}</div>
                <div className="text-sm text-muted-foreground">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{stats.languages.length}</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{stats.topTopics.length}</div>
                <div className="text-sm text-muted-foreground">Topics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pinned Repositories */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My most popular and impactful open source contributions
            </p>
          </motion.div>

          {/* Filter */}
          <div className="mx-auto max-w-6xl mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-foreground">Filter by topic:</span>
              {stats.topTopics.map((topic) => (
                <Badge
                  key={topic}
                  variant={selectedTopic === topic ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary/80"
                  onClick={() => setSelectedTopic(selectedTopic === topic ? "" : topic)}
                >
                  {topic}
                </Badge>
              ))}
              {selectedTopic && (
                <Button variant="outline" size="sm" onClick={clearFilter}>
                  Clear Filter
                </Button>
              )}
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="mx-auto max-w-6xl">
            {filteredRepos.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-muted-foreground">
                  No repositories match the selected topic. Try adjusting your filter.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {filteredRepos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`h-full card-hover ${repo.featured ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl">{repo.name}</CardTitle>
                              {repo.featured && (
                                <Badge variant="secondary">Featured</Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground">{repo.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Topics */}
                        <div className="flex flex-wrap gap-2">
                          {repo.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              <span>{repo.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitBranch className="h-4 w-4" />
                              <span>{repo.forks}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{repo.watchers}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{repo.updatedAt}</span>
                          </div>
                        </div>

                        {/* Language */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Code className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{repo.language}</span>
                          </div>
                          <Button asChild variant="outline" size="sm">
                            <Link href={repo.url} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recent Contributions */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Recent Contributions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Latest pull requests, issues, and contributions to the open source community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-4xl"
          >
            <div className="space-y-4">
              {recentContributions.map((contribution, index) => (
                <motion.div
                  key={contribution.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge 
                              variant={contribution.status === 'merged' ? 'default' : 
                                     contribution.status === 'open' ? 'secondary' : 'outline'}
                            >
                              {contribution.status}
                            </Badge>
                            <Badge variant="outline">{contribution.type}</Badge>
                            <span className="text-sm text-muted-foreground">{contribution.repo}</span>
                          </div>
                          <h3 className="font-medium text-foreground">{contribution.title}</h3>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{contribution.date}</span>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={contribution.url} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                          </Link>
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

      {/* Community Involvement */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Community Involvement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Beyond code contributions, I'm actively involved in the DevOps and cloud-native communities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-6xl"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Meetup Speaker</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Regular speaker at DevOps and cloud-native meetups, sharing knowledge and experiences
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Code Reviews</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Active code reviewer for various open source projects, helping maintain code quality
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Documentation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Contributing to documentation improvements and helping new contributors get started
                  </p>
                </CardContent>
              </Card>
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Want to collaborate?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm always open to new open source collaborations, whether it's contributing to existing 
              projects or starting new ones together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://github.com/yourusername" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View My GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Let's Collaborate
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}