import React from "react";
import { useNavigate } from "react-router-dom";
import { Language, useSettings } from "../../context";

type InternalBackButtonProps = {
  targetUrl: string;
};

export const InternalBackButton: React.FC<InternalBackButtonProps> = ({
  targetUrl,
}) => {
  const navigate = useNavigate();
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const back = isEn ? "Back" : "返回";
  return (
    <div className="flex flex-row gap-[8px] items-center">
      <img
        className="w-[16px] h-[16px]"
        src={`${process.env.PUBLIC_URL}/assets/icons/arrow_left.svg`}
        alt={"arrow left"}
        aria-hidden="true"
      />
      <p
        className="text-highlight-l cursor-pointer text-newPrimary"
        tabIndex={0}
        role="link"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });

          navigate(targetUrl);
        }}
        aria-label={back}
      >
        {back}
      </p>
    </div>
  );
};
