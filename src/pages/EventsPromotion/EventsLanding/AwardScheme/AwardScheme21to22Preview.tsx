import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  normalButtonStyle,
  activatedButtonStyle,
  SquareTitle,
  Accordion,
  type MediaTemplateWithDialogProps,
  MediaTemplateWithDialog,
} from "../../../../components";
import { useSettings } from "../../../../context";
import { MEDIA_TYPE } from "../../../../const";

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
      "Corporate support to enhance T&C practitioners’ Competence and professionalism",
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
    content: (
      <>
        <span className="underline">Assessment Panel</span>&nbsp;will shortlist
        and interview applicant practitioners, and select the awardees
      </>
    ),
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
        "Can we submit the application form and supplementary documents separately?",
      content:
        "No. Completed application form must be submitted together with supplementary documents before the application deadline.",
    },
    {
      title:
        "Can we submit applications for both Testing and Certification Manpower Development Corporate Award and Excellent Testing and Certification Professional Award?",
      content:
        "Yes. Testing and certification bodies can apply for Testing and Certification Manpower Development Corporate Award as well as nominate testing and certification practitioners for the Excellent Testing and Certification Professional Award, subject to meeting the eligibility requirements of the Awards.",
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
        "Applicant entities may include accredited testing and certification bodies of the same group in one application if such testing and certification bodies are under the same management and apply the same company policy. In that case, information provided in the application should cover all T&C bodies specified in the application, and the application would be assessed holistically based on the same activities and achievements made by all testing and certification bodies specified in the application.",
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
        "No. Only those activities and achievements made during the period from 1 January 2020 up to the date of application would be considered for the Award.",
    },
    {
      title:
        "What is the effective period for the use of the logos under the Corporate Award?",
      content:
        "Awardees of the Testing and Certification Manpower Development Corporate Award will be permitted to use the Corporate Award Logo from the date of public announcement of the award results. The specific date would be announced in due course.",
    },
    {
      title:
        "Do we need to submit samples of our promotional materials using the Corporate Award Logo to the HKCTC Secretariat for prior approval?",
      content: (
        <p>
          No. However, all promotional materials bearing the Corporate Award
          Logo must be legal, decent, healthy, honest, and trustful and must not
          contain any content of unlawful, defamatory, discrimination, insulting
          or otherwise objectionable nature.
          <br />
          <br />
          Please refer to the “Guidelines on the Use of the Testing and
          Certification Manpower Development Corporate Award Logo” at the Annex
          to the&nbsp;
          <a
            className="underline text-[#00E]"
            href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
          >
            Guidance Notes
          </a>
          &nbsp;for details about the use of the Corporate Award Logo.
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
        "Yes, as long as the nominees fulfil the eligibility requirement for the Award. There is no restriction on the number of employees nominated by a testing and certification body.",
    },
    {
      title: "Can a testing and certification body nominate an ex-employee?",
      content:
        "No. Testing and certification practitioners can only be nominated by their current employers.",
    },
  ],
};

const supportingOrg: Array<{
  title: string;
  urlPath: string;
}> = [
  {
    title: "ACML",
    urlPath: "ACML.png",
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
    title: "HKTIC",
    urlPath: "HKTIC.png",
  },
  {
    title: "HKAML",
    urlPath: "HKAML.png",
  },
  {
    title: "QF",
    urlPath: "QF.png",
  },
];

const timeLine: Array<{ date: string; event: string }> = [
  {
    date: "7 Jun 2021",
    event: "Application open",
  },
  {
    date: "31 Aug 2021, 6:00 pm",
    event: "Application close",
  },
  {
    date: "Sep - Nov 2021",
    event: "Application Assessment",
  },
  {
    date: "Oct 2021",
    event:
      "Notification for interviews to Excellent T&C Professional Award shortlisted applicants",
  },
  {
    date: "Nov 2021",
    event: "Announcement of award results",
  },
  {
    date: "Dec 2021",
    event: "Award presentation ceremony",
  },
];

const applicationData: Array<{
  title: string;
  link: string;
}> = [
  {
    title: "Guidance Notes",
    link: "/en/event/mpaward/GuidanceNotes.pdf",
  },
  {
    title:
      "Application Form - Testing and Certification Manpower Development Corporate Award (Form T&C MP01)",
    link: "/en/event/mpaward/MP01.pdf",
  },
  {
    title:
      "Application Form - Excellent Testing and Certification Professional Award (Form T&C MP02)",
    link: "/en/event/mpaward/MP02.pdf",
  },
];
const publicationData: MediaTemplateWithDialogProps[] = [
  {
    title: "Pamphlet",
    maskIcon: "PDF.png",
    date: "",
    mediaType: MEDIA_TYPE.PDF,
    mediaLink: "/en/event/mpaward/pamphlet.pdf",
    mediaDomain: "hkctc",
  },
  {
    title: "Congratulatory Messages for the Award Scheme",
    maskIcon: "VIDEO.png",
    date: "",
    mediaType: MEDIA_TYPE.VIDEO,
    mediaLink: "/videos/en/MPAward_Congratulatory_Video-EN.mp4",
    mediaDomain: "hkctc",
  },
  {
    title: "Highlights of the Ceremony",
    maskIcon: "VIDEO.png",
    date: "",
    mediaType: MEDIA_TYPE.VIDEO,
    mediaLink: "/videos/tc/MPAward_Highlight.mp4",
    mediaDomain: "hkctc",
  },
  {
    title: "Press Release",
    maskIcon: "PRESS.png",
    date: "22 December 2021",
    imagePath: "press_release.png",
    mediaType: MEDIA_TYPE.NEW_PAGE,
    mediaLink:
      "https://www.info.gov.hk/gia/general/202112/22/P2021122200211.htm",
  },
];

export const AwardScheme21to22Preview: React.FC = () => {
  const navigate = useNavigate();
  const { isPC } = useSettings();

  const awardMapOne: Record<string, React.ReactNode> = {
    Benefits: (
      <>
        <p>Awardees will be -</p>
        <br />
        <ul>
          <li>Presented with a Trophy and an Award Certificate;</li>
          <br />
          <li>
            Permitted to use the logo for the Gold Award and the Platinum Award
            as appropriate on their websites and promotional materials (Please
            refer to the Guidelines on the Use of the Logos under the Testing
            and Certification Manpower Development Corporate Award at Annex of
            the&nbsp;
            <a
              className="underline text-[#00E]"
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
        </ul>
      </>
    ),
    Eligibility: (
      <>
        <p>Applicant entities must be -</p>
        <br />
        {/* defined in App.css */}
        <div className="al">
          <li>
            Accredited by the Hong Kong Accreditation Service (HKAS) or other
            accreditation bodies having Mutual Recognition Arrangements with
            HKAS; and
          </li>
          <br />
          <li>
            Located in Hong Kong with testing and certification services
            provided locally.
          </li>
        </div>
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
          Applicant entities which fulfill at least three Criteria under each of
          the following four Areas are qualified for the Award, subject to the
          provision of valid and credible supporting documents -
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
        <div>
          Activities carried out and achievements made during the period from 1
          January 2020 up to the date of application would be considered for the
          Award.
          <br />
          <br />
          Those awardees who have demonstrated exceptional achievements in
          manpower and professional development of T&C practitioners in specific
          aspect may receive special commendation.
        </div>
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
    Benefits: (
      <>
        <p>Awardees will be -</p>
        <br />
        <ul>
          <li>Presented with a Trophy and an Award Certificate;</li>
          <br />
          <li>
            Invited to attend the presentation ceremony and publicity events.
          </li>
        </ul>
      </>
    ),
    Eligibility: (
      <>
        <p>Applicant practitioners must be -</p>
        {/* defined in App.css */}
        <div className="al">
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
          <br />
          <p>There are two subgroups under the Award -</p>
        </div>
        <div className="al">
          <li>
            <span className="!text-highlight-m">Junior Professional:</span>
            &nbsp;Testing and certification (T&C) practitioners who have joined
            the T&C sector for at least 1 year and are appointed in a
            junior/entry rank position in an accredited T&C body; and
          </li>
          <br />
          <li>
            <span className="!text-highlight-m">Middle Management:</span>
            &nbsp;T&C practitioners who have joined the T&C sector for at least
            5 years and are appointed in a managerial position in an accredited
            T&C body.
          </li>
        </div>
      </>
    ),
    "Assessment Criteria": (
      <>
        <div className="al">
          Merits of each application will be assessed on one of the following
          aspects -
          <br />
          <br />
          <li>
            Commitment to continuous learning and professional development by
            acquiring new skills, capabilities as well as relevant academic and
            professional qualifications after joining the testing and
            certification sector;
          </li>
          <br />
          <li>
            Impact/significance of contributions made to improving service
            quality or productivity of the nominating testing and certification
            body (e.g. adopting innovation and/or new technology in service
            delivery).
          </li>
        </div>
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
            <div
              className={`text-${
                index === 0 ? "newPrimary" : "white"
              } underline !text-heading-s`}
            >
              {item.title}
            </div>
            <div
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {item.content}
            </div>
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

  return (
    <div className="w-full">
      <SquareTitle title="Testing & Certification Manpower Development Award Scheme" />
      <p className="text-heading-l">2021-2022</p>
      <p className="text-highlight-l my-[24px] text-[#666]">
        [Results announced on 22 December 2021]
      </p>
      <p className="text-body-m mb-[24px]">
        HKCTC launches the first “Testing and Certification Manpower Development
        Award Scheme” (the Award Scheme) in 2021 to recognise testing and
        certification (T&C) bodies which attach great importance to talent
        training and manpower development, as well as to encourage T&C
        practitioners to strive for improvement and professional development.
      </p>
      <hr />

      <p className="text-heading-l my-[24px]" id="supporting_organizations">
        Supporting Organisations
      </p>
      <div className="grid grid-cols-3 gap-[48px] p-[24px]">
        {supportingOrg.map((org, index) => {
          const { title, urlPath } = org;
          return (
            <div
              key={index}
              className={`${isPC ? "w-[200px] h-[70px]" : "w-full h-auto"}`}
            >
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
      <hr className="my-[24px]" />

      <p className="text-heading-l my-[24px]" id="timeline">
        Timeline
      </p>
      <div className="w-full grid grid-cols-2 border-[1px] border-[#E0E0E0] mb-[24px]">
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          Date
        </div>
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          Event
        </div>
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
      <div className="text-body-m mt-[24px]">
        This Award commends individual T&C practitioners who have demonstrated
        excellence in various aspects, including but not limited to the
        followings:
        <br />
        <br />
        <ul>
          <li>
            Pursuing continuous learning and professional development by
            acquiring new skills, capabilities as well as relevant academic and
            professional qualifications after joining the T&C sector;
          </li>
          <li>
            Making outstanding contribution s to improving service quality or
            productivity; etc
          </li>
        </ul>
      </div>

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

      <p className="text-heading-l my-[24px]">Application</p>

      <div className="w-full flex flex-col gap-[24px]">
        {applicationData.map((item, index) => {
          const { title, link } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={title}
                maskIcon={"PDF.png"}
                date={""}
                mediaLink={link}
                mediaType={MEDIA_TYPE.PDF}
                mediaDomain={"hkctc"}
                direction={"row"}
              />
            </div>
          );
        })}
      </div>
      <p className="text-heading-l my-[24px]">Publications</p>
      <div className={`w-full grid grid-cols-${isPC ? 2 : 1} gap-[24px]`}>
        {publicationData.map((item, index) => {
          const {
            title,
            imagePath,
            date = "",
            maskIcon,
            mediaType,
            mediaLink,
            mediaDomain,
          } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={date}
                mediaLink={mediaLink}
                mediaType={mediaType}
                mediaDomain={mediaDomain}
                direction={"row"}
                imagePath={"eventsLanding/awardScheme/" + imagePath}
              />
            </div>
          );
        })}
      </div>
      <hr className="my-[24px]" />
      <p className="text-heading-l mb-[24px]">
        List of Awardees/ Award Ceremony
      </p>
      <div
        className="flex flex-row items-center h-[90px] gap-[24px] cursor-pointer"
        onClick={() => {
          navigate("/events-promotion/award-scheme2122");
          window.scroll({
            top: 100,
            behavior: "smooth",
          });
        }}
      >
        <img
          className="w-[130px] h-full object-contain"
          src={process.env.PUBLIC_URL + "/assets/eventsLanding/2021-2022.png"}
          alt={"2023-2024"}
        />
        <div
          className={`text-highlight-m text-black py-[8px] ${
            isPC ? "pr-[16px]" : ""
          }`}
        >
          List of Awardees/ Award Ceremony
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
    </div>
  );
};
