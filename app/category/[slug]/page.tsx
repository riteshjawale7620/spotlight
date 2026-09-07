import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import NewsPageContent from '@/components/news/NewsPageContent'
import { getCategoryContent } from '@/lib/services/contentService'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params

  if (slug === 'culture') {
    notFound()
  }

  if (slug === 'news') {
    return <NewsPageContent />
  }

  const content = await getCategoryContent(slug)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pb-8 mb-10 border-b border-neutral-200 text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A67C52] block">
              Editorial Dossier
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-neutral-900 font-normal">
              {content.title}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-sans max-w-xl mx-auto leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Real Sanity Items or Informative Empty State */}
          {content.items && content.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.items.map((item: any) => (
                <article
                  key={item.id}
                  className="group flex flex-col justify-between bg-white border border-neutral-200 overflow-hidden hover:shadow-md hover:border-[#A67C52]/50 transition-all duration-300"
                >
                  <Link href={item.href} className="block relative aspect-[3/2] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </Link>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A67C52] inline-block px-2 py-0.5 bg-[#A67C52]/10 rounded-xs">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg leading-snug text-neutral-900 group-hover:text-[#A67C52] transition-colors">
                        <Link href={item.href}>{item.title}</Link>
                      </h3>

                      {item.excerpt && (
                        <p className="text-xs text-neutral-600 font-sans mt-2 line-clamp-3 leading-relaxed">
                          {item.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between">
                      <span className="text-[10.5px] text-neutral-400 uppercase tracking-wider">
                        {item.publishedAt || 'Editorial'}
                      </span>

                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-[11px] font-sans font-bold uppercase tracking-wider text-[#141414] group-hover:text-[#A67C52] transition-colors"
                      >
                        <span>Read</span>
                        <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto py-16 px-6 text-center border border-dashed border-neutral-300 rounded-sm bg-neutral-50/50">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A67C52] block mb-3">
                {content.existsInSanity ? 'No Articles Published' : 'Not Configured In Sanity'}
              </span>
              <h2 className="font-serif text-2xl text-neutral-900 mb-3">
                {content.existsInSanity
                  ? `No stories published in "${content.title}" yet.`
                  : `"${content.title}" does not exist in the Sanity schema.`}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed mb-8 max-w-md mx-auto">
                {content.existsInSanity
                  ? `This section is registered in Sanity, but currently has 0 articles assigned to it. As new articles are published in Sanity Studio, they will appear here automatically.`
                  : `This category is not part of the active Sanity CMS schema. Explore other active industries and categories below.`}
              </p>

              <div className="pt-6 border-t border-neutral-200">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 block mb-4">
                  Active Sections with Real Sanity Content
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Link
                    href="/category/web-profiles"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Web Profiles (15)
                  </Link>
                  <Link
                    href="/category/business-bulletin"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Business Bulletin (10)
                  </Link>
                  <Link
                    href="/category/tech-ai"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Tech/AI (11)
                  </Link>
                  <Link
                    href="/category/healthcare"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Healthcare (10)
                  </Link>
                  <Link
                    href="/category/automobile"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Automobile (10)
                  </Link>
                  <Link
                    href="/category/manufacturing"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Manufacturing (9)
                  </Link>
                  <Link
                    href="/category/legal"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Legal (9)
                  </Link>
                  <Link
                    href="/magazine"
                    className="px-3 py-1.5 text-xs font-serif bg-white border border-neutral-200 hover:border-[#A67C52] text-neutral-800 transition-colors"
                  >
                    Magazines (20)
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
