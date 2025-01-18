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

export const SupplementVIItoCEPAClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support - Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Supplement VII to CEPA - Clauses" },
  ];

  const directorySidebarMap =
    directorySidebarItemsMap[navItemEnum.entering_into_the_mainland_market];
  const directoryItems = Object.keys(directorySidebarMap ?? {}) ?? [];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"support/support_5.png"} />
      <div style={maxContainer}>
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
            <SquareTitle title="Supplement VII to CEPA - Clauses" />
            <p className="text-heading-l my-[24px]">
              Liberalisation of Trade in Services (extracted from the Annex of
              Supplement VII to CEPA)
            </p>
            <p className="text-heading-m mb-[24px]">Sectors or sub-sectors</p>
            <p className="text-body-m">1. Business Services</p>
            <p className="text-body-m">F. Other Business Services</p>
            <p className="text-body-m">
              e. Technical testing and analysis services (CPC8676) Product
              testing services (CPC7490)
            </p>
            <p className="my-[24px] text-heading-m">Specific commitments</p>
            <p className="text-body-m">
              To allow testing organizations in Hong Kong to cooperate with
              designated Mainland organizations to undertake testing of products
              for the China Compulsory Certification (CCC) System on a pilot
              basis, for selected products listed in the CCC Catalogue and
              processed in Hong Kong (i.e. the processing facilities are located
              in Hong Kong). These testing organizations have to be accredited
              by the accreditation body of the Government of Hong Kong Special
              Administrative Region (i.e. the Hong Kong Accreditation Service)
              to be capable of performing testing for the relevant products
              under the CCC System. Cooperation arrangements should comply with
              relevant requirements in the "Regulations of the People's Republic
              of China on Certification and Accreditation".
            </p>
            <p className="text-heading-l my-[24px]">
              Measures in Facilitating Trade and Investment (extracted from the
              main text of Supplement VII to CEPA)
            </p>
            <p className="text-heading-m">
              III. Trade and Investment Facilitation
            </p>
            <p className="text-body-m my-[24px]">
              2. Both sides agree to further strengthen their cooperation in the
              area of commodity inspection and quarantine, food safety, quality
              and standardisation. Accordingly, the following subparagraphs
              5.2.5 and 5.2.6 are added to Article 5.2 of Annex 6 to "CEPA":
              <br />
              <br />
              "5.2.6 To actively promote cooperation between Hong Kong's testing
              laboratories and Mainland's certification bodies which are members
              of international multilateral systems on mutual recognition of
              testing and certification that are open to national member bodies
              (such as the IECEE/CB system), so that Hong Kong's testing
              laboratories can be recognized under these multilateral systems."
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
