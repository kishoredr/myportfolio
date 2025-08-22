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
    description: "Migrated monolithic application to Kubernetes with automated load balancing and GitOps deployment.",
    outcome: "Reduced deployment time by 10x, achieved 99.95% SLO, and cut infrastructure costs by 40%.",
    stack: ["AWS EKS", "Terraform", "Helm", "ArgoCD", "Prometheus"],
    tags: ["AWS", "EKS", "Terraform", "CI/CD", "Performance"],
    metrics: {
      deploymentSpeed: "10x faster",
      slo: "99.95%",
      costSavings: "40% reduction"
    },
    links: {
      github: "https://github.com/yourusername/project-1",
      caseStudy: "/case-studies/eks-migration"
    },
    featured: true
  },
  {
    id: 2,
    title: "Terraform Multi-Account Landing Zone",
    description: "Designed and implemented secure AWS multi-account architecture with automated provisioning.",
    outcome: "Established secure foundation for 50+ development teams, reduced provisioning time from weeks to hours.",
    stack: ["Terraform", "AWS Organizations", "AWS Control Tower", "GitHub Actions"],
    tags: ["AWS", "Terraform", "Security", "Cost-Optimization"],
    metrics: {
      provisioningTime: "Hours vs weeks",
      teamsSupported: "50+",
      securityScore: "95/100"
    },
    links: {
      github: "https://github.com/yourusername/project-2",
      caseStudy: "/case-studies/landing-zone"
    },
    featured: true
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description: "Built comprehensive CI/CD pipelines with automated testing, security scanning, and deployment.",
    outcome: "Eliminated manual deployments, reduced production incidents by 80%, and enabled daily releases.",
    stack: ["GitHub Actions", "Docker", "Kubernetes", "SonarQube", "ArgoCD"],
    tags: ["CI/CD", "Security", "Performance", "Automation"],
    metrics: {
      incidentReduction: "80%",
      releaseFrequency: "Daily",
      deploymentSuccess: "99.8%"
    },
    links: {
      github: "https://github.com/yourusername/project-3"
    }
  },
  {
    id: 4,
    title: "Cost Optimization & Monitoring",
    description: "Implemented comprehensive cost monitoring and optimization strategies across cloud infrastructure.",
    outcome: "Achieved $2.5M in annual cost savings while maintaining performance and reliability.",
    stack: ["AWS Cost Explorer", "Grafana", "Python", "Terraform", "Lambda"],
    tags: ["Cost-Optimization", "AWS", "Monitoring", "Automation"],
    metrics: {
      annualSavings: "$2.5M",
      resourceOptimization: "35%",
      costVisibility: "100%"
    },
    links: {
      github: "https://github.com/yourusername/project-4"
    }
  },
  {
    id: 5,
    title: "Security Hardening & Compliance",
    description: "Implemented security best practices, compliance monitoring, and automated security scanning.",
    outcome: "Achieved SOC 2 compliance, reduced security vulnerabilities by 90%, and implemented zero-trust architecture.",
    stack: ["AWS Security Hub", "OPA", "Falco", "Terraform", "GitHub Actions"],
    tags: ["Security", "Compliance", "AWS", "Automation"],
    metrics: {
      vulnerabilityReduction: "90%",
      complianceScore: "SOC 2",
      securityIncidents: "0"
    },
    links: {
      github: "https://github.com/yourusername/project-5"
    }
  },
  {
    id: 6,
    title: "Observability & Monitoring Platform",
    description: "Built centralized monitoring, logging, and alerting platform for distributed microservices.",
    outcome: "Reduced MTTR by 70%, improved system visibility, and enabled proactive incident response.",
    stack: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "AlertManager"],
    tags: ["Observability", "Monitoring", "Performance", "Microservices"],
    metrics: {
      mttrReduction: "70%",
      systemVisibility: "100%",
      alertAccuracy: "95%"
    },
    links: {
      github: "https://github.com/yourusername/project-6"
    }
  },
  {
    id: 7,
    title: "Disaster Recovery & Backup Strategy",
    description: "Implemented comprehensive disaster recovery and automated backup solutions across multi-region infrastructure.",
    outcome: "Achieved RTO of 15 minutes and RPO of 5 minutes, ensuring business continuity.",
    stack: ["AWS S3", "AWS Glacier", "Terraform", "Lambda", "CloudWatch"],
    tags: ["Disaster Recovery", "AWS", "Backup", "Automation"],
    metrics: {
      rto: "15 minutes",
      rpo: "5 minutes",
      backupSuccess: "99.99%"
    },
    links: {
      github: "https://github.com/yourusername/project-7"
    }
  },
  {
    id: 8,
    title: "Performance Optimization & Scaling",
    description: "Optimized application performance and implemented auto-scaling strategies for high-traffic applications.",
    outcome: "Improved response times by 60%, handled 10x traffic increase, and reduced infrastructure costs by 25%.",
    stack: ["AWS Auto Scaling", "CloudFront", "ALB", "Terraform", "Prometheus"],
    tags: ["Performance", "AWS", "Scaling", "Cost-Optimization"],
    metrics: {
      responseTime: "60% improvement",
      trafficHandling: "10x increase",
      costReduction: "25%"
    },
    links: {
      github: "https://github.com/yourusername/project-8"
    }
  }
]

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

export default function PortfolioPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    
    setSelectedTags(newTags)
    
    if (newTags.length === 0) {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.some(tag => newTags.includes(tag))
      ))
    }
  }

  const clearFilters = () => {
    setSelectedTags([])
    setFilteredProjects(projects)
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A collection of DevOps projects showcasing infrastructure automation, cloud migrations, 
              and reliability engineering solutions that drive real business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Filter by Technology</h2>
                <p className="text-sm text-muted-foreground">
                  {filteredProjects.length} of {projects.length} projects
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                disabled={selectedTags.length === 0}
              >
                Clear Filters
              </Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary/80"
                  onClick={() => toggleTag(tag)}
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
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
                className="text-center py-12"
              >
                <p className="text-lg text-muted-foreground">
                  No projects match the selected filters. Try adjusting your selection.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`h-full card-hover ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            {project.featured && (
                              <Badge variant="secondary" className="mt-2">
                                Featured Project
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Outcome */}
                        <div className="p-3 bg-primary/5 rounded-lg">
                          <p className="text-sm font-medium text-primary">
                            <strong>Outcome:</strong> {project.outcome}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-muted/50 rounded">
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-sm font-semibold text-foreground">{value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Stack */}
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex space-x-2">
                            {project.links.github && (
                              <Button asChild variant="outline" size="sm">
                                <Link href={project.links.github} target="_blank">
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </Link>
                              </Button>
                            )}
                            {project.links.caseStudy && (
                              <Button asChild variant="outline" size="sm">
                                <Link href={project.links.caseStudy}>
                                  <ArrowUpRight className="mr-2 h-4 w-4" />
                                  Case Study
                                </Link>
                              </Button>
                            )}
                          </div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build something similar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can help you implement similar solutions for your infrastructure 
              and automation needs.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}