"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language, filename, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border border-border rounded-t-lg text-sm text-muted-foreground">
          <span className="font-mono">{filename}</span>
          {language && (
            <span className="text-xs uppercase tracking-wide">{language}</span>
          )}
        </div>
      )}
      
      <div className="relative">
        <pre className={cn(
          "code-block overflow-x-auto",
          filename ? "rounded-t-none" : "rounded-lg"
        )}>
          <code className="text-sm">{code}</code>
        </pre>
        
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">
            {copied ? "Copied" : "Copy code"}
          </span>
        </Button>
      </div>
    </div>
  );
}