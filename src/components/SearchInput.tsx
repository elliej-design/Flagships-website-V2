import React, { useState, useEffect } from 'react';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = "Example question", 
  onSearch 
}) => {
  const [query, setQuery] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const placeholderTexts = [
    "What is Flagships?",
    "How does private market communication work?",
    "What are the key features?",
    "How to get started?",
    "What are the benefits?",
    "How does it compare to competitors?"
  ];

  useEffect(() => {
    setCurrentPlaceholder(placeholderTexts[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
        setCurrentPlaceholder(placeholderTexts[(placeholderIndex + 1) % placeholderTexts.length]);
        setIsAnimating(false);
      }, 150); // Half of the animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholderIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="search-container">
      <div className="search-background"></div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <div className={`placeholder-text ${isAnimating ? 'animating' : ''}`}>
            {currentPlaceholder}
          </div>
        </div>
        <button type="submit" className="search-button">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path
              d="M13.91 15.3L10.13 11.52C9.89 11.28 9.89 10.88 10.13 10.64L13.91 6.86C14.15 6.62 14.55 6.62 14.79 6.86L15.3 7.37C15.54 7.61 15.54 8.01 15.3 8.25L11.52 12.03C11.28 12.27 11.28 12.67 11.52 12.91L15.3 16.69C15.54 16.93 15.54 17.33 15.3 17.57L14.79 18.08C14.55 18.32 14.15 18.32 13.91 18.08L13.91 15.3Z"
              fill="#898989"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
