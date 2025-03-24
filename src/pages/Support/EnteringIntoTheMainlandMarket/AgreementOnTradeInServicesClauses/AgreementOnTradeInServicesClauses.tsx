import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const specificCommitments = [
  {
    comments:
      "To allow testing organisations in Hong Kong to cooperate with designated Mainland organisations to undertake testing of products for the China Compulsory Certification (CCC) System on all products that require CCC. These testing organisations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent of performing testing of the relevant products under the CCC System. Cooperation arrangements should comply with relevant requirements in the Regulations on Certification and Accreditation of the People's Republic of China.",
    implementation: "(See Implementation Guide promulgated in May 2020)",
    implementationCN: "（見2020年5月頒布的實施指南）",
    commentCN:
      "在強制性產品認證（CCC）領域，允許經香港特區政府認可機構認可的具備內地強制性產品認證制度相關產品檢測能力的香港檢測機構，與內地指定機構開展合作，承擔CCC目錄內所有產品的檢測工作。具體合作安排按照《中華人民共和國認證認可條例》有關規定執行。",
  },
  {
    comments:
      "To allow certification bodies in Hong Kong to cooperate with Mainland CCC certification bodies on CCC factory inspection through assigning inspectors to carry out such inspection of factories manufacturing CCC products. These certification bodies have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent of performing certification of relevant products under the CCC System.",
    implementation: "(See Implementation Guide promulgated in May 2020)",
    implementationCN: "（見2020年5月頒布的實施指南）",
    commentCN:
      "在強制性產品認證（CCC）領域，允許經香港特區政府認可機構認可的具備相關強制性產品認證能力的香港認證機構與內地強制性產品認證機構就CCC工廠檢查開展委託合作，委派檢查員對CCC產品生產廠家進行CCC工廠檢查。",
  },
  {
    comments:
      "To allow certification bodies in Hong Kong to cooperate with Mainland CCC certification bodies to select post-certification test samples at factories manufacturing CCC products. These certification bodies have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent of performing certification of relevant products under the CCC System.",
    implementation: "(See Implementation Guide promulgated in May 2020)",
    implementationCN: "（見2020年5月頒布的實施指南）",
    commentCN: `在強制性產品認證（CCC）領域，允許經香港特區政府認可機構認可的具備相關強制性產品認證能力的香港認證機構與內地強制性產品認證機構開展委託合作，承擔獲證後於工廠選取測試樣本。`,
  },
  {
    comments:
      "In the area of voluntary certification, to allow testing organisations in Hong Kong to cooperate with Mainland certification bodies to undertake testing of products manufactured or processed in Hong Kong or the Mainland. These testing organisations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent in performing testing of the relevant products.",
    implementation: "(See Implementation Guide promulgated in Apr 2015)",
    implementationCN: "（見2015年4月頒布的實施指南）",
    commentCN:
      "在自願性認證領域，允許經香港特區政府認可機構認可的具備相關產品檢測能力的香港檢測機構與內地認證機構合作，對香港本地或內地生產或加工的產品進行檢測。",
  },
  {
    comments:
      'To implement, on a pilot basis, a mutual recognition arrangement of certification and relevant testing business among Guangdong, Hong Kong and Macao in the China (Guangdong) Pilot Free Trade Zone, with a view to carry out "certified once, tested once, and results accepted by three places. "',
    implementation: "(See Implementation Guide promulgated in Sep 2017)",
    implementationCN: "（見2017年9月頒布的實施指南）",
    commentCN: `在中國（廣東）自由貿易試驗區內試行粵港澳認證及相關檢測業務互認制度，實行"一次認證、一次檢測、三地通行"。`,
  },
  {
    comments:
      "On the basis of mutual trust and mutual benefit, to allow testing and certification organisations in Hong Kong to cooperate with the Mainland testing and certification organisations in respect of acceptance of testing data (results). Specific cooperation arrangements are subject to further discussion.",
    commentCN: `在互信互利的基礎上，允許在香港的認證檢測機構與內地認證檢測機構開展檢測數據（結果）的接受合作。具體合作安排另行商定。`,
  },
  {
    comments:
      "To allow contractual service providers employed by Hong Kong service suppliers, in the mode of movement of natural persons, to provide services under this industry or sub-industry on the Mainland.",
    commentCN: `允許香港服務提供者僱用的合同服務提供者以自然人流動的方式在內地提供本部門或分部門分類項下的服務。`,
    implementation: "(See Implementation Guide promulgated in Jul 2015)",
    implementationCN: "（見2015年7月頒布的實施指南）",
  },
];

const multilingual = {
  en: {
    title: "Agreement on Trade in Services - Clauses",
    liberalisation:
      "Liberalisation of Trade in Services (extracted from Table 2 of Annex 1 of the Agreement on Trade in Services)",
    sectors: "Sectors or sub-sectors",
    business_services: "Business Services",
    other_business_services: "F. Other Business Services",
    technical_testing:
      "e. Technical testing and analysis services (CPC8676) and Product testing services (CPC749)",
    special: "Specific commitments",
    effective: "Effective from 1 March 2025",
  },
  cn: {
    title: "《服務貿易協議》 – 有關條文",
    liberalisation: "服務貿易開放措施（節錄自《服務貿易協議》（附件1表2））",
    sectors: "部門或分部門",
    business_services: "商務服務",
    other_business_services: "F. 其他商務服務",
    technical_testing:
      "e. 技術測試和分析服務（CPC8676）及（CPC749）涵蓋的貨物檢驗服務",
    special: "具體承諾",
    effective: "（2025年3月1日起實施）",
  },
};

export const AgreementOnTradeInServicesClauses: React.FC = () => {
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
    effective,
  } = page_text;

  const specificCommitmentSection = (
    <ul className="text-body-m text-justify">
      {specificCommitments.map((commit, index) => (
        <React.Fragment key={index}>
          <br />
          <li>{commit.comments}</li>
          {commit.implementation && (
            <p className="italic text-italic-s mt-[24px]">
              {commit.implementation}
            </p>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
  const specificCommitmentSection_CN = (
    <ol className="text-body-m text-justify">
      {specificCommitments.map((commit, index) => (
        <React.Fragment key={index}>
          <br />
          <li>{commit.commentCN}</li>
          {commit.implementationCN && (
            <p className="italic text-italic-s mt-[24px]">
              {commit.implementationCN}
            </p>
          )}
        </React.Fragment>
      ))}
    </ol>
  );
  return (
    <div>
      <SquareTitle title={title} />
      <p className="text-heading-l my-[24px]">{liberalisation}</p>
      <p className="text-heading-m mb-[24px]">{sectors}</p>
      <ol>
        <li className="text-body-m">{business_services}</li>
      </ol>

      <p className="text-body-m">{other_business_services}</p>
      <p className="text-body-m text-justify">{technical_testing}</p>
      <p className="my-[24px] text-heading-m">{special}</p>
      <p className="text-italic-s italic">{effective}</p>
      {isEn ? specificCommitmentSection : specificCommitmentSection_CN}
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
