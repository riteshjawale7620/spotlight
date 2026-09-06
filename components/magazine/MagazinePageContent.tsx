'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Download, Sparkles, X, Check, Eye } from 'lucide-react'
import SubscribeModal from '@/components/header/SubscribeModal'

interface MagazineIssue {
  id: string
  issueNumber: string
  monthYear: string
  year: number
  title: string
  subtitle: string
  category: string
  imageUrl: string
  slug: string
  description?: string
  highlights?: string[]
  issuuLink?: string
  isSanity?: boolean
}

interface MagazinePageContentProps {
  initialSanityMagazines?: any[]
}

const DEFAULT_MAGAZINE_ISSUES: MagazineIssue[] = [
  // 2026
  {
    id: 'issue-09',
    issueNumber: 'ISSUE 09',
    monthYear: 'September 2026',
    year: 2026,
    title: 'The Next Generation of Leaders',
    subtitle: 'Bold Ideas. Braver Leaders. A More Inclusive Tomorrow.',
    category: 'LEADERSHIP',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    slug: 'september-2026',
    description: 'An in-depth exploration of transformative chief executives under 40 reshaping global corporate governance, ethical AI, and cross-border innovation.',
    highlights: ['The New C-Suite Playbook', 'Gen-Z in Venture Capital', 'Inclusive Corporate Ecosystems']
  },
  {
    id: 'issue-08',
    issueNumber: 'ISSUE 08',
    monthYear: 'August 2026',
    year: 2026,
    title: 'The Innovation Advantage',
    subtitle: 'Ideas. Technology. People. Real Impact.',
    category: 'INNOVATION',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    slug: 'august-2026',
    description: 'How breakthrough R&D laboratories and high-velocity product teams turn moonshots into sustainable recurring market dominance.',
    highlights: ['Autonomous Enterprise Workflows', 'Commercial Quantum Computing', 'Clean Industrial Tech']
  },
  {
    id: 'issue-07',
    issueNumber: 'ISSUE 07',
    monthYear: 'July 2026',
    year: 2026,
    title: 'Sustainable Growth Real Change',
    subtitle: 'People. Planet. Progress.',
    category: 'SUSTAINABILITY',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
    slug: 'july-2026',
    description: 'Examining the global shift toward verifiable carbon-neutral manufacturing and regenerative capital markets.',
    highlights: ['The Carbon-Negative Supply Chain', 'Biodiversity Financing', 'Green Grid Infrastructure']
  },
  {
    id: 'issue-06',
    issueNumber: 'ISSUE 06',
    monthYear: 'June 2026',
    year: 2026,
    title: 'The New Global Economy',
    subtitle: 'Resilient Markets. Stronger Societies. Brighter Opportunities.',
    category: 'ECONOMY',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    slug: 'june-2026',
    description: 'Global trade realignment, emerging financial hubs, and the decentralization of institutional asset management.',
    highlights: ['The Rise of Middle-Eastern Fintech', 'Cross-Border Instant Settlements', 'Sovereign Wealth Paradigms']
  },

  // 2025
  {
    id: 'issue-05',
    issueNumber: 'ISSUE 05',
    monthYear: 'May 2025',
    year: 2025,
    title: 'Women Who Lead',
    subtitle: 'Courage. Opportunity. Lasting Impact.',
    category: 'LEADERSHIP',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    slug: 'may-2025',
    description: 'Celebrating 50 iconic women executives transforming multinational biotechnology, aerospace, and institutional finance.',
    highlights: ['Visionary Boardroom Strategy', 'Pioneering Biotech Founders', 'Mentorship at Scale']
  },
  {
    id: 'issue-04',
    issueNumber: 'ISSUE 04',
    monthYear: 'April 2025',
    year: 2025,
    title: 'The AI Shift',
    subtitle: 'From Hype to Real-World Transformation.',
    category: 'TECHNOLOGY',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    slug: 'april-2025',
    description: 'A pragmatic executive blueprint for integrating large frontier models into enterprise architecture and regulatory compliance.',
    highlights: ['Agentic Operating Systems', 'Enterprise Data Sovereignty', 'The Real ROI of Generative AI']
  },
  {
    id: 'issue-03',
    issueNumber: 'ISSUE 03',
    monthYear: 'March 2025',
    year: 2025,
    title: 'Healthy People Stronger Nations',
    subtitle: 'Innovation in Healthcare for a Better Tomorrow.',
    category: 'PEOPLE',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    slug: 'march-2025',
    description: 'Preventative medicine, longevity biotechnology, and digital healthcare delivery expanding across developing economies.',
    highlights: ['Precision Genomics', 'Decentralized Clinical Trials', 'Preventative Longevity Networks']
  },
  {
    id: 'issue-02',
    issueNumber: 'ISSUE 02',
    monthYear: 'February 2025',
    year: 2025,
    title: 'The Entrepreneur Effect',
    subtitle: 'Ideas that Create Jobs. Communities. Change.',
    category: 'INDUSTRY',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    slug: 'february-2025',
    description: 'Grassroots founders scaling regional unicorns and building lasting social and economic value for local communities.',
    highlights: ['Bootstrapping to $100M ARR', 'Regional Innovation Hubs', 'Building Resilient Cultures']
  },

  // 2024
  {
    id: 'issue-01',
    issueNumber: 'ISSUE 01',
    monthYear: 'December 2024',
    year: 2024,
    title: 'A World of Opportunity',
    subtitle: 'New Perspectives. New Possibilities.',
    category: 'ECONOMY',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    slug: 'december-2024',
    description: 'The inaugural global annual forecast: navigating geopolitical pivots, supply chain resilience, and demographic shifts.',
    highlights: ['Global Macro Outlook 2025', 'The Reshoring Wave', 'Frontier Market Opportunities']
  },
  {
    id: 'issue-02-2024',
    issueNumber: 'ISSUE 02',
    monthYear: 'November 2024',
    year: 2024,
    title: 'Redefining Industries',
    subtitle: 'People. Technology. A Brighter Tomorrow.',
    category: 'INDUSTRY',
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop',
    slug: 'november-2024',
    description: 'How legacy manufacturing, logistics, and heavy infrastructure are undergoing radical digital and physical modernization.',
    highlights: ['Smart Gigafactories', 'Logistics Hyper-Automation', 'Zero-Emission Heavy Freight']
  },
  {
    id: 'issue-03-2024',
    issueNumber: 'ISSUE 03',
    monthYear: 'October 2024',
    year: 2024,
    title: 'Leaders Create Legacies',
    subtitle: 'Vision. Impact. Generations.',
    category: 'LEADERSHIP',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    slug: 'october-2024',
    description: 'Interviews with founders and board chairs on intergenerational stewardship, endowment preservation, and enduring purpose.',
    highlights: ['Multi-Generational Stewardship', 'Enduring Philanthropic Impact', 'Sovereign Succession']
  },
  {
    id: 'issue-04-2024',
    issueNumber: 'ISSUE 04',
    monthYear: 'September 2024',
    year: 2024,
    title: 'Innovation for a Better Tomorrow',
    subtitle: 'Ideas Today. A Brighter Future.',
    category: 'SUSTAINABILITY',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    slug: 'september-2024',
    description: 'Renewable energy milestones, clean grid innovation, and breakthrough battery storage technologies accelerating the green transition.',
    highlights: ['Next-Gen Battery Chemistries', 'Offshore Wind Scalability', 'Circular Material Science']
  },
]

const CATEGORIES = [
  'ALL ISSUES',
  'LEADERSHIP',
  'TECHNOLOGY',
  'INDUSTRY',
  'SUSTAINABILITY',
  'ECONOMY',
  'PEOPLE',
  'INNOVATION',
]

const YEAR_THEMES: Record<number, { subtitle: string }> = {
  2026: { subtitle: 'A BOLDER TOMORROW' },
  2025: { subtitle: 'PEOPLE BUILD POSSIBILITIES' },
  2024: { subtitle: 'IDEAS THAT STARTED IT ALL' },
}

export default function MagazinePageContent({ initialSanityMagazines = [] }: MagazinePageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL ISSUES')
  const [selectedIssue, setSelectedIssue] = useState<MagazineIssue | null>(null)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState<boolean>(false)

  // Integrate live Sanity magazines with default editorial archive
  const allIssues: MagazineIssue[] = (() => {
    if (!initialSanityMagazines || initialSanityMagazines.length === 0) {
      return DEFAULT_MAGAZINE_ISSUES
    }

    const mappedSanity: MagazineIssue[] = initialSanityMagazines.map((m, idx) => {
      const titleLower = (m.title || '').toLowerCase()
      const descLower = (m.description || '').toLowerCase()

      let year = 2024
      if (titleLower.includes('2026') || descLower.includes('2026')) year = 2026
      else if (titleLower.includes('2025') || descLower.includes('2025')) year = 2025

      let category = 'LEADERSHIP'
      if (titleLower.includes('ai') || descLower.includes('ai')) category = 'TECHNOLOGY'
      else if (titleLower.includes('entrepreneur') || titleLower.includes('business')) category = 'INDUSTRY'
      else if (titleLower.includes('innovat')) category = 'INNOVATION'

      const titleParts = (m.title || '').split(' - ')
      const mainTitle = titleParts[0] || m.title
      const subTitle = titleParts[1] || m.description || 'Special Editorial Feature'

      return {
        id: m._id || `sanity-${idx}`,
        issueNumber: `ISSUE ${String(idx + 1).padStart(2, '0')}`,
        monthYear: m.publishedDate ? new Date(m.publishedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : `${year} Edition`,
        year,
        title: mainTitle,
        subtitle: subTitle,
        category,
        imageUrl: m.imageUrl || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        slug: m.slug || `magazine-${idx}`,
        description: m.description,
        issuuLink: m.issuuLink,
        isSanity: true,
      }
    })

    // Combine: Keep 2026 reference issues, and use Sanity issues for 2025 and 2024
    const sanity2025 = mappedSanity.filter((i) => i.year === 2025)
    const sanity2024 = mappedSanity.filter((i) => i.year === 2024)
    const ref2026 = DEFAULT_MAGAZINE_ISSUES.filter((i) => i.year === 2026)

    // Blend: If Sanity has items for a year, use Sanity items + supplemental reference items as needed
    const blended2025 = sanity2025.length > 0 ? [...sanity2025, ...DEFAULT_MAGAZINE_ISSUES.filter((i) => i.year === 2025).slice(sanity2025.length)] : DEFAULT_MAGAZINE_ISSUES.filter((i) => i.year === 2025)
    const blended2024 = sanity2024.length > 0 ? [...sanity2024] : DEFAULT_MAGAZINE_ISSUES.filter((i) => i.year === 2024)

    return [...ref2026, ...blended2025, ...blended2024]
  })()

  // Filter issues based on category
  const filteredIssues = selectedCategory === 'ALL ISSUES'
    ? allIssues
    : allIssues.filter((issue) => issue.category.toUpperCase() === selectedCategory.toUpperCase())

  const years = [2026, 2025, 2024]

  const scrollToYear = (year: number) => {
    const el = document.getElementById(`year-section-${year}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative bg-white min-h-screen text-[#141416]">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        
        {/* Category Filter Tabs Bar */}
        <div className="mb-10 sm:mb-12 pt-2 pb-4 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] sm:text-[10.5px] font-sans font-bold tracking-[0.14em] uppercase px-3.5 sm:px-4 py-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#141416] text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-black border border-neutral-200/80'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-sans text-neutral-500">
            <span className="font-serif uppercase tracking-[0.16em] text-[#8C6D3B] font-semibold">Magazine Archive</span>
            <span>&bull;</span>
            <span className="font-medium text-neutral-700">{filteredIssues.length} Issues</span>
          </div>
        </div>

        {/* Main Section Layout: Left Year Grids (83%) + Right Editorial Rail (17%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left / Center: Chronological Magazine Archive */}
          <div className="lg:col-span-10 space-y-14 lg:space-y-18">
            {years.map((year) => {
              const yearIssues = filteredIssues.filter((i) => i.year === year)
              if (yearIssues.length === 0) return null

              return (
                <section key={year} id={`year-section-${year}`} className="scroll-mt-24">
                  {/* Year Header Line with divider stretching across */}
                  <div className="flex items-center gap-4 sm:gap-6 pb-2.5 mb-7 border-b border-neutral-200">
                    <span className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#141416] tracking-tight shrink-0">
                      {year}
                    </span>
                    
                    <div className="hidden sm:block flex-1 h-[1px] bg-neutral-200" />

                    <span className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.24em] text-[#7A7A7A] shrink-0">
                      {YEAR_THEMES[year]?.subtitle}
                    </span>

                    <button
                      onClick={() => scrollToYear(year)}
                      className="group inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#141416] hover:text-[#8C6D3B] transition-colors shrink-0 ml-auto sm:ml-0"
                    >
                      <span>VIEW YEAR</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* 4-Column Magazine Grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
                    {yearIssues.map((issue) => (
                      <div
                        key={issue.id}
                        className="group flex flex-col cursor-pointer"
                        onClick={() => setSelectedIssue(issue)}
                      >
                        {/* Magazine Cover Container (Aspect Ratio 3:4.4) */}
                        <div className="relative aspect-[3/4.4] w-full bg-[#1A1A1E] rounded-xs overflow-hidden shadow-xs group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-neutral-200">
                          
                          {/* Background Artwork */}
                          <Image
                            src={issue.imageUrl}
                            alt={issue.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* If not a pre-designed Sanity cover, render high-contrast typography overlay */}
                          {!issue.isSanity ? (
                            <>
                              {/* Gradient Overlays for High-End Magazine Look */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/75" />

                              {/* Authentic Magazine Typography Overlay */}
                              <div className="absolute inset-0 p-3 sm:p-3.5 flex flex-col justify-between text-white z-10 select-none">
                                
                                {/* Top Masthead & Issue Bar */}
                                <div>
                                  <div className="text-center pt-0.5 pb-1 border-b border-white/30">
                                    <span className="font-serif text-[9.5px] sm:text-[10.5px] tracking-[0.18em] uppercase text-white font-medium block leading-tight">
                                      THE SPOTLIGHT LEADERS
                                    </span>
                                    <span className="text-[5.5px] sm:text-[6px] tracking-[0.28em] uppercase text-neutral-300 block font-sans">
                                      INSPIRING THE FUTURE OF BUSINESS
                                    </span>
                                  </div>

                                  <div className="flex justify-between items-center text-[6.5px] sm:text-[7px] uppercase tracking-[0.16em] text-[#C5A059] font-bold mt-1.5">
                                    <span>{issue.issueNumber}</span>
                                    <span>{issue.monthYear.toUpperCase()}</span>
                                  </div>
                                </div>

                                {/* Middle/Bottom: Issue Title & Subtitle */}
                                <div className="space-y-1.5 pb-1">
                                  <h3 className="font-serif text-sm sm:text-base font-medium uppercase text-white leading-tight drop-shadow-sm group-hover:text-[#E2C792] transition-colors">
                                    {issue.title}
                                  </h3>
                                  <p className="text-[8px] sm:text-[8.5px] font-sans text-neutral-300 leading-snug line-clamp-2">
                                    {issue.subtitle}
                                  </p>
                                  <div className="w-5 h-[1px] bg-[#C5A059] mt-2" />
                                </div>

                              </div>
                            </>
                          ) : (
                            /* For authentic Sanity covers: subtle bottom shadow for depth */
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          )}

                          {/* Hover Action Badge */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-[2px]">
                            <span className="inline-flex items-center gap-1.5 bg-white text-[#141416] text-[10px] font-sans font-bold uppercase tracking-[0.16em] px-3.5 py-1.5 shadow-lg">
                              <Eye className="w-3.5 h-3.5" />
                              Inspect Issue
                            </span>
                          </div>

                        </div>

                        {/* Below Cover Metadata */}
                        <div className="mt-3 text-left">
                          <p className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#141416]">
                            {issue.issueNumber}
                          </p>
                          <p className="text-xs text-[#6E6E73] font-sans">
                            {issue.monthYear}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}

            {filteredIssues.length === 0 && (
              <div className="text-center py-16 bg-white border border-[#E8E3DA] p-8">
                <p className="font-serif text-lg text-neutral-800">No issues found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('ALL ISSUES')}
                  className="mt-4 px-4 py-2 bg-[#785338] text-white text-xs font-sans uppercase tracking-widest"
                >
                  View All Issues
                </button>
              </div>
            )}
          </div>

          {/* Right: Dedicated Luxury Magazine Editorial Rail */}
          <aside className="lg:col-span-2 hidden lg:flex flex-col items-center border-l border-neutral-200 pl-6 xl:pl-8 select-none">
            <div className="sticky top-28 flex flex-col items-center text-center space-y-7 w-full">
              
              {/* Giant Vertical Typography reading vertically downwards */}
              <div className="py-2">
                <span
                  style={{ writingMode: 'vertical-rl' }}
                  className="font-serif text-5xl xl:text-6xl text-[#141416] tracking-[0.28em] uppercase font-normal leading-none"
                >
                  MAGAZINE
                </span>
              </div>

              {/* Short Vertical Line */}
              <div className="w-[1px] h-8 bg-[#C5A059]" />

              {/* Manifesto Callout */}
              <div className="space-y-1 max-w-[130px]">
                <h4 className="font-serif text-xs uppercase tracking-[0.16em] text-[#141416] font-semibold leading-relaxed">
                  STORIES THAT INSPIRE ACROSS TIME.
                </h4>
              </div>

              {/* Short Vertical Line */}
              <div className="w-[1px] h-8 bg-neutral-200" />

              {/* Vertical Category Index */}
              <div className="space-y-2 text-[9.5px] font-sans font-bold tracking-[0.22em] uppercase text-neutral-600">
                {['PEOPLE', 'IDEAS', 'INDUSTRIES', 'SOCIETY', 'THE WORLD'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      if (CATEGORIES.includes(tag)) setSelectedCategory(tag)
                    }}
                    className="block w-full hover:text-[#8C6D3B] transition-colors py-0.5 cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Short Vertical Line */}
              <div className="w-[1px] h-8 bg-neutral-200" />

              {/* Editorial Pull Quote */}
              <div className="max-w-[150px] space-y-3 text-center">
                <p className="font-editorial-italic text-xs text-[#4A4A4A] leading-relaxed">
                  &ldquo;Progress looks different every year. But the purpose remains the same.&rdquo;
                </p>
                <div className="w-6 h-[1px] bg-[#C5A059] mx-auto" />
                <span className="text-[8px] font-sans font-bold uppercase tracking-[0.24em] text-[#8C6D3B] block">
                  THE SPOTLIGHT LEADERS
                </span>
              </div>

            </div>
          </aside>

        </div>

        {/* Bottom Signature Banner */}
        <div className="mt-20 pt-7 pb-7 px-6 sm:px-10 bg-[#FAFAFA] border border-neutral-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo/emblem.png"
              alt="Spotlight Leaders Emblem"
              width={1275}
              height={1234}
              className="w-8 h-8 object-contain"
            />
            <div>
              <span className="font-serif text-base sm:text-lg tracking-[0.18em] uppercase text-[#141416] font-normal block">
                THE SPOTLIGHT LEADERS
              </span>
              <span className="text-[7.5px] font-sans tracking-[0.26em] uppercase text-neutral-500 block">
                INSPIRING THE FUTURE OF BUSINESS
              </span>
            </div>
          </div>

          {/* Center: Quote */}
          <div className="font-editorial-italic text-base sm:text-lg text-[#333]">
            &ldquo;The past inspires the future.&rdquo;
          </div>

          {/* Right: Subscribe Button */}
          <div>
            <button
              onClick={() => setIsSubscribeOpen(true)}
              className="inline-flex items-center gap-2 border border-[#C5A059] bg-white hover:bg-neutral-50 text-[#8C6D3B] hover:text-[#6E4F23] px-5 sm:px-6 py-2.5 text-[11px] font-sans font-bold tracking-[0.18em] uppercase transition-all shadow-xs cursor-pointer"
            >
              <span>SUBSCRIBE TO THE MAGAZINE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Quick Issue Inspection Modal */}
      {selectedIssue && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIssue(null)}
        >
          <div
            className="relative bg-white max-w-2xl w-full rounded-xs shadow-2xl border border-[#D8D2C6] overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Cover */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-48 aspect-[3/4.2] bg-neutral-900 shadow-xl border border-neutral-300 overflow-hidden">
                  <Image
                    src={selectedIssue.imageUrl}
                    alt={selectedIssue.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  {!selectedIssue.isSanity && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 p-2.5 flex flex-col justify-between text-white">
                      <span className="font-serif text-[9px] tracking-widest uppercase">THE SPOTLIGHT LEADERS</span>
                      <span className="font-serif text-xs uppercase font-medium">{selectedIssue.title}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Info */}
              <div className="sm:col-span-7 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#8C6D3B] mb-1">
                    <span>{selectedIssue.issueNumber}</span>
                    <span>&bull;</span>
                    <span>{selectedIssue.monthYear}</span>
                  </div>
                  <h3 className="font-serif text-2xl uppercase text-neutral-900 leading-tight">
                    {selectedIssue.title}
                  </h3>
                  <p className="font-editorial-italic text-sm text-neutral-600 mt-1">
                    {selectedIssue.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed">
                  {selectedIssue.description}
                </p>

                {selectedIssue.highlights && (
                  <div className="pt-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-500 block mb-1.5">
                      Included Special Reports:
                    </span>
                    <ul className="space-y-1">
                      {selectedIssue.highlights.map((item, idx) => (
                        <li key={idx} className="text-xs text-neutral-800 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  {selectedIssue.issuuLink ? (
                    <a
                      href={selectedIssue.issuuLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#8C6D3B] hover:bg-[#725428] text-white px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Digital Flipbook
                    </a>
                  ) : (
                    <Link
                      href={`/issues/${selectedIssue.slug}`}
                      className="inline-flex items-center gap-2 bg-[#141416] text-white hover:bg-neutral-800 px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read Issue
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      setSelectedIssue(null)
                      setIsSubscribeOpen(true)
                    }}
                    className="inline-flex items-center gap-1.5 border border-[#C5A059] text-[#8C6D3B] hover:bg-[#FAF7F2] px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Order Print / PDF
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </div>
  )
}
