import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { EmailBox, SquareTitle, Link } from "../../components";
import { useSettings } from "../../context";

export const GeneralPublicContent: React.FC = () => {
  const { isPC } = useSettings();

  const materialsData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: "HKCTC Reports",
      imgUrl: "material_1",
      link: "/events-promotion?section=hkctc_reports",
    },
    {
      title: "HKCTC Newsletters",
      imgUrl: "material_2",
      link: "/events-promotion?section=hkctc_newsletter",
    },
    {
      title: "Pamphlets and Booklets",
      imgUrl: "material_3",
      link: "/events-promotion?section=pamphlets_booklets",
    },
    {
      title: "Advertorials",
      imgUrl: "material_4",
      link: "/events-promotion?section=advertorials",
    },
  ];

  // Updated at 19/01/2025
  const whatsNew = [
    {
      title: 'Twelfth "HKCTC Newsletter" has been issued',
      date: "29 May 2024",
      imagePath: "material_2.png",
      link: "/events-promotion?section=hkctc_newsletter",
    },
    {
      title:
        "Further liberalisation measures for testing and certification under CEPA",
      date: "9 Oct 2024",
      imagePath: "whatsnew_1.png",
      link: "/support/agreement-clause",
    },
    {
      title:
        "Report of the Hong Kong Council for Testing and Certification 2023-24 has been uploaded",
      date: "6 Aug 2024",
      imagePath: "material_1.png",
      link: "/events-promotion?section=hkctc_reports",
    },
    {
      title:
        "Statistics of the testing and certification activities in Hong Kong in 2022 have been uploaded",
      date: "16 Apr 2024",
      imagePath: "whatsnew_2.png",
      link: "/tc-sector?section=profile_and_role",
    },
    {
      title:
        "Recruit雜誌封面故事: 檢測認證 衣食住行 專業把關 (Chinese version only)",
      date: "15 Mar 2024",
      imagePath: "whatsnew_3.png",
      link: "https://www.recruit.com.hk/article/%E6%AA%A2%E6%B8%AC%E8%AA%8D%E8%AD%89-%E8%A1%A3%E9%A3%9F%E4%BD%8F%E8%A1%8C-%E5%B0%88%E6%A5%AD%E6%8A%8A%E9%97%9C/44038",
    },
    {
      title: "“The BUD Fund - Easy BUD” has been launched",
      date: "16 Jun 2023",
      imagePath: "whatsnew_4.png",
      link: "/support?section=funding_schemes",
    },
  ];

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
            onClick={() => {
              window.open("/whats-new");
            }}
          >
            <SquareTitle title="What’s New" />
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
          {whatsNew.map((w, i) => {
            const { title } = w;
            return (
              <div
                className={`flex ${
                  isPC ? "flex-row" : "flex-col-reverse w-full gap-[24px]"
                } items-center`}
                key={i}
              >
                <div className={`flex flex-col w-full mx-[24px] gap-[16px]`}>
                  <div className={"text-heading-m"}>
                    <Link
                      linkColor="#203136"
                      innerLink={w.link}
                      outerLink={w.link}
                    >
                      {title}
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[8px] text-body-s">
                    <img
                      src={
                        process.env.PUBLIC_URL + `/assets/icons/calendar.svg`
                      }
                      alt="date"
                    />
                    {w.date}
                  </div>
                </div>

                <img
                  className={`${
                    isPC ? "w-[278px] h-full" : "w-full h-auto"
                  } object-cover cursor-pointer`}
                  onClick={() => {
                    window.open(w.link);
                  }}
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/generalPublic/${w.imagePath}`
                  }
                  alt={w.title}
                />
              </div>
            );
          })}
        </>
      </div>
      {/* Materials & Enquires */}
      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px] flex flex-col gap-[24px]">
          <p className="text-heading-l">Materials</p>
          <div className="flex flex-col gap-[24px]">
            {materialsData.map((mat, index) => {
              const { title, imgUrl, link } = mat;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start gap-[24px] cursor-pointer"
                  onClick={() => {
                    window.open(link);
                  }}
                >
                  <img
                    className={`w-[130px] h-auto`}
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/generalPublic/${imgUrl}.png`
                    }
                    alt={title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
              );
            })}
          </div>
          <div>
            <div
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
              onClick={() => {
                window.open("/events-promotion?section=seminar_workshop");
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
                  Seminars & Workshops
                </p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              window.open("/events-promotion?section=comics");
            }}
          >
            <div
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
