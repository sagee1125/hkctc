import React, { useState } from "react";
import {
  SquareTitle,
  NormalAccordion,
  normalButtonStyle,
  activatedButtonStyle,
} from "../../../../components";

export const Pamphlets: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const filterButtons = ["All", "Pamphlets", "Booklets"];

  const publicationsInfo = [
    {
      title: "Tested in Hong Kong Certified in Hong Kong",
      img: "p_1.png",
      tags: [],
    },
    {
      title: "Product Certification - An Upstream Quality Control",
      img: "p_2.png",
      tags: [],
    },
    {
      title: "Testing and Inspection Services for Buildings and...",
      img: "p_3.png",
      tags: [],
    },
    {
      title: "What you Need to Know about Medical Testing",
      img: "p_4.png",
      tags: [],
    },
    {
      title: "Food Testing and Certification",
      img: "p_5.png",
      tags: [],
    },
    {
      title: "Chinese Medicines Testing",
      img: "p_6.png",
      tags: [],
    },
    {
      title: "Testing of Fei Cui and Diamond in Hong Kong",
      img: "p_7.png",
      tags: [],
    },
    {
      title: "Diamond Testing Services in Hong Kong",
      img: "p_8.png",
      tags: [],
    },
    {
      title: "Understanding Information Security Management...",
      img: "p_9.png",
      tags: [],
    },
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Pamphlets And Booklets" />
      <div>
        <NormalAccordion
          title="Type"
          details={
            <div className="flex flex-row gap-[8px]">
              {filterButtons.map((name, index) => {
                const isActivated = activeButton === index;
                return (
                  <button
                    key={index}
                    className="p-2 transition-all duration-800 ease-in-out"
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveButton(index);
                    }}
                  >
                    <p className="px-[12px] text-highlight-xs">{name}</p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {publicationsInfo.map((item, index) => {
          const { img, title } = item;
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px]"
            >
              <div className="flex-shrink-0 relative w-full h-[190px]">
                <img
                  className="border-2 border-inherit w-full h-full object-cover"
                  src={`${process.env.PUBLIC_URL}/assets/publications/pamphlets/${img}`}
                  alt={img}
                />
                {/* Icon */}
                <img
                  className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                  alt="PDF Icon"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-highlight-l">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
