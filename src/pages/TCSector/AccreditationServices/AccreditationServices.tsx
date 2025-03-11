import React from "react";

import {
  FileTemplate,
  MediaTemplateWithDialog,
  SquareTitle,
} from "../../../components";
import { accreditationService } from "../../ServiceUsers";
import { MEDIA_TYPE } from "../../../const";

export const AccreditationServices: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex-1">
        <SquareTitle title={"Accreditation Services"} />
        <div className="bg-[#EEEEEA] my-[24px] py-[36px] px-[42px]">
          <p className="text-heading-m">What is Accreditation?</p>
          <p className="text-body-m mt-[16px]">
            Accreditation is the&nbsp;
            <span className="text-highlight-m text-newPrimary">
              third-party attestation
            </span>
            &nbsp;related to a conformity assessment body conveying formal
            demonstration of its competence to carry out specific conformity
            assessment tasks. Laboratories, inspection bodies and certification
            bodies are common types of conformity assessment bodies.
          </p>
        </div>
        <p className="text-body-m mt-[24px]">
          Accreditation is open and voluntary in Hong Kong. It is currently
          provided by Hong Kong Accreditation Service (HKAS) under Innovation
          and Technology Commission in Hong Kong. HKAS operates three
          accreditation schemes:
        </p>

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
          *This full list is for the purpose of searching specific conformity
          assessment activity and will only be updated weekly. For most
          up-to-date scope of accreditation, please visit&nbsp;
          <a
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            HKAS's website
          </a>
          .
        </p>
      </div>
    </div>
  );
};
