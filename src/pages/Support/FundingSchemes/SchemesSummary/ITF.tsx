import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";
import { Language, useSettings } from "../../../../context";

const rowsEN = [
  {
    schemeName: "Enterprise Support Scheme (ESS)",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/ESS.asp",
    objective: "Encourage private industry investment in R&D",
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
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/crs.asp",
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

const rowsCN = [
  {
    schemeName: "BUD 專項基金（企業支援計劃）",
    schemeNameHyperLink: "https://www.bud.hkpc.org/index.php/en",
    objective: "支援品牌發展、升級轉型及市場拓展",
    targetAudience: "中小企業",
    fundingAmount: "視乎計劃（例如：「BUD 申請易」最高 HK$100,000）",
  },
  {
    schemeName: "工商機構支援基金",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/english/tsf/tsf_objective.html",
    objective: "透過專案提升中小企業的競爭力",
    targetAudience: "非牟利機構",
    fundingAmount: "最高 HK$500 萬或項目成本的 90%",
  },
  {
    schemeName: "中小企業市場推廣基金",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/english/emf/emf_objective.html",
    objective: "支援出口推廣活動",
    targetAudience: "中小企業",
    fundingAmount: "每次最高 HK$100,000，累計上限 HK$400,000",
  },
  {
    schemeName: "中小企業信貸保證計劃",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/english/sgs/sgs_introduction.html",
    objective: "提供貸款擔保以支援設備投資及營運資金",
    targetAudience: "中小企業",
    fundingAmount: "最高 HK$600 萬",
  },
];

export const ITF: React.FC = () => {
  const { language } = useSettings();

  const rows = language === Language.EN ? rowsEN : rowsCN;
  return <FundingSchemesTable rows={rows} />;
};
