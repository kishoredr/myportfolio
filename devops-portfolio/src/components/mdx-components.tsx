import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default elements
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground leading-7 mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-7">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <div className="my-6">
        <CodeBlock code={children as string} />
      </div>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-primary hover:underline font-medium"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    img: ({ src, alt, ...props }) => (
      <div className="my-6">
        <img 
          src={src} 
          alt={alt} 
          className="rounded-lg border shadow-sm w-full"
          {...props}
        />
        {alt && (
          <p className="text-sm text-muted-foreground text-center mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    ),
    hr: () => (
      <hr className="my-8 border-border" />
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">
        {children}
      </td>
    ),
    
    // Custom components
    Badge,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CodeBlock,
    
    // Custom callout component
    Callout: ({ type = "info", children }: { type?: "info" | "warning" | "error" | "success", children: React.ReactNode }) => {
      const variants = {
        info: "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-100",
        error: "border-red-500 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100",
        success: "border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100"
      };
      
      return (
        <div className={`border-l-4 p-4 my-4 rounded-r-lg ${variants[type]}`}>
          {children}
        </div>
      );
    },
    
    // Metrics component for case studies
    Metrics: ({ children }: { children: React.ReactNode }) => (
      <Card className="my-6">
        <CardHeader>
          <CardTitle className="text-lg">Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {children}
          </div>
        </CardContent>
      </Card>
    ),
    
    Metric: ({ value, label, description }: { value: string, label: string, description?: string }) => (
      <div className="text-center p-4 bg-muted/30 rounded-lg">
        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
        <div className="text-sm font-medium mb-1">{label}</div>
        {description && (
          <div className="text-xs text-muted-foreground">{description}</div>
        )}
      </div>
    ),

    ...components,
  };
}