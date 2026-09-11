export interface ArticleItem {
  id: string
  title: string
  slug: string
  subtitle?: string
  excerpt?: string
  category: string
  categorySlug?: string
  readingTimeMinutes?: number
  publishedAt: string
  imageUrl: string
  trendingRank?: string
  author?: {
    name: string
    role: string
    avatarUrl?: string
  }
}

export interface VoiceItem {
  id: string
  name: string
  slug: string
  role: string
  quote: string
  avatarUrl: string
}

export interface IndustryItem {
  id: string
  number: string
  name: string
  slug: string
  articleCount: number
  iconName: string
}

export interface CoverStoryData {
  issueTitle: string
  personName: string
  tagline: string
  designations: string[]
  organization: string
  storySlug: string
  personPortraitUrl: string
  magazineCoverUrl: string
  signatureText: string
}

export interface PodcastData {
  title: string
  guestName: string
  guestRole: string
  duration: string
  guestPhotoUrl: string
  audioUrl?: string
}

export interface EventData {
  title: string
  subtitle: string
  day: string
  month: string
  location: string
  bgImageUrl: string
  registrationUrl?: string
}

export interface VideoData {
  title: string
  duration: string
  thumbnailUrl: string
  videoUrl?: string
}

export interface LeaderItem {
  id: string
  name: string
  slug: string
  role: string
  organization?: string
  badge: string
  bio: string
  imageUrl: string
  quote?: string
  featuredOnHome?: boolean
}

export const FEATURED_LEADERS_DATA: LeaderItem[] = [
  {
    id: 'ranjan-mahtani',
    name: 'Ranjan Mahtani',
    slug: 'ranjan-mahtani',
    role: 'Founder & Executive Chairman',
    organization: 'Epic Group',
    badge: 'GLOBAL DISRUPTOR',
    bio: `As the visionary Founder and Executive Chairman of the multinational Epic Group, Ranjan Mahtani has spent more than three decades redefining the parameters of modern industrial manufacturing. Under his leadership, Epic Group evolved from an entrepreneurial venture into a premier global manufacturing titan supplying world-class brands with state-of-the-art apparel solutions. Mahtani recognized early on that scale without sustainability is unsustainable, engineering a corporate roadmap centered on decarbonization, advanced materials, and ethical worker stewardship.

Disruption in Mahtani's lexicon is not synonymous with reckless novelty; it represents the disciplined courage to reconstruct legacy supply chains from the ground up. In response to mounting global ecological pressures, he spearheaded the establishment of ultra-modern, LEED-certified industrial facilities equipped with closed-loop water treatment systems, rooftop photovoltaic arrays, and zero-liquid-discharge infrastructure across multiple continents. These investments have reduced carbon emissions and freshwater dependency by significant margins across Epic's manufacturing footprint.

Beyond environmental stewardship, Mahtani has been a vocal advocate for systemic workforce empowerment. Championing progressive worker development programs, financial literacy initiatives, and healthcare access across factories in Asia, the Middle East, and Africa, his human-first operating model proves that commercial profitability and social governance can flourish symbiotically.

In the digital arena, Mahtani continues to steer Epic Group into the Industry 4.0 paradigm. By deploying predictive artificial intelligence for precision fabric utilization, cloud-synchronized demand forecasting, and automated cutting robotics, Epic continues to set the standard for speed-to-market and waste minimization in global apparel.

Looking forward, Mahtani remains committed to advancing circular textile technologies and regenerative agriculture for raw materials. His ongoing mission is to inspire a new generation of industrial leaders to embrace radical transparency, operational resilience, and relentless innovation as the bedrock of twenty-first-century global enterprise.`,
    imageUrl: '/images/leaders/ranjan-mahtani.jpg',
    quote: 'Disruption is not about reckless novelty; it is the courage to reconstruct legacy manufacturing into an eco-conscious, technologically agile ecosystem.',
    featuredOnHome: true,
  },
  {
    id: 'dr-shoumo-mitra',
    name: 'Dr. Shoumo Mitra',
    slug: 'dr-shoumo-mitra',
    role: 'Leading Crop Health R&D (Asia Pacific) & Founder',
    organization: 'Corteva Agriscience / VeGro Terra',
    badge: 'AGRIBIO & SOILTECH',
    bio: `Dr. Shoumo Mitra stands as one of the preeminent scientific and strategic minds shaping the contemporary agricultural biotechnology landscape across the Asia-Pacific corridor. With a distinguished career spanning fundamental agronomic research, global corporate R&D leadership at Corteva Agriscience, and entrepreneurial ventures including VeGro Terra, Dr. Mitra has dedicated his life's work to resolving one of humanity's most critical imperatives: ensuring sustainable global food security in an era of unprecedented climate volatility.

Throughout his tenure directing crop health research and development, Dr. Mitra has championed the strategic integration of biological science and soil microbiology into conventional farming practices. Recognizing that decades of synthetic chemical dependency have depleted natural soil ecosystems, he has led pioneering initiatives to develop next-generation bio-stimulants, microbial seed treatments, and bio-fungicides that rejuvenate degraded soils and restore beneficial rhizosphere biodiversity.

Dr. Mitra's research methodology emphasizes climate-adaptive resilience. His teams have engineered biological formulations that enhance drought tolerance, optimize nitrogen uptake, and protect staple food crops against emerging pathogens without leaving hazardous chemical residues in the food supply or groundwater tables. This work has directly touched millions of agricultural hectares, empowering smallholder farmers and commercial agribusinesses alike with economically viable, ecologically sound inputs.

A passionate proponent of digital precision agronomy, Dr. Mitra frequently speaks on the convergence of genomics, satellite soil mapping, and biological intelligence. He advocates for cross-sector collaborations between university research institutions, biotechnology startups, and multilateral policy agencies to accelerate the regulatory approval and deployment of safe bio-solutions.

As the agricultural sector faces intensifying pressure to achieve net-zero carbon targets, Dr. Mitra's visionary leadership demonstrates how scientific rigor, corporate stewardship, and environmental stewardship can work hand-in-hand to cultivate a resilient, nourished, and sustainable world.`,
    imageUrl: '/images/leaders/dr-shoumo-mitra.jpg',
    quote: 'Biological intelligence and soil microbiome health represent the definitive frontier for securing global food sovereignty against climate extremes.',
    featuredOnHome: true,
  },
  {
    id: 'craig-bell',
    name: 'Craig Bell',
    slug: 'craig-bell',
    role: 'Chief Executive Officer & Managing Director',
    organization: 'Bell Financial Group',
    badge: 'ICONIC CEO',
    bio: `As the Chief Executive Officer and Managing Director of Bell Financial Group, Craig Bell has distinguished himself as one of the most iconic and forward-thinking chief executives of his generation. Guided by an uncompromising dedication to client-centric excellence and community enrichment, Bell has steered his organization through complex financial market cycles, regulatory upheavals, and the rapid onset of digital disruption with remarkable poise and consistent capital compounding.

Under Bell's stewardship, Bell Financial Group has maintained a reputation for combining traditional financial conservatism with agile fintech innovation. He recognized early that modern wealth management is not merely a transaction-driven business, but a sacred covenant of multi-generational trust. By investing heavily in proprietary portfolio analytics platforms, secure digital client portals, and institutional-grade algorithmic execution, he democratized access to sophisticated wealth preservation tools for institutional and private clients alike.

Bell is equally revered for his holistic approach to corporate leadership. Rejecting the narrow doctrine of short-term quarterly maximization, he instituted an organizational culture centered on long-term stewardship, deep employee mentorship, and philanthropic investment into local communities. His philosophy of "Community-First Capitalism" has inspired numerous regional development funds and youth financial literacy foundations.

During periods of systemic volatility, Bell's steady hand and transparent communication have served as an anchor for both his enterprise and the broader financial advisory sector. His commentary on macroeconomic trends, capital allocation, and governance is widely sought after by financial media and institutional investors.

Looking ahead, Craig Bell continues to champion responsible investing and sustainable finance, positioning Bell Financial Group at the cutting edge of ESG integration and digital asset advisory, ensuring that the firm remains an enduring symbol of integrity and financial innovation.`,
    imageUrl: '/images/leaders/craig-bell.jpg',
    quote: 'True enterprise resilience comes from fostering community capital alongside financial returns—building institutions that outlive individual market cycles.',
    featuredOnHome: true,
  },
  {
    id: 'moutih-rafei',
    name: 'Moutih Rafei',
    slug: 'moutih-rafei',
    role: 'Principal Investigator & Chief Scientific Officer',
    organization: 'Université de Montréal / BioTherapeutics',
    badge: 'HEALTHCARE INNOVATOR',
    bio: `Dr. Moutih Rafei is a renowned biomedical scientist, academic leader, and biotechnology innovator whose trailblazing research in cellular immunology, stem cell engineering, and regenerative medicine has earned international acclaim. Serving as a Principal Investigator, Professor, and Chief Scientific Officer, Dr. Rafei has dedicated his career to demystifying the complex interactions between the immune system and malignant or degenerative diseases.

At the core of Dr. Rafei's scientific contributions is his groundbreaking work with mesenchymal stem cells (MSCs) and their secretome. His laboratory has pioneered novel bio-engineering techniques to reprogram stem cells, generating targeted cell-based therapeutics that can selectively suppress autoimmune inflammatory cascades or activate antitumor immunity without the systemic toxicity commonly associated with traditional chemotherapy.

Bridging the notorious "valley of death" between laboratory bench research and clinical bedside commercialization has been Dr. Rafei's signature achievement. By forging strategic alliances between academic medical centers and venture-backed biopharmaceutical entities, he has successfully transitioned multiple candidate molecules through rigorous pre-clinical pipelines toward active human clinical trials.

A prolific author with dozens of high-impact publications in premier scientific journals, Dr. Rafei is equally recognized for his dedication to cultivating the next generation of biomedical scientists. His lab serves as an international incubator for young researchers, emphasizing interdisciplinary collaboration between molecular biology, data science, and clinical oncology.

As healthcare enters the era of personalized medicine, Dr. Rafei continues to lead the vanguard of precision cellular immunotherapy, advancing treatments that offer renewed hope to patients facing refractory autoimmune conditions and previously intractable cancers.`,
    imageUrl: '/images/leaders/moutih-rafei.jpg',
    quote: 'Cellular reprogramming and targeted immunotherapy hold the power to transform incurable degenerative diseases into manageable, curative therapies.',
    featuredOnHome: true,
  },
  {
    id: 'manuel-rendon',
    name: 'Manuel Rendon',
    slug: 'manuel-rendon',
    role: 'Chief Executive Officer & Co-Founder',
    organization: 'Timeplast',
    badge: 'CLEAN MATERIALS PIONEER',
    bio: `Manuel Rendon is a visionary materials science entrepreneur and the Chief Executive Officer of Timeplast, a revolutionary deep-tech company transforming the global chemical and polymer industry. Confronted by the catastrophic accumulation of non-biodegradable plastics in oceans, landfills, and human biological systems, Rendon established Timeplast with a singular, audacious mission: to redesign the molecular architecture of synthetic materials so they assimilate harmlessly back into nature.

Unlike conventional bioplastics, which often require industrial composting facilities and high-heat environments to break down, Rendon and his scientific team engineered a patented, water-soluble, bio-assimilable polymer resin. This groundbreaking material mimics the mechanical tensile strength, flexibility, and barrier properties of traditional petroleum-based polymers, yet completely dissolves and degrades into harmless carbon, water, and minerals within hours or days of exposure to environmental moisture.

Rendon's entrepreneurial journey has been marked by relentless technical rigor and business tenacity. Overcoming widespread skepticism from entrenched petrochemical conglomerates, he built world-class pilot manufacturing facilities, secured vital patents across major global jurisdictions, and achieved rigorous ASTM and international non-toxicity certifications.

Under his leadership, Timeplast has established strategic commercialization partnerships with Fortune 500 consumer packaged goods corporations, agricultural film manufacturers, and medical packaging leaders seeking viable, scalable alternatives to single-use plastics. Rendon's ability to balance deep chemical engineering with commercial acumen has established him as one of the most influential innovators in modern sustainability.

Rendon continues to champion clean industrial manufacturing as an economic driver rather than a regulatory burden, proving that the chemical industry can become a proactive guardian of planetary health through purposeful scientific innovation.`,
    imageUrl: '/images/leaders/manuel-rendon.jpg',
    quote: 'Plastic was invented to last forever, yet used for seconds. Our mission is to rewrite molecular chemistry so materials naturally assimilate back into nature without toxic residue.',
    featuredOnHome: true,
  },
  {
    id: 'suzanne-robb',
    name: 'Suzanne Robb',
    slug: 'suzanne-robb',
    role: 'Chief Operating Officer',
    organization: 'Alloy Personal Training Franchise',
    badge: 'WELLNESS TRAILBLAZER',
    bio: `Suzanne Robb is an accomplished executive leader and operational powerhouse who has fundamentally transformed the commercial fitness and active longevity franchise sector. Serving as the Chief Operating Officer of Alloy Personal Training Franchise, Robb has combined rigorous operational discipline with empathetic human leadership, expanding the franchise into one of the fastest-growing and most respected concepts in health and wellness.

Robb recognized that the modern fitness landscape was leaving a crucial demographic behind: active adults aged 45 and older seeking specialized, injury-free, functional personal training in an intimate, welcoming environment. Under her operational direction, Alloy developed proprietary training curricula, standard operating procedures, and customer retention systems designed specifically to cater to this high-value, underserved segment.

Her operational genius lies in her ability to demystify business ownership for franchisees. Robb spearheaded the creation of turnkey software integrations, marketing automation engines, and comprehensive staff training protocols that enable franchise owners—many of whom are first-time entrepreneurs—to achieve operational break-even rapidly while maintaining impeccable service consistency.

Beyond metrics and bottom-line expansion, Robb is deeply committed to mentoring female leaders in corporate franchising and fitness management. She frequently leads executive workshops on high-accountability organizational culture, emotional intelligence in management, and sustainable scaling strategies.

Through her steadfast commitment to operational excellence and client empowerment, Suzanne Robb continues to shape the future of health, active aging, and community-based fitness across the globe.`,
    imageUrl: '/images/leaders/suzanne-robb.jpg',
    quote: 'Operational resilience in health and wellness begins with empowering people to take ownership of their vitality and fostering authentic accountability.',
    featuredOnHome: true,
  },
  {
    id: 'khalid-turk',
    name: 'Khalid Turk',
    slug: 'khalid-turk',
    role: 'Founder & Chief Healthcare Technology Officer',
    organization: 'ExecPresence.Online',
    badge: 'HEALTHCARE IT TITAN',
    bio: `Khalid Turk is an internationally recognized healthcare information technology executive, digital strategist, and founder of ExecPresence.Online. With more than two decades of senior executive leadership spearheading digital health transformations for major regional healthcare systems and public health institutions, Turk has been at the center of how clinical technology, data privacy, and executive communication intersect.

Throughout his career leading enterprise healthcare IT departments, Turk oversaw the successful implementation of next-generation electronic health record (EHR) ecosystems, cloud migrations, and robust cybersecurity defenses protecting mission-critical patient databases. His approach has consistently prioritized clinical workflow optimization, ensuring that technology serves as an accelerator for physician decision-making and patient care rather than an administrative burden.

Recognizing that many brilliant technical and clinical professionals struggle to communicate strategic vision to executive boardrooms and public stakeholders, Turk established ExecPresence.Online. The platform provides comprehensive executive coaching, media training, and leadership development, helping executives cultivate authentic, commanding, and empathetic digital leadership personas.

A visionary advocate for responsible artificial intelligence in clinical medicine, Turk actively advises healthcare startups and regulatory advisory panels on ethical AI governance, algorithmic transparency, and data equity. His balanced perspective ensures that technological progress never compromises human dignity or patient safety.

As healthcare and corporate enterprises navigate the challenges of the digital age, Khalid Turk remains a steadfast voice of authority, empowering leaders to lead with clarity, conviction, and technical wisdom.`,
    imageUrl: '/images/leaders/khalid-turk.jpg',
    quote: 'Executive presence in the digital age requires marrying profound technological empathy with decisive strategic clarity.',
    featuredOnHome: true,
  },
  {
    id: 'jordan-meinster',
    name: 'Jordan Meinster',
    slug: 'jordan-meinster',
    role: 'Chief Executive Officer & Serial Entrepreneur',
    organization: 'Pickleball Kingdom / Meinster Enterprises',
    badge: 'ENTERPRISE ICON',
    bio: `Jordan Meinster is a dynamic serial entrepreneur, venture builder, and Chief Executive Officer known for his uncanny ability to spot nascent consumer trends and scale them into market-leading commercial enterprises. As the driving force behind high-growth ventures across sports, recreational real estate, and consumer lifestyle franchises, Meinster represents the vanguard of modern iconic CEOs.

Capitalizing on the explosive nationwide popularity of racquet sports, Meinster has orchestrated the rapid expansion of state-of-the-art indoor athletic clubs and sports franchises. By conceptualizing climate-controlled athletic facilities paired with premium hospitality, digital scoring integration, and community leagues, he transformed a casual recreational pastime into a premier lifestyle destination.

Meinster's leadership methodology is anchored in aggressive operational execution combined with conservative financial stewardship. He champions unit-level profitability, rigorous site selection algorithms, and deep community integration, ensuring that every venture delivers sustainable long-term value to franchise partners and municipal stakeholders.

A gifted motivator and corporate communicator, Meinster frequently speaks at national entrepreneurship summits on scaling franchise systems, negotiating prime commercial real estate leases, and building sticky consumer brands in competitive markets.

Jordan Meinster continues to expand his investment portfolio into sports technology, wellness real estate, and digital entertainment, proving that visionary leadership combined with relentless execution is the ultimate recipe for business longevity.`,
    imageUrl: '/images/leaders/jordan-meinster.jpg',
    quote: 'True entrepreneurial vision is the ability to navigate macroeconomic ambiguity while maintaining absolute conviction in your operational thesis.',
    featuredOnHome: true,
  },
  {
    id: 'shannon-yerkic',
    name: 'Shannon Yerkic',
    slug: 'shannon-yerkic',
    role: 'Executive Leader & Educational Innovator',
    organization: 'Global Learning Solutions',
    badge: 'EDUCATION PIONEER',
    bio: `Shannon Yerkic is a passionate educational leader, curriculum strategist, and organizational reformer dedicated to revolutionizing educational delivery models worldwide. With a rich background in educational administration, pedagogical innovation, and institutional leadership, Yerkic has been instrumental in bridging the gap between traditional classroom instruction and modern experiential learning.

Yerkic recognized early in his career that legacy industrial-era education models were failing to prepare students for the rapid technological shifts of the modern knowledge economy. In response, he spearheaded the implementation of project-based, collaborative curricula that emphasize critical inquiry, digital literacy, and adaptive problem-solving over rote memorization.

Under his guidance, educational institutions have embraced personalized learning pathways powered by adaptive educational technologies. These systems allow educators to identify student learning deficits in real time, customize intervention strategies, and foster an environment where every learner can achieve their full cognitive and creative potential.

A champion of educational equity, Yerkic has partnered with non-profit foundations, municipal school districts, and corporate sponsors to expand access to high-quality STEM education and vocational mentorship programs for underserved student populations.

Shannon Yerkic's visionary stewardship continues to reshape the educational landscape, empowering educators, students, and institutional leaders to build a brighter, more inclusive intellectual future.`,
    imageUrl: '/images/leaders/shannon-yerkic.jpg',
    quote: 'Transforming modern education requires breaking down the barriers between curriculum design, human connection, and real-world application.',
    featuredOnHome: true,
  },
  {
    id: 'shabnam-akrami',
    name: 'Shabnam Akrami',
    slug: 'shabnam-akrami',
    role: 'Managing Partner & Legal Technologist',
    organization: 'Akrami & Associates',
    badge: 'LEGAL SERVICES INNOVATOR',
    bio: `Shabnam Akrami is an esteemed legal practitioner, managing partner, and legal technology pioneer celebrated for revolutionizing immigration law and international cross-border legal advisory services. As the founder of Akrami & Associates, she has built one of North America's most respected boutique legal firms, guiding thousands of families, entrepreneurs, and global corporations through intricate international regulatory frameworks.

Akrami was among the first legal managing partners to recognize how legal technology could democratize access to top-tier legal counsel. She pioneered cloud-based case management platforms, encrypted client portals, and algorithmic visa eligibility assessments that significantly reduced case turnaround times and minimized administrative friction for international clients.

Despite her embrace of digital efficiency, Akrami's legal practice remains grounded in deep human empathy and uncompromising ethical standards. She frequently handles high-stakes corporate relocations, humanitarian immigration appeals, and complex citizenship litigations, earning widespread acclaim for her fierce advocacy and thorough legal preparation.

An active mentor to young women entering the legal profession, Akrami regularly conducts masterclasses on legal practice management, international migration law, and ethical client advocacy. Her thought leadership articles are frequently featured in prominent legal journals and international business media.

Shabnam Akrami continues to push the boundaries of modern legal practice, proving that innovation and compassionate advocacy can redefine the justice system for a connected, globalized world.`,
    imageUrl: '/images/leaders/shabnam-akrami.jpg',
    quote: 'Innovation in the legal sector is fundamentally about expanding access, elevating integrity, and navigating international complexities with empathy.',
    featuredOnHome: true,
  },
  {
    id: 'aanchal-gupta',
    name: 'Aanchal Gupta',
    slug: 'aanchal-gupta',
    role: 'Founder',
    organization: 'Agents Stack',
    badge: 'AI & AGENTIC TECH',
    bio: `Aanchal Gupta is the Founder of Agents Stack, a pioneering technology enterprise at the forefront of the agentic artificial intelligence revolution. With a deep technical background in distributed systems, autonomous multi-agent orchestration, and enterprise software engineering, Gupta is architecting the cognitive infrastructure required for autonomous workflows in modern organizations.

Recognizing that generative AI was constrained by single-prompt stateless interactions, Gupta founded Agents Stack to enable autonomous agents that can plan, reason, integrate with existing enterprise toolchains, and execute complex multi-step objectives deterministically. Under her technical leadership, the platform provides Fortune 500 corporations and fast-scaling tech companies with secure, verifiable frameworks for deploying agentic fleets across engineering, customer operations, and financial auditing.

Gupta is an outspoken advocate for deterministic reliability, ethical guardrails, and transparency in autonomous AI systems, regularly advising founders and engineering leaders on building robust, fault-tolerant cognitive architectures.`,
    imageUrl: 'https://cdn.sanity.io/images/75rd7yks/production/5aca253a673391df4235d2f46f9160a6dcef0469-1200x800.jpg',
    quote: 'The future of enterprise software is not manual execution—it is intelligent agentic orchestration built on trust, safety, and deterministic precision.',
    featuredOnHome: true,
  },
]


export const HERO_FEATURE_DATA: ArticleItem = {
  id: 'hero-1',
  title: 'THE ARCHITECTS OF TOMORROW',
  slug: 'architects-of-tomorrow',
  subtitle: 'Leaders reshaping business, technology and human potential.',
  excerpt: 'Across boardroom corridors, research laboratories, and decentralized ecosystems, a vanguard of multidisciplinary visionaries is redefining what it means to build enduring enterprises in the twenty-first century.',
  category: 'FEATURE STORY',
  categorySlug: 'leadership',
  readingTimeMinutes: 8,
  publishedAt: '08 SEP 2026',
  imageUrl: '/images/hero-manhattan.jpg',
  author: {
    name: 'Julian Vance',
    role: 'Editor-in-Chief',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
}

export const HERO_RAIL_DATA: ArticleItem[] = [
  {
    id: 'rail-1',
    title: 'THE ARCHITECTS OF TOMORROW',
    slug: 'architects-of-tomorrow',
    category: 'Leadership',
    readingTimeMinutes: 8,
    publishedAt: '08 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    trendingRank: '01',
  },
  {
    id: 'rail-2',
    title: 'THE NEW ERA OF WELLNESS',
    slug: 'the-new-era-of-wellness',
    category: 'Healthcare',
    readingTimeMinutes: 6,
    publishedAt: '07 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    trendingRank: '02',
  },
  {
    id: 'rail-3',
    title: 'BUILDING BEYOND BORDERS',
    slug: 'building-beyond-borders',
    category: 'Entrepreneurship',
    readingTimeMinutes: 5,
    publishedAt: '06 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    trendingRank: '03',
  },
  {
    id: 'rail-4',
    title: 'THE FUTURE OF CAPITAL',
    slug: 'the-future-of-capital',
    category: 'Finance',
    readingTimeMinutes: 7,
    publishedAt: '05 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    trendingRank: '04',
  },
  {
    id: 'rail-5',
    title: 'INNOVATION WITHOUT LIMITS',
    slug: 'innovation-without-limits',
    category: 'Technology',
    readingTimeMinutes: 6,
    publishedAt: '04 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    trendingRank: '05',
  },
]

export const EDITORS_PRIMARY_DATA: ArticleItem[] = [
  {
    id: 'ed-1',
    title: 'Redefining Luxury Living: The New Real Estate Wave',
    slug: 'redefining-luxury-living-the-new-real-estate-wave',
    excerpt: 'Architectural biophilia and off-grid sanctuary homes are transforming prime global real estate investments.',
    category: 'REAL ESTATE',
    readingTimeMinutes: 8,
    publishedAt: '08 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'ed-2',
    title: 'The Mindset Shift Every Leader Needs',
    slug: 'the-mindset-shift-every-leader-needs',
    excerpt: 'In complex operating environments, humility and agility outpace rigid top-down command frameworks.',
    category: 'LEADERSHIP',
    readingTimeMinutes: 6,
    publishedAt: '06 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'ed-3',
    title: 'Why Wellness Is The New Wealth',
    slug: 'why-wellness-is-the-new-wealth',
    excerpt: 'High-performing founders are treating biological longevity and cognitive health as their ultimate portfolio assets.',
    category: 'WELLNESS',
    readingTimeMinutes: 5,
    publishedAt: '04 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop',
  },
]

export const EDITORS_COMPACT_DATA: ArticleItem[] = [
  {
    id: 'ed-c1',
    title: 'AI Beyond the Hype: What Actually Matters',
    slug: 'ai-beyond-the-hype-what-actually-matters',
    category: 'TECHNOLOGY',
    publishedAt: '03 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ed-c2',
    title: 'The New Rules of Modern Finance',
    slug: 'the-new-rules-of-modern-finance',
    category: 'FINANCE',
    publishedAt: '02 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'ed-c3',
    title: 'Sustainable Growth in Uncertain Times',
    slug: 'sustainable-growth-in-uncertain-times',
    category: 'BUSINESS',
    publishedAt: '01 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
  },
]

export const COVER_STORY_DATA: CoverStoryData = {
  issueTitle: 'SPOTLIGHT EXCLUSIVE COVER STORY',
  personName: 'Ranjan Mahtani',
  tagline: 'Disruption is the courage to reconstruct legacy manufacturing into an eco-conscious, technologically agile ecosystem.',
  designations: ['FOUNDER & EXECUTIVE CHAIRMAN', 'EPIC GROUP', 'GLOBAL DISRUPTOR'],
  organization: 'Epic Group',
  storySlug: 'ranjan-mahtani',
  personPortraitUrl: '/images/leaders/ranjan-mahtani.jpg',
  magazineCoverUrl: 'https://cdn.sanity.io/images/75rd7yks/production/642213a9c30cd1497c2494ffb7a2d862e970fd66-2400x3150.jpg',
  signatureText: 'Ranjan Mahtani',
}


export const INDUSTRIES_DATA: IndustryItem[] = [
  { id: 'ind-1', number: '01', name: 'TECH / AI', slug: 'tech-ai', articleCount: 14, iconName: 'Cpu' },
  { id: 'ind-2', number: '02', name: 'AUTOMOBILE', slug: 'automobile', articleCount: 12, iconName: 'Car' },
  { id: 'ind-3', number: '03', name: 'MANUFACTURING', slug: 'manufacturing', articleCount: 15, iconName: 'Building2' },
  { id: 'ind-4', number: '04', name: 'LEGAL', slug: 'legal', articleCount: 10, iconName: 'Briefcase' },
]

export const LATEST_NEWS_DATA = [
  { time: '09:42', title: 'Global supply chains adapt to next-generation robotics', category: 'MANUFACTURING', slug: 'smart-manufacturing-tech' },
  { time: '09:10', title: 'Generative AI deployment accelerates across enterprise platforms', category: 'TECH / AI', slug: 'enterprise-ai-deployment' },
  { time: '08:51', title: 'Electric vehicle battery platforms scale across global markets', category: 'AUTOMOBILE', slug: 'autonomous-vehicles-move-closer-mainstream-adoption' },
  { time: '08:32', title: 'Regulatory compliance standards shift for cross-border tech', category: 'LEGAL', slug: 'cross-border-legal-compliance' },
  { time: '08:10', title: 'Bio-assimilable polymers gain traction in global packaging', category: 'MANUFACTURING', slug: 'smart-manufacturing-tech' },
]

export const TRENDING_WEEK_DATA = [
  { rank: '01', title: 'The changing face of global entrepreneurship', slug: 'changing-face-of-global-entrepreneurship' },
  { rank: '02', title: 'Why manufacturing sustainability is becoming an enterprise priority', slug: 'why-wellness-business-priority' },
  { rank: '03', title: 'AI beyond the hype: What actually matters', slug: 'ai-beyond-the-hype' },
  { rank: '04', title: 'The new generation of business leaders', slug: 'new-generation-of-business-leaders' },
  { rank: '05', title: 'Building companies that last for decades', slug: 'building-companies-that-last' },
]

export const VOICES_DATA: VoiceItem[] = [
  {
    id: 'v-1',
    name: 'RANJAN MAHTANI',
    slug: 'ranjan-mahtani',
    role: 'Founder & Executive Chairman, Epic Group',
    quote: 'Disruption is the courage to reconstruct legacy manufacturing into an eco-conscious ecosystem.',
    avatarUrl: '/images/leaders/ranjan-mahtani.jpg',
  },
  {
    id: 'v-2',
    name: 'DR. SHOUMO MITRA',
    slug: 'dr-shoumo-mitra',
    role: 'Leading Crop Health R&D & Founder, VeGro Terra',
    quote: 'Biological intelligence and soil health are the frontier for securing global food sovereignty.',
    avatarUrl: '/images/leaders/dr-shoumo-mitra.jpg',
  },
  {
    id: 'v-3',
    name: 'SHABNAM AKRAMI',
    slug: 'shabnam-akrami',
    role: 'Managing Partner, Akrami & Associates',
    quote: 'Innovation in legal services is fundamentally about expanding access with integrity.',
    avatarUrl: '/images/leaders/shabnam-akrami.jpg',
  },
]

export const INSIGHTS_DATA: ArticleItem[] = [
  {
    id: 'ins-1',
    title: "What's Next for the Global Economy?",
    slug: 'whats-next-for-global-economy',
    category: 'GLOBAL ECONOMY',
    readingTimeMinutes: 10,
    publishedAt: '08 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-2',
    title: '5 Habits of Highly Effective Leaders',
    slug: '5-habits-of-highly-effective-leaders',
    category: 'LEADERSHIP',
    readingTimeMinutes: 7,
    publishedAt: '07 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-3',
    title: 'The Next Wave of Disruptive Innovation',
    slug: 'next-wave-disruptive-innovation',
    category: 'INNOVATION',
    readingTimeMinutes: 9,
    publishedAt: '06 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-4',
    title: 'The Business Case for Sustainable Future',
    slug: 'business-case-for-sustainable-future',
    category: 'SUSTAINABILITY',
    readingTimeMinutes: 8,
    publishedAt: '05 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ins-5',
    title: 'Building Future-Ready Organizations',
    slug: 'building-future-ready-organizations',
    category: 'DIGITAL TRANSFORMATION',
    readingTimeMinutes: 6,
    publishedAt: '04 SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
  },
]

export const PODCAST_DATA: PodcastData = {
  title: 'The Future of Work & Leadership',
  guestName: 'Anjali Mehta',
  guestRole: 'CHRO, InnovateX',
  duration: '35:20 MIN',
  guestPhotoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
  audioUrl: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg',
}

export const EVENT_DATA: EventData = {
  title: 'GLOBAL BUSINESS LEADERS SUMMIT 2026',
  subtitle: 'The Future of Business, Leadership and Innovation',
  day: '15',
  month: 'OCT',
  location: 'Dubai, UAE',
  bgImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
}

export const VIDEO_DATA: VideoData = {
  title: 'Building a Purpose-Driven Business in the Modern World',
  duration: '05:49 MIN',
  thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
}

export interface PopularInsight {
  rank: string
  title: string
  slug: string
  readingTime: string
}

export interface FormatInsight {
  title: string
  description: string
  count: string
  iconName: string
  href: string
}

export const POPULAR_INSIGHTS: PopularInsight[] = [
  {
    rank: '01',
    title: 'Why Human Skills Matter More Than Ever',
    slug: 'why-human-skills-matter-more-than-ever',
    readingTime: '5 Min Read',
  },
  {
    rank: '02',
    title: 'The Rise of AI-Native Businesses',
    slug: 'the-rise-of-ai-native-businesses',
    readingTime: '6 Min Read',
  },
  {
    rank: '03',
    title: 'Sustainability as a Growth Strategy',
    slug: 'sustainability-as-a-growth-strategy',
    readingTime: '5 Min Read',
  },
  {
    rank: '04',
    title: 'Redefining Leadership in a Hybrid World',
    slug: 'redefining-leadership-in-a-hybrid-world',
    readingTime: '7 Min Read',
  },
  {
    rank: '05',
    title: 'The Future of Global Talent',
    slug: 'the-future-of-global-talent',
    readingTime: '6 Min Read',
  },
]

export const LATEST_INSIGHTS_GRID: ArticleItem[] = [
  {
    id: 'lat-1',
    title: 'AI Beyond the Hype: Real-World Impact',
    slug: 'ai-beyond-the-hype-real-world-impact',
    category: 'TECHNOLOGY',
    categorySlug: 'technology',
    publishedAt: 'Sep 01, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-2',
    title: 'How Great Leaders Build Great Cultures',
    slug: 'how-great-leaders-build-great-cultures',
    category: 'LEADERSHIP',
    categorySlug: 'leadership',
    publishedAt: 'Aug 30, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-3',
    title: 'A Greener Future Through Innovation',
    slug: 'a-greener-future-through-innovation',
    category: 'SUSTAINABILITY',
    categorySlug: 'sustainability',
    publishedAt: 'Aug 28, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-4',
    title: 'Technology Transforming Patient Care',
    slug: 'technology-transforming-patient-care',
    category: 'HEALTHCARE',
    categorySlug: 'healthcare',
    publishedAt: 'Aug 25, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-5',
    title: 'Global Markets: Risks and Opportunities',
    slug: 'global-markets-risks-and-opportunities',
    category: 'ECONOMY',
    categorySlug: 'economy',
    publishedAt: 'Aug 24, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-6',
    title: 'The Future of Urban Living',
    slug: 'the-future-of-urban-living',
    category: 'REAL ESTATE',
    categorySlug: 'real-estate',
    publishedAt: 'Aug 22, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-7',
    title: 'Redefining Productivity in a Hybrid Era',
    slug: 'redefining-productivity-in-a-hybrid-era',
    category: 'WORK & CULTURE',
    categorySlug: 'work-culture',
    publishedAt: 'Aug 20, 2026',
    readingTimeMinutes: 6,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lat-8',
    title: 'From Ideas to Impact: The Startup Mindset',
    slug: 'from-ideas-to-impact-the-startup-mindset',
    category: 'INNOVATION',
    categorySlug: 'innovation',
    publishedAt: 'Aug 18, 2026',
    readingTimeMinutes: 5,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  },
]

export const INSIGHTS_FORMATS: FormatInsight[] = [
  {
    title: 'In-Depth Articles',
    description: 'Long-form analysis and research',
    count: '120+ Articles',
    iconName: 'FileText',
    href: '/category/insights',
  },
  {
    title: 'Expert Interviews',
    description: 'Conversations with industry leaders',
    count: '50+ Interviews',
    iconName: 'Mic',
    href: '/leaders',
  },
  {
    title: 'Opinion Pieces',
    description: 'Fresh perspectives and bold ideas',
    count: '90+ Articles',
    iconName: 'MessageSquare',
    href: '/features',
  },
  {
    title: 'Data & Trends',
    description: 'Insights backed by numbers',
    count: '70+ Articles',
    iconName: 'BarChart3',
    href: '/category/insights',
  },
  {
    title: 'Case Studies',
    description: 'Real-world stories of success and learning',
    count: '60+ Articles',
    iconName: 'Briefcase',
    href: '/category/business-strategy',
  },
  {
    title: 'Video Insights',
    description: 'Expert conversations and visual stories',
    count: '50+ Videos',
    iconName: 'Video',
    href: '/multimedia/videos',
  },
]

