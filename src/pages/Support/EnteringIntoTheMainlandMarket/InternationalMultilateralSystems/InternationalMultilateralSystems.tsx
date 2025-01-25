import React from "react";
import { ClausesDirectorySidebar } from "../ClausesDirectorySidebar";
import {
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  SquareTitle,
  fullContainer,
  maxContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";

export const InternationalMultilateralSystems: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support - Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "International Multilateral Systems on Mutual Recognition" },
  ];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"support/support_5.png"} />
      <div style={maxContainer}>
        <div id="breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="w-full flex flex-row pt-[48px] pr-[24px]">
          <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
            <ClausesDirectorySidebar />
          </div>
          <div className="flex-1">
            <SquareTitle title="International Multilateral Systems on Mutual Recognition" />
            <p className="text-body-m my-[24px]">
              The avenue and criteria for testing laboratories in Hong Kong to
              join the international multilateral systems on mutual recognition
              of testing and certification in which the Certification and
              Accreditation Administration of the People's Republic of China
              (CNCA) is a national member body (such as the International
              Electrotechnical Commission of Conformity Assessment Schemes for
              Electrotechnical Equipment and Components (IECEE-CB) system) are
              the same as those for the Mainland's testing laboratories. They
              have to apply directly to CNCA through its contact point. CNCA, as
              a national member body, will subsequently send a letter of
              recommendation to the relevant international organisation.
              <br />
              <br />
              Enquiry and contact of CNCA:
              <br />
              Certification and Accreditation Administration of the People's
              Republic of China
              <br />
              Department for International Cooperation
              <br />
              Telephone: +86-10-82260836
              <br />
              Fax:&nbsp;+86-10-82260767
              <br />
              Email:&nbsp;
              <span className="underline text-[#00E] cursor-pointer">
                yangy@cnca.gov.cn
              </span>
            </p>

            <hr className="my-[24px]" />
            <InternalBackButton
              targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
