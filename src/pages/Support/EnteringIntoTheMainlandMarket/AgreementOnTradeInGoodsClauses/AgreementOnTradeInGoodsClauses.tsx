import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Agreement on Trade in Goods - Clauses",
    article_58: "Article 58 - Conformity Assessment Procedures",
    procedures: (
      <ol className="text-justify">
        <li className="text-body-m">
          The two sides shall seek to facilitate the acceptance of the results
          of conformity assessment procedures conducted in the other side, with
          a view to increasing efficiency and ensuring cost effectiveness of
          conformity assessments.
        </li>
        <br />
        <li className="text-body-m">
          In the fields of electronic and electrical products, the two sides
          shall explore and promote mutual recognition of the certification
          results of originating electronic and electrical products between the
          Mainland and Hong Kong in order to facilitate trade.
        </li>
        <br />
        <li className="text-body-m">
          The two sides agree to encourage their conformity assessment bodies to
          work more closely with a view to facilitating the mutual acceptance of
          conformity assessment results.
        </li>
      </ol>
    ),
    article_59: "Article 59 - Technical Cooperation",
    cooperation: (
      <ol className="text-body-m">
        <li value={3}>
          With a view to increasing their mutual understanding of their
          respective systems, enhancing capacity building and facilitating
          trade, the two sides shall strengthen their technical cooperation in
          the following areas:
        </li>
      </ol>
    ),

    encouraging_cooperation: (
      <div className="al text-justify">
        <li className="text-body-m" value={2}>
          Encouraging cooperation between conformity assessment bodies of the
          two sides
        </li>
      </div>
    ),
    article_68:
      "Article 68 - Trade Facilitation Measures in the Guangdong-Hong Kong-Macao Greater Bay Area",
    two_sides_agree: `The two sides agree, on the principles of mutually beneficial cooperation and facilitation of coordinated development, that the nine Pearl River Delta municipalities (note) and Hong Kong shall implement the following measures:`,
    note: `Note: The nine Pearl River Delta municipalities refer to Guangzhou, Shenzhen, Zhuhai, Foshan, Huizhou, Dongguan, Zhongshan, Jiangmen and Zhaoqing in Guangdong Province.`,
    promote: (
      <div className="al text-justify">
        <li value={5} className="text-body-m">
          (v) To promote the mutual recognition of inspection and quarantine
          results on low risk goods, except for plants and animals and products
          from plants and animals, food and medicines, between the two sides.
        </li>
        <br />
        <li className="text-body-m">
          (vi) To explore the expansion of the scope of acceptance of third
          party inspection, testing and certification results with respect to
          commodities and institutions, and provide expedited customs clearance
          treatment.
        </li>
      </div>
    ),
  },
  cn: {
    title: "《貨物貿易協議》 – 有關條文",
    article_58: "第五十八條 合格評定程序",
    procedures: (
      <div>
        <p className="text-body-m">
          一、雙方須致力於促進接受在另一方開展的合格評定程序的結果，以提高合格評定的效率，保證合格評定的成本效益。
        </p>
        <br />
        <p className="text-body-m">
          二、在電子電器產品領域，探討並推動內地與香港對於原產的電子電器產品認證結果互認，促進貿易便利化。
        </p>
        <br />
        <p className="text-body-m">
          三、雙方同意鼓勵合格評定機構開展更密切的合作，以推動雙方合格評定結果的接受。
        </p>
      </div>
    ),
    article_59: "第五十九條 技術合作",
    cooperation: (
      <p className="text-body-m">
        三、雙方應加強以下領域的技術合作，以增加對各自體系的相互了解，加強能力建設，便利雙方之間貿易：
      </p>
    ),
    encouraging_cooperation: (
      <p className="text-body-m text-justify">
        （二）鼓勵雙方合格評定機構的合作
      </p>
    ),
    article_68: "第六十八條 粵港澳大灣區貿易便利化措施",
    two_sides_agree:
      "雙方同意，以互利共贏、促進協調發展為原則，珠三角九市（備註）與香港採取以下措施：",
    note: "備註：珠三角九市為廣東省廣州市、深圳市、珠海市、佛山市、惠州市、東莞市、中山市、江門市、肇慶市。",
    promote: (
      <>
        <p className="text-body-m text-justify">
          （五）推動雙方對除動植物和動植物產品、食品及藥品以外的低風險貨物的檢驗檢疫結果互認。
        </p>
        <br />
        <p className="text-body-m text-justify">
          （六）探索擴大第三方檢驗檢測、認證結果採信商品和機構範圍，並給予快速通關待遇。
        </p>
      </>
    ),
  },
};

export const AgreementOnTradeInGoodsClauses: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    title,
    article_58,
    procedures,
    article_59,
    cooperation,
    encouraging_cooperation,
    article_68,
    two_sides_agree,
    promote,
    note,
  } = page_text;

  return (
    <div className="flex-1">
      <SquareTitle title={title} />
      <p className="text-heading-l my-[24px]">{article_58}</p>
      {procedures}
      <hr className="my-[24px]" />

      <p className="my-[24px] text-heading-l">{article_59}</p>
      {cooperation}
      <br />
      {encouraging_cooperation}
      <hr className="my-[24px]" />
      <p className="mb-[24px] text-heading-l">{article_68}</p>

      <p className="text-body-m text-justify">{two_sides_agree}</p>
      <br />
      {promote}
      <br />
      <p className="text-italic-s italic text-justify">{note}</p>
      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
