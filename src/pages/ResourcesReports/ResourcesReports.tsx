import React from "react";
import { ResourcesReportsContent } from "./ResourcesReportsContent";
import { Breadcrumb } from "../../components";

export const ResourcesReports: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Resources " },
  ];

  return (
    <div className="w-full">
      <Breadcrumb items={breadcrumbItems} />
      <ResourcesReportsContent />
    </div>
  );
};
