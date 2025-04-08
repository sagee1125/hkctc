import React, { useState } from "react";
import classNames from "classnames";
import { Drawer } from "@mui/material";
import { award2324_list_multilingual as multilingual } from "./lang";
import {
  Accordion,
  Breadcrumb,
  InternalBackButton,
  MediaTemplateWithDialog,
  type MediaTemplateWithDialogProps,
  SquareTitle,
  activatedButtonStyle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  normalButtonStyle,
} from "../../../../components";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";
import { useNavigate } from "react-router-dom";

export const AwardScheme23to24: React.FC = () => {
  const { isPC, language, processText, convertReactNode } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const breadcrumbItems = [
    { label: processText(page_text.breadcrumb[0]), href: "/hkctc" },
    { label: processText(page_text.breadcrumb[1]), href: "/events-promotion" },
    { label: processText(page_text.breadcrumb[2]), href: "/events-promotion" },
    {
      label: processText(page_text.breadcrumb[3]),
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    {
      label: processText(page_text.breadcrumb[4]),
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    { label: processText(page_text.breadcrumb[5]) },
  ];

  const tcAwardeesBtn = page_text.tc_awardees_btn;
  const buttonOneMap: Record<string, React.ReactNode> = {
    [tcAwardeesBtn[0]]: (
      <ol>
        {page_text.tc_awardees_content.platinumAwardees.map((og, index) => (
          <li key={index}>{processText(og)}</li>
        ))}
      </ol>
    ),
    [tcAwardeesBtn[1]]: (
      <ol>
        {page_text.tc_awardees_content.goldAwardees.map((og, index) => (
          <li key={index}>{processText(og)}</li>
        ))}
      </ol>
    ),
  };

  const tcProfessionBtn = page_text.tc_profession_awardees_btn;
  const buttonTwoMap: Record<string, React.ReactNode> = {
    [tcProfessionBtn[0]]: (
      <div className="text-left">
        <div
          className={`grid grid-cols-[1fr,1fr,2fr] bg-[#E0E0E0] text-highlight-m py-[24px] w-fit min-w-full`}
        >
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            {processText(page_text.tc_profession_awardees_content.name)}
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            {processText(page_text.tc_profession_awardees_content.position)}
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            {processText(
              page_text.tc_profession_awardees_content.nominating_body
            )}
          </div>
        </div>

        {page_text.tc_profession_awardees_content.juniorGroup.map(
          (og, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr,1fr,2fr] justify-items-start content-center text-body-m w-fit min-w-full border-b last:border-0 "
            >
              {[og.one, og.two, og.three].map((c, key) => (
                <p
                  key={key}
                  className={`py-[15px] px-[10px] flex items-center ${
                    isPC ? "h-[102px]" : "min-w-[140px]"
                  }`}
                >
                  {processText(c)}
                </p>
              ))}
            </div>
          )
        )}
      </div>
    ),
    [tcProfessionBtn[1]]: (
      <div className="text-left">
        <div
          className={`grid grid-cols-[1fr,1fr,2fr] bg-[#E0E0E0] text-highlight-m py-[24px] w-fit min-w-full`}
        >
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            {processText(page_text.tc_profession_awardees_content.name)}
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            {processText(page_text.tc_profession_awardees_content.position)}
          </div>
          <div
            className={`px-[10px] flex items-center ${
              isPC ? "" : "min-w-[140px]"
            }`}
          >
            {processText(
              page_text.tc_profession_awardees_content.nominating_body
            )}
          </div>
        </div>
        {page_text.tc_profession_awardees_content.seniorGroup.map(
          (og, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr,1fr,2fr] justify-items-start content-center text-body-m w-fit min-w-full border-b last:border-0 "
            >
              {[og.one, og.two, og.three].map((c, key) => (
                <p
                  key={key}
                  className={`py-[15px] px-[10px] flex items-center ${
                    isPC ? "h-[102px]" : "min-w-[140px]"
                  }`}
                >
                  {processText(c)}
                </p>
              ))}
            </div>
          )
        )}
      </div>
    ),
  };

  const [locateAnchor, setLocateAnchor] = useState<number>(0);
  const [activeButtonOne, setActiveButtonOne] = useState<number>(0);
  const [activeButtonTwo, setActiveButtonTwo] = useState<number>(0);

  const mediaData: MediaTemplateWithDialogProps[] = [
    {
      title: page_text.media_data.title,
      maskIcon: "PRESS.png",
      date: page_text.media_data.date,
      imagePath: "press_realease_1.png",
      mediaType: MEDIA_TYPE.NEW_PAGE,
      mediaLink:
        "https://www.info.gov.hk/gia/general/202312/04/P2023120400310.htm",
    },
  ];

  const directoryAnchorIds: Array<{ id: string; title: string }> = [
    {
      id: "testing-awardees",
      title: page_text.tc_manpower_awardees,
    },

    {
      id: "excellent-awardees",
      title: page_text.tc_profession_awardees,
    },
    {
      id: "award-ceremony",
      title: page_text.award_ceremony,
    },
  ];

  const pcSidebar = (
    <div id="sticky-container" className="flex flex-col sticky top-[20px]">
      {directoryAnchorIds.map((anchor, index) => {
        const isActivated = index === locateAnchor;
        const { title, id } = anchor;

        const borderStyle = isActivated
          ? "border-newPrimary z-10"
          : "border-[#E0E0E0]";
        const fontStyle = isActivated
          ? "text-heading-m bg-newPrimary text-white"
          : "text-heading-m text-[#AAAAAA]";

        const marginStyle = index === 0 ? "" : "-mt-[2px]";
        return (
          <div
            className={classNames(
              "border-2 p-[24px] text-heading-m cursor-pointer",
              borderStyle,
              fontStyle,
              marginStyle
            )}
            tabIndex={0}
            role="button"
            onClick={() => {
              const scrollElement = document.getElementById(id);
              if (scrollElement) {
                setLocateAnchor(index);
                scrollElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            {processText(title)}
          </div>
        );
      })}
    </div>
  );
  const mobileSidebar = (
    <>
      <button
        tabIndex={0}
        role="button"
        className="!text-highlight-m text-white fixed bottom-[24px] right-[24px] z-50"
        style={{
          background: "#233F55",
          color: "white",
          border: "2px solid #F7F7F5",
          padding: "16px 24px 16px 24px",
          fontSize: "16px",
          lineHeight: "28px",
          fontWeight: 600,
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {processText(page_text.mobile_sidebar.content_list)}
      </button>

      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "auto",
            padding: "24px",
          },
        }}
      >
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-row justify-between items-center pb-[24px]">
            <p className="text-heading-m text-newPrimary">
              {processText(page_text.mobile_sidebar.content_list)}
            </p>
            <svg
              aria-label="icon"
              tabIndex={0}
              role="none"
              xmlns="https://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <path
                d="M18 18L10 10M10 10L2 2M10 10L18 2M10 10L2 18"
                stroke="#233F55"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-[0]">
            {directoryAnchorIds.map((anchor, index) => {
              const isActivated = index === locateAnchor;
              const { title, id } = anchor;

              const borderStyle = isActivated
                ? "border-newPrimary z-10"
                : "border-[#E0E0E0]";
              const fontStyle = isActivated
                ? "text-heading-m bg-newPrimary text-white"
                : "text-heading-m text-[#AAAAAA]";

              const marginStyle = index === 0 ? "" : "-mt-[2px]";
              return (
                <div
                  className={classNames(
                    "border-2 p-[24px] text-heading-m cursor-pointer",
                    borderStyle,
                    fontStyle,
                    marginStyle
                  )}
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    const scrollElement = document.getElementById(id);
                    if (scrollElement) {
                      setLocateAnchor(index);
                      scrollElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {processText(title)}
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );

  const content = (
    <>
      <SquareTitle title={processText(page_text.title)} />

      <p className="text-heading-l my-[24px]" id="awardees">
        {processText(page_text.awardees)}
      </p>
      <div id="testing-awardees">
        <Accordion
          title={processText(page_text.tc_manpower_awardees)}
          details={
            <div>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                {tcAwardeesBtn.map((b, i) => {
                  const isActivated = activeButtonOne === i;
                  return (
                    <button
                      tabIndex={0}
                      role="button"
                      key={i}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveButtonOne(i);
                      }}
                    >
                      {processText(b)}
                    </button>
                  );
                })}
              </div>
              <div className="text-body-m ml-[12px] text-justify">
                {buttonOneMap[tcAwardeesBtn[activeButtonOne]]}
              </div>
            </div>
          }
        />
      </div>
      <div className="mt-[24px]" id="excellent-awardees">
        <Accordion
          title={processText(page_text.tc_profession_awardees)}
          details={
            <>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                {tcProfessionBtn.map((b, i) => {
                  const isActivated = activeButtonTwo === i;
                  return (
                    <button
                      tabIndex={0}
                      role="button"
                      key={i}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveButtonTwo(i);
                      }}
                    >
                      {processText(b)}
                    </button>
                  );
                })}
              </div>
              <div className={`text-body-m ${isPC ? "" : "overflow-x-auto"}`}>
                {buttonTwoMap[tcProfessionBtn[activeButtonTwo]]}
              </div>
            </>
          }
        />
      </div>
      <div className="text-heading-l my-[24px]" id="award-ceremony">
        {processText(page_text.award_ceremony)}
      </div>
      {/* Ceremony1 */}
      <div className="flex items-center">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/Ceremony1.png"
          }
          className="object-contain"
          style={{ height: "auto", width: "100%" }}
          alt="Ceremony1"
        />
      </div>
      <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Ceremony2.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony2"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Ceremony3.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony3"
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[16px] py-[24px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m text-justify">
          {processText(page_text.award_presentation)}
        </p>
      </div>
      <div className={`grid grid-cols-2 gap-x-[24px]`}>
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/ProfWON.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/ProfSUN.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.wong_wing_tak_speech)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.sun_dong_deliver)}
        </p>
      </div>
      <div className="w-full flex flex-row gap-[16px] py-[24px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m text-justify">
          {processText(page_text.tc_bodies)}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation2.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.innovation_group_photo)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.innovation_group_photo_awardees)}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-[24px] mt-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation3.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/Group_photo_Secretary_for_Innovation4.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.member_with_gold_awardees_photo)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.member_with_platinum_awardees_photo)}
        </p>
      </div>

      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">{processText(page_text.media)}</p>

      <div
        className="flex flex-row items-center h-[90px] gap-[24px] cursor-pointer mb-[24px]"
        tabIndex={0}
        role="button"
        onClick={() => {
          navigate(
            `/events-promotion?section=${navItemEnum.award_scheme}&year=2324&on_detail=1`
          );
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img
          className="w-[160px] h-full object-cover flex-shrink-0"
          src={process.env.PUBLIC_URL + "/assets/eventsLanding/2023-2024.png"}
          alt={"2023-2024"}
        />
        <div
          className={`text-black py-[8px] ${
            isPC ? "pr-[16px] text-highlight-m" : "text-highlight-s"
          }`}
        >
          {processText(page_text.media_coverage)}
        </div>
        <svg
          tabIndex={0}
          role="none"
          aria-label="icon"
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

      <div className={`w-full flex flex-col gap-[24px] mb-[24px]`}>
        {mediaData.map((item, index) => {
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
      <hr className="mb-[24px]" />

      <InternalBackButton
        targetUrl={`/events-promotion?section=${navItemEnum.award_scheme}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <div className="w-full h-auto bg-white flex items-center justify-center">
        <video
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/mpaward-2023-24-Compressed.mp4"
          }
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain", // 确保视频内容保持原比例
          }}
        />
      </div>
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full h-full grid grid-cols-[1fr,2fr] pt-[48px] gap-[24px] px-[24px]">
            <div className="px-[24px] min-w-[440px]">{pcSidebar}</div>
            <div className="flex-1">{content}</div>
          </div>
        ) : (
          <div className="px-[24px] pb-[24px] flex flex-col gap-[24px]">
            <div>{mobileSidebar}</div>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
