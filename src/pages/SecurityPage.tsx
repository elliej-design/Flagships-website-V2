import React from 'react';

interface SecurityPageProps {
  onNavigate?: (page: string) => void;
}

const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
  return (
    <div className="security-page">
      <div className="security-container">
        <article className="security-content">
          <h1 className="security-title">Security & Trust</h1>
          
          <p className="security-intro">
            At Flagships, we understand that trust is earned — not assumed. In a world where sensitive financial and strategic information is shared across firms, platforms, and jurisdictions, security isn't just a feature; it's a foundation. Our Security & Trust framework is designed to protect your data, your reputation, and your clients' confidence.
          </p>

          <h2 className="security-heading">Multi-Layer Protection</h2>
          <p className="security-paragraph">
            We protect your information at every stage — in transit, in rest, and while in use — using state-of-the-art encryption, client-level access controls, and dynamic watermarking. Every document, file, or data feed is handled under rigorous protocols to prevent leakage, unauthorized access, or misuse.
          </p>

          <h2 className="security-heading">Zero Trust & Granular Control</h2>
          <p className="security-paragraph">
            We operate under a zero-trust philosophy: every action is verified, and no access is implicit. Role-based permissions, device authentication, and risk-based multifactor authentication ensure that users see only what they need — nothing more. Administration, logging, and audit trails give you full visibility into who accessed what, when, and how.
          </p>

          <h2 className="security-heading">Transparent Governance & Compliance</h2>
          <p className="security-paragraph">
            Regulatory and privacy regimes evolve rapidly. That's why we embed compliance into our architecture. From GDPR and U.S. privacy frameworks to industry-specific requirements, we maintain rigorous controls, independent reviews, and audit readiness. Our external certification process and periodic security assessments help validate our approach.
          </p>

          <h2 className="security-heading">A Partnership You Can Trust</h2>
          <p className="security-paragraph">
            We approach security as a shared responsibility. We welcome independent audits, provide transparency into our architecture, and partner with you on compliance and due diligence. You retain control of your data, access policies, and lifecycle — we provide the secure environment and infrastructure to support it.
          </p>

          <div className="security-commitment">
            <p className="security-commitment-text">
              <strong>Your Data. Our Commitment.</strong>
            </p>
            <p className="security-paragraph">
              At Flagships, security and trust are not afterthoughts. They're at the heart of every product, integration, and client interaction. We take that responsibility seriously so you can collaborate, transact, and build with confidence.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SecurityPage;
