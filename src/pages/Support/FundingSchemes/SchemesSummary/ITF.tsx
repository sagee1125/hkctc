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
    schemeName: "企業支援計劃",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-tc/ESS.asp",
    scLink: "https://www.itf.gov.hk/l-sc/ESS.asp",
    objective: "鼓勵私營機構進行研發",
    targetAudience: "私營機構",
    fundingAmount: "最高為1,000萬港元",
  },
  {
    schemeName: "創新及科技支援計劃",
    schemeNameHyperLink:
      "https://www.itf.gov.hk/tc/funding-programmes/supporting-research/itsp/itsp-platform-seed/index.html",
    scLink:
      "https://www.itf.gov.hk/sc/funding-programmes/supporting-research/itsp/itsp-platform-seed/index.html",
    objective: "支援由指定本地公營科研機構及研發中心所進行的研發項目",
    targetAudience: "本地公營科研機構及研發中心",
    fundingAmount: "視乎項目",
  },
  {
    schemeName: "夥伴研究計劃",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-eng/PRP.asp",
    scLink: "https://www.itf.gov.hk/l-eng/PRP.asp",
    objective:
      "支援由研發中心或指定本地公營科研機構與公司合作所進行的應用研發項目",
    targetAudience: "研發中心或指定本地公營科研機構",
    fundingAmount: "視乎項目",
  },
  {
    schemeName: "投資研發現金回贈計劃",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-tc/crs.asp",
    scLink: "https://www.itf.gov.hk/l-sc/crs.asp",
    objective: "提供財務誘因，鼓勵私營企業參與研發工作",
    targetAudience: "私營企業",
    fundingAmount: "應用科研項目投資額40% 的現金回贈",
  },
  {
    schemeName: "一般支援計劃",
    schemeNameHyperLink: "https://www.itf.gov.hk/l-tc/GSP.asp",
    scLink: "https://www.itf.gov.hk/l-sc/GSP.asp",
    objective: "支援有助提升本港產業和推動其發展的項目及培養創新科技風氣",
    targetAudience: "本港機構",
    fundingAmount: "視乎項目",
  },
  {
    schemeName: "新型工業化及科技培訓計劃",
    schemeNameHyperLink:
      "https://www.itf.gov.hk/tc/funding-programmes/nurturing-talent/nittp/index.html",
    scLink:
      "https://www.itf.gov.hk/sc/funding-programmes/nurturing-talent/nittp/index.html",
    objective: "讓本地企業員工接受高端科技培訓",
    targetAudience: "本地企業",
    fundingAmount: "以2（政府）：1（企業）的配對形式資助",
  },
];

export const ITF: React.FC = () => {
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
            schemeNameHyperLink: r.scLink,
          };
        });

  return <FundingSchemesTable rows={rows} />;
};
