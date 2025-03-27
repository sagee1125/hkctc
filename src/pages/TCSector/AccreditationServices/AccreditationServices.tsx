import React from "react";
import { MediaTemplateWithDialog, SquareTitle } from "../../../components";
import { accreditationService } from "../../ServiceUsers";
import { MEDIA_TYPE } from "../../../const";
import { Language, LanguageResources, useSettings } from "../../../context";
const multilingual = {
  en: {
    accreditation_services: "Accreditation Services",
    whats_accreditation: "What is Accreditation?",
    accreditation_def: {
      accreditation_is: "Accreditation is the",
      third_party: "third-party attestation",
      related_to:
        "related to a conformity assessment body conveying formal demonstration of its competence to carry out specific conformity assessment tasks. Laboratories, inspection bodies and certification bodies are common types of conformity assessment bodies.",
    },
    accreditation_is_open:
      "Accreditation is open and voluntary in Hong Kong. It is currently provided by Hong Kong Accreditation Service (HKAS) under Innovation and Technology Commission in Hong Kong. HKAS operates three accreditation schemes:",
    this_full_list: (
      <>
        *This full list is for the purpose of searching specific conformity
        assessment activity and will only be updated weekly. For most up-to-date
        scope of accreditation, please visit
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
    accreditation_services: "認可服務",
    whats_accreditation: "何謂認可？",
    accreditation_def: {
      accreditation_is: "認可是由",
      third_party: "第三方",
      related_to:
        "發出證明，承認一間合格評定機構勝任進行特定的合格評定工作。實驗所、檢驗機構和認證機構均為常見的合格評定機構。",
    },
    accreditation_is_open:
      "在香港，申請認可資格是公開和自願性質的，目前由創新科技署轄下的香港認可處提供認可資格。該處負責推行三個認可計劃，包括：",
    this_full_list: (
      <>
        此完整清單僅用於搜尋特定的合格評定活動，並且每週更新一次。如欲了解最新的認可範圍，請造訪
        <a
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港認可處網站
        </a>
        。
      </>
    ),
    HKAS: `香港認可處網頁`,
  },
};
export const AccreditationServices: React.FC = () => {
  const { getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    accreditation_services,
    whats_accreditation,
    accreditation_def,
    accreditation_is_open,
    this_full_list,
  } = page_text;
  return (
    <div className="w-full">
      <div className="flex-1">
        <SquareTitle title={accreditation_services as string} />
        <div className="bg-[#EEEEEA] my-[24px] py-[36px] px-[42px]">
          <p className="text-heading-m">{whats_accreditation as string}</p>
          <p className="text-body-m mt-[16px] text-justify">
            {
              (accreditation_def as LanguageResources)
                ?.accreditation_is as string
            }
            &nbsp;
            <span className="text-highlight-m text-newPrimary">
              {(accreditation_def as LanguageResources)?.third_party as string}
            </span>
            &nbsp;
            {(accreditation_def as LanguageResources)?.related_to as string}
          </p>
        </div>
        <p className="text-body-m mt-[24px] text-justify">
          {accreditation_is_open as string}
        </p>

        <div className="w-full">
          {accreditationService.map((item, index) => {
            const { title, titleCN, imagePath, link } = item;
            const displayTitle = getSingleText(title, titleCN);
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px] items-center"
              >
                <MediaTemplateWithDialog
                  title={displayTitle}
                  imagePath={imagePath}
                  mediaLink={link}
                  direction="row"
                  date={""}
                  mediaType={MEDIA_TYPE.NEW_PAGE}
                />
              </div>
            );
          })}
        </div>

        <p className="text-italic-s mt-[24px] text-justify">
          {this_full_list as React.ReactNode}
        </p>
      </div>
    </div>
  );
};
