import React from "react";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { ClausesDirectorySidebar } from "../ClausesDirectorySidebar";
import { useSettings } from "../../../../context";

const list: string[] = [
  "Electric cables and wiring",
  "Electrical switches, protective devices and connection devices",
  "Low voltage electrical equipment",
  "Small power motors",
  "Electric tools",
  "Electric welding machines",
  "Household and similar electrical appliances",
  "Electronic product and safety accessory",
  "Lighting apparatus",
  "Motor vehicles and safety accessories",
  "Agricultural machinery",
  "Fire service equipment",
  "Construction materials",
  "Children’s products",
  "Explosion-proof electrical products",
  "Household gas appliances",
];
export const CCCTesting: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support - Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "China Compulsory Certification (CCC) Testing" },
  ];

  const { isPC } = useSettings();

  const sidebar = <ClausesDirectorySidebar />;
  const content = (
    <>
      <SquareTitle title="China Compulsory Certification (CCC) Testing" />
      <p className="text-body-m my-[24px]">
        Since the signing of the Supplement VII to CEPA, the Mainland has been
        gradually opening up its CCC market to Hong Kong testing and
        certification bodies. Testing organisations in Hong Kong are now allowed
        to co-operate with designated Mainland certification bodies to undertake
        testing of all products that require CCC which are processed or
        manufactured in any place (including places outside China).
        <br />
        <br />
        Any testing organisations engaging in testing business for products
        under the CCC System have to be accredited by Hong Kong Accreditation
        Service (HKAS) to be capable of performing testing for the relevant
        products. Procedures for testing organisations in applying for relevant
        accreditation from HKAS could be viewed at&nbsp;
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
      <Accordion
        title={"List of existing products requiring CCC"}
        details={
          <div className="text-body-m">
            {list.map((data, index) => (
              <p key={index}>
                {index + 1}.&nbsp;{data}
              </p>
            ))}
          </div>
        }
      />
      <p className="mt-[24px] text-body-m">
        For enquiry on accreditation for CCC testing, please contact:
        <br />
        Hong Kong Accreditation Service
        <br />
        Telephone: (852) 2829 4846
        <br />
        Fax: (852) 2824 1302
        <br />
        Email:&nbsp;
        <span className="underline text-[#00E] cursor-pointer">
          cc.leung@itc.gov.hk
        </span>
      </p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"support/support_5.png"} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              {sidebar}
            </div>
            <div className="flex-1">{content}</div>
          </div>
        ) : (
          <div className="w-full flex flex-col pt-[48px] px-[24px]">
            {sidebar}
            <div className="flex-1">{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
