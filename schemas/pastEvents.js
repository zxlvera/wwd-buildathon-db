import { MdBeachAccess as icon } from 'react-icons/md'

export default {
  name: 'pastEvents',
  title: 'Past Events',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'description'
    }
  }
}
