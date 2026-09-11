'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Cpu,
  BarChart3,
  Activity,
  Building2,
  Car,
  Zap,
  GraduationCap,
  Briefcase,
} from 'lucide-react'

export default function IndustriesPage() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const industriesList = [
    {
      num: '01',
      name: 'Tech / AI',
      description: 'Enterprise AI infrastructure, neural compute architectures, and cloud intelligence developments.',
      articleCount: '14 ARTICLES',
      imageUrl: '/images/perspective-tech.jpg',
      slug: 'technology',
      icon: Cpu,
    },
    {
      num: '02',
      name: 'Automobile',
      description: 'Electric mobility ecosystems, battery platforms, autonomous transit, and software-defined vehicles.',
      articleCount: '12 ARTICLES',
      imageUrl: '/images/explore-automotive.jpg',
      slug: 'automotive',
      icon: Car,
    },
    {
      num: '03',
      name: 'Manufacturing',
      description: 'Industrial automation, circular materials, semiconductor fabrication, and resilient supply chains.',
      articleCount: '15 ARTICLES',
      imageUrl: '/images/explore-real-estate.jpg',
      slug: 'manufacturing',
      icon: Building2,
    },
    {
      num: '04',
      name: 'Legal',
      description: 'Regulatory foresight, cross-border corporate governance, intellectual property, and legal tech.',
      articleCount: '10 ARTICLES',
      imageUrl: '/images/explore-retail-v2.jpg',
      slug: 'legal',
      icon: Briefcase,
    },
  ]

  const deeperPerspectives = [
    {
      category: 'TECH / AI',
      title: "AI Beyond the Hype: What's Actually Real",
      readingTime: '8 MIN READ',
      imageUrl: '/images/perspective-tech.jpg',
      slug: 'technology',
    },
    {
      category: 'AUTOMOBILE',
      title: "Electric Vehicles: What's Next in Battery Scale",
      readingTime: '7 MIN READ',
      imageUrl: '/images/explore-automotive.jpg',
      slug: 'automotive',
    },
    {
      category: 'MANUFACTURING',
      title: 'Industrial Vanguard: Inside Decarbonized Ecosystems',
      readingTime: '7 MIN READ',
      imageUrl: '/images/explore-real-estate.jpg',
      slug: 'manufacturing',
    },
    {
      category: 'LEGAL',
      title: 'Antitrust, Cross-Border Compliance and Governance',
      readingTime: '6 MIN READ',
      imageUrl: '/images/explore-retail-v2.jpg',
      slug: 'legal',
    },
  ]

  const growthData = [
    { name: 'Tech / AI', pct: 36 },
    { name: 'Automobile', pct: 28 },
    { name: 'Manufacturing', pct: 21 },
    { name: 'Legal', pct: 15 },
  ]

  const voices = [
    {
      name: 'Ranjan Mahtani',
      role: 'Founder & Executive Chairman, Epic Group',
      industry: 'Manufacturing',
      quote: 'Disruption is not about reckless novelty; it is the courage to reconstruct legacy manufacturing into an eco-conscious, technologically agile ecosystem.',
      imageUrl: '/images/leaders/ranjan-mahtani.jpg',
      slug: 'ranjan-mahtani',
    },
    {
      name: 'Dr. Shoumo Mitra',
      role: 'Leading Crop Health R&D & Founder, VeGro Terra',
      industry: 'Tech / AI',
      quote: 'Biological intelligence and soil microbiome health represent the definitive frontier for securing global food sovereignty against climate extremes.',
      imageUrl: '/images/leaders/dr-shoumo-mitra.jpg',
      slug: 'dr-shoumo-mitra',
    },
    {
      name: 'Craig Bell',
      role: 'CEO & Managing Director, Bell Financial Group',
      industry: 'Automobile',
      quote: 'Next-generation mobility platforms and enterprise infrastructure demand patient capital bridging hardware innovation with multi-generational trust.',
      imageUrl: '/images/leaders/craig-bell.jpg',
      slug: 'craig-bell',
    },
    {
      name: 'Shabnam Akrami',
      role: 'Managing Partner, Akrami & Associates',
      industry: 'Legal',
      quote: 'Innovation in the legal sector is fundamentally about expanding access, elevating integrity, and navigating international complexities with empathy.',
      imageUrl: '/images/leaders/shabnam-akrami.jpg',
      slug: 'shabnam-akrami',
    },
    {
      name: 'Manuel Rendon',
      role: 'Chief Executive Officer & Co-Founder, Timeplast',
      industry: 'Manufacturing',
      quote: 'Plastic was invented to last forever, yet used for seconds. Our mission is to rewrite molecular chemistry so materials naturally assimilate back into nature.',
      imageUrl: '/images/leaders/manuel-rendon.jpg',
      slug: 'manuel-rendon',
    },
    {
      name: 'Khalid Turk',
      role: 'Chief Healthcare Technology Officer, ExecPresence.Online',
      industry: 'Tech / AI',
      quote: 'Executive presence in the digital age requires marrying profound technological empathy with decisive strategic clarity.',
      imageUrl: '/images/leaders/khalid-turk.jpg',
      slug: 'khalid-turk',
    },
  ]

  const latestNews = [
    {
      id: 'ln-ind-1',
      time: '09:42 AM',
      title: 'Global supply chains adapt to next-generation industrial robotics',
      category: 'MANUFACTURING',
      slug: 'smart-manufacturing-tech',
    },
    {
      id: 'ln-ind-2',
      time: '08:18 AM',
      title: 'Generative AI deployment accelerates across enterprise platforms',
      category: 'TECH / AI',
      slug: 'enterprise-ai-deployment',
    },
    {
      id: 'ln-ind-3',
      time: '07:55 AM',
      title: 'Electric vehicle battery platforms scale across global markets',
      category: 'AUTOMOBILE',
      slug: 'electric-vehicle-battery-platforms-scale',
    },
    {
      id: 'ln-ind-4',
      time: '07:20 AM',
      title: 'Regulatory compliance standards shift for cross-border digital assets',
      category: 'LEGAL',
      slug: 'cross-border-legal-compliance',
    },
    {
      id: 'ln-ind-5',
      time: '06:45 AM',
      title: 'Autonomous mobility networks near commercial urban rollout',
      category: 'AUTOMOBILE',
      slug: 'autonomous-vehicles-move-closer-mainstream-adoption',
    },
    {
      id: 'ln-ind-6',
      time: '06:10 AM',
      title: 'Bio-assimilable polymers gain traction in global packaging lines',
      category: 'MANUFACTURING',
      slug: 'bio-assimilable-polymers-packaging-tech',
    },
  ]

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 1: EXPLORE INDUSTRIES (4 Columns Grid)               */}
        {/* ============================================================ */}
        <section id="explore-industries" className="w-full bg-white border-b border-neutral-200 py-10 lg:py-16">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <h2 className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.14em] text-[#141414] uppercase">
                EXPLORE INDUSTRIES
              </h2>
              <Link
                href="#explore-industries"
                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-neutral-600 hover:text-black transition-colors group"
              >
                <span>4 ACTIVE INDUSTRIES</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Available Industries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {industriesList.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/category/${ind.slug}`}
                  className="group flex flex-row items-stretch transition-all duration-300"
                >
                  {/* Left: Narrow Vertical Image Strip */}
                  <div className="relative w-[38%] sm:w-[40%] min-h-[210px] overflow-hidden rounded-[1px] bg-neutral-100 shrink-0">
                    <Image
                      src={ind.imageUrl}
                      alt={ind.name}
                      fill
                      sizes="(max-width: 640px) 40vw, (max-width: 1280px) 20vw, 12vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Right: Content Column */}
                  <div className="pl-4 sm:pl-5 pr-1 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top: Large Numeral & Line Icon */}
                      <div className="flex items-start justify-between">
                        <span className="font-serif text-3xl sm:text-[34px] text-[#7A7265] font-light leading-none">
                          {ind.num}
                        </span>
                        <ind.icon className="w-5 h-5 text-[#9E8050] stroke-[1.25]" />
                      </div>

                      {/* Industry Title */}
                      <h3 className="font-serif text-[17px] sm:text-[18px] font-normal text-[#121214] mt-2 mb-2 leading-snug group-hover:text-[#9E8050] transition-colors">
                        {ind.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-[11.5px] text-neutral-600 font-sans leading-relaxed line-clamp-3">
                        {ind.description}
                      </p>
                    </div>

                    {/* Bottom: Article Count & View Insights */}
                    <div className="pt-3 sm:pt-4">
                      <span className="text-[9.5px] font-sans font-bold tracking-wider uppercase text-[#141414] block mb-1">
                        {ind.articleCount}
                      </span>
                      <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#A17A38] group-hover:text-[#121214] inline-flex items-center gap-1 transition-colors">
                        <span>VIEW INSIGHTS</span>
                        <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ============================================================ */}
        {/* SECTION 3: DEEPER PERSPECTIVES FROM EACH INDUSTRY            */}
        {/* ============================================================ */}
        <section className="w-full bg-white border-b border-neutral-200 py-12 lg:py-16">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.14em] text-[#141414] uppercase">
                DEEPER PERSPECTIVES FROM EACH INDUSTRY
              </h2>
              <Link
                href="/category/insights"
                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-neutral-600 hover:text-black transition-colors group"
              >
                <span>VIEW ALL INSIGHTS</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* 4 Full-Bleed Image Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {deeperPerspectives.map((card) => (
                <Link
                  key={card.slug}
                  href={`/articles/${card.slug}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-[2px] group block bg-neutral-950 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Full-bleed Background Image */}
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />

                  {/* Dark Vignette Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 pointer-events-none" />

                  {/* Floating Content Over Photo */}
                  <div className="absolute inset-0 p-4 sm:p-4.5 flex flex-col justify-end">
                    {/* Golden Pill Tag */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full border border-[#D4AF37]/80 bg-black/45 backdrop-blur-[2px] text-[8.5px] uppercase tracking-[0.18em] font-sans font-semibold text-[#D4AF37]">
                        {card.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-serif text-[13.5px] sm:text-[14.5px] font-medium text-white leading-snug group-hover:text-[#F3D68A] transition-colors mb-3.5">
                      {card.title}
                    </h3>

                    {/* Bottom Metadata Bar */}
                    <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-[9px] uppercase tracking-wider font-sans font-semibold text-neutral-300">
                      <span className="group-hover:text-white transition-colors">
                        {card.readingTime} →
                      </span>
                      <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: INDUSTRY SPOTLIGHT & DATA SNAPSHOT                 */}
        {/* ============================================================ */}
        <section id="industry-spotlight" className="w-full bg-white border-b border-neutral-200 py-10 lg:py-14">
          <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 lg:px-6">
            {/* Top Row: Two Large Editorial Cards taking full expansive size with minimal gap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
              {/* Card 1: Industry Spotlight */}
              <div className="bg-neutral-50 border border-neutral-200 overflow-hidden rounded-[2px] flex flex-col sm:flex-row items-stretch min-h-[380px] lg:min-h-[420px]">
                <div className="sm:w-[54%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] uppercase tracking-[0.24em] text-neutral-500 font-sans font-bold block mb-2.5">
                      INDUSTRY SPOTLIGHT
                    </span>
                    <h3 className="font-serif text-2xl sm:text-[32px] lg:text-[36px] text-[#121214] font-normal leading-[1.08] mb-3.5">
                      Technology at the Core of Transformation
                    </h3>
                    <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed max-w-md">
                      From artificial intelligence to quantum computing, explore how technology
                      continues to accelerate innovation and redefine industries.
                    </p>
                  </div>

                  <div className="pt-8 mt-auto">
                    <Link
                      href="/category/technology"
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#A17A38] hover:text-[#7E5933] transition-colors group"
                    >
                      <span>EXPLORE TECHNOLOGY</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="sm:w-[46%] relative min-h-[280px] sm:min-h-full overflow-hidden bg-neutral-900 border-t sm:border-t-0 sm:border-l border-neutral-200">
                  <Image
                    src="/images/tech-spotlight-control-room.jpg"
                    alt="Technology at the Core of Transformation"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Card 2: Strategic Perspective */}
              <div className="bg-[#FAF7F2] border border-[#E8E1D5] overflow-hidden rounded-[2px] flex flex-col sm:flex-row items-stretch min-h-[380px] lg:min-h-[420px]">
                <div className="sm:w-[54%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] uppercase tracking-[0.24em] text-[#A17A38] font-sans font-bold block mb-2.5">
                      STRATEGIC PERSPECTIVE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-[32px] lg:text-[36px] text-[#121214] font-normal leading-[1.08] mb-3.5">
                      The Next Wave of Industrial Leadership
                    </h3>
                    <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed max-w-md">
                      How forward-looking executives navigate macroeconomic volatility, regulatory shifts,
                      and the imperative of sustainable growth across key markets.
                    </p>
                  </div>

                  <div className="pt-8 mt-auto">
                    <Link
                      href="/category/manufacturing"
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#A17A38] hover:text-[#7E5933] transition-colors group"
                    >
                      <span>EXPLORE PERSPECTIVES</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="sm:w-[46%] relative min-h-[280px] sm:min-h-full overflow-hidden bg-neutral-900 border-t sm:border-t-0 sm:border-l border-[#E8E1D5]">
                  <Image
                    src="/images/perspective-tech.jpg"
                    alt="The Next Wave of Industrial Leadership"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Middle Row: Global Industry Performance Data Snapshot */}
            <div className="bg-[#F5F2EB] border border-[#E3DDD1] p-6 sm:p-8 lg:p-10 rounded-[2px] mb-8 sm:mb-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Left Text */}
                <div className="lg:w-[42%] space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-[#9E8050] font-sans font-bold block">
                    SECTOR PERFORMANCE METRICS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121214] font-normal leading-tight">
                    Industries Driving Global Growth
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed">
                    Comparative market acceleration and corporate capital allocation indexed across
                    our 4 primary monitored industry categories.
                  </p>
                </div>

                {/* Right: Dual Visual Charts */}
                <div className="lg:w-[58%]">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Left: Progress Bars */}
                    <div className="sm:col-span-7 space-y-4">
                      {growthData.map((item) => (
                        <div key={item.name} className="flex items-center text-xs sm:text-[13px] font-sans">
                          <span className="w-24 sm:w-28 text-neutral-700 font-normal shrink-0">
                            {item.name}
                          </span>
                          <div className="flex-1 h-[2.5px] bg-[#DDD7CD] mx-3 rounded-full overflow-hidden flex items-center">
                            <div
                              className="h-full bg-[#B88E4B]"
                              style={{ width: `${item.pct * 2.5}%` }}
                            />
                          </div>
                          <span className="w-9 text-right text-neutral-800 font-semibold shrink-0">
                            {item.pct}%
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right: SVG Donut Chart */}
                    <div className="sm:col-span-5 flex justify-center items-center">
                      <svg viewBox="0 0 100 100" className="w-36 h-36 sm:w-42 sm:h-42 transform -rotate-90">
                        {/* 36% Tech / AI */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#B88E4B" strokeWidth="18" strokeDasharray="85.95 238.76" strokeDashoffset="0" />
                        {/* 28% Automobile */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#303438" strokeWidth="18" strokeDasharray="66.85 238.76" strokeDashoffset="-85.95" />
                        {/* 21% Manufacturing */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#65737C" strokeWidth="18" strokeDasharray="50.14 238.76" strokeDashoffset="-152.80" />
                        {/* 15% Legal */}
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#C29F65" strokeWidth="18" strokeDasharray="35.82 238.76" strokeDashoffset="-202.94" />
                        {/* Center Hole */}
                        <circle cx="50" cy="50" r="26" fill="#F5F2EB" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Voices Across Industries (High Visibility, 2 Rows of 3 Cards) */}
            <div className="pt-8 sm:pt-10 border-t border-[#EAE5DC]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#A17A38] font-sans font-bold block mb-1.5">
                    EXECUTIVE PERSPECTIVES • THE SPOTLIGHT BUSINESS LEADERS VOICES
                  </span>
                  <div className="flex items-center gap-3">
                    <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.12em] text-[#121214] font-medium">
                      Voices Across Industries
                    </h2>
                    <span className="text-[10px] uppercase tracking-widest font-sans font-bold px-2.5 py-0.5 rounded-full bg-[#A17A38]/10 text-[#A17A38] border border-[#A17A38]/25">
                      6 Leaders
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden lg:block h-[1px] w-48 bg-neutral-200" />
                  <Link
                    href="/leaders"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors group shrink-0"
                  >
                    <span>View All Experts</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* 2 Rows of 3 Cards Grid (Bigger cards, higher visibility, richer interior design) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {voices.map((voice) => (
                  <Link
                    key={voice.name}
                    href={`/leaders/${voice.slug}`}
                    className="bg-white border border-neutral-200 overflow-hidden rounded-[2px] flex items-stretch min-h-[220px] sm:min-h-[240px] group hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-500 block"
                  >
                    {/* Portrait Photo (Flush full bleed on left, top, bottom) */}
                    <div className="relative w-[38%] sm:w-[40%] shrink-0 overflow-hidden bg-neutral-200">
                      <Image
                        src={voice.imageUrl}
                        alt={voice.name}
                        fill
                        sizes="(max-width: 768px) 40vw, 20vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                      {/* Industry tag replacing leader tag at bottom of image */}
                      <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-[9px] uppercase tracking-[0.16em] text-white/95 font-sans font-semibold rounded-[1px] border border-white/10 flex items-center gap-1.5 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E0C285]" />
                        <span>{voice.industry}</span>
                      </div>
                    </div>

                    {/* Rich Interior Content */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-w-0 bg-white">
                      <div>
                        {/* Top: Triple-sized sculptural quote symbol */}
                        <div className="mb-2">
                          <span className="font-serif text-6xl sm:text-7xl text-[#C5A059]/30 leading-[0.6] select-none font-normal block">
                            &ldquo;
                          </span>
                        </div>

                        {/* Quote Text */}
                        <p className="font-serif text-[13.5px] sm:text-[14.5px] leading-[1.45] text-[#141414] my-2 italic line-clamp-3">
                          &ldquo;{voice.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Bylines & Profile Action */}
                      <div className="pt-3 border-t border-neutral-200 flex items-end justify-between mt-auto">
                        <div>
                          <h4 className="font-sans text-[12px] sm:text-[13px] font-bold text-[#141414] group-hover:text-[#A17A38] transition-colors leading-snug">
                            {voice.name}
                          </h4>
                          <p className="text-[10px] text-neutral-500 font-sans mt-0.5 leading-tight">
                            {voice.role}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold uppercase tracking-wider text-[#A17A38] group-hover:translate-x-1 transition-transform shrink-0">
                          <span>Profile</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: LATEST INDUSTRY NEWS (Featured Story + 6 News Grid)*/}
        {/* ============================================================ */}
        <section className="w-full bg-white border-b border-neutral-200 py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.12em] text-[#121214] font-medium shrink-0">
                Latest Industry News
              </h2>
              <div className="flex-1 h-[1px] bg-neutral-200" />
              <Link
                href="/news"
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-[#A67C52] transition-colors shrink-0 group"
              >
                <span>View All News</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Featured News Card (4.5 cols) */}
              <div className="lg:col-span-4 relative overflow-hidden rounded-[2px] min-h-[300px] flex flex-col justify-end p-6 group">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="Green Buildings are the Future of Real Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="relative z-10 space-y-2 text-white">
                  <span className="px-2 py-0.5 bg-[#A17A38] text-white text-[9px] font-sans font-bold tracking-wider uppercase inline-block">
                    REAL ESTATE
                  </span>
                  <h3 className="font-serif text-xl font-normal leading-snug">
                    <Link href="/articles/sustainable-real-estate-buildings-better-tomorrow" className="hover:text-[#C5A059] transition-colors">
                      Green Buildings are the Future of Real Estate
                    </Link>
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-sans pt-1">
                    6 MIN READ
                  </p>
                </div>
              </div>

              {/* Right: 6 Timestamped News Grid (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {latestNews.map((news, idx) => (
                  <article key={news.id || `${news.slug}-${idx}`} className="space-y-1.5 border-b sm:border-b-0 pb-3 sm:pb-0">
                    <span className="font-mono text-xs text-neutral-400 font-medium block">
                      {news.time}
                    </span>
                    <h4 className="font-serif text-[13.5px] font-medium text-[#141414] leading-snug hover:text-[#A17A38] transition-colors">
                      <Link href={`/articles/${news.slug}`}>{news.title}</Link>
                    </h4>
                    <span className="text-[9.5px] uppercase tracking-wider text-[#A17A38] font-bold block pt-1">
                      {news.category}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: STAY AHEAD ACROSS INDUSTRIES (Newsletter Banner)  */}
        {/* ============================================================ */}
        <section className="w-full bg-[#2A2925] text-white border-b border-[#222226] py-14 lg:py-18">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Form (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  Stay ahead across industries.
                </h2>

                <p className="text-sm text-neutral-300 font-sans max-w-lg">
                  Subscribe to get the latest insights, trends and analysis delivered
                  straight to your inbox every week.
                </p>

                {subscribed ? (
                  <div className="p-4 bg-emerald-900/40 border border-emerald-500 text-emerald-200 text-xs font-sans font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Thank you for subscribing to Industries Weekly!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2 max-w-lg">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 bg-white/10 border border-neutral-600 px-4 py-3 text-xs font-sans text-white placeholder:text-neutral-400 focus:outline-hidden focus:border-[#C5A059]"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#A17A38] hover:bg-[#8D682E] text-white text-xs font-sans font-bold tracking-[0.2em] uppercase rounded-none transition-colors shrink-0"
                      >
                        SUBSCRIBE
                      </button>
                    </div>

                    <label className="flex items-center gap-2 text-[11px] text-neutral-400 font-sans cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="rounded-xs border-neutral-600 text-[#A17A38] focus:ring-[#A17A38]"
                      />
                      <span>I agree to receive communications from The Spotlight Business Leaders.</span>
                    </label>
                  </form>
                )}
              </div>

              {/* Right: Magazine Flatlay (4 cols) */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-full max-w-[360px] aspect-[16/10] overflow-hidden rounded-[2px] shadow-2xl border border-white/10">
                  <Image
                    src="/images/demo/mag-demo.png"
                    alt="The Spotlight Business Leaders Magazine"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center filter contrast-105"
                  />
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
