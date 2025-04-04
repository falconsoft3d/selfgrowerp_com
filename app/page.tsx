import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Brain, Database, LineChart, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0d1117]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  SelfGrowerP
                </h1>
                <p className="text-xl text-gray-400">The AI-powered ERP solution that grows with your business</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-[#238636] hover:bg-[#2ea043] text-white border-none">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-[#30363d] text-white hover:bg-[#30363d] hover:text-white"
                >
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/developer.png?height=400&width=400"
                alt="SelfGrowerP Dashboard"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#161b22]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Intelligent ERP Features
              </h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl">
                Discover how our AI-powered ERP system can transform your business operations
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#0d1117]">
              <Brain className="h-12 w-12 text-[#238636]" />
              <h3 className="text-xl font-bold text-white">AI-Powered Insights</h3>
              <p className="text-gray-400 text-center">
                Leverage machine learning to gain actionable business intelligence
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#0d1117]">
              <Database className="h-12 w-12 text-[#238636]" />
              <h3 className="text-xl font-bold text-white">Unified Data Platform</h3>
              <p className="text-gray-400 text-center">Centralize all your business data in one secure location</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#0d1117]">
              <Settings className="h-12 w-12 text-[#238636]" />
              <h3 className="text-xl font-bold text-white">Customizable Workflows</h3>
              <p className="text-gray-400 text-center">Adapt the system to your unique business processes</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#0d1117]">
              <BarChart3 className="h-12 w-12 text-[#238636]" />
              <h3 className="text-xl font-bold text-white">Advanced Reporting</h3>
              <p className="text-gray-400 text-center">Generate comprehensive reports with just a few clicks</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#0d1117]">
              <LineChart className="h-12 w-12 text-[#238636]" />
              <h3 className="text-xl font-bold text-white">Predictive Analytics</h3>
              <p className="text-gray-400 text-center">Forecast trends and make data-driven decisions</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#0d1117]">
              <ArrowRight className="h-12 w-12 text-[#238636]" />
              <h3 className="text-xl font-bold text-white">Seamless Integration</h3>
              <p className="text-gray-400 text-center">Connect with your existing tools and software</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#238636] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to transform your business?
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Join hundreds of companies already using SelfGrowerP to streamline their operations
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-[#238636] hover:bg-gray-200 border-none"
              >
                <Link href="/contact">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

