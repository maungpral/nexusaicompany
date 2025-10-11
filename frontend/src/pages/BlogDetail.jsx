import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '@/data/posts'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-slate-700 dark:text-slate-300">Post not found.</p>
        <Link to="/blog" className="text-indigo dark:text-emerald">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="w-full h-72 md:h-96 bg-black">
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover"/>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/blog" className="text-indigo dark:text-emerald">← Back to Blog</Link>
        <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
          <img src={post.avatar} className="h-7 w-7 rounded-full" alt={post.author}/>
          <span>{post.author}</span> <span>•</span> <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="prose prose-lg max-w-none mt-6 text-slate-800 dark:text-slate-100">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {post.images?.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {post.images.map((src,i) => (
              <img key={i} src={src} alt={`Illustration ${i+1}`} className="rounded-xl border border-slate-200 dark:border-slate-800"/>
            ))}
          </div>
        )}
        {post.externalLinks?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">References & Further Reading</h3>
            <ul className="list-disc pl-5">
              {post.externalLinks.map((l, i) => (
                <li key={i}><a className="text-indigo dark:text-emerald hover:underline" href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
