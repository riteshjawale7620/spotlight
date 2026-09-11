'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Check, Sparkles } from 'lucide-react'

interface SubscribeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('')
  const [tier, setTier] = useState<'newsletter' | 'all-access'>('newsletter')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-[#0E0E10] text-white border border-[#2A2A2E] shadow-2xl p-5 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[#C5A059] text-xs font-semibold tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Membership & Newsletter
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
            Subscribe to The Spotlight Business Leaders
          </h3>
          <p className="text-neutral-400 text-xs md:text-sm mt-2 font-sans">
            Choose between our complimentary weekly editorial newsletter or complete print & digital access.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1A1A1E] border border-[#C5A059]/40 p-6 text-center space-y-2">
            <Check className="w-8 h-8 text-[#C5A059] mx-auto" />
            <h4 className="font-serif text-lg text-white">
              {tier === 'newsletter' ? 'Welcome to Our Executive Newsletter' : 'Welcome to All-Access Membership'}
            </h4>
            <p className="text-xs text-neutral-400">
              {tier === 'newsletter'
                ? `You're all set! Weekly briefings will be delivered directly to ${email}.`
                : `Confirmation and print delivery onboarding have been sent to ${email}.`}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Option 1: Free Newsletter */}
              <button
                type="button"
                onClick={() => setTier('newsletter')}
                className={`p-3.5 text-left border transition-all relative ${
                  tier === 'newsletter'
                    ? 'border-[#C5A059] bg-[#1A1A1E] ring-1 ring-[#C5A059]/40'
                    : 'border-[#2A2A2E] bg-black/40 hover:border-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                    Free Newsletter
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-xs bg-[#C5A059]/20 text-[#C5A059]">
                    Free
                  </span>
                </div>
                <div className="text-lg font-serif text-[#C5A059] mt-1">
                  $0 <span className="text-xs text-neutral-400 font-sans">/mo</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 leading-snug">
                  Weekly briefings & curated insights
                </div>
              </button>

              {/* Option 2: All-Access (Print Edition + Digital) */}
              <button
                type="button"
                onClick={() => setTier('all-access')}
                className={`p-3.5 text-left border transition-all relative ${
                  tier === 'all-access'
                    ? 'border-[#C5A059] bg-[#1A1A1E] ring-1 ring-[#C5A059]/40'
                    : 'border-[#2A2A2E] bg-black/40 hover:border-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                    All-Access
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-xs bg-amber-500/20 text-amber-300">
                    Print + Digital
                  </span>
                </div>
                <div className="text-lg font-serif text-[#C5A059] mt-1">
                  $24 <span className="text-xs text-neutral-400 font-sans">/mo</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 leading-snug">
                  Print edition delivered + Full digital access
                </div>
              </button>
            </div>

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate or personal email"
                className="w-full bg-[#18181C] border border-[#2E2E34] px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A67C52] hover:bg-[#8E6740] text-white py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors shadow-md flex items-center justify-center gap-2"
            >
              {tier === 'newsletter' ? 'Subscribe to Free Newsletter' : 'Activate All-Access Membership'}
            </button>

            <p className="text-[10px] text-center text-neutral-500">
              {tier === 'newsletter'
                ? 'No credit card required. Unsubscribe anytime with one click.'
                : 'Cancel anytime. Monthly print delivery + digital access. Taxes may apply.'}
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
