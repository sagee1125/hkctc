import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Supplement IX to CEPA - Clauses",
    liberalisation: `Liberalisation of Trade in Services (extracted from the Annex of Supplement IX to CEPA)`,
    sectors: "Sectors or sub-sectors",
    business_services: "Business Services",
    other_business_services: "F. Other Business Services",
    technical_testing:
      "e. Technical testing and analysis services (CPC8676) Product testing services (CPC7490)",
    special: "Specific commitments",
    to_expand: (
      <>
        To expand, on a pilot basis in Guangdong Province, the scope of
        certification services that can be undertaken by Hong Kong testing
        organisations to cover food. (See&nbsp;
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Implementation Guide
        </a>
        &nbsp;for details.)
      </>
    ),
  },
  cn: {
    title: "《CEPA補充協議九》 - 有關條文",
    liberalisation: "服務貿易開放措施（節錄自《CEPA補充協議九》（附件））",
    sectors: "部門或分部門",
    business_services: "商務服務",
    other_business_services: "F. 其他商務服務",
    technical_testing: "技術檢驗和分析服務（CPC8676）和貨物檢驗服務（CPC7490）",
    special: "具體承諾",
    to_expand: (
      <>
        在廣東省試點將香港檢測機構獲准承擔的認證服務範圍放寬至食品類別。（詳情見
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          實施指南）
        </a>
        ）
      </>
    ),
  },
};

export const SupplementIXtoCEPAClauses: React.FC = () => {
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const {
    title,
    liberalisation,
    sectors,
    business_services,
    other_business_services,
    technical_testing,
    special,
    to_expand,
  } = page_text;

  return (
    <div className="flex-1">
      <SquareTitle title={title} />
      <p className="text-heading-l my-[24px]">{liberalisation}</p>
      <p className="text-heading-m mb-[24px]">{sectors}</p>
      <ol>
        <li className="text-body-m">{business_services}</li>
      </ol>
      <p className="text-body-m">{other_business_services}</p>
      <p className="text-body-m">{technical_testing}</p>
      <p className="my-[24px] text-heading-m">{special}</p>
      <p className="text-body-m">{to_expand}</p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
