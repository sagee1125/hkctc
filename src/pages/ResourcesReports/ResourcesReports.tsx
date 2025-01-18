import React from "react";
import { ResourcesReportsContent } from "./ResourcesReportsContent";
import { Breadcrumb, fullContainer, maxContainer } from "../../components";

export const ResourcesReports: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Resources " },
  ];

  return (
    <div style={fullContainer}>
      <div style={maxContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <ResourcesReportsContent />
      </div>
    </div>
  );
};
