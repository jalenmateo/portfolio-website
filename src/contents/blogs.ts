import { Blog } from "../types";

export const blogs: Blog[] = [
    {
        title: 'Getting Started with Next.js 14',
        excerpt: 'Learn about the new features and improvements in Next.js 14.',
        date: '2024-03-15',
        readTime: '5 min read',
        slug: 'getting-started-with-nextjs-14',
        image: '/projects/Website_Pfolio.webp', // Placeholder image, replace with actual blog image
        content: `
# Introduction

Next.js 14 brings significant improvements and new features to the popular React framework. In this post, we'll explore the major updates and how they can enhance your development workflow.

## Server Actions

Server Actions are now stable, allowing you to write server-side mutations directly in your React components. This eliminates the need for separate API endpoints for data mutations.

### Example Usage

\`\`\`typescript
// app/actions.ts
'use server'

async function createTodo(title: string) {
  await db.todo.create({ data: { title } })
}

// app/page.tsx
import { createTodo } from './actions'

export default function Page() {
  return (
    <form action={createTodo}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  )
}
\`\`\`

## Partial Prerendering (Preview)

This experimental feature combines static and dynamic content in a single page, offering the best of both worlds for performance and freshness.

> "Partial Prerendering is a new rendering pattern that combines the benefits of static and dynamic rendering." - Next.js Team

### Key Benefits

* Faster initial page loads
* Dynamic content where needed
* Better SEO performance
* Reduced server load

## Improved Developer Experience

The development server is now up to 22% faster, and the framework includes better error messages and debugging capabilities.

### Notable Improvements

1. Faster refresh cycles
2. Better error boundaries
3. Enhanced type checking
4. Improved CLI output

---

For more information, check out the [official Next.js documentation](https://nextjs.org/docs).
        `
      },
      {
        title: 'Mastering TypeScript for React',
        excerpt: 'A comprehensive guide to using TypeScript with React applications.',
        date: '2024-03-10',
        readTime: '8 min read',
        slug: 'mastering-typescript-for-react',
        image: '/projects/Website_Pfolio.webp', // Placeholder image, replace with actual blog image
        content: `
TypeScript has become an essential tool for React development, providing type safety and improved developer experience. Let's dive into how to effectively use TypeScript with React.

## Type Definitions for Props

Understanding how to properly type your component props is crucial for maintaining a type-safe codebase.

## Generic Components

Learn how to create flexible, reusable components using TypeScript generics.

## Best Practices

Explore patterns and practices for maintaining clean, type-safe React applications.
        `
      },
      {
        title: 'Building Responsive Layouts with Tailwind CSS',
        excerpt: 'Tips and tricks for creating responsive designs using Tailwind CSS.',
        date: '2024-03-05',
        readTime: '6 min read',
        slug: 'building-responsive-layouts-with-tailwind-css',
        image: '/projects/Website_Pfolio.webp', // Placeholder image, replace with actual blog image
        content: `
Tailwind CSS has revolutionized how we approach responsive web design. This guide covers essential techniques for creating beautiful, responsive layouts.

## Breakpoint System

Understanding Tailwind's breakpoint system and how to use it effectively.

## Flex and Grid

Mastering Flexbox and Grid layouts with Tailwind's utility classes.

## Component Patterns

Common patterns for building responsive components with Tailwind CSS.
        `
      },
      {
        title: 'Understanding React Hooks',
        excerpt: 'A deep dive into React Hooks and how to use them effectively.',
        date: '2024-03-01',
        readTime: '7 min read',
        slug: 'understanding-react-hooks',
        image: '/projects/Website_Pfolio.webp', // Placeholder image, replace with actual blog image
        content: `
React Hooks have transformed how we write React components. Let's explore the most important hooks and their use cases.

## useState and useEffect

The foundation of React Hooks and how to use them properly.

## Custom Hooks

Creating reusable logic with custom hooks.

## Performance Optimization

Tips for optimizing your React applications using hooks like useMemo and useCallback.
        `
      },
      {
        title: 'Deploying Next.js Applications on Vercel',
        excerpt: 'Step-by-step guide to deploying your Next.js applications on Vercel.',
        date: '2024-02-25',
        readTime: '4 min read',
        slug: 'deploying-nextjs-applications-on-vercel',
        image: '/projects/Website_Pfolio.webp', // Placeholder image, replace with actual blog image
        content: `
Deploying Next.js applications on Vercel is straightforward but requires understanding some key concepts. This guide walks you through the process.

## Setting Up Vercel

Creating an account and connecting your repository.

## Deployment Configuration

Understanding environment variables and deployment settings.

## Monitoring and Analytics

Using Vercel's built-in analytics and monitoring tools.
        `
      },
      {
        title: 'Building a RESTful API with Node.js and Express',
        excerpt: 'Learn how to create a RESTful API using Node.js and Express.',
        date: '2024-02-20',
        readTime: '10 min read',
        slug: 'building-a-restful-api-with-nodejs-and-express',
        image: '/projects/Website_Pfolio.webp', // Placeholder image, replace with actual blog image
        content: `
Creating a RESTful API with Node.js and Express is a fundamental skill for full-stack development. This guide covers everything you need to know.

## Project Setup

Setting up a Node.js project with Express and essential middleware.

## Route Handling

Creating and organizing routes following REST principles.

## Authentication and Authorization

Implementing secure user authentication and authorization.
        `
      }
  ];
