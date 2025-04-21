import * as React from "react";
import { FundingSchemesTable } from "./FundingSchemesTable";
import { Language, useSettings } from "../../../../context";

const rowsEN = [
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
    targetAudience: "Non-profit organisations",
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
];

const rowsCN = [
  {
    schemeName: "BUD 專項基金（企業支援計劃）",
    schemeNameHyperLink: "https://www.bud.hkpc.org/",
    objective: "支援品牌發展、升級轉型及市場拓展",
    targetAudience: "中小企業",
    fundingAmount: `視乎計劃（例如：「BUD 申請易」最高 HK$100,000）`,
  },
  {
    schemeName: "工商機構支援基金（TSF）",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/tc_chi/tsf/tsf_objective.html",
    objective: "透過專案提升中小企業的競爭力",
    targetAudience: "非牟利機構",
    fundingAmount: `最高 HK$500 萬或項目成本的 90%`,
  },
  {
    schemeName: "中小企業市場推廣基金",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/tc_chi/emf/emf_objective.html",
    objective: "支援出口推廣活動",
    targetAudience: "中小企業",
    fundingAmount: `每次最高 HK$100,000，累計上限 HK$400,000`,
  },
  {
    schemeName: "中小企業信貸保證計劃",
    schemeNameHyperLink:
      "https://www.smefund.tid.gov.hk/tc_chi/sgs/sgs_objective.html",
    objective: "提供貸款擔保以支援設備投資及營運資金",
    targetAudience: "中小企業",
    fundingAmount: `最高 HK$600 萬`,
  },
];

const sCLinks = [
  "https://www.bud.hkpc.org/zh-hans",
  "https://www.smefund.tid.gov.hk/sc_chi/tsf/tsf_objective.html",
  "https://www.smefund.tid.gov.hk/sc_chi/emf/emf_objective.html",
  "https://www.smefund.tid.gov.hk/sc_chi/sgs/sgs_objective.html",
];

export const TID: React.FC = () => {
  const { language } = useSettings();

  const rows =
    language === Language.EN
      ? rowsEN
      : language === Language.ZH_TW
      ? rowsCN
      : rowsCN.map((r, i) => {
          const { schemeNameHyperLink, ...rest } = r;
          return {
            ...rest,
            schemeNameHyperLink: sCLinks[i],
          };
        });

  return <FundingSchemesTable rows={rows} />;
};
