import { Download, MapPin, Calendar, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/main-layout";

const principles = [
  {
    title: "Infrastructure as Code",
    description: "Everything should be version-controlled, reproducible, and automated. No manual configurations in production."
  },
  {
    title: "Observability First",
    description: "You can't improve what you can't measure. Comprehensive monitoring and logging are non-negotiable."
  },
  {
    title: "Security by Design",
    description: "Security isn't an afterthought—it's baked into every layer of the infrastructure from day one."
  },
  {
    title: "Continuous Improvement",
    description: "Always learning, always optimizing. Small, incremental improvements compound over time."
  }
];

const workflow = [
  {
    step: "1",
    title: "Discovery",
    description: "Understanding business requirements, current architecture, and pain points"
  },
  {
    step: "2",
    title: "Design",
    description: "Architecting scalable, secure, and cost-effective solutions"
  },
  {
    step: "3",
    title: "Infrastructure as Code",
    description: "Implementing with Terraform, ensuring reproducibility and version control"
  },
  {
    step: "4",
    title: "CI/CD Implementation",
    description: "Automated pipelines for testing, building, and deploying applications"
  },
  {
    step: "5",
    title: "Observability",
    description: "Comprehensive monitoring, logging, and alerting for proactive issue resolution"
  },
  {
    step: "6",
    title: "Cost Controls",
    description: "Ongoing optimization for performance and cost efficiency"
  }
];

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-xl text-muted-foreground">
              DevOps Engineer passionate about building reliable, scalable infrastructure
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose-custom">
                <h2>Hi, I&apos;m a DevOps Engineer</h2>
                <p>
                  With over 5 years of experience in cloud infrastructure and automation, 
                  I specialize in building robust, scalable systems that enable teams to 
                  deliver software faster and more reliably.
                </p>
                <p>
                  My journey started with traditional system administration, but I quickly 
                  gravitated toward the DevOps movement and cloud-native technologies. 
                  Today, I focus on AWS EKS, Terraform, and creating comprehensive 
                  observability solutions that give teams confidence in their deployments.
                </p>
                <p>
                  I believe in the power of automation, infrastructure as code, and 
                  continuous improvement. Every problem is an opportunity to build 
                  better systems and processes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Available for new opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>your.email@example.com</span>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">My Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How I Work */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How I Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflow.map((item, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Let&apos;s Build Something Great</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                                I&apos;m always interested in discussing new opportunities and challenging projects. 
              Whether you need help with cloud migration, infrastructure optimization, 
                              or building reliable deployment pipelines, let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}