import { blogs } from '@/contents/blogs'
import { notFound } from 'next/navigation'
import { use } from 'react'
import BlogContent from './BlogContent'

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const blog = blogs.find((blog) => blog.slug === slug)

  if (!blog) {
    notFound()
  }

  return <BlogContent blog={blog} />
}
