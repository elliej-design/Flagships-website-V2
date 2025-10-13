export interface DictionaryTerm {
  term: string;
  definition: string;
}

export const dictionaryTerms: DictionaryTerm[] = [
  // From finance_terms_100.csv
  {
    term: "Account",
    definition: "A record of financial transactions for an individual or organization."
  },
  {
    term: "Accrual Accounting",
    definition: "An accounting method where revenue and expenses are recorded when they are earned or incurred, not when cash is exchanged."
  },
  {
    term: "Amortization",
    definition: "The gradual reduction of a debt over time through scheduled payments of principal and interest."
  },
  {
    term: "Annual Percentage Rate (APR)",
    definition: "The annual rate charged for borrowing or earned through an investment, expressed as a percentage."
  },
  {
    term: "Arbitrage",
    definition: "The simultaneous buying and selling of an asset in different markets to profit from price differences."
  },
  {
    term: "Asset",
    definition: "Any resource with economic value owned or controlled by an individual or company."
  },
  {
    term: "Asset Allocation",
    definition: "The process of dividing investments among different asset categories to balance risk and reward."
  },
  {
    term: "Balance Sheet",
    definition: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time."
  },
  {
    term: "Bankruptcy",
    definition: "A legal proceeding involving a person or business unable to repay outstanding debts."
  },
  {
    term: "Basis Point",
    definition: "A unit of measure equal to one hundredth of one percent, commonly used for interest rates."
  },
  {
    term: "Bear Market",
    definition: "A market condition where prices are falling, encouraging selling."
  },
  {
    term: "Benchmark",
    definition: "A standard against which the performance of an investment or portfolio can be measured."
  },
  {
    term: "Beta",
    definition: "A measure of a stock's volatility compared to the overall market."
  },
  {
    term: "Bond",
    definition: "A fixed income instrument representing a loan made by an investor to a borrower."
  },
  {
    term: "Book Value",
    definition: "The net value of a company's assets found on its balance sheet."
  },
  {
    term: "Broker",
    definition: "An individual or firm that acts as an intermediary between investors and securities exchanges."
  },
  {
    term: "Bull Market",
    definition: "A market condition where prices are rising, encouraging buying."
  },
  {
    term: "Capital",
    definition: "Financial assets or resources available for use in producing goods or services."
  },
  {
    term: "Capital Gain",
    definition: "An increase in the value of an investment, realized when the asset is sold for more than its purchase price."
  },
  {
    term: "Capital Market",
    definition: "A financial market where long-term debt or equity-backed securities are bought and sold."
  },
  {
    term: "Cash Flow",
    definition: "The net amount of cash being transferred into and out of a business."
  },
  {
    term: "Collateral",
    definition: "An asset pledged by a borrower to secure a loan."
  },
  {
    term: "Commercial Paper",
    definition: "An unsecured, short-term debt instrument issued by a corporation."
  },
  {
    term: "Compound Interest",
    definition: "Interest calculated on the initial principal and also on the accumulated interest of previous periods."
  },
  {
    term: "Credit",
    definition: "The ability to borrow money with the promise to repay it later, often with interest."
  },
  {
    term: "Credit Default Swap (CDS)",
    definition: "A financial derivative that allows an investor to swap credit risk with another investor."
  },
  {
    term: "Credit Rating",
    definition: "An assessment of the creditworthiness of a borrower in general terms or with respect to a specific debt."
  },
  {
    term: "Currency",
    definition: "A system of money in general use in a particular country."
  },
  {
    term: "Current Asset",
    definition: "An asset expected to be converted to cash or used up within one year."
  },
  {
    term: "Current Liability",
    definition: "A company's debts or obligations that are due within one year."
  },
  {
    term: "Debenture",
    definition: "A type of debt instrument that is not secured by physical assets or collateral."
  },
  {
    term: "Debt",
    definition: "Money borrowed that is to be paid back, usually with interest."
  },
  {
    term: "Debt-to-Equity Ratio",
    definition: "A measure of a company's financial leverage, calculated by dividing its total liabilities by shareholders' equity."
  },
  {
    term: "Default",
    definition: "Failure to fulfill a financial obligation, such as repaying a loan."
  },
  {
    term: "Deflation",
    definition: "A decrease in the general price level of goods and services."
  },
  {
    term: "Derivative",
    definition: "A financial security whose value is derived from an underlying asset or group of assets."
  },
  {
    term: "Discount Rate",
    definition: "The interest rate charged by central banks on loans to commercial banks."
  },
  {
    term: "Diversification",
    definition: "A risk management strategy that mixes a wide variety of investments within a portfolio."
  },
  {
    term: "Dividend",
    definition: "A payment made by a corporation to its shareholders, usually in cash or additional stock."
  },
  {
    term: "Duration",
    definition: "A measure of the sensitivity of a bond's price to changes in interest rates."
  },
  {
    term: "Earnings Per Share (EPS)",
    definition: "A company's profit divided by its outstanding shares of common stock."
  },
  {
    term: "EBITDA",
    definition: "Earnings before interest, taxes, depreciation, and amortization."
  },
  {
    term: "Equity",
    definition: "Ownership interest in a company, represented by shares of stock."
  },
  {
    term: "Exchange-Traded Fund (ETF)",
    definition: "An investment fund traded on stock exchanges, much like stocks."
  },
  {
    term: "Expense Ratio",
    definition: "A measure of what it costs an investment company to operate a mutual fund."
  },
  {
    term: "Fair Value",
    definition: "An estimate of the market value of an asset, liability, or security."
  },
  {
    term: "Fiduciary",
    definition: "An individual or entity entrusted with managing assets for the benefit of another party."
  },
  {
    term: "Financial Statement",
    definition: "A written record that conveys the business activities and financial performance of a company."
  },
  {
    term: "Fiscal Policy",
    definition: "Government policy that uses taxation and spending to influence the economy."
  },
  {
    term: "Fixed Income",
    definition: "Investments that pay fixed interest or dividend payments until maturity, such as bonds."
  },
  {
    term: "Foreign Exchange (Forex)",
    definition: "The global marketplace for exchanging national currencies against one another."
  },
  {
    term: "Futures Contract",
    definition: "A standardized legal agreement to buy or sell something at a predetermined price at a specified time in the future."
  },
  {
    term: "GAAP",
    definition: "Generally Accepted Accounting Principles, a collection of commonly followed accounting rules and standards."
  },
  {
    term: "GDP",
    definition: "Gross Domestic Product, the total value of goods produced and services provided in a country during one year."
  },
  {
    term: "Hedge",
    definition: "An investment made to reduce the risk of adverse price movements in an asset."
  },
  {
    term: "Hedge Fund",
    definition: "An alternative investment vehicle that pools capital and employs a variety of strategies to earn returns."
  },
  {
    term: "Inflation",
    definition: "The rate at which the general level of prices for goods and services rises, eroding purchasing power."
  },
  {
    term: "Initial Public Offering (IPO)",
    definition: "The process of offering shares of a private corporation to the public for the first time."
  },
  {
    term: "Insider Trading",
    definition: "The buying or selling of a security by someone who has access to material nonpublic information about the security."
  },
  {
    term: "Interest Rate",
    definition: "The amount a lender charges a borrower, expressed as a percentage of the principal."
  },
  {
    term: "Investment Grade",
    definition: "A rating that indicates a municipal or corporate bond has a relatively low risk of default."
  },
  {
    term: "Leverage",
    definition: "The use of borrowed capital to increase the potential return of an investment."
  },
  {
    term: "Liability",
    definition: "A company's legal financial debts or obligations incurred during business operations."
  },
  {
    term: "Liquidity",
    definition: "The ease with which an asset can be converted into cash without affecting its price."
  },
  {
    term: "Loan",
    definition: "A sum of money borrowed that is expected to be paid back with interest."
  },
  {
    term: "Margin",
    definition: "Borrowed money that is used to purchase securities."
  },
  {
    term: "Market Capitalization",
    definition: "The total value of a company's outstanding shares of stock, calculated by multiplying share price by shares outstanding."
  },
  {
    term: "Market Order",
    definition: "An order to buy or sell a stock immediately at the best available current price."
  },
  {
    term: "Monetary Policy",
    definition: "The macroeconomic policy laid down by the central bank involving the management of money supply and interest rates."
  },
  {
    term: "Money Market",
    definition: "A segment of the financial market in which financial instruments with high liquidity and short maturities are traded."
  },
  {
    term: "Mortgage",
    definition: "A loan used to purchase a home or property, where the property itself serves as collateral."
  },
  {
    term: "Mutual Fund",
    definition: "An investment vehicle made up of a pool of money collected from many investors to invest in securities."
  },
  {
    term: "Net Asset Value (NAV)",
    definition: "A mutual fund's assets minus its liabilities, divided by the number of shares outstanding."
  },
  {
    term: "Nominal Value",
    definition: "The stated value of an issued security, not including market value or interest."
  },
  {
    term: "Option",
    definition: "A financial derivative that gives the buyer the right, but not the obligation, to buy or sell an asset at a set price before a certain date."
  },
  {
    term: "Over-the-Counter (OTC)",
    definition: "Trading of financial instruments directly between two parties rather than through an exchange."
  },
  {
    term: "P/E Ratio",
    definition: "Price-to-Earnings Ratio, a valuation measure calculated by dividing the market price per share by earnings per share."
  },
  {
    term: "Par Value",
    definition: "The face value of a bond or stock as stated by the issuer."
  },
  {
    term: "Portfolio",
    definition: "A collection of financial investments such as stocks, bonds, and cash equivalents."
  },
  {
    term: "Preferred Stock",
    definition: "A class of ownership in a corporation that has a higher claim on assets and earnings than common stock."
  },
  {
    term: "Present Value (PV)",
    definition: "The current value of a future sum of money, given a specified rate of return."
  },
  {
    term: "Price-to-Book Ratio",
    definition: "A financial measure comparing a company's market value to its book value."
  },
  {
    term: "Private Equity",
    definition: "Capital investment made into companies that are not publicly traded."
  },
  {
    term: "Prospectus",
    definition: "A formal legal document that provides details about an investment offering."
  },
  {
    term: "Rate of Return",
    definition: "The gain or loss on an investment over a specified period."
  },
  {
    term: "Real Estate Investment Trust (REIT)",
    definition: "A company that owns, operates, or finances income-producing real estate."
  },
  {
    term: "Return on Equity (ROE)",
    definition: "A measure of financial performance calculated by dividing net income by shareholders' equity."
  },
  {
    term: "Risk",
    definition: "The possibility of losing some or all of the original investment."
  },
  {
    term: "Risk Premium",
    definition: "The return in excess of the risk-free rate of return that an investment is expected to yield."
  },
  {
    term: "Secondary Market",
    definition: "The market where previously issued securities are bought and sold."
  },
  {
    term: "Security",
    definition: "A financial instrument that holds some type of monetary value, such as stocks or bonds."
  },
  {
    term: "Sovereign Debt",
    definition: "Debt issued by a national government."
  },
  {
    term: "Stock",
    definition: "A type of security that signifies ownership in a corporation."
  },
  {
    term: "Stock Exchange",
    definition: "A marketplace where securities are bought and sold."
  },
  {
    term: "Swap",
    definition: "A derivative contract through which two parties exchange financial instruments."
  },
  {
    term: "Treasury Bill (T-Bill)",
    definition: "A short-term government security with a maturity of one year or less."
  },
  {
    term: "Underwriter",
    definition: "A financial institution that helps companies issue new securities to the public."
  },
  {
    term: "Valuation",
    definition: "The process of determining the present value of an asset or company."
  },
  {
    term: "Volatility",
    definition: "A statistical measure of the dispersion of returns for a given security or market index."
  },
  {
    term: "Yield",
    definition: "The income return on an investment, such as interest or dividends."
  },
  {
    term: "Zero-Coupon Bond",
    definition: "A bond that does not pay interest but is traded at a deep discount, rendering profit at maturity."
  },

  // From finance_terms_200.csv
  {
    term: "Ask Price",
    definition: "The lowest price a seller is willing to accept for a security."
  },
  {
    term: "Auction Market",
    definition: "A market in which buyers enter competitive bids and sellers enter competitive offers simultaneously."
  },
  {
    term: "Authorized Shares",
    definition: "The maximum number of shares a corporation is legally permitted to issue."
  },
  {
    term: "Average Daily Trading Volume",
    definition: "The average number of shares traded per day over a specified period."
  },
  {
    term: "Back Office",
    definition: "The administrative area of a financial institution that supports trading, settlements, and record-keeping."
  },
  {
    term: "Bank Rate",
    definition: "The interest rate at which a nation's central bank lends money to domestic banks."
  },
  {
    term: "Basel Accords",
    definition: "A set of agreements by the Basel Committee on Banking Supervision providing recommendations on banking laws and regulations."
  },
  {
    term: "Bid Price",
    definition: "The highest price a buyer is willing to pay for a security."
  },
  {
    term: "Bid-Ask Spread",
    definition: "The difference between the bid price and the ask price of a security."
  },
  {
    term: "Block Trade",
    definition: "A large, privately negotiated securities transaction."
  },
  {
    term: "Blue Chip Stock",
    definition: "Shares of a nationally recognized, financially sound, and well-established company."
  },
  {
    term: "Broker-Dealer",
    definition: "A firm in the business of buying and selling securities for its own account or on behalf of customers."
  },
  {
    term: "Bullion",
    definition: "Physical gold or silver in the form of bars, ingots, or coins."
  },
  {
    term: "Callable Bond",
    definition: "A bond that can be redeemed by the issuer before its maturity date."
  },
  {
    term: "Capital Adequacy Ratio (CAR)",
    definition: "A measure of a bank's capital, expressed as a percentage of its risk-weighted credit exposures."
  },
  {
    term: "Central Bank",
    definition: "The national institution that manages a country's currency, money supply, and interest rates."
  },
  {
    term: "Clearing House",
    definition: "An intermediary between buyers and sellers of financial instruments that ensures the proper settlement of trades."
  },
  {
    term: "Closing Price",
    definition: "The final price of a security at the end of a trading session."
  },
  {
    term: "Commercial Bank",
    definition: "A financial institution that accepts deposits, offers checking accounts, and makes loans."
  },
  {
    term: "Convertible Bond",
    definition: "A bond that can be converted into a predetermined number of the issuing company's shares."
  },
  {
    term: "Coupon Rate",
    definition: "The annual interest rate paid on a bond, expressed as a percentage of its face value."
  },
  {
    term: "Covered Call",
    definition: "An options strategy where an investor holds a long position in an asset and sells call options on that same asset."
  },
  {
    term: "Custodian Bank",
    definition: "A financial institution responsible for safeguarding a firm's or individual's financial assets."
  },
  {
    term: "Day Trading",
    definition: "The buying and selling of securities within the same trading day."
  },
  {
    term: "Depository Receipt",
    definition: "A negotiable financial instrument representing a foreign company's publicly traded securities."
  },
  {
    term: "Derivatives Market",
    definition: "A market where financial instruments like futures, options, and swaps are traded."
  },
  {
    term: "Discount Bond",
    definition: "A bond sold for less than its face value."
  },
  {
    term: "Dow Jones Industrial Average (DJIA)",
    definition: "An index of 30 major publicly traded companies in the U.S."
  },
  {
    term: "Dual-Class Shares",
    definition: "Shares that give different voting rights and dividend payments to different classes of shareholders."
  },
  {
    term: "Electronic Communication Network (ECN)",
    definition: "A computerized system that facilitates trading of financial products outside traditional exchanges."
  },
  {
    term: "Emerging Market",
    definition: "An economy that is progressing toward becoming more advanced, often through rapid growth and industrialization."
  },
  {
    term: "Eurobond",
    definition: "A bond issued in a currency not native to the country where it is issued."
  },
  {
    term: "Exchange",
    definition: "A marketplace where securities, commodities, derivatives, and other instruments are traded."
  },
  {
    term: "Execution",
    definition: "The completion of a buy or sell order in the market."
  },
  {
    term: "Federal Funds Rate",
    definition: "The interest rate at which U.S. banks lend balances to each other overnight."
  },
  {
    term: "Financial Market",
    definition: "A marketplace where buyers and sellers trade financial assets such as stocks, bonds, derivatives, and currencies."
  },
  {
    term: "Forward Contract",
    definition: "A customized contract between two parties to buy or sell an asset at a specified future date for a price agreed upon today."
  },
  {
    term: "Front Office",
    definition: "The division of a financial institution responsible for sales, trading, and other revenue-generating activities."
  },
  {
    term: "Gilt-Edged Security",
    definition: "High-grade bonds issued by certain national governments."
  },
  {
    term: "Global Depositary Receipt (GDR)",
    definition: "A bank certificate issued in more than one country for shares in a foreign company."
  },
  {
    term: "Government Bond",
    definition: "A debt security issued by a government to support spending."
  },
  {
    term: "High-Frequency Trading (HFT)",
    definition: "A type of algorithmic trading that uses powerful computers to transact large numbers of orders at extremely high speeds."
  },
  {
    term: "Hostile Takeover",
    definition: "An acquisition attempt by a company that is strongly resisted by the target company's management."
  },
  {
    term: "Initial Margin",
    definition: "The percentage of the purchase price of securities that an investor must pay for with their own cash or marginable securities."
  },
  {
    term: "Interbank Market",
    definition: "The global network used by financial institutions to trade currencies among themselves."
  },
  {
    term: "International Monetary Fund (IMF)",
    definition: "An international organization established to promote global monetary cooperation and stability."
  },
  {
    term: "Investment Bank",
    definition: "A financial institution that helps companies raise capital and provides advisory services on mergers and acquisitions."
  },
  {
    term: "Issuer",
    definition: "An entity that develops, registers, and sells securities to finance its operations."
  },
  {
    term: "Junk Bond",
    definition: "A high-yield, high-risk security typically issued by companies seeking to raise capital quickly."
  },
  {
    term: "LIBOR",
    definition: "The London Interbank Offered Rate, formerly the benchmark interest rate at which major global banks lent to one another."
  },
  {
    term: "Limit Order",
    definition: "An order to buy or sell a security at a specified price or better."
  },
  {
    term: "Liquidity Ratio",
    definition: "A measure of a company's ability to pay off its short-term liabilities with its current assets."
  },
  {
    term: "Listed Security",
    definition: "A stock, bond, or other security that is traded on an organized exchange."
  },
  {
    term: "Loan Syndication",
    definition: "The process of involving multiple lenders in funding portions of a loan for a single borrower."
  },
  {
    term: "Long Position",
    definition: "The purchase of a security with the expectation that it will rise in value."
  },
  {
    term: "Market Maker",
    definition: "A firm or individual that actively quotes two-sided markets in a financial instrument, providing bids and offers."
  },
  {
    term: "Market Order",
    definition: "An order to buy or sell a stock immediately at the best available price."
  },
  {
    term: "Market Participant",
    definition: "Any individual or institution that is actively involved in buying or selling financial instruments."
  },
  {
    term: "Market Risk",
    definition: "The possibility of an investor experiencing losses due to factors that affect the overall performance of the financial markets."
  },
  {
    term: "Maturity Date",
    definition: "The date on which the principal amount of a bond or other debt instrument becomes due and payable."
  },
  {
    term: "Merchant Bank",
    definition: "A financial institution that provides capital to companies in the form of share ownership."
  },
  {
    term: "Money Supply",
    definition: "The total amount of money in circulation or in existence in an economy at a given time."
  },
  {
    term: "NASDAQ",
    definition: "A global electronic marketplace for buying and selling securities, as well as the benchmark index for U.S. technology stocks."
  },
  {
    term: "Net Interest Margin (NIM)",
    definition: "A performance metric that examines how successful a firm's investment decisions are compared to its debt situations."
  },
  {
    term: "NYSE",
    definition: "The New York Stock Exchange, the world's largest equities-based exchange."
  },
  {
    term: "Open Interest",
    definition: "The total number of outstanding derivative contracts, such as options or futures, that have not been settled."
  },
  {
    term: "Option Chain",
    definition: "A listing of all available option contracts for a given security."
  },
  {
    term: "Overbought",
    definition: "A condition in which the price of a security has risen too far, too fast, and is likely due for a correction."
  },
  {
    term: "Oversold",
    definition: "A condition in which the price of a security has fallen too far, too fast, and is likely due for a rebound."
  },
  {
    term: "Penny Stock",
    definition: "A stock that trades at a relatively low price, often outside of major market exchanges."
  },
  {
    term: "Portfolio Manager",
    definition: "A person or team responsible for making investment decisions for a fund or client portfolio."
  },
  {
    term: "Primary Market",
    definition: "The market where new securities are issued and sold to investors for the first time."
  },
  {
    term: "Principal",
    definition: "The original amount of money borrowed in a loan or put into an investment."
  },
  {
    term: "Quantitative Easing (QE)",
    definition: "A monetary policy used by central banks to stimulate the economy by buying financial assets."
  },
  {
    term: "Quotation",
    definition: "The last price at which a security or commodity traded, or the most recent bid and ask prices."
  },
  {
    term: "Repo (Repurchase Agreement)",
    definition: "A form of short-term borrowing for dealers in government securities."
  },
  {
    term: "Risk Management",
    definition: "The identification, analysis, and mitigation of uncertainty in investment decisions."
  },
  {
    term: "Secondary Market",
    definition: "A marketplace where investors buy and sell securities they already own."
  },
  {
    term: "Securities and Exchange Commission (SEC)",
    definition: "The U.S. federal agency that regulates the securities markets and protects investors."
  },
  {
    term: "Settlement Date",
    definition: "The date on which a trade is finalized and securities are delivered to the buyer while cash is paid to the seller."
  },
  {
    term: "Short Selling",
    definition: "The sale of a security not owned by the seller, with the expectation it will decline in value."
  },
  {
    term: "Spread",
    definition: "The difference between two prices, rates, or yields."
  },
  {
    term: "Stock Index",
    definition: "A measurement of the performance of a group of stocks that represent a particular market or sector."
  },
  {
    term: "Stop Order",
    definition: "An order to buy or sell a security once its price reaches a specified level."
  },
  {
    term: "Swaption",
    definition: "An option granting the right but not the obligation to enter into a swap agreement by a specified date."
  },
  {
    term: "Systemic Risk",
    definition: "The risk of collapse of an entire financial system or entire market."
  },
  {
    term: "Ticker Symbol",
    definition: "An abbreviation used to uniquely identify publicly traded shares of a particular stock."
  },
  {
    term: "Trade Settlement",
    definition: "The process of transferring securities to the buyer and payment to the seller after a trade has been executed."
  },
  {
    term: "Treasury Note",
    definition: "A marketable U.S. government debt security with a fixed interest rate and maturity between one and ten years."
  },
  {
    term: "Underwriting",
    definition: "The process by which an investment bank raises investment capital from investors on behalf of corporations and governments issuing securities."
  },
  {
    term: "Volcker Rule",
    definition: "A federal regulation that restricts U.S. banks from making certain types of speculative investments."
  },
  {
    term: "Volume",
    definition: "The number of shares or contracts traded in a security or market during a given period."
  },
  {
    term: "Yield Curve",
    definition: "A line that plots interest rates of bonds having equal credit quality but differing maturity dates."
  },
  {
    term: "Zombie Bank",
    definition: "A bank with an economic net worth less than zero that continues to operate due to government support."
  },

  // From finance_terms_350.csv
  {
    term: "Active Management",
    definition: "An investment strategy where a manager makes specific investments with the goal of outperforming a benchmark index."
  },
  {
    term: "Alpha",
    definition: "The excess return on an investment relative to the return of a benchmark index."
  },
  {
    term: "Alternative Investment",
    definition: "An asset that does not fall into one of the conventional investment categories, such as stocks, bonds, or cash."
  },
  {
    term: "Annuity",
    definition: "A financial product that provides a stream of payments to an individual, typically after retirement."
  },
  {
    term: "Asset Class",
    definition: "A group of securities with similar characteristics and behavior in the marketplace."
  },
  {
    term: "Balanced Fund",
    definition: "A mutual fund that invests in a mix of equities and fixed-income securities."
  },
  {
    term: "Beta Coefficient",
    definition: "A measure of an asset's risk in relation to the overall market."
  },
  {
    term: "Blue Ocean Strategy",
    definition: "An investment strategy targeting untapped markets rather than competing in existing industries."
  },
  {
    term: "Buy and Hold",
    definition: "An investment strategy where securities are purchased and held for a long period regardless of fluctuations."
  },
  {
    term: "Capital Appreciation",
    definition: "An increase in the value of an asset over time."
  },
  {
    term: "Closed-End Fund",
    definition: "An investment fund with a fixed number of shares that are traded on exchanges."
  },
  {
    term: "Collectibles",
    definition: "Items such as art, antiques, and rare coins held as investments."
  },
  {
    term: "Commodity",
    definition: "A basic good used in commerce that is interchangeable with other goods of the same type."
  },
  {
    term: "Commodity ETF",
    definition: "An exchange-traded fund that invests in commodities or commodity-linked instruments."
  },
  {
    term: "Common Stock",
    definition: "A type of equity security representing ownership in a corporation and a claim on part of its profits."
  },
  {
    term: "Convertible Security",
    definition: "A security that can be converted into another form, such as a bond convertible into stock."
  },
  {
    term: "Core-Satellite Strategy",
    definition: "A portfolio management approach that combines passive investments (core) with actively managed investments (satellite)."
  },
  {
    term: "Cryptocurrency",
    definition: "A digital currency secured by cryptography and based on decentralized networks."
  },
  {
    term: "Currency Hedging",
    definition: "A strategy used to minimize the risk of currency fluctuations in international investments."
  },
  {
    term: "Defensive Stock",
    definition: "A stock that provides consistent dividends and stable earnings regardless of market conditions."
  },
  {
    term: "Direct Investment",
    definition: "An investment made directly into a business or project, rather than through a fund."
  },
  {
    term: "Diversified Fund",
    definition: "A fund that invests across a wide range of assets to reduce risk."
  },
  {
    term: "Dividend Growth Investing",
    definition: "An investment strategy focused on companies with a history of consistently growing dividends."
  },
  {
    term: "Emerging Market Fund",
    definition: "A fund that invests in securities from developing economies."
  },
  {
    term: "Equity Fund",
    definition: "A mutual fund or ETF that invests primarily in stocks."
  },
  {
    term: "ESG Investing",
    definition: "Investment strategies that consider environmental, social, and governance factors."
  },
  {
    term: "ETF of ETFs",
    definition: "An exchange-traded fund that invests primarily in other ETFs."
  },
  {
    term: "Exchange Fund",
    definition: "A fund that allows investors to diversify by pooling their concentrated stock positions."
  },
  {
    term: "Factor Investing",
    definition: "An investment approach that targets specific drivers of return across asset classes."
  },
  {
    term: "Fixed-Income Fund",
    definition: "A mutual fund or ETF that invests primarily in bonds or other debt securities."
  },
  {
    term: "Frontier Market",
    definition: "A type of developing country market that is less advanced than emerging markets but more investable than least developed countries."
  },
  {
    term: "Fund of Funds",
    definition: "An investment strategy of holding a portfolio of other investment funds."
  },
  {
    term: "Global Fund",
    definition: "A mutual fund or ETF that invests in securities worldwide, including the investor's home country."
  },
  {
    term: "Growth Fund",
    definition: "A mutual fund or ETF that focuses on stocks with above-average growth potential."
  },
  {
    term: "Hedge Fund Strategy",
    definition: "An investment approach used by hedge funds, such as long/short equity, event-driven, or global macro."
  },
  {
    term: "High-Yield Bond",
    definition: "A bond with a lower credit rating but offering higher yields to compensate for greater risk."
  },
  {
    term: "Index Fund",
    definition: "A type of mutual fund or ETF with a portfolio constructed to match or track a specific index."
  },
  {
    term: "Inflation-Protected Securities",
    definition: "Government-issued bonds designed to protect investors from inflation."
  },
  {
    term: "Infrastructure Fund",
    definition: "A fund that invests in physical systems such as transportation, utilities, and energy."
  },
  {
    term: "Institutional Investor",
    definition: "An organization that invests large sums of money, such as a pension fund or insurance company."
  },
  {
    term: "International Fund",
    definition: "A fund that invests in securities located outside the investor's home country."
  },
  {
    term: "IPO Fund",
    definition: "A fund that invests in companies that have recently gone public."
  },
  {
    term: "Large-Cap Stock",
    definition: "Shares of companies with a market capitalization typically over $10 billion."
  },
  {
    term: "Leveraged ETF",
    definition: "An exchange-traded fund that uses financial derivatives and debt to amplify returns."
  },
  {
    term: "Lifecycle Fund",
    definition: "A fund designed to provide a simple investment solution through a portfolio that automatically becomes more conservative as the investor approaches retirement."
  },
  {
    term: "Liquidity Fund",
    definition: "A fund that invests in highly liquid assets to provide investors with easy access to their money."
  },
  {
    term: "Managed Futures",
    definition: "An alternative investment strategy using futures contracts as part of a diversified portfolio."
  },
  {
    term: "Market-Neutral Strategy",
    definition: "An investment strategy that seeks to avoid market risk by taking long and short positions in related securities."
  },
  {
    term: "Master Limited Partnership (MLP)",
    definition: "A publicly traded partnership that combines the tax benefits of a partnership with the liquidity of public securities."
  },
  {
    term: "Mid-Cap Stock",
    definition: "Shares of companies with market capitalizations between $2 billion and $10 billion."
  },
  {
    term: "Momentum Investing",
    definition: "An investment strategy that seeks to capitalize on the continuance of existing trends in the market."
  },
  {
    term: "Money Market Fund",
    definition: "A mutual fund that invests in short-term, high-quality debt securities."
  },
  {
    term: "Municipal Bond Fund",
    definition: "A fund that invests primarily in bonds issued by state and local governments."
  },
  {
    term: "Mutual Fund Share Classes",
    definition: "Different types of shares in the same mutual fund, each with its own fee structure."
  },
  {
    term: "Natural Resource Fund",
    definition: "A fund that invests in companies involved in natural resources like oil, gas, and mining."
  },
  {
    term: "Net Short",
    definition: "An investment position where total short positions exceed total long positions."
  },
  {
    term: "Open-End Fund",
    definition: "A mutual fund that continuously offers shares and stands ready to buy them back from investors."
  },
  {
    term: "Option Strategy",
    definition: "An investment approach using options to hedge, speculate, or enhance returns."
  },
  {
    term: "Passive Management",
    definition: "An investment strategy aiming to replicate market returns rather than outperform them."
  },
  {
    term: "Pension Fund",
    definition: "A fund established to pay employees' retirement benefits."
  },
  {
    term: "Private Credit",
    definition: "Loans and credit investments made by non-bank lenders to companies or projects."
  },
  {
    term: "Private Equity Fund",
    definition: "An investment fund that pools capital to invest in private companies."
  },
  {
    term: "Quant Fund",
    definition: "A fund that uses quantitative analysis and algorithms to make investment decisions."
  },
  {
    term: "Real Asset",
    definition: "A tangible asset with intrinsic value such as real estate, commodities, or infrastructure."
  },
  {
    term: "Real Estate Fund",
    definition: "A fund that invests in real estate or real estate-related securities."
  },
  {
    term: "REIT ETF",
    definition: "An exchange-traded fund that invests primarily in real estate investment trusts."
  },
  {
    term: "Retail Investor Fund",
    definition: "A fund designed for individual investors rather than institutions."
  },
  {
    term: "Risk-Parity Fund",
    definition: "A portfolio strategy that allocates risk, rather than capital, equally among asset classes."
  },
  {
    term: "Sector Fund",
    definition: "A fund that invests in a specific sector of the economy, such as technology or healthcare."
  },
  {
    term: "Separately Managed Account (SMA)",
    definition: "An investment account managed by a professional investment firm for a single investor."
  },
  {
    term: "Small-Cap Stock",
    definition: "Shares of companies with market capitalizations typically between $300 million and $2 billion."
  },
  {
    term: "Smart Beta ETF",
    definition: "An ETF that uses alternative index construction rules rather than traditional market-cap weighting."
  },
  {
    term: "Socially Responsible Investing (SRI)",
    definition: "An investment strategy that considers both financial return and social/environmental good."
  },
  {
    term: "Sovereign Wealth Fund",
    definition: "A state-owned investment fund made up of revenues from reserves or surplus capital."
  },
  {
    term: "Special Purpose Acquisition Company (SPAC)",
    definition: "A company formed to raise capital through an IPO to acquire an existing company."
  },
  {
    term: "Structured Product",
    definition: "A pre-packaged investment strategy based on derivatives, created to meet specific risk-return objectives."
  },
  {
    term: "Target-Date Fund",
    definition: "A fund that automatically adjusts its asset allocation based on a selected time frame, usually retirement."
  },
  {
    term: "Thematic Fund",
    definition: "A fund that invests in companies aligned with a particular theme, such as clean energy or AI."
  },
  {
    term: "TIPS",
    definition: "Treasury Inflation-Protected Securities issued by the U.S. government to protect against inflation."
  },
  {
    term: "Total Return Fund",
    definition: "A fund that seeks to achieve returns from both capital appreciation and income."
  },
  {
    term: "Tracking Error",
    definition: "The divergence between the price behavior of a portfolio and the price behavior of a benchmark index."
  },
  {
    term: "Unconstrained Bond Fund",
    definition: "A bond fund with no restrictions on duration, sector, or credit quality."
  },
  {
    term: "Unit Trust",
    definition: "An investment vehicle that pools investors' money into a single fund, divided into units of equal value."
  },
  {
    term: "Value Fund",
    definition: "A mutual fund or ETF that invests in undervalued companies believed to be trading for less than their intrinsic value."
  },
  {
    term: "Venture Capital Fund",
    definition: "A fund that invests in early-stage, high-growth companies with strong potential."
  },
  {
    term: "Volatility Fund",
    definition: "A fund that aims to profit from changes in market volatility."
  },
  {
    term: "Wealth Management Account",
    definition: "An investment account managed to meet the specific needs of an individual or family."
  },
  {
    term: "Yield Fund",
    definition: "A fund designed to generate income through dividends or interest payments."
  },
  {
    term: "Absolute Return Fund",
    definition: "A fund aiming to generate positive returns regardless of market direction."
  },
  {
    term: "Active ETF",
    definition: "An exchange-traded fund where the portfolio is actively managed by investment professionals."
  },
  {
    term: "All-Cap Fund",
    definition: "A fund that invests in companies of all market capitalizations."
  },
  {
    term: "Alpha Fund",
    definition: "A fund that specifically seeks to generate excess returns relative to a benchmark."
  },
  {
    term: "Arbitrage Fund",
    definition: "A fund that aims to exploit inefficiencies between related markets or securities."
  },
  {
    term: "Asset-Backed Security (ABS)",
    definition: "A security backed by a pool of assets, such as loans, leases, or receivables."
  },
  {
    term: "Bank Loan Fund",
    definition: "A mutual fund or ETF that invests primarily in bank loans made to corporations."
  },
  {
    term: "BDC (Business Development Company)",
    definition: "A type of investment company that invests in small and mid-sized businesses."
  },
  {
    term: "Buyout Fund",
    definition: "A private equity fund that acquires controlling stakes in established companies."
  },
  {
    term: "Carbon Credit Fund",
    definition: "A fund investing in carbon credits or companies aligned with emission reduction strategies."
  },
  {
    term: "Collateralized Loan Obligation (CLO)",
    definition: "A security backed by a pool of loans, divided into tranches with varying risk levels."
  },
  {
    term: "Commodity Fund",
    definition: "A fund that invests directly or indirectly in commodities like gold, oil, or agricultural products."
  },
  {
    term: "Convertible Arbitrage Fund",
    definition: "A hedge fund strategy seeking to profit from mispricings between convertible securities and their underlying stocks."
  },
  {
    term: "Currency Fund",
    definition: "A fund that invests in foreign exchange markets."
  },
  {
    term: "Distressed Debt Fund",
    definition: "A fund that invests in the bonds or securities of companies in or near bankruptcy."
  },
  {
    term: "Dividend Fund",
    definition: "A fund that focuses on stocks that regularly pay dividends."
  },
  {
    term: "Emerging Market Bond Fund",
    definition: "A fund that invests in bonds issued by developing countries."
  },
  {
    term: "Equity-Linked Note",
    definition: "A debt instrument where the return is linked to the performance of an equity index or stock."
  },
  {
    term: "ESG Bond Fund",
    definition: "A bond fund that integrates environmental, social, and governance factors into its investment process."
  },
  {
    term: "ETF Wrapper",
    definition: "A structure that allows mutual fund strategies to be delivered through an ETF format."
  },
  {
    term: "Fund Wrap Program",
    definition: "An investment program where a single fee covers all costs of managing a portfolio of funds."
  },
  {
    term: "Green Bond Fund",
    definition: "A bond fund that invests in projects with positive environmental impacts."
  },
  {
    term: "Hedge Fund of Funds",
    definition: "A fund that invests in a portfolio of hedge funds for diversification."
  },
  {
    term: "Income Fund",
    definition: "A mutual fund or ETF designed to provide steady income through dividends and interest."
  },
  {
    term: "Index-Linked Bond",
    definition: "A bond where payments are tied to a specific index, often inflation or equity indices."
  },
  {
    term: "Infrastructure Debt Fund",
    definition: "A fund that invests in debt instruments tied to infrastructure projects."
  },
  {
    term: "Leveraged Buyout Fund",
    definition: "A private equity fund that uses borrowed money to acquire companies."
  },
  {
    term: "Long/Short Equity Fund",
    definition: "A hedge fund that takes long positions in undervalued stocks and short positions in overvalued ones."
  },
  {
    term: "Managed Account",
    definition: "An investment account owned by an individual but managed by a professional advisor."
  },
  {
    term: "Mortgage-Backed Security (MBS)",
    definition: "An investment backed by a pool of mortgages."
  },
  {
    term: "Multi-Asset Fund",
    definition: "A fund that invests across multiple asset classes to achieve diversification."
  },
  {
    term: "Opportunity Fund",
    definition: "A fund that invests in assets or companies experiencing temporary dislocation."
  },
  {
    term: "PE FoF",
    definition: "Private Equity Fund of Funds, which invests in a portfolio of private equity funds."
  },
  {
    term: "Precious Metals Fund",
    definition: "A fund that invests in metals like gold, silver, platinum, or palladium."
  },
  {
    term: "Quantitative Strategy Fund",
    definition: "A fund using computer models and statistical techniques to drive investment decisions."
  },
  {
    term: "Regional Fund",
    definition: "A fund that focuses on securities from a specific geographic region."
  },
  {
    term: "Return-Oriented Fund",
    definition: "A fund designed with the primary objective of achieving maximum returns, often at higher risk."
  },
  {
    term: "SME Fund",
    definition: "A fund targeting small and medium-sized enterprises."
  },
  {
    term: "Special Situations Fund",
    definition: "A fund investing in companies undergoing significant change such as mergers or restructuring."
  },
  {
    term: "Strategic Bond Fund",
    definition: "A bond fund with flexibility across different credit qualities and maturities."
  },
  {
    term: "Sub-Advised Fund",
    definition: "A fund managed by one firm but outsourced to another for specific investment strategies."
  },
  {
    term: "Target Volatility Fund",
    definition: "A fund designed to maintain portfolio volatility within a defined range."
  },
  {
    term: "UCITS Fund",
    definition: "A European Union-regulated investment fund structure available for sale to investors across the EU."
  },
  {
    term: "Unit Investment Trust (UIT)",
    definition: "An investment company that offers a fixed portfolio of securities in redeemable units."
  },
  {
    term: "Water Fund",
    definition: "A thematic fund investing in companies involved in water utilities, treatment, and technology."
  },

  // From finance_terms_colloquial.csv
  {
    term: "Animal Spirits",
    definition: "Investor sentiment or confidence driving market behavior."
  },
  {
    term: "Backstop",
    definition: "Financial support provided to stabilize a deal or market."
  },
  {
    term: "Basis Trade",
    definition: "Arbitrage between cash securities and futures."
  },
  {
    term: "Blow-Off Top",
    definition: "Final surge in prices before a market reversal."
  },
  {
    term: "Chasing Yield",
    definition: "Taking higher risks to achieve greater returns."
  },
  {
    term: "Clipping Coupons",
    definition: "Living off bond interest income."
  },
  {
    term: "Flight to Quality",
    definition: "Moving money into safer assets during volatility."
  },
  {
    term: "Front-Running",
    definition: "Trading ahead of a known large order."
  },
  {
    term: "Hot Money",
    definition: "Capital that moves quickly across markets chasing short-term gains."
  },
  {
    term: "Liquidity Crunch",
    definition: "Shortage of available cash or funding in markets."
  },
  {
    term: "Big Bath",
    definition: "Writing off all possible losses in one period."
  },
  {
    term: "Cooking the Books",
    definition: "Manipulating financial statements."
  },
  {
    term: "Haircut",
    definition: "Discount applied to collateral or valuation."
  },
  {
    term: "Kitchen Sink Accounting",
    definition: "Throwing every possible expense into one reporting period."
  },
  {
    term: "Mark-to-Market",
    definition: "Revaluing assets at current market prices."
  },
  {
    term: "Off-Balance-Sheet",
    definition: "Assets or liabilities kept outside standard accounting statements."
  },
  {
    term: "Overhang",
    definition: "Potential negative pressure from large future stock issuance."
  },
  {
    term: "Sandbagging",
    definition: "Deliberately lowering guidance to beat later."
  },
  {
    term: "Talking Your Book",
    definition: "Promoting investments you already hold."
  },
  {
    term: "Window Dressing",
    definition: "Adjusting portfolios at quarter-end to look better in reports."
  },
  {
    term: "Buy the Rumor, Sell the News",
    definition: "Prices rise ahead of news, then fall once confirmed."
  },
  {
    term: "Catch a Falling Knife",
    definition: "Buying into a rapidly declining stock."
  },
  {
    term: "Crowded Trade",
    definition: "A popular trade with too many investors on the same side."
  },
  {
    term: "Overexposed",
    definition: "Too much risk concentrated in one area."
  },
  {
    term: "Skin in the Game",
    definition: "Having personal capital invested."
  },
  {
    term: "Sleep-at-Night Portfolio",
    definition: "Conservative portfolio designed to minimize worry."
  },
  {
    term: "Stretch for Yield",
    definition: "Reaching into riskier assets to secure income."
  },
  {
    term: "Time Horizon",
    definition: "The length of time an investor expects to hold an asset."
  },
  {
    term: "Top-Heavy Portfolio",
    definition: "Portfolio dominated by a few large holdings."
  },
  {
    term: "Widow-and-Orphan Stock",
    definition: "Very safe, dividend-paying stock."
  },
  {
    term: "Currency War",
    definition: "Competitive devaluation between countries."
  },
  {
    term: "Helicopter Money",
    definition: "Central bank injecting cash directly into the economy."
  },
  {
    term: "Moral Hazard",
    definition: "When protection from risk encourages reckless behavior."
  },
  {
    term: "Shadow Banking",
    definition: "Lending and credit activity outside traditional banks."
  },
  {
    term: "Tail Risk",
    definition: "Extreme, low-probability events with outsized impact."
  },
  {
    term: "Too Big to Fail",
    definition: "Institutions so large that their collapse threatens the system."
  },
  {
    term: "Wall of Worry",
    definition: "Market climbs despite persistent concerns."
  },
  {
    term: "Zombie Company",
    definition: "A firm surviving only by rolling over debt."
  },
  {
    term: "Overleveraged",
    definition: "Holding too much debt relative to equity."
  },
  {
    term: "Run on the Bank",
    definition: "Mass withdrawals due to fear of insolvency."
  },

  // From finance_terms_500_800_cleaned.csv (already included above, but adding unique ones)
  {
    term: "Accredited Investor",
    definition: "An individual or entity allowed to invest in private markets due to meeting income, net worth, or professional criteria."
  },
  {
    term: "Alternative Assets",
    definition: "Non-traditional investments including private equity, hedge funds, real estate, commodities, and infrastructure."
  },
  {
    term: "Angel Investor",
    definition: "A high-net-worth individual who provides capital to early-stage companies, often in exchange for equity."
  },
  {
    term: "Asset Servicer",
    definition: "A financial institution that manages administrative aspects of alternative investment funds, such as reporting and custody."
  },
  {
    term: "Bridge Financing",
    definition: "Temporary financing used to cover short-term expenses until longer-term funding is secured."
  },
  {
    term: "Buyout",
    definition: "The acquisition of a controlling interest in a company, often using leverage."
  },
  {
    term: "Capital Call",
    definition: "A request made by a private equity or venture capital fund for investors to contribute committed capital."
  },
  {
    term: "Carried Interest",
    definition: "The share of profits that fund managers earn as compensation, typically 20% of fund gains."
  },
  {
    term: "Club Deal",
    definition: "A private equity transaction where multiple firms jointly acquire a company."
  },
  {
    term: "Co-Investment",
    definition: "An investment made alongside a private equity or venture capital fund, often with lower fees."
  },
  {
    term: "Commitment Period",
    definition: "The time frame during which investors in a private equity fund are required to provide committed capital."
  },
  {
    term: "Consolidation Strategy",
    definition: "A private equity strategy focused on rolling up smaller companies into a larger platform."
  },
  {
    term: "Deal Flow",
    definition: "The rate at which investment opportunities are presented to investors or funds."
  },
  {
    term: "Direct Lending",
    definition: "Non-bank institutions providing loans directly to businesses, a segment of private credit."
  },
  {
    term: "Distressed Assets",
    definition: "Investments in companies or securities that are financially troubled or near bankruptcy."
  },
  {
    term: "Drawdown",
    definition: "The process by which a fund calls capital from its investors to finance investments."
  },
  {
    term: "Dry Powder",
    definition: "Capital that has been committed to a fund but not yet deployed."
  },
  {
    term: "Due Diligence",
    definition: "The comprehensive appraisal of a company or asset before an investment is made."
  },
  {
    term: "EBITDA Multiple",
    definition: "A valuation metric comparing enterprise value to EBITDA, commonly used in private equity deals."
  },
  {
    term: "Exit Strategy",
    definition: "The method by which an investor realizes returns, such as IPO, sale, or recapitalization."
  },
  {
    term: "Family Office",
    definition: "A private wealth management advisory firm serving ultra-high-net-worth investors."
  },
  {
    term: "Feeder Fund",
    definition: "A fund that pools capital from investors to invest into a master fund, often in hedge fund structures."
  },
  {
    term: "Fund Administrator",
    definition: "A third-party provider that handles accounting, valuation, and reporting for private funds."
  },
  {
    term: "Fund of Funds (FoF)",
    definition: "An investment fund that invests in other private equity, hedge, or alternative funds."
  },
  {
    term: "Gate Provision",
    definition: "A clause in hedge fund structures that limits the amount of withdrawals in a given period."
  },
  {
    term: "General Partner (GP)",
    definition: "The manager of a private equity or venture capital fund, responsible for investment decisions."
  },
  {
    term: "Growth Equity",
    definition: "Investments in established companies seeking capital to expand without ceding control."
  },
  {
    term: "Hurdle Rate",
    definition: "The minimum rate of return a fund must achieve before managers can earn carried interest."
  },
  {
    term: "Illiquidity Premium",
    definition: "The additional return investors expect for investing in less liquid private assets."
  },
  {
    term: "Institutional Investor",
    definition: "Organizations like pension funds and endowments that allocate significant capital to private markets."
  },
  {
    term: "Internal Rate of Return (IRR)",
    definition: "A performance metric used to evaluate private equity and venture capital investments."
  },
  {
    term: "J-Curve Effect",
    definition: "The typical return pattern of private equity funds, where returns are negative in early years and positive later."
  },
  {
    term: "Key Person Clause",
    definition: "A provision in fund agreements that suspends new investments if named managers leave the firm."
  },
  {
    term: "Leveraged Buyout (LBO)",
    definition: "An acquisition financed primarily with borrowed funds."
  },
  {
    term: "Limited Partner (LP)",
    definition: "An investor in a private fund who provides capital but has limited liability and control."
  },
  {
    term: "Lock-Up Period",
    definition: "The time during which investors cannot withdraw or redeem their capital from a fund."
  },
  {
    term: "Management Fee",
    definition: "An annual fee paid by investors to fund managers, typically 1-2% of committed capital."
  },
  {
    term: "Mezzanine Financing",
    definition: "A hybrid of debt and equity financing, often used in buyouts and expansions."
  },
  {
    term: "NAV Waterfall",
    definition: "A distribution model determining how profits are shared among LPs and GPs."
  },
  {
    term: "Operating Partner",
    definition: "An executive hired by private equity firms to work with portfolio companies to drive value creation."
  },
  {
    term: "Overcommitment Strategy",
    definition: "A private equity practice where investors commit more capital than they can immediately fund, assuming staggered calls."
  },
  {
    term: "Pari Passu",
    definition: "A term meaning equal footing, used in private credit agreements where lenders share rights equally."
  },
  {
    term: "Placement Agent",
    definition: "An intermediary that raises capital for private funds from institutional investors."
  },
  {
    term: "Portfolio Company",
    definition: "A company that has been invested in by a private equity or venture capital fund."
  },
  {
    term: "Preferred Return",
    definition: "The minimum return LPs must receive before GPs can take carried interest."
  },
  {
    term: "Private Credit Fund",
    definition: "An investment vehicle that provides non-bank loans to companies."
  },
  {
    term: "Private Equity Secondaries",
    definition: "The buying and selling of pre-existing investor commitments in private equity funds."
  },
  {
    term: "Private Placement Memorandum (PPM)",
    definition: "A legal document provided to potential investors in private offerings."
  },
  {
    term: "Profit Sharing",
    definition: "The distribution of profits between LPs and GPs in a private equity fund."
  },
  {
    term: "Real Assets",
    definition: "Physical or tangible assets such as real estate, infrastructure, or commodities."
  },
  {
    term: "Recapitalization",
    definition: "A corporate restructuring involving changes to a company's debt and equity mix."
  },
  {
    term: "Restructuring Fund",
    definition: "A private equity fund specializing in distressed or turnaround investments."
  },
  {
    term: "Secondary Market for Private Equity",
    definition: "A market where investors buy and sell private equity fund stakes."
  },
  {
    term: "Seed Capital",
    definition: "Initial funding provided to start a new business or fund."
  },
  {
    term: "Side Letter",
    definition: "An agreement between a fund manager and an investor granting special terms."
  },
  {
    term: "Sovereign Wealth Fund",
    definition: "A state-owned investment vehicle that allocates to private markets."
  },
  {
    term: "Special Purpose Vehicle (SPV)",
    definition: "A legal entity created to isolate financial risk, often used in private deals."
  },
  {
    term: "Subscription Line Facility",
    definition: "A credit facility allowing funds to bridge capital calls by borrowing against LP commitments."
  },
  {
    term: "Take-Private Transaction",
    definition: "The acquisition of a public company by private investors, delisting it from exchanges."
  },
  {
    term: "Term Sheet",
    definition: "A non-binding agreement outlining the terms of a potential investment."
  },
  {
    term: "Turnaround Investment",
    definition: "Capital deployed into struggling companies with potential for recovery."
  },
  {
    term: "Unfunded Commitment",
    definition: "The portion of an investor's capital commitment not yet called by a fund."
  },
  {
    term: "Value Creation Plan",
    definition: "Strategies implemented by private equity firms to increase portfolio company value."
  },
  {
    term: "Venture Capital",
    definition: "Financing provided to startups and small businesses with high growth potential."
  },
  {
    term: "Vintage Year",
    definition: "The year in which a private equity fund makes its first investment."
  },
  {
    term: "Waterfall Structure",
    definition: "The distribution order of cash flows in a private fund between LPs and GPs."
  },
  {
    term: "Write-Off",
    definition: "An accounting action recognizing that an investment has lost all value."
  },
  {
    term: "Assets Under Management (AUM)",
    definition: "The total market value of assets that an investment firm manages on behalf of clients."
  },
  {
    term: "Beneficiary",
    definition: "A person or entity entitled to receive benefits from a trust, will, or insurance policy."
  },
  {
    term: "Client Onboarding",
    definition: "The process of initiating a new client relationship, including due diligence and account setup."
  },
  {
    term: "Client Retention",
    definition: "Strategies used by wealth managers to maintain long-term relationships with clients."
  },
  {
    term: "Concentration Risk",
    definition: "The risk of significant losses due to exposure to a single investment or sector."
  },
  {
    term: "Discretionary Account",
    definition: "An account in which a financial advisor has the authority to make investment decisions without client approval for each trade."
  },
  {
    term: "Estate Planning",
    definition: "The process of arranging for the management and disposal of a person's estate after death."
  },
  {
    term: "Family Governance",
    definition: "The system of processes and structures used by wealthy families to manage wealth and decision-making."
  },
  {
    term: "Fee-Based Account",
    definition: "An account where the advisor's compensation is based on a percentage of assets under management rather than commissions."
  },
  {
    term: "Financial Advisor",
    definition: "A professional who provides advice and management of financial assets for individuals or families."
  },
  {
    term: "Fiduciary Duty",
    definition: "An advisor's legal obligation to act in the best interest of their clients."
  },
  {
    term: "Generation-Skipping Trust",
    definition: "A trust that allows assets to be passed to grandchildren, bypassing the children to reduce estate taxes."
  },
  {
    term: "High-Net-Worth Individual (HNWI)",
    definition: "A person with liquid assets of at least $1 million."
  },
  {
    term: "Impact Investing",
    definition: "Investments made with the intention of generating positive, measurable social and environmental impact alongside financial returns."
  },
  {
    term: "Intergenerational Wealth Transfer",
    definition: "The passing of assets from one generation to the next."
  },
  {
    term: "Investment Committee",
    definition: "A group within a firm that makes key investment policy and strategy decisions."
  },
  {
    term: "Investor Relations (IR)",
    definition: "A department or role responsible for managing communication between a company and its investors."
  },
  {
    term: "KYC (Know Your Customer)",
    definition: "The process of verifying the identity of clients to comply with regulations and prevent fraud."
  },
  {
    term: "Liquidity Event",
    definition: "An event that allows investors to realize returns, such as an IPO or acquisition."
  },
  {
    term: "Managed Account",
    definition: "An investment account where a professional advisor manages assets on behalf of a client."
  },
  {
    term: "Multi-Family Office",
    definition: "A wealth management firm serving multiple wealthy families."
  },
  {
    term: "Performance Attribution",
    definition: "An analysis of a portfolio's performance to determine the impact of investment decisions."
  },
  {
    term: "Philanthropic Planning",
    definition: "Advisory services focused on structuring charitable giving."
  },
  {
    term: "Portfolio Review",
    definition: "A regular assessment of an investment portfolio's performance and alignment with client objectives."
  },
  {
    term: "Private Banking",
    definition: "Personalized financial services offered to high-net-worth individuals."
  },
  {
    term: "Relationship Manager",
    definition: "A professional responsible for maintaining client relationships in wealth management or banking."
  },
  {
    term: "Reporting Package",
    definition: "Customized financial reports delivered to clients to track portfolio performance and allocations."
  },
  {
    term: "Retirement Planning",
    definition: "The process of determining retirement income goals and strategies to achieve them."
  },
  {
    term: "Risk Profiling",
    definition: "The assessment of an investor's willingness and ability to take risks."
  },
  {
    term: "Separately Managed Account (SMA)",
    definition: "An investment account customized for one investor, managed by a professional firm."
  },
  {
    term: "Succession Planning",
    definition: "The strategy for transferring leadership and ownership of a business to the next generation."
  },
  {
    term: "Tax-Efficient Investing",
    definition: "Investment strategies aimed at minimizing tax liabilities."
  },
  {
    term: "Trust",
    definition: "A legal arrangement in which assets are held by one party for the benefit of another."
  },
  {
    term: "Ultra-High-Net-Worth Individual (UHNWI)",
    definition: "A person with investable assets exceeding $30 million."
  },
  {
    term: "Wealth Allocation",
    definition: "The distribution of an individual's or family's wealth across various asset classes and strategies."
  },
  {
    term: "Wealth Manager",
    definition: "A professional providing financial services, investment advice, and estate planning for affluent clients."
  },
  {
    term: "Yield Enhancement Strategy",
    definition: "An investment strategy designed to increase the return on a portfolio, often through options or structured products."
  },
  {
    term: "Client Segmentation",
    definition: "The practice of dividing clients into groups based on wealth, needs, or behavior to tailor services."
  },
  {
    term: "Investor Deck",
    definition: "A presentation used by companies or funds to communicate investment opportunities to investors."
  },
  {
    term: "Capital Raising",
    definition: "The process of securing funds from investors for a company or fund."
  },
  {
    term: "Placement Memorandum",
    definition: "A formal legal document provided to potential investors in a private placement."
  },
  {
    term: "Quarterly Earnings Call",
    definition: "A conference call where public companies discuss financial performance with investors."
  },
  {
    term: "Shareholder Activism",
    definition: "Actions taken by investors to influence a company's behavior by exercising shareholder rights."
  },
  {
    term: "Stakeholder Communication",
    definition: "The process of managing dialogue with all parties affected by a company's operations."
  },
  {
    term: "Stewardship Code",
    definition: "A set of principles guiding institutional investors on how to engage with companies responsibly."
  },
  {
    term: "Wealth Preservation",
    definition: "Strategies designed to protect accumulated wealth from risks such as taxes, inflation, and market downturns."
  },
  {
    term: "AML (Anti-Money Laundering)",
    definition: "Laws and regulations designed to prevent the illegal generation of income through financial systems."
  },
  {
    term: "Audit Trail",
    definition: "A record that shows who has accessed a system and what operations they performed."
  },
  {
    term: "Basel III",
    definition: "A global regulatory framework developed to strengthen bank capital requirements and risk management."
  },
  {
    term: "Beneficial Owner",
    definition: "A person who ultimately owns or controls an account or investment, even if held in another name."
  },
  {
    term: "CCAR (Comprehensive Capital Analysis and Review)",
    definition: "A regulatory framework introduced by the Federal Reserve to assess capital adequacy and planning at large banks."
  },
  {
    term: "Compliance Risk",
    definition: "The risk of legal or regulatory sanctions, financial loss, or reputational damage from failure to comply with laws and regulations."
  },
  {
    term: "Conflict of Interest",
    definition: "A situation where a person or organization could exploit their position for personal or financial gain."
  },
  {
    term: "Counterparty Risk",
    definition: "The likelihood that the other party in an investment or transaction might default on its obligations."
  },
  {
    term: "Credit Risk",
    definition: "The possibility of a borrower failing to meet obligations in accordance with agreed terms."
  },
  {
    term: "Cybersecurity Risk",
    definition: "The potential for financial loss, disruption, or reputational damage due to a cyberattack or data breach."
  },
  {
    term: "Dodd-Frank Act",
    definition: "U.S. legislation aimed at reducing risks in the financial system after the 2008 crisis."
  },
  {
    term: "Enterprise Risk Management (ERM)",
    definition: "The process of planning, organizing, leading, and controlling activities to minimize risks across an organization."
  },
  {
    term: "FATCA (Foreign Account Tax Compliance Act)",
    definition: "A U.S. law requiring foreign financial institutions to report on financial accounts held by U.S. taxpayers."
  },
  {
    term: "Financial Crime",
    definition: "Illegal acts involving fraud, money laundering, bribery, or corruption within financial systems."
  },
  {
    term: "GRC (Governance, Risk, and Compliance)",
    definition: "A framework that integrates governance, risk management, and compliance into processes and culture."
  },
  {
    term: "Insider Risk",
    definition: "The threat posed by individuals within an organization who might misuse access to data or systems."
  },
  {
    term: "Liquidity Risk",
    definition: "The risk that an entity may not be able to meet short-term financial obligations due to the inability to convert assets into cash quickly."
  },
  {
    term: "Market Risk",
    definition: "The possibility of losses due to movements in market prices, such as interest rates, equity prices, or currencies."
  },
  {
    term: "Model Risk",
    definition: "The risk of inaccuracy in financial models used for decision-making."
  },
  {
    term: "Money Laundering",
    definition: "The process of concealing the origins of illegally obtained money, typically by means of transfers involving foreign banks or businesses."
  },
  {
    term: "Operational Risk",
    definition: "The risk of loss from inadequate or failed internal processes, people, or systems."
  },
  {
    term: "RegTech",
    definition: "Technology used to improve regulatory monitoring, reporting, and compliance processes."
  },
  {
    term: "Regulation Best Interest (Reg BI)",
    definition: "A U.S. rule requiring broker-dealers to act in the best interest of their clients when recommending securities."
  },
  {
    term: "Reputational Risk",
    definition: "The potential for negative publicity to cause financial or market share loss."
  },
  {
    term: "Risk Appetite",
    definition: "The amount and type of risk that an organization is willing to take in pursuit of its objectives."
  },
  {
    term: "Risk Assessment",
    definition: "The process of identifying and evaluating risks and their potential impact."
  },
  {
    term: "Risk Mitigation",
    definition: "Steps taken to reduce the adverse effects of potential risks."
  },
  {
    term: "Sanctions Screening",
    definition: "The process of checking transactions or clients against government sanction lists."
  },
  {
    term: "Sarbanes-Oxley Act (SOX)",
    definition: "U.S. legislation enacted to protect investors from fraudulent accounting activities by corporations."
  },
  {
    term: "Scenario Analysis",
    definition: "The process of analyzing possible future events by considering alternative outcomes (scenarios)."
  },
  {
    term: "SEC Compliance",
    definition: "Adherence to the rules and regulations set by the U.S. Securities and Exchange Commission."
  },
  {
    term: "Solvency II",
    definition: "An EU directive that codifies and harmonizes insurance regulation across member states."
  },
  {
    term: "Stress Testing",
    definition: "A simulation technique used to evaluate how a portfolio or institution might react to extreme conditions."
  },
  {
    term: "Systemic Risk",
    definition: "The risk of collapse of an entire financial system due to the failure of one or more significant institutions."
  },
  {
    term: "Third-Party Risk",
    definition: "The potential risk that comes from outsourcing to or depending on external vendors or partners."
  },
  {
    term: "Value at Risk (VaR)",
    definition: "A measure of the potential loss in value of a portfolio over a defined period for a given confidence interval."
  },
  {
    term: "Whistleblower",
    definition: "A person who exposes information about illicit activities within an organization."
  },
  {
    term: "Zero-Tolerance Policy",
    definition: "A compliance approach where no violations of a particular rule or standard are tolerated."
  },
  {
    term: "Accounts Payable",
    definition: "Money owed by a company to its suppliers or vendors for goods and services purchased on credit."
  },
  {
    term: "Accounts Receivable",
    definition: "Money owed to a company by its customers for products or services delivered on credit."
  },
  {
    term: "Accrued Expense",
    definition: "An accounting expense recognized before it is paid, such as wages payable or interest payable."
  },
  {
    term: "Accumulated Depreciation",
    definition: "The total depreciation expense that has been recorded against an asset since its purchase."
  },
  {
    term: "Asset Valuation",
    definition: "The process of determining the fair market or present value of assets."
  },
  {
    term: "Book Value per Share",
    definition: "A company's total book value divided by the number of outstanding shares."
  },
  {
    term: "Capital Expenditure (CapEx)",
    definition: "Funds used by a company to acquire, upgrade, or maintain physical assets such as property or equipment."
  },
  {
    term: "Carrying Value",
    definition: "The value of an asset on a company's balance sheet, equal to cost minus accumulated depreciation and impairment."
  },
  {
    term: "Cash Conversion Cycle",
    definition: "The time it takes for a company to convert resource inputs into cash flows from sales."
  },
  {
    term: "Cost of Capital",
    definition: "The return a company must earn on its investments to maintain its market value and attract funds."
  },
  {
    term: "Cost of Goods Sold (COGS)",
    definition: "The direct costs attributable to the production of goods sold by a company."
  },
  {
    term: "Creditors",
    definition: "Parties to whom money is owed by a business."
  },
  {
    term: "Current Ratio",
    definition: "A liquidity ratio that measures a company's ability to pay short-term obligations with current assets."
  },
  {
    term: "Days Sales Outstanding (DSO)",
    definition: "The average number of days it takes for a company to collect payment after a sale."
  },
  {
    term: "Depreciation",
    definition: "The allocation of the cost of a tangible asset over its useful life."
  },
  {
    term: "Dilution",
    definition: "The reduction in ownership percentage of existing shareholders due to the issuance of new shares."
  },
  {
    term: "Discounted Cash Flow (DCF)",
    definition: "A valuation method estimating the value of an investment based on its expected future cash flows."
  },
  {
    term: "EBIT",
    definition: "Earnings Before Interest and Taxes, a measure of a firm's profitability."
  },
  {
    term: "Enterprise Value (EV)",
    definition: "The total value of a business, including market capitalization, debt, and excluding cash."
  },
  {
    term: "Fair Market Value",
    definition: "The price that an asset would sell for on the open market."
  },
  {
    term: "Free Cash Flow (FCF)",
    definition: "Cash generated by a company after accounting for capital expenditures."
  },
  {
    term: "GAAP (Generally Accepted Accounting Principles)",
    definition: "A collection of commonly followed accounting rules and standards in the U.S."
  },
  {
    term: "Goodwill",
    definition: "An intangible asset representing the excess purchase price over the fair value of a company's net assets."
  },
  {
    term: "Impairment",
    definition: "A reduction in the recoverable value of an asset below its carrying amount."
  },
  {
    term: "Income Statement",
    definition: "A financial statement showing revenue, expenses, and profit over a period of time."
  },
  {
    term: "Intangible Asset",
    definition: "An asset without physical substance, such as patents, trademarks, or goodwill."
  },
  {
    term: "Inventory Turnover",
    definition: "A ratio showing how many times a company sells and replaces its inventory during a period."
  },
  {
    term: "Leverage Ratio",
    definition: "Any ratio that measures the level of debt compared to equity or assets."
  },
  {
    term: "Liquidity Ratio",
    definition: "A financial metric used to determine a company's ability to cover its short-term obligations."
  },
  {
    term: "Market Capitalization",
    definition: "The total market value of a company's outstanding shares of stock."
  },
  {
    term: "Net Income",
    definition: "A company's total earnings after expenses, taxes, and costs are deducted from revenue."
  },
  {
    term: "Net Present Value (NPV)",
    definition: "The value of expected future cash flows discounted back to the present."
  },
  {
    term: "Operating Income",
    definition: "Profit generated from normal business operations."
  },
  {
    term: "Operating Margin",
    definition: "Operating income divided by net sales, expressed as a percentage."
  },
  {
    term: "P/B Ratio",
    definition: "Price-to-Book Ratio, comparing a firm's market value to its book value."
  },
  {
    term: "P/E Ratio",
    definition: "Price-to-Earnings Ratio, comparing a company's share price to its earnings per share."
  },
  {
    term: "Prepaid Expense",
    definition: "An expense paid in advance and recorded as an asset until consumed."
  },
  {
    term: "Quick Ratio",
    definition: "A measure of liquidity that excludes inventory from current assets."
  },
  {
    term: "Return on Assets (ROA)",
    definition: "A measure of profitability that indicates how efficiently a company uses its assets."
  },
  {
    term: "Return on Capital Employed (ROCE)",
    definition: "A profitability ratio that measures how well a company generates profits from its capital."
  },
  {
    term: "Return on Investment (ROI)",
    definition: "A measure of the gain or loss generated on an investment relative to its cost."
  },
  {
    term: "Revenue Recognition",
    definition: "An accounting principle dictating when revenue is recorded and reported."
  },
  {
    term: "Tangible Asset",
    definition: "An asset with physical form, such as property, plant, or equipment."
  },
  {
    term: "Terminal Value",
    definition: "The value of a business or asset beyond the forecast period in a DCF model."
  },
  {
    term: "Variable Cost",
    definition: "A cost that changes in proportion to production volume."
  },
  {
    term: "Working Capital",
    definition: "Current assets minus current liabilities, a measure of liquidity."
  },
  {
    term: "Write-Down",
    definition: "A reduction in the book value of an asset when its fair market value falls below carrying value."
  },
  {
    term: "Write-Up",
    definition: "An increase in the book value of an asset if its fair market value rises."
  }
];
