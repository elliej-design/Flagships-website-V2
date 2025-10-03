import React from 'react';

interface QuestionChipProps {
  text: string;
  onClick?: () => void;
}

const QuestionChip: React.FC<QuestionChipProps> = ({ text, onClick }) => {
  return (
    <button className="question-chip" onClick={onClick}>
      {text}
    </button>
  );
};

export default QuestionChip;
