'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react'
import type { ArticleItem } from '@/lib/data/mockData'

export interface RealMagazine {
  _id?: string
  id?: string
  title: string
  slug?: string
  editionTag?: string
  publishedDate?: string | null
  imageUrl: string
  issuuLink?: string | null
  subtitle?: string | null
  description?: string | null
}

interface HeroSectionProps {
  initialLead?: ArticleItem
  railItems?: ArticleItem[]
  initialMagazines?: RealMagazine[]
}

export interface MagazineCover {
  id: string
  issueNumber: string
  monthYear: string
  title: string
  subtitle: string
  category: string
  imageUrl: string
  slug: string
  issuuLink: string
}

const FALLBACK_REAL_MAGAZINES: MagazineCover[] = [
  {
    id: 'mag-1',
    issueNumber: 'THE 2026 EDITION',
    monthYear: 'APR 2026',
    title: 'Paul Edalat',
    subtitle: 'The Most Evolutionary Healthcare Leaders to Watch in 2025',
    category: 'HEALTHCARE INNOVATION',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/ca1b6e7f8a56161c9a0ea5dc53342a66b95a3447-2400x3150.jpg',
    slug: 'paul-edalat_the-most-evolutionary-healthcare-leaders-to-watch-in-2025',
    issuuLink: 'https://online.pubhtml5.com/xejkg/phgb/',
  },
  {
    id: 'mag-2',
    issueNumber: 'THE 2026 EDITION',
    monthYear: 'MAR 2026',
    title: 'Ross R James',
    subtitle: 'The Most Iconic CEOs to Watch in 2025',
    category: 'GLOBAL LEADERSHIP',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/89810af85fd4c40544c05390e8eacb6fddb238ab-2400x3150.jpg',
    slug: 'ross-r-james_the-most-iconic-ceos-to-watch-in-2025',
    issuuLink: 'https://online.pubhtml5.com/xejkg/ueqk/',
  },
  {
    id: 'mag-3',
    issueNumber: 'THE 2026 EDITION',
    monthYear: 'FEB 2026',
    title: 'Manuel Rendon',
    subtitle: '2026’s Most Influential Business Leaders Transforming Chemical Industry',
    category: 'INDUSTRIAL DISRUPTION',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg',
    slug: 'manuel-rendon_2026-s-most-influential-business-leaders-transforming-the-chemical-industry',
    issuuLink: 'https://online.pubhtml5.com/xejkg/cdnm/',
  },
  {
    id: 'mag-4',
    issueNumber: 'THE 2025 EDITION',
    monthYear: 'JAN 2026',
    title: 'Ryan Niddel',
    subtitle: 'The Most Inspiring Business Leaders to Watch in 2025',
    category: 'EXECUTIVE STRATEGY',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/fc995c421f1217476919700a868dcc8f77cf8dc3-2400x3150.jpg',
    slug: 'ryan-niddel_the-most-inspiring-business-leaders-to-watch-in-2025',
    issuuLink: 'https://online.pubhtml5.com/xejkg/asbi/',
  },
  {
    id: 'mag-5',
    issueNumber: 'THE 2026 EDITION',
    monthYear: 'DEC 2025',
    title: 'Dr. Shoumo Mitra',
    subtitle: 'Top Visionaries in AgriBio & Soiltech Shaping Sustainable Agriculture',
    category: 'SUSTAINABLE TECHNOLOGY',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/ca6bde89328b6533621869c959ba7ef886ac2af6-2400x3150.jpg',
    slug: 'dr-shoumo-mitra_top-visionaries-in-agribio-and-soiltech-shaping-sustainable-agricult',
    issuuLink: 'https://online.pubhtml5.com/xejkg/btrc/',
  },
  {
    id: 'mag-6',
    issueNumber: 'THE 2026 EDITION',
    monthYear: 'NOV 2025',
    title: 'Jordan Meinster',
    subtitle: 'The Most Iconic CEOs To Watch in 2026',
    category: 'VENTURE & CAPITAL',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/72a3a39ef46fd5676440d5e544d84adc51ce043a-2400x3150.jpg',
    slug: 'jordan-meinster_the-most-iconic-ceo-s-to-watch-in-2026',
    issuuLink: 'https://online.pubhtml5.com/xejkg/wgpy/',
  },
]

export default function HeroSection({ initialMagazines = [] }: HeroSectionProps) {
  // Map real Sanity magazines if available; fallback to verified real editions
  const magazines: MagazineCover[] =
    initialMagazines && initialMagazines.length >= 3
      ? initialMagazines
          .filter((m) => m && m.imageUrl)
          .slice(0, 7)
          .map((m, idx) => {
            const rawTitle = m.title || 'Digital Edition'
            const parts = rawTitle.includes('_') ? rawTitle.split('_') : [rawTitle, m.subtitle || m.description || '']
            const personName = parts[0].trim()
            const subtitleText = parts[1] ? parts[1].trim() : m.subtitle || m.description || ''

            return {
              id: m._id || m.id || `sanity-mag-${idx}`,
              issueNumber: m.editionTag || 'DIGITAL EDITION',
              monthYear: m.publishedDate
                ? new Date(m.publishedDate)
                    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                    .toUpperCase()
                : '2026',
              title: personName,
              subtitle: subtitleText,
              category: 'EXECUTIVE DOSSIER',
              imageUrl: m.imageUrl,
              slug: m.slug || 'magazine',
              issuuLink: m.issuuLink || 'https://online.pubhtml5.com/xejkg/phgb/',
            }
          })
      : FALLBACK_REAL_MAGAZINES

  // Center slide active by default (Manuel Rendon / Cover 2)
  const [currentIndex, setCurrentIndex] = useState(
    Math.min(2, Math.floor(magazines.length / 2))
  )
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const total = magazines.length

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev])

  // Subtle auto-rotation when user is not hovering
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(handleNext, 6500)
    return () => clearInterval(interval)
  }, [handleNext, isHovered])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const distance = touchStart - touchEnd
    if (distance > 50) handleNext()
    if (distance < -50) handlePrev()
    setTouchStart(null)
  }

  // Circular offset calculation for 3D fanned carousel
  const getOffset = (index: number) => {
    let diff = index - currentIndex
    if (diff < -Math.floor(total / 2)) diff += total
    if (diff > Math.floor(total / 2)) diff -= total
    return diff
  }

  const activeMagazine = magazines[currentIndex] || magazines[0]

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[740px] sm:min-h-[840px] lg:min-h-[920px] xl:min-h-[960px] bg-[#0A0A0C] overflow-hidden flex flex-col justify-between py-10 sm:py-14 lg:py-16 select-none"
    >
      {/* Background Photograph: Luxury Penthouse Skyline View */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-magazine-backdrop.jpg"
          alt="Luxury Penthouse Editorial Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.70] contrast-105"
        />
        {/* Atmospheric Vignette & Floor Reflection Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/35 to-black/85" />
      </div>

      {/* 1. Header Typography Area (Matching Reference Exactly) */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white font-normal leading-[1.08] tracking-tight">
          Inspiring{' '}
          <span className="font-editorial-italic italic font-normal text-[#C5A059] drop-shadow-[0_2px_16px_rgba(197,160,89,0.35)]">
            A Brighter Tomorrow
          </span>
        </h1>

        <p className="font-sans text-[10px] sm:text-xs tracking-[0.34em] text-[#C5A059] uppercase font-semibold mt-3 sm:mt-4">
          PEOPLE &nbsp;|&nbsp; IDEAS &nbsp;|&nbsp; OPPORTUNITIES
        </p>

        <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light tracking-wide mt-2 max-w-lg mx-auto leading-relaxed">
          A magazine for changemakers, innovators and visionaries.
        </p>
      </div>

      {/* 2. 3D Fanned Real Magazine Covers Carousel */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 my-auto py-8 sm:py-12 flex items-center justify-center">
        {/* Left Circular Navigation Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Real Magazine Cover"
          className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/45 hover:bg-black/85 hover:border-[#C5A059] text-white/80 hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 z-40 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
        </button>

        {/* 3D Perspective Stage */}
        <div
          className="relative w-full max-w-[1100px] h-[360px] sm:h-[440px] md:h-[490px] lg:h-[530px] flex items-center justify-center"
          style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
        >
          {magazines.map((mag, index) => {
            const offset = getOffset(index)
            const isCenter = offset === 0

            // Responsive 3D offset calculations
            let translateX = '0%'
            let rotateY = '0deg'
            let scale = 1
            let zIndex = 30
            let opacity = 1

            if (offset === 0) {
              translateX = '0px'
              rotateY = '0deg'
              scale = 1
              zIndex = 30
              opacity = 1
            } else if (offset === -1) {
              translateX = 'calc(-54% - 70px)'
              rotateY = '18deg'
              scale = 0.88
              zIndex = 20
              opacity = 0.92
            } else if (offset === 1) {
              translateX = 'calc(54% + 70px)'
              rotateY = '-18deg'
              scale = 0.88
              zIndex = 20
              opacity = 0.92
            } else if (offset === -2) {
              translateX = 'calc(-104% - 90px)'
              rotateY = '28deg'
              scale = 0.76
              zIndex = 10
              opacity = 0.78
            } else if (offset === 2) {
              translateX = 'calc(104% + 90px)'
              rotateY = '-28deg'
              scale = 0.76
              zIndex = 10
              opacity = 0.78
            } else {
              translateX = offset < 0 ? '-160%' : '160%'
              rotateY = offset < 0 ? '35deg' : '-35deg'
              scale = 0.6
              zIndex = 5
              opacity = 0
            }

            return (
              <div
                key={mag.id}
                onClick={() => {
                  if (isCenter && mag.issuuLink) {
                    window.open(mag.issuuLink, '_blank', 'noopener,noreferrer')
                  } else {
                    setCurrentIndex(index)
                  }
                }}
                style={{
                  transform: `translateX(${translateX}) rotateY(${rotateY}) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: 'all 550ms cubic-bezier(0.22, 1, 0.36, 1)',
                  WebkitBoxReflect:
                    isCenter
                      ? 'below 2px linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.38))'
                      : 'below 2px linear-gradient(to bottom, transparent 72%, rgba(0,0,0,0.22))',
                }}
                className={`absolute w-[220px] xs:w-[240px] sm:w-[280px] md:w-[310px] lg:w-[335px] aspect-[3/4] cursor-pointer group ${
                  isCenter ? 'ring-1 ring-[#C5A059]/60' : 'hover:opacity-100'
                }`}
              >
                {/* Physical Real Magazine Card Container */}
                <div className="relative w-full h-full rounded-[2px] overflow-hidden bg-neutral-900 border border-white/25 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.95)]">
                  {/* Real Full-Bleed High-Res Cover Graphic from Sanity CDN */}
                  <Image
                    src={mag.imageUrl}
                    alt={mag.title}
                    fill
                    priority={isCenter}
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 310px, 340px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Subtle Magazine Spine Shadow on Left Edge */}
                  <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none z-10" />

                  {/* Subtle Paper Sheen Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 pointer-events-none z-10" />

                  {/* Click to Read Pill on Center Cover Hover */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/80 text-[#C5A059] border border-[#C5A059]/60 font-sans text-[11px] uppercase tracking-widest font-semibold backdrop-blur-xs">
                        <span>Read Digital Edition</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Circular Navigation Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Real Magazine Cover"
          className="absolute right-2 sm:right-6 lg:left-auto lg:right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/25 bg-black/45 hover:bg-black/85 hover:border-[#C5A059] text-white/80 hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 z-40 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
        </button>
      </div>

      {/* 3. Bottom Controls & Action Area */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          {/* Active Magazine Title Caption Strip */}
          <div className="text-center space-y-1 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A059] font-mono font-bold block">
              {activeMagazine.issueNumber}
            </span>
            <h2 className="font-serif text-sm sm:text-base md:text-lg text-white font-normal tracking-wide line-clamp-1">
              {activeMagazine.title}
            </h2>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {magazines.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Jump to real magazine ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-6 h-2 bg-[#C5A059] shadow-[0_0_8px_#C5A059]'
                    : 'w-2 h-2 bg-neutral-600 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          {/* EXPLORE LATEST ISSUE Button */}
          <a
            href={activeMagazine.issuuLink || '/magazine'}
            target={activeMagazine.issuuLink ? '_blank' : undefined}
            rel={activeMagazine.issuuLink ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 border border-[#C5A059] bg-[#0E0E10]/85 hover:bg-[#C5A059] text-[#C5A059] hover:text-black font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-2xl hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] group cursor-pointer"
          >
            <span>EXPLORE LATEST ISSUE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Flanking Corner Accents (Matching Bottom-Left Books & Bottom-Right Movement Quote) */}
        <div className="w-full flex items-end justify-between pt-4 sm:pt-6">
          {/* Bottom-Left: Subtle Leather Book Spines */}
          <div className="hidden sm:flex flex-col gap-1 select-none pointer-events-none opacity-80">
            <div className="h-5 px-2.5 bg-[#171614] border-l-2 border-[#C5A059] flex items-center shadow-xs">
              <span className="font-serif text-[8.5px] uppercase tracking-[0.22em] text-[#C5A059] font-bold">
                PEOPLE
              </span>
            </div>
            <div className="h-5 px-2.5 bg-[#141311] border-l-2 border-[#9C7A3E] flex items-center shadow-xs ml-1">
              <span className="font-serif text-[8.5px] uppercase tracking-[0.22em] text-neutral-300 font-bold">
                IDEAS
              </span>
            </div>
            <div className="h-5 px-2.5 bg-[#11100F] border-l-2 border-[#735A2D] flex items-center shadow-xs ml-2">
              <span className="font-serif text-[8.5px] uppercase tracking-[0.22em] text-neutral-400 font-bold">
                OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Bottom-Right: "More than a magazine. A movement." */}
          <div className="flex items-center gap-2.5 text-right ml-auto">
            <div className="w-[1.5px] h-8 bg-[#C5A059]" />
            <p className="font-editorial-italic text-xs sm:text-sm text-neutral-300 font-light leading-snug">
              More than a magazine.<br />
              <span className="text-[#C5A059] not-italic font-sans text-[11px] tracking-wider uppercase font-semibold">
                A movement.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
