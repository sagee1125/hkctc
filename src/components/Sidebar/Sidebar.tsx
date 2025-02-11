import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { type SubItems } from "../../const";
import { Collapse, IconButton } from "@mui/material";

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
                className={`transition-all duration-200 ease-in-out ${
                  isActivated
                    ? "bg-[#F2F2EF] border-[8px] border-[#F2F2EF]"
                    : "bg-transparent border-[0px] border-transparent"
                }`}
                onClick={() => {
                  setActivatedItems(navItemEnum);
                }}
              >
                <div className="flex flex-row gap-[24px] w-full cursor-pointer ">
                  <div className="w-[130px] h-[90px] overflow-hidden">
                    <img
                      className="min-w-[130px] min-h-[90px] object-cover object-center"
                      src={process.env.PUBLIC_URL + "/assets/images/" + imgUrl}
                      alt={imgUrl}
                    />
                  </div>
                  <div className="text-highlight-m text-black w-[252px]">
                    {subTitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

type MultipleSidebarsProps = {
  sidebars: Array<{
    title: string;
    sidebarItems: SubItems[];
  }>;
  activatedItems: string;
  setActivatedItems: (activatedItems: string) => void;
};

const findParentTitle = (
  activatedItems: string,
  sidebars: MultipleSidebarsProps["sidebars"]
) => {
  for (const sidebar of sidebars) {
    const found = sidebar.sidebarItems.find(
      (item) => item.enum === activatedItems
    );
    if (found) {
      return sidebar.title;
    }
  }
  return null;
};

export const MultipleSidebars: React.FC<MultipleSidebarsProps> = (
  props: MultipleSidebarsProps
) => {
  const { sidebars, activatedItems, setActivatedItems } = props;

  const activatedParentTitle = findParentTitle(activatedItems, sidebars);
  const [expandStates, setExpandStates] = useState<Record<string, boolean>>(
    () => {
      const initialExpandStates: Record<string, boolean> = sidebars.reduce(
        (acc, sidebar) => {
          acc[sidebar.title] = activatedParentTitle === sidebar.title;
          return acc;
        },
        {} as Record<string, boolean>
      );
      return initialExpandStates;
    }
  );
  const toggleExpand = (title: string): void => {
    setExpandStates((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  useEffect(() => {
    if (activatedParentTitle) {
      setExpandStates((prevState) => ({
        ...prevState,
        [activatedParentTitle]: true,
      }));
    }
  }, [activatedParentTitle]);

  return (
    <div className="border-2 border-inherit p-[24px]">
      {sidebars.map((sidebar, index) => {
        const { title, sidebarItems } = sidebar;
        const expand = expandStates[title];

        return (
          <div key={index} className="flex flex-col gap-[24px] mb-[24px]">
            <div
              className="flex flex-row justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(title)}
            >
              <p className="text-heading-l">{title}</p>
              <ExpandMoreIcon
                sx={{
                  fontSize: "24",
                  color: "#7A7A7A",
                  transform: expand ? undefined : "rotate(180deg)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>
            <Collapse in={expand}>
              <div className="w-full flex flex-col gap-[24px]">
                {sidebarItems.map((item, i) => {
                  const { subTitle, imgUrl, enum: navItemEnum } = item;
                  const isActivated = activatedItems === navItemEnum;
                  return (
                    <div
                      key={i}
                      className={`transition-all duration-200 ease-in-out ${
                        isActivated
                          ? "bg-[#F2F2EF] border-[8px] border-[#F2F2EF]"
                          : "bg-transparent border-[0px] border-transparent"
                      }`}
                      onClick={() => {
                        setActivatedItems(navItemEnum);
                      }}
                    >
                      <div className="flex flex-row gap-[24px] w-full">
                        <div className="w-[130px] h-[90px] overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/" +
                              imgUrl
                            }
                            alt={imgUrl}
                          />
                        </div>
                        <div className="text-highlight-m text-black py-[8px] pr-[16px] w-[202px]">
                          {subTitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};
