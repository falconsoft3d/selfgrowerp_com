import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Us</h1>
          <p className="mt-4 text-gray-400 md:text-xl">
            We are a team of passionate technologists dedicated to revolutionizing enterprise resource planning through
            artificial intelligence.
          </p>
          <p className="mt-4 text-gray-400">
            Founded in 2023, our mission is to make powerful ERP solutions accessible to businesses of all sizes. We
            believe that with the right tools, every company can optimize their operations and achieve sustainable
            growth.
          </p>
          <p className="mt-4 text-gray-400">
            Our flagship product, SelfGrowerP, represents the culmination of years of research and development in the
            fields of artificial intelligence, machine learning, and business process optimization.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Our Team"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white">Our Values</h2>
        <div className="grid gap-6 mt-6 md:grid-cols-3">
          <div className="border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
            <h3 className="text-xl font-bold text-white">Innovation</h3>
            <p className="mt-2 text-gray-400">We constantly push the boundaries of what's possible in ERP software.</p>
          </div>
          <div className="border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
            <h3 className="text-xl font-bold text-white">Accessibility</h3>
            <p className="mt-2 text-gray-400">
              We believe powerful business tools should be available to companies of all sizes.
            </p>
          </div>
          <div className="border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
            <h3 className="text-xl font-bold text-white">Customer Success</h3>
            <p className="mt-2 text-gray-400">
              Your success is our success. We're committed to helping you achieve your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

