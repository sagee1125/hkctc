import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  normalButtonStyle,
  activatedButtonStyle,
  SquareTitle,
} from "../../../../components";

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
const awardMapOne: Record<string, React.ReactNode> = {
  "Two Tiers of Awards": (
    <div className="w-full grid grid-cols-2 gap-[24px] h-[218px]">
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
        appropriate on their websites and promotional materials (Please refer to
        the Guidelines on the Use of the Logos under the Testing and
        Certification Manpower Development Corporate Award at Annex of the&nbsp;
        <a
          className="underline"
          href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
        >
          Guidance Notes
        </a>
        );
      </li>
      <br />

      <li>Invited to attend the presentation ceremony and publicity events.</li>
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
      <div className="grid grid-cols-2 gap-[24px] my-[24px]">
        {assessmentCriteriaGrid.map((item, index) => (
          <div
            key={index}
            className="border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px]"
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
        Those who have fulfilled 19 or more of the 24 Criteria, inclusive of at
        least two Criteria under each Area
        <br />
        <br />
        Gold Award:
        <br />
        Those who have fulfilled 10 or more of the 24 Criteria, inclusive of at
        least two Criteria under each Area
      </p>
    </>
  ),
  "Selection Process": (
    <div className="grid grid-cols-2 gap-[24px]">
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
          <p className={`text-${index === 0 ? "black" : "white"} !text-body-m`}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  ),
};

const awardMapTwo: Record<string, React.ReactNode> = {
  "Two Tiers of Awards": (
    <div className="w-full grid grid-cols-2 gap-[24px] h-[218px]">
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
          Open to T&C practitioners who have 6 years up to less than 20 years of
          T&C services in aggregate
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
      <li>Invited to attend the presentation ceremony and publicity events</li>
    </>
  ),
  Eligibility: (
    <>
      <p>Applicant practitioners must be -</p>
      <br />
      <li>
        Nominated by a testing and certification body which is accredited by the
        Hong Kong Accreditation Service (HKAS) or other accreditation bodies
        having Mutual Recognition Arrangements with HKAS;
      </li>
      <br />
      <li>
        An employee of the nominating testing and certification body for at
        least 1 year; and
      </li>
      <br />
      <li>
        Located in Hong Kong with major duty to carry out testing, calibration,
        inspection and/or certification service.
      </li>
    </>
  ),
  "Assessment Criteria": (
    <>
      <p>
        Each application will be considered on the basis of its overall merits,
        including but not limited to -
        <br />
        <br />
        i. Commitment to continuous learning and professional development by
        acquiring new skills, capabilities as well as relevant academic and
        professional qualifications after joining the testing and certification
        sector;
        <br />
        <br />
        ii. Impact/significance of contributions made to improving service
        quality or productivity of the nominating testing and certification body
        (e.g. adopting innovation and/or new technology in service delivery).
      </p>
    </>
  ),
  "Selection Process": (
    <div className="grid grid-cols-2 gap-[24px]">
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
          <p className={`text-${index === 0 ? "black" : "white"} !text-body-m`}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  ),
};
const questionCategories = [
  "General",
  "Testing and Certification Manpower Development Corporate Award",
  "Excellent Testing and Certification Professional Award",
];

export const AwardScheme: React.FC = () => {
  const navigate = useNavigate();

  const [activeAwardOneButton, setActiveAwardOneButton] = useState<string>(
    Object.keys(awardMapOne)[0]
  );
  const [activeAwardTwoButton, setActiveAwardTwoButton] = useState<string>(
    Object.keys(awardMapTwo)[0]
  );
  const [questionCategoriesArray, setQuestionCategoriesArray] =
    useState<number>(0);

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
      onClick: () => {},
    },
  ];

  return (
    <div className="w-full mb-[48px] flex flex-col">
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
              <div className="text-highlight-m text-black py-[8px] pr-[16px]">
                {title}
              </div>
              <Icon
                icon="teenyicons:right-outline"
                style={{ height: "16px", width: "16px", strokeWidth: "2px" }}
              />
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

      <div className="mb-[24px] text-body-m">
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
          Making outstanding contribution s to improving service quality or
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
        {questionCategories.map((btn, index) => {
          const isActivated = index === questionCategoriesArray;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setQuestionCategoriesArray(index);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-[8px] pb-[48px]">
        <div className="w-full flex flex-row justify-between p-[24px] border-2 border-inherit">
          <p>
            1. Is there any submission or processing fee for the Award Scheme?
          </p>
          <Icon icon="icon-park-outline:down" className="h-[16px] w-[16px]" />
        </div>
        <div className="w-full flex flex-row justify-between p-[24px] border-2 border-inherit">
          <p>
            2. Can we submit applications for both Testing and Certification
            Manpower Development Corporate Award and Excellent Testing and
            Certification Professional Award?
          </p>
          <Icon icon="icon-park-outline:down" className="h-[16px] w-[16px]" />
        </div>
        <div className="w-full flex flex-row justify-between p-[24px] border-2 border-inherit">
          <p>3. Is there a fixed number of awardees?</p>
          <Icon icon="icon-park-outline:down" className="h-[16px] w-[16px]" />
        </div>
      </div>
    </div>
  );
};
