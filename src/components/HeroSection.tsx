import React from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';
import ExampleQuestions from './ExampleQuestions';

const HeroSection: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality here
  };

  const handleQuestionClick = (question: string) => {
    console.log('Question clicked:', question);
    // Handle question click functionality here
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <Logo />
          <h1 className="hero-tagline">
            The new infrastructure for private market communication
          </h1>
        </div>
        
        <div className="hero-search">
          <SearchInput 
            placeholder="Example question"
            onSearch={handleSearch}
          />
          <ExampleQuestions onQuestionClick={handleQuestionClick} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
