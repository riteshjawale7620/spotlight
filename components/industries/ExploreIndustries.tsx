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

          {/* Right Column: Available Industries Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 border-t border-l border-neutral-200">
            {industries.map((industry, index) => {
              const displayName = industry.name || (industry as any).title || 'Industry'
              const displayNumber = industry.number || (index < 9 ? `0${index + 1}` : `${index + 1}`)
              const countNum = typeof industry.articleCount === 'number' ? industry.articleCount : 0
              const displayCount = `${countNum} ${countNum === 1 ? 'Article' : 'Articles'}`
              const IconComponent = ICON_MAP[industry.iconName] || Briefcase

              return (
                <Link
                  key={industry.id || `ind-${index}`}
                  href={`/category/${industry.slug || 'industry'}`}
                  className="p-3.5 sm:p-6 border-r border-b border-neutral-200 hover:bg-neutral-50 transition-all duration-200 group flex flex-col justify-between min-h-[115px] sm:min-h-[140px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm font-normal text-neutral-400 group-hover:text-[#A67C52] transition-colors">
                      {displayNumber}
                    </span>
                    <IconComponent className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors stroke-[1.5]" />
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <h3 className="font-serif text-[11px] sm:text-[13px] font-semibold tracking-wider text-neutral-900 uppercase group-hover:text-[#A67C52] transition-colors leading-tight">
                      {displayName}
                    </h3>
                    <span className="text-[9.5px] sm:text-[10px] text-neutral-400 font-sans uppercase tracking-widest mt-1 block">
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
