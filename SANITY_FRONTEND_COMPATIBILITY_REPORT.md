# Sanity & Frontend Compatibility Architecture Report
**Spotlight Business Leaders Platform**  
**Date:** September 6, 2026  
**Sanity Project ID:** `0ju83vao` | **Dataset:** `production` | **Framework:** Next.js (App Router) + Sanity Studio v3

---

## Executive Summary

An in-depth structural audit was conducted across:
1. **Live Sanity Dataset** (Production dataset on project `0ju83vao`),
2. **Local Sanity Studio Schema Definitions** (`sanity/schemaTypes/*`), and
3. **Frontend Application Architecture** (`app/*`, `components/*`, `lib/data/mockData.ts`).

### Key Discovery Highlights
* **Active Content in Sanity:** The live production database currently holds **8 `magazine` documents**, **8 `webprofile` documents**, and **17 image assets**. There are currently **0** documents of types `article`, `author`, `category`, `issue`, `podcast`, or `summitEvent`.
* **Critical Schema Blindspot:** The 8 live `webprofile` documents (which contain real executive profiles such as *Dr. Christina Rahm*, *Durana Elmi*, *Dr. Tamara L. Nall*, *Kelly Bagla*, etc.) are **not defined** in the local codebase schema (`sanity/schemaTypes/index.ts`). As a consequence, editors accessing the local Sanity Studio (`/studio`) cannot view, edit, or create executive profiles.
* **Frontend Disconnect:** The frontend `/leaders` page currently uses static mock data (`mockData.ts`), while Sanity already contains the authentic cover leaders and biographies under `webprofile`.
* **Category Divergence:** The frontend uses "categories" across three distinct dimensions (Site Sections, 8 Macro Industries, and Editorial Topics), whereas Sanity's `category` schema is structured only as a flat list of 8 numbered industries.
* **Duplicate Publication Types:** Both `magazine` (live data) and `issue` (local schema only) exist simultaneously with overlapping purposes.

---

## 1. Comparative Matrix: Live Sanity vs. Local Schema vs. Frontend

| Concept / Model | Live Sanity Dataset (`0ju83vao`) | Local Sanity Schema (`sanity/schemaTypes/`) | Frontend Implementation (`app/`, `components/`) | Status & Compatibility |
| :--- | :--- | :--- | :--- | :--- |
| **Magazine Editions** | **8 documents** (`magazine`): `title`, `slug`, `description`, `issuuLink`, `mainImage`, `keywords` | Defined in `magazine.ts` (`title`, `slug`, `description`, `mainImage`, `issuuLink`, `keywords`, `publishedDate`) | `/magazine` page renders live Sanity magazines with PubHTML5 reader links | **Compatible** (Fully functional, responsive grid & flipbook links active) |
| **Cover Story Issue** | **0 documents** (`issue`) | Defined in `issue.ts` (`isCurrentCover`, `personName`, `tagline`, `personPortrait`, `magazineCover`) | Homepage Cover Story uses GROQ `coalesce(*[_type == "issue" ...], *[_type == "magazine"][0])` fallback | **Partially Compatible** (Relies on fallback coalesce to `magazine`) |
| **Executive Profiles / Leaders** | **8 documents** (`webprofile`): `name`, `slug`, `profileImage`, `biography`, `featuredOnHome` | **MISSING**: `webprofile` schema is NOT defined in `sanity/schemaTypes/` | `/leaders` page displays mock items. Has `Christina Rahm`, but pulled from local static arrays | **Critical Disconnect** (Live data exists in Sanity, but schema missing and UI unlinked) |
| **Authors / Voices** | **0 documents** (`author`) | Defined in `author.ts` (`name`, `slug`, `role`, `organization`, `quote`, `avatar`, `bio`) | Homepage "Editorial Voices" queries `*[_type == "author"]`, falls back to mock quotes | **Schema Ready, Data Empty** |
| **Categories & Industries** | **0 documents** (`category`) | Defined in `category.ts` (`name`, `slug`, `number`, `iconName`, `description`) | 1) Nav categories (`/category/[slug]`), 2) `/industries` (8 sectors), 3) News filters | **Structural Mismatch** (Flat industry schema cannot distinguish topics vs. sectors) |
| **Articles & News** | **0 documents** (`article`) | Defined in `article.ts` (`title`, `slug`, `placement`, `category` ref, `author` ref, `body`) | `/news`, `/insights`, `/features`, and `/articles/[slug]` consume mock data | **Schema Ready, Data Empty** |
| **Multimedia (Podcast & Summits)** | **0 documents** (`podcast`, `summitEvent`) | Defined in `podcast.ts` (`podcast`, `summitEvent`) | Homepage Spotlight Talks audio player & Annual Summit card fall back to mock data | **Schema Ready, Data Empty** |

---

## 2. Category Architecture Analysis

The frontend currently uses the term **"Category"** in three different ways, creating navigation and filtering ambiguity:

```
                                 FRONTEND TAXONOMY
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
1. Route Sections (Format)       2. Macro Industries            3. Editorial Topics (Tags)
   • Magazine (`/magazine`)        • 01 Technology                • AI & Society
   • News (`/news`)                • 02 Finance                   • Sustainability
   • Leaders (`/leaders`)          • 03 Healthcare                • Leadership & Governance
   • Industries (`/industries`)    • 04 Real Estate               • Global Economy
   • Insights (`/insights`)        • 05 Automotive                • Women in Business
   • Features (`/features`)        • 06 Energy                    • Biotech & Wellness
                                   • 07 Education
                                   • 08 Consulting
```

### Problem in Sanity:
Sanity's `category.ts` currently has:
```typescript
{
  name: 'category',
  title: 'Category / Industry',
  fields: ['name', 'slug', 'number', 'iconName', 'description']
}
```
* If editors enter "Technology" with `number: "01"`, it works for the **Industries** section.
* But if editors want to tag a news article with **"AI & Society"** or **"Sustainability"**, there is no field to differentiate an editorial topic from a numbered industry sector.
* Furthermore, the Header navigation links to `/category/news` and `/category/culture`, mixing top-level formats with topics.

---

## 3. Detailed Concept-by-Concept Audit

### 3.1. Executive Profiles: `webprofile` vs. `author` vs. `leaders`
#### Sanity Reality:
In the live Sanity dataset, the 8 executive profiles are:
1. **Dr. Christina Rahm** (`dr-christina-rahm`)
2. **Durana Elmi** (`durana-elmi`)
3. **Dr. Tamara L. Nall** (`dr-tamara-l-nall`)
4. **Kelly Bagla** (`kelly-bagla`)
5. **Hamid Kohan** (`hamid-kohan`)
6. **Graziella Gallelli** (`graziella-gallelli`)
7. **John Kippen** (`john-kippen`)
8. **Sima Azadegan** (`sima-azadegan`)

Each document holds:
* `name`: string
* `slug`: `{ current: string }`
* `profileImage`: image reference (hotspot-compatible)
* `biography`: string (formatted multi-paragraph dossier text)
* `featuredOnHome`: boolean

#### The Problem:
* `webprofile.ts` does **not exist** in `sanity/schemaTypes/`. If an admin opens Sanity Studio, these 8 profiles do not appear in the Studio sidebar navigation.
* The frontend `/leaders` page still renders hardcoded mock data instead of presenting these 8 real executives.

---

### 3.2. Magazine Editions vs. Cover Story Issues
#### Sanity Reality:
* The live dataset has 8 items under `_type == "magazine"`, containing the magazine title, high-res cover image, description, and PubHTML5 viewer link (`issuuLink`).
* Sanity Studio defines both `magazine.ts` and `issue.ts`.
* `issue.ts` has specific fields for the 3D cover story display (`personName`, `tagline`, `designations`, `personPortrait`, `magazineCover`), but **has zero live documents**.

#### The Problem:
Having both `magazine` and `issue` causes redundant workflows. An editor must create a `magazine` for the digital flipbook and a separate `issue` for the homepage cover feature.

---

### 3.3. Articles & News Structure
#### Sanity Reality:
* `article.ts` schema is well structured: has `title`, `slug`, `subtitle`, `excerpt`, `placement` (heroFeature, heroRail, editorSelectionPrimary, editorSelectionCompact, latestNews, trendingWeek, insightsAnalysis), `category` (reference), `author` (reference), `featuredImage`, `readingTimeMinutes`, `publishedAt`, and `body` (blockContent).
* However, `article.ts` currently references `author`, whereas the live personalities who write or are featured in stories are stored in `webprofile`.
* It lacks a field to link an article to a specific `magazine` issue (e.g., "From the September 2024 Issue").

---

## 4. Actionable Recommendations

### Recommendation Group A: Modifications to Sanity Schemas

#### 1. Add `webprofile.ts` Schema to Sanity Studio (High Priority)
Create `sanity/schemaTypes/webprofile.ts` and register it in `sanity/schemaTypes/index.ts`.
* Include all existing fields: `name`, `slug`, `profileImage`, `biography`, `featuredOnHome`.
* Add optional convenience fields: `role` (e.g., "Founder & CEO"), `organization` (e.g., "Cymbiotika"), `industry` (reference to `category`), and `quote`.
* **Benefit**: Restores visibility and editing capability for the 8 live executive profiles in Sanity Studio.

#### 2. Upgrade `category.ts` with a Taxonomy Type (High Priority)
Add a `type` field to `category.ts`:
```typescript
defineField({
  name: 'type',
  title: 'Category Type',
  type: 'string',
  options: {
    list: [
      { title: 'Macro Industry (01-08)', value: 'industry' },
      { title: 'Editorial Topic / Tag', value: 'topic' },
    ],
    layout: 'radio',
  },
  initialValue: 'industry',
})
```
* **Benefit**: Allows the CMS to power both the 8 numbered Industries (`/industries`) and dynamic topic tags (for `/news`, `/insights`, and article filtering) without collision.

#### 3. Unify `magazine` and `issue` (Medium Priority)
Merge the unique fields of `issue.ts` into `magazine.ts`:
* Add `isCurrentCover: boolean` to `magazine`.
* Add `featuredLeader: reference -> webprofile` to `magazine`.
* Add `featuredTagline: string` to `magazine`.
* **Benefit**: Eliminates duplicate document types. One single `magazine` document represents both the flipbook release and the homepage 3D cover feature.

#### 4. Expand `article.ts` References (Medium Priority)
* Allow `author` field in `article.ts` to reference **both** `author` and `webprofile`.
* Add `issue: reference -> magazine` so articles can be grouped by publication issue.
* Add `isBreaking: boolean` or `badge: string` for the news stream.

---

### Recommendation Group B: Edits to Frontend Application

#### 1. Connect `/leaders` Page to Live Sanity `webprofile`
* Update `app/leaders/page.tsx` (or server component wrapper) to fetch `*[_type == "webprofile"]`.
* Pass the 8 live profiles (*Dr. Christina Rahm*, *Durana Elmi*, *Dr. Tamara Nall*, *Kelly Bagla*, etc.) directly into the carousel and grid cards.
* Use `sanity/lib/image.ts` `urlForImage` to render their high-res portraits.
* Fallback to static mock data if Sanity query returns fewer than 3 items.

#### 2. Implement Dynamic Profile Route `/leaders/[slug]`
* Create `app/leaders/[slug]/page.tsx` to display the executive's portrait, full multi-paragraph biography, key achievements, and linked magazine feature.

#### 3. Normalize Header Navigation Routes
In `components/header/Header.tsx`:
* Change `NEWS` link from `/category/news` to `/news` (matching the dedicated `app/news/page.tsx` route).
* Ensure clear distinction between top-level pages (`/features`, `/leaders`, `/industries`, `/insights`, `/news`, `/magazine`) and topic queries (`/category/[slug]`).

#### 4. Update Dynamic Category Page (`/category/[slug]/page.tsx`)
* Fetch articles from Sanity where `category->slug.current == $slug`.
* Fetch category metadata (title, description, icon) from Sanity `*[_type == "category" && slug.current == $slug][0]`.
* Gracefully fallback to mock articles if Sanity has zero articles for that category.

#### 5. Add Live Leader Query to `sanity/lib/queries.ts`
Add a dedicated GROQ query:
```typescript
export const ALL_LEADERS_QUERY = groq`
  *[_type == "webprofile"] | order(featuredOnHome desc, name asc) {
    _id,
    name,
    "slug": slug.current,
    "imageUrl": profileImage.asset->url,
    biography,
    featuredOnHome
  }
`
```

---

## 5. Suggested Implementation Roadmap

```
Phase 1: Studio Parity (Immediate)
├── Create sanity/schemaTypes/webprofile.ts
├── Register webprofile in sanity/schemaTypes/index.ts
└── Verify Studio displays Magazines and Web Profiles side-by-side

Phase 2: Frontend Data Hookup (Immediate)
├── Add ALL_LEADERS_QUERY to sanity/lib/queries.ts
├── Wire app/leaders/page.tsx to fetch from Sanity webprofile with fallback
└── Fix Header.tsx NEWS route to /news

Phase 3: Taxonomy & Article Harmonization (Next)
├── Add 'type' ('industry' | 'topic') to sanity/schemaTypes/category.ts
├── Consolidate issue fields into magazine.ts
└── Connect /category/[slug] to query articles by category reference
```

---

## 6. Conclusion
The Sanity dataset already has genuine magazine editions and executive leader profiles. The primary blocker was an architectural mismatch: the missing `webprofile` schema definition in local Studio and the unlinked `/leaders` page in the frontend. 

Implementing the suggested schema additions and frontend queries will immediately unlock live executive leadership content across the entire website while maintaining 100% build stability and zero downtime.
