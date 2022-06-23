import { MdEventSeat as icon } from 'react-icons/md'

export default {
  name: 'sponsorPerks',
  title: 'Sponsor Perks',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Perks',
      type: 'string',
    },
    {
      name: 'sponsorTier',
      title: 'Tiers applicable',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Platinum', value: 'platinum'},
          {title: 'Gold', value: 'gold'},
          {title: 'Silver', value: 'silver'},
          {title: 'Bronze', value: 'bronze'}
        ]
      }
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
      title: 'title',
      subtitle: 'description'
    }
  }
}
