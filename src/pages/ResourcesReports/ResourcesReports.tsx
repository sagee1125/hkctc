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
  const { language, isPC } = useSettings();
  const isEn = language === Language.EN;

  const breadcrumbItems_en = [
    { label: "Home", href: "/" },
    { label: "Resources " },
  ];

  const breadcrumbItems_cn = [{ label: "主頁", href: "/" }, { label: "資源 " }];

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
