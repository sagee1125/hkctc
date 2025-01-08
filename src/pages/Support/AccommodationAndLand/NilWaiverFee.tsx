import * as React from "react";
import { SquareTitle } from "../../../components";

export const NilWaiverFee: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-[24px]">
        <SquareTitle
          title={`"Nil Waiver Fee" for Testing Labs Operating in Industrial Buildings`}
        />
      </div>
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] text-body-m ">
        The measure is effective from 1 February 2016. The details on
        application procedures are set out in the&nbsp;
        <a
          href="https://www.landsd.gov.hk/en/resources/practice-notes/lao.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Practice Note No. 1/2016
        </a>
        &nbsp;issued by Lands Department (LandsD).
      </div>

      <p className="text-heading-l mt-[24px]">Summary</p>
      <li className="text-body-m mt-[24px]">
        The Government introduces this policy measure effective as from 1
        February 2016 to facilitate the operation of testing and calibration
        laboratories (hereunder referred to as "testing laboratories") in
        industrial building. The Government hopes that this measure would offer
        testing laboratories more choices of suitable space in the market.
      </li>
      <br />
      <li className="text-body-m">
        The leases of industrial buildings1 usually contain user restrictions.
        The uses permitted under such leases are typically specified as
        "industrial and/or godown purposes". However, testing laboratories not
        involving a primary manufacturing use are not considered as industrial
        use in the context of land leases.
      </li>
      <br />
      <li className="text-body-m">
        The owner (or his/her agent) intending to use part(s) of or an entire
        industrial building can apply to LandsD for a waiver of the user
        condition of the land lease to allow testing laboratory use for the
        lifetime of the existing industrial building, or until the expiry or
        termination of the current land lease, whichever is the earlier.
      </li>
      <br />
      <li className="text-body-m">
        For an approved application to LandsD for a waiver under this measure,
        the Government will exempt the waiver fee otherwise be chargeable for
        issuing waivers to allow use as a testing laboratory. However,
        applicants would need to pay an administrative fee as and when demanded
        by LandsD.
      </li>
      <br />
      <li className="text-body-m">
        Applications would only be accepted if the premises concerned are
        located in an industrial building where testing laboratory use is
        permitted under the current land use zoning of the site on the statutory
        plan, or is subject to a valid planning permission granted by the Town
        Planning Board (TPB), or is considered as an existing use under the
        provisions of the statutory plan.
      </li>
      <br />
      <li className="text-body-m">
        Innovation and Technology Commission (ITC) will advise LandsD whether or
        not the use as stated in an application is an eligible testing
        laboratory use.
      </li>
      <br />
      <p className="text-body-m">
        For background information, please refer to the&nbsp;
        <a
          href="https://www.hkctc.gov.hk/en/doc/itc-hkctc-17-7-1c-e.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Legislative Council Brief
        </a>
        &nbsp;(pdf below).
      </p>
      <br />
      <p className="italic text-italic-s">
        Note 1: An industrial building refers to a building lawfully erected on
        a lot which, under the lease conditions, shall not be used for any
        purpose other than for industrial and/or godown purposes. Industrial
        buildings do not include special factories such as those located in
        storage premises in container terminals and flatted factories built by
        the Hong Kong Housing Authority, or lots for special industries such as
        cargo handling uses, ship building and repairing, oil storage and
        refining and production of associated chemical by-product, manufacture
        of polystyrene plastics, manufacture and storage of chlorine, hydrogen
        and textile chemicals, etc.
      </p>
      <br />
      <p className="text-body-m">
        To learn more about the measure, please see&nbsp;
        <a
          href="https://www.hkctc.gov.hk/en/support/land/nil_waiver_fee_faq.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          FAQs
        </a>
        .
      </p>
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
            For enquiries on whether a testing laboratory may benefit under this
            measure, please contact the Secretariat of the Hong Kong Council for
            Testing and Certification (
            <span
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("enquiry@hkctc.gov.hk");
              }}
              className="underline text-[#00E] cursor-pointer"
            >
              enquiry@hkctc.gov.hk
            </span>
            )
          </p>
        </div>
        <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            For enquiries on application procedures, please contact the
            respective District Lands Office for which contact information can
            be found at&nbsp;
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
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]">Disclaimer</p>
      <p className="text-body-m">
        The information is provided by the Government for general reference
        only. The Government is not liable for any damages whatsoever arising
        out of the use of the information. The information shall not prejudice
        the Government in formulation of the implementation details and the
        Lands Department in exercising its authority and powers according to the
        Government land lease. The information shall not constitute any
        representation on the part of the Government or give rise to any
        expectation whatsoever and shall not be relied on as such. Each
        application for waiver will be considered on its own merits having
        regard to all factors and circumstances, which the Government at its
        absolute discretion considers applicable. The Government's right to add
        to, amend or delete the whole or any part of the information is hereby
        reserved.
      </p>
    </div>
  );
};
