import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '@/data/posts'

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Insights & Articles</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.id} className="card overflow-hidden border border-slate-200 dark:border-slate-800">
            <img src={p.thumb || p.cover} className="h-44 w-full object-cover" alt={p.title}/>
            <div className="p-5">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <img src={p.avatar} className="h-6 w-6 rounded-full" alt={p.author}/>
                <span>{p.author}</span>
                <span>•</span>
                <span>{new Date(p.date).toLocaleDateString()}</span>
              </div>
              <h2 className="font-semibold text-lg mt-2">{p.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-2">{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="inline-block mt-3 text-indigo hover:underline dark:text-emerald">Read more →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
