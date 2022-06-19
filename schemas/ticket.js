import { MdLocalPlay as icon } from 'react-icons/md'

export default {
  name: 'ticket',
  title: 'Ticket',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pricing',
      title: 'Pricing',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'dateFrom',
      title: 'Date From',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'dateTill',
      title: 'Date Till',
      type: 'date',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      pricing: 'pricing',
      dateFrom: 'dateFrom',
      dateTill: 'dateTill'
    }, prepare(selection) {
      return {
        title: `${selection.title}, $${selection.pricing}`,
        subtitle: `${selection.dateFrom} to ${selection.dateTill}`
      }
    }
  }
}
