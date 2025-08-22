import { motion } from "framer-motion"
import { Download, Calendar, MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const principles = [
  {
    title: "Infrastructure as Code",
    description: "Everything in version control, reproducible deployments, and automated provisioning.",
    icon: "🏗️"
  },
  {
    title: "Observability First",
    description: "Comprehensive monitoring, logging, and alerting before scaling.",
    icon: "📊"
  },
  {
    title: "Security by Design",
    description: "Security integrated into every layer, not bolted on afterward.",
    icon: "🔒"
  },
  {
    title: "Cost Optimization",
    description: "Right-sizing resources, reserved instances, and continuous cost monitoring.",
    icon: "💰"
  }
]

const timeline = [
  {
    year: "2023 - Present",
    title: "Senior DevOps Engineer",
    company: "Tech Company",
    description: "Leading cloud migration, implementing GitOps workflows, and optimizing infrastructure costs."
  },
  {
    year: "2021 - 2023",
    title: "DevOps Engineer",
    company: "Startup",
    description: "Built CI/CD pipelines, managed Kubernetes clusters, and implemented monitoring solutions."
  },
  {
    year: "2019 - 2021",
    title: "Site Reliability Engineer",
    company: "Enterprise",
    description: "Improved system reliability, automated incident response, and reduced MTTR by 60%."
  },
  {
    year: "2017 - 2019",
    title: "Systems Administrator",
    company: "Mid-size Company",
    description: "Managed on-premise infrastructure, implemented backup strategies, and automated routine tasks."
  }
]

const howIWork = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your current infrastructure, pain points, and business objectives."
  },
  {
    step: "02",
    title: "Design",
    description: "Architecting solutions that balance performance, cost, and maintainability."
  },
  {
    step: "03",
    title: "Infrastructure as Code",
    description: "Writing Terraform modules, Helm charts, and automation scripts."
  },
  {
    step: "04",
    title: "CI/CD",
    description: "Building robust pipelines for automated testing and deployment."
  },
  {
    step: "05",
    title: "Observability",
    description: "Implementing comprehensive monitoring, logging, and alerting."
  },
  {
    step: "06",
    title: "Cost Controls",
    description: "Setting up budgets, alerts, and optimization strategies."
  }
]

export default function AboutPage() {
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
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              I'm a DevOps engineer passionate about building reliable, scalable infrastructure 
              that enables teams to ship faster and more confidently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Building the Future of Infrastructure
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    With over 5 years of experience in DevOps and SRE, I've helped organizations 
                    transform their infrastructure from manual, error-prone processes to automated, 
                    reliable systems that scale with their business.
                  </p>
                  <p>
                    My expertise spans the entire cloud-native stack: from designing multi-account 
                    AWS architectures to implementing GitOps workflows with Kubernetes and ArgoCD. 
                    I believe in the power of automation to reduce toil and increase reliability.
                  </p>
                  <p>
                    When I'm not optimizing infrastructure or writing Terraform modules, you'll find 
                    me contributing to open source projects, sharing knowledge at meetups, or 
                    exploring new technologies that can solve real-world problems.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>your.email@example.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex space-x-4">
                  <Link href="https://github.com/yourusername" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="https://twitter.com/yourusername" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-8">
                  <div className="h-full w-full rounded-xl bg-muted/50 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4">
                  <Button asChild>
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              My Principles
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The core values that guide my approach to infrastructure and automation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 mx-auto max-w-6xl"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{principle.icon}</span>
                        <CardTitle className="text-lg">{principle.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How I Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A systematic approach to infrastructure and automation projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 mx-auto max-w-6xl"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {howIWork.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {step.step}
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Professional Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My path from systems administration to DevOps engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 mx-auto max-w-4xl"
          >
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-primary">{item.year}</div>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                      <div className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</div>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-12 h-8 w-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}