import React, { useState } from "react";
import { SummaryTable } from "./SummaryTable";
import { Accordion, Link, SquareTitle, MediaDialog } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { MEDIA_TYPE } from "../../../const";

const Aim: React.FC = () => {
  const aimQuestion: Array<{ question: string; answer: React.ReactNode }> = [
    {
      question:
        "What is the Testing and Certification Sector Job Creation Scheme (TCJS)?",
      answer:
        "The Testing and Certification Sector Job Creation Scheme, launched by the Innovation and Technology Commission (ITC), is the first job creation scheme dedicated to the testing and certification (T&C) industry under the Hong Kong Special Administrative Region Government. Under the Scheme, each local private T&C organisation with valid accreditation status given by the Hong Kong Accreditation Service may apply for a monthly subsidy for up to five eligible job positions.",
    },
    {
      question: "What is the aim of TCJS?",
      answer:
        "The Scheme aims to encourage private testing and certification (T&C) organisations to create more job opportunities, and attract people to join the T&C sector, so as to enrich Hong Kong’s T&C talent pool.",
    },
    {
      question: "Which organisations are eligible for TCJS?",
      answer: (
        <>
          <p>
            Local private testing and certification (T&C) organisation,
            including in-house laboratories in enterprises, with valid
            accreditation status given by the Hong Kong Accreditation Service
            (HKAS) under any of the following schemes:
          </p>
          <br />
          <p>Hong Kong Laboratory Accreditation Scheme (HOKLAS)</p>
          <p>Hong Kong Inspection Body Accreditation Scheme (HKIAS)</p>

          <p>Hong Kong Certification Body Accreditation Scheme (HKCAS)</p>
          <br />
          <p>
            Laboratories under Government department, publicly-funded
            organisation and tertiary institution are not covered under the
            scheme.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {aimQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const Applications: React.FC = () => {
  const appQuestion: Array<{ question: string; answer: React.ReactNode }> = [
    {
      question: "When to apply?",
      answer:
        "Applications will be closed on 31 July 2023. With limited quota, interested organisations are encouraged to submit applications as soon as possible.",
    },
    {
      question: "How to submit application?",
      answer: (
        <>
          <p>Fill in the application form available on HKCTC’s website.</p>
          <p>Submit it with relevant supporting documents by email or post.</p>
          <br />
          <p>
            Email:&nbsp;
            <a href="mailto:tcjs@itc.gov.hk" className="underline text-[#00E]">
              tcjs@itc.gov.hk
            </a>
          </p>
          <p>
            Address: Secretariat, Hong Kong Council for Testing and
            Certification
          </p>
          <p>Innovation and Technology Commission</p>
          <p>Units 801-04, 8/F, The Hub</p>
          <p>23 Yip Kan Street,</p>
          <p>Wong Chuk Hang, Hong Kong</p>
        </>
      ),
    },
    {
      question:
        "How many job positions can applicant organisation apply for subsidies?",
      answer:
        "Each organisation can apply for subsidy for up to five positions.",
    },
    {
      question:
        "Can T&C organisation with more than one accreditation make multiple applications?",
      answer:
        "Each eligible T&C organisation will need to possess a unique Business Registration and an accreditation. Subsidiary T&C organisations of an enterprise group can apply for subsidies respectively provided they have individual Business Registration and accreditation.",
    },
    {
      question:
        "When and how will applicant organisation be informed about the application result?",
      answer:
        "Applicant organisation will be notified of the application result via email within two weeks upon submission of all the required documents and information.",
    },
    {
      question: "What is the application procedure?",
      answer:
        "Upon receipt of an application, ITC may request for supplementary documents as necessary. After receiving full information including necessary supporting documents from the applicant, ITC will vet the application and notify the applicant organisation of the result by email within two weeks.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {appQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const EligibilityCriteria: React.FC = () => {
  const eligibilityCriteriaQuestion: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question:
        "What eligibility requirements does candidate of the subsidised position have to meet?",
      answer:
        "An Eligible Employee of the scheme must be a Hong Kong resident with a valid Hong Kong Identity Card, and have completed a post-secondary course (including diploma, certificate, higher certificate, higher diploma, associate degree and degree) in the discipline of T&C, science, applied science, engineering, or other relevant area.",
    },
    {
      question: "Positions of what job nature are eligible for TCSJ?",
      answer:
        "An eligible position must have major duties relating to carrying out testing, calibration, inspection, certification or related professional services. Job positions with major duties relating to administration, sales, marketing, accounting, human resources, and other supporting functions will not be accepted.",
    },
    {
      question:
        "How to determine whether the job nature of a position is eligible for TCJS?",
      answer:
        "In determining whether a job is carrying out related professional services, we would consider if it would require the employee to possess relevant professional knowledge in order to perform the duties.",
    },
    {
      question:
        "Can a previous employee of the applicant organisation be eligible as a candidate for the scheme?",
      answer:
        "An eligible employee must not be an employee of the applicant organisation within the 12 months preceding the new employment.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {eligibilityCriteriaQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const DisbursementSubsidies: React.FC = () => {
  const disbursementSubsidiesQuestion: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question: "How is the subsidy period calculated?",
      answer:
        "The subsidy period starts from the commencement date of employment. For example, the subsidy period for an employment commenced on 24 August 2022 is 24 August 2022 - 23 August 2023.",
    },
    {
      question: "How much is the subsidy?",
      answer:
        "Each approved position will be provided with a monthly subsidy of HK$10,000 or 50% of the salary of the position, whichever is lower, for a period of 12 months. The calculation of the subsidy amount will be based on the actual monthly basic salary payment, excluding MPF and other fringe benefits, for the employee.",
    },
    {
      question: "How would the subsidy be disbursed?",
      answer:
        "The subsidy will be disbursed via direct deposit to a bank account of the applicant organisation on a reimbursement basis.",
    },
    {
      question: "When should claim for reimbursement be submitted?",
      answer: (
        <>
          <p>
            Generally, there will be four batches of claim (every three months
            for 12 months) for each approved job position. Applicant
            organisation may submit claim for reimbursement after the payments
            of salary covered in the period of claim have been made to the
            employee.
          </p>
          <br />
          <p>
            To allow flexibility, applicant organisation may also choose to
            claim for reimbursement of multiple batches in one application,
            provided that the salaries for the period of claim have been paid to
            the employee.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {disbursementSubsidiesQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const OtherQuestions: React.FC = () => {
  const otherQuestion: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question:
        "Is the employer required to make MPF contributions for the beneficiary in respect of the wage subsidies provided under the Scheme?",
      answer:
        "The employer is required to make MPF contributions in respect of the subsidy paid to the beneficiary employee in accordance with existing arrangements.",
    },
    {
      question:
        "Does the subsidy cover employer’s MPF contribution, allowances, overheads or fringe benefits?",
      answer:
        "The subsidy amount should be used solely for salary payment. It is exclusive of the employer’s contribution to the Mandatory Provident Fund scheme, allowances, overheads or other fringe benefits to the employee.",
    },
    {
      question: "Is the subsidy paid under TCJS taxable?",
      answer:
        "Organisations receiving subsidy under TCJS can be exempt from the payment of profits tax. However, the sums received by employees in the form of wage incomes are, as usual, normal incomes from employment and hence are chargeable to salaries tax.",
    },
    {
      question:
        "If the new employee leaves the organisation during the subsidy period, how will the subsidy be calculated?",
      answer:
        "In the case of dismissal/resignation of the employee concerned, the applicant organisation should notify ITC in writing immediately. The subsidy in relation to the employee shall be calculated up to his/her last completed full month of employment. If the last employment month is less than one full month, it will be omitted in calculating the entitled subsidy.",
    },
    {
      question:
        "If the new employee leaves the organisation during the subsidy period, can the applicant organisation fill the vacancy by recruiting a new employee?",
      answer: (
        <>
          <p>
            The Applicant Employer is allowed to recruit a new Eligible Employee
            to fill the same Eligible Position or submit a fresh application
            with another Eligible Position, and will still be eligible for
            subsidies in the remaining subsidy period of the quota concerned,
            provided that the employee meets the criteria mentioned in paragraph
            3.2 above.
          </p>
          <br />
          <p>
            Example: The employee resigned after of a the subsidised position
            received 7 months’ subsidy. The applicant employer can hire another
            eligible employee to fill the subsidised position and submit a new
            application to. If the new application is approved, the applicant
            employer will be eligible to the remaining 5 months’ subsidies.
            Alternatively, the applicant employer can submit a new application
            for another eligible position to replace previous approved position
            of the quota concerned. If the application is approved, the
            applicant employer will also be eligible to the remaining 5 months’
            subsidies.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {otherQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const faqMap: Record<string, React.ReactNode> = {
  Aim: <Aim />,
  Applications: <Applications />,
  "Eligibility Criteria": <EligibilityCriteria />,
  "Disbursement of Subsidies": <DisbursementSubsidies />,
  Others: <OtherQuestions />,
};

export const TCJS: React.FC = () => {
  const [activeFAQType, setActiveFAQType] = useState<string>(
    Object.keys(faqMap)[0]
  );

  const documentsList: Array<{
    title: React.ReactNode;
    maskIcon: string;
    imgUrl: string;
    pdfLink?: string;
    docLink?: string;
  }> = [
    {
      title: "Application Guide (Updated on 20 October 2023)",
      maskIcon: "PDF.png",
      imgUrl: "application_guide.png",
      pdfLink: "/en/doc/tcjs_application_guide_eng.pdf",
    },
    {
      title: "Authority For Payment To A Bank (Added on 20 October 2023)",
      maskIcon: "PDF.png",
      imgUrl: "Authority.png",
      pdfLink: "/en/doc/GF179A.pdf",
    },
    {
      title: (
        <>
          Application Form (
          <Link
            linkColor="ink"
            outerLink="https://www.hkctc.gov.hk/en/doc/tcjs_supplementary_sheet_eng.docx"
          >
            Supplementary Sheet
          </Link>
          )
        </>
      ),
      maskIcon: "DOCS.png",
      imgUrl: "Authority.png",
      docLink: "https://www.hkctc.gov.hk/en/doc/tcjs_application_form_eng.docx",
    },
    {
      title: "Claim Form (Updated on 20 October 2023)",
      maskIcon: "DOCS.png",
      imgUrl: "Authority.png",
      docLink: "https://www.hkctc.gov.hk/en/doc/tcjs_claim_form_eng.docx",
    },
  ];

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = documentsList[activeReport];

  const tableHeads = ["Date", "Events"];
  const tableRows = [
    ["24 August 2022", "Application open"],
    ["31 July 2023", "Application close"],
  ];

  return (
    <div className="w-full">
      <SquareTitle title="Testing and Certification Sector Job Creation Scheme (TCJS)" />
      <p className="text-body-m mt-[24px]">
        To relieve the unemployment situation due to the epidemic and as part of
        the anti-epidemic measures, the Anti-Epidemic Fund (AEF) 6.0 will
        allocate resources to create time-limited jobs in the private sector.
        The Testing and Certification Sector Job Creation Scheme (the Scheme) is
        launched under the AEF.
      </p>
      <br />
      <p className="text-body-m mb-[24px]">
        The Scheme aims to encourage private testing and certification (T&C)
        organisations to create more job opportunities, and attract people to
        join the T&C sector, so as to enrich Hong Kong’s T&C talent pool.
      </p>
      <div className="border py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[24px] h-[24px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
            alt={"rocket"}
          />
          <p className="text-highlight-m flex-grow min-w-0">
            Local private T&C organizations with valid Hong Kong Accreditation
            Service status can apply for a monthly subsidy for up to five
            eligible positions
          </p>
        </div>
      </div>
      <div className="border py-[24px] px-[36px] my-[24px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[24px] h-[24px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
            alt={"money"}
          />
          <p className="text-highlight-m flex-grow min-w-0">
            For each approved position, the applicant employer will receive a
            monthly subsidy of HK$10,000 or 50% of the salary of the position,
            whichever is lower, for 12 months
          </p>
        </div>
      </div>
      <p className="text-heading-l">Application Period</p>
      <div className="mt-[24px]">
        <SummaryTable tableHeads={tableHeads} tableRows={tableRows} />
      </div>
      <hr className="text-[#E0E0E0] my-[24px]" />
      <p className="text-heading-l">Frequently Asked Questions</p>
      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {Object.keys(faqMap).map((btn, index) => {
          const isActivated = btn === activeFAQType;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveFAQType(btn);
              }}
            >
              <p className="text-highlight-xs">{btn}</p>
            </button>
          );
        })}
      </div>
      <div>{faqMap[activeFAQType]}</div>
      <hr className="text-[#E0E0E0] my-[24px]" />
      <p className="text-heading-l">Enquiries</p>
      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/alert.svg`}
            alt={"alert"}
          />
          <p className="text-body-m flex-grow min-w-0">
            Organisations interested in the scheme can make enquiries via email
            to&nbsp;
            <a href="mailto:tcjs@itc.gov.hk" className="underline text-[#00E]">
              tcjs@itc.gov.hk
            </a>
            &nbsp;or
            <br /> telephone at&nbsp;
            <span className="underline text-[#00E]">2127 4864</span>.
          </p>
        </div>
      </div>
      <hr className="text-[#E0E0E0] my-[24px]" />
      <p className="text-heading-l">Application Documents</p>
      <div className="w-full">
        {documentsList.map((item, index) => {
          const { title, maskIcon, imgUrl, pdfLink, docLink } = item;
          return (
            <div
              key={index}
              className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
            >
              <div
                className="relative w-[130px] h-full cursor-pointer"
                onClick={() => {
                  docLink && window.open(docLink);
                  if (pdfLink) {
                    setActiveReport(index);
                    setIsPreviewOpen(true);
                  }
                }}
              >
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

              <div className="text-highlight-m text-black">{title}</div>
            </div>
          );
        })}
      </div>
      {isPreviewOpen && (
        <MediaDialog
          mediaType={MEDIA_TYPE.PDF}
          setIsPreviewOpen={setIsPreviewOpen}
          title={currentReport.title as string}
          link={currentReport.pdfLink as string}
        />
      )}
    </div>
  );
};
