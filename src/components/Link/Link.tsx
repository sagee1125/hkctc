import React from "react";

const colorMapping: Record<LinkColor, string> = {
  ink: "#233F55",
  darkInk: "#203136",
  default: "#00E",
  black: "#000",
};

type LinkColor = "default" | "ink" | "darkInk" | "black";

type LinkProps = {
  linkColor?: LinkColor | string;
  children: React.ReactNode;
  underline?: boolean;
  innerLink?: string;
  outerLink?: string;
};

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const {
    children,
    outerLink,
    innerLink,
    linkColor = "default",
    underline = true,
  } = props;

  const handleOpenOuterLink = () => {
    if (innerLink) window.open(innerLink, "_blank");
  };

  return (
    <a
      href={outerLink}
      target="_blank"
      rel="noreferrer"
      className={`${underline && "underline underline-offset-4 "} text-[${
        colorMapping[linkColor as LinkColor] ?? linkColor
      }]`}
      onClick={handleOpenOuterLink}
    >
      {children}
    </a>
  );
};
