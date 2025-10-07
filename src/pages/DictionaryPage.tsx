import React from 'react';

interface DictionaryPageProps {
  onNavigate?: (page: string) => void;
}

const DictionaryPage: React.FC<DictionaryPageProps> = ({ onNavigate }) => {
  const dictionaryTerms = [
    {
      term: "Alternative Assets",
      definition: "Investment assets that fall outside traditional categories of stocks, bonds, and cash. Includes private equity, real estate, commodities, and other non-traditional investments."
    },
    {
      term: "Capital Call",
      definition: "A request by a private fund manager for investors to provide additional capital to the fund. Typically used to fund new investments or cover operational expenses."
    },
    {
      term: "Due Diligence",
      definition: "The comprehensive investigation and analysis of a potential investment opportunity, including financial, legal, operational, and strategic assessments."
    },
    {
      term: "General Partner (GP)",
      definition: "The entity responsible for managing a private fund, making investment decisions, and handling day-to-day operations. Typically receives management fees and carried interest."
    },
    {
      term: "Limited Partner (LP)",
      definition: "An investor in a private fund who provides capital but has limited liability and typically no involvement in fund management decisions."
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

  return (
    <div className="dictionary-page">
      <div className="dictionary-container">
        <article className="dictionary-content">
          <h1 className="dictionary-title">Flagships Dictionary</h1>
          
          <p className="dictionary-intro">
            A comprehensive glossary of terms commonly used in private markets, alternative investments, and financial services. This dictionary helps clarify the language and concepts that shape the industry.
          </p>

          <div className="dictionary-terms">
            {dictionaryTerms.map((item, index) => (
              <div key={index} className="dictionary-term">
                <h3 className="term-title">{item.term}</h3>
                <p className="term-definition">{item.definition}</p>
              </div>
            ))}
          </div>

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
