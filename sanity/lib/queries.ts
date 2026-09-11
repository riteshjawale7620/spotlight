import { groq } from 'next-sanity'

// Fetch Homepage Lead Feature Story (01/05 hero)
export const HERO_FEATURE_QUERY = groq`
  *[_type == "article" && placement == "heroFeature"][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    excerpt,
    readingTimeMinutes,
    publishedAt,
    "category": category->name,
    "author": author->{ name, role, "avatarUrl": avatar.asset->url },
    "imageUrl": featuredImage.asset->url
  }
`

// Fetch Hero Quick Stories (01-05 on right sidebar of hero)
export const HERO_RAIL_QUERY = groq`
  *[_type == "article" && (placement == "heroRail" || placement == "heroFeature")] | order(trendingRank asc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    readingTimeMinutes,
    trendingRank,
    "category": category->name
  }
`

// Fetch Editor's Selection (Primary 3 cards + Compact 3 cards)
export const EDITORS_SELECTION_QUERY = groq`
  {
    "primary": *[_type == "article" && placement == "editorSelectionPrimary"][0...3] {
      "id": _id,
      _id,
      title,
      "slug": slug.current,
      excerpt,
      readingTimeMinutes,
      publishedAt,
      "category": category->name,
      "imageUrl": featuredImage.asset->url
    },
    "compact": *[_type == "article" && placement == "editorSelectionCompact"][0...3] {
      "id": _id,
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "category": category->name,
      "imageUrl": featuredImage.asset->url
    }
  }
`

// Fetch Active Cover Story (The Cover Story dark section)
export const COVER_STORY_QUERY = groq`
  coalesce(
    *[_type == "issue" && isCurrentCover == true][0] {
      _id,
      title,
      "slug": slug.current,
      personName,
      tagline,
      designations,
      organization,
      storySlug,
      publishedDate,
      "personPortraitUrl": personPortrait.asset->url,
      "magazineCoverUrl": magazineCover.asset->url
    },
    *[_type == "magazine" && isCurrentCover == true][0] {
      _id,
      title,
      "slug": slug.current,
      "personName": coalesce(keywords, title),
      "tagline": coalesce(tagline, description),
      "designations": coalesce(designations, ["FEATURED LEADER", "COVER STORY"]),
      "organization": "SPOTLIGHT BUSINESS LEADERS",
      "storySlug": slug.current,
      "publishedDate": coalesce(publishedDate, _createdAt),
      "personPortraitUrl": mainImage.asset->url,
      "magazineCoverUrl": mainImage.asset->url
    },
    *[_type == "magazine"][0] {
      _id,
      title,
      "slug": slug.current,
      "personName": coalesce(keywords, title),
      "tagline": coalesce(tagline, description),
      "designations": coalesce(designations, ["FEATURED LEADER", "COVER STORY"]),
      "organization": "SPOTLIGHT BUSINESS LEADERS",
      "storySlug": slug.current,
      "publishedDate": coalesce(publishedDate, _createdAt),
      "personPortraitUrl": mainImage.asset->url,
      "magazineCoverUrl": mainImage.asset->url
    }
  )
`

// Fetch All Magazines from Sanity
export const ALL_MAGAZINES_QUERY = groq`
  *[_type == "magazine"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    subtitle,
    editionTag,
    coverTone,
    featured,
    issuuLink,
    keywords,
    publishedDate,
    _createdAt,
    "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url, image.asset->url)
  }
`

export const MAGAZINE_BY_SLUG_QUERY = groq`
  *[_type == "magazine" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    subtitle,
    editionTag,
    coverTone,
    featured,
    issuuLink,
    keywords,
    publishedDate,
    _createdAt,
    "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url, image.asset->url)
  }
`

export const LATEST_MAGAZINE_QUERY = groq`
  *[_type == "magazine"] | order(publishedDate desc, _createdAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    description,
    subtitle,
    editionTag,
    coverTone,
    featured,
    issuuLink,
    keywords,
    publishedDate,
    _createdAt,
    "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url, image.asset->url)
  }
`

// Fetch All Executive Leaders (webprofile) from Sanity (Leaders Page)
export const ALL_LEADERS_QUERY = groq`
  *[_type == "webprofile"] | order(featuredOnHome desc, _createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    role,
    organization,
    biography,
    featuredOnHome,
    quote,
    badge,
    "imageUrl": profileImage.asset->url
  }
`

export const LEADER_BY_SLUG_QUERY = groq`
  *[_type == "webprofile" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    role,
    organization,
    biography,
    featuredOnHome,
    quote,
    badge,
    "imageUrl": profileImage.asset->url
  }
`

// Fetch All Web Profiles from Sanity (Web Profiles Page)
export const WEB_PROFILES_QUERY = groq`
  *[_type in ["webprofile", "leader"]] | order(coalesce(featuredOnHome, isHallOfFame, false) desc, _createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    "role": coalesce(role, designation, "Executive Leader"),
    "organization": coalesce(organization, company, "Spotlight Business Leaders"),
    "biography": coalesce(biography, bio),
    "featuredOnHome": coalesce(featuredOnHome, isHallOfFame, false),
    "quote": quote,
    "badge": coalesce(badge, "EXECUTIVE PROFILE"),
    "imageUrl": coalesce(profileImage.asset->url, mainImage.asset->url, avatar.asset->url),
    _type
  }
`

export const WEB_PROFILE_BY_SLUG_QUERY = groq`
  *[_type in ["webprofile", "leader"] && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    "role": coalesce(role, designation, "Executive Leader"),
    "organization": coalesce(organization, company, "Spotlight Business Leaders"),
    "biography": coalesce(biography, bio),
    "featuredOnHome": coalesce(featuredOnHome, isHallOfFame, false),
    "quote": quote,
    "badge": coalesce(badge, "EXECUTIVE PROFILE"),
    "imageUrl": coalesce(profileImage.asset->url, mainImage.asset->url, avatar.asset->url),
    _type
  }
`

// Fetch only the 4 available industry categories in Sanity
export const INDUSTRIES_QUERY = groq`
  [
    *[_type == "industryCategory" && (slug.current == "tech-ai" || slug.current == "technology")][0] {
      _id,
      "name": "Tech / AI",
      "slug": "technology",
      "number": "01",
      "iconName": "Cpu",
      "articleCount": count(*[_type == "industryPost" && (industryCategory._ref == ^._id || references(^._id))])
    },
    *[_type == "industryCategory" && (slug.current == "automobile" || slug.current == "automotive")][0] {
      _id,
      "name": "Automobile",
      "slug": "automotive",
      "number": "02",
      "iconName": "Car",
      "articleCount": count(*[_type == "industryPost" && (industryCategory._ref == ^._id || references(^._id))])
    },
    *[_type == "industryCategory" && slug.current == "manufacturing"][0] {
      _id,
      "name": "Manufacturing",
      "slug": "manufacturing",
      "number": "03",
      "iconName": "Building2",
      "articleCount": count(*[_type == "industryPost" && (industryCategory._ref == ^._id || references(^._id))])
    },
    *[_type == "industryCategory" && slug.current == "legal"][0] {
      _id,
      "name": "Legal",
      "slug": "legal",
      "number": "04",
      "iconName": "Briefcase",
      "articleCount": count(*[_type == "industryPost" && (industryCategory._ref == ^._id || references(^._id))])
    }
  ]
`

// Fetch Editorial Trio: Latest News + Trending This Week + Columnist Voices
export const EDITORIAL_TRIO_QUERY = groq`
  {
    "latestNews": *[_type == "article" && placement == "latestNews"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "category": category->name
    },
    "trending": *[_type == "article" && placement == "trendingWeek"] | order(trendingRank asc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      trendingRank
    },
    "voices": coalesce(
      *[_type == "author" && defined(quote)][0...3] {
        _id,
        name,
        "slug": slug.current,
        role,
        quote,
        "avatarUrl": avatar.asset->url
      },
      *[_type == "webprofile"][0...3] {
        _id,
        name,
        "slug": slug.current,
        "role": coalesce(role, organization, "Featured Leader"),
        "quote": coalesce(quote, "Building the future through visionary leadership."),
        "avatarUrl": profileImage.asset->url
      }
    )
  }
`

// Fetch Insights & Analysis row
export const INSIGHTS_QUERY = groq`
  *[_type in ["industryPost", "post", "article"]] | order(publishedAt desc, _createdAt desc)[0...5] {
    "id": _id,
    _id,
    title,
    "slug": slug.current,
    "readingTimeMinutes": coalesce(readingTimeMinutes, 6),
    "category": coalesce(industryCategory->title, categories[0]->title, category->name, "EDITORIAL"),
    "imageUrl": coalesce(mainImage.asset->url, featuredImage.asset->url)
  }
`

// Fetch Full Insights Page Data (Featured hero, popular row, filterable grid, and executive leaders)
export const INSIGHTS_PAGE_QUERY = groq`
  {
    "featured": *[_type in ["post", "industryPost"] && defined(mainImage)] | order(publishedAt desc, _createdAt desc)[0] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": coalesce(excerpt, description),
      publishedAt,
      "category": coalesce(industryCategory->title, categories[0]->title, "STRATEGY"),
      "categorySlug": coalesce(industryCategory->slug.current, categories[0]->slug.current, "strategy"),
      "imageUrl": mainImage.asset->url,
      "readingTime": "7 MIN READ"
    },
    "popular": *[_type in ["post", "industryPost"] && defined(mainImage)] | order(publishedAt desc, _createdAt desc)[1...4] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": coalesce(excerpt, description),
      publishedAt,
      "category": coalesce(industryCategory->title, categories[0]->title, "STRATEGY"),
      "categorySlug": coalesce(industryCategory->slug.current, categories[0]->slug.current, "strategy"),
      "imageUrl": mainImage.asset->url,
      "readingTime": "6 MIN READ"
    },
    "articles": *[_type in ["post", "industryPost"]] | order(publishedAt desc, _createdAt desc)[0...50] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": coalesce(excerpt, description),
      publishedAt,
      "category": coalesce(industryCategory->title, categories[0]->title, "STRATEGY"),
      "categorySlug": coalesce(industryCategory->slug.current, categories[0]->slug.current, "strategy"),
      "imageUrl": coalesce(mainImage.asset->url, "/images/perspective-tech.jpg"),
      "readingTime": "6 MIN READ"
    },
    "leaders": *[_type in ["leader", "webprofile"]] | order(_createdAt desc)[0...4] {
      _id,
      name,
      "slug": slug.current,
      "role": coalesce(role, "Executive Leader"),
      "organization": coalesce(organization, "Spotlight Business Leaders"),
      "quote": coalesce(quote, "Visionary leadership is about building institutions that compound value over generations."),
      "imageUrl": coalesce(profileImage.asset->url, avatar.asset->url, "/images/leaders-hero-portrait.jpg")
    },
    "latestMagazine": *[_type == "magazine"] | order(publishedDate desc, _createdAt desc)[0] {
      _id,
      title,
      "slug": slug.current,
      description,
      issuuLink,
      publishedDate,
      "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url, image.asset->url)
    }
  }
`

// Fetch Multimedia (The Spotlight Talks podcast, Summit Event)
export const MULTIMEDIA_QUERY = groq`
  {
    "podcast": *[_type == "podcast"][0] {
      _id,
      title,
      guestName,
      guestRole,
      duration,
      audioUrl,
      "guestPhotoUrl": guestPhoto.asset->url
    },
    "event": *[_type == "summitEvent"][0] {
      _id,
      title,
      subtitle,
      day,
      month,
      location,
      registrationUrl,
      "bgImageUrl": bgImage.asset->url
    }
  }
`

// Fetch Article by Slug (Detail page)
export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type in ["article", "post", "industryPost"] && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "excerpt": coalesce(excerpt, description),
    publishedAt,
    _createdAt,
    "readingTimeMinutes": coalesce(readingTimeMinutes, 6),
    "category": coalesce(categories[0]->title, category->name, category->title, "EDITORIAL"),
    "categorySlug": coalesce(categories[0]->slug.current, category->slug.current, "news"),
    "author": coalesce(
      author->{
        name,
        role,
        bio,
        "avatarUrl": coalesce(avatar.asset->url, profileImage.asset->url)
      },
      { "name": "The Spotlight Editorial Desk", "role": "Editorial Team" }
    ),
    "imageUrl": coalesce(mainImage.asset->url, featuredImage.asset->url),
    body
  }
`

// Fetch Category Page Content (Category info + real articles/leaders/magazines from Sanity)
export const CATEGORY_PAGE_QUERY = groq`
  {
    "category": *[_type in ["category", "industryCategory"] && slug.current == $slug][0] {
      _id,
      "title": coalesce(title, name),
      description,
      "slug": slug.current,
      _type
    },
    "articles": *[_type in ["post", "industryPost", "article"] && (
      references(*[_type in ["category", "industryCategory"] && slug.current == $slug]._id) ||
      industryCategory->slug.current == $slug ||
      categories[]->slug.current == $slug ||
      category->slug.current == $slug ||
      categorySlug == $slug
    )] | order(publishedAt desc, _createdAt desc)[0...24] {
      _id,
      title,
      "slug": slug.current,
      "excerpt": coalesce(excerpt, description),
      publishedAt,
      _createdAt,
      "category": coalesce(industryCategory->title, categories[0]->title, category->name, category->title, "EDITORIAL"),
      "imageUrl": coalesce(mainImage.asset->url, featuredImage.asset->url)
    },
    "leaders": *[_type in ["leader", "webprofile"]] | order(_createdAt desc)[0...24] {
      _id,
      name,
      "slug": slug.current,
      "role": coalesce(role, "Executive Leader"),
      "badge": coalesce(badge, "EXECUTIVE PROFILE"),
      "bio": coalesce(biography, bio, "Distinguished business executive and industry leader."),
      "imageUrl": coalesce(profileImage.asset->url, avatar.asset->url)
    },
    "magazines": *[_type == "magazine"] | order(_createdAt desc)[0...24] {
      _id,
      title,
      "slug": slug.current,
      description,
      subtitle,
      editionTag,
      issuuLink,
      publishedDate,
      _createdAt,
      "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url)
    }
  }
`

