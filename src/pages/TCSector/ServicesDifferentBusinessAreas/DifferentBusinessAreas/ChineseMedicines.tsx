import React, { useState } from "react";
import {
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  activatedButtonStyle,
  normalButtonStyle,
  fullContainer,
  maxPCContainer,
  maxMobileContainer,
  MediaTemplateWithDialog,
} from "../../../../components";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";
import { t2s } from "chinese-s2t";

export const ChineseMedicines: React.FC = () => {
  const { isPC, language, getPageText, getSingleNode } = useSettings();

  const multilingual = {
    en: {
      title: "Chinese Medicines",
      mediaTitle: "Hong Kong's Testing Services for Chinese Medicines",
      buttonArray: ["Proprietary Chinese medicines", "Chinese Materia Medica"],
      fileTitle: "Chinese Medicines Testing",
      Benefits_Chinese_Medicines:
        "Benefits of Chinese Medicines Testing & Certification",
      hk_international_trade: `Hong Kong is an international trading hub of Chinese medicines. Chinese
          herbal medicines and proprietary Chinese medicines (pCm) sold in Hong
          Kong are generally with good quality. To ensure that products are
          genuine, not misprocessed (such as bleached), and are free from
          adulteration and contamination, testing and certification is
          indispensable. Hong Kong has an efficient and competent testing and
          certification industry to provide the relevant support.`,
      tc_chinese_medicine:
        "Testing and certification of Chinese medicines can bring about many benefits to:",
      user: (
        <ol>
          <li className="mb-[1em]">
            <span className="text-highlight-m">Users:</span>
            &nbsp;It can help users to identify genuine products, reduces the
            chance of buying fake, misprocessed (such as bleached), adulterated
            or contaminated products.
          </li>
          <li className="mb-[1em]">
            <span className="text-highlight-m">Manufacturers and Traders:</span>
            &nbsp;It can help enhance customer confidence and satisfaction,
            increase sales, and reduce the risk of costly recalls and lawsuits.
          </li>
          <li className="mb-[1em]">
            <span className="text-highlight-m">
              Chinese Medicine Practitioners:
            </span>
            &nbsp;It can ensure that prescriptions are filled with genuine and
            quality medicinal herbs.
          </li>
          <li>
            <span className="text-highlight-m">Hong Kong:</span>
            &nbsp;It can promote the further development of the testing and
            certification industry and reinforce the position and strategic
            advantage of Hong Kong as a testing and certification hub of Chinese
            medicines. This in turn will sustain the economic growth of Hong
            Kong in the long run.
          </li>
        </ol>
      ),
      Laboratories_Accredited: `Laboratories Accredited by HKAS Providing Testing Services on Chinese
          Medicines`,
      HKAS_website: (
        <p className="text-body-m py-[24px] text-justify">
          The laboratories providing accredited testing services on Chinese
          Medicines are available at&nbsp;
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
        </p>
      ),
    },
    cn: {
      title: "中藥",
      mediaTitle: "香港的中藥測試服務",
      buttonArray: ["中成藥", "中藥材"],
      fileTitle: "中藥測試",
      Benefits_Chinese_Medicines: "中藥測試的好處",
      hk_international_trade: `香港是一個主要的中藥國際貿易中心。在香港銷售的中藥材一般都具良好的質量。為確保產品的真偽、沒有處理不當（例如漂染）以及沒有摻雜其他成份和受污染，檢測和認證是一個重要的方法，而香港則擁有具備效率和能力的檢測和認證業，以提供相關支援。`,
      tc_chinese_medicine: "中藥測試和認證可帶來很多好處 :",
      user: (
        <ol>
          <li className="mb-[1em]">
            <span className="text-highlight-m">對中藥使用者-</span>
            可讓他們辨別產品的真偽，減低他們購入一些造假、處理不當（例如漂染）、摻雜其他成份和受污染等產品的機會。
          </li>
          <li className="mb-[1em]">
            <span className="text-highlight-m">對中藥生產商及貿易商-</span>
            有助加強顧客的信心及滿意程度，增加產品的銷量，及減低產品因不達有關中藥規管的法例要求而須回收及招致訴訟。
          </li>
          <li className="mb-[1em]">
            <span className="text-highlight-m">對中醫師-</span>
            可確保他們使用的中藥是真的及具質量保證。
          </li>
          <li className="mb-[1em]">
            <span className="text-highlight-m">對香港-</span>
            可促進檢測和認證業進一步的發展，以及鞏固香港作為一個中藥檢測和認證中心的地位。長遠而言，有助保持香港經濟的發展。
          </li>
        </ol>
      ),
      Laboratories_Accredited: `獲香港認可處認可的中藥測試實驗所`,
      HKAS_website: (
        <p className="text-body-m py-[24px] text-justify">
          為公眾提供一項或多項獲認可的中藥測試服務詳情請瀏覽
          <a
            aria-label="瀏覽香港認可處網頁"
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
        </p>
      ),
    },
  };

  const page_text = getPageText(multilingual);
  const isSimpleCN = language === Language.ZH_CN;
  const businessAreaTitle = page_text.title;
  const [activeButton, setActiveButton] = useState<number>(0);

  const servicesForChineseMedicine_en: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Proprietary Chinese Medicines Testing",
      content: (
        <p>
          Under the Chinese Medicine Ordinance (Chapter 549 of the Laws of Hong
          Kong), testing for heavy metals, toxic elements, pesticide residues
          and microbial limits has been required for the registration of
          proprietary Chinese Medicines (pCm) since 2003 to ensure that they can
          meet the safety requirements. For more details, please visit the&nbsp;
          <a
            aria-label="website of the Chinese Medicine Council of Hong Kong"
            href="https://www.cmchk.org.hk/index_en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            website of the Chinese Medicine Council of Hong Kong
          </a>
          .
        </p>
      ),
    },
    {
      title: "Chinese Materia Medica Testing",
      content: (
        <p>
          Many types of Chinese medicines can now be tested against the&nbsp;
          <a
            aria-label="Hong Kong Chinese Materia Medica Standards (HKCMMS)"
            href="https://www.cmd.gov.hk/html/eng/GCMTI/hkcmms/volumes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Hong Kong Chinese Materia Medica Standards (HKCMMS)
          </a>
          &nbsp;or the Pharmacopeia of the People's Republic of China. The
          HKCMMS is of great importance because it can provide relevant
          standards for safety and quality testing of Chinese materia medica. As
          Chinese materia medica are raw materials for pCm, the testing could
          help to ensure the quality of pCm concerned.
        </p>
      ),
    },

    {
      title:
        "Chinese Medicines Testing Services Provided by Laboratories in Hong Kong",
      content: (
        <div>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {(page_text.buttonArray as string[]).map((btn, index) => {
              const isActivated = index === activeButton;
              return (
                <button
                  key={index}
                  tabIndex={0}
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
          {activeButton === 0 ? (
            <>
              <p className="text-highlight-m">Safety testing:</p>
              <br />
              <p className="text-body-m">
                1. Heavy metals and toxic elements
                <br />
                <br />
                2. Pesticide residues
                <br />
                <br />
                3. Microbiological examinations
              </p>
              <br />
              <p className="text-highlight-m">Quality and other testing:</p>
              <br />
              <p className="text-body-m">
                1. Analysis to product specifications
                <br />
                <br />
                2. Stability
                <br />
                <br />
                3. Other tests according to the Pharmacopeia of People's
                Republic of China, e.g. water, weight variation, filling
                variation and disintegration
              </p>
            </>
          ) : (
            <>
              <p className="text-highlight-m">Authentication:</p>
              <br />
              <p className="text-body-m">
                1. Authentication by visual examination, microscopic
                identification and chromatographic fingerprinting
              </p>
              <br />
              <p className="text-highlight-m">Safety testing:</p>
              <br />
              <p className="text-body-m">
                1. Heavy metals and toxic elements
                <br />
                <br />
                2. Pesticide residues
                <br />
                <br />
                3. Aflatoxins
              </p>
              <br />
              <p className="text-highlight-m">Quality and other testing:</p>
              <br />
              <p className="text-body-m">
                1. Testing according to the&nbsp;
                <a
                  aria-label="Hong Kong Chinese Materia Medica Standards(HKCMMS)"
                  href="https://www.cmro.gov.hk/html/eng/useful_information/hkcmms/volumes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  Hong Kong Chinese Materia Medica Standards(HKCMMS)
                </a>
                &nbsp;or the Pharmacopeia of People's Republic of China for
                quality, e.g. assay, ash, water content and extractives
              </p>
            </>
          )}
        </div>
      ),
    },
  ];

  const servicesForChineseMedicine_cn: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "中藥材測試",
      content: (
        <p>
          根據《中醫藥條例》（香港法例第549章），自2003年起中成藥在註冊時須進行重金屬及有毒元素含量、農藥殘留量及微生物限度等安全性測試，以證明符合有關的安全要求。詳情請瀏覽
          <a
            aria-label="香港中醫藥管理委員會網頁"
            href={
              language === Language.ZH_TW
                ? "http://www.cmchk.org.hk/"
                : "https://www.cmchk.org.hk/index_sc.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            香港中醫藥管理委員會網頁
          </a>
          。
        </p>
      ),
    },
    {
      title: "中藥材測試",
      content: (
        <p>
          現時，很多中藥材可按
          <a
            aria-label="《香港中藥材標準》"
            href={
              language === Language.ZH_TW
                ? "http://www.cmd.gov.hk/html/b5/GCMTI/hkcmms/volumes.html"
                : "http://www.cmd.gov.hk/html/gb/GCMTI/hkcmms/volumes.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            《香港中藥材標準》
          </a>
          或《中國藥典》等標準進行測試。
          <a
            aria-label="《香港中藥材標準》"
            href={
              language === Language.ZH_TW
                ? "http://www.cmd.gov.hk/html/b5/GCMTI/hkcmms/volumes.html"
                : "http://www.cmd.gov.hk/html/gb/GCMTI/hkcmms/volumes.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            《香港中藥材標準》
          </a>
          為相關中藥材在安全及品質測試方面，提供了一套標準，對中藥測試非常重要。由於中藥材是中成藥的原材料，測試有助確保相關中成藥的質量。
        </p>
      ),
    },

    {
      title: "香港實驗所提供的中藥測試",
      content: (
        <div>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {(page_text.buttonArray as string[]).map((btn, index) => {
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
          {activeButton === 0 ? (
            <>
              <p className="text-highlight-m">安全測試</p>
              <br />
              <p className="text-body-m">
                1. 重金屬及有毒元素
                <br />
                <br />
                2. 農藥殘留
                <br />
                <br />
                3. 微生物檢查
              </p>
              <br />
              <p className="text-highlight-m">品質及其他測試</p>
              <br />
              <p className="text-body-m">
                1. 品質標準化驗
                <br />
                <br />
                2. 穩定性試驗
                <br />
                <br />
                3. 按《中國藥典》進行的其他測試，如 :
                水份、重量差異、裝量差異及崩解時限
              </p>
            </>
          ) : (
            <>
              <p className="text-highlight-m">真偽測試</p>
              <br />
              <p className="text-body-m">
                1. 透過外觀、顯微鑒別及指紋圖譜以判斷真偽
              </p>
              <br />
              <p className="text-highlight-m">安全測試</p>
              <br />
              <p className="text-body-m">
                1. 重金屬及有毒元素
                <br />
                <br />
                2. 農藥殘留
                <br />
                <br />
                3. 黃曲霉毒素
              </p>
              <br />
              <p className="text-highlight-m">品質及其他測試</p>
              <br />
              <p className="text-body-m">
                1. 按
                <a
                  aria-label="《香港中藥材標準》"
                  href={
                    language === Language.ZH_TW
                      ? "http://www.cmd.gov.hk/html/b5/GCMTI/hkcmms/volumes.html"
                      : "http://www.cmd.gov.hk/html/gb/GCMTI/hkcmms/volumes.html"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  《香港中藥材標準》
                </a>
                或《中國藥典》進行的品質測試，如 : 含量測定、灰分、水份及浸出物
              </p>
            </>
          )}
        </div>
      ),
    },
  ];

  const servicesForChineseMedicine =
    language === Language.EN
      ? servicesForChineseMedicine_en
      : servicesForChineseMedicine_cn;

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle as string}
    />
  );

  const youtubeTemplateLink: Record<Language, string> = {
    [Language.EN]: "https://www.youtube.com/embed/WRYVmv0SzrQ",
    [Language.ZH_TW]: "https://www.youtube.com/embed/Qwe6CfNIsHM",
    [Language.ZH_CN]: "https://www.youtube.com/embed/Qwe6CfNIsHM",
  };

  const content = (
    <>
      <SquareTitle title={businessAreaTitle as string} />

      <div className="my-[24px]">
        <MediaTemplate
          title={page_text.mediaTitle as string}
          iconPath={"VIDEO.png"}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ChineseMedicinesVideo.png"
          mediaLink={youtubeTemplateLink[language]}
        />
      </div>
      <div className="w-full flex flex-row gap-[24px]">
        <MediaTemplateWithDialog
          title={page_text.fileTitle as string}
          mediaLink={"/en/doc/Chinese_Medicines_Pamphlet_2018.pdf"}
          mediaDomain={"hkctc"}
          direction={"row"}
          date=""
          mediaType={MEDIA_TYPE.PDF}
        />
      </div>

      <div className="text-heading-l my-[24px]">
        {page_text.Benefits_Chinese_Medicines as React.ReactNode}
      </div>

      <div className="text-body-m text-justify">
        {page_text.hk_international_trade as React.ReactNode}
        <br />
        <br />
        {page_text.tc_chinese_medicine as React.ReactNode}
        <br />
        <br />
        {page_text.user as React.ReactNode}
      </div>

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {servicesForChineseMedicine.map((item, index) => (
          <Accordion
            key={index}
            title={isSimpleCN ? t2s(item.title) : item.title}
            defaultExpanded={false}
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
      <div className="text-heading-l">
        {page_text.Laboratories_Accredited as React.ReactNode}
      </div>
      {page_text.HKAS_website}
      <hr className="mb-[24px]" />

      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/chinese_medicines_banner.png"
        }
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                businessAreaTitle as string,
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
