import React from 'react'
import { useToast } from '@/components/Toast'

export default function SubmitBlog() {
  const { push } = useToast()
  const onSubmit = (e) => {
    e.preventDefault()
    push('Your blog proposal has been sent to the admin.')
    e.currentTarget.reset()
  }

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Submit a Blog Post</h1>
      <form className="card p-6 space-y-4 border border-slate-200 dark:border-slate-800"
            name="submit-blog" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="submit-blog" />
        <p className="hidden"><label>Don’t fill: <input name="bot-field" /></label></p>
        <div>
          <label className="label">Post title</label>
          <input className="input" name="title" required />
        </div>
        <div>
          <label className="label">Author name</label>
          <input className="input" name="author" required />
        </div>
        <div>
          <label className="label">Content</label>
          <textarea className="input" name="content" rows="6" required></textarea>
        </div>
        <div>
          <label className="label">Contact email</label>
          <input className="input" name="email" type="email" required />
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}
