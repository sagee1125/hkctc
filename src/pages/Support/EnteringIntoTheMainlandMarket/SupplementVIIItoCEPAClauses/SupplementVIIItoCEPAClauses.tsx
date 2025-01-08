import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  InternalBackButton,
  SquareTitle,
} from "../../../../components";
import { directorySidebarItemsMap } from "../../Support";
import { navItemEnum } from "../../../../const";

export const SupplementVIIItoCEPAClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support - Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Supplement VIII to CEPA - Clauses" },
  ];

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
          <SquareTitle title="Supplement VIII to CEPA - Clauses" />
          <p className="text-heading-l my-[24px]">
            Liberalisation of Trade in Services (extracted from the Annex to
            Supplement VIII to CEPA)
          </p>
          <p className="text-heading-m mb-[24px]">Sectors or sub-sectors</p>
          <p className="text-body-m">1. Business Services</p>
          <p className="text-body-m">F. Other Business Services</p>
          <p className="text-body-m">
            e. Technical testing and analysis services (CPC8676) Product testing
            services (CPC7490)
          </p>
          <p className="my-[24px] text-heading-m">Specific commitments</p>
          <p className="text-body-m">
            To expand, on the basis of Supplement VII to the CEPA, the scope of
            product testing that can be undertaken by testing organizations in
            Hong Kong for the China Compulsory Certification (CCC) System to all
            existing products processed in Hong Kong that require CCC. These
            testing organizations have to be accredited by the accreditation
            body of the Government of Hong Kong Special Administrative Region
            (i.e. the Hong Kong Accreditation Service) to be capable of
            performing testing for the relevant products under the CCC System.
          </p>

          <hr className="my-[24px]" />
          <InternalBackButton
            targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
          />
        </div>
      </div>
    </div>
  );
};
