"use client";

import * as React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Base animated component
interface AnimatedProps {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft";
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Animated({ 
  children, 
  variant = "fadeInUp", 
  delay = 0,
  className,
  as = "div"
}: AnimatedProps) {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = motion[as as keyof typeof motion] as React.ComponentType<any>;

  if (shouldReduceMotion) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[variant]}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

// Stagger container for animating multiple children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function StaggerContainer({ 
  children, 
  className,
  as = "div" 
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = motion[as as keyof typeof motion] as React.ComponentType<any>;

  if (shouldReduceMotion) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

// Hover lift animation
interface HoverLiftProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  y?: number;
}

export function HoverLift({ 
  children, 
  className,
  scale = 1.02,
  y = -4
}: HoverLiftProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        y,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.span>
  );
}

// Counter animation
interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function Counter({ 
  from, 
  to, 
  duration = 2, 
  className,
  suffix = ""
}: CounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(to);
      return;
    }

    const startTime = Date.now();

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(from + (to - from) * easeOutProgress);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    const timer = setTimeout(updateCount, 100);
    return () => clearTimeout(timer);
  }, [from, to, duration, shouldReduceMotion]);

  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
}