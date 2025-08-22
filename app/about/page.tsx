import { motion } from "framer-motion"
import { Download, Calendar, MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const principles = [
  {
    title: "Infrastructure as Code",
    description: "Everything should be version controlled, tested, and repeatable. No manual configuration in production.",
    icon: "🏗️",
  },
  {
    title: "Automation First",
    description: "If it can be automated, it should be. Focus on building systems that scale without human intervention.",
    icon: "⚡",
  },
  {
    title: "Observability Driven",
    description: "You can't improve what you can't measure. Comprehensive monitoring and alerting for all systems.",
    icon: "📊",
  },
  {
    title: "Security by Design",
    description: "Security isn't an afterthought. It's built into every layer of the infrastructure from day one.",
    icon: "🔒",
  },
  {
    title: "Cost Optimization",
    description: "Efficient resource utilization without compromising performance or reliability.",
    icon: "💰",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly. Staying current with best practices and emerging tools is essential.",
    icon: "📚",
  },
]

const timeline = [
  {
    year: "2023 - Present",
    title: "Senior DevOps Engineer",
    company: "Tech Company",
    description: "Leading infrastructure automation, EKS migrations, and CI/CD pipeline improvements.",
  },
  {
    year: "2021 - 2023",
    title: "DevOps Engineer",
    company: "Startup",
    description: "Built cloud infrastructure from scratch, implemented monitoring, and automated deployments.",
  },
  {
    year: "2019 - 2021",
    title: "Site Reliability Engineer",
    company: "Enterprise",
    description: "Maintained production systems, improved incident response, and optimized performance.",
  },
  {
    year: "2017 - 2019",
    title: "Systems Administrator",
    company: "Mid-size Company",
    description: "Managed on-premise infrastructure, virtualization, and basic automation.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                About Me
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                Passionate about building reliable, scalable infrastructure that enables teams to ship faster and sleep better.
              </p>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Who I Am</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a DevOps Engineer with over 5 years of experience building and maintaining cloud-native infrastructure. 
                    My journey started in traditional systems administration, but I quickly realized the power of automation 
                    and infrastructure as code.
                  </p>
                  <p>
                    I specialize in AWS, Kubernetes, and Terraform, with a particular focus on EKS clusters, 
                    CI/CD pipelines, and observability stacks. I believe that great infrastructure should be 
                    invisible to developers - they should be able to deploy and iterate without thinking about 
                    the underlying systems.
                  </p>
                  <p>
                    When I'm not building infrastructure, you'll find me contributing to open source projects, 
                    writing about DevOps practices, or speaking at meetups and conferences.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Quick Facts</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">5+ years in DevOps/SRE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Remote-first, US-based</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">your.email@example.com</span>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
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
                How I Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Core principles that guide my approach to infrastructure and automation
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principle.icon}</div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
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

      {/* Timeline Section */}
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
                Professional Journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                My path from systems administration to DevOps engineering
              </p>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 text-sm font-medium text-primary">{item.year}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-24 top-8 h-full w-px bg-border" />
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