'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
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

// Accurate mapping for verified leaders to ensure crisp domain metadata
const PROFILE_METADATA: Record<string, { sectorId: string; sectorLabel: string; role?: string; organization?: string }> = {
  'aanchal-gupta': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Founder', organization: 'Agents Stack' },
  'khalid-turk': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Founder & Chief Healthcare Technology Officer', organization: 'ExecPresence.Online' },
  'manuel-rendon': { sectorId: 'manufacturing', sectorLabel: 'Manufacturing', role: 'Chief Executive Officer & Co-Founder', organization: 'Timeplast' },
  'dr-shoumo-mitra': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Founder & CEO', organization: 'V-Sciences Investments' },
  'suzanne-robb': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Chief Operating Officer', organization: 'Alloy Personal Training Franchise' },
  'jordan-meinster': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Chief Executive Officer', organization: 'Pickleball Kingdom' },
  'shannon-yerkic': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Executive Leader & Educational Innovator', organization: 'Global Learning Solutions' },
  'shabnam-akrami': { sectorId: 'legal', sectorLabel: 'Legal', role: 'Managing Partner', organization: 'Akrami & Associates' },
  'ranjan-mahtani': { sectorId: 'manufacturing', sectorLabel: 'Manufacturing', role: 'Founder & Executive Chairman', organization: 'Epic Group' },
  'craig-bell': { sectorId: 'automobile', sectorLabel: 'Automobile', role: 'Director & General Counsel', organization: 'Amicus Commercial Lawyers' },
  'moutih-rafei': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Managing Partner', organization: 'Rafei Capital' },
  'ben-sadgrove': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Chief Operating Officer', organization: 'Clean Energy & Technology' },
  'valeria-torres': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Managing Director', organization: 'Digital Transformation' },
  'noah-miyazaki': { sectorId: 'manufacturing', sectorLabel: 'Manufacturing', role: 'Executive Vice President', organization: 'Industrial Systems' },
  'devang-raja': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Chief Executive Officer', organization: 'Venture Capital & Tech' },
  'dr-kianor-shah': { sectorId: 'tech-ai', sectorLabel: 'Tech / AI', role: 'Founder & CEO', organization: 'International Health & Tech' },
  'nilmini-ratwatte': { sectorId: 'legal', sectorLabel: 'Legal', role: 'Senior Partner', organization: 'Global Legal Advisory' },
  'tanya-goodwin': { sectorId: 'legal', sectorLabel: 'Legal', role: 'Managing Partner', organization: 'Corporate Law & Governance' },
}

export default function WebProfilesContent({ initialProfiles = [] }: WebProfilesContentProps) {
  const [selectedSector, setSelectedSector] = useState<string>('all')

  const profiles = initialProfiles.length > 0 ? initialProfiles : []

  const filteredProfiles = useMemo(() => {
    if (selectedSector === 'all') return profiles
    return profiles.filter((p) => {
      const meta = PROFILE_METADATA[p.slug]
      return meta?.sectorId === selectedSector
    })
  }, [profiles, selectedSector])

  // Compute counts per category
  const sectorCounts = useMemo(() => {
    const counts: Record<string, number> = { all: profiles.length }
    for (const p of profiles) {
      const meta = PROFILE_METADATA[p.slug]
      if (meta) {
        counts[meta.sectorId] = (counts[meta.sectorId] || 0) + 1
      }
    }
    return counts
  }, [profiles])

  return (
    <div className="w-full bg-white">
      {/* 1. SECTOR FILTERABLE DIRECTORY */}
      <section className="w-full py-8 sm:py-10 lg:py-14">
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
              const meta = PROFILE_METADATA[profile.slug]
              const industry = meta?.sectorLabel || 'Business Leadership'
              const role = meta?.role || (profile.role && profile.role !== 'Executive Leader' ? profile.role : 'Executive Leader')
              const organization = meta?.organization || (profile.organization && profile.organization !== 'Spotlight Business Leaders' ? profile.organization : 'Spotlight Business Leaders')

              return (
                <article
                  key={profile.id || profile.slug}
                  className="group flex flex-col justify-between bg-white border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-[#8C6339]/50 transition-all duration-300"
                >
                  {/* Border-to-Border Image: Strict 3:2 aspect ratio, no padding around, no hover zoom, no dark gradient */}
                  <Link
                    href={`/leaders/${profile.slug}`}
                    className="block relative aspect-[3/2] w-full overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={profile.imageUrl}
                      alt={profile.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </Link>

                  {/* Inner Content Block */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#8C6339] mb-1.5">
                        <span>{industry}</span>
                        <span>·</span>
                        <span className="text-neutral-700">{organization}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-[22px] font-normal text-neutral-900 group-hover:text-[#8C6339] transition-colors leading-snug">
                        <Link href={`/leaders/${profile.slug}`}>{profile.name}</Link>
                      </h3>

                      <p className="text-xs text-neutral-500 font-sans mt-1 font-medium line-clamp-1">
                        {role}
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

      {/* 3. EDITORIAL NOMINATION / CALL TO LEADERS */}
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
