import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Supplement VII to CEPA - Clauses",
    Liberalisation_of_Trade: `Liberalisation of Trade in Services (extracted from the Annex of
        Supplement VII to CEPA)`,
    subgroup_sec: "Sectors or sub-sectors",
    sec_list: [
      `1. Business Services`,
      `F. Other Business Services`,
      `e. Technical testing and analysis services (CPC8676) Product testing
        services (CPC7490)`,
    ],
    specific_commitments: "Specific commitments",
    to_allow_test: `To allow testing organisations in Hong Kong to cooperate with designated
        Mainland organisations to undertake testing of products for the China
        Compulsory Certification (CCC) System on a pilot basis, for selected
        products listed in the CCC Catalogue and processed in Hong Kong (i.e.
        the processing facilities are located in Hong Kong). These testing
        organisations have to be accredited by the accreditation body of the
        Government of Hong Kong Special Administrative Region (i.e. the Hong
        Kong Accreditation Service) to be capable of performing testing for the
        relevant products under the CCC System. Cooperation arrangements should
        comply with relevant requirements in the "Regulations of the People's
        Republic of China on Certification and Accreditation".`,
    Measures_in_Facilitating: `Measures in Facilitating Trade and Investment (extracted from the main
        text of Supplement VII to CEPA)`,
    Trade_and_Investment: `III. Trade and Investment Facilitation`,
    Both_sides_agree: `2. Both sides agree to further strengthen their cooperation in the area
        of commodity inspection and quarantine, food safety, quality and
        standardisation. Accordingly, the following subparagraphs 5.2.5 and
        5.2.6 are added to Article 5.2 of Annex 6 to "CEPA":`,
    actively_promote: `"5.2.6 To actively promote cooperation between Hong Kong's testing
        laboratories and Mainland's certification bodies which are members of
        international multilateral systems on mutual recognition of testing and
        certification that are open to national member bodies (such as the
        IECEE/CB system), so that Hong Kong's testing laboratories can be
        recognized under these multilateral systems."`,
  },
  cn: {
    title: "《CEPA補充協議七》 – 有關條文",
    Liberalisation_of_Trade: `服務貿易開放措施（節錄自《CEPA補充協議七》（附件））`,
    subgroup_sec: "部門或分部門",
    sec_list: [
      `1. 商業服務`,
      `F. 其他商業服務`,
      `e. 技術檢驗和分析服務（CPC8676）
貨物檢驗服務（CPC7490）`,
    ],
    specific_commitments: "具體承諾",
    to_allow_test: `在中國強制性產品認證制度（CCC）領域，允許經香港特區政府認可機構（香港認可處）認可的具備中國強制性產品認證制度相關產品檢測能力的香港檢測機構，以香港本地加工的（即產品加工場所在香港境內）CCC目錄內的部分產品為試點，與內地指定機構開展合作，承擔CCC認證檢測任務。具體合作安排按照《中華人民共和國認證認可條例》有關規定執行。`,
    Measures_in_Facilitating: `貿易投資便利化的措施（節錄自《CEPA補充協議七》主體文件）`,
    Trade_and_Investment: `三、貿易投資便利化`,
    Both_sides_agree: `（二） 雙方同意進一步加強商品檢驗檢疫、食品安全、質量標準領域的合作，並據此將《安排》[CEPA]附件6第五條第（二）款增加第5、6項，內容為 :`,
    actively_promote: `"6. 積極推動香港檢測實驗室與已加入設有國家成員機構的認證檢測國際多邊互認體系（如IECEE/CB體系）的內地認證機構開展合作，成為該互認體系所接受的檢測實驗室。"`,
  },
};

export const SupplementVIItoCEPAClauses: React.FC = () => {
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;

  return (
    <div className="flex-1">
      <SquareTitle title={page_text.title} />
      <p className="text-heading-l my-[24px]">
        {page_text.Liberalisation_of_Trade}
      </p>
      <p className="text-heading-m mb-[24px]">{page_text.subgroup_sec}</p>

      <p className="text-heading-m mb-[24px]">{page_text.subgroup_sec}</p>
      <div className="text-justify">
        {page_text.sec_list.map((s, i) => {
          return (
            <p className="text-body-m" key={i}>
              {s}
            </p>
          );
        })}
      </div>

      <p className="my-[24px] text-heading-m">
        {page_text.specific_commitments}
      </p>
      <p className="text-body-m text-justify">{page_text.to_allow_test}</p>

      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">
        {page_text.Measures_in_Facilitating}
      </p>
      <p className="text-heading-m">{page_text.Trade_and_Investment}</p>
      <p className="text-body-m my-[24px] text-justify">
        {page_text.Both_sides_agree}
        <br />
        <br />
        {page_text.actively_promote}
      </p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
