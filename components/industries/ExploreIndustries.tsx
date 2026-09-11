import Link from 'next/link'
import {
  ArrowRight,
  Cpu,
  Coins,
  HeartPulse,
  Building2,
  Car,
  Sparkles,
  GraduationCap,
  Briefcase,
} from 'lucide-react'
import type { IndustryItem } from '@/lib/data/mockData'

const ICON_MAP: Record<string, any> = {
  Cpu,
  Coins,
  HeartPulse,
  Building2,
  Car,
  Sparkles,
  GraduationCap,
  Briefcase,
}

const THEME_PALETTES = [
  {
    bg: 'bg-gradient-to-br from-[#0c2340] via-[#103b6e] to-[#175ca8] hover:from-[#103b6e] hover:to-[#1e6fbe]',
    border: 'border border-blue-400/30',
    shadow: 'shadow-[0_10px_25px_-5px_rgba(16,59,110,0.4)]',
    number: 'text-blue-200 font-semibold',
    iconBg: 'bg-white/15 text-white border border-white/25 group-hover:bg-white group-hover:text-[#0c2340]',
    title: 'text-white group-hover:text-blue-100',
    count: 'text-blue-200/80 font-medium',
  },
  {
    bg: 'bg-gradient-to-br from-[#4a0d13] via-[#751620] to-[#a3222a] hover:from-[#751620] hover:to-[#c22e37]',
    border: 'border border-red-400/30',
    shadow: 'shadow-[0_10px_25px_-5px_rgba(117,22,32,0.4)]',
    number: 'text-red-200 font-semibold',
    iconBg: 'bg-white/15 text-white border border-white/25 group-hover:bg-white group-hover:text-[#4a0d13]',
    title: 'text-white group-hover:text-red-100',
    count: 'text-red-200/80 font-medium',
  },
  {
    bg: 'bg-gradient-to-br from-[#082a1d] via-[#0d4f37] to-[#147a55] hover:from-[#0d4f37] hover:to-[#1a996b]',
    border: 'border border-emerald-400/30',
    shadow: 'shadow-[0_10px_25px_-5px_rgba(13,79,55,0.4)]',
    number: 'text-emerald-200 font-semibold',
    iconBg: 'bg-white/15 text-white border border-white/25 group-hover:bg-white group-hover:text-[#082a1d]',
    title: 'text-white group-hover:text-emerald-100',
    count: 'text-emerald-200/80 font-medium',
  },
  {
    bg: 'bg-gradient-to-br from-[#240e38] via-[#431966] to-[#6a299f] hover:from-[#431966] hover:to-[#8333c4]',
    border: 'border border-purple-400/30',
    shadow: 'shadow-[0_10px_25px_-5px_rgba(67,25,102,0.4)]',
    number: 'text-purple-200 font-semibold',
    iconBg: 'bg-white/15 text-white border border-white/25 group-hover:bg-white group-hover:text-[#240e38]',
    title: 'text-white group-hover:text-purple-100',
    count: 'text-purple-200/80 font-medium',
  },
  {
    bg: 'bg-gradient-to-br from-[#3d2708] via-[#66420d] to-[#996515] hover:from-[#66420d] hover:to-[#b37719]',
    border: 'border border-amber-400/30',
    shadow: 'shadow-[0_10px_25px_-5px_rgba(102,66,13,0.4)]',
    number: 'text-amber-200 font-semibold',
    iconBg: 'bg-white/15 text-white border border-white/25 group-hover:bg-white group-hover:text-[#3d2708]',
    title: 'text-white group-hover:text-amber-100',
    count: 'text-amber-200/80 font-medium',
  },
  {
    bg: 'bg-gradient-to-br from-[#082833] via-[#0e4b5e] to-[#147491] hover:from-[#0e4b5e] hover:to-[#1b8ba6]',
    border: 'border border-cyan-400/30',
    shadow: 'shadow-[0_10px_25px_-5px_rgba(14,75,94,0.4)]',
    number: 'text-cyan-200 font-semibold',
    iconBg: 'bg-white/15 text-white border border-white/25 group-hover:bg-white group-hover:text-[#082833]',
    title: 'text-white group-hover:text-cyan-100',
    count: 'text-cyan-200/80 font-medium',
  },
]

const getIndustryTheme = (slug: string = '', name: string = '', index: number) => {
  const s = `${slug} ${name}`.toLowerCase()
  if (s.includes('tech') || s.includes('ai') || s.includes('cpu')) return THEME_PALETTES[0]
  if (s.includes('auto') || s.includes('car') || s.includes('mobility')) return THEME_PALETTES[1]
  if (s.includes('manufactur') || s.includes('build') || s.includes('industrial')) return THEME_PALETTES[2]
  if (s.includes('legal') || s.includes('law') || s.includes('compliance')) return THEME_PALETTES[3]
  return THEME_PALETTES[index % THEME_PALETTES.length]
}

interface ExploreIndustriesProps {
  industries: IndustryItem[]
}

export default function ExploreIndustries({ industries }: ExploreIndustriesProps) {
  return (
    <section className="w-full bg-white border-b border-neutral-200 py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Description (3.5 cols) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.14em] text-[#121214] font-normal leading-tight">
              Explore<br />Industries
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed max-w-sm">
              Stories, insights and trends from the industries shaping our world.
            </p>

            <div className="pt-2">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A67C52] hover:text-[#7E5933] transition-colors group"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Available Industries Grid with Premium Solid Gradients */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((industry, index) => {
              const displayName = industry.name || (industry as any).title || 'Industry'
              const displayNumber = industry.number || (index < 9 ? `0${index + 1}` : `${index + 1}`)
              const countNum = typeof industry.articleCount === 'number' ? industry.articleCount : 0
              const displayCount = `${countNum} ${countNum === 1 ? 'Article' : 'Articles'}`
              const IconComponent = ICON_MAP[industry.iconName] || Briefcase
              const theme = getIndustryTheme(industry.slug, displayName, index)

              return (
                <Link
                  key={industry.id || `ind-${index}`}
                  href={`/category/${industry.slug || 'industry'}`}
                  className={`p-5 sm:p-6 rounded-xl ${theme.bg} ${theme.border} ${theme.shadow} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between min-h-[130px] sm:min-h-[155px] relative overflow-hidden`}
                >
                  {/* Subtle top-right ambient glow overlay */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className={`font-serif text-sm sm:text-base ${theme.number} transition-colors`}>
                      {displayNumber}
                    </span>
                    <div className={`w-8 h-8 rounded-lg ${theme.iconBg} backdrop-blur-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs`}>
                      <IconComponent className="w-4 h-4 stroke-[1.8] transition-colors" />
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5 relative z-10">
                    <h3 className={`font-serif text-xs sm:text-[13px] font-bold tracking-wider uppercase ${theme.title} transition-colors leading-tight drop-shadow-xs`}>
                      {displayName}
                    </h3>
                    <span className={`text-[9.5px] sm:text-[10px] ${theme.count} font-sans uppercase tracking-widest mt-1 block`}>
                      {displayCount}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
