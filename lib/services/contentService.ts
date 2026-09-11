import fs from 'fs'
import path from 'path'
import { sanityFetch } from '@/sanity/lib/client'
import {
  HERO_FEATURE_QUERY,
  HERO_RAIL_QUERY,
  EDITORS_SELECTION_QUERY,
  COVER_STORY_QUERY,
  INDUSTRIES_QUERY,
  EDITORIAL_TRIO_QUERY,
  INSIGHTS_QUERY,
  MULTIMEDIA_QUERY,
  ARTICLE_BY_SLUG_QUERY,
  ALL_LEADERS_QUERY,
  LEADER_BY_SLUG_QUERY,
  WEB_PROFILES_QUERY,
  WEB_PROFILE_BY_SLUG_QUERY,
  CATEGORY_PAGE_QUERY,
  INSIGHTS_PAGE_QUERY,
  LATEST_MAGAZINE_QUERY,
  ALL_MAGAZINES_QUERY,
} from '@/sanity/lib/queries'
import {
  HERO_FEATURE_DATA,
  HERO_RAIL_DATA,
  EDITORS_PRIMARY_DATA,
  EDITORS_COMPACT_DATA,
  COVER_STORY_DATA,
  INDUSTRIES_DATA,
  LATEST_NEWS_DATA,
  TRENDING_WEEK_DATA,
  VOICES_DATA,
  INSIGHTS_DATA,
  PODCAST_DATA,
  EVENT_DATA,
  VIDEO_DATA,
  FEATURED_LEADERS_DATA,
  type ArticleItem,
  type CoverStoryData,
  type IndustryItem,
  type VoiceItem,
  type PodcastData,
  type EventData,
  type VideoData,
  type LeaderItem,
} from '@/lib/data/mockData'

export async function getHeroFeature(): Promise<ArticleItem> {
  const data = await sanityFetch<ArticleItem>({ query: HERO_FEATURE_QUERY })
  return data && data.title ? data : HERO_FEATURE_DATA
}

export async function getHeroRail(): Promise<ArticleItem[]> {
  const data = await sanityFetch<ArticleItem[]>({ query: HERO_RAIL_QUERY })
  return data && data.length ? data : HERO_RAIL_DATA
}

export async function getEditorsSelection(): Promise<{
  primary: ArticleItem[]
  compact: ArticleItem[]
}> {
  const data = await sanityFetch<{ primary: any[]; compact: any[] }>({
    query: EDITORS_SELECTION_QUERY,
  })
  return {
    primary: data?.primary?.length
      ? data.primary.map((item, idx) => ({ ...item, id: item.id || item._id || `ed-pri-${idx}` }))
      : EDITORS_PRIMARY_DATA,
    compact: data?.compact?.length
      ? data.compact.map((item, idx) => ({ ...item, id: item.id || item._id || `ed-cmp-${idx}` }))
      : EDITORS_COMPACT_DATA,
  }
}

export async function getCoverStory(): Promise<CoverStoryData> {
  const data = await sanityFetch<any>({ query: COVER_STORY_QUERY })

  const rawName = data?.personName || ''
  const slugCandidate = (data?.storySlug || data?.slug || rawName || '').toLowerCase().trim()

  // Match against our leader dataset
  const matchedLeader = FEATURED_LEADERS_DATA.find(
    (l) =>
      l.slug === slugCandidate ||
      l.name.toLowerCase() === rawName.toLowerCase() ||
      slugCandidate.includes(l.slug)
  )

  let cleanName = rawName || matchedLeader?.name || COVER_STORY_DATA.personName
  // If the rawName was a slug like "ranjan-mahtani" or has hyphens without spaces:
  if (cleanName.includes('-') && !cleanName.includes(' ')) {
    cleanName = cleanName
      .split('-')
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  } else if (cleanName.includes(' - ')) {
    cleanName = cleanName.split(' - ')[0].trim()
  } else if (cleanName.includes('_')) {
    cleanName = cleanName.split('_')[0].trim()
  }

  const slug = matchedLeader?.slug || data?.storySlug || data?.slug || 'ranjan-mahtani'

  // The web profiles pic for this leader
  const webProfilePic =
    matchedLeader?.imageUrl ||
    resolveLeaderImage(slug) ||
    '/images/leaders/ranjan-mahtani.jpg'

  return {
    issueTitle: data?.issueTitle || 'SPOTLIGHT EXCLUSIVE COVER STORY',
    personName: cleanName,
    tagline:
      (data?.tagline &&
      data.tagline !== rawName &&
      data.tagline !== data.title &&
      !data.tagline.includes('Human Wellness')
        ? data.tagline
        : matchedLeader?.quote || matchedLeader?.role) ||
      'Disruption is the courage to reconstruct legacy manufacturing into an eco-conscious, agile ecosystem.',
    designations:
      data?.designations?.length && !data.designations.includes('FEATURED LEADER')
        ? data.designations
        : [
            matchedLeader?.role?.toUpperCase() || 'FOUNDER & EXECUTIVE CHAIRMAN',
            matchedLeader?.organization?.toUpperCase() || 'EPIC GROUP',
            matchedLeader?.badge || 'GLOBAL DISRUPTOR',
          ],
    organization: matchedLeader?.organization || data?.organization || 'Epic Group',
    storySlug: slug,
    personPortraitUrl: webProfilePic,
    magazineCoverUrl: data?.magazineCoverUrl || COVER_STORY_DATA.magazineCoverUrl,
    signatureText: cleanName,
  }
}


export async function getIndustries(): Promise<IndustryItem[]> {
  const data = await sanityFetch<any[]>({ query: INDUSTRIES_QUERY })
  if (data && data.length > 0 && data.some((item) => item.name || item.title)) {
    return data.map((item, idx) => ({
      id: item._id || `ind-${idx + 1}`,
      number: item.number || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`),
      name: item.name || item.title || INDUSTRIES_DATA[idx]?.name || 'Industry',
      slug: item.slug || INDUSTRIES_DATA[idx]?.slug || 'industry',
      articleCount: typeof item.articleCount === 'number' ? item.articleCount : 0,
      iconName: item.iconName || INDUSTRIES_DATA[idx]?.iconName || 'Briefcase',
    }))
  }
  return INDUSTRIES_DATA
}

export async function getEditorialTrio() {
  const data = await sanityFetch<{
    latestNews: any[]
    trending: any[]
    voices: VoiceItem[]
  }>({ query: EDITORIAL_TRIO_QUERY })

  return {
    latestNews: data?.latestNews?.length ? data.latestNews : LATEST_NEWS_DATA,
    trendingWeek: data?.trending?.length ? data.trending : TRENDING_WEEK_DATA,
    voices: data?.voices?.length ? data.voices : VOICES_DATA,
  }
}

export async function getInsights(): Promise<ArticleItem[]> {
  const data = await sanityFetch<any[]>({ query: INSIGHTS_QUERY })
  if (data && data.length) {
    return data.map((item, idx) => ({
      ...item,
      id: item.id || item._id || `ins-${idx}`,
    }))
  }
  return INSIGHTS_DATA
}

export async function getInsightsPageData() {
  const data = await sanityFetch<any>({ query: INSIGHTS_PAGE_QUERY })
  return data
}

export async function getLatestMagazine() {
  const data = await sanityFetch<any>({ query: LATEST_MAGAZINE_QUERY })
  if (data && (data.imageUrl || data.title)) {
    return data
  }
  return {
    title: 'Manuel Rendon_2026’s Most Influential Business Leaders Transforming the Chemical Industry',
    slug: 'manuel-rendon-chemical-industry-2026',
    editionTag: 'THE 2026 EDITION',
    publishedDate: '2026-03-01',
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg',
    issuuLink: 'https://issuu.com/thespotlightleaders/docs/manuel_rendon',
    description: 'Manuel Rendon — 2026’s Most Influential Business Leaders Transforming the Chemical Industry',
  }
}

export async function getLatestMagazines(limit = 7) {
  const data = await sanityFetch<any[]>({
    query: ALL_MAGAZINES_QUERY,
    revalidate: 60,
  })
  if (data && data.length > 0) {
    return data.filter((m) => m.imageUrl).slice(0, limit)
  }
  return []
}

export async function getMultimedia(): Promise<{
  podcast: PodcastData
  event: EventData
  video: VideoData
}> {
  const data = await sanityFetch<{ podcast: PodcastData; event: EventData }>({
    query: MULTIMEDIA_QUERY,
  })
  return {
    podcast: data?.podcast?.title ? data.podcast : PODCAST_DATA,
    event: data?.event?.title ? data.event : EVENT_DATA,
    video: VIDEO_DATA,
  }
}

export async function getArticleBySlug(slug: string) {
  const data = await sanityFetch<any>({
    query: ARTICLE_BY_SLUG_QUERY,
    params: { slug },
  })

  if (data && data.title) return data

  // Fallback to match mock data
  const allMocks = [
    HERO_FEATURE_DATA,
    ...HERO_RAIL_DATA,
    ...EDITORS_PRIMARY_DATA,
    ...EDITORS_COMPACT_DATA,
    ...INSIGHTS_DATA,
  ]

  const matched = allMocks.find((m) => m.slug === slug) || HERO_FEATURE_DATA
  return {
    ...matched,
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text:
              matched.excerpt ||
              'Across global business hubs and frontier technology corridors, leaders are spearheading a systemic shift in how legacy enterprises approach longevity, digital integration, and purpose-driven impact.',
          },
        ],
      },
    ],
  }
}

export function resolveLeaderImage(slug: string): string {
  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif']
  for (const ext of extensions) {
    const p1 = path.join(process.cwd(), 'public', 'images', 'leaders', `${slug}${ext}`)
    if (fs.existsSync(p1)) return `/images/leaders/${slug}${ext}`

    const p2 = path.join(process.cwd(), 'public', 'assets', 'leaders', `${slug}${ext}`)
    if (fs.existsSync(p2)) return `/assets/leaders/${slug}${ext}`
  }
  return '/images/leaders-hero-portrait.jpg'
}

export async function getLeaders(): Promise<LeaderItem[]> {
  const data = await sanityFetch<any[]>({ query: ALL_LEADERS_QUERY })
  if (data && data.length > 0) {
    return data.map((item) => ({
      id: item._id,
      name: item.name,
      slug: item.slug,
      role: item.role || 'Featured Leader',
      organization: item.organization || 'Spotlight Business Leaders',
      badge: item.badge || 'EXECUTIVE',
      bio:
        typeof item.biography === 'string'
          ? item.biography
          : 'Distinguished business executive, pioneer, and visionary leading corporate excellence.',
      imageUrl: resolveLeaderImage(item.slug),
      quote: item.quote,
      featuredOnHome: item.featuredOnHome,
    }))
  }
  return FEATURED_LEADERS_DATA.map((l) => ({
    ...l,
    imageUrl: resolveLeaderImage(l.slug),
  }))
}

export async function getLeaderBySlug(slug: string): Promise<LeaderItem | null> {
  const data = await sanityFetch<any>({
    query: LEADER_BY_SLUG_QUERY,
    params: { slug },
  })

  if (data && data.name) {
    return {
      id: data._id,
      name: data.name,
      slug: data.slug,
      role: data.role || 'Featured Leader',
      organization: data.organization || 'Spotlight Business Leaders',
      badge: data.badge || 'EXECUTIVE',
      bio:
        typeof data.biography === 'string'
          ? data.biography
          : 'Distinguished business executive, pioneer, and visionary leading corporate excellence.',
      imageUrl: resolveLeaderImage(data.slug),
      quote: data.quote,
      featuredOnHome: data.featuredOnHome,
    }
  }

  const fallback = FEATURED_LEADERS_DATA.find((l) => l.slug === slug)
  if (fallback) {
    return {
      ...fallback,
      imageUrl: resolveLeaderImage(fallback.slug),
    }
  }
  return null
}

export async function getWebProfiles(): Promise<LeaderItem[]> {
  const data = await sanityFetch<any[]>({ query: WEB_PROFILES_QUERY })
  const fallbackList = FEATURED_LEADERS_DATA.map((l) => ({
    ...l,
    imageUrl: resolveLeaderImage(l.slug),
  }))

  if (data && data.length > 0) {
    const sanityProfiles: LeaderItem[] = data.map((item) => {
      const fallback = fallbackList.find((f) => f.slug === item.slug)
      const imageUrl =
        item.imageUrl ||
        resolveLeaderImage(item.slug)

      return {
        id: item._id,
        name: item.name,
        slug: item.slug,
        role:
          item.role && item.role !== 'Executive Leader'
            ? item.role
            : fallback?.role || item.role || 'Executive Leader',
        organization:
          item.organization && item.organization !== 'Spotlight Business Leaders'
            ? item.organization
            : fallback?.organization || item.organization || 'Spotlight Business Leaders',
        badge: item.badge || fallback?.badge || 'EXECUTIVE PROFILE',
        bio:
          typeof item.biography === 'string' && item.biography.trim()
            ? item.biography
            : fallback?.bio ||
              'Distinguished business executive, pioneer, and visionary leading corporate excellence.',
        imageUrl,
        quote: item.quote || fallback?.quote,
        featuredOnHome: Boolean(item.featuredOnHome),
      }
    })

    // Include any additional authentic dossiers from fallbackList not yet present in Sanity
    const existingSlugs = new Set(sanityProfiles.map((p) => p.slug))
    const extraProfiles = fallbackList.filter((f) => !existingSlugs.has(f.slug))

    return [...sanityProfiles, ...extraProfiles]
  }

  return fallbackList
}

export async function getWebProfileBySlug(slug: string): Promise<LeaderItem | null> {
  const data = await sanityFetch<any>({
    query: WEB_PROFILE_BY_SLUG_QUERY,
    params: { slug },
  })

  const fallback = FEATURED_LEADERS_DATA.find((l) => l.slug === slug)

  if (data && data.name) {
    const imageUrl = data.imageUrl || resolveLeaderImage(data.slug)

    return {
      id: data._id,
      name: data.name,
      slug: data.slug,
      role:
        data.role && data.role !== 'Executive Leader'
          ? data.role
          : fallback?.role || data.role || 'Executive Leader',
      organization:
        data.organization && data.organization !== 'Spotlight Business Leaders'
          ? data.organization
          : fallback?.organization || data.organization || 'Spotlight Business Leaders',
      badge: data.badge || fallback?.badge || 'EXECUTIVE PROFILE',
      bio:
        typeof data.biography === 'string' && data.biography.trim()
          ? data.biography
          : fallback?.bio ||
            'Distinguished business executive, pioneer, and visionary leading corporate excellence.',
      imageUrl,
      quote: data.quote || fallback?.quote,
      featuredOnHome: Boolean(data.featuredOnHome),
    }
  }

  if (fallback) {
    return {
      ...fallback,
      imageUrl: resolveLeaderImage(fallback.slug),
    }
  }
  return null
}

const SLUG_ALIASES: Record<string, { resolvedSlug: string; displayName?: string }> = {
  automotive: { resolvedSlug: 'automobile', displayName: 'Automotive' },
  auto: { resolvedSlug: 'automobile', displayName: 'Automotive' },
  technology: { resolvedSlug: 'tech-ai', displayName: 'Technology' },
  tech: { resolvedSlug: 'tech-ai', displayName: 'Technology' },
  'tech-ai': { resolvedSlug: 'tech-ai', displayName: 'Tech / AI' },
  automobile: { resolvedSlug: 'automobile', displayName: 'Automotive' },
}

export async function getCategoryContent(rawSlug: string) {
  const normalizedSlug = (rawSlug || '').toLowerCase()
  const alias = SLUG_ALIASES[normalizedSlug]
  const slug = alias ? alias.resolvedSlug : normalizedSlug

  const data = await sanityFetch<any>({
    query: CATEGORY_PAGE_QUERY,
    params: { slug },
  })

  const existsInSanity = Boolean(data?.category?._id)
  const categoryTitle =
    alias?.displayName ||
    data?.category?.title ||
    rawSlug.replace(/-/g, ' ').toUpperCase()

  const categoryDescription =
    data?.category?.description ||
    (existsInSanity
      ? `Exclusive reporting, strategic analysis, and executive profiles in ${categoryTitle.toLowerCase()}.`
      : `This section is not configured in the Sanity CMS schema.`)

  // 1. If slug is web-profiles or leaders, return real leaders from Sanity
  if (slug === 'web-profiles' || slug === 'leaders') {
    const items = data?.leaders && data.leaders.length > 0 ? data.leaders : []
    return {
      type: 'leaders' as const,
      title: categoryTitle,
      description: categoryDescription,
      existsInSanity: true,
      hasData: items.length > 0,
      totalCount: items.length,
      items: items.map((l: any) => ({
        id: l._id,
        title: l.name,
        slug: l.slug,
        category: l.badge || 'EXECUTIVE PROFILE',
        excerpt: l.bio,
        imageUrl: l.imageUrl || '/images/leaders-hero-portrait.jpg',
        href: `/leaders/${l.slug}`,
      })),
    }
  }

  // 2. If slug is magazines, return real magazines from Sanity
  if (slug === 'magazines') {
    const items = data?.magazines && data.magazines.length > 0 ? data.magazines : []
    return {
      type: 'magazines' as const,
      title: categoryTitle,
      description: categoryDescription,
      existsInSanity: true,
      hasData: items.length > 0,
      totalCount: items.length,
      items: items.map((m: any) => ({
        id: m._id,
        title: m.title,
        slug: m.slug,
        category: 'DIGITAL EDITION',
        excerpt: m.description,
        imageUrl: m.imageUrl || '/images/magazine-mock-1.jpg',
        href: `/magazine`,
        issuuLink: m.issuuLink,
      })),
    }
  }

  // 3. For any other category (business-bulletin, healthcare, manufacturing, automobile, legal, tech-ai, etc.)
  // Strictly return only articles that belong to this category/industry.
  // DO NOT show any fallback or dummy data if there is no data in Sanity!
  const rawArticles = data?.articles && data.articles.length > 0 ? data.articles : []

  return {
    type: 'articles' as const,
    title: categoryTitle,
    description: categoryDescription,
    existsInSanity,
    hasData: rawArticles.length > 0,
    totalCount: rawArticles.length,
    items: rawArticles.map((a: any, index: number) => ({
      id: a._id || `art-${index}`,
      title: a.title,
      slug: a.slug,
      category: a.category || categoryTitle,
      excerpt: a.excerpt,
      imageUrl: a.imageUrl || '/images/perspective-tech.jpg',
      publishedAt: a.publishedAt
        ? new Date(a.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : 'Recent Update',
      href: `/articles/${a.slug}`,
    })),
  }
}


