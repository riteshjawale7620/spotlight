import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import InsightsPageContent from '@/components/insights/InsightsPageContent'
import { getInsightsPageData } from '@/lib/services/contentService'

export const revalidate = 60

export const metadata = {
  title: 'Insights & Strategic Analysis | The Spotlight Leaders',
  description:
    'Expert perspectives, in-depth strategic analysis and thought leadership across key global industries.',
}

export default async function InsightsPage() {
  const data = await getInsightsPageData()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <InsightsPageContent initialData={data} />
      </main>
      <Footer />
    </div>
  )
}
