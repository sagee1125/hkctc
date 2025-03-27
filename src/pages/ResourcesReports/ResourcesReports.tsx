import React from "react";
import { ResourcesReportsContent } from "./ResourcesReportsContent";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { Language, useSettings } from "../../context";

export const ResourcesReports: React.FC = () => {
  const { language, isPC, processText } = useSettings();
  const isEn = language === Language.EN;

  const breadcrumbItems_en = [
    { label: "Home", href: "/" },
    { label: "Resources " },
  ];

  const breadcrumbItems_cn = [
    { label: processText("主頁"), href: "/" },
    { label: processText("資源") },
  ];

  const breadcrumbItems = isEn ? breadcrumbItems_en : breadcrumbItems_cn;

  return (
    <div style={fullContainer}>
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && <Breadcrumb items={breadcrumbItems} />}
        <ResourcesReportsContent />
      </div>
    </div>
  );
};
