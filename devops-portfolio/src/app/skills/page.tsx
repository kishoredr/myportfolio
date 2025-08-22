import { 
  Cloud, 
  Container, 
  Server, 
  GitBranch, 
  Shield, 
  BarChart3, 
  Code, 
  Terminal 
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainLayout } from "@/components/main-layout";

interface Skill {
  name: string;
  level: number; // 1-5
  description?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-6 h-6" />,
    description: "Public cloud services and platforms",
    skills: [
      { name: "AWS EKS", level: 5, description: "Kubernetes on AWS" },
      { name: "AWS ALB", level: 5, description: "Application Load Balancer" },
      { name: "CloudFront", level: 4, description: "Content Delivery Network" },
      { name: "DocumentDB", level: 4, description: "MongoDB-compatible database" },
      { name: "AWS Lambda", level: 4, description: "Serverless computing" },
      { name: "AWS S3", level: 5, description: "Object storage" },
      { name: "AWS RDS", level: 4, description: "Managed relational databases" },
      { name: "AWS VPC", level: 5, description: "Virtual Private Cloud" }
    ]
  },
  {
    title: "Containers & Orchestration",
    icon: <Container className="w-6 h-6" />,
    description: "Container technologies and orchestration platforms",
    skills: [
      { name: "Docker", level: 5, description: "Containerization platform" },
      { name: "Kubernetes", level: 5, description: "Container orchestration" },
      { name: "Helm", level: 4, description: "Kubernetes package manager" },
      { name: "Docker Compose", level: 5, description: "Multi-container Docker apps" },
      { name: "Istio", level: 3, description: "Service mesh" },
      { name: "Ingress Controllers", level: 4, description: "Load balancing and routing" }
    ]
  },
  {
    title: "Infrastructure as Code",
    icon: <Server className="w-6 h-6" />,
    description: "Infrastructure automation and provisioning",
    skills: [
      { name: "Terraform", level: 5, description: "Infrastructure provisioning" },
      { name: "Terragrunt", level: 4, description: "Terraform wrapper" },
      { name: "AWS CDK", level: 3, description: "Cloud Development Kit" },
      { name: "CloudFormation", level: 4, description: "AWS native IaC" },
      { name: "Ansible", level: 3, description: "Configuration management" }
    ]
  },
  {
    title: "CI/CD & Automation",
    icon: <GitBranch className="w-6 h-6" />,
    description: "Continuous integration and deployment pipelines",
    skills: [
      { name: "GitHub Actions", level: 5, description: "CI/CD workflows" },
      { name: "Bitbucket Pipelines", level: 5, description: "Atlassian CI/CD" },
      { name: "GitLab CI", level: 4, description: "GitLab integrated CI/CD" },
      { name: "Jenkins", level: 3, description: "Open source automation server" },
      { name: "ArgoCD", level: 4, description: "GitOps continuous delivery" }
    ]
  },
  {
    title: "Security & Compliance",
    icon: <Shield className="w-6 h-6" />,
    description: "Security tools and best practices",
    skills: [
      { name: "AWS IAM", level: 5, description: "Identity and Access Management" },
      { name: "AWS KMS", level: 4, description: "Key Management Service" },
      { name: "AWS SSM", level: 4, description: "Systems Manager" },
      { name: "Vault", level: 3, description: "Secrets management" },
      { name: "SAST/DAST", level: 4, description: "Security testing" },
      { name: "Network Security", level: 4, description: "Firewalls, VPNs, etc." }
    ]
  },
  {
    title: "Observability & Monitoring",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Monitoring, logging, and alerting systems",
    skills: [
      { name: "Prometheus", level: 5, description: "Metrics collection" },
      { name: "Grafana", level: 5, description: "Metrics visualization" },
      { name: "ELK Stack", level: 4, description: "Elasticsearch, Logstash, Kibana" },
      { name: "Datadog", level: 4, description: "Application monitoring" },
      { name: "New Relic", level: 3, description: "APM and infrastructure monitoring" },
      { name: "Jaeger", level: 3, description: "Distributed tracing" }
    ]
  },
  {
    title: "Application Development",
    icon: <Code className="w-6 h-6" />,
    description: "Programming languages and frameworks",
    skills: [
      { name: "Node.js", level: 4, description: "JavaScript runtime" },
      { name: "PNPM", level: 4, description: "Package manager" },
      { name: "Java 17", level: 4, description: "OpenJDK Temurin" },
      { name: "Python", level: 4, description: "Scripting and automation" },
      { name: "Go", level: 3, description: "Systems programming" },
      { name: "Bash", level: 5, description: "Shell scripting" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Terminal className="w-6 h-6" />,
    description: "Development and operational tools",
    skills: [
      { name: "Linux", level: 5, description: "Server administration" },
      { name: "Git", level: 5, description: "Version control" },
      { name: "VS Code", level: 5, description: "Code editor" },
      { name: "Slack", level: 5, description: "Team communication" },
      { name: "Jira", level: 4, description: "Project management" },
      { name: "Confluence", level: 4, description: "Documentation" }
    ]
  }
];

function SkillBar({ skill }: { skill: Skill }) {
  const percentage = (skill.level / 5) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <Badge variant="secondary">{skill.level}/5</Badge>
      </div>
      {skill.description && (
        <p className="text-xs text-muted-foreground">{skill.description}</p>
      )}
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary rounded-full h-2 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <MainLayout>
      <div className="section-padding">
        <div className="container">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels 
              across various domains of DevOps and cloud engineering.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">
                        {category.description}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Legend */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">Proficiency Scale</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
              <div className="text-center">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary rounded-full h-2 w-1/5" />
                </div>
                <div className="font-medium">1 - Beginner</div>
                <div className="text-muted-foreground">Basic understanding</div>
              </div>
              <div className="text-center">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary rounded-full h-2 w-2/5" />
                </div>
                <div className="font-medium">2 - Novice</div>
                <div className="text-muted-foreground">Limited experience</div>
              </div>
              <div className="text-center">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary rounded-full h-2 w-3/5" />
                </div>
                <div className="font-medium">3 - Intermediate</div>
                <div className="text-muted-foreground">Practical application</div>
              </div>
              <div className="text-center">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary rounded-full h-2 w-4/5" />
                </div>
                <div className="font-medium">4 - Advanced</div>
                <div className="text-muted-foreground">Deep knowledge</div>
              </div>
              <div className="text-center">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary rounded-full h-2 w-full" />
                </div>
                <div className="font-medium">5 - Expert</div>
                <div className="text-muted-foreground">Mastery level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}