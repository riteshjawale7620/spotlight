import { getLeaders } from '@/lib/services/contentService'
import LeadersContent from '@/components/leaders/LeadersContent'

export const revalidate = 60 // Revalidate leaders every 60 seconds

export default async function LeadersPage() {
  const leaders = await getLeaders()

  return <LeadersContent initialLeaders={leaders} />
}
