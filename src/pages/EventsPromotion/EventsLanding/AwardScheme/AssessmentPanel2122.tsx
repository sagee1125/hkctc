import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    assessment_panel_membership:
      "Membership of Assessment Panel of Testing and Certification",
    manpower_scheme_2122: "Manpower Development Award Scheme 2021-22",
    tc_assessment_panel:
      "I. Assessment Panel for “Testing and Certification Manpower Development Corporate Award”",
    chairman: "Chairman",
    joseph_mak: "Professor Joseph MAK Yiu-wing",
    excellent_assessment_panel:
      "II. Assessment Panel for “Excellent Testing and Certification Professional Award”",
    chan_kin_sek: "Ir Raymond CHAN Kin-sek, BBS",
    members: "Members",
    members_1: [
      "Mr Steve LAI Ying-wai",
      "Mr Eddie LEE Pak-ling",
      "Ms Bella HO Shiu-wun",
      "Ms Jane LEE Sze-yan",
    ],
    members_2: [
      "Dr George LAU Hing-keung",
      "Dr Tommy LO Yiu",
      "Mr Basil WAI Siu-bong",
      "Ms Jane LEE Sze-yan",
    ],
  },
  cn: {
    assessment_panel_membership:
      "Membership of Assessment Panel of Testing and Certification",
    manpower_scheme_2122: "Manpower Development Award Scheme 2021-22",
    tc_assessment_panel:
      "I. Assessment Panel for “Testing and Certification Manpower Development Corporate Award”",
    chairman: "Chairman",
    joseph_mak: "Professor Joseph MAK Yiu-wing",
    excellent_assessment_panel:
      "II. Assessment Panel for “Excellent Testing and Certification Professional Award”",
    chan_kin_sek: "Ir Raymond CHAN Kin-sek, BBS",
    members: "Members",
    members_1: [
      "Mr Steve LAI Ying-wai",
      "Mr Eddie LEE Pak-ling",
      "Ms Bella HO Shiu-wun",
      "Ms Jane LEE Sze-yan",
    ],
    members_2: [
      "Dr George LAU Hing-keung",
      "Dr Tommy LO Yiu",
      "Mr Basil WAI Siu-bong",
      "Ms Jane LEE Sze-yan",
    ],
  },
};

export const AssessmentPanel2122: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  return (
    <div className="w-full">
      <SquareTitle title={page_text.assessment_panel_membership} />
      <p className="text-heading-l">{page_text.manpower_scheme_2122}</p>
      <p className="text-heading-l my-[24px]">
        {page_text.tc_assessment_panel}
      </p>
      <p className="text-heading-m">{page_text.chairman}</p>
      <p className="text-highlight-m"> {page_text.joseph_mak}</p>
      <p className="text-heading-m mt-[24px]"> {page_text.members}</p>
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
      <p className="text-heading-m mt-[24px]"> {page_text.members}</p>
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
