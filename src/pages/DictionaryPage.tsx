import React, { useState } from 'react';

interface DictionaryPageProps {
  onNavigate?: (page: string) => void;
}

interface DictionaryTerm {
  term: string;
  definition: string;
}

const DictionaryPage: React.FC<DictionaryPageProps> = ({ onNavigate }) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('');

  const dictionaryTerms: DictionaryTerm[] = [
    {
      term: "Alternative Assets",
      definition: "Investment assets that fall outside traditional categories of stocks, bonds, and cash. Includes private equity, real estate, commodities, and other non-traditional investments."
    },
    {
      term: "Asset Allocation",
      definition: "The process of dividing investments among different asset categories such as stocks, bonds, and cash equivalents to optimize risk and return."
    },
    {
      term: "Capital Call",
      definition: "A request by a private fund manager for investors to provide additional capital to the fund. Typically used to fund new investments or cover operational expenses."
    },
    {
      term: "Carried Interest",
      definition: "The share of profits that private fund managers receive as compensation, typically 20% of the fund's profits after returning capital to investors."
    },
    {
      term: "Due Diligence",
      definition: "The comprehensive investigation and analysis of a potential investment opportunity, including financial, legal, operational, and strategic assessments."
    },
    {
      term: "Dry Powder",
      definition: "Capital committed to private funds but not yet deployed into investments. Represents available capital for new opportunities."
    },
    {
      term: "General Partner (GP)",
      definition: "The entity responsible for managing a private fund, making investment decisions, and handling day-to-day operations. Typically receives management fees and carried interest."
    },
    {
      term: "Investment Committee",
      definition: "A group of senior professionals who review and approve investment decisions for a private fund or investment firm."
    },
    {
      term: "Limited Partner (LP)",
      definition: "An investor in a private fund who provides capital but has limited liability and typically no involvement in fund management decisions."
    },
    {
      term: "Management Fee",
      definition: "An annual fee paid by investors to fund managers, typically 1-2% of committed capital, to cover operational expenses and compensation."
    },
    {
      term: "Portfolio Company",
      definition: "A company in which a private equity or venture capital fund has made an investment. The fund typically holds a significant ownership stake."
    },
    {
      term: "Private Market",
      definition: "Financial markets where securities are not publicly traded on exchanges. Includes private equity, venture capital, private debt, and real estate investments."
    },
    {
      term: "Vintage Year",
      definition: "The year in which a private fund makes its first investment or begins operations. Used to categorize and compare fund performance across different time periods."
    }
  ];

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

  const availableLetters = getAvailableLetters();
  const filteredTerms = selectedLetter ? getTermsByLetter(selectedLetter) : dictionaryTerms;

  return (
    <div className="dictionary-page">
      <div className="dictionary-container">
        <article className="dictionary-content">
          <h1 className="dictionary-title">Flagships Dictionary</h1>
          
          <p className="dictionary-intro">
            A comprehensive glossary of terms commonly used in private markets, alternative investments, and financial services. This dictionary helps clarify the language and concepts that shape the industry.
          </p>

          {/* Alphabet Navigation */}
          <div className="alphabet-nav">
            <div className="alphabet-nav-container">
              {alphabet.map((letter) => {
                const hasTerms = availableLetters.includes(letter);
                return (
                  <button
                    key={letter}
                    className={`alphabet-letter ${hasTerms ? 'available' : 'unavailable'} ${selectedLetter === letter ? 'active' : ''}`}
                    onClick={() => hasTerms ? setSelectedLetter(selectedLetter === letter ? '' : letter) : null}
                    disabled={!hasTerms}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Letter Header */}
          {selectedLetter && (
            <div className="letter-section-header">
              <h2 className="letter-title">{selectedLetter}</h2>
              <button 
                className="clear-filter"
                onClick={() => setSelectedLetter('')}
              >
                Show All Terms
              </button>
            </div>
          )}

          <div className="dictionary-terms">
            {filteredTerms.map((item, index) => (
              <div key={index} className="dictionary-term">
                <h3 className="term-title">{item.term}</h3>
                <p className="term-definition">{item.definition}</p>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && selectedLetter && (
            <div className="no-terms-message">
              <p>No terms found starting with "{selectedLetter}".</p>
            </div>
          )}

          <div className="dictionary-footer">
            <p className="dictionary-note">
              This dictionary is regularly updated to reflect evolving industry terminology and practices. 
              For questions about specific terms or concepts, please contact our team.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DictionaryPage;
