import React, { useEffect, useState } from 'react';
import { client, queries, urlFor, SanityArticle } from '../sanityClient';

interface NewsPageProps {
  onNavigate?: (page: string, slug?: string) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [articles, setArticles] = useState<SanityArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await client.fetch(queries.allArticles);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getImageUrl = (article: SanityArticle) => {
    if (article.mainImage) {
      return urlFor(article.mainImage).width(800).height(600).url();
    }
    return '/news-default-2.jpg';
  };

  const getCategoryTitle = (categories: SanityArticle['categories']): string | undefined => {
    if (!categories || categories.length === 0) return undefined;
    
    // Handle both string[] and object[] formats
    if (typeof categories[0] === 'string') {
      return categories[0];
    } else {
      return (categories[0] as { title: string }).title;
    }
  };

  const getAuthorName = (author: SanityArticle['author']): string | undefined => {
    if (!author) return undefined;
    
    if (typeof author === 'string') {
      return author;
    } else {
      return author.name;
    }
  };

  if (loading) {
    return (
      <div className="news-page">
        <div className="news-container">
          <h1 className="page-title">All News</h1>
          <p>Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-page">
      <div className="news-container">
        <div className="news-page-header">
          <h1 className="page-title">All News</h1>
        </div>

        <div className="news-grid">
          {articles.map((article) => {
            const categoryTitle = getCategoryTitle(article.categories);
            
            return (
              <button 
                key={article._id} 
                className="news-card news-card-clickable"
                onClick={() => onNavigate && onNavigate('article', article.slug.current)}
              >
                <div className="news-card-image">
                  <div className="news-image-overlay"></div>
                  <img 
                    src={getImageUrl(article)} 
                    alt={article.mainImage?.alt || article.title}
                    className="news-image"
                  />
                </div>
                <div className="news-card-content">
                  <h3 className="news-card-title">{article.title}</h3>
                  <div className="news-card-meta">
                    {categoryTitle && (
                      <span className="news-category">{categoryTitle}</span>
                    )}
                    <span className="news-date">{formatDate(article.publishedAt)}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;