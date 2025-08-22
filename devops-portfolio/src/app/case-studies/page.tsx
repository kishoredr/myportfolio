import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainLayout } from "@/components/main-layout";
import { Animated, StaggerContainer } from "@/components/animations";

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "eks-platform",
    title: "EKS Multi-Environment Platform",
    description: "Building a complete EKS platform with automated deployments, monitoring, and cost optimization across multiple environments.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["AWS", "EKS", "Terraform", "GitOps"],
    featured: true
  },
  {
    slug: "landing-zone",
    title: "Multi-Account AWS Landing Zone",
    description: "Designing and implementing a secure, compliant multi-account AWS environment with centralized governance and monitoring.",
    date: "2023-11-20",
    readTime: "15 min read",
    tags: ["AWS", "Terraform", "Security", "Compliance"],
    featured: true
  },
  {
    slug: "disaster-recovery",
    title: "Automated Disaster Recovery Solution",
    description: "Building automated disaster recovery with cross-region replication and automated failover procedures achieving 15-minute RTO.",
    date: "2023-09-10",
    readTime: "10 min read",
    tags: ["AWS", "Disaster Recovery", "Automation"],
    featured: false
  },
  {
    slug: "cost-optimization",
    title: "Cloud Cost Optimization Strategy",
    description: "Implementing comprehensive cost optimization strategies that achieved $2M+ annual savings while improving performance.",
    date: "2023-07-05",
    readTime: "8 min read",
    tags: ["AWS", "Cost Optimization", "FinOps"],
    featured: false
  }
];

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <MainLayout>
      <div className="section-padding">
        <div className="container">
          {/* Header */}
          <Animated variant="fadeInUp" className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into real-world DevOps projects, challenges solved, 
              and measurable outcomes achieved.
            </p>
          </Animated>

          {/* Featured Case Studies */}
          {featuredStudies.length > 0 && (
            <div className="mb-16">
              <Animated variant="fadeInUp" className="mb-8">
                <h2 className="text-2xl font-bold">Featured Case Studies</h2>
              </Animated>
              
              <StaggerContainer className="grid md:grid-cols-2 gap-8">
                {featuredStudies.map((study) => (
                  <Animated key={study.slug} variant="scaleIn">
                    <Card className="hover-lift h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">Featured</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(study.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                        <p className="text-muted-foreground">{study.description}</p>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {study.readTime}
                          </div>
                          <Button asChild>
                            <Link href={`/case-studies/${study.slug}`}>
                              Read Study <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Animated>
                ))}
              </StaggerContainer>
            </div>
          )}

          {/* Other Case Studies */}
          {otherStudies.length > 0 && (
            <div>
              <Animated variant="fadeInUp" className="mb-8">
                <h2 className="text-2xl font-bold">More Case Studies</h2>
              </Animated>
              
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherStudies.map((study) => (
                  <Animated key={study.slug} variant="fadeInUp">
                    <Card className="hover-lift h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(study.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <CardTitle className="text-lg">{study.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{study.description}</p>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {study.readTime}
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/case-studies/${study.slug}`}>
                              Read <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Animated>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}