import React from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  MediaTemplateWithDialog,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

export const ToysChildrenProducts: React.FC = () => {
  const { isPC, getPageText, language } = useSettings();

  const multilingual = {
    en: {
      title: `Toys and Children's Products`,
      toys: "Toys",
      testing: "Testing",
      file: "Hong Kong's Testing and Certification Services for Toys and Children's Products",
      inspection: "Inspection",
      benefits_of_toys:
        "Benefits of Toys and Children's Products Testing & Certification",
      when_it_comes: `When it comes to toys, safety is of paramount concern. The toy industry uses a lot of third-party testing and certification services to assure compliance with international safety standards.`,
      help_assure: `Testing and certification help assure the quality of toys, minimise the chance of recalls, returns and complaints — reducing financial risks to suppliers, traders and retailers — and help to establish a good reputation. This in turn leads to increasing product sales which has a positive impact upon everyone's bottom-line.`,
      certification: "Certification",
      tc_service: `Testing & Certification Services for Toys and Children's Products`,
      common_testing: "Common testing for toys includes:",
      testing_content: [
        `Testing for the bio-availability of toxic elements such as lead (Pb), mercury (Hg), cadmium (Cd) and the amount of hazardous chemicals such as phthalates`,
        `Electrical testing, such as electrical strength test`,
        `Testing for electromagnetic compatibility, such as radiated disturbance, electrostatic discharge`,
        `Micro-biological examination`,
        `Flammability testing`,
        `Mechanical testing such as load stresses like torsion, traction and compression`,
        `Physical testing such as presence of sharp points or hard edges`,
      ],
      examples_of:
        "Examples of toy inspection services are factory inspections of the manufacturing processes and pre-shipment inspections at the factory to determine whether the batch of toy products complies with the buyer's specifications.",
      laboratories:
        "Laboratories Accredited by HKAS Providing Testing Services on Toys and Children's Products",
      product_certification:
        "Product certification is required for toys in some countries, e.g. China Compulsory Certification (CCC) System.",
      bottom: (
        <>
          The laboratories providing accredited testing services on Toys and
          Children's Products are available at&nbsp;
          <a
            aria-label="HKAS's website  – opens in a new tab"
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html"
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
      title: "玩具及兒童產品",
      toys: "玩具",
      file: "香港的玩具及兒童產品檢測和認證服務",
      testing: "測試",
      inspection: "檢驗",
      benefits_of_toys: "玩具檢測和認證帶來的好處",
      when_it_comes:
        "當提到玩具，安全往往是首要的考慮因素。玩具業界經常透過由第三方提供的檢測和認證服務，確保玩具產品符合國際的安全標準。",
      help_assure:
        "檢測和認證有助確保玩具的質素，因而可減低玩具供應商、批發商和零售商因回收、退回及被投訴而招致的財務風險，並有助他們建立良好聲譽及增加產品銷量，令人人受惠。",
      certification: "認證",
      tc_service: "玩具檢測和認證服務",
      common_testing: "一般的玩具測試包括：",
      testing_content: [
        `有毒元素（如鉛（Pb）、汞（Hg）、鎘（Cd））的釋出量和有害化學物（如鄰苯二甲酸酯）的含量`,
        `電氣測試，如電氣強度測試`,
        `電磁兼容測試，如輻射干擾、靜電放電的影響`,
        `微生物檢查`,
        `燃燒性測試`,
        `機械測試，如扭力、牽引和壓縮等載壓測試`,
        `物理測試，如是否有尖角或硬邊`,
      ],
      laboratories: "獲香港認可處認可的玩具及兒童產品測試實驗所",
      product_certification:
        "部分玩具需獲取產品認證，例如中國強制性產品認證（CCC）制度。",
      examples_of:
        "玩具檢驗服務的例子包括檢驗工廠的生產過程，以及在產品付運前，確定有關玩具產品是否符合買方的規格及要求。",
      bottom: (
        <>
          獲香港認可處認可的玩具及兒童產品測試實驗所名單，請瀏覽
          <a
            aria-label="香港认可处网页"
            href={
              language === Language.ZH_TW
                ? "https://www.itc.gov.hk/ch/quality/hkas/conformity_assessment_bodies/hoklas.html"
                : "https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/hoklas.html"
            }
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

  const page_text = getPageText(multilingual);
  const {
    title,
    file,
    tc_service,
    product_certification,
    toys,
    certification,
    inspection,
    testing_content,
    testing,
    common_testing,
    benefits_of_toys,
    when_it_comes,
    help_assure,
    laboratories,
    bottom,
    examples_of,
  } = page_text;

  const businessAreaTitle = title as BusinessAreaTitle;

  const servicesForToys: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: testing as string,
      content: (
        <>
          <p>{common_testing as string}</p>
          <br />
          <ul>
            {(testing_content as string[]).map((content, i) => (
              <li key={i}>{content}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: inspection as string,
      content: examples_of as string,
    },
    {
      title: certification as string,
      content: product_certification as string,
    },
  ];

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const bottomMapping: Record<Language, any> = {
    [Language.EN]: bottom,
    [Language.ZH_TW]: bottom,
    [Language.ZH_CN]: (
      <>
        获香港认可处认可的玩具及儿童产品测试实验所名单，请浏览
        <a
          aria-label="香港认可处网页"
          href="https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/hoklas.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港认可处网页
        </a>
        。
      </>
    ),
  };

  const fileTemplateLink: Record<Language, string> = {
    [Language.EN]: "/en/doc/toys_booklet_eng.pdf",
    [Language.ZH_TW]: "/tc/doc/toys_booklet_tc.pdf",
    [Language.ZH_CN]: "/sc/doc/toys_booklet_sc.pdf",
  };

  const youtubeTemplateLink: Record<Language, string> = {
    [Language.EN]: "https://www.youtube.com/embed/fKkwNRX0i6c",
    [Language.ZH_TW]: "https://www.youtube.com/embed/t7D3SdfyshI",
    [Language.ZH_CN]: "https://www.youtube.com/embed/t7D3SdfyshI",
  };

  const content = (
    <>
      <SquareTitle title={businessAreaTitle} />

      <div className="my-[24px]">
        <MediaTemplate
          title={file as string}
          iconPath="VIDEO.png"
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ToysAndChildren_Video.png"
          mediaLink={youtubeTemplateLink[language]}
        />
      </div>
      <div className="w-full flex flex-row gap-[24px]">
        <MediaTemplateWithDialog
          title={toys as string}
          mediaLink={fileTemplateLink[language]}
          mediaDomain={"hkctc"}
          direction={"row"}
          date=""
          mediaType={MEDIA_TYPE.PDF}
        />
      </div>
      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {benefits_of_toys as string}{" "}
      </p>
      <p className="text-body-m text-justify">
        {when_it_comes as string}
        <br />
        <br />
        {help_assure as string}
      </p>
      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]" role="heading" aria-level={10}>
        {tc_service as string}
      </p>

      <div className="w-full flex flex-col gap-[24px]">
        {servicesForToys.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>
      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]" role="heading" aria-level={10}>
        {laboratories as string}
      </p>
      <p className="text-body-m text-justify">{bottomMapping[language]}</p>
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
          "tcSector/servicesDifferentBusinessAreas/ToysAndChildren_banner.png"
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
