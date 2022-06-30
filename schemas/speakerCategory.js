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
    }
  ],
  preview: {
    select: { title: 'category' },
  },
}
