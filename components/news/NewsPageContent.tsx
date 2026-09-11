'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  TrendingUp,
  Mail,
  Check,
  Search,
  Newspaper,
  UserCheck,
  Compass,
  BookmarkCheck,
  MapPin,
} from 'lucide-react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

// Topic Filter Pills
const TOPICS = [
  'ALL NEWS',
  'BUSINESS',
  'TECHNOLOGY',
  'ECONOMY',
  'SUSTAINABILITY',
  'HEALTHCARE',
  'STARTUPS',
  'MARKETS',
  'PEOPLE',
  'AI',
  'ENERGY',
  'LIFESTYLE',
  'VIEWPOINT',
]

// 8 Latest News Cards
const LATEST_NEWS_ARTICLES = [
  {
    id: 'ln-1',
    category: 'MARKETS',
    title: 'Asian Markets Rally on Positive Economic Data',
    date: 'SEPT 5, 2026',
    readTime: '4 MIN READ',
    slug: 'asian-markets-rally-positive-economic-data',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-2',
    category: 'ECONOMY',
    title: 'Infrastructure Spending to Drive Global Growth',
    date: 'SEPT 4, 2026',
    readTime: '6 MIN READ',
    slug: 'infrastructure-spending-global-growth',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-3',
    category: 'STARTUPS',
    title: 'New Wave of Startups Puts People First',
    date: 'SEPT 4, 2026',
    readTime: '4 MIN READ',
    slug: 'new-wave-startups-puts-people-first',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-4',
    category: 'GLOBAL TRADE',
    title: 'Trade Routes Shift as New Alliances Emerge',
    date: 'SEPT 3, 2026',
    readTime: '4 MIN READ',
    slug: 'trade-routes-shift-new-alliances',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-5',
    category: 'LEADERSHIP',
    title: 'Why Empathy Is a Competitive Advantage',
    date: 'SEPT 3, 2026',
    readTime: '5 MIN READ',
    slug: 'why-empathy-competitive-advantage',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-6',
    category: 'INDUSTRIES',
    title: 'Automation Drives a New Industrial Era',
    date: 'SEPT 2, 2026',
    readTime: '6 MIN READ',
    slug: 'automation-drives-new-industrial-era',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-7',
    category: 'SUSTAINABILITY',
    title: 'Businesses Step Up for Biodiversity',
    date: 'SEPT 2, 2026',
    readTime: '5 MIN READ',
    slug: 'businesses-step-up-biodiversity',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ln-8',
    category: 'PEOPLE',
    title: 'The New Generation of Innovators',
    date: 'SEPT 1, 2026',
    readTime: '4 MIN READ',
    slug: 'the-new-generation-of-innovators',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
  },
]

// Trending stories on the sidebar
const TRENDING_STORIES = [
  { rank: '01', title: 'Markets respond to new US policy announcement', date: 'SEPT 5, 2026', slug: 'markets-respond-us-policy' },
  { rank: '02', title: 'Startups in Asia attract record funding', date: 'SEPT 4, 2026', slug: 'startups-asia-record-funding' },
  { rank: '03', title: 'The future of work: Hybrid is here to stay', date: 'SEPT 4, 2026', slug: 'future-of-work-hybrid-here-to-stay' },
  { rank: '04', title: 'Global leaders meet for climate action', date: 'SEPT 3, 2026', slug: 'global-leaders-climate-action' },
  { rank: '05', title: 'How AI is reshaping creative industries', date: 'SEPT 3, 2026', slug: 'how-ai-reshaping-creative-industries' },
]

// Regions in World at a Glance
const REGIONS = [
  { name: 'North America', count: '12' },
  { name: 'Europe', count: '18' },
  { name: 'Asia', count: '24' },
  { name: 'Middle East', count: '10' },
  { name: 'Latin America', count: '08' },
  { name: 'Africa', count: '07' },
]

// Voices Essays
const VOICES_ESSAYS = [
  {
    author: 'Daniel Ruiz',
    title: 'The Next Chapter for Global Trade',
    readTime: '5 min read',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    slug: 'next-chapter-global-trade',
  },
  {
    author: 'Priya Shah',
    title: 'Rethinking Growth in a Changing World',
    readTime: '4 min read',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    slug: 'rethinking-growth-changing-world',
  },
  {
    author: 'Marcus Lee',
    title: 'Technology with a Human Touch',
    readTime: '6 min read',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    slug: 'technology-with-human-touch',
  },
  {
    author: 'Elena Garcia',
    title: 'A More Inclusive Economy',
    readTime: '5 min read',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    slug: 'more-inclusive-economy',
  },
]

// Industry Spotlight sectors
const INDUSTRY_SPOTLIGHT = [
  { name: 'FINANCE', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop', slug: 'finance' },
  { name: 'HEALTHCARE', imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop', slug: 'healthcare' },
  { name: 'REAL ESTATE', imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop', slug: 'real-estate' },
  { name: 'RETAIL', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop', slug: 'retail' },
  { name: 'ENERGY', imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop', slug: 'energy' },
  { name: 'MANUFACTURING', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', slug: 'manufacturing' },
]

export default function NewsPageContent() {
  const [activeTopic, setActiveTopic] = useState('ALL NEWS')
  const [briefEmail, setBriefEmail] = useState('')
  const [briefSubscribed, setBriefSubscribed] = useState(false)

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!briefEmail) return
    setBriefSubscribed(true)
    setTimeout(() => {
      setBriefSubscribed(false)
      setBriefEmail('')
    }, 4000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. TOPIC FILTER PILLS BAR */}
        {/* ========================================================= */}
        <div className="w-full bg-white border-b border-neutral-200 sticky top-[58px] md:top-[68px] z-30 shadow-xs">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            {/* Scrollable Pills Container */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
              {TOPICS.map((topic) => {
                const isActive = activeTopic === topic
                return (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.14em] uppercase rounded-none transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#8D682E] text-white shadow-xs'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-black'
                    }`}
                  >
                    {topic}
                  </button>
                )
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="shrink-0 hidden md:flex items-center gap-1 text-[11px] font-sans font-bold tracking-wider text-neutral-600 hover:text-black uppercase cursor-pointer">
              <span>SORT BY: LATEST</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. FEATURED NEWS GRID: Main Feature + 2 Stacked + Sidebar */}
        {/* ========================================================= */}
        <section className="w-full py-10 sm:py-14 border-b border-neutral-200 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column (Main Story) - 5 Cols */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full group">
                <div className="flex flex-col flex-1">
                  {/* Photo expands on desktop to match the height of both right-side articles */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-auto lg:flex-1 lg:min-h-[380px] w-full overflow-hidden bg-neutral-900 mb-4 shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                      alt="Responsible AI Architecture"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 text-white font-mono text-[10px] tracking-wider border border-white/20">
                      AI &amp; SOCIETY
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8D682E] block mb-2">
                    TECHNOLOGY
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-neutral-900 leading-snug group-hover:text-[#A67C52] transition-colors font-medium">
                    <Link href="/articles/global-tech-giants-responsible-ai">
                      Global Tech Giants Turn Focus to Responsible AI
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-2.5 leading-relaxed">
                    From regulation to real-world impact, companies are rethinking how AI can serve society while driving growth.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-3 text-[11px] font-sans text-neutral-500 uppercase tracking-widest border-t border-[#E8E3DA] mt-6">
                  <span>SEPT 5, 2026</span>
                  <span>|</span>
                  <Link
                    href="/articles/global-tech-giants-responsible-ai"
                    className="text-[#8D682E] font-bold hover:text-black inline-flex items-center gap-1 group/btn"
                  >
                    <span>6 MIN READ</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Center Column (2 Stacked Stories) - 4 Cols */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:space-y-0">
                {/* Top Stacked Story */}
                <article className="group flex flex-col justify-between pb-6 lg:pb-8 border-b border-neutral-200">
                  <div>
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-900 mb-3.5 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop"
                        alt="Clean Energy Wind Turbines"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8D682E] block mb-1.5">
                      SUSTAINABILITY
                    </span>

                    <h3 className="font-serif text-lg sm:text-xl text-neutral-900 leading-snug group-hover:text-[#A67C52] transition-colors font-medium">
                      <Link href="/articles/clean-energy-investment-record-high-2026">
                        Clean Energy Investment Hits Record High in 2026
                      </Link>
                    </h3>

                    <p className="text-xs text-neutral-600 font-sans mt-2 leading-relaxed">
                      Global funding in renewable energy reaches new milestones, signaling a greener, more resilient future.
                    </p>
                  </div>

                  <div className="pt-3 flex items-center gap-3 text-[10.5px] font-sans text-neutral-500 uppercase tracking-widest mt-2">
                    <span>SEPT 5, 2026</span>
                    <span>|</span>
                    <Link
                      href="/articles/clean-energy-investment-record-high-2026"
                      className="text-[#8D682E] font-bold hover:text-black inline-flex items-center gap-1 group/btn"
                    >
                      <span>5 MIN READ</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </article>

                {/* Bottom Stacked Story */}
                <article className="group flex flex-col justify-between pt-6 lg:pt-8">
                  <div>
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-900 mb-3.5 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop"
                        alt="Biotechnology Therapy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8D682E] block mb-1.5">
                      HEALTHCARE
                    </span>

                    <h3 className="font-serif text-lg sm:text-xl text-neutral-900 leading-snug group-hover:text-[#A67C52] transition-colors font-medium">
                      <Link href="/articles/breakthrough-therapy-early-trials">
                        Breakthrough Therapy Shows Promise in Early Trials
                      </Link>
                    </h3>

                    <p className="text-xs text-neutral-600 font-sans mt-2 leading-relaxed">
                      A new treatment could transform care for millions, say researchers.
                    </p>
                  </div>

                  <div className="pt-3 flex items-center gap-3 text-[10.5px] font-sans text-neutral-500 uppercase tracking-widest mt-2">
                    <span>SEPT 4, 2026</span>
                    <span>|</span>
                    <Link
                      href="/articles/breakthrough-therapy-early-trials"
                      className="text-[#8D682E] font-bold hover:text-black inline-flex items-center gap-1 group/btn"
                    >
                      <span>4 MIN READ</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </article>
              </div>

              {/* Right Column (Sidebar: The News Brief + Trending Now + Magazine Ad) - 3 Cols */}
              <div className="lg:col-span-3 space-y-8 lg:border-l lg:border-neutral-200 lg:pl-8">
                {/* 1. The News Brief Newsletter Signup */}
                <div className="bg-neutral-50 border border-neutral-200 p-5 shadow-xs">
                  <h4 className="font-serif text-sm uppercase tracking-[0.16em] text-[#121214] font-semibold">
                    THE NEWS BRIEF
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans mt-1 leading-snug">
                    Top updates, straight to your inbox.
                  </p>

                  {briefSubscribed ? (
                    <div className="mt-3.5 p-2.5 bg-white border border-[#A67C52] flex items-center gap-2 text-neutral-800 text-xs">
                      <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                      <span>Thank you for subscribing!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleBriefSubmit} className="mt-3.5 flex items-stretch">
                      <input
                        type="email"
                        required
                        value={briefEmail}
                        onChange={(e) => setBriefEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-white border border-neutral-200 px-3 py-2 text-xs text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#A67C52]"
                      />
                      <button
                        type="submit"
                        className="px-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-xs transition-colors shrink-0 flex items-center justify-center"
                        aria-label="Submit Brief Subscription"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>

                {/* 2. Trending Now Numbered List */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-[#121214] font-bold pb-2 border-b border-neutral-200">
                    TRENDING NOW
                  </h4>

                  <div className="divide-y divide-neutral-200">
                    {TRENDING_STORIES.map((story) => (
                      <article key={story.rank} className="py-3 first:pt-0 last:pb-0 flex items-start gap-3.5 group">
                        <span className="font-serif text-base text-[#C5A059] font-medium leading-none shrink-0 pt-0.5">
                          {story.rank}
                        </span>
                        <div className="space-y-1">
                          <h5 className="font-serif text-xs leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors font-medium">
                            <Link href={`/articles/${story.slug}`}>{story.title}</Link>
                          </h5>
                          <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-widest block">
                            {story.date}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* 3. Magazine Cover Promotion Card */}
                <div className="bg-[#0E0E10] text-white p-5 border border-[#2B2B30] shadow-md flex flex-col items-center text-center">
                  <Link href="/magazine" className="relative w-28 aspect-[3/4] bg-neutral-800 border border-neutral-700 shadow-xl overflow-hidden mb-4 block group">
                    <Image
                      src="https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg"
                      alt="The Spotlight Business Leaders Magazine Issue"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </Link>

                  <span className="font-serif text-xs uppercase tracking-[0.18em] text-[#C5A059] font-bold block">
                    THE LATEST ISSUE OUT NOW
                  </span>

                  <Link
                    href="/magazine"
                    className="mt-3.5 inline-flex items-center gap-1.5 px-4 py-2 bg-[#A67C52] hover:bg-[#8D682E] text-white text-[10px] font-sans font-bold uppercase tracking-[0.18em] transition-colors shadow-xs"
                  >
                    <span>BROWSE ALL ISSUES</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. LATEST NEWS 8-CARD GRID (4x2 Grid) */}
        {/* ========================================================= */}
        <section className="w-full py-10 sm:py-14 border-b border-neutral-200 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                LATEST NEWS
              </h2>
              <div className="flex-1 h-[1px] bg-neutral-200" />
              <Link
                href="/category/news"
                className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>VIEW ALL NEWS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 8 Cards Grid (4 Columns x 2 Rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {LATEST_NEWS_ARTICLES.map((article) => (
                <article key={article.id} className="group flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-200 mb-3.5 shadow-xs">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#8D682E] block mb-1.5">
                      {article.category}
                    </span>

                    <h3 className="font-serif text-[15px] sm:text-base leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors font-medium line-clamp-2">
                      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h3>
                  </div>

                  <div className="pt-3 flex items-center gap-2 text-[10px] font-sans text-neutral-400 uppercase tracking-wider mt-3 border-t border-[#F0EBE1]">
                    <span>{article.date}</span>
                    <span>|</span>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-[#8D682E] font-semibold hover:text-black inline-flex items-center gap-0.5 group/arrow"
                    >
                      <span>{article.readTime}</span>
                      <span className="group-hover/arrow:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. THE WORLD AT A GLANCE (Dark World Map Section) */}
        {/* ========================================================= */}
        <section className="w-full bg-[#0E0E10] text-white border-b border-[#222226] py-12 lg:py-16 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Heading & Explore Global News */}
              <div className="lg:col-span-3 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.14em] text-white font-normal leading-tight">
                  THE WORLD<br />AT A GLANCE
                </h2>

                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  Key stories and developments from every corner of the globe.
                </p>

                <div className="pt-2">
                  <Link
                    href="/category/global"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#A67C52] text-[#C5A059] hover:bg-[#A67C52] hover:text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all"
                  >
                    <span>EXPLORE GLOBAL NEWS</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Center Column: Interactive Graphic World Map with Glowing Hubs */}
              <div className="lg:col-span-4 relative h-[240px] sm:h-[280px] flex items-center justify-center">
                {/* Stylized Vector World Map Canvas */}
                <div className="relative w-full h-full opacity-70">
                  <svg
                    viewBox="0 0 800 400"
                    className="w-full h-full fill-neutral-700/60 stroke-neutral-800"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* World Map Outlines / Dot clusters */}
                    <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="#222226" strokeDasharray="3 3" />
                    
                    {/* North America */}
                    <path d="M120,80 Q180,70 240,110 Q220,170 170,190 Q120,150 120,80 Z" fill="#1C1C22" />
                    {/* South America */}
                    <path d="M220,210 Q280,220 260,330 Q210,340 200,260 Z" fill="#1C1C22" />
                    {/* Europe */}
                    <path d="M380,80 Q450,70 460,130 Q400,150 370,120 Z" fill="#1C1C22" />
                    {/* Africa */}
                    <path d="M390,160 Q480,170 470,290 Q400,310 370,220 Z" fill="#1C1C22" />
                    {/* Asia */}
                    <path d="M480,70 Q660,60 670,190 Q560,210 490,150 Z" fill="#1C1C22" />
                    {/* Australia */}
                    <path d="M600,260 Q690,260 680,330 Q610,340 590,290 Z" fill="#1C1C22" />

                    {/* Flight/Data lines connecting major financial capitals */}
                    <path d="M190,130 Q280,80 410,105" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                    <path d="M410,105 Q510,90 610,150" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                    <path d="M190,130 Q210,210 235,270" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    <path d="M410,105 Q420,150 435,170" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                    <path d="M610,150 Q600,200 580,240" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                  </svg>

                  {/* Hotspots: New York */}
                  <div className="absolute top-[32%] left-[23%] flex items-center gap-1.5 group cursor-pointer">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
                    </span>
                    <span className="text-[9px] font-sans tracking-widest text-[#C5A059] uppercase font-bold">
                      New York
                    </span>
                  </div>

                  {/* Hotspots: London */}
                  <div className="absolute top-[26%] left-[50%] flex items-center gap-1.5 group cursor-pointer">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
                    </span>
                    <span className="text-[9px] font-sans tracking-widest text-neutral-300 uppercase">
                      London
                    </span>
                  </div>

                  {/* Hotspots: Cairo */}
                  <div className="absolute top-[42%] left-[54%] flex items-center gap-1.5 group cursor-pointer">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C5A059]" />
                    </span>
                    <span className="text-[9px] font-sans tracking-widest text-neutral-400 uppercase">
                      Cairo
                    </span>
                  </div>

                  {/* Hotspots: São Paulo */}
                  <div className="absolute top-[67%] left-[29%] flex items-center gap-1.5 group cursor-pointer">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C5A059]" />
                    </span>
                    <span className="text-[9px] font-sans tracking-widest text-neutral-400 uppercase">
                      São Paulo
                    </span>
                  </div>

                  {/* Hotspots: Singapore */}
                  <div className="absolute top-[60%] left-[72%] flex items-center gap-1.5 group cursor-pointer">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
                    </span>
                    <span className="text-[9px] font-sans tracking-widest text-[#C5A059] uppercase font-bold">
                      Singapore
                    </span>
                  </div>
                </div>
              </div>

              {/* Right-Center Column: Top Stories By Region */}
              <div className="lg:col-span-2 space-y-3 lg:border-l lg:border-[#222226] lg:pl-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A059] font-sans font-bold block pb-1 border-b border-[#222226]">
                  TOP STORIES BY REGION
                </span>

                <div className="divide-y divide-[#1D1D22]">
                  {REGIONS.map((region) => (
                    <Link
                      key={region.name}
                      href={`/category/region-${region.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="py-2 flex items-center justify-between text-xs text-neutral-300 hover:text-[#C5A059] transition-colors group"
                    >
                      <span className="font-sans">{region.name}</span>
                      <div className="flex items-center gap-1 font-mono text-[11px] text-neutral-500 group-hover:text-[#C5A059]">
                        <span>{region.count}</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Far Right Column: Motivational City Banner */}
              <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden border border-[#2B2B30] group">
                <Image
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop"
                  alt="Metropolitan Skyline"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5 flex flex-col justify-end">
                  <p className="font-sans text-xs tracking-[0.16em] uppercase font-semibold text-white/95 leading-relaxed text-center">
                    DIFFERENT PEOPLE.<br />
                    DIFFERENT PERSPECTIVES.<br />
                    A BETTER TOMORROW.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. VOICES & PERSPECTIVES (Quotes, Columnists & Editor's Note) */}
        {/* ========================================================= */}
        <section className="w-full py-10 sm:py-14 border-b border-neutral-200 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-lg sm:text-xl uppercase tracking-[0.16em] text-[#121214] font-medium mb-8 sm:mb-10 pb-3 border-b border-neutral-200">
              VOICES &amp; PERSPECTIVES
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Featured Voice Quote + Executive Portrait - 5 Cols */}
              <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
                {/* Quote details */}
                <div className="flex-1 space-y-4">
                  <span className="font-serif text-3xl text-[#8D682E] leading-none block">
                    &ldquo;
                  </span>
                  <p className="font-editorial-italic text-lg sm:text-xl text-[#141416] leading-snug font-light">
                    True progress comes when business serves people, not just profits.&rdquo;
                  </p>
                  <div className="pt-3 border-t border-neutral-200">
                    <span className="text-xs uppercase tracking-widest text-neutral-900 font-bold block">
                      KATHERINE COLOMBINI
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans block mt-0.5">
                      CEO, SSC GLOBAL
                    </span>
                  </div>
                </div>

                {/* Portrait */}
                <div className="relative w-32 h-44 sm:w-36 sm:h-48 overflow-hidden bg-neutral-200 shrink-0 shadow-sm border border-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
                    alt="Katherine Colombini"
                    fill
                    sizes="144px"
                    className="object-cover object-top filter contrast-[1.02]"
                  />
                </div>
              </div>

              {/* Middle Column: 4 Thought Leadership Essays with Avatars - 4 Cols */}
              <div className="lg:col-span-4 flex flex-col justify-between divide-y divide-neutral-200 border-t lg:border-t-0 pt-6 lg:pt-0">
                {VOICES_ESSAYS.map((essay) => (
                  <article key={essay.author} className="py-3 first:pt-0 last:pb-0 flex items-center gap-3.5 group">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-200">
                      <Image
                        src={essay.avatarUrl}
                        alt={essay.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-[#A67C52] transition-colors leading-tight line-clamp-1">
                        <Link href={`/articles/${essay.slug}`}>{essay.title}</Link>
                      </h4>
                      <p className="text-[11px] text-neutral-500 font-sans tracking-normal">
                        <span>By {essay.author}</span>
                        <span className="mx-1">•</span>
                        <span>{essay.readTime}</span>
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Right Column: Editor's Note Card with Portrait - 3 Cols */}
              <div className="lg:col-span-3 bg-[#0E0E10] text-white p-6 border border-[#2B2B30] shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A059] font-sans font-bold block">
                    EDITOR&apos;S NOTE
                  </span>

                  <h3 className="font-serif text-lg leading-snug text-white font-normal">
                    In a world of noise, we choose what matters.
                  </h3>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-800 border border-[#C5A059]/40 shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                        alt="Rohan Mehta"
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-200">
                        Rohan Mehta
                      </div>
                      <div className="text-[10px] text-neutral-400 font-sans">
                        Editor-in-Chief
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/editors-note"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#A67C52] hover:bg-[#8D682E] text-white text-[9.5px] font-sans font-bold uppercase tracking-[0.18em] transition-colors"
                  >
                    <span>READ THE EDITOR&apos;S NOTE</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. INDUSTRY SPOTLIGHT (6 Photo Sectors) */}
        {/* ========================================================= */}
        <section className="w-full py-10 sm:py-14 border-b border-neutral-200 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading, Subtitle & Button - 3 Cols */}
              <div className="lg:col-span-3 space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.14em] text-[#121214] font-normal leading-tight">
                  INDUSTRY<br />SPOTLIGHT
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  Deep dives into the industries shaping tomorrow.
                </p>
                <div className="pt-2">
                  <Link
                    href="/category/industries"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#A67C52] text-[#8D682E] hover:bg-[#8D682E] hover:text-white text-[10px] font-sans font-bold uppercase tracking-[0.18em] transition-colors"
                  >
                    <span>EXPLORE INDUSTRIES</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 6 Photo Sectors - 9 Cols */}
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {INDUSTRY_SPOTLIGHT.map((item) => (
                  <Link
                    key={item.name}
                    href={`/category/${item.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 shadow-xs border border-neutral-200">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover brightness-90"
                      />
                    </div>
                    <span className="font-serif text-[11px] font-bold tracking-wider text-neutral-800 uppercase mt-2.5 group-hover:text-[#A67C52] transition-colors">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. STAY AHEAD & EDITORIAL QUOTE BANNER */}
        {/* ========================================================= */}
        <section className="w-full bg-neutral-50 border-b border-neutral-200 py-10 sm:py-14 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: 4 Core Value Propositions - 5 Cols */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10.5px] uppercase tracking-[0.24em] text-[#8D682E] font-sans font-bold block">
                  STAY AHEAD
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto text-[#8D682E] shadow-xs">
                      <Newspaper className="w-4 h-4 stroke-[1.6]" />
                    </div>
                    <span className="text-[11px] font-sans font-medium text-neutral-800 block">
                      Daily Updates
                    </span>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto text-[#8D682E] shadow-xs">
                      <UserCheck className="w-4 h-4 stroke-[1.6]" />
                    </div>
                    <span className="text-[11px] font-sans font-medium text-neutral-800 block">
                      Expert Analysis
                    </span>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto text-[#8D682E] shadow-xs">
                      <Globe2 className="w-4 h-4 stroke-[1.6]" />
                    </div>
                    <span className="text-[11px] font-sans font-medium text-neutral-800 block">
                      Global Perspective
                    </span>
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto text-[#8D682E] shadow-xs">
                      <BookmarkCheck className="w-4 h-4 stroke-[1.6]" />
                    </div>
                    <span className="text-[11px] font-sans font-medium text-neutral-800 block">
                      Curated Stories
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Quote with Notebook Flatlay - 7 Cols */}
              <div className="lg:col-span-7 relative aspect-[16/7] sm:aspect-[16/6] overflow-hidden border border-neutral-200 shadow-sm flex items-center justify-between p-6 sm:p-10">
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
                  alt="Editorial Notebook and Coffee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent/40" />

                <div className="relative z-10 max-w-md space-y-2.5">
                  <span className="font-serif text-2xl text-[#8D682E] leading-none block">
                    &ldquo;
                  </span>
                  <p className="font-editorial-italic text-base sm:text-lg text-neutral-800 leading-snug font-light">
                    A more informed world builds a more inclusive tomorrow.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <Image
                      src="/logo/emblem.png"
                      alt="Spotlight Emblem"
                      width={1275}
                      height={1234}
                      className="w-4 h-4 object-contain"
                    />
                    <span className="text-[9.5px] uppercase tracking-[0.24em] text-[#8D682E] font-sans font-bold block">
                      THE SPOTLIGHT BUSINESS LEADERS
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
