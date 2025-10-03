import React from 'react';

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

const NewsSection: React.FC = () => {
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Executive Order: Democratizing Access to Alternative Assets for 401(k) Investors",
      category: "Policy",
      date: "Jun 18, 2025",
      imageUrl: "/news-default-2.jpg"
    },
    {
      id: 2,
      title: "NYT: Wall Street Making Private Markets More Public",
      category: "News",
      date: "Jun 12, 2025",
      imageUrl: "/news-default-2.jpg"
    },
    {
      id: 3,
      title: "P&I: Apollo Pushes Access to Private Markets",
      category: "Industry",
      date: "Jun 9, 2025",
      imageUrl: "/news-default-2.jpg"
    },
    {
      id: 4,
      title: "NYT: Robinson Gets into Venture Capital",
      category: "Venture",
      date: "Jun 5, 2025",
      imageUrl: "/news-default-2.jpg"
    },
    {
      id: 5,
      title: "Trade Republic Partners With Apollo and EQT to Bring Private Markets to Retail Investors",
      category: "Partnership",
      date: "May 22, 2025",
      imageUrl: "/news-default-2.jpg"
    },
    {
      id: 6,
      title: "Goldman Sachs & T. Rowe Price: Alliance for Public-Private Investment Solutions",
      category: "Alliance",
      date: "May 21, 2025",
      imageUrl: "/news-default-2.jpg"
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="news-title">Latest news</h2>
          <a href="#" className="news-view-all">View all</a>
        </div>
        
        <div className="news-grid">
          {newsArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-card-image">
                <div className="news-image-overlay"></div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="news-image"
                />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">{article.title}</h3>
                <div className="news-card-meta">
                  <span className="news-category">{article.category}</span>
                  <span className="news-date">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
