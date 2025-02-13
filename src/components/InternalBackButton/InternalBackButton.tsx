import React from "react";
import { useNavigate } from "react-router-dom";

type InternalBackButtonProps = {
  targetUrl: string;
};

export const InternalBackButton: React.FC<InternalBackButtonProps> = ({
  targetUrl,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row gap-[8px] items-center">
      <img
        className="w-[16px] h-[16px]"
        src={`${process.env.PUBLIC_URL}/assets/icons/arrow_left.svg`}
        alt={"arrow left"}
      />
      <p
        className="text-highlight-l cursor-pointer text-newPrimary"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });

          navigate(targetUrl);
        }}
      >
        Back
      </p>
    </div>
  );
};
