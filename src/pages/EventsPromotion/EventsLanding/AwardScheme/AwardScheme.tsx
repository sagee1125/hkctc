import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  normalButtonStyle,
  activatedButtonStyle,
  SquareTitle,
  Accordion,
} from "../../../../components";
import { useSettings } from "../../../../context";

const assessmentCriteriaGrid = [
  {
    color: "trustfulBlue",
    title: "Area A",
    content: "Commitment to T&C practitioners’ training and development",
  },
  {
    color: "elegancePurple",
    title: "Area B",
    content:
      "Corporate support to enhance T&C practitioners’ competence and professionalism",
  },
  {
    color: "growthfulGreen",
    title: "Area C",
    content: "Caring for T&C practitioners",
  },
  {
    color: "energeticOrange",
    title: "Area D",
    content: "Communication with T&C practitioners",
  },
];

const stagesGridOne = [
  {
    title: "Stage 1",
    content:
      "HKCTC Secretariat will conduct an initial screening on the applications",
  },
  {
    title: "Stage 2",
    content:
      "Independent Assessment Panel will consider and, shortlisting as the circumstances require, interview applicants with a view to selecting the awardees",
  },
];
const stagesGridTwo = [
  {
    title: "Stage 1",
    content:
      "HKCTC Secretariat will conduct an initial screening on the applications",
  },
  {
    title: "Stage 2",
    content:
      "Independent Assessment Panel will consider and, shortlisting as the circumstances require, interview applicants with a view to deciding on the awardees",
  },
];

const questionCategoriesMap: Record<
  string,
  Array<{ title: string; content: React.ReactNode }>
> = {
  General: [
    {
      title: "Is there any submission or processing fee for the Award Scheme?",
      content: "No. Participation is free of charge.",
    },
    {
      title:
        "Can we submit applications for both Testing and Certification Manpower Development Corporate Award and Excellent Testing and Certification Professional Award?",
      content:
        "Yes. An accredited testing and certification body may apply for Testing and Certification Manpower Development Corporate Award as well as nominate its testing and certification practitioners for the Excellent Testing and Certification Professional Award, subject to meeting the eligibility requirements of the Awards.",
    },
    {
      title: "Is there a fixed number of awardees?",
      content: "There is no pre-set number of awardees for both Awards.",
    },
  ],
  "Testing and Certification Manpower Development Corporate Award": [
    {
      title: "Why should our company apply for the Award?",
      content:
        "The Award recognises your company’s achievements and efforts made in the manpower and professional development of testing and certification practitioners, demonstrating to the community that talent is much treasured by your company. It thus projects a good corporate image for your company that helps attract and retain talent.",
    },
    {
      title:
        "Our company group consists of several accredited testing and certification bodies. Do we need to submit a separate application for each accredited testing and certification body in our group?",
      content:
        "Applicant entities may include accredited testing and certification bodies of the same group in one application if such testing and certification bodies are under the same management and apply the same company policy. In that case, information provided in the application should cover all T&C bodies specified in the application, and the application would be assessed holistically based on the activities and achievements made by all testing and certification bodies specified in the application.",
    },
    {
      title:
        "Do we need to submit supporting information for each Criteria fulfilled?",
      content:
        "Yes. Evidence, supporting documents or examples should be provided for every Criteria claimed to be fulfilled in the application form.",
    },
    {
      title:
        "What kind of supporting documents are required for fulfilling the assessment Criteria?",
      content:
        "Supporting documents may take the form of acknowledge letters, internal office memos, photographs, staff manuals, emails, receipts, corporate publications, posters and certificate copies, etc. Consent must be obtained from the parties concerned for disclosure of personal data in the documents.",
    },
    {
      title:
        "If an activity of our company was conducted before 1 June 2021, could we use this to support our application?",
      content:
        "No. Only those activities and achievements made during the period from 1 June 2021 up to the date of application would be considered for the Award.",
    },
    {
      title:
        "What is the effective period for the use of the logos under the Corporate Award?",
      content:
        "Awardees of the Testing and Certification Manpower Development Corporate Award will be permitted to use the logo for the Gold Award and Platinum Award under the Corporate Award as appropriate from the date of public announcement of the award results. The specific date would be announced in due course.",
    },
    {
      title:
        "Do we need to submit samples of our promotional materials using the logos under the Corporate Award to the HKCTC Secretariat for prior approval?",
      content: (
        <p>
          No. However, all promotional materials bearing the Corporate Award
          Logo must be legal, decent, healthy, honest, and trustful and must not
          contain any content of unlawful, defamatory, discrimination, insulting
          or otherwise objectionable nature.
          <br />
          <br />
          Please refer to the “Guidelines on the Use of the Logos under the
          Testing and Certification Manpower Development Corporate Award” at
          Annex to the Guidance Notes for details about the use of the logo for
          the Gold Award and Platinum Award under the Corporate Award as
          appropriate.
        </p>
      ),
    },
  ],
  "Excellent Testing and Certification Professional Award": [
    {
      title:
        "As a self-employed testing and certification practitioner, may I nominate myself for the Award?",
      content:
        "No. Applicant practitioner must be nominated by an accredited testing and certification body and is an employee of that nominating testing and certification body for at least one year.",
    },
    {
      title:
        "Can a testing and certification body nominate more than one testing and certification practitioner?",
      content:
        "Yes, as long as the nominees fulfill the eligibility requirement for the Award. There is no restriction on the number of employees nominated by a testing and certification body.",
    },
    {
      title: "Can a testing and certification body nominate an ex-employee?",
      content:
        "No. Testing and certification practitioners can only be nominated by their current employers.",
    },
  ],
};

export const AwardScheme: React.FC = () => {
  const navigate = useNavigate();
  const { isPC } = useSettings();

  const awardMapOne: Record<string, React.ReactNode> = {
    "Two Tiers of Awards": (
      <div
        className={`w-full grid grid-cols-${
          isPC ? "2 h-[218px]" : "1 h-auto"
        } gap-[24px] `}
      >
        <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <Icon icon="bxs:trophy" style={{ height: "24px", width: "24px" }} />
            Platinum Award
          </div>
          <p className="text-body-m">
            Those who have fulfilled 19 or more of the 24 Assessment Criteria,
            inclusive of at least two Criteria under each Area
          </p>
        </div>
        <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <Icon
              icon="bxs:trophy"
              style={{ color: "#EE9C22", height: "24px", width: "24px" }}
            />
            Gold Award
          </div>
          <p className="text-body-m">
            Those who have fulfilled 10 or more of the 24 Assessment Criteria,
            inclusive of at least two Criteria under each Area
          </p>
        </div>
      </div>
    ),
    Benefits: (
      <>
        <li>Presented with a Trophy and an Award Certificate;</li>
        <br />
        <li>
          Permitted to use the logo for the Gold Award and the Platinum Award as
          appropriate on their websites and promotional materials (Please refer
          to the Guidelines on the Use of the Logos under the Testing and
          Certification Manpower Development Corporate Award at Annex of
          the&nbsp;
          <a
            className="underline"
            href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
          >
            Guidance Notes
          </a>
          );
        </li>
        <br />

        <li>
          Invited to attend the presentation ceremony and publicity events.
        </li>
      </>
    ),
    Eligibility: (
      <>
        <p>Applicant entities must be -</p>
        <br />
        <li>
          Accredited by the Hong Kong Accreditation Service (HKAS) or other
          accreditation bodies having Mutual Recognition Arrangements with HKAS;
          and
        </li>
        <br />
        <li>
          Located in Hong Kong with testing and certification services provided
          locally.
        </li>
        <br />
        <p>
          Testing and certification services refer to testing, calibration,
          inspection and/or certification services.
        </p>
      </>
    ),
    "Assessment Criteria": (
      <>
        <p>
          The assessment covers the following four Areas, each with six Criteria
          as specified in the Guidance Notes -
        </p>
        <div
          className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px] my-[24px]`}
        >
          {assessmentCriteriaGrid.map((item, index) => (
            <div
              key={index}
              className={`border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-${
                isPC ? "[216px]" : "auto"
              }`}
            >
              <p className={`text-${item.color} underline !text-heading-s`}>
                {item.title}
              </p>
              <p className="!text-body-m">{item.content}</p>
            </div>
          ))}
        </div>
        <p>
          Activities carried out and achievements made during the period from 1
          June 2021 up to the date of application would be considered for the
          Award.
          <br />
          <br />
          Subject to provision of valid and credible supporting documents,
          applicant entities would be eligible for the award in two tiers -
          <br />
          <br />
          Platinum Award:
          <br />
          Those who have fulfilled 19 or more of the 24 Criteria, inclusive of
          at least two Criteria under each Area
          <br />
          <br />
          Gold Award:
          <br />
          Those who have fulfilled 10 or more of the 24 Criteria, inclusive of
          at least two Criteria under each Area
        </p>
      </>
    ),
    "Selection Process": (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {stagesGridOne.map((item, index) => (
          <div
            key={index}
            className={`bg-${
              index !== 0 ? "newPrimary" : "white"
            } border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px]`}
          >
            <p
              className={`text-${
                index === 0 ? "newPrimary" : "white"
              } underline !text-heading-s`}
            >
              {item.title}
            </p>
            <p
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    ),
  };
  const awardMapTwo: Record<string, React.ReactNode> = {
    "Two Tiers of Awards": (
      <div
        className={`w-full grid grid-cols-${
          isPC ? "2 h-[218px]" : "1 h-auto"
        } gap-[24px]`}
      >
        <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/eventsLanding/Professional_Icon.svg"
              }
              style={{ height: "24px", width: "24px" }}
              alt=""
            />
            Junior Professional
          </div>
          <p className="text-body-m">
            Open to T&C practitioners who have 1 year up to less than 6 years of
            T&C services in aggregate
          </p>
        </div>
        <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/eventsLanding/Professional_Icon_2.svg"
              }
              style={{ height: "24px", width: "24px" }}
              alt="Professional"
            />
            Senior Professional
          </div>
          <p className="text-body-m">
            Open to T&C practitioners who have 6 years up to less than 20 years
            of T&C services in aggregate
          </p>
        </div>
      </div>
    ),
    Benefits: (
      <>
        <p>Awardees will be -</p>
        <br />
        <li>Presented with a Trophy and an Award Certificate;</li>
        <br />
        <li>
          Invited to attend the presentation ceremony and publicity events
        </li>
      </>
    ),
    Eligibility: (
      <>
        <p>Applicant practitioners must be -</p>
        <br />
        <li>
          Nominated by a testing and certification body which is accredited by
          the Hong Kong Accreditation Service (HKAS) or other accreditation
          bodies having Mutual Recognition Arrangements with HKAS;
        </li>
        <br />
        <li>
          An employee of the nominating testing and certification body for at
          least 1 year; and
        </li>
        <br />
        <li>
          Located in Hong Kong with major duty to carry out testing,
          calibration, inspection and/or certification service.
        </li>
      </>
    ),
    "Assessment Criteria": (
      <>
        <p>
          Each application will be considered on the basis of its overall
          merits, including but not limited to -
          <br />
          <br />
          i. Commitment to continuous learning and professional development by
          acquiring new skills, capabilities as well as relevant academic and
          professional qualifications after joining the testing and
          certification sector;
          <br />
          <br />
          ii. Impact/significance of contributions made to improving service
          quality or productivity of the nominating testing and certification
          body (e.g. adopting innovation and/or new technology in service
          delivery).
        </p>
      </>
    ),
    "Selection Process": (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {stagesGridTwo.map((item, index) => (
          <div
            key={index}
            className={`bg-${
              index !== 0 ? "newPrimary" : "white"
            } border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px]`}
          >
            <p
              className={`text-${
                index === 0 ? "newPrimary" : "white"
              } underline !text-heading-s`}
            >
              {item.title}
            </p>
            <p
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    ),
  };
  const [activeAwardOneButton, setActiveAwardOneButton] = useState<string>(
    Object.keys(awardMapOne)[0]
  );
  const [activeAwardTwoButton, setActiveAwardTwoButton] = useState<string>(
    Object.keys(awardMapTwo)[0]
  );
  const [questionCategory, setQuestionCategory] = useState<string>(
    Object.keys(questionCategoriesMap)[0]
  );

  const pastSchemes: Array<{
    title: string;
    imgUrl: string;
    onClick: () => void;
  }> = [
    {
      title: "T&C Manpower Development Award Scheme 2023-2024",
      imgUrl: "2023-2024.png",
      onClick: () => {
        navigate("/events-promotion/award-scheme2324");
        window.scroll({
          top: 100,
          behavior: "smooth",
        });
      },
    },
    {
      title: "T&C Manpower Development Award Scheme 2021-2022",
      imgUrl: "2021-2022.png",
      onClick: () => {
        navigate("/events-promotion/award-scheme2122");
        window.scroll({
          top: 100,
          behavior: "smooth",
        });
      },
    },
  ];

  return (
    <div className="w-full">
      <SquareTitle title="Testing & Certificate Manpower Development Award Scheme" />

      <p className="text-body-m my-[24px]">
        With a view to encouraging the testing and certification (T&C) bodies to
        invest in talent training and development, while also commending those
        T&C practitioners who has striven for continuous learning and
        professional development, and/or contributed to service quality
        improvement.
        <br />
        <br />
        The Hong Kong Council for Testing and Certification (HKCTC) launched the
        first “Testing and Certification Manpower Development Award Scheme” in
        2021. Having regard to the favourable feedback from the T&C sector,
        HKCTC organised in 2023 again the Award Scheme (the 2023 - 24 Award
        Scheme).
      </p>

      <hr />
      <p className="text-heading-l my-[24px]">Past Schemes</p>
      <div className="flex flex-col gap-[24px]">
        {pastSchemes.map((scheme, index) => {
          const { title, imgUrl, onClick } = scheme;
          return (
            <div
              key={index}
              className="flex flex-row items-center h-[90px] gap-[24px] cursor-pointer"
              onClick={onClick}
            >
              <img
                className="w-[130px] h-full object-contain"
                src={process.env.PUBLIC_URL + "/assets/eventsLanding/" + imgUrl}
                alt={imgUrl}
              />
              <div
                className={`text-highlight-m text-black py-[8px] ${
                  isPC ? "pr-[16px]" : ""
                }`}
              >
                {title.length > 36 && !isPC
                  ? title.slice(0, 36) + "..."
                  : title}
              </div>
              <svg
                className="flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2682_55750)">
                  <path
                    d="M4.70996 16L12.71 8L4.70996 0L3.28996 1.42L9.86996 8L3.28996 14.58L4.70996 16Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2682_55750">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          );
        })}
      </div>

      <hr className="my-[24px]" />

      <p className="text-heading-l">
        I. Testing and Certification Manpower Development Corporate Award
      </p>
      <p className="text-body-m mt-[24px]">
        This Award recognises accredited T&C bodies’ achievements in manpower
        and professional development of T&C practitioners.
      </p>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {Object.keys(awardMapOne).map((btn, index) => {
          const isActivated = btn === activeAwardOneButton;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardOneButton(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="pb-[24px] text-body-m">
        {awardMapOne[activeAwardOneButton]}
      </div>

      <p className="text-heading-l">
        II. Excellent Testing and Certification Professional Award
      </p>
      <p className="text-body-m mt-[24px]">
        This Award commends individual T&C practitioners who have demonstrated
        excellence in various aspects, including but not limited to the
        followings:
        <br />
        <li>
          Pursuing continuous learning and professional development by acquiring
          new skills, capabilities as well as relevant academic and professional
          qualifications after joining the T&C sector;
        </li>
        <li>
          Making outstanding contributions to improving service quality or
          productivity; etc
        </li>
      </p>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {Object.keys(awardMapTwo).map((btn, index) => {
          const isActivated = btn === activeAwardTwoButton;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardTwoButton(btn);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="mb-[24px] text-body-m">
        {awardMapTwo[activeAwardTwoButton]}
      </div>

      <hr />

      <p className="text-heading-l mt-[24px]">Frequently Asked Questions</p>
      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {Object.keys(questionCategoriesMap).map((btn, index) => {
          const isActivated = btn === questionCategory;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setQuestionCategory(btn);
              }}
            >
              {btn.length > 48 && !isPC ? btn.slice(0, 48) + "..." : btn}
            </button>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        {questionCategoriesMap[questionCategory].map((q, index) => (
          <Accordion
            key={index}
            title={`${index + 1}. ${q.title}`}
            details={<div className="!text-body-m">{q.content}</div>}
          />
        ))}
      </div>
    </div>
  );
};
