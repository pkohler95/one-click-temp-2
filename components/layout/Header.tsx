"use client"

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
import { Moon, Sun, ArrowRight, Zap, Check } from "lucide-react"

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
  return (
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
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open)
              if (!open) {
                setEmail("")
                setError("")
              }
            }}>
              <DialogTrigger asChild>
                <Button
                  className={`${darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"} font-light tracking-wide`}
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
                      className="w-full bg-black text-white hover:bg-gray-800 font-light tracking-wide"
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
    </header>
  )
} 