import React from "react";
import {
  Breadcrumb,
  type BreadcrumbItem,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { ServiceUsersContent } from "./ServiceUsersContent";
import { useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    service_users: "T&C Service Users",
    desc: "Learn how testing and certification services support businesses and build trust.",
  },
  cn: {
    home: `主頁`,
    service_users: "檢測認證服務使用者",
    desc: "了解檢測與認證服務如何支持企業並建立信任。",
  },
};

export const ServiceUsers: React.FC = () => {
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { home, service_users, desc } = page_text;

  const breadcrumbItems = [
    { label: home, href: "/" },
    { label: service_users },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        isPC={isPC}
        title={service_users as string}
        titleTheme="energeticOrange"
        description={desc as string}
        barBackgroundImg="serviceUsers/Service_Users_banner_bg_2.png"
        offset="44%"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
          </div>
        )}
        <ServiceUsersContent />
      </div>
    </div>
  );
};
