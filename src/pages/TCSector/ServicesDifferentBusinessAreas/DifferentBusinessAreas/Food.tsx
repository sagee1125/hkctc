import React from "react";
import {
  handleReturnDifferentBusinessAreasBreadcrumb,
  DifferentBusinessAreasDirectorySidebar,
} from "./utils";
import { navItemEnum } from "../../../../const";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  Link,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";
import { t2s } from "chinese-s2t";

const multilingual = {
  en: {
    title: "Food",
  },
  cn: {
    title: "食品",
  },
};

export const Food: React.FC = () => {
  const { isPC, language, getSingleText, getSingleNode } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const isSimpleCN = language === Language.ZH_CN;
  const photo = [
    {
      title: "Food Testing and Certification",
      titleCN: "食品檢測和認證",
      img: "food_1",
      link: "https://www.hkctc.gov.hk/en/doc/Food_Pamphlet_2018.pdf",
    },
    {
      title: "Food",
      titleCN: "食品",
      img: "food_2",
      link: "https://www.hkctc.gov.hk/en/doc/food_booklet_eng.pdf",
    },
    {
      title: "Hong Kong's Testing and Certification for Food",
      img: "food_3",
      titleCN: "香港的食品檢測和認證服務",
      link: "https://www.youtube.com/embed/oGRho-M6kEg",
      icon: "VIDEO.png",
    },
  ];

  const tableRowsDataEN = [
    [
      "Chemical composition analysis for nutritional labeling",
      "Energy, Protein, Total Fat, Sodium, Sugars, Carbohydrates, Saturated fatty acids, Trans fatty acids",
    ],
    [
      "Microbiological examination",
      "Microbial indicators, Food borne pathogens",
    ],
    [
      "Contaminants",
      "Pesticide residues, Veterinary drug residues, Metalic contaminants, Other harmful substances e.g. melamine, and phthalates",
    ],

    ["Natural toxins", "Marine toxins, Mycotoxins"],

    ["Additives", "Sweeteners, Antioxidant, Colouring matters, Preservatives"],
    ["Food contact materials", "Leachable metals, Extractives"],
    ["Food authentication", "Species identification by DNA methods"],
    [
      "Genetically modified food",
      "Qualitative and quantitative analysis by DNA method, Genetically modified traits identification",
    ],
  ];

  const tableRowsDataCN = [
    [
      "營養標籤的化學成分",
      "能量、蛋白質、總脂肪、鈉、糖、碳水化合物、飽和脂肪酸、反式脂肪酸",
    ],
    ["微生物測試", "微生物指標、食源性致病菌"],
    [
      "污染物",
      "農藥殘留、獸藥殘留、金屬污染物，其他有害物質如三聚氰胺、塑化劑等",
    ],

    ["天然毒素", "海洋毒素、霉菌毒素"],

    ["添加劑", "S甜味劑、抗氧化劑、染色料、防腐劑"],
    ["食物接觸物料", "可濾取金屬、粹取物"],
    ["食品鑒別", "以DNA技術作物種鑑別"],
    ["基因改造食物", "以DNA技術作定性及定量分析、轉基因性狀鑑定"],
  ];

  const tableRowsData =
    language === Language.EN ? tableRowsDataEN : tableRowsDataCN;
  const data_cn: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "香港的食品測試服務",
      content: (
        <>
          <p>
            食物受污染及摻雜的事故時有發生，市民對所購買食品的安全情況和營養資訊亦越來越關注。要為產品吸引更多顧客，令大眾對產品更有信心，減低產品因不達法例要求而須被回收及因訴訟所導致昂貴損失的風險，其中最有效辦法，就是為產品進行品質及安全性測試。
          </p>
          <br />
          <p className="!text-body-s !text-[#7E7E7E] my-[16px]">
            香港的實驗所能提供以下的食品測試服務
          </p>
          <div
            className="!text-body-s !text-[#2F2F2F]"
            style={{
              borderTop: "2px solid #2F2F2F",
            }}
          >
            {tableRowsData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr,2fr] gap-[24px] py-[16px] px-[10px]"
                style={{
                  borderBottom: "1px dashed #C8CFD6",
                }}
              >
                <p>{isSimpleCN ? t2s(row[0]) : row[0]}</p>
                <p>{isSimpleCN ? t2s(row[1]) : row[1]}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "香港與食品有關的認證服務",
      content: (
        <>
          <p>
            香港的認證機構亦有為食品行業提供與食品安全有關的認證服務，例如：
          </p>
          <br />
          <ul>
            <li>符合ISO 22000的食物安全管理體系認證</li>
          </ul>
          <br />
          <ul>
            <li>符合FSSC 22000的食物安全體系認證</li>
          </ul>
          <br />
          <ul>
            <li>危害分析和關鍵控制點（HACCP）認證</li>
          </ul>
          <br />
          <Link outerLink="https://www.polyu.edu.hk/abct/research/research-centres/food-safety-and-technology-research-centre/fhscs/">
            符合餐飲業食品標準認證系統（FHSCS）*的認證
          </Link>
          <br />
          <ul>
            <li>有機食物認證</li>
          </ul>
          <br />
          <p>
            *餐飲業食品標準認證系統是由香港理工大學開發，它是一項建基於危害分析和關鍵控制點原則的食品衞生體系，適用於製備食品和供人就餐的餐飲場所。
          </p>
        </>
      ),
    },
    {
      title: "揀選獲認可的檢測認證服務",
      content: (
        <p>
          香港認可處為本地實驗所及認證機構提供認可服務。獲認可的機構的技術能力及運作已由香港認可處連同獨立專家進行嚴格評審，認可準則根據國際標準釐定，由獲香港認可處認可的機構發出的結果更為可靠。通過多邊互認協議，獲香港認可處認可的機構所發出並載有認可處認可標誌的測試報告及證書，獲其他經濟體的相互承認安排夥伴認可機構的承認。
          <br />
          <br />
          獲香港認可處認可的實驗所或認證機構可發出具備HKAS認可標誌，並註明其登記編號的認許測試報告/證書，或於報告/證書上加上合適的語句來顯示其獲認可資格。
          <br />
          <br />
          香港認可處網頁已上載了
          <Link outerLink="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services">
            獲認可的食品測試實驗所
          </Link>
          ，以及
          <Link outerLink="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkcas.html">
            獲認可的食物安全管理體系認證機構
          </Link>
          的名單。
        </p>
      ),
    },
    {
      title: "香港的食物法例",
      content: (
        <p>
          香港的基本食物法例載於
          <Link outerLink="https://www.cfs.gov.hk/english/food_leg/food_leg_list.html#part5">
            公眾衞生及市政條例（第132章）第V部
          </Link>
          。其主要條文涵蓋對食物購買人的一般保障、與出售不宜食用的食物和攙雜食物有關的罪行、食物成分組合及標籤、食物衞生，檢取及銷毀不宜食用的食物。該條例的附屬法例則規定各特定範圍的管制事宜。
          <br />
          <br />
          另一項與食物有關的法例是
          <Link outerLink="http://www.cfs.gov.hk/english/whatsnew/whatsnew_fstr/whatsnew_fstr_Food_Safety_Bill.html">
            食物安全條例（第612章）
          </Link>
          ，條例包括實施新的食物安全管制措施，如設立食物進口商和食物分銷商登記制度，以及規定食物商須妥為保存食物進出紀錄，以加強食物溯源能力。
          <br />
          <br />
          有關食物規例/指引詳情，請瀏覽
          <Link outerLink="http://www.cfs.gov.hk/english/food_leg/food_leg.html">
            食物安全中心網站
          </Link>
          。
        </p>
      ),
    },
  ];

  const data_en: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Food Testing Services in Hong Kong",
      content: (
        <>
          <p>
            Incidents of food contamination and adulteration occur from time to
            time. Consumers are also becoming more aware of the safety and
            nutrition information of their food. Testing your food for quality
            and safety is one of the best ways to assure and attract your
            customers. Having your food products tested will also help to reduce
            the risk of costly recalls and lawsuits arising from breach of local
            regulations.
          </p>
          <br />
          <p className="!text-body-s !text-[#7E7E7E] my-[16px]">
            Food Testing Services Provided by Laboratories in Hong Kong
          </p>
          <div
            className="!text-body-s !text-[#2F2F2F]"
            style={{
              borderTop: "2px solid #2F2F2F",
            }}
          >
            {tableRowsData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr,2fr] gap-[24px] py-[16px] px-[10px]"
                style={{
                  borderBottom: "1px dashed #C8CFD6",
                }}
              >
                <p>{isSimpleCN ? t2s(row[0]) : row[0]}</p>
                <p>{isSimpleCN ? t2s(row[1]) : row[1]}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Food Related Certification Services in Hong Kong",
      content: (
        <>
          <p>
            Certification bodies in Hong Kong also provide food safety related
            certification services to the food trade, e.g.:
          </p>
          <br />
          <ul>
            <li>Food Safety Management System Certification to ISO 22000</li>
          </ul>
          <br />
          <ul>
            <li>Food Safety System Certification to FSSC 22000</li>
          </ul>
          <br />
          <ul>
            <li>
              Hazard Analysis and Critical Control Points (HACCP) Certification
            </li>
          </ul>
          <br />
          <Link outerLink="https://www.polyu.edu.hk/abct/research/research-centres/food-safety-and-technology-research-centre/fhscs/">
            Food Hygiene Standard Certification System for Catering Industry
            (FHSCS)*
          </Link>
          <br />
          <ul>
            <li>Organic Food Certification</li>
          </ul>
          <br />
          <p>
            *Developed by the Hong Kong Polytechnic University, this is a food
            hygiene system based on HACCP principles and is suitable for
            catering establishments where food is prepared and served.
          </p>
        </>
      ),
    },
    {
      title: "Selection of Accredited Testing and Certification Services",
      content: (
        <p>
          Hong Kong Accreditation Service (HKAS) offers accreditation services
          to laboratories and certification bodies in Hong Kong. Technical
          competence and operation of accredited organisations have been
          rigorously assessed by HKAS and independent experts. Accreditation
          criteria are based on internationally recognized standards. The
          reliability of results produced by HKAS-accredited organisations can
          be assured. Moreover, HKAS, through participation in Multilateral
          Mutual Recognition Arrangements, enables conformity assessments
          results issued by HKAS-accredited organisations be widely recognised
          by accreditation bodies in other economies.
          <br />
          <br />
          To indicate their accreditation status, laboratories and certification
          bodies accredited by HKAS may issue endorsed test reports/certificates
          that bear the HKAS accreditation symbol and the registration number of
          the accredited laboratories. In some cases, accreditation status may
          be claimed by including an appropriate statement in the certificates.
          <br />
          <br />
          List of&nbsp;
          <Link outerLink="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services">
            laboratories accredited for performing food testing
          </Link>
          &nbsp;and&nbsp;
          <Link outerLink="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkcas.html">
            certification bodies accredited for carrying out food safety
            management system certification
          </Link>
          &nbsp;can be obtained from HKAS website.
        </p>
      ),
    },
    {
      title: "Food Ordinances in Hong Kong",
      content: (
        <p>
          The basic food law in Hong Kong is laid down in&nbsp;
          <Link outerLink="https://www.cfs.gov.hk/english/food_leg/food_leg_list.html#part5">
            Part V of the Public Health and Municipal Services Ordinance (Cap.
            132)
          </Link>
          &nbsp;. The main provisions cover general protection for food
          purchasers, offences in connection with sale of unfit food and
          adulterated food, composition and labeling of food, food hygiene,
          seizure and destruction of unfit food. Controls in specific areas are
          provided in subsidiary legislation under the Ordinance.
          <br />
          <br />
          Another food related ordinance is&nbsp;
          <Link outerLink="http://www.cfs.gov.hk/english/whatsnew/whatsnew_fstr/whatsnew_fstr_Food_Safety_Bill.html">
            the Food Safety Ordinance (Cap. 612)
          </Link>
          &nbsp;which provides new food safety control measures, including a
          registration scheme for food importers and food distributors and a
          requirement for food traders to maintain proper records of the
          movements of food to enhance food traceability.
          <br />
          <br />
          For more details on Food Legislation / Guidelines in Hong Kong, please
          visit the&nbsp;
          <Link outerLink="http://www.cfs.gov.hk/english/food_leg/food_leg.html">
            Centre for Food Safety website
          </Link>
          .
        </p>
      ),
    },
  ];

  const data = language === Language.EN ? data_en : data_cn;

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={page_text.title}
    />
  );

  const content = (
    <>
      <SquareTitle title={page_text.title} />

      <div
        className={`my-[24px] grid grid-cols-${
          isPC ? photo.length : 1
        } gap-[24px]`}
      >
        {photo.map((item, index) => (
          <div key={index} className="w-full">
            <MediaTemplate
              direction={"vertical"}
              title={getSingleText(item.title, item.titleCN)}
              iconPath={item.icon}
              imagePath={`/assets/tcSector/servicesDifferentBusinessAreas/${item.img}.png`}
              mediaLink={item.link}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-[24px] mb-[24px]">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={isSimpleCN ? t2s(item.title) : item.title}
            details={
              <div className="text-body-m">
                {isSimpleCN
                  ? getSingleNode(item.content, item.content)
                  : item.content}
              </div>
            }
          />
        ))}
      </div>

      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );

  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={"tcSector/servicesDifferentBusinessAreas/food_banner.png"}
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                page_text.title,
                language
              )}
            />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              <div className="sticky top-[20px]">{sidebar}</div>
            </div>
            <div className="flex-1">{content}</div>
          </div>
        ) : (
          <div className="px-[24px] pb-[24px] flex flex-col gap-[24px]">
            <div>{sidebar}</div>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
