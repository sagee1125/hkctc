import React, { useState } from "react";
import { Icon } from "@iconify/react";
import classNames from "classnames";
import { Breadcrumb, SquareTitle } from "../../../../components";

export const AwardScheme23to24: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events", href: "/events-promotion" },
    { label: "T&C Manpower Development Award Scheme 2023-2024" },
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
      title: "BEAM",
      urlPath: "BEAM.png",
    },
    {
      title: "DoC",
      urlPath: "DoC.png",
    },
    {
      title: "Consumer_Council",
      urlPath: "Consumer_Council.png",
    },
    {
      title: "GEMMAS",
      urlPath: "GEMMAS.png",
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
      title: "HKICA",
      urlPath: "HKICA.png",
    },
    {
      title: "HKIE",
      urlPath: "HKIE.png",
    },
    {
      title: "HKMU",
      urlPath: "HKMU.png",
    },
    {
      title: "DABCT",
      urlPath: "DABCT.png",
    },
    {
      title: "HKSQ",
      urlPath: "HKSQ.png",
    },
    {
      title: "HKTDC",
      urlPath: "HKTDC.png",
    },
    {
      title: "QF",
      urlPath: "QF.png",
    },
    {
      title: "VTC",
      urlPath: "VTC.png",
    },
  ];

  const timeLine: Array<{ date: string; event: string }> = [
    {
      date: "2 May 2023",
      event: "Application open",
    },
    {
      date: "11:59 pm, 31 Jul 2023",
      event: "Application close",
    },
    {
      date: "Aug - Oct 2023",
      event: "Application checking and assessment",
    },
    {
      date: "Sep 2023",
      event: "Interviews with applicants of Excellent T&C Professional Award",
    },
    {
      date: "Oct 2023",
      event: "Announcement of award results",
    },
    {
      date: "Dec 2023",
      event: "Award presentation ceremony",
    },
  ];

  const applicationData: Array<{
    title: string;
    imagePath: string;
  }> = [
    {
      title: "Guidance Notes",
      imagePath: "Guidance_Notes.png",
    },
    {
      title:
        "Application Form - Testing and Certification Manpower Development Corporate Award (Form T&C MP01)",
      imagePath: "Testing.png",
    },
    {
      title:
        "Application Form - Excellent Testing and Certification Professional Award (Form T&C MP02)",
      imagePath: "Excellent.png",
    },
  ];

  const publicationData: Array<{
    title: string;
    imagePath: string;
    iconPath: string;
    date?: string;
  }> = [
    {
      title: "Pamphlet",
      iconPath: "PDF.png",
      imagePath: "Pamphlet.png",
    },
    {
      title: "Media Coverage",
      iconPath: "PDF.png",
      imagePath: "Coverage.png",
    },
    {
      title: "Award ceremony video",
      iconPath: "VIDEO.png",

      imagePath: "ceremony.png",
    },
    {
      title: "Commemorative publication",
      iconPath: "PDF.png",
      imagePath: "Commemorative.png",
    },
    {
      title: "Press Release",
      iconPath: "PDF.png",
      imagePath: "Release.png",
      date: "4 December 2023",
    },
  ];
  const [locateAnchor, setLocateAnchor] = useState<number>(0);

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

  return (
    <>
      <div className="w-full h-[460px] bg-white flex items-center justify-center">
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
            height: "460px", // 高度固定为460px
            width: "auto", // 宽度根据视频比例自适应
            objectFit: "contain", // 确保视频内容保持原比例
          }}
        />
      </div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full grid grid-cols-[1fr,2fr] pt-[48px] gap-[24px] px-[24px]">
        <div className="flex flex-col gap-[0]">
          {directoryAnchorIds.map((anchor, index) => {
            const isActivated = index === locateAnchor;
            const { title, id } = anchor;

            const borderStyle = isActivated
              ? "border-newPrimary z-10"
              : "border-[#E0E0E0]";
            const fontStyle = isActivated
              ? "text-heading-m"
              : "text-heading-m text-[#AAAAAA]";

            const marginStyle = index === 0 ? "" : "-mt-[2px]";
            return (
              <div
                className={classNames(
                  "border-2 p-[24px] text-heading-m",
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
        <div>
          <SquareTitle title="T&C Manpower Development Award Scheme 2023-2024" />

          <p className="text-highlight-l text-[#666666] mt-[24px]">
            [Results announced on 4 December 2023]
          </p>
          <p className="text-heading-l mt-[24px]" id="introduction">
            Introduction
          </p>
          <p className="text-body-m mt-[24px]">
            With a view to encouraging the testing and certification (T&C)
            bodies to invest in talent training and development, while also
            commending those T&C practitioners who has striven for continuous
            learning and professional development, and/or contributed to service
            quality improvement, the Hong Kong Council for Testing and
            Certification (HKCTC) launched the first “Testing and Certification
            Manpower Development Award Scheme” in 2021. Having regard to the
            favourable feedback from the T&C sector, HKCTC organised in 2023
            again the Award Scheme (the 2023 - 24 Award Scheme).
          </p>
          <p className="text-heading-l my-[24px]" id="supporting_organizations">
            Supporting Organizations
          </p>
          <div className="grid grid-cols-3 gap-[48px] p-[24px]">
            {supportingOrg.map((org, index) => {
              const { title, urlPath } = org;
              return (
                <div key={index} className="w-[200px] h-[70px]">
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
          <p className="text-heading-l my-[24px]" id="awardees">
            Awardees
          </p>
          <div className="border-2 border-inherit flex flex-row justify-between p-[24px]">
            <p className="text-heading-m">
              Testing and Certification Manpower Development Corporate Awardees
            </p>
            <Icon icon="ep:arrow-down-bold" className="w-[16px] h-[16px]" />
          </div>

          <div className="border-2 border-inherit flex flex-row justify-between p-[24px] mt-[24px]">
            <p className="text-heading-m">
              Excellent Testing and Certification Professional Awardees
            </p>
            <Icon icon="ep:arrow-down-bold" className="w-[16px] h-[16px]" />
          </div>
          <p
            className="text-heading-l my-[24px]"
            id="award_presentation_ceremony"
          >
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
              Development Award Scheme 2023-24”, was successfully held on 4
              December 2023 at the Hong Kong Convention and Exhibition Centre.
              The ceremony had the privilege to have the officiating Guest of
              Honour, Professor Sun Dong, Secretary for Innovation, Technology
              and Industry. Over 200 guests and awardees attended the ceremony
              to recognise the achievements of testing and certification (T&C)
              practitioners and their contribution to the T&C industry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-[24px]">
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
              20 T&C bodies and 15 ones received the Platinum Award and Gold
              Award respectively for the Testing and Certification Manpower
              Development Corporate Award at the ceremony. As regards the
              Excellent Testing and Certification Professional Award, there was
              a total of 19 awardees in the two sub-groups - including 7 Junior
              Professionals and 12 Senior Professionals.
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
              Commissioner for Innovation & Technology, Chairman of the Hong
              Kong Council for Testing & Certification (HKCTC) and Assessment
              Panel
            </p>
            <p className="text-italic-s text-grey italic mt-[16px]">
              Group photo of Secretary for Innovation, Technology and Industry,
              Commissioner for Innovation & Technology, Chairman of the Hong
              Kong Council for Testing & Certification (HKCTC), list of HKCTC
              member with Awardees of "Excellent Testing and Certification
              Professional Award"
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
              Commissioner for Innovation & Technology, Chairman of the Hong
              Kong Council for Testing & Certification (HKCTC), list of HKCTC
              member with Gold Awardees of "Testing and Certification Manpower
              Development Corporate Award"
            </p>
            <p className="text-italic-s text-grey italic mt-[16px]">
              Group photo of Secretary for Innovation, Technology and Industry,
              Commissioner for Innovation & Technology, Chairman of the Hong
              Kong Council for Testing & Certification (HKCTC), list of HKCTC
              member with Platinum Awardees of "Testing and Certification
              Manpower Development Corporate Award"
            </p>
          </div>
          <p className="text-heading-l my-[24px]" id="timeline">
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
          <hr className="my-[24px]" />
          <p className="text-heading-l mb-[24px]" id="application">
            Application
          </p>

          <div className="w-full">
            {applicationData.map((item, index) => {
              const { title, imagePath } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row h-[90px] mt-[24px] gap-[24px] w-full"
                >
                  <div className="flex-shrink-0 relative w-[130px] h-[90px]">
                    <img
                      className="border-2 border-inherit w-full h-full object-cover"
                      src={`${process.env.PUBLIC_URL}/assets/eventsLanding/awardScheme/${imagePath}`}
                      alt={imagePath}
                    />
                    {/* Icon */}
                    <img
                      className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                      alt="PDF Icon"
                    />
                  </div>
                  <div className="flex-grow text-highlight-m text-black overflow-hidden text-ellipsis">
                    {title}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-heading-l mt-[24px]" id="publications">
            Publications
          </p>

          <div className="w-full grid grid-cols-2 gap-[24px]">
            {publicationData.map((item, index) => {
              const { title, imagePath, date, iconPath } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row h-[90px] mt-[24px] gap-[24px] w-full"
                >
                  <div className="flex-shrink-0 relative w-[130px] h-[90px]">
                    <img
                      className="border-2 border-inherit w-full h-full object-cover"
                      src={`${process.env.PUBLIC_URL}/assets/eventsLanding/awardScheme/${imagePath}`}
                      alt={imagePath}
                    />
                    {/* Icon */}
                    <img
                      className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/${iconPath}`}
                      alt="PDF Icon"
                    />
                  </div>
                  <div className="flex-grow flex-col flex text-black overflow-hidden text-ellipsis">
                    <p className="text-highlight-m">{title}</p>
                    {date && (
                      <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                        <img
                          className="w-[16px] h-[16px]"
                          src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                          alt={"calendar"}
                        />
                        <p className="text-body-s text-grey">{date}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="mt-[24px]" />
          <div className="flex flex-row gap-[8px] my-[36px]">
            <Icon
              icon="tdesign:share"
              className="h-[20px] w-[20px] text-newPrimary"
            />
            <p className="text-highlight-m text-newPrimary">Share</p>
          </div>
        </div>
      </div>
    </>
  );
};
