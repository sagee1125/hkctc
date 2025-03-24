import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { award2324_multilingual as multilingual } from "./lang";
import {
  normalButtonStyle,
  activatedButtonStyle,
  SquareTitle,
  Accordion,
  type MediaTemplateWithDialogProps,
  MediaTemplateWithDialog,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";
import { MEDIA_TYPE } from "../../../../const";

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

export const AwardScheme: React.FC = () => {
  const navigate = useNavigate();
  const { isPC, language } = useSettings();

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const AwardOneButtonList = page_text.awardMap_btn;
  const awardMapOne: Record<string, React.ReactNode> = {
    [AwardOneButtonList[0]]: (
      <div
        className={`w-full grid grid-cols-${
          isPC ? "2 h-[218px]" : "1 h-auto"
        } gap-[24px] `}
      >
        <div className="border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] !text-left">
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
            {page_text.awardMap_one.platinum}
          </div>
          <p className="text-body-m">
            {page_text.awardMap_one.platinum_content}
          </p>
        </div>
        <div className="!text-left border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
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
            {page_text.awardMap_one.gold}
          </div>
          <p className="text-body-m">{page_text.awardMap_one.gold_content}</p>
        </div>
      </div>
    ),
    [AwardOneButtonList[1]]: (
      <>
        <p>{page_text.awardMap_one.awardee_be}</p>
        <br />
        <ul>
          <li>{page_text.awardMap_one.presented_with_trophy}</li> <br />
          <li>
            {page_text.awardMap_one.permit_use_logo}&nbsp;
            <a
              className="underline text-[#00E]"
              href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
            >
              {page_text.awardMap_one.guidance_note}
            </a>
            {page_text.awardMap_one.bracket}
          </li>
          <br />
          <li>{page_text.awardMap_one.invite_attend}</li>
        </ul>
      </>
    ),
    [AwardOneButtonList[2]]: (
      <>
        <p>{page_text.awardMap_one.applicant_be}</p>
        <br />
        {/* defined in App.css */}
        <div className="al">
          <li>{page_text.awardMap_one.accredited_by_hk}</li>
          <br />
          <li>{page_text.awardMap_one.located_in_hk}</li>
        </div>
        <br />
        <p>{page_text.awardMap_one.tc_refer}</p>
      </>
    ),
    [AwardOneButtonList[3]]: (
      <>
        <p>{page_text.awardMap_one.cover_areas}</p>
        <div
          className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px] my-[24px]`}
        >
          {page_text.awardMap_one.assessmentCriteriaGrid.map((item, index) => (
            <div
              key={index}
              className={`!text-left border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-${
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
          {page_text.awardMap_one.activity_carry_out}
          <br />
          <br />
          {page_text.awardMap_one.subject_provision}
          <br />
          <br />
          <p className="!text-highlight-m">
            {page_text.awardMap_one.platinum_award}
          </p>
          <br />
          {page_text.awardMap_one.fulfilled_platinum_criteria}
          <br />
          <br />
          <p className="!text-highlight-m">
            {page_text.awardMap_one.gold_award}
          </p>
          <br />
          {page_text.awardMap_one.fulfilled_gold_criteria}
        </div>
      </>
    ),
    [AwardOneButtonList[4]]: (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {page_text.awardMap_one.stagesGridOne.map((item, index) => (
          <div
            key={index}
            className={`bg-${
              index !== 0 ? "newPrimary" : "white"
            } border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px] !text-left`}
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

  const AwardTwoButtonList = page_text.awardMap_btn_2;
  const awardMapTwo: Record<string, React.ReactNode> = {
    [AwardTwoButtonList[0]]: (
      <div
        className={`w-full grid grid-cols-${
          isPC ? "2 h-[218px]" : "1 h-auto"
        } gap-[24px]`}
      >
        <div className="!text-left border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
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
            {page_text.awardMap_two.junior}
          </div>
          <p className="text-body-m">
            {page_text.awardMap_two.open_to_practitioners}
          </p>
        </div>
        <div className="!text-left border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px]">
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
            {page_text.awardMap_two.senior}
          </div>
          <p className="text-body-m">
            {page_text.awardMap_two.senior_open_practitioners}
          </p>
        </div>
      </div>
    ),
    [AwardTwoButtonList[1]]: (
      <>
        <p>{page_text.awardMap_two.awardee_be}</p>
        <br />
        <ul>
          <li>{page_text.awardMap_two.present_trophy}</li>
          <br />
          <li>{page_text.awardMap_two.invite_presentation}</li>
        </ul>
      </>
    ),
    [AwardTwoButtonList[2]]: (
      <>
        <p>{page_text.awardMap_two.applicant_be}</p>
        {/* defined in App.css */}
        <div className="al">
          <li>{page_text.awardMap_two.nominated_by_test}</li>
          <br />
          <li>{page_text.awardMap_two.employee_of_nominate}</li>
          <br />
          <li>{page_text.awardMap_two.locate_in_hk}</li>
        </div>
      </>
    ),
    [AwardTwoButtonList[3]]: (
      <>
        <p>
          {page_text.awardMap_two.each_application}
          <br />
          <br />
          {page_text.awardMap_two.commitment_learning}
          <br />
          <br />
          {page_text.awardMap_two.constructions_impact}
        </p>
      </>
    ),
    [AwardTwoButtonList[4]]: (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {page_text.awardMap_two.stagesGridTwo.map((item, index) => (
          <div
            key={index}
            className={`bg-${
              index !== 0 ? "newPrimary" : "white"
            } border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-[216px] !text-left`}
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

  const questionButtonList = page_text.questions_btn;
  const questionCategoriesMap: Record<
    string,
    Array<{ title: string; content: React.ReactNode }>
  > = {
    [questionButtonList[0]]: page_text.questions_map_content.general,
    [questionButtonList[1]]:
      page_text.questions_map_content.test_manpower_award,
    [questionButtonList[2]]:
      page_text.questions_map_content.test_professional_award,
  };

  const applicationData: Array<{
    title: string;
    link: string;
  }> = [
    {
      title: page_text.application_data[0],
      link: "/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf",
    },
    {
      title: page_text.application_data[1],
      link: "/en/event/mpaward/doc/mpaward-2023-24-Form_TC_MP01_Eng.pdf",
    },
    {
      title: page_text.application_data[2],
      link: "/en/event/mpaward/doc/mpaward-2023-24-Form_TC_MP02_Eng.pdf",
    },
  ];

  const publicationData: MediaTemplateWithDialogProps[] = [
    {
      title: page_text.publication_data[0],
      maskIcon: "PDF.png",
      date: "",
      mediaType: MEDIA_TYPE.PDF,
      mediaLink: "/en/event/mpaward/pamphlet-2023-24.pdf",
      mediaDomain: "hkctc",
    },
    {
      title: page_text.publication_data[1],
      maskIcon: "VIDEO.png",
      date: "",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaLink: "/videos/en/mpaward-2023-24-infographic-video-en.mp4 ",
      mediaDomain: "hkctc",
    },
    {
      title: page_text.publication_data[2],
      maskIcon: "PDF.png",
      date: "",
      mediaType: MEDIA_TYPE.PDF,
      mediaLink:
        "/en/event/mpaward/doc/TC-Manpower-Development-Award-Scheme-2023-24_Commemorative-Publication.pdf",
      mediaDomain: "hkctc",
    },
  ];

  const [activeAwardOneButton, setActiveAwardOneButton] = useState<number>(0);
  const [activeAwardTwoButton, setActiveAwardTwoButton] = useState<number>(0);
  const [questionCategory, setQuestionCategory] = useState<number>(0);

  return (
    <div className="w-full">
      <SquareTitle title={page_text.title} />
      <p className="text-heading-l">2023-2024</p>
      <p className="text-highlight-l my-[24px] text-[#666]">
        {page_text.result_announce}
      </p>
      <p className="text-body-m mb-[24px] text-justify">{page_text.intro}</p>
      <hr />

      <p className="text-heading-l my-[24px]" id="supporting_organizations">
        {page_text.supporting_organisations}
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
        {page_text.timeline}
      </p>
      <div className="w-full grid grid-cols-2 border-[1px] border-[#E0E0E0] mb-[24px]">
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          {page_text.date}
        </div>
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          {page_text.event}
        </div>
        {page_text.timelineList.map((item, index) => {
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

      <p className="text-heading-l">{page_text.test_cert_award}</p>
      <p className="text-body-m mt-[24px] txt-justify">
        {page_text.test_cert_award_intro}
      </p>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {AwardOneButtonList.map((btn, index) => {
          const isActivated = btn === AwardOneButtonList[activeAwardOneButton];
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardOneButton(index);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="pb-[24px] text-body-m text-justify">
        {awardMapOne[AwardOneButtonList[activeAwardOneButton]]}
      </div>

      <p className="text-heading-l">{page_text.excellent_award}</p>
      <p className="text-body-m mt-[24px] text-justify">
        {page_text.award_commends_individual}
        <br />
        <ul>
          <li>{page_text.pursue_continue_leaning}</li>
          <li>{page_text.make_contribution}</li>
        </ul>
      </p>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {AwardTwoButtonList.map((btn, index) => {
          const isActivated = btn === AwardTwoButtonList[activeAwardTwoButton];
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardTwoButton(index);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="mb-[24px] text-body-m text-justify">
        {awardMapTwo[AwardTwoButtonList[activeAwardTwoButton]]}
      </div>

      <hr />

      <p className="text-heading-l mt-[24px]">{page_text.frequent_questions}</p>
      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {questionButtonList.map((btn, index) => {
          const isActivated = index === questionCategory;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setQuestionCategory(index);
              }}
            >
              {btn.length > 48 && !isPC ? btn.slice(0, 48) + "..." : btn}
            </button>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        {questionCategoriesMap[questionButtonList[questionCategory]].map(
          (q, index) => (
            <Accordion
              key={index}
              title={`${index + 1}. ${q.title}`}
              details={<div className="!text-body-m">{q.content}</div>}
            />
          )
        )}
      </div>

      <p className="text-heading-l mt-[24px]" id="application">
        {page_text.application}
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
        {page_text.publications}
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
      <p className="text-heading-l mb-[24px]">{page_text.ceremony_list}</p>
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
          {!isPC ? page_text.tc_manpower_mb : page_text.tc_manpower_pc}
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
