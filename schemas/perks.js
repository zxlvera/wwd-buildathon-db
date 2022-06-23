export default {
  name: 'perks',
  type: 'object',
  title: 'Sponsor Perks',
  fields: [
    {
      name: 'perks',
      title: 'Perks',
      type: 'string',
    },
    {
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          { title: 'Platinum', value: 'platinum' },
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
  ]
};


