import React from "react";
import { useLocation } from "react-router-dom";

export const ScrollTopButton: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const hideButton = [
    "/educators-students",
    "/general-public",
    "/industry",
    "/service-users",
    "/general-public",
    "/hkctc",
    "/whats-new",
    "/resources-reports",
    "/*",
  ];
  const ifHideButton =
    currentPath === "/" ||
    hideButton.some((path) => currentPath.startsWith(path));

  if (ifHideButton) return <></>;

  return (
    <div
      style={{
        border: "1px solid #233F55",
        width: "48px",
        height: "48px",
        background: "white",
        position: "fixed",
        bottom: "48px",
        right: "18px",
        zIndex: 1000,
      }}
    >
      <div
        className="flex w-full h-full justify-center items-center cursor-pointer"
        tabIndex={0}
        role="button"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <svg
          tabIndex={0}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-label="scroll to top"
        >
          <path
            d="M-9.53674e-07 16.9351L12 4.93506L24 16.9351L21.87 19.0651L12 9.19506L2.13 19.0651L-9.53674e-07 16.9351Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};
