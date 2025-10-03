import React from 'react';

interface ResearchArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

const ResearchSection: React.FC = () => {
  const researchArticles: ResearchArticle[] = [
    {
      id: 1,
      title: "Toward understanding and preventing misalignment generalization",
      category: "Publication",
      date: "Jun 18, 2025",
      imageUrl: "/news-default-2.jpg"
    },
    {
      id: 2,
      title: "Introducing HealthBench",
      category: "Publication",
      date: "May 12, 2025",
      imageUrl: "/news-default-2.jpg"
    }
  ];

  return (
    <section className="research-section">
      <div className="research-container">
        <div className="research-header">
          <h2 className="research-title">Security</h2>
          <a href="#" className="research-view-all">View all</a>
        </div>
        
        <div className="research-grid">
          {researchArticles.map((article) => (
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
                <div className="research-card-meta">
                  <span className="research-category">{article.category}</span>
                  <span className="research-date">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
