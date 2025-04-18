import * as React from "react";
import { SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    guangdong_hk: `Guangdong-Hong Kong-Macao Greater Bay Area (GBA) Standards`,
    intro: [
      `With a view to improving product and service quality, as well as promoting the interconnectivity and integrated development of the Guangdong, Hong Kong and Macao, the governments of the three places signed a Memorandum of Understanding on jointly promoting the development of GBA Standards on April 24, 2023, and promulgated the first batch of a total of 110 GBA Standards`,
      `To date, a total of 235 GBA Standards have been developed and promulgated, covering items in the fields of food quality and safety, Cantonese cuisine, prepared dishes, transportation, mechanical and electrical products, as well as medical care, nursing care, education, e-sports and environmental, social and governance, etc.`,
      `The trades are welcome to adopt GBA Standards on a voluntary basis.`,
    ],
    information_about_GBA_Standards: "Information about GBA Standards",
    information_about_GBA_found: (
      <>
        Information about GBA Standards can be found on the&nbsp;
        <a
          aria-label="Guangdong-Hong Kong-Macao Greater Bay Area Standard Information Public Service Platform"
          href="https://www.gbsrc.org.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          Guangdong-Hong Kong-Macao Greater Bay Area Standard Information Public
          Service Platform
        </a>
        &nbsp;managed by the GBA Standardisation Research Center.
      </>
    ),
    the_TID: (
      <>
        The Trade and Industry Department (TID) is responsible for co-ordinating
        the participation of the Government of the Hong Kong Special
        Administrative Region (HKSARG) in the work on the GBA Standards. The TID
        also disseminates information about GBA Standards to the trades through
        issuing&nbsp;
        <a
          aria-label="Commercial Information Circulars"
          href="https://www.tid.gov.hk/en/tradecircular/detail.html?categoryId=35"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          Commercial Information Circulars
        </a>
        .
      </>
    ),
    formulation_GBA_standards: `Formulation of GBA Standards`,
    GBA_standardisation: `The GBA Standardisation Research Center accepts applications for formulating GBA Standards all year round. Trade associations, enterprises or organisations of Guangdong, Hong Kong and Macao are welcome to jointly draw up GBA Standards in accordance with the specific requirements set out in the "Guidelines on Applications for GBA Standards"(in Chinese only), and submit applications to the GBA Standardisation Research Center.`,
    GBA_certification: `GBA Certification`,
    with_the_support: `With the support and coordination of the governments of Guangdong, Hong Kong and Macao, certification bodies of the three places jointly established the "GBA Certification Alliance" in September 2022 to take forward the market-driven voluntary certification scheme - GBA Certification. The Alliance registered an entity in Guangdong, namely the Guangdong-Hong Kong-Macao Greater Bay Area Certification Promotion Center, in September 2023 to represent it in dealing with matters relating to GBA Certification.`,
    the_first_batch: `The first batch of GBA Certification containing 15 certification schemes were announced at a ceremony held in Shenzhen on 19 December 2023. To date, over 50 schemes have been developed and over 100 certificates have been issued, covering products in various fields e.g. food, electrical appliances, construction materials, etc.`,
    information_about_GBA_certification: (
      <>
        Information about GBA Certification is available on the&nbsp;
        <a
          aria-label="GBA Certification Public Service Platform"
          href={`https://gbacpc.org.cn/bayareacertification/index`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          GBA Certification Public Service Platform
        </a>
        . Enterprises interested in the GBA Certification schemes are welcome to
        contact the Guangdong-Hong Kong-Macao Greater Bay Area Certification
        Promotion Center.
      </>
    ),
  },
  cn: {
    guangdong_hk: `灣區標準`,
    intro: [
      `為提升產品和服務質量，促進三地互聯互通和融合發展，深化香港與內地和澳門之間的經貿交流和合作，粵、港、澳三地政府於二○二三年四月二十四日簽署關於共同促進「灣區標準」發展的合作備忘錄，並公布首批「灣區標準」（合共110項）`,
      `現時，已制定及公布的「灣區標準」共有235項，涵蓋食品質量和安全、粵菜、預製菜、交通、機電產品，以至醫療、護理、教育、電競及環境、社會和管治等領域。`,
      `歡迎業界以自願形式採用「灣區標準」`,
    ],
    information_about_GBA_Standards: "「灣區標準」資訊",

    information_about_GBA_found: (
      <>
        灣區標準的相關資訊可以在&nbsp;
        <a
          aria-label="「粵港澳大灣區標準信息公共服務平台」（灣區標準平台）"
          href="https://www.gbsrc.org.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          「粵港澳大灣區標準信息公共服務平台」（灣區標準平台）
        </a>
        查閱，該平台由「粵港澳大灣區標準化研究中心」（「灣區標準研究中心」）管理。
      </>
    ),

    the_TID: `工業貿易署（工貿署）負責協調香港特別行政區政府（特區政府）有關政策局／部門參與「灣區標準」的工作，並與廣東省及澳門有關當局保持密切聯繫。`,

    formulation_GBA_standards: `制定「灣區標準」`,
    GBA_standardisation: (
      <>
        「灣區標準研究中心」全年接受制定「灣區標準」的申請。我們歡迎粵、港、澳三地的行業協會、企業或團體按照
        <a
          aria-label="《「灣區標準」申請指引》"
          href={`https://www.gbsrc.org.cn/news/newsDetail?id=337`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          《「灣區標準」申請指引》
        </a>
        列出的具體要求，共同起草「灣區標準」及向「灣區標準研究中心」提出申請。
      </>
    ),
    GBA_certification: `灣區認證`,
    with_the_support: `在廣東省市場監督管理局的督導和廣東省、香港和澳門三地政府的支持下，三地的認證機構在2022年9月聯合成立了「粵港澳大灣區認證聯盟」（聯盟），負責推進以市場驅動、供業界自願採用的「灣區認證」計劃。聯盟在2023年9月註冊了一個實體，即「粵港澳大灣區認證促進中心」，代表聯盟處理有關「灣區認證」的事宜。`,
    the_first_batch: `「灣區認證」首批項目已於2023年12月19日在深圳舉行的典禮上公布，其中包括15個產品或服務的認證計劃，涵蓋建築材料、電器、衣物、食品、物業管理服務和安老服務等。`,
    information_about_GBA_certification: (
      <>
        灣區認證的相關資訊可以在
        <a
          aria-label="「灣區認證公共服務平台」"
          href={`https://gbacpc.org.cn/bayareacertification/index`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          「灣區認證公共服務平台」
        </a>
        查閱。有意參與「灣區認證」的企業可聯絡粵港澳大灣區認證促進中心。
      </>
    ),
  },
};

export const GBA: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    guangdong_hk,
    intro,
    information_about_GBA_Standards,
    formulation_GBA_standards,
    GBA_standardisation,
    GBA_certification,
    with_the_support,
    the_first_batch,
    the_TID,
    information_about_GBA_certification,
    information_about_GBA_found,
  } = page_text;

  return (
    <div className="w-full">
      <SquareTitle title={guangdong_hk as string} />

      <div className="text-body-m my-[24px]">
        {(intro as string[]).map((i, index) => (
          <React.Fragment key={index}>
            <p>{i}</p>
            <br />
          </React.Fragment>
        ))}

        <p className="font-bold">{information_about_GBA_Standards as string}</p>

        <br />
        <p>{information_about_GBA_found as React.ReactNode}</p>
        <br />
        <p>{the_TID as string}</p>

        <br />

        <p className="font-bold">
          {formulation_GBA_standards as React.ReactNode}
        </p>
        <br />

        <p>{GBA_standardisation as string}</p>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <SquareTitle title={GBA_certification as string} />
      <div className="mt-[24px] text-body-m">
        <p>{with_the_support as React.ReactNode}</p>
        <br />
        <p>{the_first_batch as React.ReactNode}</p>

        <br />
        <p>{information_about_GBA_certification as React.ReactNode}</p>
      </div>
    </div>
  );
};
