'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Building2, Globe, Shield, Sparkles, UserCheck } from 'lucide-react'
import type { LeaderItem } from '@/lib/data/mockData'

interface WebProfilesContentProps {
  initialProfiles: LeaderItem[]
}

const SECTOR_CATEGORIES = [
  { id: 'all', label: 'All Profiles' },
  { id: 'tech-ai', label: 'Tech / AI' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'automobile', label: 'Automobile' },
  { id: 'legal', label: 'Legal' },
]

// Map leader slugs to our 4 approved industry domains
const PROFILE_INDUSTRY_MAP: Record<string, { id: string; label: string }> = {
  'ranjan-mahtani': { id: 'manufacturing', label: 'Manufacturing' },
  'dr-shoumo-mitra': { id: 'tech-ai', label: 'Tech / AI' },
  'craig-bell': { id: 'automobile', label: 'Automobile' },
  'moutih-rafei': { id: 'tech-ai', label: 'Tech / AI' },
  'manuel-rendon': { id: 'manufacturing', label: 'Manufacturing' },
  'suzanne-robb': { id: 'tech-ai', label: 'Tech / AI' },
  'khalid-turk': { id: 'tech-ai', label: 'Tech / AI' },
  'jordan-meinster': { id: 'tech-ai', label: 'Tech / AI' },
  'shannon-yerkic': { id: 'tech-ai', label: 'Tech / AI' },
  'shabnam-akrami': { id: 'legal', label: 'Legal' },
  'ben-sadgrove': { id: 'tech-ai', label: 'Tech / AI' },
  'valeria-torres': { id: 'tech-ai', label: 'Tech / AI' },
  'noah-miyazaki': { id: 'manufacturing', label: 'Manufacturing' },
  'devang-raja': { id: 'tech-ai', label: 'Tech / AI' },
  'dr-kianor-shah': { id: 'tech-ai', label: 'Tech / AI' },
  'nilmini-ratwatte': { id: 'legal', label: 'Legal' },
  'aanchal-gupta': { id: 'tech-ai', label: 'Tech / AI' },
  'tanya-goodwin': { id: 'legal', label: 'Legal' },
}

export default function WebProfilesContent({ initialProfiles = [] }: WebProfilesContentProps) {
  const [selectedSector, setSelectedSector] = useState<string>('all')

  const profiles = initialProfiles.length > 0 ? initialProfiles : []
  const spotlightProfile = profiles[0] || null

  const filteredProfiles = useMemo(() => {
    if (selectedSector === 'all') return profiles
    return profiles.filter((p) => {
      const mapping = PROFILE_INDUSTRY_MAP[p.slug]
      return mapping?.id === selectedSector
    })
  }, [profiles, selectedSector])

  // Compute counts per category
  const sectorCounts = useMemo(() => {
    const counts: Record<string, number> = { all: profiles.length }
    for (const p of profiles) {
      const mapping = PROFILE_INDUSTRY_MAP[p.slug]
      if (mapping) {
        counts[mapping.id] = (counts[mapping.id] || 0) + 1
      }
    }
    return counts
  }, [profiles])

  return (
    <div className="w-full bg-white">
      {/* 1. HERO MASTHEAD */}
      <section className="w-full border-b border-neutral-200 bg-[#FAF9F6] py-14 sm:py-18 lg:py-22">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#8C6339]" />
              <span className="text-[10.5px] uppercase tracking-[0.26em] font-bold text-[#8C6339]">
                The Spotlight Executive Dossiers
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#121214] tracking-tight leading-[1.08]">
              Web Profiles
            </h1>

            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl pt-1">
              Authoritative leadership profiles, visionary perspectives, and long-form biographical reporting
              on the chief executives, innovators, and founders defining modern global enterprise.
            </p>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-neutral-200/80">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#121214] block">
                  {profiles.length}+
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-sans block mt-0.5">
                  Web Profiles
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#121214] block">
                  4
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-sans block mt-0.5">
                  Core Industries
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#121214] block">
                  30+
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-sans block mt-0.5">
                  Global Markets
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#121214] block">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 font-sans block mt-0.5">
                  Verified Leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPOTLIGHT COVER PROFILE BANNER (If available) */}
      {spotlightProfile && (
        <section className="w-full py-12 lg:py-16 border-b border-neutral-200">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 pb-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#8C6339]">
                Featured Web Profile
              </span>
              <div className="flex-1 h-[1px] bg-neutral-200" />
            </div>

            <div className="bg-[#0E0E10] text-white border border-[#27272A] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Portrait (5 cols) - Border to border, strict 3:2, no hover zoom */}
              <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] bg-neutral-900 overflow-hidden">
                <Image
                  src={spotlightProfile.imageUrl}
                  alt={spotlightProfile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0E0E10]" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] bg-black/70 backdrop-blur-xs border border-[#C5A059]/40 px-3 py-1">
                    {spotlightProfile.badge || 'SPOTLIGHT WEB PROFILE'}
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Overview & Quote (7 cols) */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                    <span>{PROFILE_INDUSTRY_MAP[spotlightProfile.slug]?.label || 'Business Leadership'}</span>
                    <span>·</span>
                    <span>{spotlightProfile.organization}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                    {spotlightProfile.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 font-sans font-medium">
                    {spotlightProfile.role}
                  </p>

                  {spotlightProfile.quote && (
                    <div className="pt-2 pb-2">
                      <p className="font-serif text-base sm:text-lg text-neutral-200 italic leading-relaxed border-l-2 border-[#C5A059] pl-4">
                        &ldquo;{spotlightProfile.quote}&rdquo;
                      </p>
                    </div>
                  )}

                  <p className="text-xs sm:text-[13px] text-neutral-400 font-sans leading-relaxed line-clamp-3 pt-1">
                    {spotlightProfile.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/leaders/${spotlightProfile.slug}`}
                    className="inline-flex items-center gap-2 bg-[#8C6339] hover:bg-[#A67C52] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all font-sans"
                  >
                    <span>Read Full Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-neutral-400 uppercase tracking-widest font-sans">
                    The Spotlight Editorial Forum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SECTOR FILTERABLE DIRECTORY */}
      <section className="w-full py-12 lg:py-18">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Filter Bar */}
          <div className="space-y-6 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal">
                  All Web Profiles
                </h2>
                <p className="text-xs text-neutral-500 font-sans mt-1">
                  Showing {filteredProfiles.length} {filteredProfiles.length === 1 ? 'profile' : 'profiles'} across global ecosystems.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {SECTOR_CATEGORIES.map((category) => {
                  const active = selectedSector === category.id
                  const count = sectorCounts[category.id] || 0
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedSector(category.id)}
                      className={`px-3.5 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer border ${
                        active
                          ? 'bg-[#121214] text-white border-[#121214] shadow-xs'
                          : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className={`ml-1.5 text-[9.5px] ${active ? 'text-[#D4AF37]' : 'text-neutral-400'}`}>
                        ({count})
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 3 Columns Grid of Web Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProfiles.map((profile) => {
              const industry = PROFILE_INDUSTRY_MAP[profile.slug]?.label || 'Business Leadership'
              return (
                <article
                  key={profile.id || profile.slug}
                  className="group flex flex-col justify-between bg-white border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-[#8C6339]/50 transition-all duration-300"
                >
                  {/* Border-to-Border Image: Strict 3:2 aspect ratio, no padding around, no hover zoom */}
                  <Link
                    href={`/leaders/${profile.slug}`}
                    className="block relative aspect-[3/2] w-full overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={profile.imageUrl}
                      alt={profile.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs px-2.5 py-1 text-white font-sans text-[9px] uppercase tracking-[0.2em] font-bold border border-white/20">
                      {industry}
                    </div>
                  </Link>

                  {/* Inner Content Block */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#8C6339] block mb-1.5">
                        {profile.organization}
                      </span>

                      <h3 className="font-serif text-xl sm:text-[22px] font-normal text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug">
                        <Link href={`/leaders/${profile.slug}`}>{profile.name}</Link>
                      </h3>

                      <p className="text-xs text-neutral-500 font-sans mt-1 font-medium line-clamp-1">
                        {profile.role}
                      </p>

                      <p className="text-xs text-neutral-600 font-sans mt-3 line-clamp-3 leading-relaxed">
                        {profile.bio}
                      </p>

                      {profile.quote && (
                        <div className="mt-3.5 pt-3 border-t border-neutral-100 bg-neutral-50/70 p-3 rounded-xs">
                          <p className="font-serif text-[12px] italic text-neutral-700 leading-snug line-clamp-2">
                            &ldquo;{profile.quote}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[10px] text-neutral-400 font-sans uppercase tracking-widest">
                        {profile.badge || 'Web Profile'}
                      </span>

                      <Link
                        href={`/leaders/${profile.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider text-[#141414] group-hover:text-[#8C6339] transition-colors"
                      >
                        <span>Read Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL NOMINATION / CALL TO LEADERS */}
      <section className="w-full bg-[#FAF9F6] border-t border-neutral-200 py-14 lg:py-18">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#8C6339] block">
                Editorial Submissions & Nominations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#121214] font-normal leading-snug">
                Nominate an Executive for The Spotlight Web Profiles
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                Our editorial board reviews distinguished chief executives, innovators, and founders who are
                pioneering technological breakthroughs, advancing sustainability, and driving ethical enterprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-3.5 bg-[#8C6339] hover:bg-[#734F2B] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all"
              >
                Submit Nomination
              </Link>
              <Link
                href="/magazine"
                className="w-full sm:w-auto text-center px-6 py-3.5 border border-neutral-300 hover:border-neutral-800 text-neutral-800 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                Browse Magazines
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
