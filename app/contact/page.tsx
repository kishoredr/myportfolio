"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    description: "Send me a direct email"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    description: "Call me directly"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
    description: "Available for remote work"
  }
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
    description: "View my open source contributions"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    description: "Connect professionally"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
    description: "Follow my thoughts on DevOps"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        honeypot: ""
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Let's Work Together
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Ready to transform your infrastructure? Whether you need help with cloud migration, 
              CI/CD automation, or reliability engineering, I'm here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send me a message</CardTitle>
                    <p className="text-muted-foreground">
                      Tell me about your project and I'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@company.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company (optional)"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, timeline, and goals..."
                          rows={6}
                          required
                        />
                      </div>

                      {/* Honeypot field */}
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      return (
                        <motion.div
                          key={info.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={info.href}
                            className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                          >
                            <div className="flex-shrink-0">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{info.title}</h3>
                              <p className="text-sm text-muted-foreground">{info.value}</p>
                              <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                            </div>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Connect with me</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.div
                          key={social.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors text-center"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-medium text-foreground text-sm">{social.name}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{social.description}</p>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Availability */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Current Availability</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I'm currently available for new projects and consulting engagements.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-muted-foreground">Available for new projects</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-muted-foreground">Remote work preferred</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-muted-foreground">Response within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss your infrastructure challenges and build solutions that scale with your business.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send me an email
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}