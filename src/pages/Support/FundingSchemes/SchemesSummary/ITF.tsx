import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";

const rows = [
  // {
  //   schemeName: "Technology Voucher Programme (TVP)",
  //   schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/ESS.asp",
  //   objective: "Improve productivity and transform business processes",
  //   targetAudience: "Non-listed local enterprises",
  //   fundingAmount: "Up to HK$600,000",
  // },
  {
    schemeName: "Enterprise Support Scheme (ESS)",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/ESS.asp",
    objective: "Encourage private sector investment in R&D",
    targetAudience: "Private companies",
    fundingAmount: "Up to HK$10 million",
  },
  {
    schemeName: "Innovation and Technology Support Programme (ITSP)",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/ITSP.asp",

    objective: "Support R&D projects",
    targetAudience: "Public research institutes",
    fundingAmount: "Varies",
  },
  {
    schemeName: "Partnership Research Programme (PRP)",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/PRP.asp",

    objective: "Support collaborative R&D projects",
    targetAudience: "Private companies and universities",
    fundingAmount: "Varies",
  },
  {
    schemeName: "Research and Development Cash Rebate Scheme",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/PRP.asp",

    objective: "Provide cash rebate for R&D investments",
    targetAudience: "Private enterprises",
    fundingAmount: "40% of R&D investments",
  },
  {
    schemeName: "General Support Programme (GSP)",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/GSP.asp",
    objective: "Support non-R&D projects that promote innovation",
    targetAudience: "All sectors",
    fundingAmount: "Varies",
  },
  {
    schemeName:
      "New Industrialisation and Technology Training Programme (NITTP)",
    schemeNameHyperLink:
      "https://www.itf.gov.hk/en/funding-programmes/nurturing-talent/nittp/index.html",

    objective: "Train staff in advanced technologies",
    targetAudience: "Local companies",
    fundingAmount: "2:1 matching (Gov:Enterprise)",
  },
];

export const ITF: React.FC = () => {
  return <FundingSchemesTable rows={rows} />;
};
