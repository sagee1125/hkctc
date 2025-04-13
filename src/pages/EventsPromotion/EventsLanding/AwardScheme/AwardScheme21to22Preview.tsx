import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { award2122_multilingual as multilingual } from "./lang";
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

export const AwardScheme21to22Preview: React.FC<{
  handleOpenAssessmentPanel: () => void;
}> = ({ handleOpenAssessmentPanel }) => {
  const navigate = useNavigate();
  const { isPC, language, processText, convertReactNode } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;

  const stagesGridTwo = [
    {
      title: page_text.testing_profession_award_content.stagesGridTwo.stage_1,
      content:
        page_text.testing_profession_award_content.stagesGridTwo
          .stage_1_content,
    },
    {
      title: page_text.testing_profession_award_content.stagesGridTwo.stage_2,
      content: (
        <>
          <span
            className="underline cursor-pointer"
            tabIndex={0}
            role="button"
            onClick={handleOpenAssessmentPanel}
            aria-label={
              page_text.testing_profession_award_content.stagesGridTwo
                .stage_2_assessment
            }
          >
            {
              page_text.testing_profession_award_content.stagesGridTwo
                .stage_2_assessment
            }
          </span>
          &nbsp;
          {
            page_text.testing_profession_award_content.stagesGridTwo
              .stage_2_will_shortlist
          }
        </>
      ),
    },
  ];

  const stagesGridOne = [
    {
      title: page_text.stagesGridOne.stage_1,
      content: page_text.stagesGridOne.stage_1_content,
    },
    {
      title: page_text.stagesGridOne.stage_2,
      content: (
        <>
          <span
            className="underline cursor-pointer"
            tabIndex={0}
            role="button"
            onClick={handleOpenAssessmentPanel}
            aria-label={page_text.stagesGridOne.stage_2_assessment}
          >
            {page_text.stagesGridOne.stage_2_assessment}
          </span>
          &nbsp;
          {page_text.stagesGridOne.stage_2_will_shortlist}
        </>
      ),
    },
  ];

  const awardOneBtn = page_text.testing_manpower_award_btn;
  const awardMapOne: Record<string, React.ReactNode> = {
    [awardOneBtn[0]]: (
      <>
        <p>{page_text.testing_manpower_award_content.awardees_be}</p>
        <br />
        <ul>
          <li>
            {page_text.testing_manpower_award_content.present_with_trophy}
          </li>
          <br />
          <li>
            {page_text.testing_manpower_award_content.permit_use_logo}&nbsp;
            <a
              aria-label={page_text.testing_manpower_award_content.guild_note}
              className="underline text-[#00E]"
              target="_blank"
              rel="noreferrer"
              href="https://www.hkctc.gov.hk/en/event/mpaward/doc/mpaward-2023-24-Guidance-Notes_ENG.pdf"
            >
              {page_text.testing_manpower_award_content.guild_note}
            </a>
            {page_text.testing_manpower_award_content.bracket}
          </li>
          <br />
          <li>
            {
              page_text.testing_manpower_award_content
                .invite_attend_presentation
            }
          </li>
        </ul>
      </>
    ),
    [awardOneBtn[1]]: (
      <>
        <p>{page_text.testing_manpower_award_content.applicant_be}</p>
        <br />
        {/* defined in App.css */}
        <div className="al">
          <li>{page_text.testing_manpower_award_content.accredited_by_hkas}</li>
          <br />
          <li>{page_text.testing_manpower_award_content.locate_in_hk}</li>
        </div>
        <br />
        <p>{page_text.testing_manpower_award_content.test_refer_service}</p>
      </>
    ),
    [awardOneBtn[2]]: (
      <>
        <p>
          {processText(
            page_text.testing_manpower_award_content.applicant_entity_fulfill
          )}
        </p>
        <div
          className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px] my-[24px]`}
        >
          {page_text.testing_manpower_award_content.assessmentCriteriaGrid.map(
            (item, index) => (
              <div
                key={index}
                className={`border-2 border-inherit flex flex-col justify-center p-[48px] gap-[8px] h-${
                  isPC ? "[216px]" : "auto"
                }`}
              >
                <p className={`text-${item.color} underline !text-heading-s`}>
                  {processText(item.title)}
                </p>
                <p className="!text-body-m">{processText(item.content)}</p>
              </div>
            )
          )}
        </div>
        <div>
          {processText(
            page_text.testing_manpower_award_content.activity_carry_out
          )}
          <br />
          <br />
          {processText(
            page_text.testing_manpower_award_content.awardees_demonstrated
          )}
        </div>
      </>
    ),
    [awardOneBtn[3]]: (
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
        {stagesGridOne.map((item, index) => (
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
              {processText(item.title)}
            </div>
            <div
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {convertReactNode(item.content)}
            </div>
          </div>
        ))}
      </div>
    ),
  };
  const awardMapTwo: Record<string, React.ReactNode> = {
    [awardOneBtn[0]]: (
      <>
        <p>{page_text.testing_profession_award_content.awardees_be}</p>
        <br />
        <ul>
          <li>
            {page_text.testing_profession_award_content.present_with_trophy}
          </li>
          <br />
          <li>
            {
              page_text.testing_profession_award_content
                .invite_attend_presentation
            }
          </li>
        </ul>
      </>
    ),
    [awardOneBtn[1]]: (
      <>
        <p>
          {
            page_text.testing_profession_award_content
              .invite_attend_presentation
          }
        </p>
        {/* defined in App.css */}
        <div className="al">
          <li>{page_text.testing_profession_award_content.nominate_by_test}</li>
          <br />
          <li>
            {page_text.testing_profession_award_content.employee_of_nominate}
          </li>
          <br />
          <li>{page_text.testing_profession_award_content.locate_in_hk}</li>
          <br />
          <p>{page_text.testing_profession_award_content.two_subgroup}</p>
        </div>
        <div className="al">
          <li>
            <span className="!text-highlight-m">
              {page_text.testing_profession_award_content.junior_profession}
            </span>
            &nbsp;
            {
              page_text.testing_profession_award_content
                .tc_practitioners_appoint
            }
          </li>
          <br />
          <li>
            <span className="!text-highlight-m">
              {page_text.testing_profession_award_content.middle_management}
            </span>
            &nbsp;
            {page_text.testing_profession_award_content.tc_practitioners_join}
          </li>
        </div>
      </>
    ),
    [awardOneBtn[2]]: (
      <>
        <div className="al">
          {page_text.testing_profession_award_content.merits_application}
          <br />
          <br />
          <li>
            {
              page_text.testing_profession_award_content
                .commitment_continue_learning
            }
          </li>
          <br />
          <li>
            {page_text.testing_profession_award_content.impact_of_contributions}
          </li>
        </div>
      </>
    ),
    [awardOneBtn[3]]: (
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
              {processText(item.title)}
            </div>
            <div
              className={`text-${index === 0 ? "black" : "white"} !text-body-m`}
            >
              {convertReactNode(item.content)}
            </div>
          </div>
        ))}
      </div>
    ),
  };

  const questionBtn = page_text.question_btn;
  const questionCategoriesMap: Record<
    string,
    Array<{ title: string; content: React.ReactNode }>
  > = {
    [questionBtn[0]]: page_text.question_general_list,
    [questionBtn[1]]: page_text.question_tc_manpower_list,
    [questionBtn[2]]: page_text.question_tc_profession_list,
  };

  const applicationData: Array<{
    title: string;
    link: string;
  }> = [
    {
      title: page_text.application_data.guide_note,
      link: "/en/event/mpaward/GuidanceNotes.pdf",
    },
    {
      title: page_text.application_data.app_form_tc_manpower,

      link: "/en/event/mpaward/MP01.pdf",
    },
    {
      title: page_text.application_data.app_form_tc_profession,
      link: "/en/event/mpaward/MP02.pdf",
    },
  ];

  const publicationData: MediaTemplateWithDialogProps[] = [
    {
      title: page_text.publications_data.pamphlet,
      maskIcon: "PDF.png",
      date: "",
      mediaType: MEDIA_TYPE.PDF,
      mediaLink: "/en/event/mpaward/pamphlet.pdf",
      mediaDomain: "hkctc",
    },
    {
      title: page_text.publications_data.congratulatory_msg,
      maskIcon: "VIDEO.png",
      date: "",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaLink: "/videos/en/MPAward_Congratulatory_Video-EN.mp4",
      mediaDomain: "hkctc",
    },
    {
      title: page_text.publications_data.highlight,
      maskIcon: "VIDEO.png",
      date: "",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaLink: "/videos/tc/MPAward_Highlight.mp4",
      mediaDomain: "hkctc",
    },
  ];

  const [activeAwardOneButton, setActiveAwardOneButton] = useState<number>(0);
  const [activeAwardTwoButton, setActiveAwardTwoButton] = useState<number>(0);
  const [questionCategory, setQuestionCategory] = useState<number>(0);

  return (
    <div className="w-full">
      <SquareTitle title={processText(page_text.title)} />
      <div className="text-highlight-l my-[24px] text-[#666]">
        {processText(page_text.result_announce)}
      </div>
      <div className="text-body-m mb-[24px] text-justify">
        {processText(page_text.hkctc_launches_first)}
      </div>
      <hr />

      <div className="text-heading-l my-[24px]" id="supporting_organizations">
        {processText(page_text.supporting_organisations)}
      </div>
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

      <p
        className="text-heading-l my-[24px]"
        id="timeline"
        role="heading"
        aria-level={10}
      >
        {processText(page_text.timeline)}
      </p>
      <div className="w-full grid grid-cols-2 border-[1px] border-[#E0E0E0] mb-[24px]">
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          {processText(page_text.date)}
        </div>
        <div className="text-highlight-m px-[10px] py-[15px] bg-[#E0E0E0] flex items-center justify-start">
          {processText(page_text.event)}
        </div>
        {page_text.timeline_list.map((item, index) => {
          const { date, event } = item;
          return (
            <React.Fragment key={index}>
              <div className="text-body-m px-[10px] py-[15px] flex items-center justify-start border-t border-gray-300">
                {processText(date)}
              </div>
              <div className="text-body-m px-[10px] py-[15px] flex items-center justify-start border-t border-gray-300">
                {processText(event)}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="text-heading-l">
        {processText(page_text.testing_manpower_award)}
      </div>
      <p className="text-body-m mt-[24px] text-justify">
        {processText(page_text.award_recognises_accredited)}
      </p>

      <div className="flex flex-wrap gap-[8px] my-[24px] text-justify">
        {awardOneBtn.map((btn, index) => {
          const isActivated = index === activeAwardOneButton;
          return (
            <button
              tabIndex={0}
              role="button"
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardOneButton(index);
              }}
            >
              {processText(btn)}
            </button>
          );
        })}
      </div>

      <div className="pb-[24px] text-body-m">
        {convertReactNode(awardMapOne[awardOneBtn[activeAwardOneButton]])}
      </div>

      <div className="text-heading-l">
        {processText(page_text.testing_profession_award)}
      </div>
      <div className="text-body-m mt-[24px]">
        {processText(page_text.award_commends_individual)}
        <br />
        <br />
        <ul>
          <li>{processText(page_text.purse_continue_learning)}</li>
          <li>{processText(page_text.make_contribution)}</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {awardOneBtn.map((btn, index) => {
          const isActivated = index === activeAwardTwoButton;
          return (
            <button
              tabIndex={0}
              role="button"
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveAwardTwoButton(index);
              }}
            >
              {processText(btn)}
            </button>
          );
        })}
      </div>

      <div className="mb-[24px] text-body-m">
        {convertReactNode(awardMapTwo[awardOneBtn[activeAwardTwoButton]])}
      </div>

      <hr />

      <p className="text-heading-l mt-[24px]" role="heading" aria-level={10}>
        {processText(page_text.faq)}
      </p>
      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {questionBtn.map((btn, index) => {
          const isActivated = index === questionCategory;
          const label = processText(btn);
          return (
            <button
              tabIndex={0}
              role="button"
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setQuestionCategory(index);
              }}
            >
              {label.length > 48 && !isPC ? label.slice(0, 48) + "..." : label}
            </button>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        {questionCategoriesMap[questionBtn[questionCategory]].map(
          (q, index) => (
            <Accordion
              key={index}
              title={`${index + 1}. ${processText(q.title)}`}
              details={
                <div className="!text-body-m">
                  {convertReactNode(q.content)}
                </div>
              }
            />
          )
        )}
      </div>

      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {processText(page_text.application)}
      </p>

      <div className="w-full flex flex-col gap-[24px]">
        {applicationData.map((item, index) => {
          const { title, link } = item;
          return (
            <div key={index} className="w-full flex flex-row gap-[24px]">
              <MediaTemplateWithDialog
                title={processText(title)}
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
      <p className="text-heading-l my-[24px]" role="heading" aria-level={10}>
        {processText(page_text.publications)}
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
                title={processText(title)}
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
      <div className="text-heading-l mb-[24px]">
        {processText(page_text.award_ceremony_list)}
      </div>
      <div
        className="flex flex-row items-center h-[90px] gap-[24px] cursor-pointer"
        tabIndex={0}
        role="button"
        onClick={() => {
          navigate("/events-promotion/award-scheme2122");
          window.scroll({
            top: 100,
            behavior: "smooth",
          });
        }}
        aria-label={processText(page_text.award_ceremony_list)}
      >
        <img
          className="w-[130px] h-full object-contain flex-shrink-0"
          src={process.env.PUBLIC_URL + "/assets/eventsLanding/2021-2022.png"}
          alt={"2023-2024"}
        />
        <div
          className={`text-black py-[8px] ${
            isPC ? "pr-[16px] text-highlight-m" : "text-highlight-s"
          }`}
        >
          {processText(page_text.award_ceremony_list_long)}
        </div>
        <svg
          aria-hidden="true"
          className="flex-shrink-0"
          xmlns="https://www.w3.org/2000/svg"
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
