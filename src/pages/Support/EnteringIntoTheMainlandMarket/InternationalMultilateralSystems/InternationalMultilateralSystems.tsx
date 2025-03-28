import React from "react";
import { ClausesDirectorySidebar } from "../ClausesDirectorySidebar";
import {
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { useSettings } from "../../../../context";

const multilingual = {
  en: {
    home: "Home",
    support: "Support - Entering into the Mainland Market",
    IMS: "International Multilateral Systems on Mutual Recognition",
    CEPA: "CEPA Agreements",
    intro:
      "The avenue and criteria for testing laboratories in Hong Kong to join the international multilateral systems on mutual recognition of testing and certification in which the Certification and Accreditation Administration of the People's Republic of China (CNCA) is a national member body (such as the International Electrotechnical Commission of Conformity Assessment Schemes for Electrotechnical Equipment and Components (IECEE-CB) system) are the same as those for the Mainland's testing laboratories. They have to apply directly to CNCA through its contact point. CNCA, as a national member body, will subsequently send a letter of recommendation to the relevant international organisation.",
    enquiry: (
      <>
        Enquiry and contact of CNCA:
        <br />
        Certification and Accreditation Administration of the People's Republic
        of China
        <br />
        Department for International Cooperation
        <br />
        Telephone: +86-10-82260836
        <br />
        Fax:&nbsp;+86-10-82260767
        <br />
        Email:&nbsp;
        <a
          className="underline text-[#00E] cursor-pointer"
          href="mailto:yangy@cnca.gov.cn"
        >
          yangy@cnca.gov.cn
        </a>
      </>
    ),
  },
  cn: {
    home: "主頁",
    support: "支援 - 進入內地市場",
    IMS: "國際多邊互認體系",
    CEPA: "CEPA協議",

    intro:
      "香港檢測實驗所加入中國國家認證認可監督管理委員會（認監委）作為國家成員機構的多邊互認體系（如IECEE-CB體系）的途徑和申請要求，與內地檢測實驗所一致。檢測實驗所須透過以下認監委聯絡點直接向認監委提交申請，予其考慮。認監委（作為國家成員機構）繼而會向相應的國際組織提交推薦函，進行推薦。",
    enquiry: (
      <>
        認監委聯絡點：
        <br />
        中國國家認證認可監督管理委員會
        <br />
        國際合作部
        <br />
        電話： +86-10-82260836
        <br />
        傳真： +86-10-82260767
        <br />
        電子郵件：
        <a
          className="underline text-[#00E] cursor-pointer"
          href="mailto:yangy@cnca.gov.cn"
        >
          yangy@cnca.gov.cn
        </a>
      </>
    ),
  },
};

export const InternationalMultilateralSystems: React.FC = () => {
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const { home, support, IMS, intro, enquiry, CEPA } = page_text;

  const breadcrumbItems = [
    { label: home as string, href: "/" },
    {
      label: support as string,
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#2`,
    },
    {
      label: CEPA as string,
      href: `/support?section=${navItemEnum.entering_into_the_mainland_market}#1`,
    },
    { label: IMS as string },
  ];

  const sidebar = <ClausesDirectorySidebar />;
  const content = (
    <div className="flex-1">
      <SquareTitle title={IMS as string} />
      <div className="text-body-m my-[24px] text-justify">
        {intro as React.ReactNode}
        <br />
        <br />
        {enquiry as React.ReactNode}
      </div>

      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"support/support_5.png"} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              {sidebar}
            </div>
            {content}
          </div>
        ) : (
          <div className="w-full flex flex-col pt-[48px] px-[24px]">
            {sidebar}
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
