import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";

const rows = [
  {
    schemeName: "Testing and Certification Industry Job Creation Scheme (TCJS)",
    schemeNameHyperLink: "https://www.hkctc.gov.hk/en/tcjs/",
    objective: "Subsidize job creation in the T&C industry",
    targetAudience: "Local private T&C organisations",
    fundingAmount: `HK$10,000 per position/month for 12 months`,
  },
];

export const TCJS: React.FC = () => {
  return <FundingSchemesTable rows={rows} />;
};
