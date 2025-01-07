import React from "react";
import classNames from "classnames";

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
  return (
    <div className="flex flex-col gap-[0] w-full">
      {directorySidebarItems.map((item, index) => {
        const isActivated = item === activatedItems;

        const borderStyle = isActivated
          ? "border-newPrimary z-10"
          : "border-[#E0E0E0]";
        const fontStyle = isActivated
          ? "text-heading-m"
          : "text-body-l text-[#AAAAAA]";

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
            }}
          >
            <p className={classNames(fontStyle)}>{item}</p>

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
  );
};
