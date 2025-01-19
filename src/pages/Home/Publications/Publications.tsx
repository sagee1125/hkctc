import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import report from "./assets/report.png";
import newsletter from "./assets/Newsletter.png";
import publications from "./assets/publications.png";
import courses from "./assets/courses.png";
import advertorials from "./assets/Advertorials.png";

import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import { EmailBox, FileTemplate } from "../../../components";
import { imgBox } from "../../GeneralPublic/PhotoPanel";
import { useNavigate } from "react-router-dom";

type ResourcesData = {
  title: string;
  icon: string;
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
  header?: string;

  imgPath: string;
  onClick: () => void;
};
enum Category {
  Events = "Events",
  Publications = "Publications",
  CEPA = "CEPA",
  Competitions = "Competitions",
}
const categoryValues = Object.values(Category);

export const Publications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(
    Category.Competitions
  );
  const [prevActiveCategory, setPrevActiveCategory] = useState<Category>(
    Category.Events
  );
  const navigate = useNavigate();

  const slideContainerRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [underlineProps, setUnderlineProps] = useState({ width: 0, left: 0 });

  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const newDirection =
      categoryValues.indexOf(activeCategory) >
      categoryValues.indexOf(prevActiveCategory)
        ? 1
        : -1;
    setDirection(newDirection);

    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 800);

    setPrevActiveCategory(activeCategory);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    const updateUnderline = () => {
      const activeTitleIndex = publicationCategory.findIndex(
        (cate) => cate.title === activeCategory
      );

      if (activeTitleIndex !== -1 && titleRefs.current[activeTitleIndex]) {
        const activeElement = titleRefs.current[activeTitleIndex];
        if (activeElement) {
          const width = activeElement.offsetWidth;
          const left = activeElement.offsetLeft;
          setUnderlineProps({ width, left });
        }
      }
    };

    const handleParentAnimationEnd = () => {
      updateUnderline();
    };

    if (slideContainerRef.current) {
      slideContainerRef.current.addEventListener(
        "transitionend",
        handleParentAnimationEnd
      );
    }

    const resizeObserver = new ResizeObserver(updateUnderline);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (slideContainerRef.current) {
        slideContainerRef.current.removeEventListener(
          "transitionend",
          handleParentAnimationEnd
        );
      }
      resizeObserver.disconnect();
    };
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (slideContainerRef.current) {
        const rect = slideContainerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };
    setActiveCategory(Category.Events);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resourcesData: ResourcesData[] = [
    {
      title: "Reports",
      icon: "lsicon:report-outline",
      sideColor: "#D1E39B",
      bgImg: report,
      onClick: () => {
        navigate("resources-reports");
      },
    },
    {
      title: "Newsletter",
      icon: "qlementine-icons:newspaper-16",
      sideColor: "#F15A31",
      bgImg: newsletter,
      onClick: () => {},
    },
    {
      title: "Publications",
      icon: "lsicon:report-outline",
      sideColor: "#D9B6F6",
      bgImg: publications,
      onClick: () => {},
    },

    {
      title: "Courses",
      icon: "hugeicons:teacher",
      sideColor: "#BBC9E7",
      bgImg: courses,
      onClick: () => {},
    },
    {
      title: "Advertorials",
      icon: "fluent-mdl2:publish-course",
      sideColor: "#FFC786",
      bgImg: advertorials,
      onClick: () => {},
    },
  ];

  const publicationCategory: PublicationCategory[] = [
    {
      title: Category.Events,
      items: [
        {
          header: "T&C Manpower Development Award Scheme",
          title:
            "Testing and Certification Manpower Development Award Scheme 2023-24",
          type: "VIDEO",
          date: "4 Dec 2023",
          imgPath: "images/Manpower_Development.png",
          onClick: () => {},
        },
        {
          header: "Seminars and Workshops",

          title:
            "Seminar on Environmental, Social and Governance (ESG) and Sustainability",
          type: "VIDEO",
          date: "11 Apr 2024",
          imgPath: "images/Seminars.png",
          onClick: () => {},
        },
        {
          header: "Student Competitions",
          title: "Testing Science - Sustainability in Daily Life",
          type: "PDF",
          date: "2023-24",
          imgPath: "images/StudentCompetitions.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Publications,
      items: [
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publications/Award_Ceremony.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publications/Infographic_Video.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publications/Award_Pamphlet.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publications/Commemorative_Publication.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.CEPA,
      items: [
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publications/Infographic_Video.png",
          onClick: () => {},
        },

        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publications/Award_Pamphlet.png",
          onClick: () => {},
        },
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publications/Award_Ceremony.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publications/Commemorative_Publication.png",
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
          imgPath: "publications/Award_Ceremony.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "publications/Infographic_Video.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publications/Award_Pamphlet.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publications/Commemorative_Publication.png",
          onClick: () => {},
        },
      ],
    },
  ];

  const showCurrentPubliationItem =
    publicationCategory.find((cate) => cate.title === activeCategory)?.items ??
    [];

  return (
    <motion.div
      ref={slideContainerRef}
      className="w-full grid grid-cols-[2fr,1fr]"
      style={{
        marginTop: "48px",
      }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        window.dispatchEvent(new Event("parentAnimationEnd"));
      }}
    >
      {/* column 1,2 */}
      <div
        className={`w-full transition-transform duration-700 pl-[24px] ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-[16px] w-1/2">
            <Icon
              icon="material-symbols-light:square"
              style={{ height: "24px", width: "24px" }}
            />
            <p className="text-heading-l">What do you know about T&C</p>
          </div>
          <div className="w-1/2 justify-start" ref={containerRef}>
            <div className="flex flex-row justify-between w-full">
              {publicationCategory.map((cate, index) => {
                const { title } = cate;
                const isActivated = title === activeCategory;
                return (
                  <div
                    key={index}
                    className="cursor-pointer flex flex-col items-center"
                    onClick={() => {
                      setActiveCategory(title);
                    }}
                  >
                    <p
                      className={
                        "text-center " + isActivated
                          ? "text-heading-s"
                          : "text-body-m"
                      }
                      ref={(el) => (titleRefs.current[index] = el)}
                    >
                      {title}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* underline */}
            <motion.div
              className="bg-black h-[3px] absolute"
              style={{
                width: underlineProps.width,
                left: underlineProps.left,
              }}
              initial={{
                width: underlineProps.width,
                left: underlineProps.left,
              }}
              animate={{
                width: underlineProps.width,
                left: underlineProps.left,
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        <hr className="my-[24px]" />
        <div className="w-full grid grid-cols-2 gap-[24px]">
          {/* column 1 */}
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center w-full">
              <img
                className="w-full h-full object-contain cursor-not-allowed"
                src={process.env.PUBLIC_URL + "/assets/publications/Quiz.png"}
                alt={"Quiz"}
              />
            </div>
            {/* <div className="text-heading-m text-left w-full mt-4">
              T&C Manpower Development Award Scheme 2023-24
            </div>
            <div className="text-body-m pt-4 ">
              With a view to encouraging the testing and certification (T&C)
              bodies to invest in talent training and development, while also
              commending those T&C practitioners who has striven for
              continuous...
            </div> */}
            {/* <div className="flex flex-row w-full mt-4 gap-2">
              <Icon icon="material-symbols:date-range-rounded" />
              <h2 className="text-body-m text-grey">{"6 Aug 2024"}</h2>
            </div> */}
          </div>
          {/* column 2 */}
          <div>
            <Container className="flex flex-col gap-[32px]">
              {showCurrentPubliationItem.map((subItem, index) => {
                const { title, date, imgPath, header } = subItem;

                return (
                  <BannerSlide
                    key={index}
                    className="flex flex-col cursor-pointer"
                    animate={animate}
                    direction={direction}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "32px",
                      }}
                    >
                      {header}
                    </p>
                    <FileTemplate
                      title={title}
                      imagePath={"assets/" + imgPath}
                      date={date}
                      iconPath={null}
                    />
                    {/* <img
                      className="w-full h-auto max-w-full aspect-[16/10]"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/publications/" +
                        imgPath
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
                    </div> */}
                  </BannerSlide>
                );
              })}
            </Container>
          </div>
        </div>

        <div
          className="flex flex-row items-center gap-[16px]"
          style={{
            marginTop: "48px",
          }}
        >
          <Icon
            icon="material-symbols-light:square"
            style={{ height: "24px", width: "24px" }}
          />
          <p className="text-heading-l">Learning Corner</p>
          <Icon
            icon="teenyicons:right-outline"
            style={{ height: "24px", width: "24px", strokeWidth: "2px" }}
          />
        </div>

        <div className="w-full h-auto grid grid-cols-2 gap-[24px] mt-[24px]">
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/publications/STEM.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "420px",
              ...imgBox,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "140px",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <div className="z-10">
                <p
                  className={"text-white z-10"}
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "24px",
                  }}
                >
                  STEM Teaching Kit
                </p>
                <p
                  className={"text-white z-10"}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  for Junior Secondary Students
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/publications/Chemical.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "0",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "auto",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "33%",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <div className="z-10">
                <p
                  className={"text-white z-10"}
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "24px",
                  }}
                >
                  Chemical Testing Teaching Kit
                </p>
                <p
                  className={"text-white z-10"}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  for Senior Secondary Curriculum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* column 3 */}
      <div className="px-[24px]">
        <div
          className={`py-[24px] px-[30px] border-2 border-inherit flex flex-col transition-transform duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="text-heading-l">Resources</div>
          <div>
            {resourcesData.map((item, index) => {
              const { title, icon, sideColor, bgImg, onClick } = item;
              return (
                <div
                  key={index}
                  className={`flex flex-row cursor-pointer items-center h-[80px] relative overflow-hidden group mt-[16px]`}
                  onClick={onClick}
                >
                  {/* Inner Background Div */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${bgImg})`,
                    }}
                  />
                  {/* side border */}
                  <div
                    className={`absolute top-0 left-0 h-full w-[10px] group-hover:w-full transition-all duration-700 z-10`}
                    style={{ backgroundColor: sideColor, opacity: 0.8 }}
                  />
                  <div className="flex flex-row justify-between  items-center w-full text-white pr-2">
                    {/* <div className="pl-[20px] z-20 text-highlight-l">{`(${number})`}</div> */}
                    <div className="z-20 pl-[20px] text-heading-l text-center w-full">
                      {title}
                    </div>
                    <div className="z-20 pr-[20px]">
                      <Icon
                        icon={icon}
                        style={{ height: "24px", width: "24px" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="my-[24px]" />
          <EmailBox />
        </div>
      </div>
    </motion.div>
  );
};

const slideIn = (direction: number) => keyframes`
  0% {
    transform: translateX(${direction === 1 ? "100%" : "-100%"});
  }
  100% {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const BannerSlide = styled.div<{ animate: boolean; direction: number }>`
  ${(props) =>
    props.animate &&
    css`
      animation: ${slideIn(props.direction)} 0.5s ease-out;
    `}
`;
