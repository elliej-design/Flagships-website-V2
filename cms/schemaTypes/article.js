export default {
    name: 'article',
    title: 'Article',
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
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}]
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string'
          }
        ]
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        initialValue: () => new Date().toISOString()
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        rows: 4,
        description: 'Short summary of the article (for previews)'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative Text'
              }
            ]
          }
        ]
      },
      {
        name: 'featured',
        title: 'Featured Article',
        type: 'boolean',
        description: 'Show this article on the homepage',
        initialValue: false
      },
      {
        name: 'externalUrl',
        title: 'External URL',
        type: 'url',
        description: 'Link to original article (if sourced from elsewhere)'
      }
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage'
      },
      prepare(selection) {
        const {author} = selection
        return {
          ...selection,
          subtitle: author ? `by ${author}` : 'No author'
        }
      }
    }
  }