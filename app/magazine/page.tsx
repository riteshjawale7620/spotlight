import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import MagazinePageContent from '@/components/magazine/MagazinePageContent'

export const metadata: Metadata = {
  title: 'Magazine Archive | The Spotlight Leaders',
  description:
    'Explore our past issues and relive the stories, leaders and ideas that continue to shape a brighter tomorrow.',
  openGraph: {
    title: 'Magazine Archive | The Spotlight Leaders',
    description:
      'Explore our past issues and relive the stories, leaders and ideas that continue to shape a brighter tomorrow.',
    images: ['/images/magazine-hero-globe.jpg'],
  },
}

import { sanityFetch } from '@/sanity/lib/client'
import { ALL_MAGAZINES_QUERY } from '@/sanity/lib/queries'

export default async function MagazinePage() {
  const sanityMagazines = await sanityFetch<any[]>({
    query: ALL_MAGAZINES_QUERY,
    revalidate: 60,
  })

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <MagazinePageContent initialSanityMagazines={sanityMagazines || []} />
      </main>
      <Footer />
    </div>
  )
}
