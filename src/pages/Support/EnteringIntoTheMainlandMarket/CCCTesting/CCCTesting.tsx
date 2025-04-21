import React from "react";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { ClausesDirectorySidebar } from "../ClausesDirectorySidebar";
import { Language, useSettings } from "../../../../context";

export const CCCTesting: React.FC = () => {
  const { isPC, language, getPageText } = useSettings();
  const multilingual = {
    en: {
      home: "Home",
      support: "Support - Entering into the Mainland Market",
      CCC: "China Compulsory Certification (CCC) Testing",
      CEPA: "CEPA Agreements",
      since:
        "Since the signing of the Supplement VII to CEPA, the Mainland has been gradually opening up its CCC market to Hong Kong testing and certification bodies. Testing organisations in Hong Kong are now allowed to co-operate with designated Mainland certification bodies to undertake testing of all products that require CCC which are processed or manufactured in any place (including places outside China).",
      list: [
        "Electric cables and wiring",
        "Electrical switches, protective devices and connection devices",
        "Low voltage electrical equipment",
        "Small power motors",
        "Electric tools",
        "Electric welding machines",
        "Household and similar electrical appliances",
        "Electronic product and safety accessory",
        "Lighting apparatus",
        "Motor vehicles and safety accessories",
        "Agricultural machinery",
        "Fire service equipment",
        "Construction materials",
        "Children’s products",
        "Explosion-proof electrical products",
        "Household gas appliances",
      ],
      any_testing: (
        <>
          Any testing organisations engaging in testing business for products
          under the CCC System have to be accredited by Hong Kong Accreditation
          Service (HKAS) to be capable of performing testing for the relevant
          products. Procedures for testing organisations in applying for
          relevant accreditation from HKAS could be viewed at&nbsp;
          <a
            aria-label="HKAS's website  – opens in a new tab"
            href="https://www.itc.gov.hk/en/quality/hkas/accreditation/ccc.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            HKAS's website
          </a>
          .
        </>
      ),
      list_of: "List of existing products requiring CCC",
      enquiry: (
        <>
          For enquiry on accreditation for CCC testing, please contact:
          <br />
          Hong Kong Accreditation Service
          <br />
          Telephone: (852) 2829 4826
          <br />
          Fax: (852) 2824 1302
          <br />
          Email:&nbsp;
          <a
            aria-label="mail to wmleung@itc.gov.hk"
            className="underline text-[#00E]"
            tabIndex={0}
            href="mailto:wmleung@itc.gov.hk"
          >
            wmleung@itc.gov.hk
          </a>
        </>
      ),
      bread_title:
        "China Compulsory Certification (CCC) Testing or International Multilateral Systems on Mutual Recognition",
    },
    cn: {
      home: "主頁",
      support: "支援 - 進入內地市場",
      CCC: "中國強制性產品認證（CCC）檢測",
      CEPA: "CEPA協議",
      list_of: "現行需要CCC認證的產品包括：",
      since:
        "自簽署《CEPA補充協議七》起，內地逐步對香港檢測和認證機構開放其CCC市場。現時香港檢測機構可與內地指定認證機構合作，為在任何地區（包括中國以外）加工或生產並需CCC認證的產品進行檢測工作。",
      list: [
        `電線電纜`,
        `電路開關及保護或連接用電器裝置`,
        `低壓電器`,
        `小功率電動機`,
        `電動工具`,
        `電焊機`,
        `家用和類似用途設備`,
        `電子產品及安全附件`,
        `照明電器`,
        `車輛及安全附件`,
        `農機產品`,
        `消防產品`,
        `建材產品`,
        `兒童用品`,
        `防爆電氣`,
        `家用燃氣器具`,
      ],
      any_testing: (
        <>
          任何擬從事CCC檢測工作的檢測實驗所須獲得香港認可處認可，以確認該實驗所具備相關檢測能力。有關申請香港認可處認可的程序，請見香港認可處的
          <a
            aria-label="香港認可處"
            href={
              language === Language.ZH_CN
                ? "https://www.itc.gov.hk/ch/quality/hkas/accreditation/ccc.html"
                : "https://www.itc.gov.hk/gb/quality/hkas/accreditation/ccc.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            網頁
          </a>
          。
        </>
      ),
      enquiry: (
        <>
          如有任何有關CCC檢測之認可的查詢，請聯絡：
          <br />
          香港認可處
          <br />
          電話：（852）2829 4846
          <br />
          傳真：（852）2824 1302
          <br />
          電子郵件：
          <a
            aria-label="mail to wmleung@itc.gov.hk"
            className="underline text-[#00E]"
            tabIndex={0}
            href="mailto:wmleung@itc.gov.hk"
          >
            wmleung@itc.gov.hk
          </a>
        </>
      ),
    },
  };

  const page_text = getPageText(multilingual);
  const {
    home,
    support,
    CCC,
    list,
    since,
    any_testing,
    list_of,
    enquiry,
    CEPA,
  } = page_text;

  const breadcrumbItems = [
    { label: home as string, href: "/" },
    {
      label: support as string,
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#0`,
    },
    {
      label: CEPA as string,
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#1`,
    },
    { label: CCC as string },
  ];

  const sidebar = <ClausesDirectorySidebar />;
  const content = (
    <>
      <SquareTitle title={CCC as string} />
      <div className="text-body-m my-[24px] text-justify">
        {since as React.ReactNode}
        <br />
        <br />
        {any_testing as React.ReactNode}
      </div>
      <Accordion
        title={list_of as string}
        details={
          <div className="text-body-m">
            {(list as string[]).map((data, index) => (
              <p key={index}>
                {index + 1}.&nbsp;{data}
              </p>
            ))}
          </div>
        }
      />
      <p className="mt-[24px] text-body-m">{enquiry as React.ReactNode}</p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"support/support_5.png"} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              {sidebar}
            </div>
            <div className="flex-1">{content}</div>
          </div>
        ) : (
          <div className="w-full flex flex-col pt-[48px] px-[24px]">
            {sidebar}
            <div className="flex-1">{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
