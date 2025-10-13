import React, { useState } from 'react';
import { dictionaryTerms, DictionaryTerm } from '../data/dictionaryTerms';

interface DictionaryPageProps {
  onNavigate?: (page: string) => void;
}

const DictionaryPage: React.FC<DictionaryPageProps> = ({ onNavigate }) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const getTermsByLetter = (letter: string) => {
    return dictionaryTerms.filter(term => term.term.toUpperCase().startsWith(letter));
  };

  const getAvailableLetters = () => {
    const availableLetters = new Set<string>();
    dictionaryTerms.forEach(term => {
      availableLetters.add(term.term.toUpperCase().charAt(0));
    });
    return Array.from(availableLetters).sort();
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? '' : letter);
  };


  const availableLetters = getAvailableLetters();
  const filteredTerms = selectedLetter ? getTermsByLetter(selectedLetter) : dictionaryTerms;

  return (
    <div className="dictionary-page">
      <div className="dictionary-container">
        <div className="dictionary-content">
          <h1 className="dictionary-title">Flagships Dictionary</h1>
          <p className="dictionary-intro">
            Comprehensive definitions of financial and private market terminology. 
            Use the alphabet navigation below to browse terms by letter.
          </p>

          {/* Alphabet Navigation */}
          <div className="alphabet-nav">
            <div className="alphabet-nav-container">
              {alphabet.map(letter => (
                <button
                  key={letter}
                  className={`alphabet-letter ${availableLetters.includes(letter) ? 'available' : 'unavailable'} ${selectedLetter === letter ? 'active' : ''}`}
                  onClick={() => handleLetterClick(letter)}
                  disabled={!availableLetters.includes(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Terms Section */}
          <div className="dictionary-terms">
            {selectedLetter && (
              <div className="letter-section-header">
                <h2 className="letter-title">Terms starting with "{selectedLetter}"</h2>
                <span className="term-count">({filteredTerms.length} terms)</span>
              </div>
            )}
            
            {!selectedLetter && (
              <div className="letter-section-header">
                <h2 className="letter-title">All Terms</h2>
                <span className="term-count">({dictionaryTerms.length} total terms)</span>
              </div>
            )}

            <div className="terms-list">
              {filteredTerms.map((term, index) => (
                <div key={index} className="dictionary-term">
                  <h3 className="term-title">{term.term}</h3>
                  <p className="term-definition">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="dictionary-footer">
            <p className="dictionary-note">
              This dictionary contains comprehensive definitions of financial and private market terminology. 
              Terms are organized alphabetically for easy navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;