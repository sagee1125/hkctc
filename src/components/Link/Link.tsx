import React from "react";
import { useNavigate } from "react-router-dom";

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
  breakAll?: boolean;
};

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const {
    children,
    outerLink,
    innerLink,
    linkColor = "default",
    underline = true,
    breakAll = true,
  } = props;

  const handleOpenOuterLink = () => {
    if (innerLink) window.open(innerLink, "_self");
  };

  return (
    <a
      aria-label={"redirect to " + (innerLink ?? outerLink)}
      aria-disabled={!innerLink && !outerLink}
      href={outerLink}
      target="_blank"
      rel="noreferrer"
      className={`cursor-pointer ${breakAll ? "break-all" : "text-justify"} ${
        underline && "underline underline-offset-4"
      } text-[${colorMapping[linkColor as LinkColor] ?? linkColor}]`}
      onClick={handleOpenOuterLink}
    >
      {children}
    </a>
  );
};
