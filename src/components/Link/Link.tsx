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
  const navigate = useNavigate();
  const {
    children,
    outerLink,
    innerLink,
    linkColor = "default",
    underline = true,
    breakAll = true,
  } = props;

  const handleOpenOuterLink = () => {
    if (innerLink) navigate(innerLink);
  };

  return (
    <a
      aria-label="link"
      href={outerLink}
      target="_blank"
      rel="noreferrer"
      className={`cursor-pointer ${breakAll ? "break-all" : "text-justify"} ${
        underline && "underline underline-offset-4"
      } text-[${colorMapping[linkColor as LinkColor] ?? linkColor}]`}
      tabIndex={0}
      role="button"
      onClick={handleOpenOuterLink}
    >
      {children}
    </a>
  );
};
