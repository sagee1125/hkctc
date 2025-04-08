import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Supplement VIII to CEPA - Clauses",
    liberalisation_of_Trade: `Liberalisation of Trade in Services (extracted from the Annex to
        Supplement VIII to CEPA)`,
    subgroup_sec: "Sectors or sub-sectors",
    sec_list: [
      `1. Business Services`,
      `F. Other Business Services`,
      `e. Technical testing and analysis services (CPC8676) Product testing
        services (CPC7490)`,
    ],
    specific_commitments: "Specific commitments",
    to_expand: `To expand, on the basis of Supplement VII to the CEPA, the scope of
        product testing that can be undertaken by testing organisations in Hong
        Kong for the China Compulsory Certification (CCC) System to all existing
        products processed in Hong Kong that require CCC. These testing
        organisations have to be accredited by the accreditation body of the
        Government of Hong Kong Special Administrative Region (i.e. the Hong
        Kong Accreditation Service) to be capable of performing testing for the
        relevant products under the CCC System.`,
  },
  cn: {
    title: "《CEPA補充協議八》 - 有關條文",
    liberalisation_of_Trade: `服務貿易開放措施（節錄自《CEPA補充協議八》（附件））`,
    subgroup_sec: "部門或分部門",
    sec_list: [
      `1. 商業服務`,
      `F. 其他商業服務`,
      `e. 技術檢驗和分析服務（CPC8676）
貨物檢驗服務（CPC7490）`,
    ],
    specific_commitments: "具體承諾",
    to_expand: `允許經香港特區政府認可機構（香港認可處）認可的具備中國強制性產品認證（CCC）制度相關產品檢測能力的香港檢測機構承擔CCC認證檢測任務的範圍在《<安排>補充協議七》的基礎上擴大至現行所有需CCC認證的香港本地加工的產品。`,
  },
};

export const SupplementVIIItoCEPAClauses: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    title,
    subgroup_sec,
    sec_list,
    specific_commitments,
    to_expand,
    liberalisation_of_Trade,
  } = page_text;
  return (
    <div className="flex-1">
      <SquareTitle title={title as string} />
      <div className="text-heading-l my-[24px]">
        {liberalisation_of_Trade as React.ReactNode}
      </div>
      <p className="text-heading-m mb-[24px]">
        {subgroup_sec as React.ReactNode}
      </p>

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
        {specific_commitments as React.ReactNode}
      </p>
      <p className="text-body-m text-justify">{to_expand as React.ReactNode}</p>

      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
