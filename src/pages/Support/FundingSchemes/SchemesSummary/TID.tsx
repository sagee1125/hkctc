import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";

const rows = [
  {
    schemeName: "BUD Fund (Enterprise Support Programme)",
    schemeNameHyperLink: "https://www.bud.hkpc.org/index.php/en",
    objective: "Support branding, upgrading, and market expansion",
    targetAudience: "SMEs",
    fundingAmount: `Varies (e.g., HK$100,000 for "Easy BUD")`,
  },
  {
    schemeName: "Trade and Industrial Organisation Support Fund (TSF)",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/english/tsf/tsf_objective.html",
    objective: "Enhance SME competitiveness through projects",
    targetAudience: "Non-profit organizations",
    fundingAmount: `Up to HK$5 million or 90% of project cost`,
  },
  {
    schemeName: "SME Export Marketing Fund",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/english/emf/emf_objective.html",
    objective: "Support export promotion activities",
    targetAudience: "SMEs",
    fundingAmount: `Up to HK$100,000 per grant; cumulative HK$400,000`,
  },
  {
    schemeName: "SME Loan Guarantee Scheme",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/english/sgs/sgs_introduction.html",
    objective: "Secure loans for installations, equipment, and working capital",
    targetAudience: "SMEs",
    fundingAmount: `Up to HK$6 million`,
  },
];

export const TID: React.FC = () => {
  return <FundingSchemesTable rows={rows} />;
};
