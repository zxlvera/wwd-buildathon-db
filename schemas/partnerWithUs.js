import { MdBeachAccess as icon } from 'react-icons/md'

export default {
  name: 'partnerWithUs',
  title: 'Partner With Us',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      subtitle: 'description'
    }
  }
}
