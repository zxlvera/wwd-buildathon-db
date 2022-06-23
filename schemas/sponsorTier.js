import { MdPayment as icon } from 'react-icons/md'

export default {
  name: 'sponsorTier',
  title: 'Sponsor Tier',
  icon,
  type: 'document',
  fields: [
    {
      name: 'tier',
      title: 'Tier',
      type: 'string',
    },
    {
      name: 'reward',
      title: 'Reward',
      type: 'number',
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
