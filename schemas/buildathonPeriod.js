import { MdSchedule as icon } from 'react-icons/md';

export default {
  name: 'buildathonPeriod',
  title: 'Buildathon Dates',
  type: 'document',
  icon,
  fields: [
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string',
    },
    {
      name: 'remarks',
      title: 'Remarks',
      type: 'string',
      description: 'Timezone?'
    },
  ],
  preview: {
    select: {
      title: 'startDate',
    }
  }
}
