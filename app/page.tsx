"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"

export default function OneClickLanding() {
  const [darkMode, setDarkMode] = useState(false)
  const [userType, setUserType] = useState<"personal" | "business">("business")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleUserType = (type: "personal" | "business") => {
    setUserType(type)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Header */}
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
              <div className="relative group">
                <Link
                  href="#"
                  className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors flex items-center space-x-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  <span>Personal</span>
                  <ChevronDown className="w-3 h-3" />
                </Link>
                <div
                  className={`absolute top-full left-0 mt-2 w-48 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
                >
                  <div className="py-2">
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Personal Banking
                    </Link>
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Personal Cards
                    </Link>
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Personal Loans
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link
                  href="#"
                  className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors flex items-center space-x-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  <span>Business</span>
                  <ChevronDown className="w-3 h-3" />
                </Link>
                <div
                  className={`absolute top-full left-0 mt-2 w-48 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
                >
                  <div className="py-2">
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Business Banking
                    </Link>
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Payment Processing
                    </Link>
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Business Loans
                    </Link>
                    <Link
                      href="#"
                      className={`block px-4 py-2 text-sm ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Treasury Management
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Developer
              </Link>

              <Link
                href="#"
                className={`text-sm font-light tracking-wider uppercase hover:text-purple-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Help
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                className={`hidden md:inline-flex font-light tracking-wide border ${darkMode ? "text-white hover:bg-gray-800 border-gray-600" : "border-gray-300"}`}
              >
                Log In
              </Button>
              <Button
                className={`${darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"} font-light tracking-wide`}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"}`}
        ></div>

        <div className="container mx-auto px-6 py-24 relative">
          <div className="space-y-12">
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
                  OneClick powers mission-critical financial operations across banking, payments, trading, and
                  investment. Automation, analytics, and operations — all in one unified platform.
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
                </div>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="relative w-full">
              {/* Full-width dark blue/purple background */}
              <div className="relative py-16">
                <div className="container mx-auto px-6">
                  <div className="relative max-w-6xl mx-auto">
                    <div
                      className={`relative ${darkMode ? "bg-gray-900/95 backdrop-blur-sm border-gray-700/50" : "bg-white border-gray-200"} rounded-2xl shadow-2xl border overflow-hidden`}
                    >
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
                          OneClick is a financial technology company, not a bank. Banking services provided through
                          Choice Financial Group, Column N.A., and Evolve Bank & Trust; Members FDIC.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Features Section with Staggered Cards */}
            <section className="container mx-auto px-6 py-24">
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
                  Everything you need to scale your fintech
                </h2>
                <p
                  className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-200" : "text-gray-600"} font-light leading-relaxed tracking-wide`}
                >
                  From payment processing to risk management, our platform provides the tools and infrastructure to
                  power your financial services.
                </p>
              </div>

              <div className="space-y-32">
                {/* First Feature - Card on Left, Text on Right */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-300 p-10 h-96 relative overflow-hidden">
                    <Shield className="w-14 h-14 text-gray-800 mb-6" />
                    <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">Enterprise Security</h3>
                    <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                      Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced fraud detection.
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
                      <p className="text-gray-700 font-light tracking-wide">SOC 2 Compliant</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3
                      className={`text-4xl font-extralight ${darkMode ? "text-white" : "text-gray-900"} tracking-tight leading-tight`}
                    >
                      Uncompromising Security
                    </h3>
                    <p
                      className={`text-xl ${darkMode ? "text-gray-200" : "text-gray-600"} leading-relaxed font-light tracking-wide`}
                    >
                      Built with enterprise-grade security from the ground up. Our platform meets the highest industry
                      standards with SOC 2 Type II compliance, end-to-end encryption, and advanced fraud detection
                      algorithms that protect your business and customers.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          SOC 2 Type II Certified
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          256-bit AES Encryption
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Real-time Fraud Detection
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Multi-factor Authentication
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Second Feature - Text on Left, Card on Right */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8 lg:order-1">
                    <h3
                      className={`text-4xl font-extralight ${darkMode ? "text-white" : "text-gray-900"} tracking-tight leading-tight`}
                    >
                      Lightning-Fast Performance
                    </h3>
                    <p
                      className={`text-xl ${darkMode ? "text-gray-200" : "text-gray-600"} leading-relaxed font-light tracking-wide`}
                    >
                      Experience unparalleled speed with our high-performance infrastructure. Process millions of
                      transactions per second with sub-millisecond latency, ensuring your customers never wait and your
                      business never slows down.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Sub-millisecond Latency
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          99.99% Uptime SLA
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Auto-scaling Infrastructure
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Global CDN Network
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-violet-200 to-purple-300 p-10 h-96 relative overflow-hidden lg:order-2">
                    <Zap className="w-14 h-14 text-gray-800 mb-6" />
                    <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">Lightning Fast</h3>
                    <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                      Process millions of transactions per second with sub-millisecond latency and 99.99% uptime.
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
                      <p className="text-gray-700 font-light tracking-wide">99.99% Uptime</p>
                    </div>
                  </div>
                </div>

                {/* Third Feature - Card on Left, Text on Right */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-200 to-teal-300 p-10 h-96 relative overflow-hidden">
                    <TrendingUp className="w-14 h-14 text-gray-800 mb-6" />
                    <h3 className="text-3xl font-light mb-3 text-gray-800 tracking-tight">Real-time Analytics</h3>
                    <p className="text-gray-700 mb-6 font-light leading-relaxed tracking-wide">
                      Advanced analytics and reporting with real-time insights into your financial operations and
                      performance.
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
                      <p className="text-gray-700 font-light tracking-wide">Real-time Insights</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3
                      className={`text-4xl font-extralight ${darkMode ? "text-white" : "text-gray-900"} tracking-tight leading-tight`}
                    >
                      Intelligent Analytics
                    </h3>
                    <p
                      className={`text-xl ${darkMode ? "text-gray-200" : "text-gray-600"} leading-relaxed font-light tracking-wide`}
                    >
                      Make data-driven decisions with our comprehensive analytics suite. Get real-time insights into
                      transaction patterns, customer behavior, and business performance with customizable dashboards and
                      automated reporting.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Real-time Data Processing
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Custom Dashboard Builder
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Automated Report Generation
                        </span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className={`${darkMode ? "text-gray-200" : "text-gray-700"} font-light tracking-wide`}>
                          Predictive Analytics
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                  Ready to accelerate your fintech?
                </h2>
                <p
                  className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-200" : "text-gray-600"} font-light leading-relaxed tracking-wide`}
                >
                  Join thousands of companies already using OneClick to power their financial infrastructure and drive
                  growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 font-light tracking-wider px-10 py-4 text-base"
                  >
                    Request Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`font-light tracking-wider px-10 py-4 text-base ${darkMode ? "text-black border-gray-600" : ""}`}
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className={`w-full ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} border-t`}>
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-light tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                  OneClick
                </span>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide leading-relaxed`}>
                The future of financial infrastructure.
              </p>
            </div>

            <div>
              <h4 className={`font-medium mb-6 ${darkMode ? "text-white" : "text-gray-900"} tracking-wide`}>Product</h4>
              <ul className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-medium mb-6 ${darkMode ? "text-white" : "text-gray-900"} tracking-wide`}>Company</h4>
              <ul className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-medium mb-6 ${darkMode ? "text-white" : "text-gray-900"} tracking-wide`}>Legal</h4>
              <ul className={`space-y-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 transition-colors font-light tracking-wide">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`border-t ${darkMode ? "border-gray-800" : "border-gray-200"} mt-16 pt-8 text-center`}>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} font-light tracking-wide`}>
              © {new Date().getFullYear()} OneClick. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
