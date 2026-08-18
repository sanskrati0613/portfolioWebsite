export default {
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'FullStack', value: 'fullstack' },
          { title: 'React', value: 'react' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'AI / ML', value: 'ai' },
          { title: 'IoT', value: 'iot' },
        ],
      },
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    },

    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    },

    {
      name: 'github',
      title: 'GitHub Repository',
      type: 'url',
    },

    {
      name: 'live',
      title: 'Live Demo',
      type: 'url',
    },

    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: true,
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
    },
  },
}