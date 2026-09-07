import { defineField, defineType } from 'sanity'

export const magazine = defineType({
  name: 'magazine',
  title: 'Magazine',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Magazine Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuuLink',
      title: 'Digital Edition / Flipbook URL (PubHTML5 or Issuu)',
      type: 'url',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords / Featured Leader',
      type: 'string',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentCover',
      title: 'Active Homepage Cover Story?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tagline',
      title: 'Cover Story Tagline (e.g. Building the Future of Human Wellness)',
      type: 'string',
    }),
    defineField({
      name: 'designations',
      title: 'Cover Badges / Designations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
