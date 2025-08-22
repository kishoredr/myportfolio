import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, TrendingUp, Clock, DollarSign, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Years Experience",
    value: "5+",
    icon: Clock,
    description: "Building production systems"
  },
  {
    label: "Projects Delivered",
    value: "50+",
    icon: TrendingUp,
    description: "Infrastructure & automation"
  },
  {
    label: "Uptime Achieved",
    value: "99.95%",
    icon: Zap,
    description: "Production reliability"
  },
  {
    label: "Cost Savings",
    value: "$2.5M",
    icon: DollarSign,
    description: "Infrastructure optimization"
  }
]

const tools = [
  { name: "AWS", logo: "☁️" },
  { name: "Kubernetes", logo: "⚓" },
  { name: "Terraform", logo: "🏗️" },
  { name: "Helm", logo: "⚙️" },
  { name: "Docker", logo: "🐳" },
  { name: "GitHub Actions", logo: "🚀" },
  { name: "Prometheus", logo: "📊" },
  { name: "Grafana", logo: "📈" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                DevOps Engineer focused on{" "}
                <span className="gradient-text">EKS, Terraform,</span> and{" "}
                <span className="gradient-text">production reliability</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                Building scalable infrastructure and automation solutions that drive business value. 
                From cloud migrations to CI/CD pipelines, I help teams ship faster and more reliably.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <Button asChild size="lg" className="group">
                <Link href="/resume">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{stat.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
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
              Technologies & Tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Building robust solutions with modern cloud-native technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="text-4xl">{tool.logo}</div>
                  <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build something amazing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can help you scale your infrastructure, automate your deployments, 
              or optimize your cloud costs.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}