import { MdComment as icon } from 'react-icons/md'

export default {
  name: 'aboutBuildathon',
  title: 'Buildathon Things',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      tags: 'tags'
    }, prepare(selection) {
      const { title, tags } = selection
      return {
        title: title,
        subtitle: tags[0]
      }
    }
  }
}
