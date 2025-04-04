import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Blog</h1>
        <p className="max-w-[700px] text-gray-400 md:text-xl">
          Insights, updates, and thought leadership from the SelfGrowerP team
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="border border-[#30363d] rounded-lg overflow-hidden transition-all hover:shadow-md bg-[#161b22]">
              <div className="aspect-video bg-[#0d1117]" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readingTime} min read
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-[#58a6ff] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-400">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

