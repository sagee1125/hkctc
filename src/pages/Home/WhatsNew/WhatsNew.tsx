import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import {
  WhatsNewConfiguration,
  WhatsNewConfiguration_cn,
} from "../../../const";
import { SquareTitle } from "../../../components";
import { useNavigate } from "react-router-dom";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    title: `What’s New`,
  },

  cn: {
    title: `最新消息`,
  },
};

export const WhatsNew: React.FC = () => {
  const navigate = useNavigate();
  const { isPC, language, getPageText, getSingleText } = useSettings();
  const changingEffectOn = false;
  const page_text = getPageText(multilingual);

  const { title } = page_text;
  const [visibleWhatsNew, setVisibleWhatsNew] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const whatsNewData =
    language === Language.EN ? WhatsNewConfiguration : WhatsNewConfiguration_cn;
  const firstFourWhatsNew = whatsNewData.slice(0, 4);

  useEffect(() => {
    if (changingEffectOn) {
      const intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // As soon as the container enters the viewport, set visibility to true
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleWhatsNew(true);
          }
        });
      },
      {
        threshold: 0.5, // when the container is at least 50% visible
      }
    );

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full px-[24px]">
      <SquareTitle
        title={title as string}
        showArrowIcon
        redirectTo="/whats-new"
      />

      <div
        className={`pt-[24px] w-full`}
        style={{
          maxWidth: "100%",
          width: isPC ? "100%" : "1024px",
        }}
      >
        <div
          ref={isPC ? containerRef : null}
          className={`transition-opacity duration-1000 ease-in-out ${
            visibleWhatsNew || !isPC ? "opacity-100" : "opacity-0"
          }`}
          style={{
            whiteSpace: "nowrap",
            width: isPC ? "100%" : "1024px",
            gap: "24px",
            display: "grid",
            ...(isPC
              ? {
                  gridTemplateColumns: `repeat(${firstFourWhatsNew.length}, minmax(0, 1fr))`,
                }
              : {
                  gridTemplateColumns: "repeat(4, 290px)",
                  overflowX: "auto",
                  maxWidth: "100%",
                  paddingBottom: "8px",
                }),
          }}
        >
          {firstFourWhatsNew.map((item, index) => {
            const { title, imagePath, imagePathSwitch, date, redirectTo } =
              item;

            const isEven = currentTime % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col group cursor-pointer justify-between`}
                onClick={() => {
                  if (redirectTo) {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate(redirectTo);
                  }
                }}
              >
                <div>
                  <div
                    className={`relative flex justify-center items-center w-full ${
                      isPC ? "min-w-[290px]" : ""
                    } aspect-[16/9] overflow-hidden cursor-pointer`}
                  >
                    {/* 上层图片 */}
                    <img
                      className={`absolute w-full h-auto 
     ${isEven ? "fade-in" : "fade-out"} 
    transition-transform duration-900 ease-in-out group-hover:scale-110`}
                      src={
                        process.env.PUBLIC_URL + "/assets/whatsNew/" + imagePath
                      }
                      alt={title}
                    />
                    {/* 下层图片 */}
                    <img
                      className={`absolute w-full h-auto transition-opacity duration-1000 ease-in-out ${
                        isEven ? "opacity-0" : "opacity-100"
                      }`}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/whatsNew/" +
                        imagePathSwitch
                      }
                      alt={title}
                    />
                  </div>
                  <div
                    className="text-heading-s text-left w-full mt-4 
                group-hover:text-darkNavy group-hover:underline transition-all duration-800 ease-in-out"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      overflow: "hidden",
                    }}
                  >
                    {getSingleText(title, title)}
                  </div>
                </div>

                <div className="flex flex-row w-full mt-4 gap-2">
                  <Icon icon="material-symbols:date-range-rounded" />
                  <h2 className="text-body-m text-grey">{date}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
