export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Resume Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: Rule => Rule.required(),
    },
    {
    name: 'updatedAt',
    title: 'Last Updated',
    type: 'date',
    options: {
        dateFormat: 'DD MMM YYYY',
    },
    validation: Rule => Rule.required(),
    },
  ],
}