import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Award, Building2, Quote, Share2 } from 'lucide-react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { getLeaderBySlug, getLeaders } from '@/lib/services/contentService'

interface LeaderPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export async function generateStaticParams() {
  const leaders = await getLeaders()
  return leaders.map((l) => ({ slug: l.slug }))
}

export default async function LeaderDetailPage({ params }: LeaderPageProps) {
  const { slug } = await params
  const leader = await getLeaderBySlug(slug)

  if (!leader) {
    notFound()
  }

  // Split biography into paragraphs if string
  const bioParagraphs = (leader.bio || '')
    .split(/\n\s*\n|\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-10 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Navigation Bar */}
          <div className="flex items-center justify-between pb-6 mb-10 border-b border-neutral-200">
            <Link
              href="/leaders"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-[#A17A38] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Leaders</span>
            </Link>

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A17A38]">
              Executive Dossier
            </span>
          </div>

          {/* Hero Masthead: 2-Column Luxury Profile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-12 mb-12 border-b border-neutral-200">
            {/* Left: Portrait Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] rounded-[2px] overflow-hidden shadow-xl border border-[#E5E0D8] bg-neutral-100 group">
                <Image
                  src={leader.imageUrl}
                  alt={leader.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-xs text-[#E0C285] text-[10px] font-sans font-bold tracking-widest uppercase border border-[#E0C285]/30">
                    {leader.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Leadership Identity & Credentials (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A17A38]">
                  <Award className="w-4 h-4 text-[#A17A38]" />
                  <span>The Spotlight Business Leaders • Executive Series</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] font-normal leading-[1.08]">
                  {leader.name}
                </h1>

                <p className="text-base sm:text-lg font-sans text-neutral-700 font-medium">
                  {leader.role}
                </p>

                {leader.organization && (
                  <p className="inline-flex items-center gap-2 text-sm text-neutral-500 font-sans">
                    <Building2 className="w-4 h-4 text-neutral-400" />
                    <span>{leader.organization}</span>
                  </p>
                )}
              </div>

              {/* Editorial Quote Box */}
              {leader.quote && (
                <div className="relative bg-[#FAF8F5] border-l-3 border-[#A17A38] p-5 sm:p-6 my-6">
                  <Quote className="w-6 h-6 text-[#A17A38]/40 absolute top-4 right-4" />
                  <blockquote className="font-serif text-base sm:text-lg italic text-[#2A2A2E] leading-relaxed">
                    &ldquo;{leader.quote}&rdquo;
                  </blockquote>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/magazine"
                  className="px-6 py-3 bg-[#141414] hover:bg-[#A17A38] text-white text-[11px] font-sans font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  Explore Featured Editions
                </Link>
                <Link
                  href="/news"
                  className="px-6 py-3 border border-neutral-300 hover:border-black text-neutral-800 text-[11px] font-sans font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  Latest Executive News
                </Link>
              </div>
            </div>
          </div>

          {/* Biography & Editorial Dossier Section */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#A17A38]" />
              <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.14em] text-[#141414] font-medium">
                Biographical Dossier
              </h2>
            </div>

            <div className="prose prose-neutral max-w-none space-y-5 text-neutral-700 font-serif text-base sm:text-lg leading-relaxed">
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? 'first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-normal first-letter:text-[#A17A38]' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back Footer Link */}
            <div className="pt-12 mt-12 border-t border-neutral-200 flex items-center justify-between">
              <Link
                href="/leaders"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#141414] hover:text-[#A17A38] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Executive Leaders Directory</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
