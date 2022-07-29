import { MdFace } from 'react-icons/md'

export default {
  name: 'partnership',
  title: 'Partnerships',
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'paid',
      title: 'Paid',
      type: 'boolean',
    },
    {
      name: 'scale',
      title: 'Scale',
      type: 'boolean',
      description: 'Logo too wide, give a value below'
    },
    {
      name: 'width',
      title: 'width',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
}
