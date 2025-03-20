import * as React from "react";
import {
  MediaTemplateWithDialog,
  MediaTemplateWithDialogProps,
  SquareTitle,
} from "../../../components";
import { useSettings } from "../../../context";
import { MEDIA_TYPE } from "../../../const";

export const Relaxation: React.FC = () => {
  const { isPC } = useSettings();

  const fileList: MediaTemplateWithDialogProps[] = [
    {
      title:
        "Announcement: Relaxation of Waiver Application for Existing Industrial Buildings ",
      date: "1 February 2019",
      maskIcon: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "devb",
      mediaLink:
        "/filemanager/en/Content_3/Relaxation_of_the_Waiver_Application_in_Existing_IB.pdf",
    },
    {
      title:
        "Press Release: Extending Effective Period of Relaxation of Waiver Application for Existing Industrial Buildings",
      date: "26 January 2024",
      maskIcon: "PRESS.png",
      mediaType: MEDIA_TYPE.NEW_PAGE,
      imagePath: "extending.png",
      mediaLink:
        "https://www.info.gov.hk/gia/general/202401/26/P2024012600321.htm",
    },
    {
      title:
        "Work Focuses of Development Bureau in the Chief Executive’s 2024 Policy Address",
      date: "16 October 2024",
      maskIcon: "PRESS.png",
      mediaType: MEDIA_TYPE.NEW_PAGE,
      imagePath: "Work_Focuses.png",
      mediaLink:
        "https://www.devb.gov.hk/en/about_us/policy/2024-policy-address-supplement/policy-address-initiatives/index.html",
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-[24px]">
        <SquareTitle title="Relaxation of Waiver Application for Existing Industrial Buildings" />
      </div>
      <p className="mt-[24px] text-body-m">
        According to the revitalisation scheme for industrial buildings (“IBs”),
        one of the measures is to relax the waiver application policy to permit
        uses for a number of sectors in existing IBs. Testing laboratories may
        benefit from this measure.
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">Background</p>
      <p className="text-body-m mt-[24px]">
        As per the executed land leases, the uses of most IBs are restricted to
        industrial uses. Under the existing land administration arrangement, if
        an IB owner wishes to put its premises into always-permitted1
        non-industrial use under the relevant statutory plan, the owner (or an
        authorised person) is supposed to submit a temporary waiver application
        to the Lands Department (LandsD) for temporarily waiving the lease
        restrictions for the specific premises.
      </p>
      <br />
      <p className="text-body-m">
        Note 1: It refers to uses permitted under the land use zoning of the
        sites concerned on the relevant Outline Zoning Plans as “Column 1” uses.
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">
        Details of the Relaxation of Waiver Application Arrangement
      </p>
      <div className="grid grid-cols-2 gap-[8px] my-[24px]">
        <img
          className="w-auto h-auto"
          src={
            process.env.PUBLIC_URL +
            "/assets/support/details_of_the_elaxation_1.png"
          }
          alt="Professor WONG Wing-tak"
        />
        <img
          className="w-auto h-auto"
          src={
            process.env.PUBLIC_URL +
            "/assets/support/details_of_the_elaxation_2.png"
          }
          alt="Professor WONG Wing-tak"
        />
      </div>
      <ul>
        <li className="!text-body-m">
          As the Development Bureau announced on 1 February 2019, the Government
          would permit five non-industrial uses in premises within IBs on a
          time-limited basis. The prerequisite is that such uses are always
          permitted under the relevant statutory plan, and do not involve direct
          provision of services or goods attracting visiting members of the
          public. Under the arrangement, an owner of part(s) of an existing IB
          does&nbsp;
          <span className="text-newPrimary !text-highlight-m">not</span>
          &nbsp;need to apply for a temporary waiver from LandsD, and does&nbsp;
          <span className="text-newPrimary !text-highlight-m">not</span>
          &nbsp;need to pay a waiver fee and an administrative fee which would
          otherwise be payable, for putting the relevant IB premises to such
          permitted non-industrial uses during the effective period.&nbsp;
          <span className="text-newPrimary !text-highlight-m">
            The effective period of the arrangement
          </span>
          &nbsp;was initially set for five years, followed by an extension to 31
          January 2025 announced on 26 January 2024, and a&nbsp;
          <span className="text-newPrimary !text-highlight-m">
            further extension to the end of 2027
          </span>
          &nbsp;announced in the 2024 Policy Address.
        </li>
        <br />
        <li className="text-body-m">
          "Research, Design and Development Centre" is one of the five permitted
          uses. According to the Definition of Terms published by the Town
          Planning Board, testing laboratories are covered by “Laboratory,
          Inspection and Testing Centre” which is subsumed under the use of
          “Research, Design and Development Centre”. As such, testing
          laboratories in industrial premises in compliance with the above
          prerequisites can benefit from the relaxation of waiver application
          arrangement. In determining whether the use of a premise has involved
          non-compliant uses outside the scope of the permission, LandsD will
          seek advice from the Innovation and Technology Commission and the
          decision of which shall be final.
        </li>
        <br />
        <li className="text-body-m">
          For any processed/processing temporary waiver application submitted in
          accordance with&nbsp;
          <a
            href="https://www.landsd.gov.hk/en/resources/practice-notes/lao.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Practice Note No. 1/2016
          </a>
          &nbsp;issued by LandsD, no administrative fee will be refunded.
        </li>
      </ul>
      <br />
      <p className="text-body-m">
        Please refer to the announcement of Development Bureau on 1 February
        2019 and the press release of the extension on 26 January 2024, and the
        2024 Policy Address for further details:
      </p>
      <div className="w-full">
        {fileList.map((item, index) => {
          const {
            title,
            imagePath,
            mediaLink,
            mediaType,
            mediaDomain,
            maskIcon,
            date,
          } = item;
          return (
            <div
              key={index}
              className="flex flex-row h-[90px] mt-[24px] gap-[24px] items-center"
            >
              <MediaTemplateWithDialog
                title={
                  title.length > 58 && !isPC
                    ? title.slice(0, 58) + "..."
                    : title
                }
                imagePath={"support/" + imagePath}
                mediaLink={mediaLink}
                direction="row"
                maskIcon={maskIcon}
                date={date}
                mediaType={mediaType}
                mediaDomain={mediaDomain}
              />
            </div>
          );
        })}
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">Enquiries</p>
      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            Enquiries about how this measure will impact on individual IBs
            should be addressed to the relevant District Lands Office of LandsD.
            The contact information can be found at
            <br />
            <a
              href="https://www.landsd.gov.hk/en/about-us/contact-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] break-all"
            >
              https://www.landsd.gov.hk/en/about-us/contact-us.htm
            </a>
          </p>
        </div>
        <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            Information regarding the zoning of an IB and the “Column 1”
            always-permitted uses specified in the relevant OZP is available on
            the website of the Town Planning Board
            <br />(
            <a
              href="https://www.ozp.tpb.gov.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] break-all"
            >
              https://www.ozp.tpb.gov.hk/
            </a>
            )
          </p>
        </div>
      </div>
    </div>
  );
};
