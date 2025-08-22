import { motion } from "framer-motion"
import { CheckCircle, Circle, MinusCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Cloud & Infrastructure",
    description: "AWS services and cloud-native architecture",
    skills: [
      { name: "AWS EKS", proficiency: "expert" },
      { name: "AWS ALB/NLB", proficiency: "expert" },
      { name: "CloudFront", proficiency: "expert" },
      { name: "DocumentDB", proficiency: "advanced" },
      { name: "RDS", proficiency: "advanced" },
      { name: "S3", proficiency: "expert" },
      { name: "VPC", proficiency: "expert" },
      { name: "IAM", proficiency: "expert" },
    ],
  },
  {
    name: "Containers & Orchestration",
    description: "Container technologies and Kubernetes ecosystem",
    skills: [
      { name: "Docker", proficiency: "expert" },
      { name: "Kubernetes", proficiency: "expert" },
      { name: "Helm", proficiency: "advanced" },
      { name: "Containerd", proficiency: "intermediate" },
      { name: "Pod Security", proficiency: "advanced" },
      { name: "Service Mesh", proficiency: "intermediate" },
    ],
  },
  {
    name: "Infrastructure as Code",
    description: "Automation and configuration management",
    skills: [
      { name: "Terraform", proficiency: "expert" },
      { name: "Helm Charts", proficiency: "advanced" },
      { name: "CloudFormation", proficiency: "intermediate" },
      { name: "Ansible", proficiency: "intermediate" },
      { name: "Packer", proficiency: "intermediate" },
    ],
  },
  {
    name: "CI/CD & Automation",
    description: "Build, test, and deployment pipelines",
    skills: [
      { name: "GitHub Actions", proficiency: "expert" },
      { name: "Bitbucket Pipelines", proficiency: "expert" },
      { name: "Jenkins", proficiency: "advanced" },
      { name: "ArgoCD", proficiency: "intermediate" },
      { name: "Tekton", proficiency: "intermediate" },
    ],
  },
  {
    name: "Security & Compliance",
    description: "Security best practices and compliance frameworks",
    skills: [
      { name: "IAM Policies", proficiency: "expert" },
      { name: "KMS", proficiency: "advanced" },
      { name: "SSM Parameter Store", proficiency: "advanced" },
      { name: "Secrets Manager", proficiency: "advanced" },
      { name: "Pod Security Policies", proficiency: "advanced" },
      { name: "Network Policies", proficiency: "intermediate" },
    ],
  },
  {
    name: "Observability & Monitoring",
    description: "Monitoring, logging, and alerting systems",
    skills: [
      { name: "Prometheus", proficiency: "expert" },
      { name: "Grafana", proficiency: "expert" },
      { name: "ELK Stack", proficiency: "advanced" },
      { name: "Jaeger", proficiency: "intermediate" },
      { name: "OpenTelemetry", proficiency: "intermediate" },
      { name: "AlertManager", proficiency: "advanced" },
    ],
  },
  {
    name: "Application & Runtime",
    description: "Application platforms and runtime environments",
    skills: [
      { name: "Node.js", proficiency: "advanced" },
      { name: "Java 17", proficiency: "intermediate" },
      { name: "Python", proficiency: "intermediate" },
      { name: "Go", proficiency: "intermediate" },
      { name: "PNPM", proficiency: "advanced" },
      { name: "Maven", proficiency: "intermediate" },
    ],
  },
  {
    name: "Operating Systems & Tools",
    description: "System administration and development tools",
    skills: [
      { name: "Linux (Ubuntu/CentOS)", proficiency: "expert" },
      { name: "Bash Scripting", proficiency: "expert" },
      { name: "Git", proficiency: "expert" },
      { name: "Vim/Neovim", proficiency: "advanced" },
      { name: "tmux", proficiency: "intermediate" },
      { name: "systemd", proficiency: "advanced" },
    ],
  },
]

const proficiencyLevels = {
  expert: { label: "Expert", icon: CheckCircle, color: "text-emerald-600" },
  advanced: { label: "Advanced", icon: CheckCircle, color: "text-blue-600" },
  intermediate: { label: "Intermediate", icon: Circle, color: "text-yellow-600" },
  beginner: { label: "Beginner", icon: MinusCircle, color: "text-gray-600" },
}

export default function SkillsPage() {
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
              Skills & Expertise
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              A comprehensive overview of my technical skills across the DevOps ecosystem, 
              from cloud infrastructure to application development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <p className="text-muted-foreground">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => {
                          const level = proficiencyLevels[skill.proficiency as keyof typeof proficiencyLevels]
                          const Icon = level.icon
                          
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center justify-between"
                            >
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              <div className="flex items-center space-x-2">
                                <Icon className={`h-4 w-4 ${level.color}`} />
                                <span className={`text-xs font-medium ${level.color}`}>
                                  {level.label}
                                </span>
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8">
              Proficiency Levels
            </h2>
            <div className="grid gap-4 sm:grid-cols-4">
              {Object.entries(proficiencyLevels).map(([key, level]) => {
                const Icon = level.icon
                return (
                  <div key={key} className="flex items-center justify-center space-x-2">
                    <Icon className={`h-5 w-5 ${level.color}`} />
                    <span className={`text-sm font-medium ${level.color}`}>
                      {level.label}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Skills are continuously evolving. I'm always learning new technologies and deepening my expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Currently Learning
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm actively expanding my skills in these emerging technologies
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🦀</div>
                  <h3 className="font-semibold">Rust</h3>
                  <p className="text-sm text-muted-foreground">Systems programming and performance</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">☁️</div>
                  <h3 className="font-semibold">Multi-Cloud</h3>
                  <p className="text-sm text-muted-foreground">GCP and Azure expertise</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <h3 className="font-semibold">MLOps</h3>
                  <p className="text-sm text-muted-foreground">ML infrastructure and pipelines</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}