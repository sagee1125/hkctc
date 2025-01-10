import React from "react";

const colorMapping: Record<LinkColor, string> = {
  ink: "#233F55",
  default: "#00E",
};

type LinkColor = "default" | "ink";

type LinkProps = {
  linkColor: LinkColor;
  children: React.ReactNode;
  innerLink?: string;
  outerLink?: string;
};

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { children, outerLink, innerLink, linkColor } = props;

  const handleOpenOuterLink = () => {
    if (innerLink) window.open(innerLink, "_blank");
  };

  return (
    <a
      href={outerLink}
      target="_blank"
      rel="noreferrer"
      className={`underline text-[${colorMapping[linkColor]}]`}
      onClick={handleOpenOuterLink}
    >
      {children}
    </a>
  );
};
