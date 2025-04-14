import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { EmailBox, SquareTitle, Link } from "../../components";
import { Language, useSettings } from "../../context";
import { WhatsNewConfiguration, WhatsNewConfiguration_cn } from "../../const";
import { useNavigate } from "react-router-dom";

const multilingual = {
  en: {
    advertorials: "Advertorials",
    pamphlets_booklets: "Pamphlets And Booklets",
    hkctc_newsletter: "HKCTC Newsletters",
    hkctc_reports: "HKCTC Reports",
    seminar_workshop: "Seminars & Workshops",
    whats_new: "What’s New",
    materials: "Materials",
  },
  cn: {
    advertorials: "特約專輯",
    pamphlets_booklets: "宣傳單張及小冊子",
    hkctc_newsletter: "香港檢測和認證局通訊",
    hkctc_reports: "香港檢測和認證局報告",
    seminar_workshop: "研討會與工作坊",
    whats_new: "最新消息",
    materials: "資源",
  },
};
export const GeneralPublicContent: React.FC = () => {
  const { getPageText, isPC, language, processText } = useSettings();
  const isEn = language === Language.EN;
  const page_text = getPageText(multilingual);
  const navigate = useNavigate();

  const {
    hkctc_newsletter,
    hkctc_reports,
    pamphlets_booklets,
    advertorials,
    seminar_workshop,
    whats_new,
    materials,
  } = page_text;
  const materialsData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: hkctc_reports as string,
      imgUrl: "material_1",
      link: "/events-promotion?section=hkctc_reports",
    },
    {
      title: hkctc_newsletter as string,
      imgUrl: "material_2",
      link: "/events-promotion?section=hkctc_newsletter",
    },
    {
      title: pamphlets_booklets as string,
      imgUrl: "material_3",
      link: "/events-promotion?section=pamphlets_booklets",
    },
    {
      title: advertorials as string,
      imgUrl: "material_4",
      link: "/events-promotion?section=advertorials",
    },
  ];
  const whatsNewData = isEn ? WhatsNewConfiguration : WhatsNewConfiguration_cn;

  return (
    <div
      className={`w-full ${
        isPC ? "grid grid-cols-[2fr,1fr]" : "flex flex-col-reverse"
      } gap-[24px] pb-[48px]`}
      style={{ marginTop: "24px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      <div className="flex flex-col gap-[24px]">
        <span className="flex flex-row items-center">
          <div
            className="cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label={whats_new as string}
            onClick={() => {
              navigate("/whats-new");
            }}
          >
            <SquareTitle title={whats_new as string} />
          </div>
          <ArrowForwardIosIcon
            sx={{
              marginLeft: "8px",
              width: "24px",
              height: "24px",
            }}
          />
        </span>
        <>
          {whatsNewData.map((w, i) => {
            const { title } = w;
            return (
              <div
                className={`flex ${
                  isPC
                    ? "flex-row-reverse"
                    : "flex-col-reverse w-full gap-[24px]"
                } items-center`}
                key={i}
              >
                <div
                  className={`flex flex-col w-full ${
                    isPC ? "ml-[24px]" : "mx-[24px]"
                  } gap-[16px]`}
                >
                  <div className={"text-heading-m"}>
                    <Link
                      linkColor="#203136"
                      innerLink={w.redirectTo}
                      outerLink={w.redirectTo}
                    >
                      {processText(title)}
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[8px] text-body-s">
                    <img
                      src={
                        process.env.PUBLIC_URL + `/assets/icons/calendar.svg`
                      }
                      alt={w.date}
                      aria-label={processText(title)}
                    />
                    {w.date}
                  </div>
                </div>

                <img
                  className={`${
                    isPC ? "w-[278px] h-full" : "w-full h-auto"
                  } object-cover cursor-pointer`}
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    if (w.redirectTo) navigate(w.redirectTo);
                  }}
                  src={`${process.env.PUBLIC_URL}/assets/whatsNew/${w.imagePath}`}
                  alt={w.title}
                  aria-label={"image - " + w.title}
                />
              </div>
            );
          })}
        </>
      </div>
      {/* Materials & Enquires */}
      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px] flex flex-col gap-[24px]">
          <p className="text-heading-l" role="heading" aria-level={10}>
            {materials as string}
          </p>
          <div className="flex flex-col gap-[24px]">
            {materialsData.map((mat, index) => {
              const { title, imgUrl, link } = mat;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start gap-[24px] cursor-pointer"
                  onClick={() => {
                    navigate(link);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={title}
                >
                  <img
                    className={`w-[130px] h-auto`}
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/generalPublic/${imgUrl}.png`
                    }
                    alt={title}
                    aria-label={"image - " + title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
              );
            })}
          </div>
          <div>
            <div
              role="button"
              tabIndex={0}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/workshop_1.png)`,
                display: "flex",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                height: "134px",
                cursor: "pointer",
              }}
              aria-label="redirect to the seminar workshop in events promotion section"
              onClick={() => {
                navigate("/events-promotion?section=seminar_workshop");
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <div className="flex items-end w-full h-full pl-[24px] pb-[24px]">
                <p className={"text-heading-l text-white z-10"}>
                  {seminar_workshop as string}
                </p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/events-promotion?section=comics");
            }}
            tabIndex={0}
            role="button"
            aria-label="redirect to the comics list in events promotion section"
          >
            <div
              role="img"
              aria-label="image"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/comics_1.png)`,
                display: "flex",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                height: "134px",
              }}
            />
          </div>
          <hr />
          <EmailBox />
        </div>
      </div>
    </div>
  );
};
