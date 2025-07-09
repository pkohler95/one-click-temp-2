"use client"

import {
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
  CreditCard,
  PieChart,
} from "lucide-react"

interface HeroProps {
  darkMode: boolean
  userType: "personal" | "business"
  toggleUserType: (type: "personal" | "business") => void
}

export default function Hero({ darkMode, userType, toggleUserType }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative pb-0">
        <div className="space-y-8">
          {/* Hero Text Content */}
          <div className="text-center space-y-10">
            <div className="space-y-8">
              <h1
                className={`text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                The way payments
                <br />
                <span className="font-light">should be</span>
              </h1>
              <p
                className={`text-xl leading-relaxed max-w-3xl mx-auto ${darkMode ? "text-gray-200" : "text-gray-600"} font-light tracking-wide`}
              >
                {userType === "business" 
                  ? "OneClick simplifies stablecoin payments for businesses—offering low fees, easy integration, and built-in compliance"
                  : "OneClick lets you save up to 2% instantly on every purchase—built for modern spending"
                }
              </p>
            </div>
          </div>

          {/* User Type Toggle - Now below hero text */}
          <div className="flex justify-center">
            <div
              className={`${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"} rounded-full p-1 shadow-sm`}
            >
              <div className="flex">
                <button
                  onClick={() => toggleUserType("business")}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                    userType === "business"
                      ? darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Business
                </button>
                <button
                  onClick={() => toggleUserType("personal")}
                  className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                    userType === "personal"
                      ? darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Personal
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative w-full">
            {/* Full-width dark blue/purple background */}
            <div className="relative py-8">
              <div className="container mx-auto px-6">
                <div className="relative max-w-6xl mx-auto">
                  {/* Desktop Dashboard - Hidden on mobile */}
                  <div className={`relative ${darkMode ? "bg-gray-900/95 backdrop-blur-sm border-gray-700/50" : "bg-white border-gray-200"} rounded-2xl border overflow-hidden hidden lg:block`}>
                    {/* Dashboard Header */}
                    <div
                      className={`flex items-center justify-between p-4 border-b ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-gray-50"}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className={`font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}>
                          OneClick {userType === "business" ? "Business" : "Personal"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search or jump to"
                            className={`pl-8 pr-4 py-1.5 text-sm border rounded-lg font-light ${darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-200 text-gray-900"}`}
                            readOnly
                          />
                          <svg
                            className={`w-4 h-4 absolute left-2.5 top-2 ${darkMode ? "text-gray-400" : "text-gray-400"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg font-medium tracking-wide">
                          {userType === "business" ? "Move Money" : "Send Money"}
                        </button>
                        <div className={`w-8 h-8 ${darkMode ? "bg-gray-600" : "bg-gray-300"} rounded-full`}></div>
                      </div>
                    </div>

                    <div className="flex">
                      {/* Sidebar */}
                      <div
                        className={`w-48 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"} border-r p-4`}
                      >
                        <nav className="space-y-1">
                          <div
                            className={`flex items-center space-x-2 px-2 py-1.5 text-blue-600 ${darkMode ? "bg-blue-900/50" : "bg-blue-50"} rounded`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span className="text-sm font-medium tracking-wide">Home</span>
                          </div>
                          <div
                            className={`flex items-center justify-between px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                          >
                            <div className="flex items-center space-x-2">
                              <BarChart3 className="w-4 h-4" />
                              <span className="text-sm font-light tracking-wide">
                                {userType === "business" ? "Tasks" : "Activity"}
                              </span>
                            </div>
                            <span
                              className={`text-xs ${darkMode ? "bg-gray-600 text-gray-200" : "bg-gray-200 text-gray-800"} px-1.5 py-0.5 rounded font-medium`}
                            >
                              {userType === "business" ? "12" : "3"}
                            </span>
                          </div>
                          <div
                            className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                          >
                            <CreditCard className="w-4 h-4" />
                            <span className="text-sm font-light tracking-wide">
                              {userType === "business" ? "Transactions" : "Payments"}
                            </span>
                          </div>
                          <div
                            className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                          >
                            <ArrowRight className="w-4 h-4" />
                            <span className="text-sm font-light tracking-wide">
                              {userType === "business" ? "Payments" : "Send & Request"}
                            </span>
                          </div>
                          <div
                            className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                          >
                            <CreditCard className="w-4 h-4" />
                            <span className="text-sm font-light tracking-wide">
                              {userType === "business" ? "Cards" : "Wallet"}
                            </span>
                          </div>
                          {userType === "business" && (
                            <>
                              <div
                                className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                              >
                                <TrendingUp className="w-4 h-4" />
                                <span className="text-sm font-light tracking-wide">Capital</span>
                              </div>
                              <div
                                className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                              >
                                <PieChart className="w-4 h-4" />
                                <span className="text-sm font-light tracking-wide">Accounts</span>
                              </div>
                            </>
                          )}
                        </nav>

                        <div className="mt-6">
                          <p
                            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mb-2 font-light tracking-wider uppercase`}
                          >
                            {userType === "business" ? "Workflows" : "Tools"}
                          </p>
                          <div className="space-y-1">
                            {userType === "business" ? (
                              <>
                                <div
                                  className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                                >
                                  <span className="text-sm font-light tracking-wide">Bill Pay</span>
                                </div>
                                <div
                                  className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                                >
                                  <span className="text-sm font-light tracking-wide">Invoicing</span>
                                </div>
                                <div
                                  className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                                >
                                  <span className="text-sm font-light tracking-wide">Accounting</span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                                >
                                  <span className="text-sm font-light tracking-wide">Budget</span>
                                </div>
                                <div
                                  className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                                >
                                  <span className="text-sm font-light tracking-wide">Goals</span>
                                </div>
                                <div
                                  className={`flex items-center space-x-2 px-2 py-1.5 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} rounded`}
                                >
                                  <span className="text-sm font-light tracking-wide">Rewards</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-6">
                          <h1
                            className={`text-2xl font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                          >
                            Welcome, {userType === "business" ? "Sarah" : "Alex"}
                          </h1>
                          <button
                            className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                          >
                            Customize
                          </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mb-8">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium tracking-wide flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4" />
                            <span>{userType === "business" ? "Send" : "Send Money"}</span>
                          </button>
                          <button
                            className={`px-4 py-2 border rounded-lg text-sm font-light tracking-wide ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-700"}`}
                          >
                            {userType === "business" ? "Request" : "Request Money"}
                          </button>
                          {userType === "business" && (
                            <>
                              <button
                                className={`px-4 py-2 border rounded-lg text-sm font-light tracking-wide ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-700"}`}
                              >
                                Transfer
                              </button>
                              <button
                                className={`px-4 py-2 border rounded-lg text-sm font-light tracking-wide ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-700"}`}
                              >
                                Deposit
                              </button>
                              <button
                                className={`px-4 py-2 border rounded-lg text-sm font-light tracking-wide ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-700"}`}
                              >
                                Pay Bill
                              </button>
                              <button
                                className={`px-4 py-2 border rounded-lg text-sm font-light tracking-wide ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-700"}`}
                              >
                                Create Invoice
                              </button>
                            </>
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          {/* Balance Section */}
                          <div className="col-span-2">
                            <div className="flex items-center space-x-2 mb-2">
                              <span
                                className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                              >
                                {userType === "business" ? "OneClick Balance" : "Account Balance"}
                              </span>
                              <Shield className="w-4 h-4 text-blue-500" />
                            </div>
                            <div
                              className={`text-3xl font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mb-1`}
                            >
                              {userType === "business" ? "$8,247,582.19" : "$12,847.32"}
                            </div>
                            <div className="flex items-center space-x-4 mb-4">
                              <span
                                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} font-light tracking-wide`}
                              >
                                Last 30 Days
                              </span>
                              <span className="text-sm text-green-600 font-medium">
                                {userType === "business" ? "+$1.8M" : "+$2.1K"}
                              </span>
                              <span className="text-sm text-red-600 font-medium">
                                {userType === "business" ? "-$892K" : "-$1.2K"}
                              </span>
                            </div>

                            {/* Chart Area */}
                            <div
                              className={`${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-700" : "bg-gradient-to-r from-purple-50 to-blue-50"} rounded-lg p-4 h-48 relative`}
                            >
                              <svg className="w-full h-full" viewBox="0 0 400 150">
                                <defs>
                                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d="M 0 120 Q 50 100 100 90 T 200 85 T 300 75 T 400 70"
                                  stroke="#8B5CF6"
                                  strokeWidth="2"
                                  fill="none"
                                />
                                <path
                                  d="M 0 120 Q 50 100 100 90 T 200 85 T 300 75 T 400 70 L 400 150 L 0 150 Z"
                                  fill="url(#chartGradient)"
                                />
                                {/* Data points */}
                                <circle cx="100" cy="90" r="3" fill="#8B5CF6" />
                                <circle cx="200" cy="85" r="3" fill="#8B5CF6" />
                                <circle cx="300" cy="75" r="3" fill="#8B5CF6" />
                              </svg>
                              <div
                                className={`absolute bottom-2 left-4 right-4 flex justify-between text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} font-light`}
                              >
                                <span>Nov 15</span>
                                <span>Nov 22</span>
                                <span>Nov 29</span>
                                <span>Dec 6</span>
                              </div>
                            </div>
                          </div>

                          {/* Accounts Section */}
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <h3
                                className={`font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                              >
                                {userType === "business" ? "Accounts" : "Recent Activity"}
                              </h3>
                              <button
                                className={`${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                              </button>
                            </div>
                            <div className="space-y-3">
                              {userType === "business" ? (
                                <>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Payroll
                                    </span>
                                    <span
                                      className={`text-sm font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                    >
                                      $847,293.42
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Operating Expenses
                                    </span>
                                    <span
                                      className={`text-sm font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                    >
                                      $1,156,847.18
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Treasury
                                    </span>
                                    <span
                                      className={`text-sm font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                    >
                                      $4,892,617.29
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Accounts Payable
                                    </span>
                                    <span
                                      className={`text-sm font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                    >
                                      $184,527.63
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Accounts Receivable
                                    </span>
                                    <span
                                      className={`text-sm font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                    >
                                      $0.00
                                    </span>
                                  </div>
                                  <button className="text-sm text-blue-600 hover:text-blue-700 font-light tracking-wide">
                                    +3 View all accounts
                                  </button>
                                </>
                              ) : (
                                <>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Coffee Shop
                                    </span>
                                    <span className="text-sm font-medium tracking-tight text-red-600">-$4.50</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Salary Deposit
                                    </span>
                                    <span className="text-sm font-medium tracking-tight text-green-600">
                                      +$3,200.00
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Grocery Store
                                    </span>
                                    <span className="text-sm font-medium tracking-tight text-red-600">-$87.23</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Gas Station
                                    </span>
                                    <span className="text-sm font-medium tracking-tight text-red-600">-$45.00</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                    >
                                      Friend Payment
                                    </span>
                                    <span className="text-sm font-medium tracking-tight text-green-600">+$25.00</span>
                                  </div>
                                  <button className="text-sm text-blue-600 hover:text-blue-700 font-light tracking-wide">
                                    View all transactions
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Cards */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                          {userType === "business" ? (
                            <>
                              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-4`}>
                                <div className="flex items-center justify-between mb-2">
                                  <span
                                    className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                                  >
                                    Invoicing
                                  </span>
                                  <button
                                    className={`w-6 h-6 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded flex items-center justify-center`}
                                  >
                                    <svg
                                      className={`w-4 h-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-4`}>
                                <span
                                  className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  Credit Card
                                </span>
                                <div
                                  className={`text-lg font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                                >
                                  $8,247.00
                                </div>
                              </div>
                              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-4`}>
                                <div className="flex items-center justify-between mb-2">
                                  <span
                                    className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                                  >
                                    Bill Pay
                                  </span>
                                  <button
                                    className={`w-6 h-6 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded flex items-center justify-center`}
                                  >
                                    <svg
                                      className={`w-4 h-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-4`}>
                                <span
                                  className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  Savings Goal
                                </span>
                                <div
                                  className={`text-lg font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                                >
                                  $2,847 / $5,000
                                </div>
                              </div>
                              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-4`}>
                                <span
                                  className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  Credit Score
                                </span>
                                <div
                                  className={`text-lg font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                                >
                                  742
                                </div>
                              </div>
                              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-4`}>
                                <span
                                  className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  Rewards
                                </span>
                                <div
                                  className={`text-lg font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                                >
                                  1,247 pts
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Footer Disclaimer */}
                    <div className="bg-gray-900 text-white p-3">
                      <p className="text-xs text-center font-light tracking-wide leading-relaxed">
                        OneClick is a financial technology company, not a bank.
                      </p>
                    </div>
                  </div>

                  {/* Mobile Dashboard - Visible on mobile */}
                  <div className={`relative ${darkMode ? "bg-gray-900/95 backdrop-blur-sm border-gray-700/50" : "bg-white border-gray-200"} rounded-2xl border overflow-hidden lg:hidden`}>
                    {/* Mobile Dashboard Header */}
                    <div
                      className={`flex items-center justify-between p-3 border-b ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-100 bg-gray-50"}`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}>
                          OneClick {userType === "business" ? "Business" : "Personal"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium tracking-wide">
                          {userType === "business" ? "Move Money" : "Send Money"}
                        </button>
                        <div className={`w-6 h-6 ${darkMode ? "bg-gray-600" : "bg-gray-300"} rounded-full`}></div>
                      </div>
                    </div>

                    {/* Mobile Main Content */}
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h1
                          className={`text-lg font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                        >
                          Welcome, {userType === "business" ? "Sarah" : "Alex"}
                        </h1>
                      </div>

                      {/* Mobile Action Buttons */}
                      <div className="flex space-x-2 mb-6">
                        <button className="px-3 py-2 bg-blue-600 text-white rounded text-xs font-medium tracking-wide flex items-center space-x-1">
                          <ArrowRight className="w-3 h-3" />
                          <span>{userType === "business" ? "Send" : "Send Money"}</span>
                        </button>
                        <button
                          className={`px-3 py-2 border rounded text-xs font-light tracking-wide ${darkMode ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-700"}`}
                        >
                          {userType === "business" ? "Request" : "Request Money"}
                        </button>
                      </div>

                      {/* Mobile Balance Section */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                          >
                            {userType === "business" ? "OneClick Balance" : "Account Balance"}
                          </span>
                          <Shield className="w-3 h-3 text-blue-500" />
                        </div>
                        <div
                          className={`text-2xl font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mb-1`}
                        >
                          {userType === "business" ? "$8,247,582.19" : "$12,847.32"}
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span
                            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} font-light tracking-wide`}
                          >
                            Last 30 Days
                          </span>
                          <span className="text-xs text-green-600 font-medium">
                            {userType === "business" ? "+$1.8M" : "+$2.1K"}
                          </span>
                          <span className="text-xs text-red-600 font-medium">
                            {userType === "business" ? "-$892K" : "-$1.2K"}
                          </span>
                        </div>

                        {/* Mobile Chart Area */}
                        <div
                          className={`${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-700" : "bg-gradient-to-r from-purple-50 to-blue-50"} rounded-lg p-3 h-32 relative`}
                        >
                          <svg className="w-full h-full" viewBox="0 0 400 150">
                            <defs>
                              <linearGradient id="chartGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0 120 Q 50 100 100 90 T 200 85 T 300 75 T 400 70"
                              stroke="#8B5CF6"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path
                              d="M 0 120 Q 50 100 100 90 T 200 85 T 300 75 T 400 70 L 400 150 L 0 150 Z"
                              fill="url(#chartGradientMobile)"
                            />
                            {/* Data points */}
                            <circle cx="100" cy="90" r="2" fill="#8B5CF6" />
                            <circle cx="200" cy="85" r="2" fill="#8B5CF6" />
                            <circle cx="300" cy="75" r="2" fill="#8B5CF6" />
                          </svg>
                          <div
                            className={`absolute bottom-1 left-3 right-3 flex justify-between text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} font-light`}
                          >
                            <span>Nov 15</span>
                            <span>Nov 22</span>
                            <span>Nov 29</span>
                            <span>Dec 6</span>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Recent Activity */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3
                            className={`text-sm font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                          >
                            {userType === "business" ? "Accounts" : "Recent Activity"}
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {userType === "business" ? (
                            <>
                              <div className="flex justify-between items-center">
                                <span
                                  className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                >
                                  Payroll
                                </span>
                                <span
                                  className={`text-xs font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  $847,293.42
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span
                                  className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                >
                                  Operating Expenses
                                </span>
                                <span
                                  className={`text-xs font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  $1,156,847.18
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span
                                  className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                >
                                  Treasury
                                </span>
                                <span
                                  className={`text-xs font-medium tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
                                >
                                  $4,892,617.29
                                </span>
                              </div>
                              <button className="text-xs text-blue-600 hover:text-blue-700 font-light tracking-wide">
                                +3 View all accounts
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between items-center">
                                <span
                                  className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                >
                                  Coffee Shop
                                </span>
                                <span className="text-xs font-medium tracking-tight text-red-600">-$4.50</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span
                                  className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                >
                                  Salary Deposit
                                </span>
                                <span className="text-xs font-medium tracking-tight text-green-600">
                                  +$3,200.00
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span
                                  className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}
                                >
                                  Grocery Store
                                </span>
                                <span className="text-xs font-medium tracking-tight text-red-600">-$87.23</span>
                              </div>
                              <button className="text-xs text-blue-600 hover:text-blue-700 font-light tracking-wide">
                                View all transactions
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Mobile Bottom Cards */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {userType === "business" ? (
                          <>
                            <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-3`}>
                              <span
                                className={`text-xs font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                              >
                                Credit Card
                              </span>
                              <div
                                className={`text-sm font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                              >
                                $8,247.00
                              </div>
                            </div>
                            <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-3`}>
                              <span
                                className={`text-xs font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                              >
                                Bill Pay
                              </span>
                              <div
                                className={`text-sm font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                              >
                                $2,847.00
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-3`}>
                              <span
                                className={`text-xs font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                              >
                                Savings Goal
                              </span>
                              <div
                                className={`text-sm font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                              >
                                $2,847 / $5,000
                              </div>
                            </div>
                            <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-lg p-3`}>
                              <span
                                className={`text-xs font-medium tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}
                              >
                                Rewards
                              </span>
                              <div
                                className={`text-sm font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"} mt-1`}
                              >
                                1,247 pts
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Mobile Footer Disclaimer */}
                    <div className="bg-gray-900 text-white p-2">
                      <p className="text-xs text-center font-light tracking-wide leading-relaxed">
                        OneClick is a financial technology company, not a bank.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 