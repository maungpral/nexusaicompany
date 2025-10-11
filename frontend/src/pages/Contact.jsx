import React from 'react'
import { useToast } from '@/components/Toast'
import ReCAPTCHA from 'react-google-recaptcha';
import {useState} from 'react'

const RECAPTCHA_SITE_KEY = '6LeGB7ErAAAAABNHG37I5AQXic6FPTOqD5YPSZDK';
export default function Contact() {
  const { push } = useToast()

  const onSubmit = (e) => {
    e.preventDefault()
    push('Thanks! Your message has been sent.')
    e.currentTarget.reset()
  }
  
  const [token, setToken] = useState(null);

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="card p-6 space-y-4 border border-slate-200 dark:border-slate-800"
            name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden"><label>Don’t fill: <input name="bot-field" /></label></p>
        <div>
          <label className="label">Full name</label>
          <input className="input" name="name" required />
        </div>
        <div>
          <label className="label">Work email</label>
          <input className="input" name="email" type="email" required />
        </div>
        <div>
          <label className="label">Company</label>
          <input className="input" name="company" />
        </div>
        <div>
          <label className="label">Message</label>
          <textarea className="input" name="message" rows="5" required></textarea>
        </div>
        
        <div>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(value) => setToken(value)} // capture token here
          />
        </div>
        <div data-netlify-recaptcha="true"></div> 
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
  )
}
