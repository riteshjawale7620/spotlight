'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X, ChevronRight } from 'lucide-react'
import SearchModal from './SearchModal'
import SubscribeModal from './SubscribeModal'

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'MAGAZINE', href: '/magazine' },
  { label: 'FEATURES', href: '/features' },
  { label: 'LEADERS', href: '/leaders' },
  { label: 'WEB PROFILES', href: '/web-profiles' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'INSIGHTS', href: '/insights' },
  { label: 'NEWS', href: '/news' },
]

export default function Header() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [subscribeOpen, setSubscribeOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header className="w-full bg-white border-b border-[#EAEAEA] sticky top-0 z-40">
        {/* Top Header Bar (Leftmost Logo, Right-aligned Actions & Mobile-only Hamburger Menu) */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[76px] md:h-[86px] lg:h-[94px] flex items-center justify-between gap-4">
          {/* Left Column: Brand Identity (Main Logo at Leftmost Corner) */}
          <div className="flex items-center justify-start shrink-0">
            <Link href="/" className="inline-flex items-center group py-1">
              <Image
                src="/logo/logo.png"
                alt="Spotlight Business Leaders"
                width={2172}
                height={724}
                priority
                className="h-9 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Right Column: Search, Subscribe (Desktop/Tablet) & Mobile-only Hamburger Menu */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3.5 shrink-0">
            {/* Search Pill Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="h-9 px-3 sm:px-3.5 rounded-full border border-neutral-200 hover:border-neutral-300 bg-neutral-50/90 hover:bg-white text-neutral-600 hover:text-black flex items-center gap-2 text-xs transition-all duration-200 shadow-2xs group cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#C5A059] transition-colors" />
              <span className="hidden sm:inline text-[11px] font-sans font-semibold tracking-wider text-neutral-600 group-hover:text-black">
                Search
              </span>
            </button>

            {/* Subscribe Luxury Button */}
            <button
              onClick={() => setSubscribeOpen(true)}
              className="hidden sm:inline-flex items-center justify-center h-9 px-4 sm:px-5 rounded-full bg-[#121214] hover:bg-[#C5A059] text-white hover:text-black font-sans text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-xs hover:shadow-[0_4px_16px_rgba(197,160,89,0.28)] cursor-pointer"
            >
              <span>Subscribe</span>
            </button>

            {/* Mobile/Small Screen Only: Hamburger Menu Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden w-9 h-9 rounded-full border border-neutral-200 text-neutral-800 hover:text-black hover:bg-neutral-100/70 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>
        </div>

        {/* Bottom Nav: Editorial Categories (Desktop Only) */}
        <nav className="hidden md:block w-full h-[42px] bg-black border-t border-neutral-900 shadow-xs">
          <div className="max-w-[1360px] mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
            <ul className="flex items-center justify-center space-x-8 lg:space-x-12 text-[11px] tracking-[0.2em] font-sans font-semibold text-neutral-300">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`transition-colors py-1 relative ${
                        active
                          ? 'text-[#C5A059] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059]'
                          : 'hover:text-[#C5A059] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </header>

      {/* Slide-out Navigation Drawer for Mobile & Detailed Exploration */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-[#0E0E10] text-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-left duration-300 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2E]">
                <Link href="/" onClick={() => setDrawerOpen(false)} className="inline-flex items-center">
                  <span className="font-serif text-base tracking-wider text-white font-medium">
                    SPOTLIGHT BUSINESS LEADERS
                  </span>
                </Link>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-[10px] tracking-widest text-[#C5A059] uppercase font-bold">
                  Editorial Sections
                </p>
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between py-2.5 text-sm tracking-wider hover:text-[#C5A059] transition-colors border-b border-white/5"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2A2E] space-y-4">
              <button
                onClick={() => {
                  setDrawerOpen(false)
                  setSubscribeOpen(true)
                }}
                className="w-full py-2.5 bg-[#A67C52] text-white text-xs uppercase tracking-widest font-semibold"
              >
                Subscribe Now
              </button>
              <p className="text-[11px] text-neutral-500 text-center">
                &copy; 2026 The Spotlight Business Leaders. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <SubscribeModal isOpen={subscribeOpen} onClose={() => setSubscribeOpen(false)} />
    </>
  )
}
