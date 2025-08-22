import { motion } from "framer-motion"
import { CheckCircle, Circle, Star } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Cloud & Infrastructure",
    description: "AWS services and cloud architecture",
    skills: [
      { name: "AWS EKS", proficiency: "expert", description: "Managed Kubernetes service" },
      { name: "AWS ALB/NLB", proficiency: "expert", description: "Load balancing and traffic management" },
      { name: "AWS CloudFront", proficiency: "advanced", description: "Content delivery network" },
      { name: "AWS DocumentDB", proficiency: "advanced", description: "MongoDB-compatible database" },
      { name: "AWS S3", proficiency: "expert", description: "Object storage and lifecycle management" },
      { name: "AWS RDS", proficiency: "advanced", description: "Managed relational databases" },
      { name: "AWS Lambda", proficiency: "advanced", description: "Serverless compute" },
      { name: "AWS IAM", proficiency: "expert", description: "Identity and access management" },
    ]
  },
  {
    name: "Containers & Orchestration",
    description: "Containerization and Kubernetes ecosystem",
    skills: [
      { name: "Docker", proficiency: "expert", description: "Containerization platform" },
      { name: "Kubernetes", proficiency: "expert", description: "Container orchestration" },
      { name: "Helm", proficiency: "advanced", description: "Kubernetes package manager" },
      { name: "ArgoCD", proficiency: "advanced", description: "GitOps continuous delivery" },
      { name: "Istio", proficiency: "intermediate", description: "Service mesh" },
      { name: "Prometheus", proficiency: "advanced", description: "Monitoring and alerting" },
      { name: "Grafana", proficiency: "advanced", description: "Data visualization" },
    ]
  },
  {
    name: "Infrastructure as Code",
    description: "Automation and configuration management",
    skills: [
      { name: "Terraform", proficiency: "expert", description: "Infrastructure provisioning" },
      { name: "Ansible", proficiency: "advanced", description: "Configuration management" },
      { name: "Packer", proficiency: "intermediate", description: "Machine image creation" },
      { name: "Terragrunt", proficiency: "advanced", description: "Terraform workflow automation" },
      { name: "CloudFormation", proficiency: "intermediate", description: "AWS infrastructure as code" },
    ]
  },
  {
    name: "CI/CD & DevOps",
    description: "Continuous integration and deployment",
    skills: [
      { name: "GitHub Actions", proficiency: "expert", description: "CI/CD automation" },
      { name: "Bitbucket Pipelines", proficiency: "advanced", description: "CI/CD automation" },
      { name: "Jenkins", proficiency: "advanced", description: "CI/CD server" },
      { name: "Argo Workflows", proficiency: "intermediate", description: "Kubernetes-native workflows" },
      { name: "Tekton", proficiency: "intermediate", description: "Cloud-native CI/CD" },
    ]
  },
  {
    name: "Security & Compliance",
    description: "Security best practices and compliance",
    skills: [
      { name: "AWS KMS", proficiency: "advanced", description: "Key management service" },
      { name: "AWS SSM", proficiency: "advanced", description: "Systems manager" },
      { name: "Vault", proficiency: "intermediate", description: "Secrets management" },
      { name: "OPA", proficiency: "intermediate", description: "Policy enforcement" },
      { name: "Falco", proficiency: "intermediate", description: "Runtime security monitoring" },
    ]
  },
  {
    name: "Observability & Monitoring",
    description: "Monitoring, logging, and alerting",
    skills: [
      { name: "ELK Stack", proficiency: "advanced", description: "Log aggregation and analysis" },
      { name: "Jaeger", proficiency: "intermediate", description: "Distributed tracing" },
      { name: "AlertManager", proficiency: "advanced", description: "Alert routing and grouping" },
      { name: "Thanos", proficiency: "intermediate", description: "Long-term metrics storage" },
      { name: "Loki", proficiency: "intermediate", description: "Log aggregation" },
    ]
  },
  {
    name: "Programming & Scripting",
    description: "Languages and automation scripts",
    skills: [
      { name: "Python", proficiency: "advanced", description: "Automation and scripting" },
      { name: "Go", proficiency: "intermediate", description: "Cloud-native applications" },
      { name: "Bash", proficiency: "expert", description: "Shell scripting" },
      { name: "JavaScript/Node.js", proficiency: "intermediate", description: "Web applications" },
      { name: "YAML", proficiency: "expert", description: "Configuration files" },
      { name: "HCL", proficiency: "expert", description: "Terraform configuration" },
    ]
  },
  {
    name: "Operating Systems & Tools",
    description: "System administration and utilities",
    skills: [
      { name: "Linux (Ubuntu/CentOS)", proficiency: "expert", description: "System administration" },
      { name: "Git", proficiency: "expert", description: "Version control" },
      { name: "Docker Compose", proficiency: "advanced", description: "Multi-container applications" },
      { name: "kubectl", proficiency: "expert", description: "Kubernetes CLI" },
      { name: "AWS CLI", proficiency: "expert", description: "AWS command line interface" },
    ]
  }
]

const proficiencyLevels = {
  expert: { label: "Expert", color: "text-emerald-600", bgColor: "bg-emerald-100", icon: CheckCircle },
  advanced: { label: "Advanced", color: "text-blue-600", bgColor: "bg-blue-100", icon: Star },
  intermediate: { label: "Intermediate", color: "text-yellow-600", bgColor: "bg-yellow-100", icon: Circle },
}

export default function SkillsPage() {
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
              Skills & Expertise
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A comprehensive overview of my technical skills across the DevOps and cloud-native ecosystem. 
              From infrastructure automation to security and monitoring, I bring deep expertise to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <p className="text-muted-foreground">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => {
                          const level = proficiencyLevels[skill.proficiency as keyof typeof proficiencyLevels]
                          const Icon = level.icon
                          
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                              className="flex items-start space-x-3"
                            >
                              <div className={`flex-shrink-0 rounded-full p-1 ${level.bgColor}`}>
                                <Icon className={`h-4 w-4 ${level.color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
                                  <span className={`text-xs font-medium ${level.color}`}>
                                    {level.label}
                                  </span>
                                </div>
                                <p className="mt-1 text-xs text-muted-foreground">{skill.description}</p>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Legend */}
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
              Proficiency Levels
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Understanding what each skill level means for your project
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
              {Object.entries(proficiencyLevels).map(([key, level]) => {
                const Icon = level.icon
                return (
                  <Card key={key} className="text-center">
                    <CardContent className="p-6">
                      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${level.bgColor}`}>
                        <Icon className={`h-6 w-6 ${level.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{level.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {key === 'expert' && 'Deep expertise, can architect and lead complex implementations'}
                        {key === 'advanced' && 'Strong skills, can implement and optimize solutions independently'}
                        {key === 'intermediate' && 'Working knowledge, can contribute to projects with guidance'}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
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
              Ready to leverage these skills?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need help with a specific technology or want to build a complete 
              DevOps transformation, I can help you achieve your goals.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Let's Discuss Your Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}