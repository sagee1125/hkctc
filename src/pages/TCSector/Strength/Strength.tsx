import React, { useState } from "react";
import { TC_SECTOR_STRENGTH_TEXT } from "../lang";
import { SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import {
  Language,
  type LanguageResources,
  useSettings,
} from "../../../context";

export const Strength: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const { language, getPageText } = useSettings();
  const pageText = getPageText(TC_SECTOR_STRENGTH_TEXT);

  const systemInternationalMapping: Record<Language, any> = {
    [Language.EN]: (pageText.ROBUST as LanguageResources)
      .SYSTEM_INTERNATIONAL_CONTENT,
    [Language.ZH_TW]: (pageText.ROBUST as LanguageResources)
      .SYSTEM_INTERNATIONAL_CONTENT,
    [Language.ZH_CN]: `香港认可处已与过百个经济体系的认可机构（包括所有香港的主要贸易伙伴）签订互认协议，有关安排大大促进行业内获认可机构的检测和认证结果的认受性。有关详情请浏览<a
                href="https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/index.html"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: underline; color: #00E;"
              >香港认可处网页</a>。`,
  };

  const strengthContent = [
    {
      title: (pageText.FROM_MACRO_ANGLE as LanguageResources).TITLE,
      contents: [
        {
          label: (pageText.FROM_MACRO_ANGLE as LanguageResources)
            .PROXIMITY_TITLE,
          value: [
            (pageText.FROM_MACRO_ANGLE as LanguageResources).PROXIMITY_CONTENT,
          ],
        },
        {
          label: (pageText.FROM_MACRO_ANGLE as LanguageResources)
            .HIGH_INTEGRITY_TITLE,
          value: [
            (pageText.FROM_MACRO_ANGLE as LanguageResources)
              .HIGH_INTEGRITY_CONTENT_1,
            (pageText.FROM_MACRO_ANGLE as LanguageResources)
              .HIGH_INTEGRITY_CONTENT_2,
          ],
        },
        {
          label: (pageText.FROM_MACRO_ANGLE as LanguageResources)
            .GOOD_LOGISTICS_TITLE,
          value: [
            (pageText.FROM_MACRO_ANGLE as LanguageResources)
              .GOOD_LOGISTICS_CONTENT_1,
            (pageText.FROM_MACRO_ANGLE as LanguageResources)
              .GOOD_LOGISTICS_CONTENT_2,
          ],
        },
        {
          label: (pageText.FROM_MACRO_ANGLE as LanguageResources)
            .COMPETITIVE_EDGE,
          value: [
            (pageText.FROM_MACRO_ANGLE as LanguageResources)
              .COMPETITIVE_EDGE_CONTENT,
          ],
        },
        {
          label: (pageText.FROM_MACRO_ANGLE as LanguageResources)
            .WELL_EDUCATION_TITLE,
          value: [
            (pageText.FROM_MACRO_ANGLE as LanguageResources)
              .WELL_EDUCATION_CONTENT,
          ],
        },
      ],
    },
    {
      title: (pageText.ROBUST as LanguageResources).TITLE,
      contents: [
        {
          label: (pageText.ROBUST as LanguageResources).ACCREDITATION_TITLE,
          value: [(pageText.ROBUST as LanguageResources).ACCREDITATION_CONTENT],
        },
        {
          label: (pageText.ROBUST as LanguageResources)
            .INDEPENDENT_SYSTEM_TITLE,
          value: [
            (pageText.ROBUST as LanguageResources).INDEPENDENT_SYSTEM_CONTENT,
          ],
        },
        {
          label: (pageText.ROBUST as LanguageResources)
            .SYSTEM_INTERNATIONAL_TITLE,
          value: [systemInternationalMapping[language]],
        },
        {
          label: (pageText.ROBUST as LanguageResources).QUICK_RESPONSE_TITLE,
          value: [
            (pageText.ROBUST as LanguageResources).QUICK_RESPONSE_CONTENT,
          ],
        },
      ],
    },
    {
      title: (pageText.LOCAL_TESTING as LanguageResources).TITLE,
      contents: [
        {
          label: (pageText.LOCAL_TESTING as LanguageResources).CORPORATE_TITLE,
          value: [
            (pageText.LOCAL_TESTING as LanguageResources).CORPORATE_CONTENT,
          ],
        },
        {
          label: (pageText.LOCAL_TESTING as LanguageResources).COMPETENCE_TITLE,
          value: [
            (pageText.LOCAL_TESTING as LanguageResources).COMPETENCE_CONTENT,
          ],
        },
        {
          label: (pageText.LOCAL_TESTING as LanguageResources)
            .PERSONALITY_TITLE,
          value: [
            (pageText.LOCAL_TESTING as LanguageResources).PERSONALITY_CONTENT,
          ],
        },
      ],
    },
  ];
  return (
    <div className="w-full flex gap-[24px] text-justify">
      <div className="flex-1">
        <SquareTitle title={pageText.TITLE as string} />
        <div className="bg-[#EEEEEA] my-[24px]">
          <div className="px-[42px] py-[36px]">
            <p className="text-body-m">{pageText.SERVICE_INTRO_1 as string}</p>
            <p className="mt-[16px] text-body-m">
              {pageText.SERVICE_INTRO_2 as string}
            </p>
          </div>
        </div>

        {/** title buttons */}
        <div className="flex flex-wrap gap-[8px] mb-[24px]">
          {strengthContent.map((strengthInfo, index) => {
            const isActivated = index === activeTopicButton;
            const title: string = strengthInfo?.title as string;
            return (
              <button
                key={index}
                className="whitespace-nowrap bg-newPrimary"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveTopicButton(index);
                }}
              >
                <p className="text-highlight-xs">
                  {title.length > 52 ? title.slice(0, 52) + "..." : title}
                </p>
              </button>
            );
          })}
        </div>

        {/** contents */}
        <div className="flex flex-col gap-[8px] mb-[48px]">
          {strengthContent[activeTopicButton].contents.map((content, index) => (
            <div key={index}>
              <div className="text-heading-m mb-[24px]">
                {content.label as string}
              </div>
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
