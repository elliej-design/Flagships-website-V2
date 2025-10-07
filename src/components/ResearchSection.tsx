import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ResearchArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface ResearchSectionProps {
  onNavigate?: (page: string) => void;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ onNavigate }) => {
  const researchArticles: ResearchArticle[] = [
    {
      id: 1,
      title: "Security & Trust",
      category: "Publication",
      date: "Jun 18, 2025",
      imageUrl: "/security image.png"
    },
    {
      id: 2,
      title: "Flagships Dictionary",
      category: "Publication",
      date: "May 12, 2025",
      imageUrl: "/news-default-2.jpg"
    }
  ];

  return (
    <section className="research-section">
      <div className="research-container">
        <div className="research-header">
          <h2 className="research-title">About Flagships</h2>
          <button className="view-all-link">
            <span className="view-all-text">View all</span>
            <ArrowForwardIcon className="view-all-arrow" />
          </button>
        </div>
        
        <div className="research-grid">
          {researchArticles.map((article) => {
            const isFirstArticle = article.id === 1;
            const isSecondArticle = article.id === 2;

            if (isFirstArticle) {
              return (
                <button
                  key={article.id}
                  className="research-card research-card-clickable"
                  onClick={() => onNavigate && onNavigate('security')}
                >
                  <div className="research-card-image">
                    <div className="research-image-overlay"></div>
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="research-image"
                    />
                  </div>
                  <div className="research-card-content">
                    <h3 className="research-card-title">{article.title}</h3>
                  </div>
                </button>
              );
            }

            if (isSecondArticle) {
              return (
                <button
                  key={article.id}
                  className="research-card research-card-clickable"
                  onClick={() => onNavigate && onNavigate('dictionary')}
                >
                  <div className="research-card-image">
                    <div className="research-image-overlay"></div>
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="research-image"
                    />
                  </div>
                  <div className="research-card-content">
                    <h3 className="research-card-title">{article.title}</h3>
                  </div>
                </button>
              );
            }

            return (
              <article key={article.id} className="research-card">
                <div className="research-card-image">
                  <div className="research-image-overlay"></div>
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="research-image"
                  />
                </div>
                <div className="research-card-content">
                  <h3 className="research-card-title">{article.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
