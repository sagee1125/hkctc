import { Icon } from "@iconify/react";
import React from "react";

type SquareTitleProps = {
  title: string;
  showArrowIcon?: boolean;
};

export const SquareTitle: React.FC<SquareTitleProps> = ({
  title,
  showArrowIcon = false,
}) => {
  return (
    <div className="flex flex-row gap-[12px] items-center">
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
