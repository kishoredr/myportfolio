"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Animated DevOps Logo for Loader
function AnimatedDevOpsLogo({ size = 120 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Enhanced gradients for loader */}
      <defs>
        <linearGradient id="bg-gradient-loader" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="30%" stopColor="#10b981" />
          <stop offset="70%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        
        <linearGradient id="white-gradient-loader" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.9" />
        </linearGradient>
        
        <radialGradient id="glow-loader" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        
        <filter id="glow-effect">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background with glow effect */}
      <motion.rect
        width="32"
        height="32"
        rx="10"
        fill="url(#bg-gradient-loader)"
        filter="url(#glow-effect)"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      
      {/* Subtle pulsing glow */}
      <motion.rect
        width="32"
        height="32"
        rx="10"
        fill="url(#glow-loader)"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated cloud */}
      <motion.g 
        transform="translate(6, 8)"
        initial={{ y: 2, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.path
          d="M15 7c0-2.5-2-4.5-4.5-4.5-1.5 0-2.8.7-3.7 1.8C6.3 4.1 5.7 4 5 4c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9C.4 9.4 0 10.2 0 11c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3s-1.3-3-2-3z"
          fill="url(#white-gradient-loader)"
          opacity="0.9"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.g>
      
      {/* Spinning gear */}
      <motion.g 
        transform="translate(4, 20)"
        style={{ transformOrigin: "3px 3px" }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <circle cx="3" cy="3" r="1" fill="url(#white-gradient-loader)" />
        <rect x="2.5" y="0.5" width="1" height="1.5" fill="url(#white-gradient-loader)" opacity="0.8"/>
        <rect x="2.5" y="4" width="1" height="1.5" fill="url(#white-gradient-loader)" opacity="0.8"/>
        <rect x="0.5" y="2.5" width="1.5" height="1" fill="url(#white-gradient-loader)" opacity="0.8"/>
        <rect x="4" y="2.5" width="1.5" height="1" fill="url(#white-gradient-loader)" opacity="0.8"/>
        <rect x="1.2" y="1.2" width="1" height="1" fill="url(#white-gradient-loader)" opacity="0.6" transform="rotate(45 1.7 1.7)"/>
        <rect x="3.8" y="3.8" width="1" height="1" fill="url(#white-gradient-loader)" opacity="0.6" transform="rotate(45 4.3 4.3)"/>
        <rect x="3.8" y="1.2" width="1" height="1" fill="url(#white-gradient-loader)" opacity="0.6" transform="rotate(-45 4.3 1.7)"/>
        <rect x="1.2" y="3.8" width="1" height="1" fill="url(#white-gradient-loader)" opacity="0.6" transform="rotate(-45 1.7 4.3)"/>
      </motion.g>
      
      {/* Animated code brackets */}
      <motion.g 
        transform="translate(17, 10)"
        initial={{ x: 5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.path
          d="M2 0L0 2L2 4M6 4L8 2L6 0"
          stroke="url(#white-gradient-loader)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          animate={{ 
            strokeDasharray: [0, 20],
            strokeDashoffset: [0, -20] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        {/* Blinking cursor */}
        <motion.rect 
          x="9" 
          y="1.5" 
          width="0.8" 
          height="1" 
          fill="url(#white-gradient-loader)" 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.g>
      
      {/* Network nodes with connecting lines */}
      <motion.g 
        transform="translate(22, 20)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.circle 
          cx="2" cy="2" r="1" 
          fill="url(#white-gradient-loader)" 
          opacity="0.7"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle 
          cx="6" cy="3" r="0.8" 
          fill="url(#white-gradient-loader)" 
          opacity="0.6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle 
          cx="4" cy="6" r="0.6" 
          fill="url(#white-gradient-loader)" 
          opacity="0.5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.line 
          x1="2" y1="2" x2="6" y2="3" 
          stroke="url(#white-gradient-loader)" 
          strokeWidth="0.5" 
          opacity="0.4"
          animate={{ 
            strokeDasharray: [0, 10],
            strokeDashoffset: [0, -10] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.line 
          x1="6" y1="3" x2="4" y2="6" 
          stroke="url(#white-gradient-loader)" 
          strokeWidth="0.5" 
          opacity="0.4"
          animate={{ 
            strokeDasharray: [0, 10],
            strokeDashoffset: [0, -10] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5 
          }}
        />
      </motion.g>
      
      {/* Moving pipeline arrows */}
      <motion.g 
        transform="translate(14, 24)"
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.path
          d="M0 2L2 1L2 3L0 2ZM3 2L5 1L5 3L3 2Z"
          fill="url(#white-gradient-loader)"
          opacity="0.6"
          animate={{ x: [0, 2, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.g>
    </motion.svg>
  )
}

// Loading Progress Bar
function LoadingProgress({ progress }: { progress: number }) {
  return (
    <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  )
}

// Main Loader Component
interface DevOpsLoaderProps {
  isLoading: boolean
  onLoadingComplete?: () => void
  duration?: number // Duration in milliseconds
}

export function DevOpsLoader({ 
  isLoading, 
  onLoadingComplete, 
  duration = 6000 // 6 seconds default
}: DevOpsLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  const loadingTexts = [
    "Initializing...",
    "Loading infrastructure...",
    "Configuring containers...",
    "Deploying services...",
    "Optimizing performance...",
    "Almost ready..."
  ]

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (duration / 100))
          
          // Update loading text based on progress
          const textIndex = Math.floor((newProgress / 100) * loadingTexts.length)
          if (textIndex < loadingTexts.length) {
            setLoadingText(loadingTexts[textIndex])
          }
          
          if (newProgress >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              onLoadingComplete?.()
            }, 500) // Small delay before calling completion
            return 100
          }
          
          return newProgress
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isLoading, duration, onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
          
          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                duration: 1
              }}
            >
              <AnimatedDevOpsLogo size={150} />
            </motion.div>
            
            {/* Brand Name */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-3xl font-bold text-white mb-2">
                Kishore D R
              </h1>
              <p className="text-emerald-400 text-lg font-medium">
                DevOps Engineer
              </p>
            </motion.div>
            
            {/* Loading Progress */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <LoadingProgress progress={progress} />
              
              <motion.p
                className="text-white/80 text-sm"
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {loadingText}
              </motion.p>
              
              <motion.p
                className="text-emerald-400/60 text-xs"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {Math.round(progress)}% Complete
              </motion.p>
            </motion.div>
          </div>
          
          {/* Bottom decorative elements */}
          <motion.div
            className="absolute bottom-8 flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4] 
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}