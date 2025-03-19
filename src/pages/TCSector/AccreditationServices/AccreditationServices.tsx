import React from "react";
import { MediaTemplateWithDialog, SquareTitle } from "../../../components";
import { accreditationService } from "../../ServiceUsers";
import { MEDIA_TYPE } from "../../../const";
import { Language, useSettings } from "../../../context";
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
    this_full_list:
      "*This full list is for the purpose of searching specific conformity assessment activity and will only be updated weekly. For most up-to-date scope of accreditation, please visit",
    HKAS: `HKAS's website`,
  },
  cn: {
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
    this_full_list:
      "*This full list is for the purpose of searching specific conformity assessment activity and will only be updated weekly. For most up-to-date scope of accreditation, please visit",
    HKAS: `HKAS's website`,
  },
};
export const AccreditationServices: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    accreditation_services,
    whats_accreditation,
    accreditation_def,
    accreditation_is_open,
    this_full_list,
    HKAS,
  } = page_text;
  return (
    <div className="w-full">
      <div className="flex-1">
        <SquareTitle title={accreditation_services} />
        <div className="bg-[#EEEEEA] my-[24px] py-[36px] px-[42px]">
          <p className="text-heading-m">{whats_accreditation}</p>
          <p className="text-body-m mt-[16px]">
            {accreditation_def.accreditation_is}&nbsp;
            <span className="text-highlight-m text-newPrimary">
              {accreditation_def.third_party}
            </span>
            &nbsp;{accreditation_def.related_to}
          </p>
        </div>
        <p className="text-body-m mt-[24px]">{accreditation_is_open}</p>

        <div className="w-full">
          {accreditationService.map((item, index) => {
            const { title, imagePath, link } = item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px] items-center"
              >
                <MediaTemplateWithDialog
                  title={title}
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

        <p className="text-italic-s mt-[24px]">
          {this_full_list}&nbsp;
          <a
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            {HKAS}
          </a>
          .
        </p>
      </div>
    </div>
  );
};
