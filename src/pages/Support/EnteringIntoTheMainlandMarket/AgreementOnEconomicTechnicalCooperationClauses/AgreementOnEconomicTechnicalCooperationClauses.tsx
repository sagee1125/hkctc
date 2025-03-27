import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Agreement on Economic and Technical Cooperation - Clauses",
    article_234: "Article 23(4)",
    relevant_authorities:
      "Relevant authorities of the two sides will make use of existing cooperation channels to strengthen cooperation in the innovation of certification and accreditation systems, and support the certification, accreditation, inspection and testing organisations to conduct technical exchanges and cooperation.",
    article_236: "Article 23(6)",
    actively_promote:
      "Actively promote cooperation between Hong Kong's testing laboratories and Mainland's certification bodies which are members of international multilateral systems on mutual recognition of testing and certification that are open to national member bodies (such as the IECEE/CB system), so that Hong Kong's testing laboratories can be recognised under these multilateral systems.",
    article_237: "Article 23(7)",
    actively_consider:
      "Actively consider recommending an eligible certification body located in Hong Kong to join the International Electrotechnical Commission System of Conformity Assessment Schemes for Electrotechnical Equipment and Components (IECEE) as a National Certification Body (NCB) of China.",
    article_238: "Article 23(8)",
    consider_applications:
      "Consider applications of eligible certification bodies set up by Hong Kong enterprises in the Mainland to become designated certification bodies under the China Compulsory Certification (CCC) System.",
  },
  cn: {
    title: "《經濟技術合作協議》 – 有關條文",
    article_234: "第二十三（四）條",
    relevant_authorities:
      "雙方主管部門利用現有合作渠道，加強認證認可領域制度創新方面的合作，支持認證認可、檢驗檢測機構間開展技術交流與合作。",
    article_236: "第二十三（六）條",
    actively_promote:
      "積極推動香港檢測實驗室與已加入設有國家成員機構的認證檢測國際多邊互認體系（如IECEE CB體系）的內地認證機構開展合作，成爲該互認體系所接受的檢測實驗室。",
    article_237: "第二十三（七）條",
    actively_consider:
      "積極考慮推薦一家符合條件的位於香港的認證機構作爲中國國家認證機構（NCB）加入國際電工委員會電工產品合格測試與認證組織（IECEE）。",
    article_238: "第二十三（八）條",
    consider_applications:
      "研究符合條件的香港企業在內地開設的認證機構，申請成爲中國強制性產品認證（CCC）制度的指定認證機構。",
  },
};

export const AgreementOnEconomicTechnicalCooperationClauses: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    title,
    article_234,
    relevant_authorities,
    article_236,
    actively_promote,
    article_237,
    actively_consider,
    article_238,
    consider_applications,
  } = page_text;

  return (
    <div className="flex-1">
      <SquareTitle title={title as string} />
      <p className="text-heading-l my-[24px]">{article_234 as string}</p>
      <p className="text-body-m text-justify">
        {relevant_authorities as string}
      </p>

      <hr className="my-[24px]" />

      <p className="text-heading-l">{article_236 as string}</p>
      <br />
      <p className="text-body-m text-justify">{actively_promote as string}</p>

      <hr className="my-[24px]" />
      <p className="text-heading-l">{article_237 as string}</p>
      <br />

      <p className="text-body-m text-justify">{actively_consider as string}</p>

      <hr className="my-[24px]" />

      <p className="text-heading-l">{article_238 as string}</p>
      <br />

      <p className="text-body-m text-justify">
        {consider_applications as string}
      </p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
