import { MainLayout } from "@/components/main-layout";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";

export const metadata = {
  title: "EKS Multi-Environment Platform Case Study",
  description: "Building a complete EKS platform with automated deployments, monitoring, and cost optimization across multiple environments.",
};

export default function EKSCaseStudyPage() {
  return (
    <MainLayout>
      <div className="section-padding">
        <div className="container max-w-4xl prose-custom">
          <h1>EKS Multi-Environment Platform</h1>
          
          <p className="text-muted-foreground">
            <em>Published on January 15, 2024 • 12 min read</em>
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge>AWS</Badge>
            <Badge>EKS</Badge>
            <Badge>Terraform</Badge>
            <Badge>GitOps</Badge>
            <Badge>ArgoCD</Badge>
            <Badge>Prometheus</Badge>
          </div>

          <h2>Overview</h2>

          <p>
            Building a production-ready Kubernetes platform on AWS EKS that supports multiple 
            environments, automated deployments, comprehensive monitoring, and cost optimization. 
            This case study walks through the challenges, solutions, and outcomes of implementing 
            a complete DevOps platform for a growing technology company.
          </p>

          <div className="p-4 my-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 rounded-r-lg">
            <p className="text-blue-900 dark:text-blue-100">
              <strong>Key Results:</strong> This project reduced deployment time by 85% and achieved 
              99.95% uptime SLO while cutting infrastructure costs by 40%.
            </p>
          </div>

          <h2>The Challenge</h2>

          <p>
            The company was running workloads on a mix of EC2 instances and Docker containers 
            with manual deployment processes. Key pain points included:
          </p>

          <ul>
            <li><strong>Manual deployments</strong> taking 2-3 hours per environment</li>
            <li><strong>Inconsistent environments</strong> leading to &quot;works on my machine&quot; issues</li>
            <li><strong>No standardized monitoring</strong> across applications</li>
            <li><strong>High infrastructure costs</strong> due to over-provisioning</li>
            <li><strong>Security vulnerabilities</strong> from outdated base images</li>
            <li><strong>Slow time-to-market</strong> for new features</li>
          </ul>

          <h2>Solution Architecture</h2>

          <h3>Infrastructure as Code with Terraform</h3>

          <p>We designed a modular Terraform architecture to provision and manage the entire EKS ecosystem:</p>

          <CodeBlock
            language="hcl"
            filename="terraform/modules/eks/main.tf"
            code={`module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "~> 19.0"

  cluster_name    = var.cluster_name
  cluster_version = var.kubernetes_version

  vpc_id     = var.vpc_id
  subnet_ids = var.private_subnet_ids

  # Managed node groups
  eks_managed_node_groups = {
    main = {
      min_size     = 2
      max_size     = 10
      desired_size = 3

      instance_types = ["t3.medium", "t3.large"]
      capacity_type  = "SPOT"

      k8s_labels = {
        Environment = var.environment
        NodeGroup   = "main"
      }

      update_config = {
        max_unavailable_percentage = 25
      }
    }
  }

  tags = var.tags
}`}
          />

          <h3>Key Metrics and Results</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">99.95%</div>
              <div className="text-sm font-medium mb-1">Uptime SLO</div>
              <div className="text-xs text-muted-foreground">Achieved across all environments</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm font-medium mb-1">Faster Deployments</div>
              <div className="text-xs text-muted-foreground">From 3 hours to 20 minutes</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">40%</div>
              <div className="text-sm font-medium mb-1">Cost Reduction</div>
              <div className="text-xs text-muted-foreground">Through right-sizing and spot instances</div>
            </div>
          </div>

          <h3>Performance Improvements</h3>

          <ul>
            <li><strong>Deployment Time:</strong> Reduced from 3 hours to 20 minutes</li>
            <li><strong>Environment Consistency:</strong> 100% - eliminated configuration drift</li>
            <li><strong>Time to Production:</strong> New features deploy 10x faster</li>
            <li><strong>Resource Utilization:</strong> Increased from 30% to 75% average</li>
          </ul>

          <h2>Conclusion</h2>

          <p>
            The EKS multi-environment platform transformation delivered significant improvements 
            in deployment speed, reliability, and cost efficiency. The combination of Infrastructure 
            as Code, GitOps, and comprehensive monitoring created a robust foundation for future growth.
          </p>

          <p>
            Key success factors included executive support for the transformation initiative, 
            cross-functional collaboration between development and operations teams, an incremental 
            approach that minimized disruption to business operations, and continuous learning 
            and adaptation based on real-world usage.
          </p>

          <hr />

          <p>
            <em>
              Want to learn more about implementing EKS platforms?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Get in touch
              </a>{" "}
              to discuss your specific requirements.
            </em>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}