import { MdStars as icon } from 'react-icons/md'

export default {
  name: 'coreMember',
  title: 'Core Members',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
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
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      media: 'image',
    },
    prepare(selection) {
      const { name, role, media } = selection
      return {
        title: name,
        subtitle: role,
        media,
      }
    },
  },
}
