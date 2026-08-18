export default {
  name: 'skillCategory',
  title: 'Skill Categories',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    },

    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Skill Name',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Skill Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}