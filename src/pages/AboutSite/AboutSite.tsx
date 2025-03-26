import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DirectorySidebar,
  BannerPhotoBox,
  Breadcrumb,
  SquareTitle,
  Link,
  fullContainer,
  maxPCContainer,
  maxMobileContainer,
  type DirectorySidebarItems,
} from "../../components";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    about_site: "About the Site",
    title: "Important Notices",
    intro:
      "This web site is produced and maintained by the Hong Kong Council for Testing and Certification (HKCTC), the Innovation and Technology Commission (the Commission) of the Hong Kong Special Administrative Region Government of the People's Republic of China.",
    desc: (
      <>
        The webpages on HKCTC are viewable on most modern browsers. HKCTC
        follows the HTML5 standard and does not make use of browser-specific
        features. However, each computer system displays fonts slightly
        differently and some users may have adjusted the default font size and
        screen resolution on their computers. As a result, the webpages on HKCTC
        may be displayed differently on computer systems with different
        configurations.
        <br />
        <br />
        The webpages on HKCTC are best viewed with the latest version of Edge,
        Mozilla Firefox, Safari or Google Chrome. To update your browsers,
        please visit one of the websites listed below:
      </>
    ),
    edge: "Edge Product Home Page",
    safari: "Safari Product Home Page",
    mozilla: "Mozilla Firefox Product Home Page",
    copyright: "Copyright Notice",
    google: "Google Chrome Product Home Page",
    copyright_desc:
      "The content available on this website, including but not limited to all text, graphics, drawings, diagrams, photographs and compilation of data or other materials are protected by copyright. The Government of the Hong Kong Special Administrative Region is the owner of all copyright works contained in this website. The information or part of it may be re-disseminated or reproduced, provided the source of the information is acknowledged and that the re-dissemination or reproduction is for a non-commercial purpose.",
    disclaimer: "Disclaimer",
    disclaimer_desc:
      "Although extreme care has been taken to ensure that the information provided on our website is accurate and up-to-date, the HKCTC does not warrant that all information or any part thereof provided is accurate in all respects. The HKCTC shall not be held liable for any loss or damage suffered as a result of any use or reliance on any of the information provided in its website.",
    please_download: (
      <div>
        Please download the latest version of&nbsp;
        <a
          href="https://helpx.adobe.com/support.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Acrobat Reader
        </a>
        &nbsp; to view and print the documents which are in Portable Document
        Format (PDF).
      </div>
    ),
  },
  cn: {
    title: "重要聲明",
    home: `主頁`,
    about_site: "About the Site",
    intro:
      "本網站由香港特別行政區創新科技署(下稱「本署」)、香港檢測和認證局負責製作及管理。",
    desc: (
      <>
        大部分近年的瀏覽器均能用於瀏覽香港檢測和認證局網頁（下稱「本網站」）。本網站採用HTML5標準，並沒有使用只適用於某種瀏覽器的功能。不過，每部電腦所顯示的字型均有些微差異，而每位使用者或會調校不同的預設字型大小及螢幕解像度。因此，根據不同電腦系統的配置，本網站顯示或會不同。
        <br />
        <br />
        以最新版本的Edge，Mozilla Firefox，Safari及Google
        Chrome瀏覽器閱讀本網站效果最佳。若你仍然使用這些瀏覽器的舊版本，我們建議你盡快更新至最新版本。請瀏覽以下網頁以更新你的瀏覽器：
      </>
    ),
    edge: "Edge產品網頁",
    safari: "Safari產品網頁",
    google: "Google Chrome產品網頁",
    mozilla: "Mozilla Firefox產品網頁",
    copyright: "版權公告",
    copyright_desc:
      "本網站的內容，包括但不限於所有文本、平面圖像、圖畫、圖片、照片，以及數據或其他資料的匯編，均受版權保障。香港特別行政區政府是本網站內所有版權作品的擁有人。本網站的全部或部分資料可供再行發布或複製，但再發布或複製者必須註明資料來源，而有關資料亦須用作非商業用途。",
    disclaimer: "免責聲明",
    disclaimer_desc:
      "香港檢測和認證局在編製本網頁時已力求審慎，盡可能使網頁資料正確無誤及盡快更新；惟香港檢測和認證局並不保證網頁內全部資料(或任何部分)在各方面均絕對正確。對於因使用或依據本網頁內所載的任何資料而引起的任何損失或損害，香港檢測和認證局概不負責。",

    please_download: (
      <div>
        請下載最新版本的
        <a
          href="https://helpx.adobe.com/support.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Acrobat Reader
        </a>
        瀏覽及列印PDF格式檔案文件。
      </div>
    ),
  },
};

const ImportantNote: React.FC = () => {
  const { language } = useSettings();

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    title,
    intro,
    desc,
    copyright,
    disclaimer,
    disclaimer_desc,
    copyright_desc,
    edge,
    mozilla,
    safari,
    google,
    please_download,
  } = page_text;
  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px] text-justify">
      <div className="flex-1">
        <SquareTitle title={title} />
      </div>
      <div className="bg-[#F7F7F5]">
        <div className="px-[42px] py-[36px]">
          <p className="text-body-m">{intro}</p>
        </div>
      </div>

      <div>{desc}</div>

      <ul className="flex flex-col gap-[24px] list-disc ml-6">
        <li>
          <Link outerLink="https://www.microsoft.com/en-us/edge/?form=MA13FJ">
            {edge}
          </Link>
        </li>
        <li>
          <Link outerLink="https://www.mozilla.org/en-US/firefox/?v=c&utm_source=www.mozilla.org&utm_medium=download_button&utm_campaign=firefox_page&utm_content=downloader_email_form_experiment_vc">
            {mozilla}
          </Link>
        </li>
        <li>
          <Link outerLink="https://www.apple.com/safari/">{safari}</Link>
        </li>
        <li>
          <Link outerLink="https://www.google.com/intl/en/chrome/">
            {google}
          </Link>
        </li>
      </ul>

      {please_download}
      <hr />
      <div className="text-heading-l">{copyright}</div>
      <div>{copyright_desc}</div>

      <hr />
      <div className="text-heading-l">{disclaimer}</div>
      <div>{disclaimer_desc}</div>
    </div>
  );
};

const Accessibility: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <SquareTitle title="Accessibility" />
      <div className="text-heading-l">Web Accessibility Conformance</div>

      <div className="text-body-m">
        We are committed to ensuring that our website conforms to the World Wide
        Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0
        Level AA requirements to the maximum extent possible. However, as our
        website contains considerable multi-media contents from third parties,
        it is not possible to incorporate all Level AA accessibility
        requirements in all of them. Nonetheless, the multi-media contents are
        so located as not to affect the accessibility of significant contents in
        our website. Should you have any enquires or comments on its
        accessibility, please contact us by phone or email.
      </div>
      <div>
        Telephone number: <Link>(852) 2180 9101</Link> <br />
        Email address: <Link>enquiry@hkctc.gov.hk</Link>
      </div>
    </div>
  );
};

const Privacy: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Privacy Policy" />
      </div>
      <div className="text-heading-l">Policy Statement</div>

      <div className="text-body-m">
        The HKCTC is committed to ensuring that all personal data are handled in
        accordance with the provisions of the Personal Data (Privacy) Ordinance.
        The Commission sets procedures to ensure good practices within the
        Commission on the acquisition, collection, recording, storage,
        disclosure, correction, erasure and communication of personal data kept
        by the Commission on its employees and members of the public. The
        Commission's policy and general practices are summarized as follows:
      </div>

      <ul className="flex flex-col gap-[24px] list-disc ml-6">
        <li>
          to collect adequate, but not excessive, personal data by lawful and
          fair means only for lawful purposes directly related to the functions
          or activities of this Commission;
        </li>
        <li>
          to take all reasonably practicable steps to ensure that the personal
          data collected or retained are accurate, having regard to the purposes
          for which they are to be used;
        </li>

        <li>
          to take all reasonably practicable steps to ensure that a person can
          be informed of the kinds of personal data that the Commission holds,
          the purposes for which the data are to be used, whether the person is
          obliged to supply the data, and the consequences of not supplying the
          data;
        </li>
        <li>
          to erase personal data which are no longer necessary for the purposes
          for which they are to be used;
        </li>

        <li>
          to use the personal data collected only for purposes or directly
          related purposes for which the data were to be used at the time of
          collection, unless the individual concerned has given prior consent
          for a change of use or such use is permitted by law;
        </li>

        <li>
          to take all reasonably practicable steps to ensure that personal data
          held are protected against unauthorised or accidental access,
          processing, erasure or other use; and
        </li>

        <li>
          to allow persons to access and correct personal data of which they are
          the data subjects and process any such access/correction requests in a
          manner permitted or required by law. Photocopies of the data requested
          will only be provided upon payment of charges. The requester will be
          advised in advance of the charges.
        </li>
      </ul>

      <div className="italic">
        For enquiry, please contact us at <Link>enquiry@hkctc.gov.hk</Link>.
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Contact Us" />
      </div>
      <div className="text-heading-l flex flex-row items-center">
        <img
          className="w-[24px] h-[24px] h-auto mr-[16px]"
          src={process.env.PUBLIC_URL + `/assets/icons/Location.svg`}
          alt={"contact"}
        />
        Location
      </div>

      <div>
        Secretariat, Hong Kong Council for Testing and Certification <br />
        Innovation and Technology Commission <br />
        Units 801-04, 8/F, The Hub, 23 Yip Kan Street, Wong Chuk Hang, Hong Kong
      </div>

      <div className="font-semibold">Opening Hours:</div>
      <div>
        <span className="underline">Monday to Friday</span> <br />
        8:45 am - 12:30 pm <br />
        1:30 pm - 6:00 pm
      </div>
      <div>Closed on Saturdays, Sundays and public holidays</div>

      <hr />

      <div className="text-heading-l flex flex-row items-center">
        <img
          className="w-[24px] h-[22px] h-auto mr-[16px]"
          src={process.env.PUBLIC_URL + `/assets/icons/telephone.svg`}
          alt={"contact"}
        />
        Telephone/ Fax
      </div>

      <div>
        Tel: <b>(852) 2180 9101</b> <br />
        Fax: <b>(852) 3691 8655</b>
      </div>

      <hr />

      <div className="text-heading-l flex flex-row items-center">
        <img
          className="w-[24px] h-[22px] h-auto mr-[16px]"
          src={process.env.PUBLIC_URL + `/assets/icons/mail.svg`}
          alt={"contact"}
        />
        Email
      </div>

      <div>
        Email Adress: <Link>enquiry@hkctc.gov.hk</Link>
      </div>
    </div>
  );
};

export enum ABOUT_SIDE_MODULE {
  IMPORTANT_NOTE = "Important Notices",
  ACCESSIBILITY = "Accessibility",
  PRIVACY = "Privacy Policy",
  CONTACT = "Contact Us",
  RELATED_SITE = "Related Site",
}

const topBanner = "aboutSite/banner.png";
const componentMapping: Record<string, React.ReactNode> = {
  [ABOUT_SIDE_MODULE.IMPORTANT_NOTE]: <ImportantNote />,
  [ABOUT_SIDE_MODULE.ACCESSIBILITY]: <Accessibility />,
  [ABOUT_SIDE_MODULE.PRIVACY]: <Privacy />,
  [ABOUT_SIDE_MODULE.CONTACT]: <Contact />,
};

const directoryItems: DirectorySidebarItems[] = [
  {
    label: ABOUT_SIDE_MODULE.IMPORTANT_NOTE,
    labelCN: "重要聲明",
    value: ABOUT_SIDE_MODULE.IMPORTANT_NOTE,
  },
  {
    label: ABOUT_SIDE_MODULE.ACCESSIBILITY,
    labelCN: "無障礙訪問",
    value: ABOUT_SIDE_MODULE.ACCESSIBILITY,
  },
  {
    label: ABOUT_SIDE_MODULE.PRIVACY,
    labelCN: "隱私政策",
    value: ABOUT_SIDE_MODULE.PRIVACY,
  },
  {
    label: ABOUT_SIDE_MODULE.CONTACT,
    labelCN: "聯絡我們",
    value: ABOUT_SIDE_MODULE.CONTACT,
  },
];

export const AboutSite: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPC, language } = useSettings();
  const isEN = language === Language.EN;
  const page_text = isEN ? multilingual.en : multilingual.cn;
  const { home, about_site } = page_text;
  const queryParams = new URLSearchParams(location.search);

  const initialSection = queryParams.get("section") ?? "";

  const initialParam: ABOUT_SIDE_MODULE = directoryItems.some(
    (i) => i.value === (initialSection as ABOUT_SIDE_MODULE)
  )
    ? (initialSection as ABOUT_SIDE_MODULE)
    : ABOUT_SIDE_MODULE.IMPORTANT_NOTE;

  const [activeItem, setActiveItem] = useState(initialParam);

  const handleChangeDirectorySidebarItems = (activatedItems: String): void => {
    setActiveItem(activatedItems as ABOUT_SIDE_MODULE);

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    navigate(`?am=${activatedItems}`);
  };

  useEffect(() => {
    if (initialParam !== activeItem) {
      setActiveItem(initialParam);
      navigate(`?am=${initialParam}`);
    }
  }, [initialParam, navigate]);

  const findObj = directoryItems.find((i) => i.value === activeItem);
  const breadcrumbItems = [
    { label: home, href: "/hkctc" },
    { label: about_site, href: "/about-the-site" },
    {
      label: (isEN ? findObj?.label : findObj?.labelCN) ?? "",
    },
  ];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={topBanner} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              {directoryItems.length > 0 && (
                <DirectorySidebar
                  directorySidebarItems={directoryItems}
                  activatedItems={activeItem}
                  setActivatedItems={handleChangeDirectorySidebarItems}
                />
              )}
            </div>
            <div className="flex-1">{componentMapping[activeItem]}</div>
          </div>
        ) : (
          <div className="p-[24px] flex flex-col gap-[24px]">
            <div>
              {directoryItems.length > 0 && (
                <DirectorySidebar
                  directorySidebarItems={directoryItems}
                  activatedItems={activeItem}
                  setActivatedItems={handleChangeDirectorySidebarItems}
                />
              )}
            </div>
            <div>{componentMapping[activeItem]}</div>
          </div>
        )}
      </div>
    </div>
  );
};
