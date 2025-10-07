import React, { useEffect, useState } from 'react';
import { client, queries, urlFor, SanityArticle } from '../sanityClient';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface NewsSectionProps {
  onNavigate?: (page: string, slug?: string) => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const [articles, setArticles] = useState<SanityArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch exactly 6 articles
        const data = await client.fetch(queries.latestArticles(6));
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
    return '/news-default-2.jpg'; // Fallback image
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

  if (loading) {
    return (
      <section className="news-section animate-fade-in-up animate-delay-5">
        <div className="news-container">
          <div className="news-header">
            <h2 className="news-title">Latest news</h2>
          </div>
          <div className="news-grid">
            <p>Loading articles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="news-section animate-fade-in-up animate-delay-5">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title animate-fade-in-up animate-delay-1">Latest news</h2>
          <button 
            className="view-all-link animate-fade-in animate-delay-2"
            onClick={() => onNavigate && onNavigate('news')}
          >
            <span className="view-all-text">View all</span>
            <ArrowForwardIcon className="view-all-arrow" />
          </button>
        </div>
        
        <div className="news-grid">
          {articles.map((article, index) => {
            const categoryTitle = getCategoryTitle(article.categories);
            
            return (
              <button 
                key={article._id} 
                className={`news-card news-card-clickable animate-fade-in-up animate-delay-${index + 3}`}
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
    </section>
  );
};

export default NewsSection;