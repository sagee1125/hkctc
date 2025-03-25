import React from "react";
import {
  handleReturnDifferentBusinessAreasBreadcrumb,
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
} from "./utils";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  FileTemplate,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Textiles and Apparel",
    file: "Hong Kong's Testing and Certification Services for Textiles and Garment",
    testing: "Testing",
    certification: "Certification",
    inspection: "Inspection",
    benefits_of: "Benefits of Textile and Apparel Testing & Certification",
    eg_of_testing_1: `Examples of tests to meet regulatory requirements:`,
    testing_content_1: [
      "Physical tests, such as fibre analysis on composition, colour fastness tests, assessments on shrinkage and appearance in conjunction with labelling, flammability tests on general clothing, nightwear and vinyl film",
      "Chemical tests, such as azo dyes, cadmium, nickel release, lead and phthalates, etc.",
    ],
    eg_of_testing_2: `Examples of tests to fulfill quality performance requirements:`,
    testing_content_2: [
      `Physical tests, such as strength tests on tensile, tearing and bursting strengths, colour fastness tests to washing, water, rubbing, light and perspiration, construction tests on yarn count, performance tests on pilling, abrasion and snagging resistance, functional tests on air permeability, water resistance and UV protection`,
      `Chemical tests such as pH value, extractable heavy metals, chlorinated organic careers, etc.`,
    ],
    eg_include:
      "Examples include factory inspection of manufacturing processes, pre-shipment inspection to determine whether a particular batch of products complies with the relevant buyer's specifications, supervision of loading, etc.",
    certification_related:
      "Certification related to products, processes, systems and persons, such as ISO 9001 for quality management, ISO 14001 for environmental management and ISO 50001 for energy management systems.",
    tc_service: `Testing & Certification Services for Textiles and Apparel`,

    benefit_detail: (
      <>
        Not only Hong Kong's traditional trade partners but also the new
        emerging market have imposed&nbsp;
        <span className="text-highlight-m text-newPrimary">
          more stringent regulations and requirements
        </span>
        &nbsp;over imported textile and apparel. At the same time, consumers
        also have an increasing expectation on product quality and concern
        about&nbsp;
        <span className="text-highlight-m text-newPrimary">
          impact on the environment
        </span>
        .
        <br />
        <br />
        Testing and certification can help assure textile and apparel's
        compliance with relevant regulatory requirements of importing countries,
        as well as those specific quality and performance requirements by their
        clients. Examples on quality aspects of fabric include breathability,
        high-stretch, anti-bacterial, UV protection, wrinkle-free and water
        resistant properties, etc.
        <br />
        <br />
        Testing and certification can enhance consumers' confidence over the
        safety and quality of textile and apparel. Manufacturers, traders and
        retailers alike can also reduce their financial risks arising from
        rejects, recalls and complaints, and build up their brand reputation
        resulting in increased sales.
      </>
    ),
    laboratories:
      "Laboratories Accredited by HKAS Providing Testing Services on Textile and Apparel",
    hk_tc: `Hong Kong's testing and certification industry provides valuable support on various stages of the supply chain. Apart from testing, certification and inspection services, the industry also provides advisory services in relation to international/national regulatory requirements, as well as standards on raw materials and finished products.`,
    bottom: (
      <>
        The laboratories providing accredited testing services on Textile and
        Apparel are available at&nbsp;
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          HKAS's website
        </a>
        .
      </>
    ),
  },
  cn: {
    title: "紡織與成衣",
    file: "香港的紡織品及成衣測和認證服務",
    testing: "測試",
    inspection: "檢驗",
    benefits_of: "紡織品及成衣檢測認證帶來的好處",
    certification: "認證",
    eg_of_testing_1: `符合法規要求的測試例子`,
    eg_of_testing_2: `滿足質量和性能要求的測試例子`,
    testing_content_1: [
      "物理測試，例如纖維成分的分析、與衣物護理標籤有關的色牢度測試、縮水比例及外觀評估、對一般服裝、睡衣和乙烯薄膜進行的可燃性測試",
      "化學測試，例如偶氮染料、鎘、鎳釋放量、鉛和鄰苯二甲酸鹽等",
    ],
    testing_content_2: [
      `物理測試，例如對拉伸、撕破及脹破的強度測試、對洗滌、磨擦、日照及汗水的色牢度測試、紗線支數及織物密度等結構組織測試、對起毛球、耐磨和抗鉤絲性的性能測試、透氣性、防水性和防紫外線功能測試`,
      `化學測試，例如酸鹼值、可提取重金屬和氯化有機載體等`,
    ],
    eg_include:
      "紡織品及成衣檢驗服務的例子包括檢查工廠生產過程，裝運前檢查某一批產品是否符合買家特定要求，及監管裝運過程等。",
    certification_related:
      "對產品、過程、系統或人員發出認證證書，以證明其符合特定要求，例如ISO 9001品質管理體系認證、ISO 14001環境管理體系認證和ISO 50001能源管理體系認證。",
    tc_service: "紡織品及成衣檢測認證服務",
    laboratories: "獲香港認可處認可的紡織品及成衣測試實驗所",
    hk_tc: `香港的檢測和認證業為供應鏈上不同階段提供有力支援，除測試、認證及檢驗服務外，行業還就國際/不同國家對紡織原材料及成衣訂定的法規及標準，提供諮詢服務。`,
    benefit_detail: (
      <>
        香港傳統的貿易夥伴以至新興市場，都不時
        <span className="text-highlight-m text-newPrimary">
          提高入口紡織品及成衣的規格要求
        </span>
        。 另一方面，現代消費者對產品質量期望遞升，並關注其對
        <span className="text-highlight-m text-newPrimary">環境的影響</span>
        。
        <br />
        <br />
        檢測和認證有助確認紡織品及成衣能符合入口國家的規管要求，及達到客戶對品質與表現的特定需求，例如布料的透氣功能、拉伸強度、防菌功能、紫外線防護等級、防皺功能及防水功能等。
        <br />
        <br />
        檢測和認證可加強消費者對紡織品與成衣在安全與品質的信心。同時，生產商、批發商及零售商可減低因為退貨、回收及被投訴而須承擔的財務風險，並可因建立良好商譽而令銷量增加，令各方受惠。
      </>
    ),

    bottom: (
      <>
        獲香港認可處認可的紡織及成衣測試實驗所名單，請瀏覽
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港認可處網頁
        </a>
        。
      </>
    ),
  },
};

export const TextilesAndApparel: React.FC = () => {
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;

  const page_text = isEn ? multilingual.en : multilingual.cn;
  const {
    title,
    file,
    testing,
    eg_of_testing_1,
    eg_of_testing_2,
    testing_content_1,
    testing_content_2,
    eg_include,
    certification_related,
    certification,
    inspection,
    tc_service,
    hk_tc,
    benefits_of,
    laboratories,
    bottom,
    benefit_detail,
  } = page_text;
  const businessAreaTitle = title as BusinessAreaTitle;

  const servicesForTextile: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: testing,
      content: (
        <>
          <p>{eg_of_testing_1}</p>
          <br />
          <ul>
            {testing_content_1.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          <br />
          <p>{eg_of_testing_2}</p>
          <br />
          <ul>
            {testing_content_2.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: inspection,
      content: eg_include,
    },
    {
      title: certification,
      content: certification_related,
    },
  ];

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const content = (
    <>
      <SquareTitle title={title} />

      <div className="my-[24px]">
        <MediaTemplate
          iconPath="VIDEO.png"
          title={file}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/Textiles_Garment.png"
          mediaLink="https://www.youtube.com/embed/JL54Sx8IFF0"
        />
      </div>

      <FileTemplate
        title={title}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/TextilesPDF.png"
        pdfHyperlink="/en/doc/textile_booklet_low_res_eng.pdf"
      />
      <p className="text-heading-l my-[24px]">{benefits_of}</p>
      <p className="text-body-m text-justify">{benefit_detail}</p>
      <hr className="my-[24px]" />

      <p className="text-heading-l">{tc_service}</p>
      <p className="text-body-m my-[24px] text-justify">{hk_tc}</p>
      <div className="w-full flex flex-col gap-[24px]">
        {servicesForTextile.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>
      <hr className="my-[24px]" />

      <p className="text-heading-l mt-[24px]">{laboratories}</p>
      <p className="text-body-m pt-[24px] text-justify">{bottom}</p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/Textiles_Garment_banner.png"
        }
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                businessAreaTitle,
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
