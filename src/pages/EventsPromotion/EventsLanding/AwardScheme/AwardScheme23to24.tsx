import React, { useState } from "react";
import classNames from "classnames";
import { Drawer } from "@mui/material";
import {
  Accordion,
  Breadcrumb,
  InternalBackButton,
  SquareTitle,
  activatedButtonStyle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  normalButtonStyle,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { useSettings } from "../../../../context";

const platinumAwardees: string[] = [
  "Agriculture, Fisheries and Conservation Department - Tai Lung Veterinary Laboratory (Veterinary Laboratory Division)",
  "ALS Technichem (HK) Pty Limited",
  "Bureau Veritas Hong Kong Limited",
  "Chan & Hou Medical Laboratories Limited",
  "Civil Engineering and Development Department - Public Works Laboratories",
  "CMA Industrial Development Foundation Limited",
  "Department of Health - Government Chinese Medicines Testing Institute",
  "Government Laboratory",
  "Hong Kong Police Force - Identification Bureau",
  "Hong Kong Productivity Council - Green Living Laboratory",
  "Hospital Authority - Medical Equipment Calibration Laboratory",
  "Housing Department - Materials Testing Laboratory",
  "Innovation and Technology Commission - Standards and Calibration Laboratory",
  "Intertek Testing Services Hong Kong Ltd.",
  "SGS Hong Kong Limited",
  "The Hong Kong Jockey Club - Racing Laboratory",
  "The Hong Kong Standards and Testing Centre Limited, The Hong Kong Certification Centre Limited and The Hong Kong Inspection Company Limited",
  "The Lab (Asia) Limited",
  "TÜV SÜD Hong Kong Limited",
  "UL International Limited",
];

const goldAwardees: string[] = [
  "Accredited Certification International Limited",
  "Castco Testing Centre Limited",
  "Chow Sang Sang Precious Metal Laboratory",
  "Drainage Services Department - Shatin Central Laboratory and Sewage Services Branch Operation Section Laboratory",
  "Fugro Technical Services Limited",
  "Geotechnics & Concrete Engineering (Hong Kong) Ltd.",
  "Gilson China Limited - Gilson Hong Kong Laboratory",
  "Hong Kong Baptist University - Chemical Testing Services",
  "Material Tech Company Limited",
  "MINSEN Testing (Hong Kong) Limited and MINSEN Certification (Asia) Limited",
  "QIMA Testing (HK) Limited and QIMA Limited",
  "Quality Pro Test-Consult Limited",
  "Sunrise Diagnostic Centre Limited",
  "TÜV Rheinland Hong Kong Limited",
  "Xcelom Limited",
];

const buttonOneMap: Record<string, React.ReactNode> = {
  "Platinum Awardees": (
    <ol>
      {platinumAwardees.map((og, index) => (
        <li key={index}>{og}</li>
      ))}
    </ol>
  ),
  "Gold Awardees": (
    <ol>
      {goldAwardees.map((og, index) => (
        <li key={index}>{og}</li>
      ))}
    </ol>
  ),
};

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

export const AwardScheme23to24: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events & Promotions", href: "/events-promotion" },
    { label: "Events", href: "/events-promotion" },
    {
      label: "T&C Manpower Development Award Scheme",
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    { label: "T&C Manpower Development Award Scheme 2023-2024" },
  ];
  const { isPC } = useSettings();
  const [isOpen, setIsOpen] = useState(false);

  const [locateAnchor, setLocateAnchor] = useState<number>(0);
  const [activeButtonOne, setActiveButtonOne] =
    useState<string>("Platinum Awardees");
  const [activeButtonTwo, setActiveButtonTwo] = useState<string>(
    "Junior Professional Sub-group"
  );

  const buttonTwoMap: Record<string, React.ReactNode> = {
    "Junior Professional Sub-group": (
      <div className={isPC ? "" : "overflow-x-auto"}>
        <div className="grid grid-cols-[1fr,1fr,2fr] bg-[#E0E0E0] text-highlight-m py-[24px]">
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            Name
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            Position
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            Nominating Testing and Certification Body
          </div>
        </div>

        {juniorGroup.map((og, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr,1fr,2fr] justify-items-start content-center text-body-m border-b last:border-0"
          >
            {[og.one, og.two, og.three].map((c, key) => (
              <p
                key={key}
                className={`py-[15px] px-[10px] flex items-center ${
                  isPC ? "h-[102px]" : "min-w-[160px]"
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
        <div className="grid grid-cols-[1fr,1fr,2fr] bg-[#E0E0E0] text-highlight-m py-[24px]">
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            Name
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            Position
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            Nominating Testing and Certification Body
          </div>
        </div>
        {seniorGroup.map((og, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr,1fr,2fr] justify-items-start content-center text-body-m border-b last:border-0"
          >
            {[og.one, og.two, og.three].map((c, key) => (
              <p
                key={key}
                className="py-[15px] px-[10px] flex items-center h-[102px]"
              >
                {c}
              </p>
            ))}
          </div>
        ))}
      </div>
    ),
  };

  const directoryAnchorIds: Array<{ id: string; title: string }> = [
    {
      id: "testing-awardees",
      title:
        "Testing and Certification Manpower Development Corporate Awardees",
    },

    {
      id: "excellent-awardees",
      title: "Excellent Testing and Certification Professional Awardees",
    },
    {
      id: "award-ceremony",
      title: "Award Ceremony",
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
                  block: "start",
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
                        block: "start",
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
    <>
      <SquareTitle title="List of Awardees/ Award Ceremony 2023-2024" />

      <p className="text-heading-l my-[24px]" id="awardees">
        Awardees
      </p>
      <div id="testing-awardees">
        <Accordion
          title="Testing and Certification Manpower Development Corporate Awardees"
          details={
            <div>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                {["Platinum Awardees", "Gold Awardees"].map((b, i) => {
                  const isActivated = activeButtonOne === b;
                  return (
                    <button
                      key={i}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveButtonOne(b);
                      }}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
              <div className="text-body-m ml-[12px]">
                {buttonOneMap[activeButtonOne]}
              </div>
            </div>
          }
        />
      </div>
      <div className="mt-[24px]" id="excellent-awardees">
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
      </div>
      <p className="text-heading-l my-[24px]" id="award-ceremony">
        Award Presentation Ceremony
      </p>
      {/* Ceremony1 */}
      <div className="flex items-center">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/Ceremony1.png"
          }
          className="object-contain"
          style={{ height: "auto", width: "100%" }}
          alt="Ceremony1"
        />
      </div>
      <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Ceremony2.png"
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
              "/assets/eventsLanding/awardScheme/Ceremony3.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony3"
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[16px] py-[24px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m">
          The award presentation ceremony of the “Testing and Manpower
          Development Award Scheme 2023-24”, was successfully held on 4 December
          2023 at the Hong Kong Convention and Exhibition Centre. The ceremony
          had the privilege to have the officiating Guest of Honour, Professor
          Sun Dong, Secretary for Innovation, Technology and Industry. Over 200
          guests and awardees attended the ceremony to recognise the
          achievements of testing and certification (T&C) practitioners and
          their contribution to the T&C industry.
        </p>
      </div>
      <div className={`grid grid-cols-2 gap-x-[24px]`}>
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/ProfWON.png"
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
              "/assets/eventsLanding/awardScheme/ProfSUN.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          Prof. WONG Wing-tak, HKCTC Chairman, delivers the Welcome Speech.
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          The Secretary for Innovation and Technology, Prof. Sun Dong, JP,
          delivers the Opening Remarks.
        </p>
      </div>
      <div className="w-full flex flex-row gap-[16px] py-[24px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m">
          20 T&C bodies and 15 ones received the Platinum Award and Gold Award
          respectively for the Testing and Certification Manpower Development
          Corporate Award at the ceremony. As regards the Excellent Testing and
          Certification Professional Award, there was a total of 19 awardees in
          the two sub-groups - including 7 Junior Professionals and 12 Senior
          Professionals.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation.png"
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
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation2.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          Group photo of Secretary for Innovation, Technology and Industry,
          Commissioner for Innovation & Technology, Chairman of the Hong Kong
          Council for Testing & Certification (HKCTC) and Assessment Panel
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          Group photo of Secretary for Innovation, Technology and Industry,
          Commissioner for Innovation & Technology, Chairman of the Hong Kong
          Council for Testing & Certification (HKCTC), list of HKCTC member with
          Awardees of "Excellent Testing and Certification Professional Award"
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-[24px] mt-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation3.png"
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
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation4.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          Group photo of Secretary for Innovation, Technology and Industry,
          Commissioner for Innovation & Technology, Chairman of the Hong Kong
          Council for Testing & Certification (HKCTC), list of HKCTC member with
          Gold Awardees of "Testing and Certification Manpower Development
          Corporate Award"
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          Group photo of Secretary for Innovation, Technology and Industry,
          Commissioner for Innovation & Technology, Chairman of the Hong Kong
          Council for Testing & Certification (HKCTC), list of HKCTC member with
          Platinum Awardees of "Testing and Certification Manpower Development
          Corporate Award"
        </p>
      </div>

      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/events-promotion?section=${navItemEnum.award_scheme}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <div className="w-full h-auto bg-white flex items-center justify-center">
        <video
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/mpaward-2023-24-Compressed.mp4"
          }
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain", // 确保视频内容保持原比例
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
