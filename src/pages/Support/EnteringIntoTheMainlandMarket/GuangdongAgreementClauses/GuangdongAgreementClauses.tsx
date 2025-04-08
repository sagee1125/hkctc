import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { useSettings } from "../../../../context";

export const GuangdongAgreementClauses: React.FC = () => {
  const { getSingleText, getPageText, getSingleNode, processLink } =
    useSettings();

  const multilingual = {
    en: {
      title: "Guangdong Agreement - Clauses",
      liberalisation:
        "Liberalisation of Trade in Services (extracted from Table 2 of Annex 1 of the Guangdong Agreement)",
      sectors: "Sectors or sub-sectors",
      business_services: "Business Services",
      other_business_services: "F. Other Business Services",
      technical_testing: "e. Technical testing and analysis services (CPC8676)",
      special: "Specific commitments",
      effective: "Effective from 1 March 2025",
      specific_commitments: [
        "In the area of voluntary certification, to allow testing organisations in Hong Kong to cooperate with Mainland certification bodies to undertake testing of products manufactured or processed in Hong Kong or in the Mainland. These testing organisations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region (i.e. the Hong Kong Accreditation Service) to be competent in performing testing for the relevant products.",
        `To allow testing organisations in Hong Kong to cooperate with designated Mainland organisations to undertake testing of products for the China Compulsory Certification (CCC) System. The products are under the "audio and visual apparatus" category of the CCC System, and have to be designed and prototyped in Hong Kong, as well as processed or manufactured in Guangdong Province. These testing organisations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region (i.e. the Hong Kong Accreditation Service) to be competent in performing testing for the relevant products under the CCC System.`,
      ],
      guide: (
        <p className="text-italic-s italic mt-[24px]">
          An&nbsp;
          <a
            aria-label="link"
            className="underline text-[#00E]"
            href={processLink(
              "https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Implementation Guide
          </a>
          &nbsp;was promulgated to provide details for the implementation of the
          two testing and certification related liberalisation measures in Table
          2 of Annex 1.
        </p>
      ),
    },
    cn: {
      title:
        "《關於內地在廣東與香港基本實現服務貿易自由化的協議》（《廣東協議》） - 有關條文",
      liberalisation: "服務貿易開放措施（節錄自《廣東協議》（附件1表2））",
      sectors: "部門或分部門",
      business_services: "商務服務",
      other_business_services: "F. 其他商務服務",
      technical_testing: "e. 技術測試和分析服務（CPC8676）",
      special: "具體承諾",
      effective: "（2025年3月1日起實施）",
      specific_commitments: [
        "在自願性認證領域，允許經香港特區政府認可機構（香港認可處）認可的具備相關產品檢測能力的香港檢測機構與內地認證機構合作，對香港本地或內地生產或加工的產品進行檢測。",
        `在強制性產品認證（CCC）領域，允許經香港特區政府認可機構（香港認可處）認可的具備中國強制性產品認證制度相關產品檢測能力的香港檢測機構，與內地指定機構開展合作，承擔在港設計定型且在廣東省加工或生產的音視頻設備類產品的CCC檢測任務。`,
      ],
      guide: (
        <p className="text-italic-s italic mt-[24px]">
          內地已公布
          <a
            aria-label="link"
            className="underline text-[#00E]"
            href={processLink(
              "https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            實施指南
          </a>
          ，為實施附件1表2的兩項檢測認證相關開放措施提供詳情。
        </p>
      ),
    },
  };

  const page_text = getPageText(multilingual);

  const {
    title,
    liberalisation,
    sectors,
    business_services,
    other_business_services,
    technical_testing,
    special,
    specific_commitments,
    guide,
  } = page_text;

  const specificCommitmentSection = (
    <ul className="text-body-m text-justify">
      {(specific_commitments as string[]).map((commit, index) => (
        <React.Fragment key={index}>
          <br />
          <li>{commit}</li>
        </React.Fragment>
      ))}
    </ul>
  );
  const specificCommitmentSection_CN = (
    <ol className="text-body-m text-justify">
      {(specific_commitments as string[]).map((commit, index) => (
        <React.Fragment key={index}>
          <br />
          <li>{getSingleText(commit, commit)}</li>
        </React.Fragment>
      ))}
    </ol>
  );

  return (
    <div className="flex-1">
      <SquareTitle title={title as string} />
      <div className="text-heading-l my-[24px]">{liberalisation as string}</div>
      <p className="text-heading-m mb-[24px]">{sectors as string}</p>

      <ol>
        <li className="text-body-m">{business_services as string}</li>
      </ol>

      <p className="text-body-m">{other_business_services as string}</p>
      <p className="text-body-m">{technical_testing as string}</p>
      <p className="mt-[24px] text-heading-m">{special as string}</p>
      {getSingleNode(specificCommitmentSection, specificCommitmentSection_CN)}

      {guide as React.ReactNode}
      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
