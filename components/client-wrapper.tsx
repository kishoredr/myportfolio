"use client"

import { useState, useEffect } from 'react'
import { DevOpsLoader } from './devops-loader'

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for 6 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <DevOpsLoader 
        isLoading={isLoading}
        onLoadingComplete={() => setIsLoading(false)}
        duration={6000}
      />
      {children}
    </>
  )
}