import React, { useState } from "react";
import classNames from "classnames";
import { Drawer } from "@mui/material";
import { useSettings } from "../../context";

type DirectorySidebarProps = {
  disabled?: boolean;
  directorySidebarItems: string[];
  activatedItems: string;
  setActivatedItems: (activatedItems: string) => void;
};

export const DirectorySidebar: React.FC<DirectorySidebarProps> = ({
  disabled = false,
  directorySidebarItems,
  activatedItems,
  setActivatedItems,
}) => {
  const { isPC } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarContent = (
    <>
      <div className="flex flex-col gap-[0] w-full">
        {directorySidebarItems.map((item, index) => {
          const isActivated = item === activatedItems;

          const borderStyle = isActivated
            ? "border-newPrimary z-10"
            : "border-[#E0E0E0]";
          const pcFontStyle = isActivated
            ? "text-heading-m"
            : "text-body-l text-[#AAAAAA]";
          const mobileFontStyle = isActivated
            ? "text-heading-s"
            : "text-body-m text-[#AAAAAA]";
          const marginStyle = index === 0 ? "" : "-mt-[2px]";
          return (
            <div
              className={classNames(
                "border-2 p-[24px] flex justify-between items-center h-[96px] gap-[8px] cursor-pointer",
                borderStyle,
                marginStyle
              )}
              style={{
                ...(disabled ? { cursor: "not-allowed" } : {}),
              }}
              onClick={() => {
                if (disabled) return;
                setActivatedItems(item);
                setIsOpen(false);
              }}
              key={index}
            >
              <p className={classNames(isPC ? pcFontStyle : mobileFontStyle)}>
                {item}
              </p>

              {isActivated ? (
                <img
                  className="w-[24px] h-[24px]"
                  src={process.env.PUBLIC_URL + "/assets/icons/arrow_right.svg"}
                  alt="arrow_right"
                />
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
  if (isPC) return <>{sidebarContent}</>;
  else
    return (
      <>
        <button
          className="!text-highlight-m text-white fixed bottom-[24px] right-[24px] z-50"
          style={{
            background: "#233F55",
            color: "white",
            border: "2px solid #F7F7F5",
            padding: "16px 24px 16px 24px",
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: 600,
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Content List
        </button>

        <Drawer
          anchor="bottom"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              height: "auto",
              padding: "24px",
            },
          }}
        >
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-row justify-between items-center pb-[24px]">
              <p className="text-heading-m text-newPrimary">Content List</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <path
                  d="M18 18L10 10M10 10L2 2M10 10L18 2M10 10L2 18"
                  stroke="#233F55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {sidebarContent}
          </div>
        </Drawer>
      </>
    );
};
