import * as React from "react";
import { SquareTitle } from "../../../components";
import { Language, LanguageResources, useSettings } from "../../../context";

const multilingual = {
  en: {
    other_support: "Other Support",
    info_on_standards: {
      title: "Information on Standards",
      concent: `You may purchase original standards, guides, publications or handbooks issued by different standard publishers through Innovation and Technology Commission (ITC). For more information on the standard-related services provided by ITC, please visit its`,
      website: "website",
    },
    measurement_traceability: {
      title: "Measurement Traceability",
      para_1: `Traceability means that the result of a measurement can be related to a national or international measurement standard. In addition, the measuring instrument must be calibrated with a measurement standard that is itself traceable. The concept of traceability is important because it makes possible the comparison of the accuracy of measurements worldwide according to a standardised procedure. Metrology is the study of measurement and there are two major fields, viz. physical metrology and chemical metrology.`,
      para_2: `The Standards and Calibration Laboratory (SCL) maintains the reference standards of physical measurement traceable to the International System of Units for Hong Kong, promotes the international acceptance of these standards, and provides traceable calibration services and proficiency testing services to serve the local economy. For more information on the services provided by SCL, please visit its`,
      para_3: `Government Laboratory provides chemical metrology support to the community through providing proficiency testing service, developing standard methods and producing reference material. For more information on the services provided by Government Laboratory, please visit its`,
      website: "website",
    },
    support_and_consultation_centre: {
      title:
        "Support and Consultation Centre for SMEs run by the Trade and Industry Department",
      content: `The Support and Consultation Centre for SMEs (SUCCESS) provides free and practical business information and consultation services for SMEs including business start-ups. For details of the location, information and services provided by SUCCESS, please visit its`,
      website: "website",
    },
    hk_export_credit_insurance_corporation: {
      title: `Hong Kong Export Credit Insurance Corporation`,
      para_1: `The Hong Kong Export Credit Insurance Corporation (ECIC) was created by statute with the aim of encouraging and supporting the export trade by providing Hong Kong exporters with insurance protection against non-payment risks arising from commercial and political events.`,
      para_2: `Its capital is wholly owned by the Government, which also guarantees its contingent liability, with the statutory maximum liability currently standing at HK$55 billion. ECIC has been providing a wide range of insurance facilities for Hong Kong exporters of services:`,
      para_3: `Other benefits of TISP include credit management, receivable management and facilitating trade finance. ECIC's insurance cover can thus enhance the credit management practice and competitiveness of the industry for developing new markets and clients and is vital for the promotion of Hong Kong's testing and certification industry overseas.`,
      for_more_1: `For more details, please refer to its`,
      website: "website",
      for_more_2: `or email to`,
      dot: ".",

      to_meet_the_needs: `To meet the needs of the testing and inspection industry, ECIC offers the `,
      TISP: `tailor-made Testing and Inspection Services Policy (TISP) `,
      to_cover: `to cover credit risks for services provided to overseas clients with credit periods of `,
      up_to: "up to 180 days post-service completion",
      TISP_covers:
        "TISP covers losses from commercial risks (insolvency, payment default) and country risks (currency blockage, payment delays, war, riots, or natural disasters), with ",
      indemnity: "an indemnity ratio of up to 90%.",
    },
  },
  cn: {
    other_support: "其他支援",
    info_on_standards: {
      title: "標準資料",
      concent: `你可透過創新科技署購買不同出版機構的標準、指引、刊物或手冊。如欲得知更多有關創新科技署所提供與標準相關的服務，請瀏覽`,
      website: "網頁",
    },
    measurement_traceability: {
      title: "測量可溯源性",
      para_1: `可溯源性指測量的結果可以與國家或國際的測量標準相關聯。此外，測量儀器必須以測量標準校正，而這個標準本身亦是可溯源的。可溯源性的概念十分重要，因爲它能讓大家根據標準程序，比較在世界各地進行的測量的準確性。計量是測量的科技，包括兩個主要範疇，即物理計量和化學計量。`,
      para_2: `標準及校正實驗所負責為香港保存可溯源至國際單位制的物理測量參考標準，推動國際接納這些標準，並為本地企業提供可溯源的校正服務及能力驗證服務。如欲得知更多有關標準及校正實驗所所提供的服務，請瀏覽`,
      para_3: `政府化驗所提供能力驗證計劃、制定標準方法及生產標準物質，為社會提供化學計量的支援。如欲得知更多有關政府化驗所所提供的服務，請瀏覽`,
      website: "網頁",
    },
    support_and_consultation_centre: {
      title: "由工業貿易署營辦的中小企業支援與諮詢中心",
      content: `中小企業支援與諮詢中心專為中小企業(包括創業人士)免費提供實用的營商資訊和諮詢服務。有關該中心地址、提供的資訊及服務詳情，請瀏覽`,
      website: "網頁",
    },
    hk_export_credit_insurance_corporation: {
      title: `香港出口信用保險局`,
      para_1: `香港出口信用保險局透過提供出口信用保險服務，保障出口商因商業或政治事故，未能收回款項的風險，從而鼓勵及支持香港出口貿易。香港出口信用保險局由政府全資擁有，獲特區政府保證承擔全部債項。現時的法定最高負責額為550億港元。`,
      para_2: `香港出口信用保險局由政府全資擁有，獲特區政府保證承擔全部債項。現時的法定最高負責額為550億港元。香港出口信用保險局為香港服務出口商提供一系列出口信用保險服務:`,
      para_3: `測試及檢定服務保單」的其他優點包括信貸管理、應收帳管理及促進貿易融資。香港出口信用保險局的保險保障協助業界實踐信貸管理，提升業界拓展新市場及客戶的競爭力，並有助向海外推廣香港的測試及檢定服務業。`,
      for_more_1: `如欲了解詳情，請瀏覽或電郵至`,
      website: "香港出口信用保險局網頁",
      for_more_2: `或電郵至`,
      dot: "。",
      to_meet_the_needs: `為了配合測試及檢定服務業的個別需要，香港出口信用保險局為業界度身訂造了`,
      TISP: `「測試及檢定服務保單」`,
      to_cover: "，保障業界向海外客戶提供服務時所面對的放帳風險，放帳期不超過",
      up_to: `提供服務後的一百八十天均可受保`,
      TISP_covers:
        "「測試及檢定服務保單」承保商業風險（無力償還欠款及客戶拖欠服務費用）以及國家風險（外匯禁制或阻延、延遲償還外債、戰爭、革命、暴動或天災），",
      indemnity: "賠償率高達百分之九十。",
    },
  },
};

export const OtherSupport: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    other_support,
    info_on_standards,
    measurement_traceability,
    support_and_consultation_centre,
    hk_export_credit_insurance_corporation,
  } = page_text;

  return (
    <div className="w-full pb-[48px]">
      <SquareTitle title={other_support as string} />
      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {(info_on_standards as LanguageResources).title as string}
      </p>
      <p className="text-body-m text-justify">
        {(info_on_standards as LanguageResources).concent as string}&nbsp;
        <a
          aria-label={
            (info_on_standards as LanguageResources).website as string
          }
          href="https://www.itc.gov.hk/en/quality/qsdiv/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          {(info_on_standards as LanguageResources).website as string}
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l">
        {(measurement_traceability as LanguageResources).title as string}
      </div>
      <p className="mt-[24px] text-body-m text-justify">
        {(measurement_traceability as LanguageResources).para_1 as string}
      </p>
      <br />
      <p className="text-body-m text-justify">
        {(measurement_traceability as LanguageResources).para_2 as string}&nbsp;
        <a
          aria-label={
            (measurement_traceability as LanguageResources).website as string
          }
          href="https://www.itc.gov.hk/en/quality/scl/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          {(measurement_traceability as LanguageResources).website as string}
        </a>
        .
      </p>
      <br />
      <p className="text-body-m text-justify">
        {(measurement_traceability as LanguageResources).para_3 as string}&nbsp;
        <a
          aria-label={
            (measurement_traceability as LanguageResources).website as string
          }
          href="https://www.govtlab.gov.hk/en/home/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          {(measurement_traceability as LanguageResources).website as string}
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]" role="heading" aria-level={10}>
        {
          (support_and_consultation_centre as LanguageResources)
            .title as React.ReactNode
        }
      </p>

      <p className="text-body-m text-justify">
        {
          (support_and_consultation_centre as LanguageResources)
            .content as React.ReactNode
        }
        &nbsp;
        <a
          aria-label={
            (support_and_consultation_centre as LanguageResources)
              .website as string
          }
          href="https://www.success.tid.gov.hk/english/whatsnew/whatsnew.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          {
            (support_and_consultation_centre as LanguageResources)
              .website as React.ReactNode
          }
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l">
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .title as React.ReactNode
        }
      </div>
      <div className="text-body-m mt-[24px] text-justify">
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .para_1 as React.ReactNode
        }
      </div>
      <br />
      <p className="text-body-m mb-[24px] text-justify">
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .para_2 as React.ReactNode
        }
      </p>

      <div className="border-2 border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <svg
            aria-label="icon"
            tabIndex={0}
            role="none"
            xmlns="https://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="w-[32px] h-[32px] flex-shrink-0"
          >
            <path
              d="M12.0814 15.8175H13.7412V23.7819H11.8059V17.4688H11.7812L10.1461 18.1954L9.81765 16.7944L12.0849 15.814L12.0814 15.8175ZM16.563 22.659L17.6684 21.7273C19.5367 20.1734 20.4478 19.28 20.4725 18.3483C20.4725 17.6948 20.0523 17.1803 19.0634 17.1803C18.3288 17.1803 17.6826 17.5209 17.2341 17.8408L16.669 16.5093C17.3152 16.0574 18.3147 15.6889 19.4766 15.6889C21.4119 15.6889 22.4785 16.7422 22.4785 18.1884C22.4785 19.5199 21.4367 20.5871 20.2006 21.6196L19.4095 22.2314V22.2523H22.6374V23.7854H16.5665V22.659H16.563ZM5.31836 25.819H26.7023V12.4941H5.31836V25.819Z"
              fill="#233F55"
            />
            <path
              d="M23.5347 7.17878C24.1951 7.17878 24.732 6.60518 24.732 5.89948V4.46722H22.334V5.89948C22.334 6.60866 22.8708 7.17878 23.5312 7.17878H23.5347Z"
              fill="#233F55"
            />
            <path
              d="M8.48242 7.17878C9.14284 7.17878 9.67961 6.60518 9.67961 5.89948V4.46722H7.28516V5.89948C7.28516 6.60866 7.82201 7.17878 8.48242 7.17878Z"
              fill="#233F55"
            />
            <path
              d="M28.0481 26.4865C28.0481 26.855 27.748 27.147 27.3772 27.147H4.64405C4.27323 27.147 3.96954 26.855 3.96954 26.4865V11.8336C3.96954 11.4651 4.2697 11.1731 4.64405 11.1731H27.3772C27.748 11.1731 28.0481 11.4651 28.0481 11.8336V26.4865ZM5.94022 4.46714H7.2857V2.60728C7.2857 1.90158 7.82255 1.32798 8.48297 1.32798C9.14338 1.32798 9.68015 1.90158 9.68015 2.60728V4.46714H11.0257V5.8994C11.0257 7.33862 9.88502 8.50668 8.47943 8.50668C7.07385 8.50668 5.93315 7.33862 5.93315 5.8994V4.46714H5.94022ZM20.9884 4.46714H22.3375V2.60728C22.3375 1.90158 22.8743 1.32798 23.5347 1.32798C24.1951 1.32798 24.732 1.90158 24.732 2.60728V4.46714H26.081V5.8994C26.081 7.33862 24.9368 8.50668 23.5347 8.50668C22.1327 8.50668 20.9884 7.33862 20.9884 5.8994V4.46714ZM28.0164 4.30722H26.0775V2.60728C26.0775 1.17501 24.9332 0 23.5312 0C22.1291 0 20.9849 1.17501 20.9849 2.60728V4.30722H11.0257V2.60728C11.0257 1.17501 9.88502 0 8.47943 0C7.07385 0 5.93315 1.17501 5.93315 2.60728V4.30722H3.99075C1.79055 4.30722 0 5.97241 0 8.02694V28.2803C0 30.3348 1.79055 32 3.99075 32H28.0093C30.2095 32 32 30.3313 32 28.2803V8.02694C32 5.97241 30.2095 4.30722 28.0093 4.30722H28.0164Z"
              fill="#233F55"
            />
          </svg>
          <p className="text-highlight-m flex-grow min-w-0 text-justify">
            {
              (hk_export_credit_insurance_corporation as LanguageResources)
                .to_meet_the_needs as React.ReactNode
            }
            &nbsp;
            <a
              aria-label={
                (hk_export_credit_insurance_corporation as LanguageResources)
                  .TISP as string
              }
              href="https://www.hkecic.com/en/testing_and_inspection_services_policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              {
                (hk_export_credit_insurance_corporation as LanguageResources)
                  .TISP as React.ReactNode
              }
            </a>
            {
              (hk_export_credit_insurance_corporation as LanguageResources)
                .to_cover as React.ReactNode
            }
            <span className="text-newPrimary">
              {
                (hk_export_credit_insurance_corporation as LanguageResources)
                  .up_to as React.ReactNode
              }
            </span>
            {
              (hk_export_credit_insurance_corporation as LanguageResources)
                .dot as React.ReactNode
            }
          </p>
        </div>
      </div>

      <div className="border-2 border-[#E0E0E0] py-[24px] px-[36px] mt-[24px]">
        <div className="flex flex-row gap-[24px] items-center w-full text-justify">
          <svg
            aria-label="icon"
            tabIndex={0}
            role="none"
            className="w-[32px] h-[32px] flex-shrink-0"
            xmlns="https://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M14.7672 9.92338C12.7916 10.2623 11.6978 11.3341 11.6978 11.9485C11.6978 12.5629 12.7916 13.6347 14.7672 13.9709L15.0867 14.0287V9.87104L14.7672 9.92338ZM16.941 22.9806L17.2606 22.9283C19.2362 22.5894 20.33 21.5176 20.33 20.9059C20.33 20.2942 19.2362 19.2197 17.2606 18.8835L16.941 18.8312V22.9834V22.9806ZM15.084 29.1083V27.6976L14.836 27.6728C10.3532 27.2485 7.08541 24.4712 7 21.0409H11.7115C11.8548 21.6636 12.9266 22.6169 14.7644 22.9283L15.084 22.9806V18.743L14.836 18.721C10.2954 18.2884 7 15.4394 7 11.9485C7 8.45757 10.2954 5.60863 14.836 5.17881L15.084 5.15676V3.74606H16.941V5.15676L17.189 5.17881C21.6635 5.60312 24.9396 8.38594 25.025 11.8163H20.3135C20.1702 11.1881 19.0984 10.243 17.2606 9.92614L16.941 9.87379V14.1169L17.189 14.1389C21.7297 14.566 25.0278 17.415 25.0278 20.9087C25.0278 24.4023 21.7324 27.2485 17.189 27.6784L16.941 27.7032V29.1139H15.084V29.1083Z"
              fill="#233F55"
            />
          </svg>
          <p className="text-highlight-m flex-grow min-w-0">
            {
              (hk_export_credit_insurance_corporation as LanguageResources)
                .TISP_covers as React.ReactNode
            }
            &nbsp;
            <span className="text-newPrimary">
              {
                (hk_export_credit_insurance_corporation as LanguageResources)
                  .indemnity as React.ReactNode
              }
            </span>
            .
          </p>
        </div>
      </div>
      <p className="text-body-m my-[24px] text-justify">
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .para_3 as React.ReactNode
        }
      </p>
      <p className="text-body-m text-justify">
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .for_more_1 as React.ReactNode
        }
        &nbsp;
        <a
          aria-label={
            (hk_export_credit_insurance_corporation as LanguageResources)
              .website as string
          }
          href="https://www.hkecic.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          {
            (hk_export_credit_insurance_corporation as LanguageResources)
              .website as React.ReactNode
          }
        </a>
        &nbsp;
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .for_more_2 as React.ReactNode
        }
        &nbsp;
        <a
          aria-label="mail to info@hkecic.com"
          href="mailto:info@hkecic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E] underline"
        >
          info@hkecic.com
        </a>
        {
          (hk_export_credit_insurance_corporation as LanguageResources)
            .dot as React.ReactNode
        }
      </p>
    </div>
  );
};
