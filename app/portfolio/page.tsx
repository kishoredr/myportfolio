"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, ArrowUpRight, Tag } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "EKS Migration with ALB/Ingress + Helm",
    description: "Migrated monolithic application to EKS with automated deployments, achieving 99.95% uptime and 10x faster deployments.",
    stack: ["AWS EKS", "Helm", "ALB Ingress", "Terraform", "Prometheus"],
    tags: ["AWS", "EKS", "Terraform", "CI/CD", "Performance"],
    metrics: {
      uptime: "99.95%",
      deploySpeed: "10x faster",
      costReduction: "30%",
    },
    github: "https://github.com/yourusername/eks-migration",
    caseStudy: "/case-studies/eks-migration",
    image: "🚀",
  },
  {
    id: 2,
    title: "Terraform Multi-Account Landing Zone",
    description: "Built secure, compliant AWS landing zone supporting 50+ accounts with automated account provisioning and security controls.",
    stack: ["Terraform", "AWS Organizations", "Control Tower", "Security Hub", "CloudTrail"],
    tags: ["AWS", "Terraform", "Security", "Compliance", "Multi-Account"],
    metrics: {
      accounts: "50+",
      securityScore: "95%",
      provisioningTime: "5 minutes",
    },
    github: "https://github.com/yourusername/landing-zone",
    caseStudy: "/case-studies/landing-zone",
    image: "🏗️",
  },
  {
    id: 3,
    title: "CI/CD Pipeline Optimization",
    description: "Redesigned CI/CD pipelines reducing build time by 60% and deployment failures by 80% through parallelization and caching.",
    stack: ["GitHub Actions", "Docker", "Helm", "ArgoCD", "Prometheus"],
    tags: ["CI/CD", "Performance", "Automation", "Monitoring"],
    metrics: {
      buildTime: "60% reduction",
      failures: "80% reduction",
      deployments: "50/day",
    },
    github: "https://github.com/yourusername/cicd-optimization",
    caseStudy: "/case-studies/cicd-optimization",
    image: "⚡",
  },
  {
    id: 4,
    title: "Cost Optimization & Resource Management",
    description: "Implemented automated cost controls and resource scheduling, achieving $500K annual savings while maintaining performance.",
    stack: ["AWS Cost Explorer", "Lambda", "CloudWatch", "Terraform", "Python"],
    tags: ["Cost-Optimization", "AWS", "Automation", "Monitoring"],
    metrics: {
      savings: "$500K/year",
      resourceUtilization: "85%",
      alerting: "Real-time",
    },
    github: "https://github.com/yourusername/cost-optimization",
    caseStudy: "/case-studies/cost-optimization",
    image: "💰",
  },
  {
    id: 5,
    title: "Observability Stack Implementation",
    description: "Built comprehensive monitoring solution with Prometheus, Grafana, and ELK stack, reducing MTTR by 70%.",
    stack: ["Prometheus", "Grafana", "ELK Stack", "AlertManager", "Jaeger"],
    tags: ["Observability", "Monitoring", "Performance", "Alerting"],
    metrics: {
      mttr: "70% reduction",
      coverage: "100%",
      alerts: "Smart routing",
    },
    github: "https://github.com/yourusername/observability-stack",
    caseStudy: "/case-studies/observability-stack",
    image: "📊",
  },
  {
    id: 6,
    title: "Security Hardening & Compliance",
    description: "Implemented comprehensive security controls including pod security policies, network policies, and automated compliance checks.",
    stack: ["Pod Security", "Network Policies", "OPA", "Falco", "Terraform"],
    tags: ["Security", "Compliance", "Kubernetes", "Automation"],
    metrics: {
      securityScore: "98%",
      compliance: "100%",
      vulnerabilities: "0 critical",
    },
    github: "https://github.com/yourusername/security-hardening",
    caseStudy: "/case-studies/security-hardening",
    image: "🔒",
  },
  {
    id: 7,
    title: "Disaster Recovery & Backup Strategy",
    description: "Designed and implemented automated backup and disaster recovery solution with 15-minute RTO and 1-hour RPO.",
    stack: ["Velero", "RDS Snapshots", "S3 Cross-Region", "Lambda", "CloudWatch"],
    tags: ["Disaster Recovery", "Backup", "AWS", "Automation"],
    metrics: {
      rto: "15 minutes",
      rpo: "1 hour",
      backupSuccess: "99.9%",
    },
    github: "https://github.com/yourusername/disaster-recovery",
    caseStudy: "/case-studies/disaster-recovery",
    image: "🔄",
  },
  {
    id: 8,
    title: "Performance Testing & Optimization",
    description: "Implemented automated performance testing and optimization pipeline, improving application response times by 40%.",
    stack: ["K6", "Gatling", "Prometheus", "Grafana", "Terraform"],
    tags: ["Performance", "Testing", "Automation", "Monitoring"],
    metrics: {
      responseTime: "40% improvement",
      throughput: "3x increase",
      testing: "Automated",
    },
    github: "https://github.com/yourusername/performance-testing",
    caseStudy: "/case-studies/performance-testing",
    image: "🚀",
  },
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

export default function PortfolioPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTags && matchesSearch
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSelectedTags([])
    setSearchTerm("")
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
              Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A collection of DevOps projects showcasing infrastructure automation, 
              cloud migrations, and performance optimizations that delivered measurable business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10"
                  onClick={() => toggleTag(tag)}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Clear Filters */}
            {(selectedTags.length > 0 || searchTerm) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <h3 className="text-lg font-medium text-muted-foreground">
                  No projects match your current filters.
                </h3>
                <Button variant="outline" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="text-4xl mb-2">{project.image}</div>
                          <div className="flex space-x-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                            {project.caseStudy && (
                              <Link
                                href={project.caseStudy}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Stack */}
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Key Outcomes</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-xs">
                                <span className="text-muted-foreground capitalize">{key}: </span>
                                <span className="font-medium text-foreground">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2 pt-2">
                          {project.caseStudy && (
                            <Button asChild size="sm" className="flex-1">
                              <Link href={project.caseStudy}>
                                View Case Study
                                <ArrowUpRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                          {project.github && (
                            <Button asChild variant="outline" size="sm">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
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
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can help with your next infrastructure project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Get In Touch
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/experience">
                  View Experience
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}