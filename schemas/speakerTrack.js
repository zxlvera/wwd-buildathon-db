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
  ],
  preview: {
    select: {
      title: 'title',
      speaker: 'speaker.name'
    }, prepare(selection) {
      const { title, speaker } = selection
      return {
        title: title,
        subtitle: speaker
      }
    }
  }
}
