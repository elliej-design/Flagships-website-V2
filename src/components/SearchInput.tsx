import React, { useState, useEffect } from 'react';
import { questionAnswers, QuestionAnswer } from '../data/questionAnswers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = "Example question"
}) => {
  const [query, setQuery] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<QuestionAnswer | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const placeholderTexts = questionAnswers.map(qa => qa.question);

  useEffect(() => {
    setCurrentPlaceholder(placeholderTexts[0]);
  }, []);

  useEffect(() => {
    // Don't animate when answer is visible
    if (isAnswerVisible) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
        setCurrentPlaceholder(placeholderTexts[(placeholderIndex + 1) % placeholderTexts.length]);
        setIsAnimating(false);
      }, 150); // Half of the animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholderIndex, isAnswerVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Since input is read-only, always show the answer for the current question
    const currentQuestionAnswer = questionAnswers[placeholderIndex];
    if (currentQuestionAnswer) {
      setCurrentAnswer(currentQuestionAnswer);
      setIsAnswerVisible(true);
    }
  };

  const handleCloseAnswer = () => {
    setIsAnswerVisible(false);
    // Delay clearing the answer to allow for exit animation
    setTimeout(() => {
      setCurrentAnswer(null);
    }, 300);
  };

  const handleNextQuestion = () => {
    const nextIndex = (placeholderIndex + 1) % questionAnswers.length;
    const nextQuestionAnswer = questionAnswers[nextIndex];
    setCurrentAnswer(nextQuestionAnswer);
    setPlaceholderIndex(nextIndex);
    setCurrentPlaceholder(nextQuestionAnswer.question);
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
            readOnly
          />
          <div className={`placeholder-text ${isAnimating ? 'animating' : ''}`}>
            {currentPlaceholder}
          </div>
        </div>
        <button type="submit" className="search-button">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.913086 10.2918H5.88573V8.65937H0.913086V1.18793C0.913098 1.11702 0.931875 1.04733 0.967564 0.985738C1.00325 0.924146 1.05462 0.872776 1.11661 0.836691C1.1786 0.800606 1.24907 0.781052 1.32107 0.779956C1.39307 0.77886 1.46412 0.79626 1.52721 0.830441L16.828 9.11807C16.893 9.1533 16.9472 9.20505 16.9849 9.26793C17.0227 9.33081 17.0426 9.40252 17.0426 9.47556C17.0426 9.5486 17.0227 9.6203 16.9849 9.68319C16.9472 9.74607 16.893 9.79782 16.828 9.83305L1.52721 18.1207C1.46412 18.1549 1.39307 18.1723 1.32107 18.1712C1.24907 18.1701 1.1786 18.1505 1.11661 18.1144C1.05462 18.0783 1.00325 18.027 0.967564 17.9654C0.931875 17.9038 0.913098 17.8341 0.913086 17.7632V10.2918Z" fill="white"/>
          </svg>
        </button>
      </form>
      
      {/* Answer Display */}
      {currentAnswer && (
        <div className={`search-answer ${isAnswerVisible ? 'visible' : ''}`}>
          <div className="search-answer-content">
            <div className="search-answer-header">
              <div className="search-answer-category">{currentAnswer.category}</div>
              <button className="search-answer-close" onClick={handleCloseAnswer}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="search-answer-question">{currentAnswer.question}</div>
            <div className="search-answer-text">{currentAnswer.answer}</div>
            <div className="search-answer-footer">
              <button className="search-answer-next" onClick={handleNextQuestion}>
                <span className="search-answer-next-text">Next: {questionAnswers[(placeholderIndex + 1) % questionAnswers.length].question}</span>
                <ArrowForwardIcon className="search-answer-next-arrow" sx={{ fontSize: 16 }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
