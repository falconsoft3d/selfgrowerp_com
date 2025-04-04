import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SelfGrowerP - AI-Powered ERP Solution",
  description: "The intelligent ERP system that grows with your business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0d1117] text-white min-h-screen`}>
        <header className="border-b border-[#30363d]">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              SelfGrowERP
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
              >
                Features
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:flex bg-[#238636] hover:bg-[#2ea043] text-white border-none">
                <Link href="/contact">Request Demo</Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden border-[#30363d] text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0d1117] border-[#30363d] text-white">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link href="/" className="text-gray-300 hover:text-white">
                      Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                      About
                    </Link>
                    <Link href="/features" className="text-gray-300 hover:text-white">
                      Features
                    </Link>
                    <Link href="/blog" className="text-gray-300 hover:text-white">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                      Contact
                    </Link>
                    <Button asChild className="bg-[#238636] hover:bg-[#2ea043] text-white border-none">
                      <Link href="/contact">Request Demo</Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-[#30363d] py-6 md:py-8">
          <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 md:px-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">© 2025 SelfGrowERP. All rights reserved.</p>
            </div>
            <nav className="flex justify-center gap-4 md:gap-6">
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white hover:underline underline-offset-4"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white hover:underline underline-offset-4"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white hover:underline underline-offset-4"
              >
                Cookies
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'