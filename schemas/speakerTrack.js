import { MdEventSeat as icon } from 'react-icons/md'

export default {
  name: 'speakerTrack',
  title: 'Speaker Track',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Speaker Track',
      type: 'string',
    },
    {
      name: 'dateTime',
      title: 'Date Time',
      type: 'datetime',
      description: 'Time shown is in UTC/GMT+0',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{ type: 'speaker' }],
    },
    {
      name: 'speakerCategory',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'speakerCategory' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'speakerCategory.category',
      speaker: 'speaker.name'
    }, prepare(selection) {
      const { title, category, speaker } = selection
      return {
        title: `${category} - ${title}`,
        subtitle: speaker
      }
    }
  }
}
