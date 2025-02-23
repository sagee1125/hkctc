import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../context";
type SquareTitleProps = {
  title: string;
  showArrowIcon?: boolean;
  redirectTo?: string;
};

export const SquareTitle: React.FC<SquareTitleProps> = ({
  title,
  showArrowIcon = false,
  redirectTo,
}) => {
  const navigate = useNavigate();
  const { isPC } = useSettings();

  return (
    <div
      className={`flex flex-row gap-[12px] ${
        isPC ? "items-center" : "items-start"
      } ${redirectTo ? "cursor-pointer" : ""}`}
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
      <div
        className={`${
          isPC ? "h-[15px] w-[15px]" : "h-[12px] w-[12px] mt-[6px]"
        }  bg-newPrimary`}
        style={{ flexShrink: 0 }}
      />
      <p className={isPC ? "text-heading-l" : "text-heading-m"}>{title}</p>
      {showArrowIcon && (
        <Icon
          icon="teenyicons:right-outline"
          style={{
            height: isPC ? "24px" : "16px",
            width: isPC ? "24px" : "16px",
            strokeWidth: "2px",
          }}
        />
      )}
    </div>
  );
};
