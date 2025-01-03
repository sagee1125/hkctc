import * as React from "react";

export const Relaxation: React.FC = () => {
  const fileList: Array<{
    title: string;
    date: string;
    maskIcon: string;
    imgUrl: string;
  }> = [
    {
      title:
        "Extending effective period of relaxation of waiver application for existing industrial buildings",
      date: "26 January 2014",
      maskIcon: "PRESS.png",
      imgUrl: "extending.png",
    },
    {
      title:
        "Relaxation of Waiver Application  for Existing Industrial Buildings ",
      date: "",
      maskIcon: "PDF.png",
      imgUrl: "relaxation.png",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-row gap-[12px] items-center mb-[24px]">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">
          Relaxation of Waiver Application for Existing Industrial Buildings
        </p>
      </div>
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] text-body-m ">
        The Hong Kong Government allows five specific non-industrial uses in
        existing industrial buildings (e.g., testing labs, R&D centers) without
        temporary waivers or fees from Feb 1, 2019, to Jan 31, 2025. Eligible
        uses must align with statutory plans and not attract public visitors.
        For details, contact the Lands Department or visit the Town Planning
        Board's website.
      </div>
      <p className="mt-[24px]">
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
      <p className="italic text-italic-s">
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
      <li className="text-body-m">
        Under the arrangement, the Government would permit, between 1 February
        2019 and 31 January 2025 (the Specified Period, which has now been
        extended from five years to six years until 31 January 2025) five
        non-industrial uses in premises within IBs. The prerequisite is that
        such uses are always permitted under the relevant statutory plan, and do
        not involve direct provision of services or goods attracting visiting
        members of the public. An owner of part(s) of an existing IB does not
        need to apply for a temporary waiver from LandsD, and does not need to
        pay a waiver fee and an administrative fee which would otherwise be
        payable, for putting the relevant IB premises to such permitted
        non-industrial uses during the Specified Period.
      </li>
      <br />
      <li className="text-body-m">
        As the Development Bureau announced on 1 February 2019, “Research,
        Design and Development Centre” is one of the five permitted uses.
        According to the Definition of Terms published by the Town Planning
        Board, testing laboratories are covered by “Laboratory, Inspection and
        Testing Centre” which is subsumed under the use of “Research, Design and
        Development Centre”. As such, testing laboratories in industrial
        premises in compliance with the above prerequisites can benefit from the
        relaxation of waiver application arrangement. In determining whether the
        use of a premise has involved non-compliant uses outside the scope of
        the permission, LandsD will seek advice from the Innovation and
        Technology Commission and the decision of which shall be final.
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
      <br />
      <p className="text-body-m">
        Please refer to the announcement of Development Bureau on 1 February
        2019 and the press release of the extension on 26 January 2024 for
        further details:
      </p>
      <div className="w-full">
        {fileList.map((item, index) => {
          const { title, date, maskIcon, imgUrl } = item;
          return (
            <div
              key={index}
              className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
            >
              <div className="relative w-[130px] h-full">
                <img
                  className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={`${process.env.PUBLIC_URL}/assets/support/${imgUrl}`}
                  alt={imgUrl}
                />
                {/* Icon */}
                <img
                  className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
                  alt="maskIcon"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-highlight-m text-black">{title}</div>
                {date && (
                  <div className="text-body-s text-[#666666] flex flex-wrap gap-[8px]">
                    <img
                      className="w-[16px] h-[16px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                      alt="calendar"
                    />
                    {date}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">Enquiries</p>
      <div className="mt-[24px] border-2 border-[#F7F7F5] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            Enquiries about how this measure will impact on individual IBs
            should be addressed to the relevant District Lands Office of LandsD.
            The contact information can be found at&nbsp;
            <a
              href="https://www.landsd.gov.hk/en/about-us/contact-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              https://www.landsd.gov.hk/en/about-us/contact-us.html
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
            the website of the Town Planning Board&nbsp;(
            <a
              href="https://www.ozp.tpb.gov.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
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
