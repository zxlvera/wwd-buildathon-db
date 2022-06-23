import { MdInfoOutline as icon } from 'react-icons/md'

export default {
  name: 'otherNews',
  title: 'Other News',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
    },
    {
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'highlight'
    }
  }
}
