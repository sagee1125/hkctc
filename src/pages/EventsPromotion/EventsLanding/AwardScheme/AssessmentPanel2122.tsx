import React from "react";
import { award2122_panel_multilingual as multilingual } from "./lang";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { useSettings } from "../../../../context";

export const AssessmentPanel2122: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    assessment_panel_membership,
    manpower_scheme_2122,
    tc_assessment_panel,
    members_1,
    members,
    chairman,
    joseph_mak,
    excellent_assessment_panel,
    members_2,
    chan_kin_sek,
  } = page_text;
  return (
    <div className="w-full">
      <SquareTitle title={assessment_panel_membership as string} />
      <div className="text-heading-l">{manpower_scheme_2122 as string}</div>
      <div className="text-heading-l my-[24px]">
        {tc_assessment_panel as string}
      </div>
      <p className="text-heading-m">{chairman as string}</p>
      <p className="text-highlight-m">{joseph_mak as string}</p>
      <p className="text-heading-m mt-[24px]">{members as string}</p>
      <div>
        {[members_1 as string[]].map((m, index) => (
          <p key={index} className="text-highlight-extra">
            {m}
          </p>
        ))}
      </div>
      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {excellent_assessment_panel as string}
      </p>
      <p className="text-heading-m">{chairman as string}</p>
      <p className="text-highlight-m">{chan_kin_sek as string}</p>
      <p className="text-heading-m mt-[24px]">{members as string}</p>
      <div>
        {[members_2 as string[]].map((m, index) => (
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
