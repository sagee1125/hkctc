import React, { useState } from "react";
import classNames from "classnames";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import {
  Accordion,
  fullContainer,
  maxPCContainer,
  Breadcrumb,
  SquareTitle,
  activatedButtonStyle,
  normalButtonStyle,
  MediaTemplateWithDialog,
  type MediaTemplateWithDialogProps,
  InternalBackButton,
  maxMobileContainer,
} from "../../../../components";
import { useSettings } from "../../../../context";
import { Drawer } from "@mui/material";

const manpowerDevelopmentAwardees = [
  "Accredited Certification International Limited",
  "Agriculture, Fisheries and Conservation Department - Tai Lung Veterinary Laboratory",
  "ALS Technichem (HK) Pty Limited",
  "BSI Pacific Limited",
  "Castco Testing Centre Limited",
  "Civil Engineering and Development Department - Public Works Laboratories",
  "CMA Industrial Development Foundation Ltd",
  "Drainage Services Department - Sewage Services Branch Operation Section Laboratory and Laboratory Services Sub-division - Shatin Central Laboratory",
  "Fugro Technical Services Limited and Fugro Certification Services Limited",
  "Hong Kong Baptist University - Chemical Testing Services",
  "Hong Kong Police Force - Identification Bureau",
  "Hong Kong Productivity Council - Green Living Laboratory",
  "Hospital Authority - Medical Equipment Calibration Laboratory",
  "Housing Department - Materials Testing Laboratory",
  "Innovation and Technology Commission - Standards and Calibration Laboratory",
  "Intertek Testing Services Hong Kong Limited",
  "Lee Kum Kee Company Limited - Testing Laboratory",
  "Material Tech Company Limited",
  "MINSEN Testing (Hong Kong) Limited and MINSEN Certification (Asia) Limited",
  "PIT Limited",
  "QIMA Limited and QIMA Testing (HK) Limited",
  "Quality Pro Test-Consult Limited",
  "SGS Hong Kong Limited",
  "The Hong Kong Standards and Testing Centre Ltd. and The Hong Kong Certification Centre Ltd.",
  "The Lab (Asia) Limited",
  "TÜV Rheinland Hong Kong Limited",
  "TUV SUD Hong Kong Limited",
  "Xcelom Limited",
];

const timeLine: Array<{ date: string; event: string }> = [
  {
    date: "7 Jun 2021",
    event: "Application open",
  },
  {
    date: "31 Aug 2021, 6:00 pm",
    event: "Application close",
  },
  {
    date: "Sep - Nov 2021",
    event: "Application Assessment",
  },
  {
    date: "Oct 2021",
    event:
      "Notification for interviews to Excellent T&C Professional Award shortlisted applicants",
  },
  {
    date: "Nov 2021",
    event: "Announcement of award results",
  },
  {
    date: "Dec 2021",
    event: "Award presentation ceremony",
  },
];

const juniorGroup: Array<{ one: string; two: string; three: string }> = [
  {
    one: "Miss LAW Tsz-yen",
    two: "Associate Veterinary Technologist",
    three:
      "Agriculture, Fisheries and Conservation Department - Tai Lung Veterinary Laboratory (Veterinary Laboratory Division)",
  },
  {
    one: "Miss LIN Yuet-ching",
    two: "Chemical Analyst I",
    three: "The Hong Kong Jockey Club - Racing Laboratory",
  },
  {
    one: "Miss LO Man-Ki",
    two: "Associate Veterinary Technologist",
    three:
      "Agriculture, Fisheries and Conservation Department - Tai Lung Veterinary Laboratory (Veterinary Laboratory Division)",
  },
  {
    one: "Mr MAK Tsz-shing, Stephen",
    two: "Chemist",
    three: "Bureau Veritas Hong Kong Limited",
  },
  {
    one: "Mr WONG Chi-ho",
    two: "Assistant Technical Executive",
    three: "SGS Hong Kong Limited",
  },
  {
    one: "Dr WONG Fai, George",
    two: "Chemist",
    three: "Government Laboratory",
  },
  {
    one: "Miss WONG Hoi-ki",
    two: "Senior Technical Officer",
    three: "Castco Testing Centre Limited",
  },
];

const seniorGroup: Array<{ one: string; two: string; three: string }> = [
  {
    one: "Mr CHAN Kang-chiu",
    two: "Assistant Manager",
    three: "Fugro Technical Services Limited",
  },
  {
    one: "Ms CHOW Hoi-yi",
    two: "Assistant Manager",
    three: "The Hong Kong Standards and Testing Centre Ltd",
  },
  {
    one: "Dr KWOK Ying",
    two: "Senior Chemist",
    three: "The Hong Kong Jockey Club - Racing Laboratory",
  },
  {
    one: "Ms LAU Hazel",
    two: "Lead Project Engineer",
    three: "UL International Limited",
  },
  {
    one: "Ms MAK Chui-wan, Cherie",
    two: "Senior Certification Officer",
    three: "SGS Hong Kong Limited",
  },
  {
    one: "Ms NG Carmen",
    two: "Assistant Technical Services Manager",
    three: "SGS Hong Kong Limited",
  },
  {
    one: "Miss NG Hoi-ying",
    two: "Assistant Technical Services Manager",
    three: "SGS Hong Kong Limited",
  },
  {
    one: "Mr NIP Ming-fung, Melvin",
    two: "Manager",
    three: "Intertek Testing Services Hong Kong Limited",
  },
  {
    one: "Dr TAN Tung-fai, Tony",
    two: "Chief Inspector, Forensic Fingerprint Laboratory",
    three: "Hong Kong Police Force - Identification Bureau",
  },
  {
    one: "Dr TAN Tung-fai, Tony",
    two: "Chief Inspector, Forensic Fingerprint Laboratory",
    three: "Hong Kong Police Force - Identification Bureau",
  },
  {
    one: "Mr TANG Pak-yau",
    two: "Assistant Laboratory Manager",
    three: "Chow Sang Sang Precious Metal Laboratory",
  },
  {
    one: "Mr TANG Pak-yau",
    two: "Assistant Laboratory Manager",
    three: "Chow Sang Sang Precious Metal Laboratory",
  },
  {
    one: "Dr WONG Kin-sing",
    two: "Biochemist",
    three: "The Hong Kong Jockey Club - Racing Laboratory",
  },
  {
    one: "Mr YU Shing-lun, Gary",
    two: "Senior Manager",
    three: "Intertek Testing Services Hong Kong Limited",
  },
];

const applicationData: Array<{
  title: string;
  link: string;
}> = [
  {
    title: "Guidance Notes",
    link: "/en/event/mpaward/GuidanceNotes.pdf",
  },
  {
    title:
      "Application Form - Testing and Certification Manpower Development Corporate Award (Form T&C MP01)",
    link: "/en/event/mpaward/MP01.pdf",
  },
  {
    title:
      "Application Form - Excellent Testing and Certification Professional Award (Form T&C MP02)",
    link: "/en/event/mpaward/MP02.pdf",
  },
];

const publicationData: MediaTemplateWithDialogProps[] = [
  {
    title: "Pamphlet",
    maskIcon: "PDF.png",
    date: "",
    mediaType: MEDIA_TYPE.PDF,
    mediaLink: "/en/event/mpaward/pamphlet.pdf",
    mediaDomain: "hkctc",
  },
  {
    title: "Congratulatory Messages for the Award Scheme",
    maskIcon: "VIDEO.png",
    date: "",
    mediaType: MEDIA_TYPE.VIDEO,
    mediaLink: "/videos/en/MPAward_Congratulatory_Video-EN.mp4",
    mediaDomain: "hkctc",
  },
  {
    title: "Highlights of the Ceremony",
    maskIcon: "VIDEO.png",
    date: "",
    mediaType: MEDIA_TYPE.VIDEO,
    mediaLink: "/videos/tc/MPAward_Highlight.mp4",
    mediaDomain: "hkctc",
  },
  {
    title: "Press Release",
    maskIcon: "PRESS.png",
    date: "22 December 2021",
    imagePath: "press_release.png",
    mediaType: MEDIA_TYPE.NEW_PAGE,
    mediaLink:
      "https://www.info.gov.hk/gia/general/202112/22/P2021122200211.htm",
  },
];

export const AwardScheme21to22: React.FC = () => {
  const [locateAnchor, setLocateAnchor] = useState<number>(0);
  const [activeButtonTwo, setActiveButtonTwo] = useState<string>(
    "Junior Professional Sub-group"
  );
  const { isPC } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const buttonTwoMap: Record<string, React.ReactNode> = {
    "Junior Professional Sub-group": (
      <div className={isPC ? "" : "overflow-x-auto"}>
        {juniorGroup.map((og, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr,1fr,2fr] justify-items-start content-center text-body-m border-b last:border-0"
          >
            {[og.one, og.two, og.three].map((c, key) => (
              <p
                key={key}
                className={`py-[15px] px-[10px] flex items-center ${
                  isPC ? "h-[102px]" : "min-w-[120px]"
                }`}
              >
                {c}
              </p>
            ))}
          </div>
        ))}
      </div>
    ),
    "Senior Professional Sub-group": (
      <div className={isPC ? "" : "overflow-x-auto"}>
        {seniorGroup.map((og, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr,1fr,2fr] justify-items-start content-center text-body-m border-b last:border-0"
          >
            {[og.one, og.two, og.three].map((c, key) => (
              <p
                key={key}
                className={`py-[15px] px-[10px] flex items-center ${
                  isPC ? "h-[102px]" : "min-w-[100px]"
                }`}
              >
                {c}
              </p>
            ))}
          </div>
        ))}
      </div>
    ),
  };

  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events & Promotions", href: "/events-promotion" },
    { label: "Events", href: "/events-promotion" },
    {
      label: "T&C Manpower Development Award Scheme",
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    { label: "T&C Manpower Development Award Scheme 2021-2022" },
  ];

  const directoryAnchorIds: Array<{ id: string; title: string }> = [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "supporting_organizations",
      title: "Supporting Organizations",
    },
    {
      id: "awardees",
      title: "Awardees",
    },
    {
      id: "award_presentation_ceremony",
      title: "Award Presentation Ceremony",
    },
    {
      id: "timeline",
      title: "Timeline",
    },
    {
      id: "application",
      title: "Application",
    },
    {
      id: "publications",
      title: "Publications",
    },
  ];

  const supportingOrg: Array<{
    title: string;
    urlPath: string;
  }> = [
    {
      title: "ACML",
      urlPath: "ACML.png",
    },
    {
      title: "HKICA",
      urlPath: "HKICA.png",
    },
    {
      title: "HKIE",
      urlPath: "HKIE.png",
    },
    {
      title: "HKTIC",
      urlPath: "HKTIC.png",
    },
    {
      title: "HKAML",
      urlPath: "HKAML.png",
    },
    {
      title: "QF",
      urlPath: "QF.png",
    },
  ];
  const pcSidebar = (
    <div id="sticky-container" className="flex flex-col sticky top-[20px]">
      {directoryAnchorIds.map((anchor, index) => {
        const isActivated = index === locateAnchor;
        const { title, id } = anchor;

        const borderStyle = isActivated
          ? "border-newPrimary z-10"
          : "border-[#E0E0E0]";
        const fontStyle = isActivated
          ? "text-heading-m bg-newPrimary text-white"
          : "text-heading-m text-[#AAAAAA]";

        const marginStyle = index === 0 ? "" : "-mt-[2px]";
        return (
          <div
            className={classNames(
              "border-2 p-[24px] text-heading-m cursor-pointer",
              borderStyle,
              fontStyle,
              marginStyle
            )}
            onClick={() => {
              const scrollElement = document.getElementById(id);
              if (scrollElement) {
                setLocateAnchor(index);
                scrollElement.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
          >
            {title}
          </div>
        );
      })}
    </div>
  );

  const mobileSidebar = (
    <>
      <button
        className="!text-highlight-m text-white fixed bottom-[24px] right-[24px] z-50"
        style={{
          background: "#233F55",
          color: "white",
          border: "2px solid #F7F7F5",
          padding: "16px 24px 16px 24px",
          fontSize: "16px",
          lineHeight: "28px",
          fontWeight: 600,
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Content List
      </button>

      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "auto",
            padding: "24px",
          },
        }}
      >
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-row justify-between items-center pb-[24px]">
            <p className="text-heading-m text-newPrimary">Content List</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <path
                d="M18 18L10 10M10 10L2 2M10 10L18 2M10 10L2 18"
                stroke="#233F55"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-[0]">
            {directoryAnchorIds.map((anchor, index) => {
              const isActivated = index === locateAnchor;
              const { title, id } = anchor;

              const borderStyle = isActivated
                ? "border-newPrimary z-10"
                : "border-[#E0E0E0]";
              const fontStyle = isActivated
                ? "text-heading-m bg-newPrimary text-white"
                : "text-heading-m text-[#AAAAAA]";

              const marginStyle = index === 0 ? "" : "-mt-[2px]";
              return (
                <div
                  className={classNames(
                    "border-2 p-[24px] text-heading-m cursor-pointer",
                    borderStyle,
                    fontStyle,
                    marginStyle
                  )}
                  onClick={() => {
                    const scrollElement = document.getElementById(id);
                    if (scrollElement) {
                      setLocateAnchor(index);
                      scrollElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }
                  }}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );
  const content = (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="T&C Manpower Development Award Scheme 2021-2022" />
      <p className="text-highlight-l text-[#666666]">
        [Results announced on 22 December 2021]
      </p>
      <p className="text-heading-l" id="introduction">
        Introduction
      </p>
      <p className="text-body-m">
        HKCTC launches the first “Testing and Certification Manpower Development
        Award Scheme” (the Award Scheme) in 2021 to recognise testing and
        certification (T&C) bodies which attach great importance to talent
        training and manpower development, as well as to encourage T&C
        practitioners to strive for improvement and professional development.
      </p>
      <p className="text-heading-l" id="supporting_organizations">
        Supporting Organizations
      </p>
      <div className={`grid grid-cols-${isPC ? 3 : 2} gap-[48px] p-[24px]`}>
        {supportingOrg.map((org, index) => {
          const { title, urlPath } = org;
          return (
            <div
              key={index}
              className={`${isPC ? "w-[200px] h-[70px]" : "w-full h-auto"}`}
            >
              <img
                className="object-contain"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/eventsLanding/awardScheme/" +
                  urlPath
                }
                alt={title}
              />
            </div>
          );
        })}
      </div>
      <p className="text-heading-l" id="awardees">
        Awardees
      </p>
      <Accordion
        title="Testing and Certification Manpower Development Corporate Awardees"
        details={
          <div>
            {manpowerDevelopmentAwardees.map((a, i) => {
              return (
                <div key={i} className="w-full">
                  <span className="w-[50%] text-right">{`${i + 1}. `}</span>
                  {a}
                </div>
              );
            })}
            <br />
            <p className="text-[#4B4746]">
              Corporate Awardees Receiving Special Commendation for Their
              Commitment to Testing and Certification Practitioners’ Training
              and Development
            </p>
            <br />
            <p>
              1. The Hong Kong Jockey Club – Racing Laboratory <br />
              2. UL International Limited
            </p>
          </div>
        }
      />

      <Accordion
        title="Excellent Testing and Certification Professional Awardees"
        details={
          <>
            <div className="flex flex-wrap gap-[8px] mb-[16px]">
              {[
                "Junior Professional Sub-group",
                "Senior Professional Sub-group",
              ].map((b, i) => {
                const isActivated = activeButtonTwo === b;
                return (
                  <button
                    key={i}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveButtonTwo(b);
                    }}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
            <div className="text-body-m">{buttonTwoMap[activeButtonTwo]}</div>
          </>
        }
      />

      <p className="text-heading-l" id="award_presentation_ceremony">
        Award Presentation Ceremony
      </p>
      <div className="flex items-center">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/21-ceremony-1.png"
          }
          className="object-contain"
          style={{ height: "auto", width: "100%" }}
          alt="Ceremony1"
        />
      </div>

      <div className="grid grid-cols-2 gap-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-2.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony2"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-3.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony3"
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[16px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m">
          The award presentation ceremony of the “Testing and Manpower
          Development Award Scheme 2021-22”, was successfully held on 22
          December 2021 at the Hong Kong Convention and Exhibition Centre. The
          Secretary for Innovation and Technology, Mr Alfred Sit, kindly
          attended as the Guest of Honour. Apart from members of the HKCTC and
          its Manpower Development Panel, the event was also attended by the
          chairmen and members of the two assessment panels as well as
          representatives of the supporting organisations. They all shared the
          joy of awardees.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-4.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-5.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          Prof. Albert Yu, HKCTC Chairman, <br />
          delivers the Welcome Speech.
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          The Secretary for Innovation and Technology, Mr Alfred Sit, delivers
          the Opening Remarks.
        </p>
      </div>

      <div className="w-full flex flex-row gap-[16px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m">
          At the ceremony, 16 testing and certification (T&C) practitioners,
          comprising 6 junior professionals and 10 middle management personnel,
          were presented with the “Excellent Testing and Certification
          Professional Award”. Besides, 30 T&C organisations received the
          “Testing and Certification Manpower Development Corporate Award”,
          where two of them were given special commendation for their
          exceptional commitment to T&C practitioners’ training and development.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-6.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-7.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          (From left) <br />
          Ms Rebecca Pun, Commissioner for Innovation and Technology, Mr Alfred
          Sit, Secretary for Innovation and Technology, and Prof. Albert Yu,
          HKCTC Chairman, attended the ceremony to share the joy of awardees.
        </p>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          Group photo of Members of HKCTC and Panel on Manpower Development and
          Officiating Guests
        </p>

        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-8.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-9.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          Group photo of awardees of “Excellent Testing and Certification
          Professional Award”, Chairman and Members of Assessment Panel, and
          Officiating Guests
        </p>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          Group photo of awardees of “Testing and Certification Manpower
          Development Corporate Award”, Chairman and Members of Assessment
          Panel, and Officiating Guests
        </p>

        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-10.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-11.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          The Hong Kong Jockey Club – Racing Laboratory and UL International
          Limited were awarded the Special Commendation of “Testing and
          Certification Manpower Development Corporate Award”
        </p>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          The Hong Kong Jockey Club – Racing Laboratory and UL International
          Limited were awarded the Special Commendation of “Testing and
          Certification Manpower Development Corporate Award”
        </p>
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-12.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <div />
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          Awardees of “Excellent Testing and Certification Professional Award”
          shared their experience and insights at the ceremony
        </p>
      </div>

      <p className="text-heading-l" id="timeline">
        Timeline
      </p>
      <div className="w-full grid grid-cols-2 border-2 border-[#E0E0E0]">
        {/* 表头 */}
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          Date
        </div>
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          Event
        </div>
        {/* 数据行 */}
        {timeLine.map((item, index) => {
          const { date, event } = item;
          return (
            <React.Fragment key={index}>
              <div className="text-body-m px-[10px] py-[15px] flex items-center justify-start border-t border-gray-300">
                {date}
              </div>
              <div className="text-body-m px-[10px] py-[15px] flex items-center justify-start border-t border-gray-300">
                {event}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <p className="text-heading-l" id="application">
        Application
      </p>

      <div className="w-full flex flex-col gap-[24px]">
        {applicationData.map((item, index) => {
          const { title, link } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={title}
                maskIcon={"PDF.png"}
                date={""}
                mediaLink={link}
                mediaType={MEDIA_TYPE.PDF}
                mediaDomain={"hkctc"}
                direction={"row"}
              />
            </div>
          );
        })}
      </div>
      <p className="text-heading-l" id="publications">
        Publications
      </p>
      <div className={`w-full grid grid-cols-${isPC ? 2 : 1} gap-[24px]`}>
        {publicationData.map((item, index) => {
          const {
            title,
            imagePath,
            date = "",
            maskIcon,
            mediaType,
            mediaLink,
            mediaDomain,
          } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={date}
                mediaLink={mediaLink}
                mediaType={mediaType}
                mediaDomain={mediaDomain}
                direction={"row"}
                imagePath={"eventsLanding/awardScheme/" + imagePath}
              />
            </div>
          );
        })}
      </div>
      <hr />
      <InternalBackButton
        targetUrl={`/events-promotion?section=${navItemEnum.award_scheme}`}
      />
    </div>
  );
  return (
    <div style={fullContainer}>
      <div className="w-full h-auto bg-white flex items-center justify-center">
        <video
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/mpaward-2021-22-Compressed.mp4"
          }
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full h-full grid grid-cols-[1fr,2fr] pt-[48px] gap-[24px] px-[24px]">
            <div className="px-[24px] min-w-[440px]">{pcSidebar}</div>
            <div className="flex-1">{content}</div>
          </div>
        ) : (
          <div className="px-[24px] pb-[24px] flex flex-col gap-[24px]">
            <div>{mobileSidebar}</div>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
