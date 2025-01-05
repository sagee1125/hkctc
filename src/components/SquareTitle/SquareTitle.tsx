import React from "react";

type SquareTitleProps = {
  title: string;
};

export const SquareTitle: React.FC<SquareTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-row gap-[12px] items-center">
      <div className="h-[15px] w-[15px] bg-newPrimary" />
      <p className="text-heading-l">{title}</p>
    </div>
  );
};
