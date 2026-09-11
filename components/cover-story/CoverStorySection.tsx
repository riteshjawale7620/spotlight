import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import type { CoverStoryData } from '@/lib/data/mockData'

interface CoverStorySectionProps {
  data: CoverStoryData
}

export default function CoverStorySection({ data }: CoverStorySectionProps) {
  // Format and sanitize name
  const rawName = data?.personName || 'Ranjan Mahtani'
  const cleanName = rawName.includes('-') && !rawName.includes(' ')
    ? rawName
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : rawName

  // Resolve dynamic portrait
  const portraitSrc =
    data?.personPortraitUrl ||
    (data?.storySlug?.includes('ranjan')
      ? '/images/leaders/ranjan-mahtani.jpg'
      : '/images/leaders-hero-portrait.jpg')

  // Dynamic tagline
  const tagline =
    data?.tagline && !data.tagline.includes('Human Wellness')
      ? data.tagline
      : 'Disruption is the courage to reconstruct legacy manufacturing into an eco-conscious, agile ecosystem.'

  // Dynamic designations
  const designations =
    data?.designations && data.designations.length > 0
      ? data.designations
      : ['FOUNDER & EXECUTIVE CHAIRMAN', 'EPIC GROUP', 'GLOBAL DISRUPTOR']

  // Resolve story link
  const slug = data?.storySlug || 'ranjan-mahtani'
  const storyHref = slug.startsWith('/')
    ? slug
    : `/leaders/${slug}`

  return (
    <section className="w-full bg-[#0B0B0D] text-white relative overflow-hidden border-b border-[#222226]">
      {/* Soft atmospheric golden glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] gap-8">
          {/* Left Column: Editorial Information */}
          <div className="relative z-10 w-full lg:w-[55%] xl:w-[52%] space-y-4 py-2">
            {/* Header / Issue Date with horizontal accent line */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.26em] text-[#C5A059] font-sans font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>The Cover Story</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.24em] text-neutral-400 font-medium shrink-0">
                  {data?.issueTitle || 'SPOTLIGHT EXCLUSIVE COVER STORY'}
                </span>
                <div className="h-[1px] w-20 sm:w-32 bg-[#2B2B30]" />
              </div>
            </div>

            {/* Headline (Executive Name in Serif) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.08] tracking-tight">
              {cleanName}
            </h2>

            {/* Subtitle / Leadership Vision (Dynamic Italic Serif) */}
            <p className="font-editorial-italic text-lg sm:text-xl lg:text-[22px] text-[#D8D2C6] font-light leading-[1.3] tracking-wide max-w-xl">
              &ldquo;{tagline}&rdquo;
            </p>

            {/* Designation Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-sans font-medium pt-1">
              {designations.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-[#17171B] border border-[#2B2B33] text-neutral-300 px-2.5 py-1 tracking-[0.18em]"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Rectangular Luxury Outline CTA Button */}
            <div className="pt-2">
              <Link
                href={storyHref}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent hover:bg-[#C5A059]/15 text-white border border-[#A67C52] hover:border-[#C5A059] text-[9.5px] sm:text-[10px] font-sans font-bold tracking-[0.22em] uppercase transition-all duration-200 group shadow-md"
              >
                <span>READ THE COVER STORY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Executive Portrait with smooth editorial blending */}
          <div className="relative w-full lg:w-[45%] xl:w-[44%] h-[280px] sm:h-[340px] lg:h-[380px] flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full h-full max-w-[460px] overflow-hidden rounded-[2px] bg-[#121215] border border-[#25252A] shadow-2xl">
              <Image
                src={portraitSrc}
                alt={cleanName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top filter contrast-[1.04]"
              />

              {/* Seamless edge gradients merging portrait with background */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent pointer-events-none hidden lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0B0B0D]/50 to-transparent pointer-events-none" />

              {/* Floating Executive Organization Tag */}
              <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-white/10 px-3 py-1.5 flex items-center gap-2 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-neutral-200">
                  {data?.organization || 'Epic Group'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

