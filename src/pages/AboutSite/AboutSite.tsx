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
    accessibility: "Accessibility",
    web_accessibility: "Web Accessibility Conformance",
    we_are_committed:
      "We are committed to ensuring that our website conforms to the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 Level AA requirements to the maximum extent possible. However, as our website contains considerable multi-media contents from third parties, it is not possible to incorporate all Level AA accessibility requirements in all of them. Nonetheless, the multi-media contents are so located as not to affect the accessibility of significant contents in our website. Should you have any enquires or comments on its accessibility, please contact us by phone or email.",
    tel: "Telephone number:",
    email: "Email address:",
    email_short: "Email",
    privacy_policy: "Privacy Policy",
    policy_statement: "Policy Statement",
    policy_desc:
      "The HKCTC is committed to ensuring that all personal data are handled in accordance with the provisions of the Personal Data (Privacy) Ordinance. The Commission sets procedures to ensure good practices within the Commission on the acquisition, collection, recording, storage, disclosure, correction, erasure and communication of personal data kept by the Commission on its employees and members of the public. The Commission's policy and general practices are summarized as follows:",
    policy_items: [
      "to collect adequate, but not excessive, personal data by lawful and fair means only for lawful purposes directly related to the functions or activities of this Commission;",
      "to take all reasonably practicable steps to ensure that the personal data collected or retained are accurate, having regard to the purposes for which they are to be used;",
      "to take all reasonably practicable steps to ensure that a person can be informed of the kinds of personal data that the Commission holds, the purposes for which the data are to be used, whether the person is obliged to supply the data, and the consequences of not supplying the data;",
      "to erase personal data which are no longer necessary for the purposes for which they are to be used;",
      "to use the personal data collected only for purposes or directly related purposes for which the data were to be used at the time of collection, unless the individual concerned has given prior consent for a change of use or such use is permitted by law;",
      "to take all reasonably practicable steps to ensure that personal data held are protected against unauthorised or accidental access, processing, erasure or other use; and",
      "to allow persons to access and correct personal data of which they are the data subjects and process any such access/correction requests in a manner permitted or required by law. Photocopies of the data requested will only be provided upon payment of charges. The requester will be advised in advance of the charges.",
    ],
    enquiry: (
      <>
        For enquiry, please contact us at{" "}
        <a href="mailto:enquiry@hkctc.gov.hk" className="underline text-[#00E]">
          enquiry@hkctc.gov.hk
        </a>
        .
      </>
    ),
    contact: "Contact Us",
    location: "Location",
    fax: "Fax:",
    location_detail: [
      "Secretariat, Hong Kong Council for Testing and Certification",
      "Innovation and Technology Commission",
      "Units 801-04, 8/F, The Hub, 23 Yip Kan Street, Wong Chuk Hang, Hong Kong",
    ],
    open_hours: "Opening Hours:",
    closed_on: "Closed on Saturdays, Sundays and public holidays",
    tel_fax: "Telephone/ Fax",
    tel_short: "Tel:",
    mon_to_fri: "Monday to Friday",
    time: ["8:45 am - 12:30 pm", "1:30 pm - 6:00 pm"],
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
    accessibility: "無障礙訪問",
    web_accessibility: "無障礙網頁守則",
    we_are_committed:
      "我們承諾盡力確保本網站符合萬維網聯盟（W3C）《無障礙網頁內容指引》（WCAG）2.0 AA級別標準，但本網站載有大量由第三方提供的多媒體內容，要規定這類內容全部符合所有AA級別標準並不可能。儘管如此，這類多媒體內容會擺放在特定位置，確保不會阻礙用戶接觸本網站所載的重要內容。如對本網站在使用上有任何查詢或意見，請致電或發送電郵與我們聯絡。",
    tel: "電話號碼：",
    email: "電郵地址：",
    email_short: "電郵",
    privacy_policy: "隱私政策",
    policy_statement: "私隱政策聲明",
    policy_desc:
      "香港檢測和認證局致力確保按照《個人資料(私隱)條例》的規定，處理所有個人資料。本署就有關獲取、收集、記錄、保存、披露、更改、刪除和傳遞所保存的僱員及市民個人資料制定程序，以確保採取恰當的做法。本署就處理個人資料所採取的政策及守則概述如下：",
    policy_items: [
      "以合法和公平的方法收集足夠但不超乎適度的個人資料，而該等資料必須只供用作直接與本署職能及活動有關的合法用途；",
      "在顧及個人資料所作用途的同時，採取一切合理而切實可行的步驟，確保所收集或保存的資料準確無誤；",
      "採取一切合理而切實可行的步驟，確保任何人均可得知本署所持有個人資料的類別、有關資料所作的用途、是否有責任提供該等資料，以及拒絕提供資料的後果；",
      "刪除不再需要作原有用途的個人資料；",
      "除非事先獲得有關人士的同意改變資料的用途，或該等用途得到法律准許，否則本署只會把所收集的個人資料用於收集資料時所述明的用途，或與此直接有關的用途；",
      "採取一切合理而切實可行的步驟，確保個人資料受到保障，不會在未經許可或意外的情況下被他人查閱、處理、刪除或作其他用途；",
      "准許有關資料的當事人查閱和改正其個人資料，並會按法律准許或規定的方式，處理有關查閱／改正個人資料的要求。本署在收取費用後，便會向申請人發出所需資料的影印本，並會事先通知申請人所需繳交的費用。",
    ],
    enquiry: (
      <>
        如有查詢，請電郵至
        <a href="mailto:enquiry@hkctc.gov.hk" className="underline text-[#00E]">
          enquiry@hkctc.gov.hk
        </a>
        與我們聯絡。
      </>
    ),
    contact: "聯絡我們",
    location: "地址",
    location_detail: [
      "創新科技署",
      "香港檢測和認證局秘書處",
      "香港黃竹坑業勤街23號 The Hub 8樓801-04室",
    ],
    fax: "傳真：",
    open_hours: "辦公時間：",
    closed_on: "星期六、日及公衆假期休息",
    tel_fax: "電話/傳真",
    tel_short: "電話：",
    mon_to_fri: "星期一至五",
    time: ["上午8時45分至下午12時30分", "下午1時30分至6時正"],
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
  const { language } = useSettings();

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { accessibility, web_accessibility, we_are_committed, tel, email } =
    page_text;

  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <SquareTitle title={accessibility} />
      <div className="text-heading-l">{web_accessibility}</div>

      <div className="text-body-m text-justify">{we_are_committed}</div>
      <div>
        {tel} <Link>(852) 2180 9101</Link> <br />
        {email} <a href="mailto:enquiry@hkctc.gov.hk">enquiry@hkctc.gov.hk</a>
      </div>
    </div>
  );
};

const Privacy: React.FC = () => {
  const { language } = useSettings();

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    privacy_policy,
    policy_statement,
    policy_desc,
    policy_items,
    enquiry,
  } = page_text;

  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <SquareTitle title={privacy_policy} />
      <div className="text-heading-l text-justify">{policy_statement}</div>

      <div className="text-body-m">{policy_desc}</div>

      <ul className="flex flex-col gap-[24px] list-disc ml-6 text-justify">
        {policy_items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="italic text-justify">{enquiry}</div>
    </div>
  );
};

const Contact: React.FC = () => {
  const { language } = useSettings();

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    contact,
    email,
    email_short,
    location,
    fax,
    location_detail,
    open_hours,
    closed_on,
    tel_fax,
    tel_short,
    mon_to_fri,
    time,
  } = page_text;
  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <SquareTitle title={contact} />
      <div className="text-heading-l flex flex-row items-center">
        <img
          className="w-[24px] h-[24px] h-auto mr-[16px]"
          src={process.env.PUBLIC_URL + `/assets/icons/Location.svg`}
          alt={"contact"}
        />
        {location}
      </div>

      <div>
        {location_detail.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>

      <div className="font-semibold">{open_hours}</div>
      <div>
        <p className="underline">{mon_to_fri}</p>
        {time.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
      <div>{closed_on}</div>

      <hr />

      <div className="text-heading-l flex flex-row items-center">
        <img
          className="w-[24px] h-[22px] h-auto mr-[16px]"
          src={process.env.PUBLIC_URL + `/assets/icons/telephone.svg`}
          alt={"contact"}
        />
        {tel_fax}
      </div>

      <div>
        {tel_short} <b>(852) 2180 9101</b> <br />
        {fax} <b>(852) 3691 8655</b>
      </div>

      <hr />

      <div className="text-heading-l flex flex-row items-center">
        <img
          className="w-[24px] h-[22px] h-auto mr-[16px]"
          src={process.env.PUBLIC_URL + `/assets/icons/mail.svg`}
          alt={"contact"}
        />
        {email_short}
      </div>

      <div>
        {email}{" "}
        <a href="mailto:enquiry@hkctc.gov.hk" className="underline text-[#00E]">
          enquiry@hkctc.gov.hk
        </a>
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
    navigate(`?section=${activatedItems}`);
  };

  useEffect(() => {
    if (initialParam !== activeItem) {
      setActiveItem(initialParam);
      navigate(`?section=${initialParam}`);
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
