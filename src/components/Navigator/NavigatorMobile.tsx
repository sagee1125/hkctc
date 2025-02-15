import React from "react";

export const NavigatorMobile: React.FC = () => {
  return (
    <div className="cursor-pointer h-[24px] w-[24px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[24px] w-[24px]"
        viewBox="0 0 24 20"
        fill="none"
      >
        <path
          d="M0 2H24"
          stroke="#4B4746"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M0 10H24"
          stroke="#4B4746"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M0 18H24"
          stroke="#4B4746"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </div>
  );
};
