import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FeaturedProfilesContent from '@/components/featured-profiles/FeaturedProfilesContent'
import { getLeaders } from '@/lib/services/contentService'

export const metadata: Metadata = {
  title: 'Featured Profiles & Executive Dossiers | The Spotlight Leaders',
  description:
    'Authoritative leadership profiles, visionary perspectives, and long-form biographical reporting on the chief executives, innovators, and founders defining modern global enterprise.',
  openGraph: {
    title: 'Featured Profiles & Executive Dossiers | The Spotlight Leaders',
    description:
      'Authoritative leadership profiles, visionary perspectives, and long-form biographical reporting on the chief executives, innovators, and founders defining modern global enterprise.',
    images: ['/images/leaders/ranjan-mahtani.jpg'],
  },
}

export const revalidate = 60

export default async function FeaturedProfilesPage() {
  const leaders = await getLeaders()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <FeaturedProfilesContent initialLeaders={leaders || []} />
      </main>
      <Footer />
    </div>
  )
}
