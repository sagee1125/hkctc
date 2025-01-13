import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DirectorySidebar,
  BannerPhotoBox,
  Breadcrumb,
  SquareTitle,
  Link,
} from "../../components";

const ImportantNote: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Important Notices" />
      </div>
      <div className="bg-[#EEEEEA]">
        <div className="px-[42px] py-[36px]">
          <p className="text-body-m">
            This web site is produced and maintained by the Hong Kong Council
            for Testing and Certification (HKCTC), the Innovation and Technology
            Commission (the Commission) of the Hong Kong Special Administrative
            Region Government of the People's Republic of China.
          </p>
        </div>
      </div>

      <div>
        The webpages on HKCTC are viewable on most modern browsers. HKCTC
        follows the HTML5 standard and does not make use of browser-specific
        features. However, each computer system displays fonts slightly
        differently and some users may have adjusted the default font size and
        screen resolution on their computers. As a result, the webpages on HKCTC
        may be displayed differently on computer systems with different
        configurations.
      </div>

      <div>
        The webpages on HKCTC are best viewed with the latest version of Edge,
        Mozilla Firefox, Safari or Google Chrome. To update your browsers,
        please visit one of the websites listed below:
      </div>

      <ul className="flex flex-col gap-[24px] list-disc ml-6">
        <li>
          <Link outerLink="https://www.microsoft.com/en-us/edge/?form=MA13FJ">
            Edge Product Home Page
          </Link>
        </li>
        <li>
          <Link outerLink="https://www.mozilla.org/en-US/firefox/?v=c&utm_source=www.mozilla.org&utm_medium=download_button&utm_campaign=firefox_page&utm_content=downloader_email_form_experiment_vc">
            Mozilla Firefox Product Home Page
          </Link>
        </li>
        <li>
          <Link outerLink="https://www.apple.com/safari/">
            Safari Product Home Page
          </Link>
        </li>
        <li>
          <Link outerLink="https://www.google.com/intl/en/chrome/">
            Google Chrome Product Home Page
          </Link>
        </li>
      </ul>

      <div>
        Please download the latest version of <Link>Acrobat Reader</Link> to
        view and print the documents which are in Portable Document Format
        (PDF).
      </div>
      <hr />
      <div className="text-heading-l">Copyright Notice</div>
      <div>
        The content available on this website, including but not limited to all
        text, graphics, drawings, diagrams, photographs and compilation of data
        or other materials are protected by copyright. The Government of the
        Hong Kong Special Administrative Region is the owner of all copyright
        works contained in this website. The information or part of it may be
        re-disseminated or reproduced, provided the source of the information is
        acknowledged and that the re-dissemination or reproduction is for a
        non-commercial purpose.
      </div>

      <hr />
      <div className="text-heading-l">Disclaimer</div>
      <div>
        Although extreme care has been taken to ensure that the information
        provided on our website is accurate and up-to-date, the HKCTC does not
        warrant that all information or any part thereof provided is accurate in
        all respects. The HKCTC shall not be held liable for any loss or damage
        suffered as a result of any use or reliance on any of the information
        provided in its website.
      </div>
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

      <div>
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
        8:45 am – 12:30 pm <br />
        1:30 pm – 6:00 pm
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

enum ABOUT_SIDE_MODULE {
  IMPORTANT_NOTE = "Important Notices",
  ACCESSIBILITY = "Accessibility",
  PRIVACY = "Privacy Policy",
  CONTACT = "Contact Us",
}

const topBanner = "aboutSite/banner.png";
const componentMapping: Record<string, React.ReactNode> = {
  [ABOUT_SIDE_MODULE.IMPORTANT_NOTE]: <ImportantNote />,
  [ABOUT_SIDE_MODULE.ACCESSIBILITY]: <Accessibility />,
  [ABOUT_SIDE_MODULE.PRIVACY]: <Privacy />,
  [ABOUT_SIDE_MODULE.CONTACT]: <Contact />,
};

export const AboutSite: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  let sidebarActivated = searchParams.get("am") as ABOUT_SIDE_MODULE;

  const directoryItems = [
    ABOUT_SIDE_MODULE.IMPORTANT_NOTE,
    ABOUT_SIDE_MODULE.ACCESSIBILITY,
    ABOUT_SIDE_MODULE.PRIVACY,
    ABOUT_SIDE_MODULE.CONTACT,
  ];
  console.log(
    sidebarActivated,
    directoryItems,
    directoryItems.includes(sidebarActivated)
  );
  if (!directoryItems.includes(sidebarActivated)) {
    sidebarActivated = ABOUT_SIDE_MODULE.IMPORTANT_NOTE;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "About the Site" },
  ];

  const [activeItem, setActiveItem] = useState(sidebarActivated);

  const handleChangeDirectorySidebarItems = (activatedItems: String): void => {
    setActiveItem(activatedItems as ABOUT_SIDE_MODULE);

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    searchParams.set("am", activeItem);
    // Update the URL with new Module
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  }, [activeItem, location.pathname, navigate, searchParams]);

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox src={topBanner} />
      <div id="breadcrumb">
        <Breadcrumb items={breadcrumbItems} />
      </div>
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
    </div>
  );
};
