import React, { useState } from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  MediaTemplate,
  MediaTemplateWithDialog,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import {
  activatedButtonStyle,
  normalButtonStyle,
} from "../../../../components";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

export const ElectricalElectronicProducts: React.FC = () => {
  const { isPC, language, getPageText } = useSettings();

  const multilingual = {
    en: {
      title: "Electrical and Electronic Products",
      file: "Hong Kong's Testing and Certification Services for Electrical and Electronic Products",
      testing: "Testing",
      certification: "Certification",
      inspection: "Inspection",
      benefits_of:
        "Benefits of Electrical and Electronic Products Testing & Certification",
      product_certification:
        "Product certification is sometimes required for EEPs such as China Compulsory Certification (CCC).",
      eg_of:
        "Examples of EEP inspection services include inspection of manufacturing processes and pre-shipment inspections at the factory to determine whether a particular batch of EEPs complies with the relevant buyer's specifications.",
      benefits_details: [
        "Electrical and electronic products (EEPs) are widely used in almost all aspects of daily life including audio and video equipment, children's toys, communication devices, household appliances and lighting products. EEPs are also invaluable for essential medical and public utilities. Safety and performance of EEPs are thus of paramount concern. It is vital that all EEPs sold meet stringent and performance standards to ensure they are safe and suitable for their intended use.",
        "The EEP industry uses numerous third-party testing and certification services to ensure products comply with international/national standards or regulations specified by importing countries. Through testing and certification, the quality of EEPs can be enhanced. This helps manufacturers and traders to minimise the chance of recalls, returns and complaints, and to establish a good reputation as well as to enhance product sales.",
      ],
      tc_service: `Testing & Certification Services for Electrical and Electronic Products`,
      laboratories:
        "Laboratories Accredited by HKAS Providing Testing Services on Electrical and Electronic Products",
      btns: ["Common safety tests", "Common performance tests"],
      test_eg_1: [
        "Electrical hazard tests",
        "Photobiological safety hazard tests",
        "Thermal tests - including excessive temperature and fire hazard risks",
        "Mechanical hazard tests",
        "Reliability tests for safety critical components, e.g. fuses, thermostats, etc.",
        "Electromagnetic energy exposure tests to determine whether the Specific Absorption Rate of radio frequencies (RF) is within international electromagnetic field exposure guidelines",
        "Chemical tests, such as leaching of dangerous chemicals, screening for harmful chemicals like Bisphenol A (BPA), formaldehydes, halogens and polycyclic aromatic hydrocarbons (PAHs)",
        "Noise and acoustic tests - especially for headphones and handsets",
        "Transit tests to assess shock, vibration, compression and atmospheric changes that may be incurred during the transportation of goods",
      ],
      test_eg_2: [
        "Electromagnetic compatibility (EMC) and radio frequency (RF) tests to determine performance reliability of an EEP when other EEPs operate in close proximity",
        "Energy-efficiency tests",
        "Durability tests, such as life tests of compact fluorescent lamps and LED lamps",
        "Functionality and usability tests",
      ],
      bottom: (
        <>
          The laboratories providing accredited testing services on Electrical
          and Electronic Products are available att&nbsp;
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
      accredited_testing: `Accredited testing and certification organisations in Hong Kong can provide professional services in electrical and electronic product (EEP) testing, inspection and certification at different stages throughout the product supply chain.`,
      common: `EEPs are commonly tested, in accordance with standardised technical procedures, to determine if the products conform to requirements set out by importing countries.`,
    },
    cn: {
      title: "電氣及電子產品",
      file: "香港的電氣及電子產品檢測和認證服務",
      testing: "測試",
      inspection: "檢驗",
      certification: "認證",
      product_certification:
        "電子產品有時須按進口國家／地區要求提供產品認證（如中國強制性產品認證，即CCC）。",
      eg_of:
        "電子產品檢驗服務的例子包括廠房檢驗和產品付運前檢驗，以確保特定批次電子產品符合買方規格。",
      benefits_of: "電子產品檢測認證帶來的好處",
      benefits_details: [
        "電氣及電子產品（簡稱「電子產品」）在日常生活中被廣泛使用，當中包括音響及影像設備、兒童玩具、通訊設備、家居電器及照明產品等；它亦是主要醫療及公共事業設施不可或缺的裝置。電子產品的安全和性能因而備受關注，故此銷售的電子產品均必須符合嚴格的安全及性能標準，以確保產品安全及切合其用途。",
        "電子產品行業利用各類由第三方提供的檢測認證服務，以確保產品符合進口國指定的國際／國家標準或法規；檢測認證有助提升質量，幫助生產商及批發商減少回收產品、退貨及遭受投訴的機會，從而建立良好商譽，提升產品銷量。",
      ],
      btns: ["常見安全測試", "常見性能測試"],
      test_eg_1: [
        "電力安全測試",
        "光生物學安全測試",
        "溫度測試，包括溫度過高及着火危險測試",
        "機械安全測試",
        "可靠性測試，主要針對關鍵零部件，如保險絲、恆溫器等",
        "電磁輻射暴露測試，確保射頻比吸收率符合國際電磁場暴露值指引",
        "化學測試，如危險化學物滲漏，篩選有害化學物質如雙酚A（BPA）、甲醛、鹵素和多環芳香烴",
        "噪音及聲頻測試，特別針對耳機及手機",
        "運輸測試，評估貨物在運輸過程中，可能承受的衝擊、振動、壓縮及大氣變化所導致的影響",
      ],
      test_eg_2: [
        "電磁兼容性及射頻測試針對產品接近其他電子產品時，就其性能的可靠性進行測試，有關測試對醫療電子器材尤其重要。",
        "能源效益測試",
        "耐久程度測試，如慳電膽和LED燈的壽命測試",
        "功能及可用性測試",
      ],
      tc_service: "電氣及電子產品認證服務",
      laboratories: "獲香港認可處認可的電氣及電子產品測試實驗所",
      accredited_testing: `本港獲認可的檢測認證機構在整個產品供應鏈的不同階段中，為電氣及電子產品（簡稱「電子產品」）提供專業測試、檢驗及認證服務。`,
      bottom: (
        <>
          獲香港認可處認可的電氣及電子產品（簡稱「電子產品」）測試實驗所名單，請瀏覽
          <a
            aria-label="香港認可處網頁"
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
      common: "電子產品通常會按照標準技術程序進行測試，以確保符合進口國要求。",
    },
  };

  const page_text = getPageText(multilingual);

  const {
    title,
    file,
    testing,
    product_certification,
    eg_of,
    benefits_details,
    certification,
    inspection,
    tc_service,
    test_eg_1,
    common,
    benefits_of,
    laboratories,
    bottom,
    accredited_testing,
    btns,
    test_eg_2,
  } = page_text;
  const businessAreaTitle = title as BusinessAreaTitle;
  const [activeButton, setActiveButton] = useState<number>(0);

  const servicesForElectrical: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: testing as string,
      content: (
        <>
          <p className="text-body-m">{common as string}</p>
          <div className="flex flex-wrap gap-[8px] my-[16px]">
            {(btns as string[]).map((btn, index) => {
              const isActivated = index === activeButton;
              return (
                <button
                  key={index}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                  aria-label={btn}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <ul className="mt-[16px] flex flex-col !gap-[12px]">
            {((activeButton === 0 ? test_eg_1 : test_eg_2) as string[]).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </>
      ),
    },
    {
      title: inspection as string,
      content: eg_of as React.ReactNode,
    },
    {
      title: certification as string,
      content: product_certification as React.ReactNode,
    },
  ];

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const fileTemplateLink: Record<Language, string> = {
    [Language.EN]: "/en/doc/EEP_booklet_eng.pdf",
    [Language.ZH_TW]: "/tc/doc/EEP_booklet_tc.pdf",
    [Language.ZH_CN]: "/sc/doc/EEP_booklet_sc.pdf",
  };

  const youtubeTemplateLink: Record<Language, string> = {
    [Language.EN]: "https://www.youtube.com/embed/P270J9iaZ0s",
    [Language.ZH_TW]: "https://www.youtube.com/embed/yMKQPVsduVc",
    [Language.ZH_CN]: "https://www.youtube.com/embed/yMKQPVsduVc",
  };

  const content = (
    <>
      <SquareTitle title={businessAreaTitle} />
      <div className="my-[24px]">
        <MediaTemplate
          iconPath="VIDEO.png"
          title={file as string}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ElectricalElectronicProducts_Video.png"
          mediaLink={youtubeTemplateLink[language]}
        />
      </div>
      <div className="w-full flex flex-row gap-[24px]">
        <MediaTemplateWithDialog
          title={title as string}
          mediaLink={fileTemplateLink[language]}
          mediaDomain={"hkctc"}
          direction={"row"}
          date=""
          mediaType={MEDIA_TYPE.PDF}
        />
      </div>
      <div className="text-heading-l my-[24px]">
        {benefits_of as React.ReactNode}
      </div>
      <div className="text-body-m text-justify">
        {(benefits_details as React.ReactNode[])[0]}
        <br />
        <br />
        {(benefits_details as React.ReactNode[])[1]}
      </div>
      <hr className="my-[24px]" />

      <div className="text-heading-l">{tc_service as React.ReactNode}</div>
      <div className="text-body-m my-[24px]">
        {accredited_testing as React.ReactNode}
      </div>
      <div className="w-full flex flex-col gap-[24px]">
        {servicesForElectrical.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            details={<div className="!text-body-m">{item.content}</div>}
          />
        ))}
      </div>
      <div className="text-heading-l my-[24px]">
        {laboratories as React.ReactNode}
      </div>
      <div className="text-body-m text-justify">
        {bottom as React.ReactNode}
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
        src={"tcSector/servicesDifferentBusinessAreas/Electrical_banner.png"}
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
