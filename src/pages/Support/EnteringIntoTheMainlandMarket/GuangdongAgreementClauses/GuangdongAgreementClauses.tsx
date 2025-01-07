import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  SquareTitle,
} from "../../../../components";
import { directorySidebarItemsMap } from "../../Support";
import { navItemEnum } from "../../../../const";

const specificCommitments = [
  "In the area of voluntary certification, to allow testing organizations in Hong Kong to cooperate with Mainland certification bodies to undertake testing of products manufactured or processed in Hong Kong or in the Mainland. These testing organizations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region (i.e. the Hong Kong Accreditation Service) to be competent in performing testing for the relevant products.",
  `To allow testing organizations in Hong Kong to cooperate with designated Mainland organizations to undertake testing of products for the China Compulsory Certification (CCC) System. The products are under the "audio and visual apparatus" category of the CCC System, and have to be designed and prototyped in Hong Kong, as well as processed or manufactured in Guangdong Province. These testing organizations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region (i.e. the Hong Kong Accreditation Service) to be competent in performing testing for the relevant products under the CCC System.`,
];
export const GuangdongAgreementClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Agreement on Trade in Services - Clauses" },
  ];
  const navigate = useNavigate();

  const directorySidebarMap =
    directorySidebarItemsMap[navItemEnum.entering_into_the_mainland_market];
  const directoryItems = Object.keys(directorySidebarMap ?? {}) ?? [];

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox src={"support/support_5.png"} />
      <div id="breadcrumb">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[2]} // "Summary of CEPA Clauses Relating to Testing and Certification"
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Guangdong Agreement - Clauses" />
          <p className="text-heading-l my-[24px]">
            Liberalisation of Trade in Services (extracted from Table 2 of Annex
            1 of the Guangdong Agreement)
          </p>
          <p className="text-heading-m mb-[24px]">Sectors or sub-sectors</p>
          <p className="text-body-m">1. Business Services</p>
          <p className="text-body-m">F. Other Business Services</p>
          <p className="text-body-m">
            e. Technical testing and analysis services (CPC8676)
          </p>
          <p className="my-[24px] text-heading-m">Specific commitments</p>
          <p className="text-italic-s italic">
            Effective from 1 June 2020; The amendments made in Oct 2024 on item
            2 and item 3 are marked in tracking mode, and will come into effect
            on 1 March 2025
          </p>
          <ul
            style={{ listStyleType: "decimal", paddingLeft: "20px" }}
            className="text-body-m"
          >
            {specificCommitments.map((commit, index) => (
              <div key={index}>
                <br />
                <li>{commit}</li>
              </div>
            ))}
          </ul>
          <p className="text-italic-s italic mt-[24px]">
            An&nbsp;
            <a
              className="underline text-[#00E]"
              href="https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Implementation Guide
            </a>
            &nbsp;was promulgated to provide details for the implementation of
            the two testing and certification related liberalisation measures in
            Table 2 of Annex 1.
          </p>
          <hr className="my-[24px]" />
          <div className="flex flex-row gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src={`${process.env.PUBLIC_URL}/assets/icons/arrow_left.svg`}
              alt={"arrow left"}
            />
            <p
              className="text-highlight-l cursor-pointer"
              onClick={() => {
                const element = document.getElementById("breadcrumb");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
                navigate(
                  `/support?section=${navItemEnum.entering_into_the_mainland_market}`
                );
              }}
            >
              Back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
