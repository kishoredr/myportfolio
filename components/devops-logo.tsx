import React from "react"

interface LogoProps {
  className?: string
  size?: number
}

export function DevOpsLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#bg-gradient)"
      />
      
      {/* Cloud shape (representing cloud infrastructure) */}
      <path
        d="M8 12c0-1.5 1-3 3-3 0-2 2-3 4-3s4 1 4 3c2 0 3 1.5 3 3s-1 3-3 3H11c-2 0-3-1.5-3-3z"
        fill="url(#gear-gradient)"
        opacity="0.8"
      />
      
      {/* Gear/Cog (representing automation) */}
      <g transform="translate(12, 18)">
        <circle cx="4" cy="4" r="1.5" fill="url(#gear-gradient)" />
        <path
          d="M4 0.5L4.8 1.2L6 0.8L6.2 2L7.5 2.5L6.8 3.2L8 4L6.8 4.8L7.5 5.5L6.2 6L6 7.2L4.8 6.8L4 7.5L3.2 6.8L2 7.2L1.8 6L0.5 5.5L1.2 4.8L0 4L1.2 3.2L0.5 2.5L1.8 2L2 0.8L3.2 1.2L4 0.5z"
          fill="url(#gear-gradient)"
          opacity="0.7"
        />
      </g>
      
      {/* Code brackets (representing development) */}
      <path
        d="M6 20L4 22L6 24M10 24L12 22L10 20"
        stroke="url(#gear-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      
      {/* Pipeline/Flow arrows (representing CI/CD) */}
      <path
        d="M20 9L22 11L20 13M24 9L26 11L24 13"
        stroke="url(#gear-gradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Container/Box icon (representing containerization) */}
      <rect
        x="20"
        y="20"
        width="8"
        height="6"
        rx="1"
        stroke="url(#gear-gradient)"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <line
        x1="20"
        y1="22"
        x2="28"
        y2="22"
        stroke="url(#gear-gradient)"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  )
}