import { Zap } from "lucide-react"

interface FooterProps {
  darkMode: boolean
  scrollToFeatures: () => void
  handlePricingClick: () => void
  handleApiClick: () => void
  handleDocumentationClick: () => void
  handleAboutClick: () => void
  handleCareersClick: () => void
  handleBlogClick: () => void
  handleContactClick: () => void
  handlePrivacyClick: () => void
  handleTermsClick: () => void
  handleSecurityClick: () => void
  handleComplianceClick: () => void
}

export default function Footer({
  darkMode,
  scrollToFeatures,
  handlePricingClick,
  handleApiClick,
  handleDocumentationClick,
  handleAboutClick,
  handleCareersClick,
  handleBlogClick,
  handleContactClick,
  handlePrivacyClick,
  handleTermsClick,
  handleSecurityClick,
  handleComplianceClick,
}: FooterProps) {
  return (
    <footer className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-600"} py-16`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium tracking-wide">OneClick</span>
            </div>
            <p className={`text-sm font-light tracking-wide leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              The way payments should be.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className={`font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}>Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={scrollToFeatures}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={handlePricingClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={handleApiClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  API
                </button>
              </li>
              <li>
                <button
                  onClick={handleDocumentationClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className={`font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}>Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleAboutClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={handleCareersClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={handleBlogClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className={`font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handlePrivacyClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={handleTermsClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={handleSecurityClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Security
                </button>
              </li>
              <li>
                <button
                  onClick={handleComplianceClick}
                  className={`text-sm font-light tracking-wide hover:${darkMode ? "text-white" : "text-gray-900"} transition-colors`}
                >
                  Compliance
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex justify-center">
            <p className={`text-sm font-light tracking-wide ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
              © 2025 OneClick. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 