import React from "react";
import { type SubItems } from "../../const";

type SidebarProps = {
  title: string;
  sidebarItems: SubItems[];
  activatedItems: string;
  setActivatedItems: (activatedItems: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  title,
  sidebarItems,
  activatedItems,
  setActivatedItems,
}) => {
  return (
    <div className="px-[24px] min-w-[440px] w-1/3">
      <div className="border-2 border-inherit p-[24px]">
        <p className="text-heading-l">{title}</p>
        <div className="w-full flex flex-col gap-[24px] py-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            {sidebarItems.map((item, index) => {
              const { subTitle, imgUrl, enum: navItemEnum } = item;
              if (subTitle === "") return null;

              const isActivated = activatedItems === navItemEnum;
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ease-in-out ${
                    isActivated
                      ? "bg-[#F2F2EF] border-[16px] border-[#F2F2EF]"
                      : "bg-transparent border-[0px] border-transparent"
                  }`}
                  onClick={() => {
                    setActivatedItems(navItemEnum);
                  }}
                >
                  <div className="flex flex-row h-[106px] gap-[24px] w-full">
                    <img
                      className="w-auto h-[106px] object-contain"
                      src={process.env.PUBLIC_URL + "/assets/images/" + imgUrl}
                      alt={imgUrl}
                    />
                    <div className="text-highlight-m text-black py-[8px] pr-[16px]">
                      {subTitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
