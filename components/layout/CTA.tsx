import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"

interface CTAProps {
  darkMode: boolean
  userType: "personal" | "business"
  isDialogOpen: boolean
  setIsDialogOpen: (open: boolean) => void
}

export default function CTA({ darkMode, userType, isDialogOpen, setIsDialogOpen }: CTAProps) {
  return (
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
            ? "Join the next wave of businesses building smarter payments with OneClick"
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
  )
} 