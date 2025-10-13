import React from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';

const HeroSection: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality here
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="animate-fade-in-up animate-delay-1">
            <Logo />
          </div>
          <h1 className="hero-tagline animate-fade-in-up animate-delay-2">
            Infrastructure for private market communication
          </h1>
        </div>
        
        <div className="hero-search animate-fade-in-up animate-delay-3">
          <SearchInput 
            placeholder="Example question"
            onSearch={handleSearch}
          />
          {/* <div className="animate-fade-in-up animate-delay-4">
            <ExampleQuestions onQuestionClick={handleQuestionClick} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
