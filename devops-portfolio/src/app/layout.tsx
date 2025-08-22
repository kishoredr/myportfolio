import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "DevOps Engineer | Cloud Infrastructure & Automation",
    template: "%s | DevOps Engineer",
  },
  description:
    "DevOps Engineer focused on AWS EKS, Terraform, and production reliability. Specializing in cloud infrastructure, CI/CD, and observability.",
  keywords: [
    "DevOps",
    "SRE",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Docker",
    "CI/CD",
    "Infrastructure as Code",
    "Cloud Engineer",
    "Site Reliability Engineer",
  ],
  authors: [{ name: "DevOps Engineer" }],
  creator: "DevOps Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "DevOps Engineer | Cloud Infrastructure & Automation",
    description:
      "DevOps Engineer focused on AWS EKS, Terraform, and production reliability.",
    siteName: "DevOps Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Engineer | Cloud Infrastructure & Automation",
    description:
      "DevOps Engineer focused on AWS EKS, Terraform, and production reliability.",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
