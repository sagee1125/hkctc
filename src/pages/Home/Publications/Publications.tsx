import React, { useState } from "react";
import { Icon } from "@iconify/react";
import report from "./assets/report.png";

type ResourcesData = {
  title: string;
  icon: string;
  number: number;
  sideColor: string;
  bgImg: string;
  onClick: () => void;
};

type PublicationCategory = {
  title: Category;
  items: PublicationItems[];
};

type PublicationItems = {
  title: string;
  type: "VIDEO" | "PDF";
  date: string;
  imgPath: string;
  onClick: () => void;
};
const enum Category {
  Events = "Events",
  Workshops = "Workshops",
  Seminars = "Seminars",
  Competitions = "Competitions",
}
export const Publications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(
    Category.Events
  );

  const resourcesData: ResourcesData[] = [
    {
      title: "Reports",
      icon: "lsicon:report-outline",
      number: 20,
      sideColor: "#D1E39B",
      bgImg: report,
      onClick: () => {},
    },
    {
      title: "Newsletter",
      icon: "qlementine-icons:newspaper-16",
      number: 26,
      sideColor: "#F15A31",
      bgImg: report,
      onClick: () => {},
    },
    {
      title: "Courses",
      icon: "lsicon:report-outline",
      number: 14,
      sideColor: "#D9B6F6",
      bgImg: report,
      onClick: () => {},
    },

    {
      title: "Advertorials",
      icon: "hugeicons:teacher",
      number: 32,
      sideColor: "#BBC9E7",
      bgImg: report,
      onClick: () => {},
    },
    {
      title: "Reports",
      icon: "fluent-mdl2:publish-course",
      number: 68,
      sideColor: "#FFC786",
      bgImg: report,
      onClick: () => {},
    },
  ];

  const publicationCategory: PublicationCategory[] = [
    {
      title: Category.Events,
      items: [
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Workshops,
      items: [
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Seminars,
      items: [
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Competitions,
      items: [
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
      ],
    },
  ];

  const showCurrentPubliationItem =
    publicationCategory.find((cate) => cate.title === activeCategory)?.items ??
    [];
  return (
    <div className="w-full p-2 grid grid-cols-[2fr,1fr] pr-4">
      {/* column 1,2 */}
      <div className="w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-4 px-2 w-1/2">
            <Icon
              icon="material-symbols-light:square"
              style={{ height: "24px", width: "24px" }}
            />
            <p className="text-heading-l">Publications</p>
            <Icon
              icon="teenyicons:right-outline"
              style={{ height: "24px", width: "24px", strokeWidth: "2px" }}
            />
          </div>

          <div className="flex flex-row justify-between pr-8 w-1/2">
            {publicationCategory.map((cate, index) => {
              const { title } = cate;
              const isActivated = title === activeCategory;
              return (
                <div
                  key={index}
                  className={
                    isActivated
                      ? "text-heading-s underline underline-offset-8 decoration-3"
                      : "text-body-m"
                  }
                  onClick={() => {
                    setActiveCategory(title);
                  }}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </div>

        <hr className="m-4 pb-2 " />
        <div className="w-full grid grid-cols-2 px-4 gap-6">
          {/* column 1 */}
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center w-full">
              <img
                className="w-full h-auto"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/publications/publication_head.png"
                }
                alt={"Publication Head"}
              />
            </div>
            <div className="text-heading-m text-left w-full mt-4">
              T&C Manpower Development Award Scheme 2023-24
            </div>
            <div className="text-body-m pt-4 ">
              With a view to encouraging the testing and certification (T&C)
              bodies to invest in talent training and development, while also
              commending those T&C practitioners who has striven for
              continuous...
            </div>
            <div className="flex flex-row w-full mt-4 gap-2">
              <Icon icon="material-symbols:date-range-rounded" />
              <h2 className="text-body-m text-grey">{"6 Aug 2024"}</h2>
            </div>
          </div>
          {/* column 2 */}

          <div className="flex flex-col gap-4">
            {showCurrentPubliationItem.map((subItem, index) => {
              const { title, type, date, imgPath } = subItem;

              return (
                <div key={index} className="grid grid-cols-[2fr,3fr]">
                  <img
                    className="w-full h-auto max-w-full"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/publications/Sub_Items.png"
                    }
                    alt={title}
                  />
                  <div className="flex flex-col justify-between py-1 px-4">
                    <div className="text-highlight-s">{type}</div>
                    <div className="text-heading-m">{title}</div>
                    <div className="text-body-s flex flex-row items-center gap-2 text-grey">
                      <Icon icon="material-symbols:date-range-rounded" />
                      {date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* column 3 */}

      <div className="p-4 border-2 border-inherit flex flex-col gap-4">
        <div className="text-heading-l">Resources</div>
        {resourcesData.map((item, index) => {
          const { number, title, icon, sideColor, bgImg } = item;
          return (
            <div
              key={index}
              className={`flex flex-row items-center h-[60px]`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${bgImg})`,
              }}
            >
              {/* side border */}
              <div
                className="h-full w-[10px]"
                style={{ backgroundColor: sideColor, opacity: 0.8 }}
              />
              <div className="flex flex-row justify-between w-full text-white pr-2">
                <div className="px-4">{`(${number})`}</div>
                <div className="z-10">{title}</div>
                <Icon
                  icon={icon}
                  style={{ height: "24px", width: "24px" }}
                  className="z-10"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
