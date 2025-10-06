import React, { useEffect, useState } from 'react';
import { client, queries, urlFor, SanityArticle } from '../sanityClient';
import { PortableText } from '@portabletext/react';

interface ArticlePageProps {
  slug: string;
  onNavigate?: (page: string, slug?: string) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ slug, onNavigate }) => {
  const [article, setArticle] = useState<SanityArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await client.fetch(queries.articleBySlug(slug));
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getAuthorName = (author: SanityArticle['author']): string | undefined => {
    if (!author) return undefined;
    if (typeof author === 'string') return author;
    return author.name;
  };

  const getCategoryData = (categories: SanityArticle['categories']) => {
    if (!categories || categories.length === 0) return [];
    
    // Handle both string[] and object[] formats
    if (typeof categories[0] === 'string') {
      return categories.map(cat => ({ title: cat as string, color: '#e6f2ff' }));
    } else {
      return categories as Array<{ title: string; color?: string }>;
    }
  };

  if (loading) {
    return (
      <div className="article-page">
        <div className="article-container">
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-container">
          <h1>Article not found</h1>
        </div>
      </div>
    );
  }

  const authorName = getAuthorName(article.author);
  const categories = getCategoryData(article.categories);
  const authorObj = typeof article.author === 'object' ? article.author : null;

  return (
    <div className="article-page">
      <div className="article-container">
        <article className="article-content">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="article-categories">
              {categories.map((cat, i) => (
                <span 
                  key={i} 
                  className="category-badge"
                  style={{ backgroundColor: cat.color || '#007bff' }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="article-title">{article.title}</h1>

          {/* Meta */}
          <div className="article-meta">
            {authorName && (
              <div className="author-info">
                {authorObj?.image && (
                  <img 
                    src={urlFor(authorObj.image).width(50).height(50).url()} 
                    alt={authorName}
                    className="author-avatar"
                  />
                )}
                <span className="author-name">{authorName}</span>
              </div>
            )}
            <span className="article-date">{formatDate(article.publishedAt)}</span>
          </div>

          {/* Main Image */}
          {article.mainImage && (
            <div className="article-hero-image">
              <img 
                src={urlFor(article.mainImage).width(1200).url()} 
                alt={article.mainImage.alt || article.title}
              />
            </div>
          )}

          {/* Excerpt */}
          {article.excerpt && (
            <p className="article-excerpt">{article.excerpt}</p>
          )}

          {/* Body Content */}
          {article.body && (
            <div className="article-body">
              <PortableText 
                value={article.body}
                components={{
                  block: {
                    h2: ({children}) => <h2 className="article-heading">{children}</h2>,
                    h3: ({children}) => <h3 className="article-subheading">{children}</h3>,
                    normal: ({children}) => <p className="article-paragraph">{children}</p>,
                  },
                  types: {
                    image: ({value}) => (
                      <img 
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || 'Article image'}
                        className="article-inline-image"
                      />
                    ),
                  },
                }}
              />
            </div>
          )}

          {/* External URL if exists */}
          {article.externalUrl && (
            <div className="article-external">
              <a 
                href={article.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                Read full article →
              </a>
            </div>
          )}

          {/* Author Bio */}
          {authorObj?.bio && (
            <div className="author-bio-section">
              <h3>About the Author</h3>
              <div className="author-bio">
                {authorObj.image && (
                  <img 
                    src={urlFor(authorObj.image).width(100).height(100).url()} 
                    alt={authorName || 'Author'}
                    className="author-bio-image"
                  />
                )}
                <div>
                  <h4>{authorName}</h4>
                  <p>{authorObj.bio}</p>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;