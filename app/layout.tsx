import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevOps Engineer Portfolio',
  description: 'DevOps Engineer focused on EKS, Terraform, and production reliability. Building scalable infrastructure and automation solutions.',
  keywords: ['DevOps', 'SRE', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Cloud Engineering'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'DevOps Engineer Portfolio',
    description: 'DevOps Engineer focused on EKS, Terraform, and production reliability.',
    siteName: 'DevOps Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Engineer Portfolio',
    description: 'DevOps Engineer focused on EKS, Terraform, and production reliability.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}