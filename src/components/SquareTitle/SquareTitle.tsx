import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <div
      className={`flex flex-row gap-[12px] items-center ${
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
      <div className="h-[15px] w-[15px] bg-newPrimary" />
      <p className="text-heading-l">{title}</p>
      {showArrowIcon && (
        <Icon
          icon="teenyicons:right-outline"
          style={{ height: "24px", width: "24px", strokeWidth: "2px" }}
        />
      )}
    </div>
  );
};
