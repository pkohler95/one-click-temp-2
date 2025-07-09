"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Moon,
  Sun,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
  CreditCard,
  PieChart,
  ChevronDown,
  Check,
  DollarSign,
  CheckCircle,
  Settings,
} from "lucide-react"
import Link from "next/link"
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
  const [userType, setUserType] = useState<"personal" | "business">("business")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
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

      {/* Hero Section with Gradient */}
      <Hero
        darkMode={darkMode}
        userType={userType}
        toggleUserType={toggleUserType}
      />

      {/* Platform Features Section */}
      <Features darkMode={darkMode} userType={userType} />

      {/* CTA Section */}
      <CTA 
        darkMode={darkMode} 
        userType={userType} 
        isDialogOpen={isDialogOpen} 
        setIsDialogOpen={setIsDialogOpen} 
      />

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
