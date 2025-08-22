import { motion } from "framer-motion"
import { Calendar, MapPin, Building, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    title: "Senior DevOps Engineer",
    company: "Tech Company Inc.",
    location: "Remote",
    period: "2023 - Present",
    description: "Leading infrastructure automation and cloud migration initiatives for a growing SaaS platform.",
    achievements: [
      "Led EKS migration project reducing deployment time by 10x and achieving 99.95% uptime",
      "Implemented multi-account AWS landing zone supporting 50+ development teams",
      "Reduced infrastructure costs by 30% through automated resource optimization",
      "Mentored 3 junior engineers and established DevOps best practices across the organization",
    ],
    technologies: ["AWS EKS", "Terraform", "Helm", "Prometheus", "GitHub Actions"],
    impact: {
      deployments: "10x faster",
      uptime: "99.95%",
      costSavings: "$500K/year",
      teamSize: "15 engineers",
    },
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    description: "Built cloud infrastructure from scratch and established CI/CD practices for a fast-growing startup.",
    achievements: [
      "Designed and implemented complete AWS infrastructure using Infrastructure as Code",
      "Built CI/CD pipelines reducing deployment failures by 80%",
      "Implemented comprehensive monitoring with Prometheus and Grafana",
      "Established security best practices and compliance frameworks",
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    impact: {
      deployments: "50/day",
      failures: "80% reduction",
      securityScore: "95%",
      provisioningTime: "5 minutes",
    },
  },
  {
    id: 3,
    title: "Site Reliability Engineer",
    company: "Enterprise Corp",
    location: "New York, NY",
    period: "2019 - 2021",
    description: "Maintained production systems and improved incident response for enterprise applications.",
    achievements: [
      "Reduced MTTR by 70% through improved monitoring and alerting",
      "Implemented automated incident response and runbook automation",
      "Optimized database performance improving response times by 40%",
      "Established SLO/SLI frameworks and error budget management",
    ],
    technologies: ["Linux", "Docker", "Prometheus", "Grafana", "MySQL", "Python"],
    impact: {
      mttr: "70% reduction",
      performance: "40% improvement",
      uptime: "99.9%",
      incidents: "60% reduction",
    },
  },
  {
    id: 4,
    title: "Systems Administrator",
    company: "MidSize Solutions",
    location: "Austin, TX",
    period: "2017 - 2019",
    description: "Managed on-premise infrastructure and began implementing automation practices.",
    achievements: [
      "Managed 200+ servers across multiple data centers",
      "Implemented virtualization strategy reducing hardware costs by 25%",
      "Automated routine maintenance tasks saving 20 hours per week",
      "Established backup and disaster recovery procedures",
    ],
    technologies: ["Linux", "VMware", "Ansible", "Bash", "Nagios", "MySQL"],
    impact: {
      servers: "200+",
      costReduction: "25%",
      timeSaved: "20 hours/week",
      backupSuccess: "99.9%",
    },
  },
]

export default function ExperiencePage() {
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
              Professional Experience
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              My journey through DevOps and infrastructure engineering, 
              with a focus on measurable impact and continuous improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-muted/30">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl">{experience.title}</CardTitle>
                          <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/portfolio?tags=${experience.technologies[0]}`}>
                              View Related Work
                              <ArrowUpRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid gap-6 lg:grid-cols-3">
                        {/* Description & Achievements */}
                        <div className="lg:col-span-2 space-y-4">
                          <p className="text-muted-foreground">{experience.description}</p>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Technologies & Impact */}
                        <div className="space-y-6">
                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Impact Metrics */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Impact</h4>
                            <div className="space-y-3">
                              {Object.entries(experience.impact).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                                  <span className="text-sm text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </span>
                                  <span className="text-sm font-medium text-foreground">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Evolution */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
              Skills Evolution
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🏗️</div>
                  <h3 className="font-semibold">Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">On-prem → Cloud → IaC</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold">Automation</h3>
                  <p className="text-sm text-muted-foreground">Manual → Scripts → CI/CD</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h3 className="font-semibold">Monitoring</h3>
                  <p className="text-sm text-muted-foreground">Reactive → Proactive → Predictive</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h3 className="font-semibold">Security</h3>
                  <p className="text-sm text-muted-foreground">Basic → Compliance → Zero Trust</p>
                </CardContent>
              </Card>
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to discuss opportunities?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm always interested in new challenges and opportunities to make an impact.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Get In Touch
                  <ArrowUpRight className="ml-2 h-4 w-4" />
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