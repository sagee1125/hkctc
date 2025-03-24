import * as React from "react";
import { SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    guangdong_hk: `Guangdong-Hong Kong-Macao Greater Bay Area (GBA) Standards`,
    intro: [
      `With a view to improving product and service quality, as well as promoting the interconnectivity and integrated development of the Guangdong, Hong Kong and Macao, the governments of the three places signed a Memorandum of Understanding on jointly promoting the development of GBA Standards on April 24, 2023, and promulgated the first batch of a total of 110 GBA Standards`,
      `To date, a total of 215 GBA Standards have been developed and promulgated, covering items in the fields of food quality and safety, Cantonese cuisine, prepared dishes, transportation, mechanical and electrical products, as well as medical care, nursing care, education, e-sports and environmental, social and governance, etc.`,
      `The trades are welcome to adopt GBA Standards on a voluntary basis.`,
    ],
    information_about_GBA_Standards: "Information about GBA Standards",
    information_about_GBA_found: `Information about GBA Standards can be found on the Guangdong-Hong Kong-Macao Greater Bay Area Standard Information Public Service Platform managed by the GBA Standardisation Research Center.`,
    the_TID: `The Trade and Industry Department (TID) is responsible for co-ordinating the participation of the Government of the Hong Kong Special Administrative Region (HKSARG) in the work on the GBA Standards. The TID also disseminates information about GBA Standards to the trades through issuing Commercial Information Circulars.`,
    formulation_GBA_standards: `Formulation of GBA Standards`,
    GBA_standardisation: `The GBA Standardisation Research Center accepts applications for formulating GBA Standards all year round. Trade associations, enterprises or organisations of Guangdong, Hong Kong and Macao are welcome to jointly draw up GBA Standards in accordance with the specific requirements set out in the "Guidelines on Applications for GBA Standards"(in Chinese only), and submit applications to the GBA Standardisation Research Center.`,
    GBA_certification: `GBA Certification`,
    with_the_support: `With the support and coordination of the governments of Guangdong, Hong Kong and Macao, certification bodies of the three places jointly established the "GBA Certification Alliance" in September 2022 to take forward the market-driven voluntary certification scheme - GBA Certification. The Alliance registered an entity in Guangdong, namely the Guangdong-Hong Kong-Macao Greater Bay Area Certification Promotion Center, in September 2023 to represent it in dealing with matters relating to GBA Certification.`,
    the_first_batch: `The first batch of GBA Certification containing 15 certification schemes were announced at a ceremony held in Shenzhen on 19 December 2023. To date, over 50 schemes have been developed and over 100 certificates have been issued, covering products in various fields e.g. food, electrical appliances, construction materials, etc.`,
    information_about_GBA_certification: `Information about GBA Certification is available on the GBA Certification Public Service Platform. Enterprises interested in the GBA Certification schemes are welcome to contact the Guangdong-Hong Kong-Macao Greater Bay Area Certification Promotion Center.`,
  },
  cn: {
    guangdong_hk: `灣區標準`,
    intro: [
      `為提升產品和服務質量，促進三地互聯互通和融合發展，深化香港與內地和澳門之間的經貿交流和合作，粵、港、澳三地政府於二○二三年四月二十四日簽署關於共同促進「灣區標準」發展的合作備忘錄，並公布首批「灣區標準」（合共110項）`,
      `現時，已制定及公布的「灣區標準」共有215項，涵蓋食品質量和安全、粵菜、預製菜、交通、機電產品，以至醫療、護理、教育、電競及環境、社會和管治等領域。`,
      `工貿署歡迎業界自願採用大灣區標準。`,
    ],
    information_about_GBA_Standards: "Information about GBA Standards",
    information_about_GBA_found: `Information about GBA Standards can be found on the Guangdong-Hong Kong-Macao Greater Bay Area Standard Information Public Service Platform managed by the GBA Standardisation Research Center.`,
    the_TID: `工業貿易署（工貿署）負責協調香港特別行政區政府（特區政府）有關政策局／部門參與「灣區標準」的工作，並與廣東省及澳門有關當局保持密切聯繫。`,
    formulation_GBA_standards: `制訂「灣區標準」`,
    GBA_standardisation: `灣區標準研究中心正計劃在今年稍後就制定新一輪的「灣區標準」發布指引，向三地業界徵集申請。有興趣的團體和企業需按照指引列出的具體要求，透過灣區標準平台提交申請，供灣區標準研究中心進行評審。`,
    GBA_certification: `灣區認證`,
    with_the_support: `With the support and coordination of the governments of Guangdong, Hong Kong and Macao, certification bodies of the three places jointly established the "GBA Certification Alliance" in September 2022 to take forward the market-driven voluntary certification scheme - GBA Certification. The Alliance registered an entity in Guangdong, namely the Guangdong-Hong Kong-Macao Greater Bay Area Certification Promotion Center, in September 2023 to represent it in dealing with matters relating to GBA Certification.`,
    the_first_batch: `The first batch of GBA Certification containing 15 certification schemes were announced at a ceremony held in Shenzhen on 19 December 2023. To date, over 50 schemes have been developed and over 100 certificates have been issued, covering products in various fields e.g. food, electrical appliances, construction materials, etc.`,
    information_about_GBA_certification: `Information about GBA Certification is available on the GBA Certification Public Service Platform. Enterprises interested in the GBA Certification schemes are welcome to contact the Guangdong-Hong Kong-Macao Greater Bay Area Certification Promotion Center.`,
  },
};

export const GBA: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    guangdong_hk,
    intro,
    information_about_GBA_Standards,
    formulation_GBA_standards,
    GBA_standardisation,
    GBA_certification,
    with_the_support,
    the_first_batch,
  } = page_text;

  return (
    <div className="w-full">
      <SquareTitle title={guangdong_hk} />

      <div className="text-body-m my-[24px]">
        {intro.map((i, index) => (
          <React.Fragment key={index}>
            <p>{i}</p>
            <br />
          </React.Fragment>
        ))}

        <p className="font-bold">{information_about_GBA_Standards}</p>

        <br />
        <p>
          Information about GBA Standards can be found on the&nbsp;
          <a
            href="https://www.gbsrc.org.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E] underline"
          >
            Guangdong-Hong Kong-Macao Greater Bay Area Standard Information
            Public Service Platform
          </a>
          &nbsp;managed by the GBA Standardisation Research Center.
        </p>
        <br />
        <p>
          The Trade and Industry Department (TID) is responsible for
          co-ordinating the participation of the Government of the Hong Kong
          Special Administrative Region (HKSARG) in the work on the GBA
          Standards. The TID also disseminates information about GBA Standards
          to the trades through issuing&nbsp;
          <a
            href="ttps://www.tid.gov.hk/english/trade_relations/mainland/cic_gbastandards.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E] underline"
          >
            Commercial Information Circulars
          </a>
          .
        </p>

        <br />

        <p className="font-bold">{formulation_GBA_standards}</p>
        <br />

        <p>{GBA_standardisation}</p>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <SquareTitle title={GBA_certification} />
      <div className="mt-[24px] text-body-m">
        <p>{with_the_support}</p>
        <br />
        <p>{the_first_batch}</p>

        <br />
        <p>
          Information about GBA Certification is available on the&nbsp;
          <a
            href={`https://gbacpc.org.cn/bayareacertification/index`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E] underline"
          >
            GBA Certification Public Service Platform
          </a>
          . Enterprises interested in the GBA Certification schemes are welcome
          to contact the Guangdong-Hong Kong-Macao Greater Bay Area
          Certification Promotion Center.
        </p>
      </div>
    </div>
  );
};
