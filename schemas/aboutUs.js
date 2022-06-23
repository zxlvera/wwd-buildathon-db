import { MdComment as icon } from 'react-icons/md'

export default {
  name: 'aboutUs',
  title: 'About Pages',
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
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
  }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      tags: 'tags'
    }
  }, prepare(selection) {
    const { title, subtitle, tags } = selection
      return {
        title: `${tags} - ${title}`,
        subtitle: subtitle
      }
    }
}
