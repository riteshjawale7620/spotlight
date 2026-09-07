import { defineField, defineType } from 'sanity'

export const leader = defineType({
  name: 'leader',
  title: 'Executive Leader (Legacy Profile)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Portrait / Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Company / Organization',
      type: 'string',
    }),
    defineField({
      name: 'biography',
      title: 'Biography / Editorial Dossier',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'quote',
      title: 'Key Quote / Philosophy',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'badge',
      title: 'Badge / Industry Tag',
      type: 'string',
    }),
    defineField({
      name: 'isHallOfFame',
      title: 'Hall of Fame / Featured',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isGlobalIcon',
      title: 'Global Icon',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'profileImage',
    },
  },
})
