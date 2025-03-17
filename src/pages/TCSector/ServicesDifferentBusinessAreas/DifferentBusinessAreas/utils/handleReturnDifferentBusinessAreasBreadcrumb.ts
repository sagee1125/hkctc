import { type BreadcrumbItem } from "../../../../../components";
import { navItemEnum } from "../../../../../const";

export const handleReturnDifferentBusinessAreasBreadcrumb = (
  currentArea: string
): BreadcrumbItem[] => {
  const differentBusinessAreasBreadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "About T&C Industry",
      href: `/tc-sector?section=${navItemEnum.profile_and_role}`, // default to activate the first one
    },
    {
      label: "Services for Different Business Areas",
      href: `/tc-sector?section=${navItemEnum.different_business_areas}`,
    },
    { label: currentArea },
  ];
  return differentBusinessAreasBreadcrumbItems;
};
