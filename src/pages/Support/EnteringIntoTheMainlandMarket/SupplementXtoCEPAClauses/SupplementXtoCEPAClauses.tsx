import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const specificCommitments: React.ReactNode[] = [
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
      className="underline text-[#00E] !text-italic-s italic"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
    >
      (See&nbsp;Implementation Guide&nbsp;for details.)
    </a>
  </p>,
];

const specificCommitments_CN: React.ReactNode[] = [
  "在廣東省內試點將香港檢測機構獲准承擔的以認證為目的的檢測服務範圍由食品類別放寬至其他自願性產品認證領域。",
  <>
    <p>
      在參與認證檢測活動中比照內地認證機構、檢查機構和實驗室給予香港服務提供者在內地設立的合資與獨資認證機構、檢查機構和實驗室同等待遇。
    </p>
    <br />
    <p className="!text-italic-s italic">
      （有關承諾"1"及"2"的實施詳情，請見
      <a
        className="underline text-[#00E]"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_en.pdf"
      >
        實施指南）
      </a>
      ）
    </p>
  </>,
  "在互信互利的基礎上，允許在香港的認證檢測機構與內地認證檢測機構開展檢測數據（結果）的接受合作。具體合作安排另行商定。",
  <p>
    允許香港服務提供者僱用的合同服務提供者以自然人流動的方式在內地提供本部門或分部門分類項下的服務。（詳情見
    <a
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

const multilingual = {
  en: {
    title: "Supplement X to CEPA - Clauses",
    liberalisation:
      "Liberalisation of Trade in Services (extracted from the Annex of Supplement X to CEPA)",
    sectors: "Sectors or sub-sectors",
    business_services: "Business Services",
    other_business_services: "F. Other Business Services",
    technical_testing:
      "e. Technical testing and analysis services (CPC8676) and freight inspection (CPC749), excluding statutory inspection services for freight inspection services",
    special: "Specific commitments",
    measures_in:
      "Measures in Facilitating Trade and Investment (extracted from the main text of Supplement X to CEPA)",
    trade_and_investment: "III. Trade and Investment Facilitation",
    the_two_side: `The two sides agreed to further strengthen cooperation in the areas of commodity inspection and quarantine, food safety and quality and standardisation. Accordingly, the following is added to Article 5.2.4 of Annex 6 to "CEPA" - Certification, accreditation and standardisation Management:`,
    bottom: (
      <>
        "(1) promote Guangdong and Hong Kong mutual recognition of testing and
        certification results in respect of third-party testing and
        certification services;
        <br />
        <br />
        (2) in accordance with specific certification requirements, promote
        Guangdong and Hong Kong mutual recognition of testing and certification
        results in respect of voluntary certification;
        <br />
        <br />
        (3) with regard to promoting mutual recognition of testing and
        certification results under the China Compulsory Certification (CCC)
        System, the two sides agree to observe the relevant requirements of the
        related national laws, rules, regulations and treaties, including the
        Regulations on Certification and Accreditation of the People's Republic
        of China and CEPA."
      </>
    ),
  },
  cn: {
    title: "《CEPA補充協議十》 – 有關條文",
    liberalisation: "服務貿易開放措施（節錄自《CEPA補充協議十》（附件））",
    sectors: "部門或分部門",
    business_services: "商務服務",
    other_business_services: "F. 其他商務服務",
    technical_testing:
      "e. 技術檢驗和分析服務（CPC8676）及（CPC749）涵蓋的貨物檢驗服務，不包括貨物檢驗服務中的法定檢驗服務",
    special: "具體承諾",
    measures_in: "貿易投資便利化的措施（節錄自《CEPA補充協議十》主體文件）",
    trade_and_investment: "三、貿易投資便利化",
    the_two_side:
      "（一）雙方同意進一步加強商品檢驗檢疫、食品安全、質量標準領域的合作，並據此將《安排》附件6第五條第（二）款第4項認證認可及標準化管理增加以下內容：",
    bottom: (
      <>
        "(1)推動粵港第三方檢測和認證服務的檢測認證結果互認。
        <br />
        (2)按照具體認證的要求，推動粵港自願認證的認證檢測結果互認。
        <br />
        <br />
        (3)對於推動強制性產品認證（CCC認證）檢測認證結果互認問題，遵照《中華人民共和國認證認可條例》、《安排》［CEPA］等國家相關法律法規、條約的相關規定執行。＂
      </>
    ),
  },
};

export const SupplementXtoCEPAClauses: React.FC = () => {
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
    measures_in,
    trade_and_investment,
    the_two_side,
    bottom,
  } = page_text;

  const specificCommitmentSection = (
    <ul className="text-body-m text-justify">
      {specificCommitments.map((commit, index) => (
        <React.Fragment key={index}>
          <br />
          <li>{commit}</li>
        </React.Fragment>
      ))}
    </ul>
  );

  const specificCommitmentSection_CN = (
    <ol className="text-body-m text-justify">
      {specificCommitments_CN.map((commit, index) => (
        <React.Fragment key={index}>
          <br />
          <li>{commit}</li>
        </React.Fragment>
      ))}
    </ol>
  );
  return (
    <div className="flex-1">
      <SquareTitle title={title} />
      <p className="text-heading-l my-[24px]">{liberalisation}</p>
      <p className="text-heading-m mb-[24px]">{sectors}</p>
      <ol>
        <li className="text-body-m">{business_services}</li>
      </ol>
      <p className="text-body-m">{other_business_services}</p>
      <p className="text-body-m text-justify">{technical_testing}</p>

      <p className="mt-[24px] text-heading-m">{special}</p>
      {isEn ? specificCommitmentSection : specificCommitmentSection_CN}
      <hr className="my-[24px]" />
      <p className="text-heading-l mb-[24px]">{measures_in}</p>
      <p className="text-heading-m mb-[24px]">{trade_and_investment}</p>
      <p className="text-body-m text-justify">
        {the_two_side}
        <br />
        <br />
        {bottom}
      </p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
