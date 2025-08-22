import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Users, TrendingUp, Award, Zap, DollarSign } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    period: "2023 - Present",
    title: "Senior DevOps Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Leading cloud infrastructure initiatives and platform engineering for a high-growth SaaS company.",
    achievements: [
      "Led migration of 50+ microservices to AWS EKS, reducing deployment time by 10x",
      "Implemented GitOps workflow with ArgoCD, achieving 99.95% deployment success rate",
      "Designed multi-account AWS architecture supporting 100+ development teams",
      "Reduced infrastructure costs by 40% through optimization and automation",
      "Mentored 5 junior engineers and established DevOps best practices"
    ],
    technologies: ["AWS EKS", "Terraform", "ArgoCD", "Kubernetes", "Prometheus", "Grafana"],
    metrics: {
      teamsSupported: "100+",
      costSavings: "40%",
      deploymentSuccess: "99.95%",
      migrationTime: "10x faster"
    },
    featured: true
  },
  {
    id: 2,
    period: "2021 - 2023",
    title: "DevOps Engineer",
    company: "Startup",
    location: "Remote",
    type: "Full-time",
    description: "Built and scaled DevOps practices for a rapidly growing fintech startup.",
    achievements: [
      "Established CI/CD pipelines reducing deployment time from hours to minutes",
      "Managed Kubernetes clusters supporting 1M+ daily active users",
      "Implemented comprehensive monitoring and alerting reducing MTTR by 60%",
      "Automated infrastructure provisioning reducing setup time by 80%",
      "Led security compliance initiatives achieving SOC 2 Type II certification"
    ],
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "ELK Stack"],
    metrics: {
      usersSupported: "1M+",
      mttrReduction: "60%",
      setupTimeReduction: "80%",
      compliance: "SOC 2 Type II"
    }
  },
  {
    id: 3,
    period: "2019 - 2021",
    title: "Site Reliability Engineer",
    company: "Enterprise",
    location: "New York, NY",
    type: "Full-time",
    description: "Improved system reliability and operational efficiency for enterprise applications.",
    achievements: [
      "Reduced production incidents by 80% through proactive monitoring and automation",
      "Implemented automated incident response reducing MTTR by 70%",
      "Designed disaster recovery strategy achieving RTO of 15 minutes",
      "Optimized database performance improving response times by 50%",
      "Established SLO/SLI framework for service level management"
    ],
    technologies: ["AWS", "Terraform", "Jenkins", "Prometheus", "Grafana", "PostgreSQL"],
    metrics: {
      incidentReduction: "80%",
      mttrReduction: "70%",
      rto: "15 minutes",
      performanceImprovement: "50%"
    }
  },
  {
    id: 4,
    period: "2017 - 2019",
    title: "Systems Administrator",
    company: "Mid-size Company",
    location: "Austin, TX",
    type: "Full-time",
    description: "Managed on-premise infrastructure and implemented automation solutions.",
    achievements: [
      "Managed 500+ servers across multiple data centers",
      "Implemented automated backup and disaster recovery procedures",
      "Reduced manual maintenance tasks by 90% through scripting and automation",
      "Improved system uptime from 98% to 99.9%",
      "Led migration from on-premise to hybrid cloud infrastructure"
    ],
    technologies: ["Linux", "Ansible", "Puppet", "VMware", "Bash", "Python"],
    metrics: {
      serversManaged: "500+",
      maintenanceReduction: "90%",
      uptimeImprovement: "98% → 99.9%",
      automationCoverage: "85%"
    }
  }
]

const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform"]
  },
  {
    category: "CI/CD & Automation",
    items: ["GitHub Actions", "Jenkins", "ArgoCD", "GitLab CI", "Ansible", "Puppet"]
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "AlertManager", "Thanos"]
  },
  {
    category: "Security & Compliance",
    items: ["AWS IAM", "KMS", "OPA", "Falco", "Vault", "SOC 2"]
  }
]

export default function ExperiencePage() {
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
              Professional Experience
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A journey through my career in DevOps and SRE, showcasing the evolution of skills, 
              leadership, and impact across different organizations and challenges.
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className={`${experience.featured ? 'ring-2 ring-primary/20' : ''}`}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {experience.featured && (
                              <Badge variant="secondary">Featured Role</Badge>
                            )}
                            <Badge variant="outline">{experience.type}</Badge>
                          </div>
                          <CardTitle className="text-2xl">{experience.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4">{experience.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Impact & Results
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {Object.entries(experience.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-xs text-muted-foreground capitalize mb-1">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-sm font-semibold text-foreground">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-full h-8 w-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
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
              Skills Developed Over Time
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A comprehensive view of the technical skills and tools I've mastered throughout my career
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
              {skills.map((skillCategory, index) => (
                <Card key={skillCategory.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Growth */}
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
              Career Growth & Evolution
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From systems administration to senior DevOps engineering, my journey reflects 
              the evolution of infrastructure and automation practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 mx-auto max-w-4xl"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Team Leadership</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Mentoring junior engineers and establishing best practices across organizations
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Strategic Impact</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Driving infrastructure decisions that align with business objectives and growth
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Cost Optimization</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Delivering significant cost savings while improving performance and reliability
                  </p>
                </CardContent>
              </Card>
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to bring this experience to your team?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how my experience can help you build reliable, scalable infrastructure 
              and establish DevOps best practices.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Let's Discuss Your Needs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}