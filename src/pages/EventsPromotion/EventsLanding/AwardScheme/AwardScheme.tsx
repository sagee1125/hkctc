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

const applicationData: Array<{
  title: string;
  link: string;
}> = [
  {
    title: "Guidance Notes",
    link: "/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf",
  },
  {
    title:
      "Application Form - Testing and Certification Manpower Development Corporate Award (Form T&C MP01)",
    link: "/en/event/mpaward/doc/mpaward-2023-24-Form_TC_MP01_Eng.pdf",
  },
  {
    title:
      "Application Form - Excellent Testing and Certification Professional Award (Form T&C MP02)",
    link: "/en/event/mpaward/doc/mpaward-2023-24-Form_TC_MP02_Eng.pdf",
  },
];

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
          Annex to the&nbsp;
          <a
            className="underline text-[#00E]"
            href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
          >
            Guidance Notes
          </a>
          &nbsp;for details about the use of the logo for the Gold Award and
          Platinum Award under the Corporate Award as appropriate.
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

const publicationData: MediaTemplateWithDialogProps[] = [
  {
    title: "Pamphlet",
    maskIcon: "PDF.png",
    date: "",
    mediaType: MEDIA_TYPE.PDF,
    mediaLink: "/en/event/mpaward/pamphlet-2023-24.pdf",
    mediaDomain: "hkctc",
  },
  {
    title: "Infographic video",
    maskIcon: "VIDEO.png",
    date: "",
    mediaType: MEDIA_TYPE.VIDEO,
    mediaLink: "/videos/en/mpaward-2023-24-infographic-video-en.mp4 ",
    mediaDomain: "hkctc",
  },
  {
    title: "Commemorative publication",
    maskIcon: "PDF.png",
    date: "",
    mediaType: MEDIA_TYPE.PDF,
    mediaLink:
      "/en/event/mpaward/doc/TC-Manpower-Development-Award-Scheme-2023-24_Commemorative-Publication.pdf",
    mediaDomain: "hkctc",
  },
];
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
        <div className="border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.4375 4H18.4375V3C18.4375 2.73478 18.3321 2.48043 18.1446 2.29289C17.9571 2.10536 17.7027 2 17.4375 2H7.4375C7.17228 2 6.91793 2.10536 6.73039 2.29289C6.54286 2.48043 6.4375 2.73478 6.4375 3V4H3.4375C3.17228 4 2.91793 4.10536 2.73039 4.29289C2.54286 4.48043 2.4375 4.73478 2.4375 5V8C2.4375 12.31 4.2375 14.91 7.2575 15C7.69814 15.762 8.30103 16.4176 9.02341 16.9205C9.74579 17.4234 10.57 17.7612 11.4375 17.91V20H9.4375V22H15.4375V20H13.4375V17.91C14.305 17.7612 15.1292 17.4234 15.8516 16.9205C16.574 16.4176 17.1769 15.762 17.6175 15C20.6175 14.9 22.4375 12.3 22.4375 8V5C22.4375 4.73478 22.3321 4.48043 22.1446 4.29289C21.9571 4.10536 21.7027 4 21.4375 4ZM4.4375 8V6H6.4375V12.83C4.6575 12.08 4.4375 9.3 4.4375 8ZM18.4375 12.83V6H20.4375V8C20.4375 9.3 20.2175 12.08 18.4375 12.83Z"
                fill="#363636"
              />
            </svg>
            Platinum Award
          </div>
          <p className="text-body-m">
            Those who have fulfilled 19 or more of the 24 Assessment Criteria,
            inclusive of at least two Criteria under each Area
          </p>
        </div>
        <div className="border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.4375 4H18.4375V3C18.4375 2.73478 18.3321 2.48043 18.1446 2.29289C17.9571 2.10536 17.7027 2 17.4375 2H7.4375C7.17228 2 6.91793 2.10536 6.73039 2.29289C6.54286 2.48043 6.4375 2.73478 6.4375 3V4H3.4375C3.17228 4 2.91793 4.10536 2.73039 4.29289C2.54286 4.48043 2.4375 4.73478 2.4375 5V8C2.4375 12.31 4.2375 14.91 7.2575 15C7.69814 15.762 8.30103 16.4176 9.02341 16.9205C9.74579 17.4234 10.57 17.7612 11.4375 17.91V20H9.4375V22H15.4375V20H13.4375V17.91C14.305 17.7612 15.1292 17.4234 15.8516 16.9205C16.574 16.4176 17.1769 15.762 17.6175 15C20.6175 14.9 22.4375 12.3 22.4375 8V5C22.4375 4.73478 22.3321 4.48043 22.1446 4.29289C21.9571 4.10536 21.7027 4 21.4375 4ZM4.4375 8V6H6.4375V12.83C4.6575 12.08 4.4375 9.3 4.4375 8ZM18.4375 12.83V6H20.4375V8C20.4375 9.3 20.2175 12.08 18.4375 12.83Z"
                fill="#EE9C22"
              />
            </svg>
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
        <p>Awardees will be -</p>
        <br />
        <ul>
          <li>Presented with a Trophy and an Award Certificate;</li> <br />
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
        <div>
          Activities carried out and achievements made during the period from 1
          June 2021 up to the date of application would be considered for the
          Award.
          <br />
          <br />
          Subject to provision of valid and credible supporting documents,
          applicant entities would be eligible for the award in two tiers -
          <br />
          <br />
          <p className="!text-highlight-m">Platinum Award:</p>
          <br />
          Those who have fulfilled 19 or more of the 24 Criteria, inclusive of
          at least two Criteria under each Area
          <br />
          <br />
          <p className="!text-highlight-m">Gold Award:</p>
          <br />
          Those who have fulfilled 10 or more of the 24 Criteria, inclusive of
          at least two Criteria under each Area
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
    "Two Tiers of Awards": (
      <div
        className={`w-full grid grid-cols-${
          isPC ? "2 h-[218px]" : "1 h-auto"
        } gap-[24px]`}
      >
        <div className="border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <mask
                id="mask0_3330_1579"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="22"
                height="24"
              >
                <path
                  d="M15.4375 8C15.4375 9.06087 15.0161 10.0783 14.2659 10.8284C13.5158 11.5786 12.4984 12 11.4375 12C10.3766 12 9.35922 11.5786 8.60907 10.8284C7.85893 10.0783 7.4375 9.06087 7.4375 8"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4375 4C10.3766 4 9.35922 4.42143 8.60907 5.17157C7.85893 5.92172 7.4375 6.93913 7.4375 8H15.4375C15.4375 6.93913 15.0161 5.92172 14.2659 5.17157C13.5158 4.42143 12.4984 4 11.4375 4Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.4375 8H17.4375M11.4375 2V4"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4375 13.5C6.743 13.5 2.9375 17.0815 2.9375 21.5H19.9375C19.9375 17.0815 16.132 13.5 11.4375 13.5Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.4375 17V19M14.4375 17V19"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#mask0_3330_1579)">
                <path d="M-0.5625 0H23.4375V24H-0.5625V0Z" fill="#D1E39B" />
              </g>
            </svg>
            Junior Professional
          </div>
          <p className="text-body-m">
            Open to T&C practitioners who have 1 year up to less than 6 years of
            T&C services in aggregate
          </p>
        </div>
        <div className="border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
          <div className="text-heading-s flex flex-row items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <mask
                id="mask0_3330_1631"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="22"
                height="24"
              >
                <path
                  d="M15.4375 8C15.4375 9.06087 15.0161 10.0783 14.2659 10.8284C13.5158 11.5786 12.4984 12 11.4375 12C10.3766 12 9.35922 11.5786 8.60907 10.8284C7.85893 10.0783 7.4375 9.06087 7.4375 8"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4375 4C10.3766 4 9.35922 4.42143 8.60907 5.17157C7.85893 5.92172 7.4375 6.93913 7.4375 8H15.4375C15.4375 6.93913 15.0161 5.92172 14.2659 5.17157C13.5158 4.42143 12.4984 4 11.4375 4Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.4375 8H17.4375M11.4375 2V4"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4375 13.5C6.743 13.5 2.9375 17.0815 2.9375 21.5H19.9375C19.9375 17.0815 16.132 13.5 11.4375 13.5Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.4375 17V19M14.4375 17V19"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#mask0_3330_1631)">
                <path d="M-0.5625 0H23.4375V24H-0.5625V0Z" fill="#BBC9E7" />
              </g>
            </svg>
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
        <ul>
          <li>Presented with a Trophy and an Award Certificate;</li>
          <br />
          <li>
            Invited to attend the presentation ceremony and publicity events
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
        </div>
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
          certification industry;
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

  return (
    <div className="w-full">
      <SquareTitle title="Testing & Certification Manpower Development Award Scheme" />
      <p className="text-heading-l">2023-2024</p>
      <p className="text-highlight-l my-[24px] text-[#666]">
        [Results announced on 4 December 2023]
      </p>
      <p className="text-body-m mb-[24px]">
        With a view to encouraging the testing and certification (T&C) bodies to
        invest in talent training and development, while also commending those
        T&C practitioners who has striven for continuous learning and
        professional development, and/or contributed to service quality
        improvement, the Hong Kong Council for Testing and Certification (HKCTC)
        launched the first “Testing and Certification Manpower Development Award
        Scheme” in 2021. Having regard to the favourable feedback from the T&C
        industry, HKCTC organised in 2023 again the Award Scheme (the 2023 - 24
        Award Scheme).
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
      <p className="text-body-m mt-[24px]">
        This Award commends individual T&C practitioners who have demonstrated
        excellence in various aspects, including but not limited to the
        followings:
        <br />
        <ul>
          <li>
            Pursuing continuous learning and professional development by
            acquiring new skills, capabilities as well as relevant academic and
            professional qualifications after joining the T&C industry;
          </li>
          <li>
            Making outstanding contributions to improving service quality or
            productivity; etc
          </li>
        </ul>
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

      <p className="text-heading-l mt-[24px]" id="application">
        Application
      </p>
      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
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
      <p className="text-heading-l my-[24px]" id="publications">
        Publications
      </p>
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
          navigate("/events-promotion/award-scheme2324");
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img
          className="w-[160px] h-full max-w-[160px] object-cover"
          src={process.env.PUBLIC_URL + "/assets/eventsLanding/2023-2024.png"}
          alt={"2023-2024"}
        />
        <div
          className={`text-highlight-m text-black py-[8px] ${
            isPC ? "pr-[16px]" : ""
          }`}
        >
          {!isPC
            ? "T&C Manpower Development Award Scheme..."
            : "T&C Manpower Development Award Scheme 2023-2024"}
        </div>
        <svg
          className="flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_2682_55750)">
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
