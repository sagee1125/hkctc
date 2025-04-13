import React, { useState } from "react";
import classNames from "classnames";
import { Drawer } from "@mui/material";
import { Language, useSettings } from "../../context";
import { t2s } from "chinese-s2t";

export type DirectorySidebarItems = {
  label: string;
  labelCN: string;
  value: string;
};
type DirectorySidebarProps = {
  disabled?: boolean;
  directorySidebarItems: DirectorySidebarItems[];
  activatedItems: string;
  setActivatedItems: (activatedItems: string) => void;
};

export const DirectorySidebar: React.FC<DirectorySidebarProps> = ({
  disabled = false,
  directorySidebarItems,
  activatedItems,
  setActivatedItems,
}) => {
  const { isPC, getSingleText } = useSettings();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <>
      <div className="flex flex-col gap-[0] w-full">
        {directorySidebarItems.map((item, index) => {
          const isActivated =
            (item as DirectorySidebarItems).value === activatedItems ||
            (item as DirectorySidebarItems).label === activatedItems ||
            (item as DirectorySidebarItems).labelCN === activatedItems ||
            t2s((item as DirectorySidebarItems).labelCN) === activatedItems;

          const borderStyle = isActivated
            ? "border-newPrimary z-10"
            : "border-[#E0E0E0]";
          const pcFontStyle = isActivated
            ? "text-heading-m"
            : "text-body-l text-[#767676]";
          const mobileFontStyle = isActivated
            ? "text-heading-s"
            : "text-body-m text-[#767676]";
          const marginStyle = index === 0 ? "" : "-mt-[2px]";
          return (
            <div
              className={classNames(
                "border-2 p-[24px] flex justify-between items-center h-[96px] gap-[8px] cursor-pointer",
                borderStyle,
                marginStyle
              )}
              tabIndex={0}
              role="button"
              style={{
                ...(disabled ? { cursor: "not-allowed" } : {}),
              }}
              onClick={() => {
                if (disabled) return;
                setActivatedItems(item.value);
                setIsOpen(false);
              }}
              key={index}
              aria-label={getSingleText(item.label, item.labelCN)}
            >
              <p className={classNames(isPC ? pcFontStyle : mobileFontStyle)}>
                {getSingleText(item.label, item.labelCN)}
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
  const content_list = getSingleText(`Content List`, "內容列表");

  if (isPC) return <>{sidebarContent}</>;
  else
    return (
      <>
        <button
          tabIndex={0}
          role="button"
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
          {content_list}
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
            <div
              className="w-full flex flex-row justify-between items-center pb-[24px] cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
              tabIndex={0}
              role="button"
              aria-label={content_list}
            >
              <p className="text-heading-m text-newPrimary">{content_list}</p>
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18 18L10 10M10 10L2 2M10 10L18 2M10 10L2 18"
                  stroke="#233F55"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {sidebarContent}
          </div>
        </Drawer>
      </>
    );
};
