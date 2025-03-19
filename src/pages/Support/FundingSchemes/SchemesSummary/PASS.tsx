import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";

const rows = [
  {
    schemeName: "Professional Services Advancement Support Scheme (PASS)",
    schemeNameHyperLink: "https://www.pass.gov.hk/index.html",
    objective: "Enhance standards/competitiveness of professional services",
    targetAudience: "Non-profit organisations",
    fundingAmount: "Up to 90% of project cost or HK$3 million",
  },
];

export const PASS: React.FC = () => {
  return <FundingSchemesTable rows={rows} />;
};
