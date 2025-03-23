import * as React from "react";
import {
  Accordion,
  SquareTitle,
  normalButtonStyle,
  activatedButtonStyle,
  Link,
  MediaTemplateWithDialog,
} from "../../../components";
import { useSettings } from "../../../context";
import { MEDIA_TYPE } from "../../../const";

const multilingual = {
  en: {
    title: `"Nil Waiver Fee" for Testing Labs Operating in Industrial Buildings`,
    the_measure_is: `The measure is effective from 1 February 2016. The details on application procedures are set out in the Practice Note No. 1/2016 issued by Lands Department (LandsD).`,
    summary: {
      title: `Summary`,
      content: [
        `The Government introduces this policy measure effective as from 1 February 2016 to facilitate the operation of testing and calibration laboratories (hereunder referred to as "testing laboratories") in industrial building. The Government hopes that this measure would offer testing laboratories more choices of suitable space in the market.`,
        `The leases of industrial buildings1 usually contain user restrictions. The uses permitted under such leases are typically specified as "industrial and/or godown purposes". However, testing laboratories not involving a primary manufacturing use are not considered as industrial use in the context of land leases.`,
        `The owner (or his/her agent) intending to use part(s) of or an entire industrial building can apply to LandsD for a waiver of the user condition of the land lease to allow testing laboratory use for the lifetime of the existing industrial building, or until the expiry or termination of the current land lease, whichever is the earlier.`,
        `For an approved application to LandsD for a waiver under this measure, the Government will exempt the waiver fee otherwise be chargeable for issuing waivers to allow use as a testing laboratory. However, applicants would need to pay an administrative fee as and when demanded by LandsD.`,
        `Applications would only be accepted if the premises concerned are located in an industrial building where testing laboratory use is permitted under the current land use zoning of the site on the statutory plan, or is subject to a valid planning permission granted by the Town Planning Board (TPB), or is considered as an existing use under the provisions of the statutory plan.`,
        `Innovation and Technology Commission (ITC) will advise LandsD whether or not the use as stated in an application is an eligible testing laboratory use.`,
      ],
      background_information: `For background information, please refer to the Legislative Council Brief:`,
      note: `Note 1: An industrial building refers to a building lawfully erected on a lot which, under the lease conditions, shall not be used for any purpose other than for industrial and/or godown purposes. Industrial buildings do not include special factories such as those located in storage premises in container terminals and flatted factories built by the Hong Kong Housing Authority, or lots for special industries such as cargo handling uses, ship building and repairing, oil storage and refining and production of associated chemical by-product, manufacture of polystyrene plastics, manufacture and storage of chlorine, hydrogen and textile chemicals, etc.`,
      legislative_council_brief: `Legislative Council Brief`,
      to_learn_more: `To learn more about the measure, please see FAQs below.`,
    },
    enquiries: `Enquiries`,
    for_enquiries_on_whether: `For enquiries on whether a testing laboratory may benefit under this measure, please contact the Secretariat of the Hong Kong Council for Testing and Certification`,
    for_enquiries_on_application: `For enquiries on application procedures, please contact the respective District Lands Office for which contact information can be found at`,
    faq: {
      title: "Frequently Asked Questions",
      below_are: `Below are some questions and answers for general reference only and these would not prejudice LandsD in exercising its authority and powers according to the Government land lease and the relevant Practice Note (No. 1/ 2016). If you have any doubts about the land lease conditions or land use zoning, you are encouraged to seek professional advice.`,
    },
  },
  cn: {
    title: ``,
  },
};

const eligibilityQues = [
  {
    question:
      "What kinds of laboratories may benefit from the 'Nil Waiver Fee' for Testing Laboratories Operating in Industrial Buildings (hereunder referred to as 'the measure')?",
    answer: (
      <>
        <p>
          Testing and calibration laboratories (hereunder referred to as
          "testing laboratories") may benefit from the measure. Applicants for a
          waiver of the user condition under the land lease will be required to
          make a self-declaration and provide evidence (e.g. accreditation
          status, operation record, expert opinions) to demonstrate that the
          proposed change of use of the premises is primarily for testing
          laboratory and ancillary purposes. Upon receiving an application, ITC
          will advise LandsD whether or not the use as stated in an application
          is a testing laboratory use eligible under this policy measure.
        </p>
        <p>
          Laboratories providing clinical testing which requires humans or
          animals to undergo checking at the Industrial Premises are not covered
          by the measure because the frequent patronage by a large number of
          individual clients will expose individuals to higher fire risks posed
          by other units which are still being used for industrial activities or
          storage of dangerous and inflammable goods, and because such use is
          usually not permitted in industrial buildings according to the Notes
          of Outline Zoning Plans. Medical and veterinary laboratories that do
          not require humans or animals to undergo checking at the Industrial
          Premises are eligible to apply.
        </p>
      </>
    ),
  },
  {
    question:
      "How would I know if my laboratory is a testing laboratory that may benefit under the measure?",
    answer: (
      <span>
        You may approach the Secretariat of the Hong Kong Council for Testing
        and Certification (
        <a
          href="mailto:enquiry@hkctc.gov.hk"
          className="underline text-[#00E] break-all"
        >
          enquiry@hkctc.gov.hk
        </a>
        ) for a discussion. In general, testing laboratories with accredited
        activities would be covered.
      </span>
    ),
  },
  {
    question: "What types of industrial buildings are covered by the measure?",
    answer: (
      <>
        <p>
          The measure is applicable to a building lawfully erected on a lot
          which, under the lease conditions, shall not be used for any purpose
          other than for industrial and / or godown purposes.
        </p>
        <p>
          However, the measure does not apply to special factories such as those
          located in storage premises in container terminals and flatted
          factories built by the Hong Kong Housing Authority, or lots for
          special industries such as cargo handling uses, ship building and
          repairing, oil storage and refining and production of associated
          chemical by-product, manufacture of polystyrene plastics, manufacture
          and storage of chlorine, hydrogen and textile chemicals, etc. An
          "industrial / office" building is not covered by the measure.
        </p>
      </>
    ),
  },
  {
    question: "Would a calibration laboratory benefit under the measure?",
    answer: (
      <>
        Yes, calibration laboratories are, in general, covered under the
        measure. Applicants will be required to make a self-declaration and
        provide evidence (e.g. accreditation status, operation record, expert
        opinions) to demonstrate that the proposed use of the premises is for
        calibration laboratory and ancillary purposes. Government encourages
        testing laboratories to obtain accreditation from the Hong Kong
        Accreditation Service.
      </>
    ),
  },
  {
    question: "Can a medical laboratory apply for a waiver at nil waiver fee?",
    answer: (
      <>
        Laboratories providing clinical testing which requires humans or animals
        to undergo checking at the Industrial Premises are not covered by the
        measure because the frequent patronage by a large number of individual
        clients will expose individuals to higher fire risks posed by other
        units which are still being used for industrial activities or storage of
        dangerous and inflammable goods, and because such use is usually not
        permitted in industrial buildings according to the Notes of Outline
        Zoning Plans. Medical and veterinary laboratories that do not require
        humans or animals to undergo checking at the Industrial Premises are
        covered in general.
      </>
    ),
  },
  {
    question: "Can a certification body apply for a waiver at nil waiver fee?",
    answer: (
      <>
        Premises used solely by a certification body without any testing or
        calibration activity are not covered under the measure. If the premises
        concerned are for certification as well as testing and / or calibration
        laboratory use, then ITC may consider that on a case-by-case basis.
      </>
    ),
  },
  {
    question:
      "We are planning to set up a new testing laboratory in Hong Kong and we have never operated in the territory. Would we benefit from the measure?",
    answer: (
      <>
        Yes, but you will have to locate premises for your proposed testing
        laboratory first, check restrictions under the land lease and land use
        zoning on the statutory plan if the subject industrial premises are
        covered under the measure. If the owner of the premises would like to
        apply for a waiver under the measure to allow use as a testing
        laboratory, he/she, or his/her authorised representative can apply to
        LandsD. Please also refer to reply to QI.1 above.
      </>
    ),
  },
  {
    question:
      "None of the existing tenants in an industrial building is a testing laboratory. Can the landlord apply for the nil fee waiver?",
    answer: (
      <>
        Yes, the landlord can apply for a waiver of the user condition under the
        measure if the use is permitted under the current land use zoning of the
        site on the statutory plan, or is subject to a valid planning permission
        granted by the Town Planning Board, or is considered as an existing use
        under the provisions of the statutory plan.
      </>
    ),
  },
  {
    question:
      "Is accreditation by the Hong Kong Accreditation Service a requirement for application under the measure?",
    answer: (
      <>
        Accreditation status can be considered as evidence to demonstrate that
        the proposed change of use is primarily for testing laboratory and
        ancillary purposes. Nonetheless, whether your laboratory would like to
        apply for a waiver, Government encourages that you obtain accreditation
        from the Hong Kong Accreditation Service.
      </>
    ),
  },
];

const planningQues = [
  {
    question:
      "How would I know whether testing laboratories are allowed to operate in an industrial building under lease?",
    answer: (
      <>
        Government leases, under which all private properties in Hong Kong are
        held, usually contain lease restrictions including the uses to which the
        land or buildings may be put. Copy of the Government lease can be
        obtained from the Land Registry. Lot owners may seek professional advice
        on lease matters.
      </>
    ),
  },
  {
    question:
      "How can I find out the land use zoning within which my industrial building falls?",
    answer: (
      <span>
        Please refer to the Outline Zoning Plans at the Statutory Planning
        Portal&nbsp;(
        <a
          href="https://www.ozp.tpb.gov.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          www.ozp.tpb.gov.hk
        </a>
        ).
      </span>
    ),
  },
  {
    question:
      "How do I know whether the operation of testing laboratory is permitted under the land use zoning where the concerned industrial building is situated?",
    answer: (
      <>
        Potential applicants can contact / visit the Planning Enquiry Counters
        or the respective District Planning Office of the Planning Department
        for enquiry on planning matters.
      </>
    ),
  },
  {
    question:
      "Do I need to apply to Town Planning Board for planning permission before application for nil fee waiver?",
    answer: (
      <>
        If the testing laboratory use of the premises concerned is permitted
        under the current land use zoning, or is subject to a valid planning
        permission granted by the TPB, or is considered as an existing use under
        the provisions of the statutory plan, then there is no need to apply for
        planning permission. Otherwise, you have to seek planning permission
        from the TPB before application for nil fee waiver.
      </>
    ),
  },
];

const approvalQues = [
  {
    question:
      "If an industrial building is under multiple ownership, do I need the consent of all building owners to apply for the waiver?",
    answer: (
      <>
        An owner of any unit of an industrial building may apply to change the
        use of their premises into a testing laboratory. There is no need for
        all owners of the same building to submit a joint application. However,
        applicants are reminded to note any restrictions or obligations under
        the Deed of Mutual Covenant of the lot, if any.
      </>
    ),
  },
  {
    question:
      "Is an administrative fee payable for applying for the nil fee waiver?",
    answer: (
      <>
        The owner shall be required to pay an administrative fee upon demand by
        LandsD after submission of an application.
      </>
    ),
  },
  {
    question:
      "After the nil fee waiver to accommodate testing laboratory use has been granted, can I switch back to the original use without terminating the waiver?",
    answer: (
      <>
        Yes. Under the measure, the owner can use the premises for either
        testing laboratory or the original uses under lease (or both) anytime
        during the lifetime of the existing building or until expiry or
        termination of the current land lease, whichever is the earlier. Testing
        laboratory use is allowed in addition to original uses under lease. If
        the property owner wishes to revert to the original uses, there would be
        no need to terminate the waiver. The waiver would remain valid
        throughout the term of the waiver, and there is no need to apply for
        another waiver if the premises concerned are to be used as testing
        laboratories again in future during the term of the waiver.
      </>
    ),
  },
];

const otherQues = [
  {
    question:
      "Can an industrial building being wholly-converted into other uses pursuant to the revitalisation of industrial buildings policy accommodate testing laboratories?",
    answer: (
      <>
        The permitted uses of an existing industrial building that has been
        converted into other uses pursuant to the revitalisation of industrial
        buildings policy are specified in the special waiver issued. We
        understand that there are cases where testing laboratory use is among
        the permissible uses of the revitalised buildings.
      </>
    ),
  },
];

const faqMap: Record<
  string,
  {
    label: string;
    labelCN: string;
    faqs: Array<{
      question: string;
      answer: JSX.Element;
    }>;
  }
> = {
  eligibility: {
    label: "Eligibility",
    labelCN: "Eligibility",
    faqs: eligibilityQues,
  },
  leasePlanningMatters: {
    label: "Lease & Planning Matters",
    labelCN: "Lease & Planning Matters",
    faqs: planningQues,
  },
  applicationApproval: {
    label: "Application & Approval",
    labelCN: "Application & Approval",
    faqs: approvalQues,
  },
  others: {
    label: "Others",
    labelCN: "Others",
    faqs: otherQues,
  },
};

export const NilWaiverFee: React.FC = () => {
  const [activeButton, setActiveButton] = React.useState(
    Object.keys(faqMap)[0]
  );
  const { isPC } = useSettings();

  // const renderedInfo = [eligibilityQues, panningQues, approvalQues, otherQues];

  return (
    <div className="w-full text-justify">
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
      <ul>
        <li className="text-body-m mt-[24px]">
          The Government introduces this policy measure effective as from 1
          February 2016 to facilitate the operation of testing and calibration
          laboratories (hereunder referred to as "testing laboratories") in
          industrial building. The Government hopes that this measure would
          offer testing laboratories more choices of suitable space in the
          market.
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
          applicants would need to pay an administrative fee as and when
          demanded by LandsD.
        </li>
        <br />
        <li className="text-body-m">
          Applications would only be accepted if the premises concerned are
          located in an industrial building where testing laboratory use is
          permitted under the current land use zoning of the site on the
          statutory plan, or is subject to a valid planning permission granted
          by the Town Planning Board (TPB), or is considered as an existing use
          under the provisions of the statutory plan.
        </li>
        <br />
        <li className="text-body-m">
          Innovation and Technology Commission (ITC) will advise LandsD whether
          or not the use as stated in an application is an eligible testing
          laboratory use.
        </li>
        <br />
      </ul>
      <p className="text-body-m mb-[24px]">
        For background information, please refer to the Legislative Council
        Brief:
      </p>
      <p className="text-body-m mb-[24px]">
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

      <div className="flex flex-row h-[90px] mt-[24px] gap-[24px] items-center">
        <MediaTemplateWithDialog
          title={"Legislative Council Brief"}
          mediaLink={"/en/doc/itc-hkctc-17-7-1c-e.pdf"}
          direction="row"
          maskIcon={"PDF.png"}
          date={""}
          mediaType={MEDIA_TYPE.PDF}
          mediaDomain={"hkctc"}
        />
      </div>

      <p className="text-body-m mt-[24px]">
        To learn more about the measure, please see&nbsp;
        <span className="text-newPrimary">FAQs</span>&nbsp;below.
      </p>
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
            For enquiries on whether a testing laboratory may benefit under this
            measure, please contact the Secretariat of the Hong Kong Council for
            Testing and Certification (
            <a
              href="mailto:enquiry@hkctc.gov.hk"
              className="underline text-[#00E]"
            >
              enquiry@hkctc.gov.hk
            </a>
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
              className="underline text-[#00E] break-all"
            >
              https://www.landsd.gov.hk/en/about-us/contact-us.html
            </a>
          </p>
        </div>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="flex flex-col gap-[24px]">
        <p className="text-heading-l">Frequently Asked Questions</p>
        <p className="text-body-m">
          Below are some questions and answers for general reference only and
          these would not prejudice LandsD in exercising its authority and
          powers according to the Government land lease and the relevant
          Practice Note (No. 1/ 2016). If you have any doubts about the land
          lease conditions or land use zoning, you are encouraged to seek
          professional advice.
        </p>
        <div className="flex flex-wrap gap-[8px]">
          {Object.keys(faqMap).map((b, i) => {
            const isActivated = activeButton === b;
            const label = faqMap[b].label;
            return (
              <button
                key={i}
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveButton(b);
                }}
              >
                <p className="text-highlight-xs">
                  {label.length > 44 && !isPC
                    ? label.slice(0, 44) + "..."
                    : label}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-[24px]">
          {faqMap[activeButton].faqs.map((com, i) => {
            return (
              <Accordion
                title={`${i + 1}. ${com.question}`}
                details={
                  <div className="flex flex-col gap-[24px] !text-body-m">
                    {com.answer}
                  </div>
                }
              />
            );
          })}
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
