import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ahyqwir9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Helper to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Type definitions for your Sanity data
export interface SanityArticle {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  publishedAt: string;
  featured?: boolean;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  body?: any[];
  author?: string | {
    name: string;
    image?: any;
    bio?: string;
  };
  categories?: string[] | Array<{
    title: string;
    color?: string;
  }>;
  externalUrl?: string;
}

// Queries
export const queries = {
  // Get latest N articles for homepage
  latestArticles: (limit: number = 6) => `
    *[_type == "article"] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      featured,
      mainImage,
      "author": author->name,
      "categories": categories[]->title
    }
  `,
  
  // Get all articles for news page
  allArticles: `
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      featured,
      mainImage,
      "author": author->name,
      "categories": categories[]->title
    }
  `,
  
  // Get single article by slug
  articleBySlug: (slug: string) => `
    *[_type == "article" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      featured,
      mainImage,
      body,
      externalUrl,
      "author": author->{name, image, bio},
      "categories": categories[]->{title, color}
    }
  `
};