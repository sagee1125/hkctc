import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AgreementOnTradeInServicesClauses } from "./AgreementOnTradeInServicesClauses";
import { AgreementOnTradeInGoodsClauses } from "./AgreementOnTradeInGoodsClauses";
import { AgreementOnEconomicTechnicalCooperationClauses } from "./AgreementOnEconomicTechnicalCooperationClauses";
import { GuangdongAgreementClauses } from "./GuangdongAgreementClauses";
import { SupplementXtoCEPAClauses } from "./SupplementXtoCEPAClauses";
import { SupplementIXtoCEPAClauses } from "./SupplementIXtoCEPAClauses";
import { SupplementVIIItoCEPAClauses } from "./SupplementVIIItoCEPAClauses";
import { SupplementVIItoCEPAClauses } from "./SupplementVIItoCEPAClauses";
import { navItemEnum } from "../../../const";
import {
  BannerPhotoBox,
  Breadcrumb,
  fullContainer,
  maxContainer,
  DirectorySidebar,
} from "../../../components";

export const AgreementClause: React.FC = () => {
  const navigate = useNavigate();
  const initialHash = window.location.hash;
  const initialHashIndex = initialHash
    ? Number(initialHash.substring(1))
    : null; // remove `#`, get index

  const [activeItem, setActiveItem] = useState<string>(
    "Agreement on Trade in Services - Clauses"
  );
  const clauseContent: Record<string, React.ReactNode> = {
    "Agreement on Trade in Services - Clauses": (
      <AgreementOnTradeInServicesClauses />
    ),
    "Agreement on Trade in Goods - Clauses": <AgreementOnTradeInGoodsClauses />,
    "Agreement on Economic and Technical Cooperation - Clauses": (
      <AgreementOnEconomicTechnicalCooperationClauses />
    ),
    "Guangdong Agreement - Clauses": <GuangdongAgreementClauses />,
    "Supplement X to CEPA - Clauses": <SupplementXtoCEPAClauses />,
    "Supplement IX to CEPA - Clauses": <SupplementIXtoCEPAClauses />,
    "Supplement VIII to CEPA - Clauses": <SupplementVIIItoCEPAClauses />,
    "Supplement VII to CEPA - Clauses": <SupplementVIItoCEPAClauses />,
  };

  const sidebarItems: string[] = [
    "Agreement on Trade in Services - Clauses",
    "Agreement on Trade in Goods - Clauses",
    "Agreement on Economic and Technical Cooperation - Clauses",
    "Guangdong Agreement - Clauses",
    "Supplement X to CEPA - Clauses",
    "Supplement IX to CEPA - Clauses",
    "Supplement VIII to CEPA - Clauses",
    "Supplement VII to CEPA - Clauses",
  ];

  const currentTitle = activeItem;
  const currentComponent = clauseContent?.[activeItem];

  useEffect(() => {
    if (!initialHashIndex) navigate(`/support/agreement-clause#0`);
    else {
      navigate(`/support/agreement-clause#${initialHashIndex}`);
      setActiveItem(sidebarItems[initialHashIndex]);
    }
  }, [initialHashIndex, navigate]);

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    const hashIndex = sidebarItems.findIndex((item) => item === activatedItems);
    setActiveItem(activatedItems);

    window.location.hash = `${hashIndex}`;

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support",
      href: `/support`,
    },
    {
      label: "Entering into the Mainland Market",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    {
      label: "Summary of CEPA Clauses Relating to Testing and Certification",
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    {
      label: currentTitle,
    },
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
            <DirectorySidebar
              setActivatedItems={handleChangeDirectorySidebarItems}
              directorySidebarItems={sidebarItems}
              activatedItems={activeItem}
            />
          </div>
          <div className="flex-1">{currentComponent}</div>
        </div>
      </div>
    </div>
  );
};
