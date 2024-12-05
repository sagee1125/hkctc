import React from "react";
import { EmailBox } from "../../components";
import { type WhatsNewData, whatsNewData } from "../Home/WhatsNew";
import { Icon } from "@iconify/react";

export const GeneralPublicContent: React.FC = () => {
  const materialsData: Array<{
    title: string;
    imgUrl: string;
    onClick?: () => void;
  }> = [
    {
      title: "Reports",
      imgUrl: "materials_report.png",
    },
    {
      title: "Newsletter",
      imgUrl: "materials_newsletter.png",
    },
    {
      title: "Pamphlets and Booklets",
      imgUrl: "materials_pamphlets.png",
    },
    {
      title: "Comics",
      imgUrl: "materials_comics.png",
    },
    {
      title: "Advertorials",
      imgUrl: "materials_advertorial.png",
    },
  ];

  const whatsNewData_2: WhatsNewData[] = [
    {
      title:
        "Further liberalization measures related to Testing and Certification under CEPA",
      date: "28 Aug 2024",
      imagePath: "Further_Liberalization.png",
      onClick: () => {},
    },
    {
      title: "Hong Kong International Biotechnology Forum and Exhibition",
      date: "20 Aug 2024",
      imagePath: "Forum.png",
      onClick: () => {},
    },
  ];
  return (
    <div
      className="w-full grid grid-cols-[1fr,2fr] gap-[24px] pb-[48px]"
      style={{ marginTop: "24px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      {/* Materials & Enquires */}

      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Materials</p>
          <div>
            {materialsData.map((mat, index) => {
              const { title, imgUrl } = mat;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start mt-[24px] gap-[24px]"
                >
                  <img
                    className="w-[130px] h-auto"
                    src={
                      process.env.PUBLIC_URL + `/assets/generalPublic/${imgUrl}`
                    }
                    alt={title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
              );
            })}
          </div>
          <div className="py-[24px]">
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/seminars_workshops.png)`,
                display: "flex",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                height: "134px",
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
          <hr className="pb-[24px]" />
          <EmailBox />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[24px]">
        {[...whatsNewData, ...whatsNewData_2].map((item, index) => {
          const { title, imagePath, date } = item;
          return (
            <div
              key={index}
              className="flex flex-col justify-start group border-2 border-inherit h-[460px]"
            >
              <div className="relative flex justify-start items-center w-full overflow-hidden">
                <img
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={process.env.PUBLIC_URL + "/assets/whatsNew/" + imagePath}
                  alt={title}
                />
              </div>
              <div className="h-[168px] flex flex-col justify-between py-[24px]">
                <div
                  className="text-heading-m text-center w-full px-[24px]
                group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out"
                >
                  {title}
                </div>
                <div className="flex flex-row w-full gap-2 justify-center">
                  <Icon icon="material-symbols:date-range-rounded" />
                  <h2 className="text-body-m text-grey">{date}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
