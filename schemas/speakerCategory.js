import { MdFace } from 'react-icons/md'

export default {
  name: 'speakerCategory',
  title: 'Speakers Category',
  type: 'document',
  icon: MdFace,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'paid',
      title: 'Paid',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: { title: 'category' },
  },
}
