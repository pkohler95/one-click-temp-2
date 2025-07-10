"use client"

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
import { ArrowRight, Check } from "lucide-react"

interface CTAProps {
  darkMode: boolean
  userType: "personal" | "business"
  isDialogOpen: boolean
  setIsDialogOpen: (open: boolean) => void
  handleWaitlistSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  isSubmitted: boolean
  email: string
  setEmail: (email: string) => void
  error: string
  setError: (error: string) => void
}

export default function CTA({ 
  darkMode, 
  userType, 
  isDialogOpen, 
  setIsDialogOpen, 
  handleWaitlistSubmit, 
  isLoading, 
  isSubmitted, 
  email, 
  setEmail, 
  error, 
  setError 
}: CTAProps) {
  return (
    <section className="relative">
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
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
              ? "Join the next wave of businesses building smarter payments with OneClick"
              : "Join OneClick to start saving up to 2% on every purchase"
            }
          </p>
          <div className="flex justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className={`font-light tracking-wider px-10 py-4 text-base ${
                    darkMode 
                      ? "bg-white text-black hover:bg-gray-200" 
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
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
    </section>
  )
} 