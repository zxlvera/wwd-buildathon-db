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
    },
    {
      name: 'paid',
      title: 'Paid',
      type: 'boolean',
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
}
