import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  SquareTitle,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { ClausesDirectorySidebar } from "../ClausesDirectorySidebar";

export const SupplementIXtoCEPAClauses: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support - Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    { label: "Supplement IX to CEPA - Clauses" },
  ];

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox src={"support/support_5.png"} />
      <div id="breadcrumb">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <ClausesDirectorySidebar />
        </div>
        <div className="flex-1">
          <SquareTitle title="Supplement IX to CEPA - Clauses" />
          <p className="text-heading-l my-[24px]">
            Liberalisation of Trade in Services (extracted from the Annex of
            Supplement IX to CEPA)
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
            To expand, on a pilot basis in Guangdong Province, the scope of
            certification services that can be undertaken by Hong Kong testing
            organizations to cover food. (See&nbsp;
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Implementation Guide
            </a>
            &nbsp;for details.)
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
