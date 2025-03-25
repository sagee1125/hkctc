import { type BreadcrumbItem } from "../../../../../components";
import { navItemEnum } from "../../../../../const";
import { Language } from "../../../../../context";

const multilingual = {
  en: {
    home: `Home`,
    about_tc: "About T&C Industry",
    sv_fof_diff: "Services for Different Business Areas",
  },

  cn: {
    home: `主頁`,
    about_tc: "關於檢測認證業",
    sv_fof_diff: "為不同業務範疇提供的服務",
  },
};

export const handleReturnDifferentBusinessAreasBreadcrumb = (
  currentArea: string,
  language: Language
): BreadcrumbItem[] => {
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { home, about_tc, sv_fof_diff } = page_text;

  const differentBusinessAreasBreadcrumbItems = [
    { label: home, href: "/" },
    {
      label: about_tc,
      href: `/tc-sector?section=${navItemEnum.profile_and_role}`, // default to activate the first one
    },
    {
      label: sv_fof_diff,
      href: `/tc-sector?section=${navItemEnum.different_business_areas}`,
    },
    { label: currentArea },
  ];
  return differentBusinessAreasBreadcrumbItems;
};
