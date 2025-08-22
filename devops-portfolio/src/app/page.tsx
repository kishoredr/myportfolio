import Link from "next/link";
import { 
  Download, 
  Mail, 
  ArrowRight,
  Cloud,
  Container,
  GitBranch,
  BarChart3,
  Server
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/main-layout";
import { StatBadge } from "@/components/stat-badge";
import { TechLogoStrip } from "@/components/tech-logo";
import { Animated, StaggerContainer } from "@/components/animations";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
    description: "DevOps & SRE"
  },
  {
    value: "50+",
    label: "Projects Deployed",
    description: "Production Systems"
  },
  {
    value: "99.95%",
    label: "Uptime SLO",
    description: "Maintained"
  },
  {
    value: "$2M+",
    label: "Cost Savings",
    description: "Infrastructure Optimization"
  },
  {
    value: "1000+",
    label: "Deployments",
    description: "Automated"
  }
];

const technologies = [
  { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
  { name: "Kubernetes", icon: <Container className="w-5 h-5" /> },
  { name: "Terraform", icon: <Server className="w-5 h-5" /> },
  { name: "Docker", icon: <Container className="w-5 h-5" /> },
  { name: "GitHub Actions", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Prometheus", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Grafana", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Helm", icon: <Container className="w-5 h-5" /> },
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Animated variant="fadeInUp" className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                DevOps Engineer
                <br />
                <span className="text-gradient">
                  focused on EKS, Terraform,
                </span>
                <br />
                and production reliability
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Specializing in AWS cloud infrastructure, Kubernetes orchestration, 
                and building scalable CI/CD pipelines that deliver results.
              </p>
            </Animated>

            <Animated variant="fadeInUp" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/resume">
                  <Download className="w-4 h-4" />
                  View Resume
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Link>
              </Button>
            </Animated>

            {/* Quick Stats */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
              {stats.map((stat, index) => (
                <Animated key={index} variant="scaleIn">
                  <StatBadge
                    value={stat.value}
                    label={stat.label}
                    description={stat.description}
                  />
                </Animated>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center space-y-8">
            <Animated variant="fadeInUp" className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Technology Stack
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tools and technologies I work with to build reliable, 
                scalable infrastructure and automation solutions.
              </p>
            </Animated>

            <Animated variant="fadeInUp" delay={0.2}>
              <TechLogoStrip technologies={technologies} />
            </Animated>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <Animated variant="fadeInUp" className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Infrastructure</h3>
              <p className="text-muted-foreground">
                Cloud-native infrastructure design and implementation 
                with Infrastructure as Code best practices.
              </p>
              <Button variant="ghost" asChild>
                <Link href="/portfolio">
                  View Projects <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Animated>

            <Animated variant="fadeInUp" className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">CI/CD</h3>
              <p className="text-muted-foreground">
                Automated deployment pipelines that ensure fast, 
                reliable, and secure software delivery.
              </p>
              <Button variant="ghost" asChild>
                <Link href="/case-studies">
                  Case Studies <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Animated>

            <Animated variant="fadeInUp" className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Observability</h3>
              <p className="text-muted-foreground">
                Comprehensive monitoring, logging, and alerting 
                systems for proactive issue resolution.
              </p>
              <Button variant="ghost" asChild>
                <Link href="/experience">
                  Experience <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </Animated>
          </StaggerContainer>
        </div>
      </section>
    </MainLayout>
  );
}
