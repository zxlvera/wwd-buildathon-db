import { MdSchedule as icon } from 'react-icons/md';

export default {
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  icon,
  fields: [
    {
      name: 'activity',
      title: 'Activity',
      type: 'string',
    },
    {
      name: 'dateTime',
      title: 'Date Time',
      type: 'datetime',
      description: 'Time shown is in UTC',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{ type: 'speaker' }, { type: 'coreMember' }]
    },
  ],
  preview: {
    select: {
      activity: 'activity',
      dateTime: 'dateTime',
      speaker: 'speaker.name'
    },
    prepare(selection) {
      const { activity, dateTime, speaker } = selection
      const date = new Date(dateTime.slice(0, -1))
      return {
        title: `${activity} - ${speaker}`,
        subtitle: `${date} `,
      }
    },
  },
}
