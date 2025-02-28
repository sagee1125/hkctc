import React from "react";
import { ResourcesReportsContent } from "./ResourcesReportsContent";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { useSettings } from "../../context";

export const ResourcesReports: React.FC = () => {
  const { isPC } = useSettings();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources " },
  ];

  return (
    <div style={fullContainer}>
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && <Breadcrumb items={breadcrumbItems} />}
        <ResourcesReportsContent />
      </div>
    </div>
  );
};
