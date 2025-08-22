"use client";

import * as React from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/main-layout";
import { Animated } from "@/components/animations";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formState, setFormState] = React.useState<FormState>({ status: 'idle' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState({ 
          status: 'success', 
          message: 'Thank you for your message! I&apos;ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setFormState({ 
        status: 'error', 
        message: 'Something went wrong. Please try again or email me directly.' 
      });
    }
  };

  return (
    <MainLayout>
      <div className="section-padding">
        <div className="container max-w-6xl">
          {/* Header */}
          <Animated variant="fadeInUp" className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your DevOps challenges or explore new opportunities? 
              I&apos;d love to hear from you.
            </p>
          </Animated>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Animated variant="fadeInUp" delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      For project inquiries and collaboration opportunities
                    </p>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      your.email@example.com
                    </a>
                  </CardContent>
                </Card>
              </Animated>

              <Animated variant="fadeInUp" delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      Based in San Francisco Bay Area
                    </p>
                    <p className="text-foreground">
                      Open to remote work and travel
                    </p>
                  </CardContent>
                </Card>
              </Animated>

              <Animated variant="fadeInUp" delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>Response Time</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      I typically respond within
                    </p>
                    <p className="text-foreground font-medium">
                      24-48 hours
                    </p>
                  </CardContent>
                </Card>
              </Animated>

              {/* Services */}
              <Animated variant="fadeInUp" delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Services Available</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium mb-1">🔧 Platform Review</div>
                      <div className="text-muted-foreground">Infrastructure audit and optimization recommendations</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium mb-1">💰 Cost Optimization</div>
                      <div className="text-muted-foreground">Identify savings opportunities in your cloud spend</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium mb-1">🛡️ Security Hardening</div>
                      <div className="text-muted-foreground">Kubernetes and cloud security best practices</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium mb-1">🚀 Migration Planning</div>
                      <div className="text-muted-foreground">Cloud migration and modernization strategies</div>
                    </div>
                  </CardContent>
                </Card>
              </Animated>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Animated variant="fadeInUp" delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {formState.status === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <p className="text-green-800 dark:text-green-200">{formState.message}</p>
                      </div>
                    )}

                    {formState.status === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <p className="text-red-800 dark:text-red-200">{formState.message}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="What would you like to discuss?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                          placeholder="Tell me about your project, challenges, or how I can help..."
                        />
                      </div>

                      {/* Honeypot field - hidden from users */}
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ position: 'absolute', left: '-9999px' }}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={formState.status === 'submitting'}
                        className="w-full md:w-auto"
                      >
                        {formState.status === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}