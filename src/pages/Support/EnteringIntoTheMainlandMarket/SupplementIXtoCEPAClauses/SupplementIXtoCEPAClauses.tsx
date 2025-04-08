import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Supplement IX to CEPA - Clauses",
    liberalisation_of_Trade: `Liberalisation of Trade in Services (extracted from the Annex of
        Supplement IX to CEPA)`,
    subgroup_sec: "Sectors or sub-sectors",
    sec_list: [
      `1. Business Services`,
      `F. Other Business Services`,
      `e. Technical testing and analysis services (CPC8676) Product testing
        services (CPC7490)`,
    ],
    specific_commitments: "Specific commitments",
    to_expand: (
      <>
        To expand, on a pilot basis in Guangdong Province, the scope of
        certification services that can be undertaken by Hong Kong testing
        organisations to cover food. (See&nbsp;
        <a
          aria-label="link"
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
    liberalisation_of_Trade: `服務貿易開放措施（節錄自《CEPA補充協議九》（附件））`,
    subgroup_sec: "部門或分部門",
    sec_list: [
      `1. 商業服務`,
      `F. 其他商業服務`,
      `e. 技術檢驗和分析服務（CPC8676）貨物檢驗服務（CPC7490）`,
    ],
    specific_commitments: "具體承諾",
    to_expand: (
      <>
        在廣東省試點將香港檢測機構獲准承擔的認證服務範圍放寬至食品類別。（詳情見&nbsp;
        <a
          aria-label="link"
          href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          實施指南
        </a>
        ）
      </>
    ),
  },
};

export const SupplementIXtoCEPAClauses: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    title,
    liberalisation_of_Trade,
    subgroup_sec,
    sec_list,
    specific_commitments,
    to_expand,
  } = page_text;
  return (
    <div className="flex-1">
      <SquareTitle title={title as string} />
      <p className="text-heading-l my-[24px]">
        {liberalisation_of_Trade as string}
      </p>
      <p className="text-heading-m mb-[24px]">{subgroup_sec as string}</p>
      <div className="text-justify">
        {(sec_list as string[]).map((s, i) => {
          return (
            <p className="text-body-m" key={i}>
              {s}
            </p>
          );
        })}
      </div>

      <p className="my-[24px] text-heading-m">
        {specific_commitments as string}
      </p>
      <p className="text-body-m text-justify">{to_expand as React.ReactNode}</p>

      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
