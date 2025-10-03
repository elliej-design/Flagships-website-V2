import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface ArticleData {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  content: string;
  summary: string;
}

interface ArticlePageProps {
  article?: ArticleData;
  onNavigate?: (page: string) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onNavigate }) => {
  // Default article data if none provided
  const defaultArticle: ArticleData = {
    id: 1,
    title: "Executive Order: Democratizing Access to Alternative Assets for 401(k) Investors",
    category: "Policy",
    date: "Jun 18, 2025",
    author: "Flagships Team",
    readTime: "5 min read",
    imageUrl: "/news-default-2.jpg",
    summary: "A comprehensive look at the new executive order that aims to expand access to alternative investment opportunities for retirement savers.",
    content: `
      <p>The recent executive order represents a significant shift in how retirement savings can be invested, particularly for 401(k) participants who have traditionally been limited to more conventional investment options.</p>
      
      <h2>Key Changes</h2>
      <p>This new policy opens doors to alternative assets including private equity, real estate, and other non-traditional investments that were previously restricted for retirement accounts.</p>
      
      <h3>Impact on Investors</h3>
      <p>The democratization of alternative assets means that everyday investors can now access investment strategies that were once reserved for institutional investors and high-net-worth individuals.</p>
      
      <h2>Implementation Timeline</h2>
      <p>The changes are expected to roll out over the next 18 months, with pilot programs beginning in Q3 2025. Financial institutions are already preparing for the increased demand for alternative investment products.</p>
      
      <h3>Regulatory Considerations</h3>
      <p>While this opens new opportunities, it also brings additional complexity and risk considerations that investors should carefully evaluate before making allocation decisions.</p>
      
      <p>The long-term implications of this policy change could fundamentally reshape how Americans approach retirement planning and investment diversification.</p>
    `
  };

  const currentArticle = article || defaultArticle;

  return (
    <div className="app">
      <Header />
      <Sidebar onNavigate={onNavigate} />
      <main className="article-page">
        <div className="article-container">
          <article className="article-content">
            <header className="article-header">
              <div className="article-meta">
                <span className="article-category">{currentArticle.category}</span>
                <span className="article-date">{currentArticle.date}</span>
                <span className="article-read-time">{currentArticle.readTime}</span>
              </div>
              <h1 className="article-title">{currentArticle.title}</h1>
              <p className="article-summary">{currentArticle.summary}</p>
              <div className="article-author">
                <span>By {currentArticle.author}</span>
              </div>
            </header>
            
            <div className="article-image">
              <img 
                src={currentArticle.imageUrl} 
                alt={currentArticle.title}
                className="article-hero-image"
              />
            </div>
            
            <div 
              className="article-body"
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
