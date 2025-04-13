import React from "react";
import {
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
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
import { Language, LanguageResources, useSettings } from "../../../../context";

export const Jewellery: React.FC = () => {
  const { isPC, language, getPageText } = useSettings();

  const multilingual = {
    en: {
      title: "Jewellery",
      mediaTitle:
        "Hong Kong's Testing Services for Fei Cui (Jadeite Jade) and Diamond",
      file_title_1: "Testing of Fei Cui and Diamond in Hong Kong",
      file_title_2: "Diamond Testing Services in Hong Kong",
      testing_fei_cui:
        "Testing Services for Fei Cui (Jadeite Jade) and Diamond",
      Authentication_fei_cui: `Authentication of natural Fei Cui (Jadeite Jade) and diamond is
            carried out by Hong Kong laboratories using scientific methods.`,
      internationally_renowned: `There are internationally renowned gemstone laboratories and local
            laboratories in Hong Kong providing professional gemstone
            identification services.`,
      hk_Accreditation: `Hong Kong Accreditation Service (HKAS) assesses the technical
            competence and quality system of laboratories according to the
            International Standard, ISO/IEC 17025, and provides accreditation to
            competent laboratories.`,
      Accredited_laboratories: `Accredited laboratories may issue endorsed test reports bearing HKAS
            accreditation symbol for Fei Cui (Jadeite Jade) and diamond after
            test.`,
      acc_1: {
        title: "Trade Descriptions Order",
        content: `Under the Trade Descriptions (Provision of Information on Natural Fei
                    Cui) Order and the Trade Descriptions (Provision of Information on
                    Diamond) Order of the Laws of Hong Kong, retailers are required to
                    issue to the buyers invoices or receipts showing, among others, the
                    description of any article of natural Fei Cui or diamond sold in
                    accordance with the Orders.`,
      },
      acc_2: {
        title: "Accreditation of Laboratories",
        content:
          "Application for accreditation is open and voluntary in Hong Kong. All Hong Kong Accreditation Service (HKAS) accredited laboratories meet the management and technical requirements of the international standard, ISO/IEC 17025, in the provision of high quality testing services.",
      },

      Laboratories_Accredited:
        "Laboratories Accredited by HKAS Providing Testing Services on Jewellery",
      hk_accredited_lab: (
        <p className="text-body-m">
          Accredited laboratories in Hong Kong adopt the&nbsp;
          <a
            aria-label="Standard Methods for Testing Fei Cui (Jadeite Jade) for Hong Kong - opens in a new tab"
            href="http://www.gahk.org/en/gemtest.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Standard Methods for Testing Fei Cui (Jadeite Jade) for Hong Kong
          </a>
          &nbsp;and&nbsp;
          <a
            aria-label="Standard Methods for Testing Diamond for Hong Kong - opens in a new tab"
            href="http://www.gahk.org/en/gemtest.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Standard Methods for Testing Diamond for Hong Kong
          </a>
          , formulated by The Gemmological Association of Hong Kong, for
          identification purpose.
          <br />
          <br />
          The laboratories providing accredited testing services on Jewellery
          are available at&nbsp;
          <a
            aria-label="HKAS's website  – opens in a new tab"
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            HKAS's website
          </a>
          . (Please choose the test category, "Physical and Mechanical Testing",
          under "Services" to search the relevant laboratories.)
        </p>
      ),
    },
    cn: {
      title: "珠寶",
      mediaTitle: "香港硬玉質翡翠及鑽石測試服務",
      file_title_1: "香港翡翠及鑽石測試",
      file_title_2: "香港的鑽石測試服務",
      testing_fei_cui: "硬玉質翡翠與鑽石測試服務",
      Authentication_fei_cui: `香港實驗所利用科學方法對天然硬玉質翡翠與鑽石進行鑑定。`,
      internationally_renowned: `香港有著名的國際寶石鑑定所和本地實驗所，提供專業的寶石鑑定服務。`,
      hk_Accreditation: `香港認可處會按照國際標準ISO/IEC 17025評核實驗所的技術能力及品質管理體系，並給合資格的實驗所發出認可資格。`,
      Accredited_laboratories: `獲認可的實驗所可以對經測試的硬玉質翡翠與鑽石發出有HKAS認可標認的測試報告。`,
      acc_1: {
        title: "商品說明令",
        content: `按照香港法例《商品說明（提供關於天然翡翠的資料）令》及《商品說明（提供關於鑽石的資料）令》的規定，零售商在售賣天然翡翠或鑽石製品時，須向買家發出發票或收據，告知法令規定的資料包括該製品的說明等。`,
      },
      acc_2: {
        title: "實驗所認可",
        content:
          "在香港，申請認可資格是公開和自願性質的。獲香港認可處認可的實驗所已達到國際標準ISO/IEC 17025對管理及技術的要求，可提供高水平的檢測服務。",
      },

      Laboratories_Accredited: "獲香港認可處認可的寶石測試實驗所",
      hk_accredited_lab: (
        <>
          香港的認可實驗所按香港寶石學協會出版的
          <a
            aria-label="《香港標準硬玉質翡翠測試方法》"
            href={
              language === Language.ZH_TW
                ? "http://www.gahk.org/tc/gemtest.asp"
                : "http://www.gahk.org/sc/gemtest.asp"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            《香港標準硬玉質翡翠測試方法》
          </a>
          及
          <a
            aria-label="《香港標準鑽石測試方法》"
            href={
              language === Language.ZH_TW
                ? "http://www.gahk.org/tc/gemtest.asp"
                : "http://www.gahk.org/sc/gemtest.asp"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            《香港標準鑽石測試方法》
          </a>
          進行鑑定。
          <br />
          <br />
          獲香港認可處認可的珠寶測試實驗所的名單，請瀏覽
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
          。（請於「服務」下，選擇測試類別「物理及機械測試」，以搜尋有關實驗所。）
        </>
      ),
    },
  };

  const page_text = getPageText(multilingual);
  const { title } = page_text;
  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={page_text.title as string}
    />
  );

  const content = (
    <>
      <SquareTitle title={page_text.title as string} />

      <div className="my-[24px]">
        <MediaTemplate
          title={page_text.mediaTitle as string}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/JewelleryVideo.png"
          iconPath={"VIDEO.png"}
          mediaLink="https://www.youtube.com/embed/ODofaE4w6Sc"
        />
      </div>
      <div
        className={`grid grid-cols-${
          isPC ? "2" : "1"
        } w-full gap-[24px] mb-[24px]`}
      >
        <FileTemplate
          title={page_text.file_title_1 as string}
          imagePath="assets/tcSector/servicesDifferentBusinessAreas/Testing_FeiCui.png"
          pdfHyperlink="/en/doc/Testing_of_Fei_Cui_and_Diamond_in_Hong_Kong.pdf"
        />
        <FileTemplate
          title={page_text.file_title_2 as string}
          imagePath="assets/tcSector/servicesDifferentBusinessAreas/DiamondPDF.png"
          pdfHyperlink="/en/doc/HKCTC_Diamond_Testing_Services_in_HK.pdf"
        />
      </div>
      <div className="text-heading-l">
        {page_text.testing_fei_cui as React.ReactNode}
      </div>
      <ol className="mt-[24px] text-body-m">
        <li className="mb-[1em]">
          {page_text.Authentication_fei_cui as React.ReactNode}
        </li>
        <li className="mb-[1em]">
          {page_text.internationally_renowned as React.ReactNode}
        </li>
        <li className="mb-[1em]">
          {page_text.hk_Accreditation as React.ReactNode}
        </li>
        <li>{page_text.Accredited_laboratories as React.ReactNode}</li>
      </ol>

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {([page_text.acc_1, page_text.acc_2] as LanguageResources[])?.map(
          (item, index) => (
            <Accordion
              key={index}
              defaultExpanded={false}
              title={(item as LanguageResources)?.title as string}
              details={
                <div className="text-body-m">
                  {item.content as React.ReactNode}
                </div>
              }
            />
          )
        )}
      </div>

      <hr className="my-[24px]" />
      <div className="text-heading-l mb-[24px]">
        {page_text.Laboratories_Accredited as React.ReactNode}
      </div>

      <p className="text-body-m">
        {page_text.hk_accredited_lab as React.ReactNode}
      </p>

      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={"tcSector/servicesDifferentBusinessAreas/Jewellery_banner.png"}
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                title as string,
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
