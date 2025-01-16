import { type BreadcrumbItem } from "../../../../../components";
import { navItemEnum } from "../../../../../const";

export const handleReturnDifferentBusinessAreasBreadcrumb = (
  currentArea: string
): BreadcrumbItem[] => {
  const differentBusinessAreasBreadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "T&C Sector - Services for Different Business Areas",
      href: `/tc-sector?section=${navItemEnum.different_business_areas}`,
    },
    { label: currentArea },
  ];
  return differentBusinessAreasBreadcrumbItems;
};
