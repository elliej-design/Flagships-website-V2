import React from 'react';
import { QuestionAnswer } from '../data/questionAnswers';

interface AnswerDisplayProps {
  answer: QuestionAnswer | null;
  isVisible: boolean;
  onClose: () => void;
}

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ answer, isVisible, onClose }) => {
  if (!answer || !isVisible) return null;

  return (
    <div className={`answer-display ${isVisible ? 'visible' : ''}`}>
      <div className="answer-container">
        <div className="answer-header">
          <div className="answer-category">{answer.category}</div>
          <button className="answer-close" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="answer-question">{answer.question}</div>
        <div className="answer-text">{answer.answer}</div>
      </div>
    </div>
  );
};

export default AnswerDisplay;
