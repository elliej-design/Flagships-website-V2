import React, { useState } from 'react';
import Logo from './Logo';
import SearchInput from './SearchInput';
import ExampleQuestions from './ExampleQuestions';
import AnswerDisplay from './AnswerDisplay';
import { QuestionAnswer } from '../data/questionAnswers';

const HeroSection: React.FC = () => {
  const [currentAnswer, setCurrentAnswer] = useState<QuestionAnswer | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Handle search functionality here
  };

  const handleQuestionClick = (question: string) => {
    console.log('Question clicked:', question);
    // Handle question click functionality here
  };

  const handleShowAnswer = (answer: QuestionAnswer) => {
    setCurrentAnswer(answer);
    setIsAnswerVisible(true);
  };

  const handleCloseAnswer = () => {
    setIsAnswerVisible(false);
    // Delay clearing the answer to allow for exit animation
    setTimeout(() => {
      setCurrentAnswer(null);
    }, 300);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="animate-fade-in-up animate-delay-1">
            <Logo />
          </div>
          <h1 className="hero-tagline animate-fade-in-up animate-delay-2">
            The new infrastructure for private market communication
          </h1>
        </div>
        
        <div className="hero-search animate-fade-in-up animate-delay-3">
          <SearchInput 
            placeholder="Example question"
            onSearch={handleSearch}
            onShowAnswer={handleShowAnswer}
          />
          <div className="animate-fade-in-up animate-delay-4">
            <ExampleQuestions onQuestionClick={handleQuestionClick} />
          </div>
        </div>
      </div>
      
      <AnswerDisplay 
        answer={currentAnswer}
        isVisible={isAnswerVisible}
        onClose={handleCloseAnswer}
      />
    </section>
  );
};

export default HeroSection;
