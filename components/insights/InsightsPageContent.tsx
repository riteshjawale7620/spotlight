'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Award,
  Building2,
  Briefcase,
  Heart,
  FileText,
  Mic,
  MessageSquare,
  BarChart3,
  Video,
  Check,
} from 'lucide-react'

const CATEGORIES = [
  { id: 'all', label: 'All Insights', icon: Sparkles },
  { id: 'tech-ai', label: 'Technology & AI', icon: Cpu },
  { id: 'healthcare', label: 'Healthcare', icon: Heart },
  { id: 'automobile', label: 'Automotive', icon: Briefcase },
  { id: 'manufacturing', label: 'Manufacturing', icon: Building2 },
  { id: 'legal', label: 'Legal', icon: Award },
  { id: 'business-bulletin', label: 'Strategy & Markets', icon: TrendingUp },
]

const INSIGHTS_FORMATS = [
  {
    title: 'Executive Dossiers',
    description: 'Comprehensive research and data-backed perspectives on market movements.',
    count: '24 Reports',
    href: '/category/business-bulletin',
    iconName: 'FileText',
  },
  {
    title: 'Spotlight Talks',
    description: 'Interviews and leadership dialogues with top executives and founders.',
    count: '12 Episodes',
    href: '/category/web-profiles',
    iconName: 'Mic',
  },
  {
    title: 'Strategic Bulletins',
    description: 'Concise briefings on corporate restructuring, capital and governance.',
    count: '10 Dispatches',
    href: '/category/business-bulletin',
    iconName: 'MessageSquare',
  },
  {
    title: 'Industry Analyses',
    description: 'Deep dives into automotive, manufacturing, tech, legal, and healthcare.',
    count: '49 Analyses',
    href: '/industries',
    iconName: 'BarChart3',
  },
  {
    title: 'Executive Profiles',
    description: 'In-depth journeys of founders and pioneers transforming industries.',
    count: '15 Profiles',
    href: '/leaders',
    iconName: 'Briefcase',
  },
  {
    title: 'Digital Editions',
    description: 'Full magazine issues with curated cover stories and retrospectives.',
    count: '20 Issues',
    href: '/magazine',
    iconName: 'Video',
  },
]

interface InsightsPageContentProps {
  initialData?: {
    featured?: any
    popular?: any[]
    articles?: any[]
    leaders?: any[]
    latestMagazine?: any
  }
}

export default function InsightsPageContent({ initialData }: InsightsPageContentProps) {
  const latestMagazine = initialData?.latestMagazine
  const magazineImage =
    latestMagazine?.imageUrl ||
    'https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg'
  const magazineTitle =
    latestMagazine?.title || 'Manuel Rendon_2026’s Most Influential Business Leaders Transforming the Chemical Industry'
  const magazineHref = latestMagazine?.issuuLink || '/magazine'

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !agreed) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
      setAgreed(false)
    }, 4000)
  }

  // Real Sanity data with fallbacks
  const featured = initialData?.featured || {
    title: 'The Succession Equation: HDFC Bank Prepares for Life After Sashidhar Jagdishan',
    slug: 'hdfc-bank-sashidhar-jagdishan-succession-leadership-transition',
    excerpt: 'Across global business corridors and capital markets, leaders are navigating complex succession plans and strategic governance shifts.',
    category: 'BUSINESS STRATEGY',
    categorySlug: 'business-bulletin',
    imageUrl: '/images/perspective-tech.jpg',
    readingTime: '7 MIN READ',
  }

  const allArticles: any[] = initialData?.articles && initialData.articles.length > 0 ? initialData.articles : []
  const popularArticles: any[] = initialData?.popular && initialData.popular.length > 0
    ? initialData.popular
    : allArticles.slice(1, 4)

  // Filter latest insights based on selected real category tab
  const filteredArticles =
    selectedCategory === 'all'
      ? allArticles
      : allArticles.filter((article: any) => {
          const catSlug = (article.categorySlug || '').toLowerCase()
          const catTitle = (article.category || '').toLowerCase()
          if (selectedCategory === 'tech-ai') {
            return catSlug === 'tech-ai' || catSlug === 'technology' || catTitle.includes('tech')
          }
          if (selectedCategory === 'automobile') {
            return catSlug === 'automobile' || catSlug === 'automotive' || catTitle.includes('auto')
          }
          if (selectedCategory === 'healthcare') {
            return catSlug === 'healthcare' || catTitle.includes('health')
          }
          if (selectedCategory === 'manufacturing') {
            return catSlug === 'manufacturing' || catTitle.includes('manufactur')
          }
          if (selectedCategory === 'legal') {
            return catSlug === 'legal' || catTitle.includes('legal')
          }
          if (selectedCategory === 'business-bulletin') {
            return catSlug === 'business-bulletin' || catTitle.includes('bulletin') || catTitle.includes('strateg')
          }
          return catSlug === selectedCategory
        })

  const displayedArticles = filteredArticles.length > 0 ? filteredArticles : allArticles

  return (
    <div className="w-full bg-white min-h-screen text-[#121214]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full border-b border-neutral-200 overflow-hidden bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6339]">
                Strategic Intelligence
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.08] tracking-tight text-[#121214]">
                Insights Today.<br className="hidden sm:inline" /> Enduring Impact Tomorrow.
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed max-w-xl">
                In-depth analytical reporting, market foresight, and executive perspectives on the systemic transformations shaping technology, industry, and global capital.
              </p>

              <div className="pt-2">
                <a
                  href="#featured-section"
                  className="inline-flex items-center gap-2.5 bg-[#8C6339] hover:bg-[#734F2B] text-white px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <span>Explore In-Depth Analysis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Real Stats Counters */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 max-w-lg">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121214]">
                    {allArticles.length > 0 ? `${allArticles.length}+` : '59'}
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                    Analytical Articles
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121214]">
                    15
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                    Executive Leaders
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#121214]">
                    5
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                    Core Industries
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual with Quote Overlay (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/2] w-full overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900">
                <Image
                  src={featured.imageUrl || '/images/perspective-tech.jpg'}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

                {/* Editorial Quote Card Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                  <div className="flex justify-end">
                    <span className="font-serif text-4xl text-[#C5A059] leading-none">“</span>
                  </div>

                  <div className="space-y-4">
                    <p className="font-serif text-lg sm:text-xl font-normal leading-snug text-neutral-100 line-clamp-3">
                      {featured.title}
                    </p>
                    <div className="w-12 h-[1.5px] bg-[#C5A059]" />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold">
                      <span>Strategy</span>
                      <span>·</span>
                      <span>Markets</span>
                      <span>·</span>
                      <span>Governance</span>
                      <span>·</span>
                      <span>Foresight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL SANITY TOPIC FILTER BAR */}
      <section className="w-full bg-white border-b border-neutral-200 py-4 sticky top-[110px] z-30 shadow-xs">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center justify-center gap-1.5 px-4 py-2.5 min-w-[90px] sm:min-w-[110px] transition-all shrink-0 rounded-xs cursor-pointer ${
                    isActive
                      ? 'bg-[#8C6339] text-white shadow-sm'
                      : 'bg-white hover:bg-[#F0EBE1] text-neutral-700 border border-[#E5DFD5]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8C6339]'}`} />
                  <span className="text-[10px] sm:text-[10.5px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED INSIGHT + SIDEBAR (NEWSLETTER & POPULAR) */}
      <section id="featured-section" className="w-full py-12 lg:py-16 border-b border-neutral-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: FEATURED INSIGHT */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex items-center gap-3 pb-3 mb-4">
                <h2 className="font-serif text-sm sm:text-base uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                  Lead Analytical Feature
                </h2>
                <div className="flex-1 h-[1px] bg-neutral-200" />
                <Link
                  href="/features"
                  className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#8C6339] transition-colors shrink-0"
                >
                  <span>View All Features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Featured Banner Card */}
              <div className="relative min-h-[420px] sm:min-h-[480px] p-7 sm:p-10 text-white flex flex-col justify-between overflow-hidden group bg-neutral-900 shadow-md">
                <Image
                  src={featured.imageUrl || '/images/perspective-tech.jpg'}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover brightness-[0.42]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />

                {/* Top Category Badge */}
                <div className="relative z-10">
                  <span className="inline-block text-[10px] uppercase tracking-[0.24em] font-bold text-[#D4AF37] bg-black/40 backdrop-blur-xs border border-[#C5A059]/40 px-3 py-1">
                    {featured.category || 'EXECUTIVE ANALYSIS'}
                  </span>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 my-6 space-y-4 max-w-2xl">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/articles/${featured.slug}`}
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#D4AF37] hover:text-black px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all shadow-xs"
                    >
                      <span>Read Full Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20 text-xs">
                  <span className="text-neutral-300 font-medium">The Spotlight Editorial Desk</span>
                  <div className="flex items-center gap-3 text-neutral-300 text-[11px]">
                    <span>{featured.readingTime || '7 Min Read'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: NEWSLETTER & POPULAR INSIGHTS */}
            <div className="lg:col-span-4 space-y-8">
              {/* Box 1: THE INSIGHTS NEWSLETTER */}
              <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-7 shadow-2xs">
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#8C6339] block mb-2">
                  Executive Briefing
                </span>
                <h3 className="font-serif text-xl font-normal text-[#121214] leading-snug mb-2">
                  Strategic intelligence. Straight to your desk.
                </h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed mb-4">
                  Curated briefings on corporate finance, technological integration, and executive strategy.
                </p>

                {subscribed ? (
                  <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Thank you for subscribing to The Spotlight Insights!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter corporate email address"
                      required
                      className="w-full bg-white border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#8C6339]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#8C6339] hover:bg-[#734F2B] text-white py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
                    >
                      Subscribe
                    </button>
                    <label className="flex items-start gap-2 pt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 accent-[#8C6339]"
                        required
                      />
                      <span className="text-[10px] text-neutral-500 leading-tight">
                        I agree to receive executive communications from The Spotlight Leaders.
                      </span>
                    </label>
                  </form>
                )}
              </div>

              {/* Box 2: POPULAR INSIGHTS FROM SANITY */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-neutral-200">
                  <h3 className="font-serif text-sm uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                    Trending Deep Dives
                  </h3>
                </div>

                <div className="divide-y divide-neutral-200">
                  {popularArticles.map((item: any, idx: number) => (
                    <Link
                      key={item._id || item.slug || idx}
                      href={`/articles/${item.slug}`}
                      className="flex items-start gap-4 py-3.5 group"
                    >
                      <span className="font-serif text-base text-[#8C6339] font-medium leading-none shrink-0 pt-0.5">
                        {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                      </span>
                      <div className="space-y-1 min-w-0">
                        <span className="text-[9px] text-[#A67C52] font-bold uppercase tracking-wider block">
                          {item.category || 'INSIGHT'}
                        </span>
                        <h4 className="font-serif text-[13px] leading-snug text-[#121214] group-hover:text-[#8C6339] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-neutral-400 font-sans tracking-wider uppercase block">
                          {item.readingTime || '6 MIN READ'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FILTERABLE REAL LATEST INSIGHTS GRID */}
      <section className="w-full py-12 lg:py-16 border-b border-neutral-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Filtered Grid */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 pb-3">
                <h2 className="font-serif text-sm sm:text-base uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
                  {selectedCategory === 'all'
                    ? 'All Analytical Insights'
                    : `${CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'Sector'} Analyses (${displayedArticles.length})`}
                </h2>
                <div className="flex-1 h-[1px] bg-neutral-200" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 shrink-0">
                  {displayedArticles.length} Stories
                </span>
              </div>

              {/* 3 Columns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayedArticles.slice(0, 12).map((article: any) => (
                  <article
                    key={article._id || article.slug}
                    className="group flex flex-col justify-between bg-white border border-neutral-200 overflow-hidden hover:shadow-md hover:border-[#8C6339]/50 transition-all duration-300"
                  >
                    <Link
                      href={`/articles/${article.slug}`}
                      className="block relative aspect-[3/2] w-full overflow-hidden bg-neutral-100"
                    >
                      <Image
                        src={article.imageUrl || '/images/perspective-tech.jpg'}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </Link>

                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8C6339] block mb-1">
                          {article.category || 'EDITORIAL'}
                        </span>

                        <h3 className="font-serif text-sm sm:text-[14.5px] font-normal text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug line-clamp-2">
                          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                        </h3>

                        {article.excerpt && (
                          <p className="text-[11px] text-neutral-600 font-sans mt-2 line-clamp-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-neutral-400 font-sans mt-4 pt-3 border-t border-neutral-100">
                        <span>{article.readingTime || '6 Min Read'}</span>
                        <Link
                          href={`/articles/${article.slug}`}
                          className="text-[#141414] group-hover:text-[#8C6339] font-bold uppercase tracking-wider flex items-center gap-0.5"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: SPOTLIGHT LEADERS LATEST MAGAZINE PROMO */}
            <div className="lg:col-span-4">
              <div className="bg-[#0F0F11] text-white p-7 sm:p-8 flex flex-col justify-between min-h-[490px] relative overflow-hidden group shadow-lg border border-[#27272A]">
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A059] block">
                    Latest Digital Edition
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-white uppercase leading-snug">
                    Spotlight Leaders Magazine
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-1 line-clamp-2">
                    {magazineTitle}
                  </p>
                </div>

                {/* Real Sanity Magazine Cover Mockup */}
                <div className="relative z-10 my-6 flex items-center justify-center">
                  <Link
                    href={magazineHref}
                    target={latestMagazine?.issuuLink ? '_blank' : undefined}
                    rel={latestMagazine?.issuuLink ? 'noopener noreferrer' : undefined}
                    className="block relative w-48 aspect-[3/4] shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-neutral-700 overflow-hidden bg-neutral-900"
                  >
                    <Image
                      src={magazineImage}
                      alt={magazineTitle}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 space-y-2.5">
                  <Link
                    href={magazineHref}
                    target={latestMagazine?.issuuLink ? '_blank' : undefined}
                    rel={latestMagazine?.issuuLink ? 'noopener noreferrer' : undefined}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A059] text-black hover:bg-white py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all cursor-pointer font-sans"
                  >
                    <span>Read Latest Edition</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/magazine"
                    className="w-full inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 py-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] transition-all font-sans"
                  >
                    <span>Browse All 20 Editions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PANORAMIC MID-PAGE BANNER */}
      <section className="w-full relative bg-neutral-900 text-white overflow-hidden py-16 lg:py-24">
        <Image
          src="/images/perspective-energy.jpg"
          alt="Different perspectives. A bigger picture."
          fill
          sizes="100vw"
          className="object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
                Executive Vision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-white leading-tight tracking-tight">
                Different perspectives.<br />A bigger picture.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-lg">
                Explore long-form reporting and analytical insights that challenge conventional paradigms across global enterprise ecosystems.
              </p>
              <div className="pt-2">
                <Link
                  href="/category/web-profiles"
                  className="inline-flex items-center gap-2 bg-[#8C6339] hover:bg-[#A67C52] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all"
                >
                  <span>Explore Leader Profiles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Quote (5 cols) */}
            <div className="lg:col-span-5 space-y-3 lg:pl-8 lg:border-l border-white/20">
              <p className="font-serif text-lg sm:text-xl text-neutral-100 italic leading-relaxed">
                “ Progress happens when curious minds ask better questions and build institutions designed to compound value. ”
              </p>
              <div className="w-12 h-[1.5px] bg-[#C5A059]" />
              <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-neutral-400 block pt-1">
                The Spotlight Editorial Forum
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSIGHTS BY FORMAT */}
      <section className="w-full bg-neutral-50 border-t border-neutral-200 py-14 lg:py-18">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 pb-3 mb-8">
            <h2 className="font-serif text-sm sm:text-base uppercase tracking-[0.16em] text-[#121214] font-medium shrink-0">
              Insights by Format
            </h2>
            <div className="flex-1 h-[1px] bg-neutral-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSIGHTS_FORMATS.map((format) => {
              const iconMap: Record<string, typeof FileText> = {
                FileText,
                Mic,
                MessageSquare,
                BarChart3,
                Briefcase,
                Video,
              }
              const Icon = iconMap[format.iconName] || FileText
              return (
                <Link
                  key={format.title}
                  href={format.href}
                  className="bg-white border border-neutral-200 p-5 flex flex-col justify-between hover:border-[#8C6339] hover:shadow-md transition-all group"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-[#8C6339] group-hover:bg-[#8C6339] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug">
                      {format.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-sans leading-snug">
                      {format.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[10.5px] font-semibold text-[#8C6339] tracking-wider uppercase">
                    <span>{format.count}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
