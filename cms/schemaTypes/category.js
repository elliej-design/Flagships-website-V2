export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
        description: 'Hex color for category badge (e.g., #FF5733)',
        validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
          name: 'hex color',
          invert: false
        }).error('Must be a valid hex color (e.g., #FF5733)')
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description'
      }
    }
  }