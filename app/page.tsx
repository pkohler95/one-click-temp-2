"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import Features from "@/components/layout/Features"
import CTA from "@/components/layout/CTA"
import Footer from "@/components/layout/Footer"

export default function OneClickLanding() {
  const { toast } = useToast()
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [userType, setUserType] = useState<"personal" | "business">("business")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Initialize dark mode after component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    
    // Check if user has manually set a preference
    const savedPreference = localStorage.getItem('darkMode')
    
    if (savedPreference !== null) {
      // User has manually set a preference, use it
      const isDark = savedPreference === 'true'
      setDarkMode(isDark)
    } else {
      // No manual preference, check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(systemPrefersDark)
    }

    // Listen for system preference changes (only if user hasn't manually set preference)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemPreferenceChange = (e: MediaQueryListEvent) => {
      const savedPreference = localStorage.getItem('darkMode')
      if (savedPreference === null) {
        // Only update if user hasn't manually set a preference
        setDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleSystemPreferenceChange)

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleSystemPreferenceChange)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    // Save user's manual preference
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  const toggleUserType = (type: "personal" | "business") => {
    setUserType(type)
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userType })
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        return
      }
      setIsSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error("Waitlist submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeveloperClick = () => {
    toast({
      title: "Coming soon",
      description: "Developer resources will be available soon.",
      duration: 2000,
    })
  }

  const handleHelpClick = () => {
    toast({
      title: "Coming soon",
      description: "Help center will be available soon.",
      duration: 2000,
    })
  }

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handlePricingClick = () => {
    toast({
      title: "Coming soon",
      description: "Pricing information will be available soon.",
      duration: 2000,
    })
  }

  const handleApiClick = () => {
    toast({
      title: "Coming soon",
      description: "API documentation will be available soon.",
      duration: 2000,
    })
  }

  const handleDocumentationClick = () => {
    toast({
      title: "Coming soon",
      description: "Documentation will be available soon.",
      duration: 2000,
    })
  }

  const handleAboutClick = () => {
    toast({
      title: "Coming soon",
      description: "About page will be available soon.",
      duration: 2000,
    })
  }

  const handleCareersClick = () => {
    toast({
      title: "Coming soon",
      description: "Careers page will be available soon.",
      duration: 2000,
    })
  }

  const handleBlogClick = () => {
    toast({
      title: "Coming soon",
      description: "Blog will be available soon.",
      duration: 2000,
    })
  }

  const handleContactClick = () => {
    toast({
      title: "Coming soon",
      description: "Contact page will be available soon.",
      duration: 2000,
    })
  }

  const handlePrivacyClick = () => {
    toast({
      title: "Coming soon",
      description: "Privacy policy will be available soon.",
      duration: 2000,
    })
  }

  const handleTermsClick = () => {
    toast({
      title: "Coming soon",
      description: "Terms of service will be available soon.",
      duration: 2000,
    })
  }

  const handleSecurityClick = () => {
    toast({
      title: "Coming soon",
      description: "Security information will be available soon.",
      duration: 2000,
    })
  }

  const handleComplianceClick = () => {
    toast({
      title: "Coming soon",
      description: "Compliance information will be available soon.",
      duration: 2000,
    })
  }

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-black transition-colors duration-300">
        <div className="container mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Header
        darkMode={darkMode}
        userType={userType}
        email={email}
        isSubmitted={isSubmitted}
        isDialogOpen={isDialogOpen}
        isLoading={isLoading}
        error={error}
        toggleDarkMode={toggleDarkMode}
        toggleUserType={toggleUserType}
        handleDeveloperClick={handleDeveloperClick}
        handleHelpClick={handleHelpClick}
        handleWaitlistSubmit={handleWaitlistSubmit}
        setEmail={setEmail}
        setIsDialogOpen={setIsDialogOpen}
        setError={setError}
      />

      {/* Gradient Background Wrapper for Hero, Features, and CTA sections */}
      <div
        className={`relative ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"}`}
      >
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          userType={userType}
          toggleUserType={toggleUserType}
        />

        {/* Features Section */}
        <Features
          darkMode={darkMode}
          userType={userType}
          toggleUserType={toggleUserType}
        />

        {/* CTA Section */}
        <CTA
          darkMode={darkMode}
          userType={userType}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          handleWaitlistSubmit={handleWaitlistSubmit}
          isLoading={isLoading}
          isSubmitted={isSubmitted}
          email={email}
          setEmail={setEmail}
          error={error}
          setError={setError}
        />
      </div>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        scrollToFeatures={scrollToFeatures}
        handlePricingClick={handlePricingClick}
        handleApiClick={handleApiClick}
        handleDocumentationClick={handleDocumentationClick}
        handleAboutClick={handleAboutClick}
        handleCareersClick={handleCareersClick}
        handleBlogClick={handleBlogClick}
        handleContactClick={handleContactClick}
        handlePrivacyClick={handlePrivacyClick}
        handleTermsClick={handleTermsClick}
        handleSecurityClick={handleSecurityClick}
        handleComplianceClick={handleComplianceClick}
      />
      <Toaster />
    </div>
  )
}
