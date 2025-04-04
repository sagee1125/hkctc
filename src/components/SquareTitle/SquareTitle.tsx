import React from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../context";
type SquareTitleProps = {
  title: React.ReactNode;
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
      className={`flex flex-row gap-[12px] items-start ${
        redirectTo ? "cursor-pointer" : ""
      }`}
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
        className={`mt-[8px] h-[15px] w-[15px] bg-newPrimary`}
        style={{ flexShrink: 0 }}
      />
      <div className={"text-heading-l"}>{title}</div>
      {showArrowIcon && (
        <svg
          xmlns="https://www.w3.org/2000/svg"
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className={`${isPC ? "mt-[2px]" : "mt-[4px]"}`}
        >
          <path
            d="M0.938498 2.124L3.0625 0L15.0625 12L3.0625 24L0.938498 21.876L10.8145 12L0.938498 2.124Z"
            fill="black"
          />
        </svg>
      )}
    </div>
  );
};
