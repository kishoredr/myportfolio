"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink, Github, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainLayout } from "@/components/main-layout";

interface Project {
  title: string;
  description: string;
  outcome: string;
  metrics: string[];
  technologies: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

const projects: Project[] = [
  {
    title: "EKS Multi-Environment Platform",
    description: "Built a complete EKS platform with automated deployments across dev, staging, and production environments using Terraform and GitOps.",
    outcome: "Reduced deployment time by 85% and achieved 99.95% uptime SLO",
    metrics: ["99.95% uptime", "85% faster deployments", "40% cost reduction"],
    technologies: ["AWS EKS", "Terraform", "ArgoCD", "Helm", "Prometheus"],
    tags: ["AWS", "EKS", "Terraform", "CI/CD", "Cost-Optimization"],
    githubUrl: "https://github.com/yourusername/eks-platform",
    caseStudyUrl: "/case-studies/eks-platform"
  },
  {
    title: "Multi-Account Landing Zone",
    description: "Designed and implemented a secure, compliant multi-account AWS landing zone with centralized logging and monitoring.",
    outcome: "Standardized security across 50+ AWS accounts with automated compliance",
    metrics: ["50+ accounts", "100% compliance", "60% faster onboarding"],
    technologies: ["Terraform", "AWS Organizations", "CloudTrail", "GuardDuty"],
    tags: ["AWS", "Terraform", "Security", "Compliance"],
    githubUrl: "https://github.com/yourusername/aws-landing-zone",
    caseStudyUrl: "/case-studies/landing-zone"
  },
  {
    title: "Microservices CI/CD Pipeline",
    description: "Built a comprehensive CI/CD pipeline for 20+ microservices with automated testing, security scanning, and blue-green deployments.",
    outcome: "Increased deployment frequency by 10x while maintaining zero-downtime releases",
    metrics: ["10x deployment frequency", "Zero downtime", "95% test coverage"],
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "SonarQube"],
    tags: ["CI/CD", "Microservices", "Security", "Performance"],
    githubUrl: "https://github.com/yourusername/microservices-pipeline"
  },
  {
    title: "Observability Stack Implementation",
    description: "Implemented comprehensive observability with Prometheus, Grafana, and ELK stack across all production environments.",
    outcome: "Reduced MTTR by 70% and prevented 15+ production incidents",
    metrics: ["70% faster MTTR", "15+ incidents prevented", "100% service coverage"],
    technologies: ["Prometheus", "Grafana", "Elasticsearch", "Kibana", "Jaeger"],
    tags: ["Observability", "Monitoring", "Performance"],
    liveUrl: "https://monitoring.example.com"
  },
  {
    title: "Cost Optimization Initiative",
    description: "Implemented automated cost optimization strategies including right-sizing, scheduled scaling, and resource cleanup.",
    outcome: "Achieved $2M+ annual cost savings while improving performance",
    metrics: ["$2M+ savings", "35% cost reduction", "20% performance improvement"],
    technologies: ["AWS Cost Explorer", "Lambda", "CloudWatch", "Terraform"],
    tags: ["AWS", "Cost-Optimization", "Automation"],
    githubUrl: "https://github.com/yourusername/cost-optimization"
  },
  {
    title: "Disaster Recovery Automation",
    description: "Built automated disaster recovery solution with cross-region replication and automated failover procedures.",
    outcome: "Achieved RTO of 15 minutes and RPO of 5 minutes for critical systems",
    metrics: ["15min RTO", "5min RPO", "99.99% data integrity"],
    technologies: ["AWS", "Terraform", "Lambda", "RDS", "S3"],
    tags: ["AWS", "Disaster Recovery", "Automation"],
    caseStudyUrl: "/case-studies/disaster-recovery"
  },
  {
    title: "Security Compliance Automation",
    description: "Automated security compliance checks and remediation using AWS Config, Security Hub, and custom Lambda functions.",
    outcome: "Achieved 100% compliance score with automated remediation",
    metrics: ["100% compliance", "90% automated remediation", "50% faster audits"],
    technologies: ["AWS Config", "Security Hub", "Lambda", "CloudFormation"],
    tags: ["Security", "Compliance", "Automation"],
    githubUrl: "https://github.com/yourusername/security-automation"
  },
  {
    title: "Container Registry & Scanning",
    description: "Implemented secure container registry with automated vulnerability scanning and image signing workflows.",
    outcome: "Eliminated critical vulnerabilities in production containers",
    metrics: ["Zero critical CVEs", "100% image scanning", "Automated remediation"],
    technologies: ["ECR", "Trivy", "Cosign", "GitHub Actions"],
    tags: ["Security", "Containers", "CI/CD"],
    githubUrl: "https://github.com/yourusername/container-security"
  }
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

export default function PortfolioPage() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [showFilters, setShowFilters] = React.useState(false);

  const filteredProjects = selectedTags.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <MainLayout>
      <div className="section-padding">
        <div className="container">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                             A collection of DevOps projects and infrastructure solutions I&apos;ve built, 
              showcasing real-world impact and measurable results.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''}
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <div className="p-4 border rounded-lg bg-muted/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Filter by technology:</span>
                  {selectedTags.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/90"
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover-lift flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Outcome:</h4>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.metrics.map((metric, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Link>
                      </Button>
                    )}
                    {project.caseStudyUrl && (
                      <Button size="sm" asChild>
                        <Link href={project.caseStudyUrl}>
                          Case Study
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No projects found matching the selected filters.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}