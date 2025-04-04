import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Us</h1>
            <p className="mt-4 text-gray-400 md:text-xl">
              We'd love to hear from you. Get in touch with our team to learn more about SelfGrowERP or to schedule a
              demo.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#238636] mr-2" />
              <p className="text-white">123 Business Avenue, Tech City, TC 12345</p>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-[#238636] mr-2" />
              <p className="text-white">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-[#238636] mr-2" />
              <p className="text-white">info@selfgrowerp.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Send us a message</h2>
            <p className="text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-white">
                  First name
                </Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-white">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Your Company Ltd."
                className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your requirements..."
                className="min-h-[120px] bg-[#0d1117] border-[#30363d] text-white placeholder:text-gray-500"
              />
            </div>
            <Button type="submit" className="w-full bg-[#238636] hover:bg-[#2ea043] text-white border-none">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

