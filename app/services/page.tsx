import { motion } from "framer-motion"
import { Check, ArrowRight, Clock, Users, Target, Zap, Shield, DollarSign } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: 1,
    title: "Platform Review & Assessment",
    description: "Comprehensive evaluation of your current infrastructure, identifying optimization opportunities and security gaps.",
    duration: "2-3 weeks",
    deliverables: [
      "Infrastructure health assessment",
      "Security and compliance review",
      "Performance optimization recommendations",
      "Cost analysis and savings opportunities",
      "Migration roadmap and timeline",
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "Security Tools"],
    price: "Starting at $5,000",
    icon: Target,
  },
  {
    id: 2,
    title: "Cost Optimization & Resource Management",
    description: "Analyze and optimize your cloud spending while maintaining performance and reliability.",
    duration: "1-2 weeks",
    deliverables: [
      "Cost analysis and breakdown",
      "Resource utilization optimization",
      "Automated cost controls implementation",
      "Reserved instance and savings plan recommendations",
      "Ongoing cost monitoring setup",
    ],
    technologies: ["AWS Cost Explorer", "Lambda", "CloudWatch", "Terraform"],
    price: "Starting at $3,000",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Kubernetes Hardening & Security",
    description: "Implement enterprise-grade security controls and compliance frameworks for your Kubernetes clusters.",
    duration: "2-4 weeks",
    deliverables: [
      "Pod security policies implementation",
      "Network policies and RBAC setup",
      "Secrets management integration",
      "Compliance framework alignment",
      "Security monitoring and alerting",
    ],
    technologies: ["Kubernetes", "OPA", "Falco", "Helm", "Terraform"],
    price: "Starting at $4,000",
    icon: Shield,
  },
  {
    id: 4,
    title: "CI/CD Pipeline Optimization",
    description: "Redesign and optimize your deployment pipelines for faster, more reliable releases.",
    duration: "2-3 weeks",
    deliverables: [
      "Pipeline architecture review",
      "Build and test optimization",
      "Deployment automation improvements",
      "Monitoring and alerting integration",
      "Documentation and runbooks",
    ],
    technologies: ["GitHub Actions", "Jenkins", "ArgoCD", "Prometheus"],
    price: "Starting at $4,500",
    icon: Zap,
  },
  {
    id: 5,
    title: "Observability Stack Implementation",
    description: "Build comprehensive monitoring, logging, and alerting systems for your infrastructure and applications.",
    duration: "3-4 weeks",
    deliverables: [
      "Monitoring architecture design",
      "Prometheus and Grafana setup",
      "Log aggregation and analysis",
      "Custom metrics and dashboards",
      "Alerting and incident response",
    ],
    technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
    price: "Starting at $6,000",
    icon: Target,
  },
  {
    id: 6,
    title: "Disaster Recovery & Backup Strategy",
    description: "Design and implement robust backup and disaster recovery solutions for business continuity.",
    duration: "2-3 weeks",
    deliverables: [
      "DR strategy and architecture design",
      "Automated backup implementation",
      "Recovery testing procedures",
      "RTO/RPO optimization",
      "Documentation and runbooks",
    ],
    technologies: ["Velero", "AWS Backup", "S3 Cross-Region", "Lambda"],
    price: "Starting at $5,500",
    icon: Shield,
  },
]

const process = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description: "Understanding your current infrastructure, challenges, and goals through detailed analysis.",
    icon: Target,
  },
  {
    step: 2,
    title: "Design & Planning",
    description: "Creating detailed architecture and implementation plans tailored to your specific needs.",
    icon: Users,
  },
  {
    step: 3,
    title: "Implementation",
    description: "Executing the plan with best practices, automation, and comprehensive testing.",
    icon: Zap,
  },
  {
    step: 4,
    title: "Validation & Handover",
    description: "Thorough testing, documentation, and knowledge transfer to your team.",
    icon: Check,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechStartup Inc.",
    content: "The platform review helped us identify 30% cost savings and significantly improved our security posture.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "DevOps Lead",
    company: "Enterprise Solutions",
    content: "The Kubernetes hardening project exceeded our expectations. Our security score improved from 65% to 95%.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Engineering Manager",
    company: "CloudFirst Corp",
    content: "The CI/CD optimization reduced our deployment time by 80% and eliminated deployment failures.",
    rating: 5,
  },
]

export default function ServicesPage() {
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
              Professional Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Expert DevOps consulting and implementation services to help you build, 
              optimize, and secure your infrastructure. From assessment to implementation, 
              I deliver measurable results.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What I Offer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive DevOps services designed to solve real infrastructure challenges
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Investment:</span>
                          <span className="font-medium">{service.price}</span>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Deliverables</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start space-x-2">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-2">
                        <Button asChild className="w-full" size="sm">
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
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
                How I Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A proven process that ensures successful project delivery and measurable results
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">{step.step}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
                What Clients Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Real feedback from organizations I've helped transform
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title} at {testimonial.company}
                        </div>
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
              Ready to transform your infrastructure?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss your challenges and create a plan to achieve your DevOps goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  View My Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}