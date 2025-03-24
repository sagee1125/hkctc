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
