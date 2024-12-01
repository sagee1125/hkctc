import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

export type WhatsNewData = {
  title: string;
  date: string;
  imagePath: string;
  onClick: () => void;
};

export const whatsNewData: WhatsNewData[] = [
  {
    title: "Trade show open for application",
    date: "28 Aug 2024",
    imagePath: "Trade_Show.png",
    onClick: () => { },
  },
  {
    title: "Mid-Autumn Festival brings family reunion and joy",
    date: "28 Aug 2024",
    imagePath: "Mid_Autumn.png",
    onClick: () => { },
  },
  {
    title: "The Testing And Certification Industry Has Always Played An...",
    date: "28 Aug 2024",
    imagePath: "Testing.png",
    onClick: () => { },
  },
  {
    title: "Belt and Road Summit Forum",
    date: "28 Aug 2024",
    imagePath: "Belt.png",
    onClick: () => { },
  },
];

export const WhatsNew: React.FC = () => {


  const imageRefs = useRef<HTMLImageElement[]>([]); // 存储所有图片的 refs
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]); // 控制显示的图片索引

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => [...new Set([...prev, index])]); // 确保索引唯一
          }
        });
      },
      {
        root: null, // 默认为视口
        rootMargin: "-20% 0px", // 上下偏移 20%，确保只有中央区域触发
        threshold: 0.5, // 触发条件：至少 50% 显示在视口中
      }
    );

    imageRefs.current.forEach((img) => img && observer.observe(img)); // 观察每张图片

    return () => {
      imageRefs.current.forEach((img) => img && observer.unobserve(img)); // 取消观察
    };
  }, []);

  return (
    <div
      className="w-full px-[24px]"
      style={{
        marginTop: "48px",
      }}
    >
      <div className="flex flex-row items-center">
        <Icon
          icon="material-symbols-light:square"
          style={{ height: "24px", width: "24px", marginRight: "16px" }}
        />
        <p className="text-heading-l mr-[12px]">What's New</p>
        <Icon
          icon="teenyicons:right-outline"
          style={{ height: "24px", width: "24px", strokeWidth: "2px" }}
        />
      </div>
      <div className="pt-[24px]">
        <div
          className="grid w-full gap-[24px]"
          style={{
            gridTemplateColumns: `repeat(${whatsNewData.length}, minmax(0, 1fr))`,
          }}
        >
          {whatsNewData.map((item, index) => {
            const { title, imagePath, date } = item;
            const isVisible = visibleIndexes.includes(index); // 当前图片是否已进入视口

            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative flex justify-center items-center w-full aspect-[16/9] overflow-hidden">
                  <img
                    ref={(el) => (imageRefs.current[index] = el!)} // 关联图片 ref
                    data-index={index} // 标记图片索引
                    // className="w-full h-auto opacity-0 animate-fade-in transition-transform duration-300 ease-in-out group-hover:scale-110"
                    className={`w-full h-auto opacity-0 scale-100 transition-all duration-2000 ease-in-out group-hover:scale-110 ${isVisible ? "opacity-100 scale-100" : ""
                      }`}

                    src={
                      process.env.PUBLIC_URL + "/assets/whatsNew/" + imagePath
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
