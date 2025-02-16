import React from "react";
import { ResourcesReportsContent } from "./ResourcesReportsContent";
import { Breadcrumb, fullContainer, maxPCContainer } from "../../components";

export const ResourcesReports: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources " },
  ];

  return (
    <div style={fullContainer}>
      <div style={maxPCContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <ResourcesReportsContent />
      </div>
    </div>
  );
};
