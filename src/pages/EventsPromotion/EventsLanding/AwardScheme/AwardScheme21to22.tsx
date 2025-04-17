import React, { useState } from "react";
import classNames from "classnames";
import { Drawer } from "@mui/material";
import { award2122_list_multilingual as multilingual } from "./lang";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import {
  Accordion,
  fullContainer,
  maxPCContainer,
  Breadcrumb,
  SquareTitle,
  activatedButtonStyle,
  normalButtonStyle,
  InternalBackButton,
  maxMobileContainer,
  type MediaTemplateWithDialogProps,
  MediaTemplateWithDialog,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";

export const AwardScheme21to22: React.FC = () => {
  const [locateAnchor, setLocateAnchor] = useState<number>(0);
  const [activeButtonTwo, setActiveButtonTwo] = useState<number>(0);
  const { isPC, language, processText, convertReactNode } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const [isOpen, setIsOpen] = useState(false);

  const mediaData: MediaTemplateWithDialogProps[] = [
    {
      title: processText(page_text.mediaData.title),
      maskIcon: "PRESS.png",
      date: page_text.mediaData.date,
      imagePath: "press_release.png",
      mediaType: MEDIA_TYPE.NEW_PAGE,
      mediaLink:
        "https://www.info.gov.hk/gia/general/202112/22/P2021122200211.htm",
    },
  ];

  const awardee_sub_group = page_text.awardee_sub_group;
  const buttonTwoMap: Record<string, React.ReactNode> = {
    [awardee_sub_group[0]]: (
      <div>
        {page_text.juniorGroup.map((og, index) => (
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
        ))}
      </div>
    ),
    [awardee_sub_group[1]]: (
      <div>
        {page_text.middleGroup.map((og, index) => (
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
        ))}
      </div>
    ),
  };

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
      href: `/events-promotion?section=${navItemEnum.award_scheme}&year=2122`,
    },
    { label: processText(page_text.breadcrumb[5]) },
  ];

  const directoryAnchorIds: Array<{ id: string; title: string }> = [
    {
      id: "testing_testing_2122",
      title: page_text.directory_sidebar.tc_manpower,
    },
    {
      id: "excellent_awardees_2122",
      title: page_text.directory_sidebar.tc_profession,
    },
    {
      id: "award_ceremony_2122",
      title: page_text.directory_sidebar.award_ceremony,
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
          : "text-heading-m text-[#767676]";

        const marginStyle = index === 0 ? "" : "-mt-[2px]";
        const handleScrollId = (): void => {
          const scrollElement = document.getElementById(id);
          if (scrollElement) {
            setLocateAnchor(index);
            scrollElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        };
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
            onClick={handleScrollId}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleScrollId();
              }
            }}
            aria-label={processText(title)}
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
        aria-label={processText(page_text.mobile_sidebar.content_list)}
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
          <div
            className="w-full flex flex-row justify-between items-center pb-[24px] cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsOpen(false);
              }
            }}
            aria-label={processText(page_text.mobile_sidebar.content_list)}
            role="button"
            tabIndex={0}
          >
            <p className="text-heading-m text-newPrimary">
              {processText(page_text.mobile_sidebar.content_list)}
            </p>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
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
                : "text-heading-m text-[#767676]";

              const marginStyle = index === 0 ? "" : "-mt-[2px]";
              const handleScroll = (): void => {
                const scrollElement = document.getElementById(id);
                if (scrollElement) {
                  setLocateAnchor(index);
                  scrollElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              };
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
                  onClick={handleScroll}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleScroll();
                    }
                  }}
                  aria-label={processText(title)}
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
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title={processText(page_text.tc_manpower_development)} />
      <div className="text-heading-l" id="testing_testing_2122">
        {processText(page_text.awardees)}
      </div>
      <div>
        <Accordion
          title={processText(page_text.directory_sidebar.tc_manpower)}
          details={
            <div>
              <ol className="ml-[12px]">
                {page_text.manpowerDevelopmentAwardees.map((a, i) => {
                  return (
                    <li key={i} className="w-full">
                      {processText(a)}
                    </li>
                  );
                })}
              </ol>
              <br />
              <p className="text-[#4B4746]">
                {processText(page_text.corporate_awardees)}
              </p>
              <br />
              <ol>
                <li>{processText(page_text.hk_jockey_club)}</li>
                <li>{processText(page_text.ul_international)}</li>
              </ol>
            </div>
          }
        />
      </div>
      <div id="excellent_awardees_2122">
        <Accordion
          title={processText(page_text.directory_sidebar.tc_profession)}
          details={
            <>
              <div className="flex flex-wrap gap-[8px] mb-[16px]">
                {awardee_sub_group.map((b, i) => {
                  const isActivated = activeButtonTwo === i;
                  const btnText = processText(b);
                  return (
                    <button
                      key={i}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveButtonTwo(i);
                      }}
                      aria-label={btnText}
                    >
                      {btnText}
                    </button>
                  );
                })}
              </div>
              <div
                className={`text-body-m !text-left ${
                  isPC ? "" : "overflow-x-auto"
                }`}
              >
                <div
                  className={`grid grid-cols-[1fr,1fr,2fr] bg-[#E0E0E0] text-highlight-m py-[24px] w-fit min-w-full`}
                >
                  <div
                    className={`px-[10px] flex items-center ${
                      isPC ? "" : "min-w-[140px]"
                    }`}
                  >
                    {processText(page_text.name)}
                  </div>
                  <div
                    className={`px-[10px] flex items-center ${
                      isPC ? "" : "min-w-[140px]"
                    }`}
                  >
                    {processText(page_text.position)}
                  </div>
                  <div
                    className={`px-[10px] flex items-center ${
                      isPC ? "" : "min-w-[140px]"
                    }`}
                  >
                    {processText(page_text.nominate_test_body)}
                  </div>
                </div>
                {convertReactNode(
                  buttonTwoMap[awardee_sub_group[activeButtonTwo]]
                )}
              </div>
            </>
          }
        />
      </div>
      <div className="text-heading-l" id="award_ceremony_2122">
        {processText(page_text.directory_sidebar.award_ceremony)}
      </div>
      <div className="flex items-center">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/21-ceremony-1.png"
          }
          className="object-contain"
          style={{ height: "auto", width: "100%" }}
          alt="Ceremony1"
          aria-hidden="true"
        />
      </div>

      <div className="grid grid-cols-2 gap-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-2.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony2"
            aria-hidden="true"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-3.png"
            }
            className="object-cover h-full w-full"
            alt="Ceremony3"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[16px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m text-justify">
          {processText(page_text.award_present_ceremony)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-4.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-5.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.albert_yu)} <br />
          {processText(page_text.deliver_speech)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.secretary_innovation_tech)}
        </p>
      </div>

      <div className="w-full flex flex-row gap-[16px]">
        <div className="w-[32px] bg-[#333333]" />
        <p className="text-body-m text-justify">
          {processText(page_text.ceremony_tc_practitioners)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-[24px]">
        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-6.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-7.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          {processText(page_text.from_left)}
          <br />
          {processText(page_text.ms_pun_commissioner)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          {processText(page_text.group_photo_members)}
        </p>

        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-8.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-9.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          {processText(page_text.group_photo_excellent_awardees)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          {processText(page_text.group_photo_tc)}
        </p>

        {/* left img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-10.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        {/* right img */}
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-11.png"
            }
            className="object-cover h-full w-full"
            alt="awardScheme"
            aria-hidden="true"
          />
        </div>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          {processText(page_text.hk_jockey_club_awarded)}
        </p>
        <p className="text-italic-s text-grey italic mt-[16px] mb-[20px]">
          {processText(page_text.hk_jockey_club_awarded)}
        </p>
        <div className="flex items-stretch">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/awardScheme/21-ceremony-12.png"
            }
            className="object-cover h-full w-full"
            alt={processText(page_text.awardees_excellent_tc)}
            aria-hidden="true"
          />
        </div>
        <div />
        <p className="text-italic-s text-grey italic mt-[16px]">
          {processText(page_text.awardees_excellent_tc)}
        </p>
      </div>

      <hr />

      <div className="text-heading-l"> {processText(page_text.media)}</div>

      <div className={`w-full flex flex-col gap-[24px]`}>
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
      <hr />
      <InternalBackButton
        targetUrl={`/events-promotion?section=${navItemEnum.award_scheme}`}
      />
    </div>
  );
  return (
    <div style={fullContainer}>
      <div className="w-full h-auto bg-white flex items-center justify-center">
        <video
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/mpaward-2021-22-Compressed.mp4"
          }
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain",
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
