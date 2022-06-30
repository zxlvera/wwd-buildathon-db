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
      description: 'Please use "Firstname Lastname" format',
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
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
}
