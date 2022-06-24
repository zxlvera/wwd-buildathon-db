import { MdComment as icon } from 'react-icons/md'

export default {
  name: 'faq',
  title: 'FAQ',
  icon,
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Name it 1,2,3,4'
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'description',
    }
  }
}
