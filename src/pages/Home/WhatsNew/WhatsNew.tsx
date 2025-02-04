import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { WhatsNewConfiguration } from "../../../const";
import { SquareTitle } from "../../../components";

export const WhatsNew: React.FC = () => {
  const [visibleWhatsNew, setVisibleWhatsNew] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstFourWhatsNew = WhatsNewConfiguration.slice(0, 4);

  const changingEffectOn = false;

  useEffect(() => {
    if (changingEffectOn) {
      const intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1); // 每秒增加1
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 只要容器进入视口，设置 visibility 为 true
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleWhatsNew(true);
          }
        });
      },
      {
        threshold: 0.5, // 当容器至少有50%可见时触发
      }
    );

    // 开始观察容器
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 清理 observer
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full px-[24px]">
      <SquareTitle title="What’s New" showArrowIcon />

      <div className="pt-[24px]">
        <div
          ref={containerRef}
          className={`grid w-full gap-[24px] transition-opacity duration-1000 ease-in-out ${
            visibleWhatsNew ? "opacity-100" : "opacity-0"
          }`}
          style={{
            gridTemplateColumns: `repeat(${firstFourWhatsNew.length}, minmax(0, 1fr))`,
          }}
        >
          {firstFourWhatsNew.map((item, index) => {
            const { title, imagePath, imagePathSwitch, date } = item;

            const isEven = currentTime % 2 === 0;

            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative flex justify-center items-center w-full aspect-[16/9] overflow-hidden cursor-pointer">
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
                >
                  {title}
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
