import React from "react";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { ServiceUsersContent } from "./ServiceUsersContent";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    service_users: "T&C Service Users",
    desc: "Learn how testing and certification services support businesses and build trust.",
  },
  cn: {
    home: `主頁`,
    service_users: "檢測認證服務使用者",
    desc: "Learn how testing and certification services support businesses and build trust.",
  },
};

export const ServiceUsers: React.FC = () => {
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { home, service_users, desc } = page_text;

  const breadcrumbItems = [
    { label: home, href: "/" },
    { label: service_users },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title={service_users}
        titleTheme="energeticOrange"
        description={desc}
        barBackgroundImg="serviceUsers/Service_Users_banner_bg.png"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <ServiceUsersContent />
      </div>
    </div>
  );
};
