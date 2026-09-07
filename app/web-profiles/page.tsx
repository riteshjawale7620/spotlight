import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import WebProfilesContent from '@/components/web-profiles/WebProfilesContent'
import { getWebProfiles } from '@/lib/services/contentService'

export const metadata: Metadata = {
  title: 'Web Profiles & Executive Dossiers | The Spotlight Leaders',
  description:
    'Authoritative web profiles, visionary perspectives, and long-form biographical reporting on the chief executives, innovators, and founders defining modern global enterprise.',
  openGraph: {
    title: 'Web Profiles & Executive Dossiers | The Spotlight Leaders',
    description:
      'Authoritative web profiles, visionary perspectives, and long-form biographical reporting on the chief executives, innovators, and founders defining modern global enterprise.',
    images: ['/images/leaders/ranjan-mahtani.jpg'],
  },
}

export const revalidate = 60

export default async function WebProfilesPage() {
  const profiles = await getWebProfiles()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <WebProfilesContent initialProfiles={profiles || []} />
      </main>
      <Footer />
    </div>
  )
}
