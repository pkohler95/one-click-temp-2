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
    })
  }

  const handleHelpClick = () => {
    toast({
      title: "Coming soon",
      description: "Help center will be available soon.",
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
    })
  }

  const handleApiClick = () => {
    toast({
      title: "Coming soon",
      description: "API documentation will be available soon.",
    })
  }

  const handleDocumentationClick = () => {
    toast({
      title: "Coming soon",
      description: "Documentation will be available soon.",
    })
  }

  const handleAboutClick = () => {
    toast({
      title: "Coming soon",
      description: "About page will be available soon.",
    })
  }

  const handleCareersClick = () => {
    toast({
      title: "Coming soon",
      description: "Careers page will be available soon.",
    })
  }

  const handleBlogClick = () => {
    toast({
      title: "Coming soon",
      description: "Blog will be available soon.",
    })
  }

  const handleContactClick = () => {
    toast({
      title: "Coming soon",
      description: "Contact page will be available soon.",
    })
  }

  const handlePrivacyClick = () => {
    toast({
      title: "Coming soon",
      description: "Privacy policy will be available soon.",
    })
  }

  const handleTermsClick = () => {
    toast({
      title: "Coming soon",
      description: "Terms of service will be available soon.",
    })
  }

  const handleSecurityClick = () => {
    toast({
      title: "Coming soon",
      description: "Security information will be available soon.",
    })
  }

  const handleComplianceClick = () => {
    toast({
      title: "Coming soon",
      description: "Compliance information will be available soon.",
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

      {/* Platform Features Section with Staggered Cards */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className={`mb-6 font-light tracking-wider ${darkMode ? "bg-gray-800 text-gray-300" : ""}`}
          >
            Platform Features
          </Badge>
          <h2
            className={`text-5xl font-extralight leading-tight mb-8 ${darkMode ? "text-white" : "text-gray-900"} tracking-tight`}
          >
            {userType === "business" 
              ? "All-in-one infrastructure for scaling your payment system"
              : "Instant savings every time you pay"
            }
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-200" : "text-gray-600"} font-light leading-relaxed tracking-wide`}
          >
            {userType === "business" 
              ? "From payment processing to compliance, OneClick provides the tools and infrastructure to power your financial services."
              : "From seamless checkout to instant savings, OneClick upgrades the way you pay."
            }
          </p>
        </div>

        <div className="space-y-32">
          {userType === "business" ? (
            <>
              {/* Business Features */}
              {/* First Feature - Save Up to 3% on Processing Fees */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl bg-gradient-to-br from-green-200 to-emerald-300 p-10 h-96 relative overflow-hidden">
                  <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">
                    <div className="mb-2">💸</div>
                    <div>Save Up to 3% on Processing Fees</div>
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                    Stop overpaying for credit card transactions. Our platform uses low-cost rails like ACH and stablecoins, helping you keep more of every sale.
                  </p>

                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 z-0 opacity-10">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-32 border border-gray-500 rounded-full"
                        style={{
                          top: "70%",
                          left: "50%",
                          transform: `translate(-50%, -50%) scale(${i * 0.3 + 0.7})`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <p className="text-gray-700 font-light tracking-wide">Low-Cost Rails</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Accept payments via ACH, USDC, or Bitcoin Lightning
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Bypass 2.9%+ card fees and keep your margins
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Transparent pricing with no hidden costs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Feature - Compliance-Ready from Day One */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        MSB + KYC/AML compliance handled for you
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Operates under legally vetted AOP framework
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Avoids state-by-state money transmitter licensing
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-300 p-10 h-96 relative overflow-hidden order-1 lg:order-2">
                  <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">
                    <div className="mb-2">✅</div>
                    <div>Compliance-Ready from Day One</div>
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                    No money transmitter license? No problem. We operate under the Agent of the Payee model, so you can accept payments without regulatory headaches.
                  </p>

                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(2)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-full border border-gray-500"
                          style={{
                            width: "200px",
                            height: "200px",
                            transform: `rotate(${i * 45}deg)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <p className="text-gray-700 font-light tracking-wide">AOP Framework</p>
                  </div>
                </div>
              </div>

              {/* Third Feature - Easy Integration & Onboarding */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-pink-300 p-10 h-96 relative overflow-hidden">
                  <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">
                    <div className="mb-2">⚙️</div>
                    <div>Easy Integration & Onboarding</div>
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                    Get started in minutes—not weeks. Whether you use WooCommerce, Shopify, or a custom site, our tools make setup seamless.
                  </p>

                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 z-0 opacity-10">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-full h-px bg-gray-500 origin-center"
                        style={{
                          width: "300px",
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <p className="text-gray-700 font-light tracking-wide">One-Click Setup</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Pre-built plugins for top platforms
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        One-click hosted checkout and payment links
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Step-by-step onboarding and developer docs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Personal Features */}
              {/* First Feature - Instant Savings on Every Purchase */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl bg-gradient-to-br from-green-200 to-emerald-300 p-10 h-96 relative overflow-hidden">
                  <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">
                    <div className="mb-2">💵</div>
                    <div>Instant Savings on Every Purchase</div>
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                    Save up to 2% instantly—no points, no gimmicks, just real money back.
                  </p>

                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 z-0 opacity-10">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-32 border border-gray-500 rounded-full"
                        style={{
                          top: "70%",
                          left: "50%",
                          transform: `translate(-50%, -50%) scale(${i * 0.3 + 0.7})`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <p className="text-gray-700 font-light tracking-wide">Instant Cash Back</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Instant cash back applied at checkout
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        No need to track points or wait for rewards
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Works automatically at participating merchants
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Feature - Express Checkout */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        One-click payments with saved info
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        No need to enter card details or shipping every time
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Works across all supported merchants
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-300 p-10 h-96 relative overflow-hidden order-1 lg:order-2">
                  <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">
                    <div className="mb-2">⚡</div>
                    <div>Express Checkout</div>
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                    Skip the forms and pay in seconds—fast, secure, and seamless.
                  </p>

                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {[...Array(2)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-full border border-gray-500"
                          style={{
                            width: "200px",
                            height: "200px",
                            transform: `rotate(${i * 45}deg)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <p className="text-gray-700 font-light tracking-wide">One-Click Pay</p>
                  </div>
                </div>
              </div>

              {/* Third Feature - Easy, 2-Minute Onboarding */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-pink-300 p-10 h-96 relative overflow-hidden">
                  <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">
                    <div className="mb-2">🪄</div>
                    <div>Easy, 2-Minute Onboarding</div>
                  </h3>
                  <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                    Get started fast—no crypto wallet or technical setup required.
                  </p>

                  {/* Geometric Pattern */}
                  <div className="absolute inset-0 z-0 opacity-10">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-full h-px bg-gray-500 origin-center"
                        style={{
                          width: "300px",
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <p className="text-gray-700 font-light tracking-wide">Quick Start</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Sign up with just your email
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Securely connect your bank via Plaid
                      </span>
                    </li>
                    <li className="flex items-center space-x-5">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide text-xl`}>
                        Start saving and shopping right away
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center space-y-10">
          <Badge
            variant="secondary"
            className={`font-light tracking-wider ${darkMode ? "bg-gray-800 text-gray-300" : ""}`}
          >
            Get Started
          </Badge>
          <h2
            className={`text-5xl font-extralight ${darkMode ? "text-white" : "text-gray-900"} tracking-tight leading-tight`}
          >
            {userType === "business" 
              ? "Ready to accelerate your business?"
              : "Ready to start saving?"
            }
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-200" : "text-gray-600"} font-light leading-relaxed tracking-wide`}
          >
            {userType === "business" 
              ? "Join the next wave of businesses building smarter payments with OneClick."
              : "Join OneClick to start saving up to 2% on every purchase"
            }
          </p>
          <div className="flex justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 font-light tracking-wider px-10 py-4 text-base"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  )
}
