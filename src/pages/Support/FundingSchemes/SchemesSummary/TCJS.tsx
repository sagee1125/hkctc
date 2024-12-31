import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";

const rows = [
  {
    schemeName: "Testing and Certification Sector Job Creation Scheme (TCJS)",
    objective: "Subsidize job creation in the T&C sector",
    targetAudience: "Local private T&C organizations",
    fundingAmount: `HK$10,000 per position/month for 12 months`,
  },
];

export const TCJS: React.FC = () => {
  return <FundingSchemesTable rows={rows} />;
};
