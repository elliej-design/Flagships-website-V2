import React from 'react';
import QuestionChip from './QuestionChip';

interface ExampleQuestionsProps {
  onQuestionClick?: (question: string) => void;
}

const ExampleQuestions: React.FC<ExampleQuestionsProps> = ({ onQuestionClick }) => {
  const questions = [
    "What is Flagships?",
    "Example Q 2",
    "Functionality and insights",
    "Comparison to competitors"
  ];

  return (
    <div className="example-questions">
      <div className="example-questions-container">
        {questions.map((question, index) => (
          <QuestionChip
            key={index}
            text={question}
            onClick={() => onQuestionClick?.(question)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExampleQuestions;
