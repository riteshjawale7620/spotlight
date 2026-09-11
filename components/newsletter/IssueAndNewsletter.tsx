'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

interface IssueAndNewsletterProps {
  magazine?: {
    _id?: string
    title?: string
    subtitle?: string
    editionTag?: string
    publishedDate?: string
    imageUrl?: string
    issuuLink?: string
    slug?: string
    description?: string
  } | null
}

const DEFAULT_LATEST_MAGAZINE = {
  title: 'Manuel Rendon_2026’s Most Influential Business Leaders Transforming the Chemical Industry',
  slug: 'manuel-rendon-chemical-industry-2026',
  editionTag: '2026 EDITION',
  publishedDate: '2026-03-01',
  imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg',
  issuuLink: 'https://issuu.com/thespotlightleaders/docs/manuel_rendon',
  description: 'The stories that matter. The insights that inspire.',
}

export default function IssueAndNewsletter({ magazine }: IssueAndNewsletterProps) {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const issueData = magazine?.title ? magazine : DEFAULT_LATEST_MAGAZINE
  const title = (issueData.title || '').trim()
  let leaderName = ''
  let issueTitle = title

  if (title.includes('_')) {
    const parts = title.split('_')
    leaderName = parts[0].trim()
    issueTitle = parts.slice(1).join('_').trim()
  } else if (title.includes(' - ')) {
    const parts = title.split(' - ')
    leaderName = parts[0].trim()
    issueTitle = parts.slice(1).join(' - ').trim()
  }

  const editionLabel =
    issueData.editionTag ||
    (issueData.publishedDate
      ? new Date(issueData.publishedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : '2026 EDITION')

  const href = issueData.issuuLink || '/magazine'
  const isExternal = Boolean(issueData.issuuLink)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !agreed) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
      setAgreed(false)
    }, 4000)
  }

  return (
    <section className="w-full bg-neutral-50 border-b border-neutral-200 py-9 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: CURRENT ISSUE (4 cols) */}
          <div className="lg:col-span-4 flex items-center justify-between gap-6 border-b lg:border-b-0 lg:border-r border-neutral-200 pb-8 lg:pb-0 lg:pr-8">
            <div className="space-y-2 max-w-[200px]">
              <span className="font-serif text-xs uppercase tracking-[0.22em] text-[#121214] font-semibold block">
                Current Issue
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#8C6339] font-semibold block">
                {editionLabel}
              </span>
              <p className="font-editorial-italic text-sm text-neutral-600 leading-snug pt-1 line-clamp-2">
                {issueTitle || 'The stories that matter. The insights that inspire.'}
              </p>
              <div className="pt-3">
                <Link
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A67C52] hover:text-[#7E5933] transition-colors group"
                >
                  <span>Explore Issue</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Issue Mini Mockup */}
            <Link
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="relative w-28 sm:w-32 aspect-[3/4] bg-neutral-900 shadow-xl overflow-hidden border border-neutral-300 shrink-0 block group"
            >
              <Image
                src={issueData.imageUrl || 'https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg'}
                alt={issueTitle || 'Current Issue'}
                fill
                sizes="130px"
                className="object-cover"
              />
              {leaderName && (
                <div className="absolute inset-x-0 bottom-0 bg-black/85 backdrop-blur-xs p-1.5 text-center">
                  <span className="text-[8px] tracking-widest text-[#C5A059] uppercase font-bold block truncate px-1">
                    {leaderName}
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Right: THE WEEK IN BUSINESS (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.14em] text-[#121214] font-normal">
                The Week in Business
              </h3>
              <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                Get the top stories, insights and analysis delivered to your inbox every Sunday morning.
              </p>

              {subscribed ? (
                <div className="p-3 bg-white border border-[#A67C52] flex items-center gap-2 text-neutral-800 text-xs">
                  <Check className="w-4 h-4 text-[#A67C52]" />
                  <span>Thank you for subscribing to The Week in Business.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white border border-neutral-300 px-4 py-3 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#A67C52] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!agreed}
                      className="px-6 py-3 bg-[#A67C52] hover:bg-[#8E6740] disabled:bg-neutral-400 text-white text-xs uppercase tracking-widest font-semibold transition-colors shrink-0 shadow-sm"
                    >
                      Subscribe
                    </button>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer text-[11px] text-neutral-500 select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-3.5 h-3.5 accent-[#A67C52] rounded-xs"
                    />
                    <span>I agree to receive communications from The Spotlight Business Leaders.</span>
                  </label>
                </form>
              )}
            </div>

            {/* Right Decorative Aesthetic Image: Notebook, Pen & Espresso */}
            <div className="md:col-span-5 relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-xs shadow-md border border-neutral-300">
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
                alt="The Spotlight Business Leaders Editorial Notebook"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4 text-center">
                <div className="border border-white/30 backdrop-blur-xs p-3 px-4 bg-black/40 flex flex-col items-center">
                  <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A059] block font-bold">
                    The Spotlight Business Leaders
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-white/80 block mt-0.5">
                    Executive Briefings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
