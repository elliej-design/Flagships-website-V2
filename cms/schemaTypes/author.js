export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
        rows: 4
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'twitter',
        title: 'Twitter Handle',
        type: 'string'
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image'
      }
    }
  }