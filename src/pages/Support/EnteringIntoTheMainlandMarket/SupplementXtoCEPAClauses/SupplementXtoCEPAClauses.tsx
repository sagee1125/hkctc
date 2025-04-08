import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Supplement X to CEPA - Clauses",
    Liberalisation_of_Trade: `Liberalisation of Trade in Services (extracted from the Annex of
      Supplement X to CEPA)`,
    subgroup_sec: "Sectors or sub-sectors",
    sec_list: [
      `1. Business Services`,
      `F. Other Business Services`,
      `e. Technical testing and analysis services (CPC8676) and freight
        inspection (CPC749), excluding statutory inspection services for freight
        inspection services`,
    ],
    specific_commitments: "Specific commitments",

    measures_in_Facilitating: `Measures in Facilitating Trade and Investment (extracted from the main
        text of Supplement X to CEPA)`,
    trade_and_Investment: `III. Trade and Investment Facilitation`,
    two_sides_agreed: `The two sides agreed to further strengthen cooperation in the areas of
        commodity inspection and quarantine, food safety and quality and
        standardisation. Accordingly, the following is added to Article 5.2.4 of
        Annex 6 to "CEPA" - Certification, accreditation and standardisation
        Management:`,
    promote_Guangdong: ` "(1) promote Guangdong and Hong Kong mutual recognition of testing and
        certification results in respect of third-party testing and
        certification services;`,
    accordance_with_specific: `(2) in accordance with specific certification requirements, promote
        Guangdong and Hong Kong mutual recognition of testing and certification
        results in respect of voluntary certification;`,
    with_regard_to: `(3) with regard to promoting mutual recognition of testing and
        certification results under the China Compulsory Certification (CCC)
        System, the two sides agree to observe the relevant requirements of the
        related national laws, rules, regulations and treaties, including the
        Regulations on Certification and Accreditation of the People's Republic
        of China and CEPA."`,
  },
  cn: {
    title: "《CEPA補充協議十》 – 有關條文",
    Liberalisation_of_Trade: `服務貿易開放措施（節錄自《CEPA補充協議十》（附件））`,
    subgroup_sec: "部門或分部門",
    sec_list: [
      `1. 商業服務`,
      `F. 其他商業服務`,
      `e. 技術檢驗和分析服務（CPC8676）及（CPC749）涵蓋的貨物檢驗服務，不包括貨物檢驗服務中的法定檢驗服務`,
    ],
    specific_commitments: "具體承諾",

    measures_in_Facilitating: `貿易投資便利化的措施（節錄自《CEPA補充協議十》主體文件）：`,
    trade_and_Investment: `三、貿易投資便利化`,
    two_sides_agreed: `（一）雙方同意進一步加強商品檢驗檢疫、食品安全、質量標準領域的合作，並據此將《安排》附件6第五條第（二）款第4項認證認可及標準化管理增加以下內容：`,
    promote_Guangdong: `"(1)推動粵港第三方檢測和認證服務的檢測認證結果互認。`,
    accordance_with_specific: `(2)按照具體認證的要求，推動粵港自願認證的認證檢測結果互認。`,
    with_regard_to: `(3)對於推動強制性產品認證（CCC認證）檢測認證結果互認問題，遵照《中華人民共和國認證認可條例》、《安排》［CEPA］等國家相關法律法規、條約的相關規定執行。＂`,
  },
};

//   "To expand, on a pilot basis in Guangdong Province, the scope of testing services for the purpose of certification that can be undertaken by Hong Kong testing organisations from food to other areas of voluntary product certification.",
//   <>
//     <p>
//       To accord to certification bodies, inspection bodies and laboratories
//       jointly or solely set up in the Mainland by Hong Kong service suppliers,
//       when participating in testing and certification activities, the same
//       treatment as is accorded to Mainland certification bodies, inspection
//       bodies and laboratories.
//     </p>
//     <br />
//     <p className="!text-italic-s italic">
//       (For implementation details of commitments "1" and "2", see&nbsp;
//       <a               aria-label="link"
//         className="underline text-[#00E]"
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_en.pdf"
//       >
//         Implementation Guide
//       </a>
//       .)
//     </p>
//   </>,
//   "On the basis of mutual trust and mutual benefit, to allow testing and certification organisations in Hong Kong to cooperate with the Mainland testing and certification organisations in respect of acceptance of testing data (results). Specific cooperation arrangements are subject to further discussion.",
//   <p>
//     To allow contractual service providers employed by Hong Kong service
//     suppliers, in the mode of movement of natural persons, to provide services
//     under this industry or sub-industry in the Mainland.&nbsp;
//     <a               aria-label="link"
//       className="underline text-[#00E] !text-italic-s italic"
//       target="_blank"
//       rel="noopener noreferrer"
//       href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
//     >
//       (See&nbsp;Implementation Guide&nbsp;for details.)
//     </a>
//   </p>,
// ];
export const SupplementXtoCEPAClauses: React.FC = () => {
  const { getSingleNode, getPageText, language } = useSettings();
  const page_text = getPageText(multilingual);

  const specificCommitments_CN = [
    `在廣東省內試點將香港檢測機構獲准承擔的以認證為目的的檢測服務範圍由食品類別放寬至其他自願性產品認證領域。`,
    <>
      <p>
        在參與認證檢測活動中比照內地認證機構、檢查機構和實驗室給予香港服務提供者在內地設立的合資與獨資認證機構、檢查機構和實驗室同等待遇。
      </p>
      <br />
      <p className="!text-italic-s italic">
        （有關承諾"1"及"2"的實施詳情，請見&nbsp;
        <a
          aria-label="link"
          className="underline text-[#00E]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_en.pdf"
        >
          實施指南
        </a>
        ）
      </p>
    </>,
    "在互信互利的基礎上，允許在香港的認證檢測機構與內地認證檢測機構開展檢測數據（結果）的接受合作。具體合作安排另行商定。",
    <p>
      允許香港服務提供者僱用的合同服務提供者以自然人流動的方式在內地提供本部門或分部門分類項下的服務。
      （詳情見
      <a
        aria-label="link"
        className="underline text-[#00E] !text-italic-s italic"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
      >
        實施指南
      </a>
      ）
    </p>,
  ];
  const specificCommitments_EN = [
    "To expand, on a pilot basis in Guangdong Province, the scope of testing services for the purpose of certification that can be undertaken by Hong Kong testing organisations from food to other areas of voluntary product certification.",
    <>
      <p>
        To accord to certification bodies, inspection bodies and laboratories
        jointly or solely set up in the Mainland by Hong Kong service suppliers,
        when participating in testing and certification activities, the same
        treatment as is accorded to Mainland certification bodies, inspection
        bodies and laboratories.
      </p>
      <br />
      <p className="!text-italic-s italic">
        (For implementation details of commitments "1" and "2", see&nbsp;
        <a
          aria-label="link"
          className="underline text-[#00E]"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_en.pdf"
        >
          Implementation Guide
        </a>
        .)
      </p>
    </>,
    "On the basis of mutual trust and mutual benefit, to allow testing and certification organisations in Hong Kong to cooperate with the Mainland testing and certification organisations in respect of acceptance of testing data (results). Specific cooperation arrangements are subject to further discussion.",
    <p>
      To allow contractual service providers employed by Hong Kong service
      suppliers, in the mode of movement of natural persons, to provide services
      under this industry or sub-industry in the Mainland.&nbsp;
      <a
        aria-label="link"
        className="underline text-[#00E] !text-italic-s italic"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
      >
        (See&nbsp;Implementation Guide&nbsp;for details.)
      </a>
    </p>,
  ];

  const specificCommitments =
    language === Language.EN ? specificCommitments_EN : specificCommitments_CN;

  const {
    title,
    Liberalisation_of_Trade,
    subgroup_sec,
    sec_list,
    specific_commitments,
    measures_in_Facilitating,
    trade_and_Investment,
    two_sides_agreed,
    promote_Guangdong,
    accordance_with_specific,
    with_regard_to,
  } = page_text;
  return (
    <div className="flex-1">
      <SquareTitle title={title as string} />
      <p className="text-heading-l my-[24px]">
        {Liberalisation_of_Trade as React.ReactNode}
      </p>
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

      <p className="mt-[24px] text-heading-m">
        {specific_commitments as string}
      </p>
      <ul
        style={{ listStyleType: "decimal", paddingLeft: "20px" }}
        className="text-body-m text-justify"
      >
        {specificCommitments.map((commit, index) => (
          <div key={index}>
            <br />
            <li>{getSingleNode(commit, commit)}</li>
          </div>
        ))}
      </ul>
      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">
        {measures_in_Facilitating as React.ReactNode}
      </p>
      <p className="text-heading-m mb-[24px]">
        {trade_and_Investment as React.ReactNode}
      </p>
      <p className="text-body-m  text-justify">
        {two_sides_agreed as React.ReactNode}
        <br />

        {promote_Guangdong as React.ReactNode}

        <br />
        <br />
        {accordance_with_specific as React.ReactNode}

        <br />
        <br />
        {with_regard_to as React.ReactNode}
      </p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
