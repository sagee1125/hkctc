import * as React from "react";

export const OtherSupport: React.FC = () => {
  return (
    <div className="w-full pb-[48px]">
      <div className="flex flex-row gap-[12px] items-center">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">Other Support</p>
      </div>
      <p className="text-heading-l my-[24px]">Information on Standards</p>
      <p className="text-body-m">
        You may purchase original standards, guides, publications or handbooks
        issued by different standard publishers through Innovation and
        Technology Commission (ITC).
      </p>
      <br />
      <p className="text-italic-s italic">
        For more information on the standard-related services provided by ITC,
        please visit its{" "}
        <a
          href="https://www.itc.gov.hk/en/quality/qsdiv/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">Measurement Traceability</p>
      <p className="mt-[24px] text-body-m">
        Traceability means that the result of a measurement can be related to a
        national or international measurement standard. In addition, the
        measuring instrument must be calibrated with a measurement standard that
        is itself traceable. The concept of traceability is important because it
        makes possible the comparison of the accuracy of measurements worldwide
        according to a standardised procedure. Metrology is the study of
        measurement and there are two major fields, viz. physical metrology and
        chemical metrology.
      </p>
      <br />
      <p className="text-body-m">
        The Standards and Calibration Laboratory (SCL) maintains the reference
        standards of physical measurement traceable to the International System
        of Units for Hong Kong, promotes the international acceptance of these
        standards, and provides traceable calibration services and proficiency
        testing services to serve the local economy. For more information on the
        services provided by SCL, please visit its website.
      </p>
      <br />
      <p className="text-body-m">
        Government Laboratory provides chemical metrology support to the
        community through providing proficiency testing service, developing
        standard methods and producing reference material.
      </p>
      <br />
      <p className="text-italic-s italic">
        For more information on the services provided by Government Laboratory,
        please visit its{" "}
        <a
          //   href="https://www.itc.gov.hk/en/quality/qsdiv/index.html"
          // TODO
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">
        SME Support and Consultation Centre by the Trade and Industry Department
      </p>
      <p className="text-body-m mt-[24px]">
        The Support and Consultation Centre for SMEs (SUCCESS) provides free and
        practical business information and consultation services for SMEs
        including business start-ups.
      </p>
      <br />
      <p className="text-italic-s italic">
        For details of the location, information and services provided by
        SUCCESS, please visit its{" "}
        <a
          href="https://www.success.tid.gov.hk/english/whatsnew/whatsnew.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">
        Hong Kong Export Credit Insurance Corporation
      </p>
      <p className="text-body-m mt-[24px]">
        The Hong Kong Export Credit Insurance Corporation (ECIC) was created by
        statute with the aim of encouraging and supporting the export trade by
        providing Hong Kong exporters with insurance protection against
        non-payment risks arising from commercial and political events.
      </p>
      <br />
      <p className="text-body-m mb-[24px]">
        Its capital is wholly owned by the Government, which also guarantees its
        contingent liability, with the statutory maximum liability currently
        standing at HK$55 billion. ECIC has been providing a wide range of
        insurance facilities for Hong Kong exporters of services:
      </p>

      <div className="border-2 border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/calender_2.svg`}
            alt={"calender"}
          />
          <p className="text-highlight-m flex-grow min-w-0">
            To meet the needs of the testing and inspection sector, ECIC offers
            the tailor-made Testing and Inspection Services Policy (TISP) to
            cover credit risks for services provided to overseas clients with
            credit periods of up to 180 days post-service completion.
          </p>
        </div>
      </div>

      <div className="border-2 border-[#E0E0E0] py-[24px] px-[36px] mt-[24px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
            alt={"money"}
          />
          <p className="text-highlight-m flex-grow min-w-0">
            TISP covers losses from commercial risks (insolvency, payment
            default) and country risks (currency blockage, payment delays, war,
            riots, or natural disasters), with an indemnity ratio of up to 90%.
          </p>
        </div>
      </div>
      <p className="text-body-m my-[24px]">
        Other benefits of TISP include credit management, receivable management
        and facilitating trade finance. ECIC's insurance cover can thus enhance
        the credit management practice and competitiveness of the sector for
        developing new markets and clients and is vital for the promotion of
        Hong Kong's testing and certification sector overseas.
      </p>
      {/* TODO hyperlink */}
      <p className="text-italic-s italic">
        For more details, please refer to its&nbsp;
        <a className="text-[#00E] underline">website</a> or email to&nbsp;
        <a className="text-[#00E] underline">info@hkecic.com.</a>
      </p>
    </div>
  );
};