import React from "react";
import { award2122_panel_multilingual as multilingual } from "./lang";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

export const AssessmentPanel2122: React.FC = () => {
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;

  return (
    <div className="w-full">
      <SquareTitle title={page_text.assessment_panel_membership} />
      <p className="text-heading-l">{page_text.manpower_scheme_2122}</p>
      <p className="text-heading-l my-[24px]">
        {page_text.tc_assessment_panel}
      </p>
      <p className="text-heading-m">{page_text.chairman}</p>
      <p className="text-highlight-m">{page_text.joseph_mak}</p>
      <p className="text-heading-m mt-[24px]">{page_text.members}</p>
      <div>
        {page_text.members_1.map((m, index) => (
          <p key={index} className="text-highlight-extra">
            {m}
          </p>
        ))}
      </div>
      <p className="text-heading-l my-[24px]">
        {page_text.excellent_assessment_panel}
      </p>
      <p className="text-heading-m">{page_text.chairman}</p>
      <p className="text-highlight-m">{page_text.chan_kin_sek}</p>
      <p className="text-heading-m mt-[24px]">{page_text.members}</p>
      <div>
        {page_text.members_2.map((m, index) => (
          <p key={index} className="text-highlight-extra">
            {m}
          </p>
        ))}
      </div>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/events-promotion?section=${navItemEnum.award_scheme}`}
      />
    </div>
  );
};
