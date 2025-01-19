import React from "react";

import { FileTemplate, SquareTitle } from "../../../components";
import { accreditationService } from "../../ServiceUsers";

export const AccreditationServices: React.FC = () => {
  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
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
        <p className="text-heading-l">Accreditation in Hong Kong</p>
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
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <FileTemplate
                  title={title}
                  imagePath={imagePath}
                  titleHyperlink={link}
                />
              </div>
            );
          })}
        </div>
        <p className="text-italic-s italic mt-[24px]">
          For details, please visit&nbsp;
          <a
            href="https://www.itc.gov.hk/en/quality/hkas/about.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            HKAS's website
          </a>
          .
        </p>
        <hr className="my-[24px] text-[#E0E0E0]" />

        <p className="text-heading-l">Accredited Establishments</p>
        <p className="text-body-m my-[24px]">
          Accredited laboratories, inspection bodies and certification bodies
          need to undergo rigorous on-site assessments before they are
          recognised to be competent in performing the conformity assessment
          activities listed in their respective scopes of accreditation. Users
          of conformity assessment services may identify and select the services
          provided by accredited bodies to support their business.
        </p>
        <FileTemplate
          title={"Directory of Accredited Organisations (Full List)"}
          imagePath={"assets/serviceUsers/Full_List.png"}
        />
        <p className="text-italic-s mt-[24px] italic">
          *This full list is for the purpose of searching specific conformity
          assessment activity and will only be updated weekly. For most
          up-to-date scope of accreditation, please search by "Organisations",
          "Registration No." or "Services"
        </p>
      </div>
    </div>
  );
};
