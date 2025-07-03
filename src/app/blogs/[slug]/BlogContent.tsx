'use client'

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'
import { Blog } from '@/types'

export default function BlogContent({ blog }: { blog: Blog }) {
  return (
    <article className="container max-w-4xl mx-auto py-12 px-4">
      <motion.div
        className="space-y-8"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Header Image */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title and Meta */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              {new Date(blog.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <FaClock />
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
              h3: (props: any) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
              p: (props: any) => <p className="mb-4" {...props} />,
              ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
              ol: (props: any) => <ol className="list-decimal list-inside mb-4" {...props} />,
              li: (props: any) => <li className="mb-2" {...props} />,
              code: ({ inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg mb-4"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1" {...props}>
                    {children}
                  </code>
                )
              },
              blockquote: (props: any) => (
                <blockquote className="border-l-4 border-primary pl-4 italic mb-4" {...props} />
              ),
              a: (props: any) => (
                <a className="text-primary hover:underline" {...props} />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </motion.div>
    </article>
  )
}
