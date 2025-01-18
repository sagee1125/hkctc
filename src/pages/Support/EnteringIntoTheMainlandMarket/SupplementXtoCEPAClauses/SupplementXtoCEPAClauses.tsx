import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  InternalBackButton,
  SquareTitle,
  fullContainer,
  maxContainer,
} from "../../../../components";
import { directorySidebarItemsMap } from "../../Support";
import { navItemEnum } from "../../../../const";

const specificCommitments: React.ReactNode[] = [
  "To expand, on a pilot basis in Guangdong Province, the scope of testing services for the purpose of certification that can be undertaken by Hong Kong testing organizations from food to other areas of voluntary product certification.",
  <>
    <p>
      To accord to certification bodies, inspection bodies and laboratories
      jointly or solely set up in the Mainland by Hong Kong service suppliers,
      when participating in testing and certification activities, the same
      treatment as is accorded to Mainland certification bodies, inspection
      bodies and laboratories.
    </p>
    <br />
    <p className="!text-italic-s italic">
      (For implementation details of commitments "1" and "2", see&nbsp;
      <a
        className="underline text-[#00E]"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
      >
        Implementation Guide
      </a>
      .)
    </p>
  </>,
  "On the basis of mutual trust and mutual benefit, to allow testing and certification organizations in Hong Kong to cooperate with the Mainland testing and certification organizations in respect of acceptance of testing data (results). Specific cooperation arrangements are subject to further discussion.",
  <p>
    To allow contractual service providers employed by Hong Kong service
    suppliers, in the mode of movement of natural persons, to provide services
    under this sector or sub-sector in the Mainland.&nbsp;
    <a
      className="underline text-[#00E] !text-italic-s italic"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
    >
      (See&nbsp;Implementation Guide&nbsp;for details.)
    </a>
  </p>,
];
export const SupplementXtoCEPAClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support - Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Supplement X to CEPA - Clauses" },
  ];

  const directorySidebarMap =
    directorySidebarItemsMap[navItemEnum.entering_into_the_mainland_market];
  const directoryItems = Object.keys(directorySidebarMap ?? {}) ?? [];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"support/support_5.png"} />
      <div style={maxContainer}>
        {" "}
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
            <SquareTitle title="Supplement X to CEPA - Clauses" />
            <p className="text-heading-l my-[24px]">
              Liberalisation of Trade in Services (extracted from the Annex of
              Supplement X to CEPA)
            </p>
            <p className="text-heading-m mb-[24px]">Sectors or sub-sectors</p>
            <p className="text-body-m">1. Business Services</p>
            <p className="text-body-m">F. Other Business Services</p>
            <p className="text-body-m">
              e. Technical testing and analysis services (CPC8676)
            </p>
            <p className="mt-[24px] text-heading-m">Specific commitments</p>
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

            <p className="text-heading-l my-[24px]">
              Measures in Facilitating Trade and Investment (extracted from the
              main text of Supplement X to CEPA)
            </p>
            <p className="text-heading-m mb-[24px]">
              III. Trade and Investment Facilitation
            </p>
            <p className="text-body-m">
              The two sides agreed to further strengthen cooperation in the
              areas of commodity inspection and quarantine, food safety and
              quality and standardization. Accordingly, the following is added
              to Article 5.2.4 of Annex 6 to "CEPA" - Certification,
              accreditation and standardization Management:
              <br />
              <br />
              "(1) promote Guangdong and Hong Kong mutual recognition of testing
              and certification results in respect of third-party testing and
              certification services;
              <br />
              <br />
              (2) in accordance with specific certification requirements,
              promote Guangdong and Hong Kong mutual recognition of testing and
              certification results in respect of voluntary certification;
              <br />
              <br />
              (3) with regard to promoting mutual recognition of testing and
              certification results under the China Compulsory Certification
              (CCC) System, the two sides agree to observe the relevant
              requirements of the related national laws, rules, regulations and
              treaties, including the Regulations on Certification and
              Accreditation of the People's Republic of China and CEPA."
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
