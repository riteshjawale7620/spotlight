import { defineField, defineType } from 'sanity'

export const webprofile = defineType({
  name: 'webprofile',
  title: 'Executive / Leader Profile',
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
      name: 'role',
      title: 'Role / Designation (e.g. Founder & CEO, Managing Partner)',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Company / Organization',
      type: 'string',
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
      name: 'biography',
      title: 'Biography / Editorial Dossier',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'featuredOnHome',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'quote',
      title: 'Key Quote / Philosophy',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'badge',
      title: 'Industry / Focus Badge (e.g. WELLNESS, FINTECH, AI, LEGAL TECH)',
      type: 'string',
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
