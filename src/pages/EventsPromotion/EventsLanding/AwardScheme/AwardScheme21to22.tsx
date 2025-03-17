import React, { useState } from "react";
import classNames from "classnames";
import { Drawer } from "@mui/material";
import { navItemEnum } from "../../../../const";
import {
  Accordion,
  fullContainer,
  maxPCContainer,
  Breadcrumb,
  SquareTitle,
  activatedButtonStyle,
  normalButtonStyle,
  InternalBackButton,
  maxMobileContainer,
} from "../../../../components";
import { useSettings } from "../../../../context";

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

const middleGroup: Array<{ one: string; two: string; three: string }> = [
  {
    one: "Dr IP Bui Kar",
    two: "Associate Medical Technologist",
    three: "Hong Kong Sanatorium & Hospital - Department of Pathology",
  },
  {
    one: "Mr KWOK Chi Wa",
    two: "Technical Manager",
    three: "Material Tech Company Limited",
  },
  {
    one: "Mr KWOK Yin Ho, Eric",
    two: "Senior Laboratory and Technical Development Manager",
    three: "SGS Hong Kong Limited",
  },
  {
    one: "Dr LAW Yuen Chi",
    two: "Chemist",
    three:
      "Drainage Services Department - Sewage Services Branch Operation Section Laboratory",
  },
  {
    one: "Mr LEE Kwong Sang",
    two: "Microbiology Laboratory Manager",
    three: "China Dragon Inspection & Certification (HK) Ltd",
  },
  {
    one: "Mr MA Chung Hang, Adrian",
    two: "Technical Manager",
    three: "Castco Testing Centre Limited",
  },
  {
    one: "Mr PUN Chi Kit, Patrick",
    two: "Scientific Officer (Medical)",
    three:
      "Agriculture, Fisheries and Conservation Department - Tai Lung Veterinary Laboratory",
  },
  {
    one: "Miss TAM Ka Ming",
    two: "Principal Engineer",
    three: "UL International Limited",
  },
  {
    one: "Mr WONG Chi",
    two: "Chief Inspector, Forensic Fingerprint Laboratory",
    three: "Hong Kong Police Force - Identification Bureau",
  },
  {
    one: "Dr TAN Tung-fai, Tony",
    two: "Deputy General Manager	",
    three: "China Inspection Medical Laboratories Limited",
  },
  {
    one: "Mr WONG Sun Leong, John",
    two: "Technical Services Manager",
    three: "SGS Hong Kong Limited",
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
    "Middle Management Sub-group": (
      <div className={isPC ? "" : "overflow-x-auto"}>
        {middleGroup.map((og, index) => (
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
    { label: "List of Awardees/ Award Ceremony 2021-2022" },
  ];

  const directoryAnchorIds: Array<{ id: string; title: string }> = [
    {
      id: "testing_testing_2122",
      title: "Testing and Certification Manpower Development Corporate Testing",
    },
    {
      id: "excellent_awardees_2122",
      title: "Excellent Testing and Certification Professional Awardees",
    },
    {
      id: "award_ceremony_2122",
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
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="T&C Manpower Development Award Scheme 2021-2022" />
      <p className="text-heading-l" id="testing_testing_2122">
        Awardees
      </p>
      <div>
        <Accordion
          title="Testing and Certification Manpower Development Corporate Awardees"
          details={
            <div>
              <ol className="ml-[12px]">
                {manpowerDevelopmentAwardees.map((a, i) => {
                  return (
                    <li key={i} className="w-full">
                      {a}
                    </li>
                  );
                })}
              </ol>
              <br />
              <p className="text-[#4B4746]">
                Corporate Awardees Receiving Special Commendation for Their
                Commitment to Testing and Certification Practitioners’ Training
                and Development
              </p>
              <br />
              <ol>
                <li>The Hong Kong Jockey Club - Racing Laboratory</li>
                <li>UL International Limited</li>
              </ol>
            </div>
          }
        />
      </div>
      <div id="excellent_awardees_2122">
        <Accordion
          title="Excellent Testing and Certification Professional Awardees"
          details={
            <>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                {[
                  "Junior Professional Sub-group",
                  "Middle Management Sub-group",
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
              <div className="text-body-m">
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
                {buttonTwoMap[activeButtonTwo]}
              </div>
            </>
          }
        />
      </div>
      <p className="text-heading-l" id="award_ceremony_2122">
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
        <p className="text-italic-s text-grey italic mt-[16px]">
          Awardees of “Excellent Testing and Certification Professional Award”
          shared their experience and insights at the ceremony
        </p>
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
