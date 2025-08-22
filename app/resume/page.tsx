import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contactInfo = [
  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "Remote-first, US-based", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
  { icon: Globe, label: "Website", value: "yourdomain.com", href: "https://yourdomain.com" },
]

const skills = {
  "Cloud & Infrastructure": ["AWS EKS", "AWS ALB/NLB", "CloudFront", "DocumentDB", "RDS", "S3", "VPC", "IAM"],
  "Containers & Orchestration": ["Docker", "Kubernetes", "Helm", "Containerd", "Pod Security", "Service Mesh"],
  "Infrastructure as Code": ["Terraform", "Helm Charts", "CloudFormation", "Ansible", "Packer"],
  "CI/CD & Automation": ["GitHub Actions", "Bitbucket Pipelines", "Jenkins", "ArgoCD", "Tekton"],
  "Security & Compliance": ["IAM Policies", "KMS", "SSM Parameter Store", "Secrets Manager", "Pod Security Policies"],
  "Observability": ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "OpenTelemetry", "AlertManager"],
  "Application & Runtime": ["Node.js", "Java 17", "Python", "Go", "PNPM", "Maven"],
  "Operating Systems & Tools": ["Linux (Ubuntu/CentOS)", "Bash Scripting", "Git", "Vim/Neovim", "tmux", "systemd"],
}

const experience = [
  {
    title: "Senior DevOps Engineer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    location: "Remote",
    achievements: [
      "Led EKS migration project reducing deployment time by 10x and achieving 99.95% uptime",
      "Implemented multi-account AWS landing zone supporting 50+ development teams",
      "Reduced infrastructure costs by 30% through automated resource optimization",
      "Mentored 3 junior engineers and established DevOps best practices across the organization",
    ],
    technologies: ["AWS EKS", "Terraform", "Helm", "Prometheus", "GitHub Actions"],
  },
  {
    title: "DevOps Engineer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    location: "San Francisco, CA",
    achievements: [
      "Designed and implemented complete AWS infrastructure using Infrastructure as Code",
      "Built CI/CD pipelines reducing deployment failures by 80%",
      "Implemented comprehensive monitoring with Prometheus and Grafana",
      "Established security best practices and compliance frameworks",
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
  },
  {
    title: "Site Reliability Engineer",
    company: "Enterprise Corp",
    period: "2019 - 2021",
    location: "New York, NY",
    achievements: [
      "Reduced MTTR by 70% through improved monitoring and alerting",
      "Implemented automated incident response and runbook automation",
      "Optimized database performance improving response times by 40%",
      "Established SLO/SLI frameworks and error budget management",
    ],
    technologies: ["Linux", "Docker", "Prometheus", "Grafana", "MySQL", "Python"],
  },
  {
    title: "Systems Administrator",
    company: "MidSize Solutions",
    period: "2017 - 2019",
    location: "Austin, TX",
    achievements: [
      "Managed 200+ servers across multiple data centers",
      "Implemented virtualization strategy reducing hardware costs by 25%",
      "Automated routine maintenance tasks saving 20 hours per week",
      "Established backup and disaster recovery procedures",
    ],
    technologies: ["Linux", "VMware", "Ansible", "Bash", "Nagios", "MySQL"],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    period: "2013 - 2017",
    location: "Austin, TX",
  },
]

const certifications = [
  { name: "AWS Certified Solutions Architect - Professional", year: "2023" },
  { name: "AWS Certified DevOps Engineer - Professional", year: "2022" },
  { name: "Certified Kubernetes Administrator (CKA)", year: "2021" },
  { name: "Terraform Associate", year: "2020" },
]

export default function ResumePage() {
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
              Resume
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Professional experience and skills in DevOps engineering, 
              cloud infrastructure, and automation.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="gradient">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {contactInfo.map((contact) => {
                      const Icon = contact.icon
                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <Icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium text-foreground">{contact.label}</div>
                            <div className="text-sm text-muted-foreground">{contact.value}</div>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    DevOps Engineer with over 5 years of experience building and maintaining cloud-native infrastructure. 
                    Specialized in AWS, Kubernetes, and Terraform with a focus on automation, security, and cost optimization. 
                    Proven track record of leading infrastructure migrations, implementing CI/CD pipelines, and establishing 
                    SRE practices that improve reliability and developer productivity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {experience.map((job, index) => (
                      <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                          <div className="text-sm text-muted-foreground">{job.period}</div>
                        </div>
                        <div className="flex items-center space-x-4 mb-3 text-muted-foreground">
                          <span className="font-medium">{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Education */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {education.map((edu, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>{edu.school}</div>
                          <div>{edu.period} • {edu.location}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{cert.name}</span>
                          <Badge variant="secondary">{cert.year}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
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
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can help with your next infrastructure project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}