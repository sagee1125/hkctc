import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import report from "./assets/report.png";
import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";
import { EmailBox } from "../../../components";

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
enum Category {
  Events = "Events",
  Workshops = "Workshops",
  Seminars = "Seminars",
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
        const { width, left } =
          titleRefs.current[activeTitleIndex]!.getBoundingClientRect();
        setUnderlineProps({ width, left });
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
          imgPath: "Sub_Items_1.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_2.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_3.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Workshops,
      items: [
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_2.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_3.png",
          onClick: () => {},
        },
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_1.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Seminars,
      items: [
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_2.png",
          onClick: () => {},
        },
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_3.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items.png",
          onClick: () => {},
        },
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_1.png",
          onClick: () => {},
        },
      ],
    },
    {
      title: Category.Competitions,
      items: [
        {
          title: "Commemorative publication",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "publication_head.png",
          onClick: () => {},
        },
        {
          title: "Infographic video",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items.png",
          onClick: () => {},
        },
        {
          title: "Award Pamphlet",
          type: "PDF",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_2.png",
          onClick: () => {},
        },
        {
          title: "Award Ceremony",
          type: "VIDEO",
          date: "6 Aug 2024",
          imgPath: "Sub_Items_1.png",
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
      className="w-full grid grid-cols-[2fr,1fr] pr-4"
      style={{
        marginTop: "24px",
      }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        window.dispatchEvent(new Event("parentAnimationEnd"));
      }}
    >
      {/* column 1,2 */}
      <div
        className={`w-full transition-transform duration-700 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
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
          <div className="pr-8 pl-4 w-1/2 justify-start" ref={containerRef}>
            <div className="flex flex-row justify-between w-full">
              {publicationCategory.map((cate, index) => {
                const { title } = cate;
                const isActivated = title === activeCategory;
                return (
                  <div
                    key={index}
                    ref={(el) => (titleRefs.current[index] = el)}
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
                    >
                      {title}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* underline */}
            <motion.div
              className="bg-black h-[3px] mt-1 absolute"
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
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <hr className="m-3 pb-2" />
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
          <div>
            <Container className="flex flex-col gap-4">
              {showCurrentPubliationItem.map((subItem, index) => {
                const { title, type, date, imgPath } = subItem;

                return (
                  <BannerSlide
                    key={index}
                    className="grid grid-cols-[2fr,3fr] cursor-pointer"
                    animate={animate}
                    direction={direction}
                  >
                    <img
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
                    </div>
                  </BannerSlide>
                );
              })}
            </Container>
          </div>
        </div>

        <div
          className="flex flex-row items-center gap-4 px-2"
          style={{
            marginTop: "24px",
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
        <hr className="m-3 pb-2" />

        <div className="w-full grid grid-cols-2 gap-2 px-3">
          <img
            className="w-full h-auto"
            src={
              process.env.PUBLIC_URL +
              "/assets/publications/publication_head.png"
            }
            alt={"Publication Head"}
          />
          <img
            className="w-full h-auto"
            src={
              process.env.PUBLIC_URL +
              "/assets/publications/publication_head.png"
            }
            alt={"Publication Head"}
          />
        </div>
      </div>

      {/* column 3 */}
      <div
        className={`p-[24px] border-2 border-inherit flex flex-col transition-transform duration-700 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="text-heading-l">Resources</div>
        <div>
          {resourcesData.map((item, index) => {
            const { number, title, icon, sideColor, bgImg } = item;
            return (
              <div
                key={index}
                className={`flex flex-row cursor-pointer items-center h-[80px] relative overflow-hidden group mt-[16px]`}
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
                <div className="flex flex-row justify-between w-full text-white pr-2">
                  <div className="px-4">{`(${number})`}</div>
                  <div className="z-20">{title}</div>
                  <Icon
                    icon={icon}
                    style={{ height: "24px", width: "24px" }}
                    className="z-20"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <hr className="my-[24px]" />
        <EmailBox />
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
