import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";

export const AssessmentPanel2122: React.FC = () => {
  const members_1 = [
    "Mr Steve LAI Ying-wai",
    "Mr Eddie LEE Pak-ling",
    "Ms Bella HO Shiu-wun",
    "Ms Jane LEE Sze-yan",
  ];

  const members_2 = [
    "Dr George LAU Hing-keung",
    "Dr Tommy LO Yiu",
    "Mr Basil WAI Siu-bong",
    "Ms Jane LEE Sze-yan",
  ];
  return (
    <div className="w-full">
      <SquareTitle
        title={"Membership of Assessment Panel of Testing and Certification"}
      />
      <p className="text-heading-l">
        Manpower Development Award Scheme 2021-22
      </p>
      <p className="text-heading-l my-[24px]">
        I. Assessment Panel for “Testing and Certification Manpower Development
        Corporate Award”
      </p>
      <p className="text-heading-m">Chairman</p>
      <p className="text-highlight-m">Professor Joseph MAK Yiu-wing</p>
      <p className="text-heading-m mt-[24px]">Members</p>
      <div>
        {members_1.map((m, index) => (
          <p key={index} className="text-highlight-extra">
            {m}
          </p>
        ))}
      </div>
      <p className="text-heading-l my-[24px]">
        II. Assessment Panel for “Excellent Testing and Certification
        Professional Award”
      </p>
      <p className="text-heading-m">Chairman</p>
      <p className="text-highlight-m">Ir Raymond CHAN Kin-sek, BBS</p>
      <p className="text-heading-m mt-[24px]">Members</p>
      <div>
        {members_2.map((m, index) => (
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
