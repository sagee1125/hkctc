import React from "react";
import { Icon } from "@iconify/react";

export const AwardSchemeContent: React.FC = () => {
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

  return (
    <div className="w-full grid grid-cols-[1fr,2fr] pt-[48px] gap-[24px] px-[24px]">
      <div className="flex flex-col">
        <div className="border-2 border-black p-[24px] text-heading-m">
          Introduction
        </div>
        <div className="border-2 border-[#E0E0E0] p-[24px] text-heading-m text-[#AAAAAA]">
          About HKCTC
        </div>
      </div>
      <div className="">
        <div className="flex flex-row gap-[16px] items-center">
          <div className="h-[15px] w-[15px] bg-black" />
          <p className="text-heading-l">
            T&C Manpower Development Award Scheme 2023-2024s
          </p>
        </div>
        <p className="text-highlight-l text-[#666666] mt-[24px]">
          [Results announced on 4 December 2023]
        </p>
        <p className="text-heading-l mt-[24px]">Introduction</p>
        <p className="text-body-m mt-[24px]">
          With a view to encouraging the testing and certification (T&C) bodies
          to invest in talent training and development, while also commending
          those T&C practitioners who has striven for continuous learning and
          professional development, and/or contributed to service quality
          improvement, the Hong Kong Council for Testing and Certification
          (HKCTC) launched the first “Testing and Certification Manpower
          Development Award Scheme” in 2021. Having regard to the favourable
          feedback from the T&C sector, HKCTC organised in 2023 again the Award
          Scheme (the 2023 - 24 Award Scheme).
        </p>
        <p className="text-heading-l my-[24px]">Supporting Organizations</p>
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
        <p className="text-heading-l my-[24px]">Awardees</p>
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
        <p className="text-heading-l my-[24px]">Award Presentation Ceremony</p>
        {/* Ceremony1 */}

        <div className="flex items-center">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Ceremony1.png"
            }
            className="object-contain"
            style={{ height: "auto", width: "100%" }}
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
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-[16px] py-[24px]">
          <div className="w-[32px] bg-[#333333]" />
          <p className="text-body-m">
            The award presentation ceremony of the “Testing and Manpower
            Development Award Scheme 2023-24”, was successfully held on 4
            December 2023 at the Hong Kong Convention and Exhibition Centre. The
            ceremony had the privilege to have the officiating Guest of Honour,
            Professor Sun Dong, Secretary for Innovation, Technology and
            Industry. Over 200 guests and awardees attended the ceremony to
            recognise the achievements of testing and certification (T&C)
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
            Corporate Award at the ceremony. As regards the Excellent Testing
            and Certification Professional Award, there was a total of 19
            awardees in the two sub-groups - including 7 Junior Professionals
            and 12 Senior Professionals.
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
            Council for Testing & Certification (HKCTC), list of HKCTC member
            with Awardees of "Excellent Testing and Certification Professional
            Award"
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
            />
          </div>
          <p className="text-italic-s text-grey italic mt-[16px]">
            Group photo of Secretary for Innovation, Technology and Industry,
            Commissioner for Innovation & Technology, Chairman of the Hong Kong
            Council for Testing & Certification (HKCTC), list of HKCTC member
            with Gold Awardees of "Testing and Certification Manpower
            Development Corporate Award"
          </p>
          <p className="text-italic-s text-grey italic mt-[16px]">
            Group photo of Secretary for Innovation, Technology and Industry,
            Commissioner for Innovation & Technology, Chairman of the Hong Kong
            Council for Testing & Certification (HKCTC), list of HKCTC member
            with Platinum Awardees of "Testing and Certification Manpower
            Development Corporate Award"
          </p>
        </div>
        <p className="text-heading-l my-[24px]">Timeline</p>
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
      </div>
    </div>
  );
};
