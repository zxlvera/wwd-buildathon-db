import { MdPayment as icon } from 'react-icons/md'

export default {
  name: 'sponsorTierCopy',
  title: 'Sponsor Tier Copy',
  icon,
  type: 'document',
  fields: [
    {
      name: 'tier',
      title: 'Tier',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Reward',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Name it 1,2,3,4'
    },
  ],
  preview: {
    select: { title: 'tier', subtitle: 'reward' },
  },
}
