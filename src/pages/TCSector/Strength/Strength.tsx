import React, { useState } from "react";
import { TC_SECTOR_STRENGTH_TEXT } from "../lang";
import { SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";

const pageText = TC_SECTOR_STRENGTH_TEXT.EN;
export const Strength: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const strengthContent = [
    {
      title: pageText.FROM_MACRO_ANGLE.TITLE,
      contents: [
        {
          label: pageText.FROM_MACRO_ANGLE.PROXIMITY_TITLE,
          value: [pageText.FROM_MACRO_ANGLE.PROXIMITY_CONTENT],
        },
        {
          label: pageText.FROM_MACRO_ANGLE.HIGH_INTEGRITY_TITLE,
          value: [
            pageText.FROM_MACRO_ANGLE.HIGH_INTEGRITY_CONTENT_1,
            pageText.FROM_MACRO_ANGLE.HIGH_INTEGRITY_CONTENT_2,
          ],
        },
        {
          label: pageText.FROM_MACRO_ANGLE.GOOD_LOGISTICS_TITLE,
          value: [
            pageText.FROM_MACRO_ANGLE.GOOD_LOGISTICS_CONTENT_1,
            pageText.FROM_MACRO_ANGLE.GOOD_LOGISTICS_CONTENT_2,
          ],
        },
        {
          label: pageText.FROM_MACRO_ANGLE.COMPETITIVE_EDGE,
          value: [pageText.FROM_MACRO_ANGLE.COMPETITIVE_EDGE_CONTENT],
        },
        {
          label: pageText.FROM_MACRO_ANGLE.WELL_EDUCATION_TITLE,
          value: [pageText.FROM_MACRO_ANGLE.WELL_EDUCATION_CONTENT],
        },
      ],
    },
    {
      title: pageText.ROBUST.TITLE,
      contents: [
        {
          label: pageText.ROBUST.ACCREDITATION_TITLE,
          value: [pageText.ROBUST.ACCREDITATION_CONTENT],
        },
        {
          label: pageText.ROBUST.INDEPENDENT_SYSTEM_TITLE,
          value: [pageText.ROBUST.INDEPENDENT_SYSTEM_CONTENT],
        },
        {
          label: pageText.ROBUST.SYSTEM_INTERNATIONAL_TITLE,
          value: [pageText.ROBUST.SYSTEM_INTERNATIONAL_CONTENT],
        },
        {
          label: pageText.ROBUST.QUICK_RESPONSE_TITLE,
          value: [pageText.ROBUST.QUICK_RESPONSE_CONTENT],
        },
      ],
    },
    {
      title: pageText.LOCAL_TESTING.TITLE,
      contents: [
        {
          label: pageText.LOCAL_TESTING.CORPORATE_TITLE,
          value: [pageText.LOCAL_TESTING.CORPORATE_CONTENT],
        },
        {
          label: pageText.LOCAL_TESTING.COMPETENCE_TITLE,
          value: [pageText.LOCAL_TESTING.COMPETENCE_CONTENT],
        },
        {
          label: pageText.LOCAL_TESTING.PERSONALITY_TITLE,
          value: [pageText.LOCAL_TESTING.PERSONALITY_CONTENT],
        },
      ],
    },
  ];
  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title={pageText.TITLE} />
        <div className="bg-[#EEEEEA] my-[24px]">
          <div className="px-[42px] py-[36px]">
            <p className="text-body-m">{pageText.SERVICE_INTRO_1}</p>
            <p className="mt-[16px] text-body-m">{pageText.SERVICE_INTRO_2}</p>
          </div>
        </div>

        {/** title buttons */}
        <div className="flex flex-wrap gap-[8px] mb-[24px]">
          {strengthContent.map((strengthInfo, index) => {
            const isActivated = index === activeTopicButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out whitespace-nowrap bg-newPrimary"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveTopicButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">
                  {strengthInfo.title}
                </p>
              </button>
            );
          })}
        </div>

        {/** contents */}
        <div className="flex flex-col gap-[8px] mb-[48px]">
          {strengthContent[activeTopicButton].contents.map((content, index) => (
            <div key={index}>
              <div className="text-heading-m mb-[24px]">{content.label}</div>
              <div>
                {content.value.map((value, index) => (
                  <div
                    key={index}
                    className="text-body-m mb-[24px]"
                    dangerouslySetInnerHTML={{
                      __html: value,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
