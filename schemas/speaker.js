import { MdFace } from 'react-icons/md'

export default {
  name: 'speaker',
  title: 'Speakers',
  type: 'document',
  icon: MdFace,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'descriptions',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'website',
          title: 'Website',
          type: 'url'
        },
      ]
    },
    {
      name: 'speakerCategory',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'speakerCategory' }],
      description: 'Please create speaker categories in Speakers Category',
      options: {
        disableNew: true
      },
      validation: Rule => Rule.required(),
      initialValue: {
          _ref: "969c1d42-dcf0-4849-a472-a2964ff1bfbc",
          _type: "reference"
      }
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
}
