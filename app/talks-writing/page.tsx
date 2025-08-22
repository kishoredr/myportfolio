import { motion } from "framer-motion"
import { Calendar, MapPin, Users, ExternalLink, Play, FileText, Mic, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const talks = [
  {
    id: 1,
    title: "Building Scalable EKS Clusters with Terraform",
    event: "KubeCon North America 2023",
    date: "October 2023",
    location: "Detroit, MI",
    audience: "500+ attendees",
    type: "Conference Talk",
    description: "Deep dive into designing and implementing production-ready EKS clusters using Terraform, covering networking, security, and monitoring best practices.",
    video: "https://www.youtube.com/watch?v=example1",
    slides: "https://slides.com/example1",
    tags: ["Kubernetes", "EKS", "Terraform", "AWS"],
  },
  {
    id: 2,
    title: "DevOps Transformation: From Monolith to Microservices",
    event: "DevOps Days Austin 2023",
    date: "June 2023",
    location: "Austin, TX",
    audience: "200+ attendees",
    type: "Conference Talk",
    description: "Case study on migrating a monolithic application to microservices architecture, including CI/CD pipeline redesign and infrastructure automation.",
    video: "https://www.youtube.com/watch?v=example2",
    slides: "https://slides.com/example2",
    tags: ["DevOps", "Microservices", "CI/CD", "Migration"],
  },
  {
    id: 3,
    title: "Observability in Kubernetes: Beyond Basic Monitoring",
    event: "Austin Kubernetes Meetup",
    date: "March 2023",
    location: "Austin, TX",
    audience: "50+ attendees",
    type: "Meetup Talk",
    description: "Advanced monitoring and observability patterns for Kubernetes clusters, including distributed tracing, custom metrics, and alerting strategies.",
    video: null,
    slides: "https://slides.com/example3",
    tags: ["Kubernetes", "Observability", "Monitoring", "Prometheus"],
  },
  {
    id: 4,
    title: "Cost Optimization Strategies for Cloud Infrastructure",
    event: "AWS Community Day",
    date: "November 2022",
    location: "San Francisco, CA",
    audience: "300+ attendees",
    type: "Conference Talk",
    description: "Practical strategies for reducing cloud costs while maintaining performance and reliability, including automated resource management and optimization.",
    video: "https://www.youtube.com/watch?v=example4",
    slides: "https://slides.com/example4",
    tags: ["AWS", "Cost Optimization", "Automation", "Cloud"],
  },
]

const blogPosts = [
  {
    id: 1,
    title: "Implementing GitOps with ArgoCD and EKS",
    publication: "DevOps.com",
    date: "January 2024",
    readTime: "8 min read",
    description: "A comprehensive guide to implementing GitOps practices using ArgoCD for Kubernetes deployments, including best practices and common pitfalls.",
    url: "https://devops.com/example1",
    tags: ["GitOps", "ArgoCD", "Kubernetes", "EKS"],
    featured: true,
  },
  {
    id: 2,
    title: "Building Secure Multi-Account AWS Landing Zones",
    publication: "Medium",
    date: "December 2023",
    readTime: "12 min read",
    description: "Step-by-step guide to building secure and compliant AWS landing zones using Terraform, supporting multiple accounts and teams.",
    url: "https://medium.com/example2",
    tags: ["AWS", "Terraform", "Security", "Multi-Account"],
    featured: true,
  },
  {
    id: 3,
    title: "Performance Testing in CI/CD Pipelines",
    publication: "Personal Blog",
    date: "November 2023",
    readTime: "6 min read",
    description: "How to integrate performance testing into your CI/CD pipeline using K6 and Prometheus, ensuring performance regressions are caught early.",
    url: "https://yourblog.com/example3",
    tags: ["Performance", "CI/CD", "K6", "Testing"],
    featured: false,
  },
  {
    id: 4,
    title: "Monitoring Microservices with Prometheus and Grafana",
    publication: "Personal Blog",
    date: "October 2023",
    readTime: "10 min read",
    description: "Comprehensive guide to monitoring microservices architecture, including service discovery, custom metrics, and alerting strategies.",
    url: "https://yourblog.com/example4",
    tags: ["Microservices", "Prometheus", "Grafana", "Monitoring"],
    featured: false,
  },
]

const podcasts = [
  {
    id: 1,
    title: "DevOps Best Practices for Startups",
    show: "The DevOps Podcast",
    date: "December 2023",
    duration: "45 minutes",
    description: "Discussion about implementing DevOps practices in early-stage startups, covering tool selection, team structure, and common challenges.",
    url: "https://podcast.example.com/episode1",
    tags: ["DevOps", "Startups", "Best Practices"],
  },
  {
    id: 2,
    title: "Cloud-Native Security Patterns",
    show: "Cloud Security Weekly",
    date: "November 2023",
    duration: "30 minutes",
    description: "Exploring security patterns for cloud-native applications, including zero-trust architecture and automated compliance checks.",
    url: "https://podcast.example.com/episode2",
    tags: ["Security", "Cloud-Native", "Compliance"],
  },
]

export default function TalksWritingPage() {
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
              Talks & Writing
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Sharing knowledge and experiences through conference talks, meetups, blog posts, and podcasts. 
              Contributing to the DevOps community and helping others learn from real-world implementations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 sm:py-24">
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
                Featured Content
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                My most popular and impactful talks and articles
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {talks.filter(talk => talk.id <= 2).map((talk, index) => (
                <motion.div
                  key={talk.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Mic className="h-4 w-4 text-primary" />
                            <Badge variant="secondary">{talk.type}</Badge>
                          </div>
                          <CardTitle className="text-xl mb-2">{talk.title}</CardTitle>
                          <p className="text-muted-foreground text-sm mb-3">{talk.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{talk.event}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{talk.date} • {talk.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{talk.audience}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {talk.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2 pt-2">
                        {talk.video && (
                          <Button asChild size="sm" className="flex-1">
                            <a href={talk.video} target="_blank" rel="noopener noreferrer">
                              <Play className="mr-2 h-4 w-4" />
                              Watch Video
                            </a>
                          </Button>
                        )}
                        {talk.slides && (
                          <Button asChild variant="outline" size="sm">
                            <a href={talk.slides} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Slides
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Talks */}
      <section className="py-16 sm:py-24 bg-muted/30">
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
                All Talks & Presentations
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Complete list of my speaking engagements and presentations
              </p>
            </div>

            <div className="space-y-6">
              {talks.map((talk, index) => (
                <motion.div
                  key={talk.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="secondary">{talk.type}</Badge>
                            <span className="text-sm text-muted-foreground">{talk.event}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">{talk.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{talk.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{talk.date} • {talk.location}</span>
                            <span>•</span>
                            <span>{talk.audience}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          {talk.video && (
                            <Button asChild variant="outline" size="sm">
                              <a href={talk.video} target="_blank" rel="noopener noreferrer">
                                <Play className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {talk.slides && (
                            <Button asChild variant="outline" size="sm">
                              <a href={talk.slides} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-24">
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
                Blog Posts & Articles
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                In-depth articles about DevOps practices, infrastructure, and lessons learned
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <Badge variant="secondary">{post.publication}</Badge>
                            {post.featured && (
                              <Badge variant="default">Featured</Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                          <p className="text-muted-foreground text-sm mb-3">{post.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Post Details */}
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-2">
                        <Button asChild className="w-full" size="sm">
                          <a href={post.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Read Article
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-16 sm:py-24 bg-muted/30">
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
                Podcast Appearances
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Sharing insights and experiences on various DevOps and cloud podcasts
              </p>
            </div>

            <div className="space-y-6">
              {podcasts.map((podcast, index) => (
                <motion.div
                  key={podcast.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="secondary">Podcast</Badge>
                            <span className="text-sm text-muted-foreground">{podcast.show}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">{podcast.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{podcast.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{podcast.date}</span>
                            <span>•</span>
                            <span>{podcast.duration}</span>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <a href={podcast.url} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2 h-4 w-4" />
                            Listen
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Interested in having me speak?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm available for conferences, meetups, and corporate events. Let's discuss how I can contribute to your event.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild size="lg" variant="gradient">
                <Link href="/contact">
                  Get In Touch
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://slides.com/yourusername" target="_blank" rel="noopener noreferrer">
                  View All Slides
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}