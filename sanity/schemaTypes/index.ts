import { type SchemaTypeDefinition } from 'sanity'
import { blockContent } from './blockContent'
import { category } from './category'
import { author } from './author'
import { article } from './article'
import { issue } from './issue'
import { magazine } from './magazine'
import { podcast, summitEvent } from './podcast'
import { webprofile } from './webprofile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, author, article, issue, magazine, podcast, summitEvent, webprofile],
}

