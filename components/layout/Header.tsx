"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Moon, Sun, ArrowRight, Zap, Check, Menu, X } from "lucide-react"

interface HeaderProps {
  darkMode: boolean
  userType: "personal" | "business"
  email: string
  isSubmitted: boolean
  isDialogOpen: boolean
  isLoading: boolean
  error: string
  toggleDarkMode: () => void
  toggleUserType: (type: "personal" | "business") => void
  handleDeveloperClick: () => void
  handleHelpClick: () => void
  handleWaitlistSubmit: (e: React.FormEvent) => void
  setEmail: (email: string) => void
  setIsDialogOpen: (open: boolean) => void
  setError: (error: string) => void
}

export default function Header({
  darkMode,
  userType,
  email,
  isSubmitted,
  isDialogOpen,
  isLoading,
  error,
  toggleDarkMode,
  toggleUserType,
  handleDeveloperClick,
  handleHelpClick,
  handleWaitlistSubmit,
  setEmail,
  setIsDialogOpen,
  setError,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`${darkMode ? "bg-gray-900/80" : "bg-white/80"} backdrop-blur-sm sticky top-0 z-50`}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-light tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
                OneClick
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => toggleUserType("business")}
                className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Business
              </button>

              <button
                onClick={() => toggleUserType("personal")}
                className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Personal
              </button>

              <button
                onClick={handleDeveloperClick}
                className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Developer
              </button>

              <button
                onClick={handleHelpClick}
                className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Help
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              
              {/* Desktop Join Waitlist Button */}
              <div className="hidden md:block">
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                  setIsDialogOpen(open)
                  if (!open) {
                    setEmail("")
                    setError("")
                  }
                }}>
                  <DialogTrigger asChild>
                    <Button
                      className={`font-light tracking-wide ${
                        darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      Join Waitlist
                    </Button>
                  </DialogTrigger>
                  <DialogContent className={`${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} sm:max-w-md`}>
                    <DialogHeader>
                      <DialogTitle className={`${darkMode ? "text-white" : "text-gray-900"} text-center`}>
                        Join the Waitlist
                      </DialogTitle>
                      <DialogDescription className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-center`}>
                        Be the first to know when OneClick launches. We'll notify you as soon as we're ready.
                      </DialogDescription>
                    </DialogHeader>
                    {!isSubmitted ? (
                      <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value)
                              if (error) setError("")
                            }}
                            className={`${darkMode ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-200"} ${error ? "border-red-500" : ""}`}
                            disabled={isLoading}
                          />
                          {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                          )}
                        </div>
                        <Button 
                          type="submit" 
                          className={`w-full font-light tracking-wide ${
                            darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                          }`}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Joining...
                            </>
                          ) : (
                            <>
                              Join Waitlist
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center space-y-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <Check className="w-6 h-6 text-green-600" />
                        </div>
                        <p className={`${darkMode ? "text-white" : "text-gray-900"} font-medium`}>
                          You're on the list!
                        </p>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                          We'll notify you as soon as OneClick is ready.
                        </p>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Menu className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-600"}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Rendered outside header */}
      {isMobileMenuOpen && (
      <div className="fixed inset-0 z-[9999] md:hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        
        {/* Mobile Menu */}
        <div className={`absolute right-0 top-0 h-full w-80 ${darkMode ? "bg-gray-900" : "bg-white"} shadow-2xl transform transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-light tracking-tight ${darkMode ? "text-white" : "text-black"}`}>
                  OneClick
                </span>
              </div>
              <button
                onClick={closeMobileMenu}
                className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              >
                <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-600"}`} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 p-6 space-y-6">
              {/* User Type Toggle */}
              <div className="space-y-3">
                <h3 className={`text-sm font-medium tracking-wider uppercase ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Account Type
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      toggleUserType("business")
                      closeMobileMenu()
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      userType === "business"
                        ? darkMode
                          ? "bg-white text-black"
                          : "bg-black text-white"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-800"
                          : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Business
                  </button>
                  <button
                    onClick={() => {
                      toggleUserType("personal")
                      closeMobileMenu()
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      userType === "personal"
                        ? darkMode
                          ? "bg-white text-black"
                          : "bg-black text-white"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-800"
                          : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Personal
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-3">
                <h3 className={`text-sm font-medium tracking-wider uppercase ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Navigation
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleDeveloperClick()
                      closeMobileMenu()
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Developer
                  </button>
                  <button
                    onClick={() => {
                      handleHelpClick()
                      closeMobileMenu()
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Help
                  </button>
                </div>
              </div>

              {/* Dark Mode Toggle */}
              <div className="space-y-3">
                <h3 className={`text-sm font-medium tracking-wider uppercase ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Appearance
                </h3>
                <button
                  onClick={toggleDarkMode}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <span>Dark Mode</span>
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Mobile Join Waitlist Button */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <Dialog open={isDialogOpen} onOpenChange={(open) => {
                setIsDialogOpen(open)
                if (!open) {
                  setEmail("")
                  setError("")
                }
              }}>
                <DialogTrigger asChild>
                  <Button
                    className={`w-full font-light tracking-wide ${
                      darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Join Waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className={`${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} sm:max-w-md`}>
                  <DialogHeader>
                    <DialogTitle className={`${darkMode ? "text-white" : "text-gray-900"} text-center`}>
                      Join the Waitlist
                    </DialogTitle>
                    <DialogDescription className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-center`}>
                      Be the first to know when OneClick launches. We'll notify you as soon as we're ready.
                    </DialogDescription>
                  </DialogHeader>
                  {!isSubmitted ? (
                    <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if (error) setError("")
                          }}
                          className={`${darkMode ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-200"} ${error ? "border-red-500" : ""}`}
                          disabled={isLoading}
                        />
                        {error && (
                          <p className="text-red-500 text-sm">{error}</p>
                        )}
                      </div>
                      <Button 
                        type="submit" 
                        className={`w-full font-light tracking-wide ${
                          darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Joining...
                          </>
                        ) : (
                          <>
                            Join Waitlist
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <p className={`${darkMode ? "text-white" : "text-gray-900"} font-medium`}>
                        You're on the list!
                      </p>
                      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                        We'll notify you as soon as OneClick is ready.
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
} 