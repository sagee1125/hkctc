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
  maxPCContainer,
  DirectorySidebar,
  maxMobileContainer,
  type DirectorySidebarItems,
} from "../../../components";
import { useSettings } from "../../../context";

const multilingual = {
  en: {
    home: "Home",
    support: `Support`,
    entering_into_the_mainland_market: "Entering into the Mainland Market",
    summary_of_CEPA:
      "Summary of CEPA Clauses Relating to Testing and Certification",
  },

  cn: {
    home: "主頁",
    support: `支援`,
    entering_into_the_mainland_market: "進入內地市場",
    summary_of_CEPA: "CEPA下檢測認證相關條文摘要",
  },
};
const sidebarItems: DirectorySidebarItems[] = [
  {
    label: "Agreement on Trade in Services - Clauses",
    labelCN: "《服務貿易協議》 - 有關條文",
    value: `trade_in_services`,
  },
  {
    label: "Agreement on Trade in Goods - Clauses",
    labelCN: "《貨物貿易協議》 - 有關條文",
    value: `trade_in_good`,
  },
  {
    label: "Agreement on Economic and Technical Cooperation - Clauses",
    labelCN: "《經濟技術合作協議》 - 有關條文",
    value: `trade_in_economic`,
  },
  {
    label: "Guangdong Agreement - Clauses",
    labelCN:
      "《關於內地在廣東與香港基本實現服務貿易自由化的協議》（《廣東協議》） - 有關條文",
    value: `guangdong_agreement`,
  },
  {
    label: "Supplement X to CEPA - Clauses",
    labelCN: "《CEPA補充協議十》 - 有關條文",
    value: `X_to_CEPA`,
  },
  {
    label: "Supplement IX to CEPA - Clauses",
    labelCN: "《CEPA補充協議九》 - 有關條文",
    value: `IX_to_CEPA`,
  },
  {
    label: "Supplement VIII to CEPA - Clauses",
    labelCN: "《CEPA補充協議八》 - 有關條文",
    value: `VIII_to_CEPA`,
  },
  {
    label: "Supplement VII to CEPA - Clauses",
    labelCN: "《CEPA補充協議七》 - 有關條文",
    value: `VII_to_CEPA`,
  },
];
export const AgreementClause: React.FC = () => {
  const navigate = useNavigate();
  const initialHash = window.location.hash;
  const initialHashIndex = initialHash
    ? Number(initialHash.substring(1))
    : null; // remove `#`, get index
  const { isPC, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);

  const { home, support, entering_into_the_mainland_market, summary_of_CEPA } =
    page_text;
  const [activeItem, setActiveItem] = useState<string>(sidebarItems[0].value);
  const clauseContent: Record<string, React.ReactNode> = {
    [sidebarItems[0].value]: <AgreementOnTradeInServicesClauses />,
    [sidebarItems[1].value]: <AgreementOnTradeInGoodsClauses />,
    [sidebarItems[2].value]: <AgreementOnEconomicTechnicalCooperationClauses />,
    [sidebarItems[3].value]: <GuangdongAgreementClauses />,
    [sidebarItems[4].value]: <SupplementXtoCEPAClauses />,
    [sidebarItems[5].value]: <SupplementIXtoCEPAClauses />,
    [sidebarItems[6].value]: <SupplementVIIItoCEPAClauses />,
    [sidebarItems[7].value]: <SupplementVIItoCEPAClauses />,
  };

  const currentTitle = activeItem;
  const currentComponent = clauseContent?.[activeItem];

  useEffect(() => {
    if (!initialHashIndex) navigate(`/support/agreement-clause#0`);
    else {
      navigate(`/support/agreement-clause#${initialHashIndex}`);
      setActiveItem(sidebarItems[initialHashIndex].value);
    }
  }, [initialHashIndex, navigate]);

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    const hashIndex = sidebarItems.findIndex(
      (item) => item.value === activatedItems
    );
    setActiveItem(activatedItems);

    window.location.hash = `${hashIndex}`;

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const breadcrumbItems = [
    { label: home as string, href: "/" },
    {
      label: support as string,
      href: `/support`,
    },
    {
      label: entering_into_the_mainland_market as string,
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    {
      label: summary_of_CEPA as string,
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    {
      label: getSingleText(
        sidebarItems.find((s) => s.value === currentTitle)?.label ?? "",
        sidebarItems.find((s) => s.value === currentTitle)?.labelCN ?? ""
      ),
    },
  ];

  const sidebar = (
    <DirectorySidebar
      setActivatedItems={handleChangeDirectorySidebarItems}
      directorySidebarItems={sidebarItems}
      activatedItems={activeItem}
    />
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
            <div className="flex-1">{currentComponent}</div>
          </div>
        ) : (
          <div className="w-full flex flex-col pt-[48px] px-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              {sidebar}
            </div>
            <div className="flex-1">{currentComponent}</div>
          </div>
        )}
      </div>
    </div>
  );
};
