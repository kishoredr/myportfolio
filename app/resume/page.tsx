import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Building, Award, Zap, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contactInfo = [
  { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" }
]

const skills = {
  "Cloud & Infrastructure": ["AWS EKS", "AWS ALB/NLB", "AWS CloudFront", "AWS DocumentDB", "AWS S3", "AWS RDS", "AWS Lambda", "AWS IAM"],
  "Containers & Orchestration": ["Docker", "Kubernetes", "Helm", "ArgoCD", "Istio", "Prometheus", "Grafana"],
  "Infrastructure as Code": ["Terraform", "Ansible", "Packer", "Terragrunt", "CloudFormation"],
  "CI/CD & DevOps": ["GitHub Actions", "Bitbucket Pipelines", "Jenkins", "Argo Workflows", "Tekton"],
  "Security & Compliance": ["AWS KMS", "AWS SSM", "Vault", "OPA", "Falco"],
  "Observability & Monitoring": ["ELK Stack", "Jaeger", "AlertManager", "Thanos", "Loki"],
  "Programming & Scripting": ["Python", "Go", "Bash", "JavaScript/Node.js", "YAML", "HCL"],
  "Operating Systems & Tools": ["Linux (Ubuntu/CentOS)", "Git", "Docker Compose", "kubectl", "AWS CLI"]
}

const experience = [
  {
    period: "2023 - Present",
    title: "Senior DevOps Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    description: "Leading cloud infrastructure initiatives and platform engineering for a high-growth SaaS company.",
    achievements: [
      "Led migration of 50+ microservices to AWS EKS, reducing deployment time by 10x",
      "Implemented GitOps workflow with ArgoCD, achieving 99.95% deployment success rate",
      "Designed multi-account AWS architecture supporting 100+ development teams",
      "Reduced infrastructure costs by 40% through optimization and automation",
      "Mentored 5 junior engineers and established DevOps best practices"
    ],
    technologies: ["AWS EKS", "Terraform", "ArgoCD", "Kubernetes", "Prometheus", "Grafana"]
  },
  {
    period: "2021 - 2023",
    title: "DevOps Engineer",
    company: "Startup",
    location: "Remote",
    description: "Built and scaled DevOps practices for a rapidly growing fintech startup.",
    achievements: [
      "Established CI/CD pipelines reducing deployment time from hours to minutes",
      "Managed Kubernetes clusters supporting 1M+ daily active users",
      "Implemented comprehensive monitoring and alerting reducing MTTR by 60%",
      "Automated infrastructure provisioning reducing setup time by 80%",
      "Led security compliance initiatives achieving SOC 2 Type II certification"
    ],
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "ELK Stack"]
  },
  {
    period: "2019 - 2021",
    title: "Site Reliability Engineer",
    company: "Enterprise",
    location: "New York, NY",
    description: "Improved system reliability and operational efficiency for enterprise applications.",
    achievements: [
      "Reduced production incidents by 80% through proactive monitoring and automation",
      "Implemented automated incident response reducing MTTR by 70%",
      "Designed disaster recovery strategy achieving RTO of 15 minutes",
      "Optimized database performance improving response times by 50%",
      "Established SLO/SLI framework for service level management"
    ],
    technologies: ["AWS", "Terraform", "Jenkins", "Prometheus", "Grafana", "PostgreSQL"]
  },
  {
    period: "2017 - 2019",
    title: "Systems Administrator",
    company: "Mid-size Company",
    location: "Austin, TX",
    description: "Managed on-premise infrastructure and implemented automation solutions.",
    achievements: [
      "Managed 500+ servers across multiple data centers",
      "Implemented automated backup and disaster recovery procedures",
      "Reduced manual maintenance tasks by 90% through scripting and automation",
      "Improved system uptime from 98% to 99.9%",
      "Led migration from on-premise to hybrid cloud infrastructure"
    ],
    technologies: ["Linux", "Ansible", "Puppet", "VMware", "Bash", "Python"]
  }
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "Austin, TX",
    period: "2013 - 2017",
    description: "Focused on systems programming, networking, and software engineering fundamentals."
  }
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    id: "AWS-SAP-12345"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    id: "CKA-67890"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2022",
    id: "HCTA-11111"
  }
]

export default function ResumePage() {
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
              Resume
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A comprehensive overview of my professional experience, skills, and achievements in DevOps engineering.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">Your Name</h2>
                    <h3 className="text-xl text-primary font-semibold mb-4">Senior DevOps Engineer</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      DevOps engineer with 5+ years of experience building scalable infrastructure, 
                      implementing automation solutions, and driving reliability engineering practices. 
                      Passionate about cloud-native technologies and helping teams ship faster and more reliably.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      return (
                        <Link
                          key={info.label}
                          href={info.href}
                          className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-xs text-muted-foreground">{info.label}</div>
                            <div className="text-sm font-medium text-foreground">{info.value}</div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <span className="font-medium">{exp.company}</span>
                              <span>•</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-medium text-foreground mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-foreground mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Education */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {education.map((edu, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <div className="text-sm text-muted-foreground mb-2">
                          {edu.school} • {edu.location} • {edu.period}
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-4">
                          <h4 className="font-semibold text-foreground">{cert.name}</h4>
                          <div className="text-sm text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </div>
                          <div className="text-xs text-muted-foreground">ID: {cert.id}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                      <p className="text-sm text-muted-foreground">English (Native), Spanish (Conversational)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Interests</h4>
                      <p className="text-sm text-muted-foreground">
                        Cloud-native technologies, infrastructure automation, reliability engineering, 
                        open source contribution, technical writing, and community building.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        Available for new opportunities, consulting projects, and speaking engagements. 
                        Open to remote work and occasional travel.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to work together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how my experience and skills can help your team achieve their infrastructure goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  <ExternalLink className="mr-2 h-4 w-4" />
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