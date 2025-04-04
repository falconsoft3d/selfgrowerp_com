import { Calendar, Clock, User } from "lucide-react"
import { notFound } from "next/navigation"

import { getPostBySlug } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 mt-4 text-gray-400">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readingTime} min read
            </div>
          </div>
        </div>

        <div className="aspect-video bg-[#161b22] rounded-lg mb-8" />

        <div
          className="prose prose-invert prose-gray max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

