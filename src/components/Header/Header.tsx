import React from "react";
import { useSettings } from "../../context";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const { fontSize, setFontSize, language, setLanguage } = useSettings();

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFontSize(event.target.value as "small" | "medium" | "large");
  };

  const navigate = useNavigate();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setLanguage(event.target.value as "zh-CN" | "zh-TW" | "en");
  };
  return (
    <>
      <header
        style={{
          ...headerStyle,
          // fontSize:
          //   fontSize === "small"
          //     ? "12px"
          //     : fontSize === "medium"
          //     ? "16px"
          //     : "20px",
        }}
      >
        <p className="pl-4 items-center text-body-s">
          The Hong Kong Council for Testing and Certification
        </p>
        <div className="flex flex-row gap-4 items-center pr-4">
          <Icon icon="ri:search-line" className="h-6 w-6 text-[#333333]" />
          <Icon icon="mingcute:font-line" className="h-6 w-6 text-[#333333]" />
          <Icon icon="ci:globe" className="h-6 w-6 text-[#333333]" />
          <div
            style={{
              width: "1.5px",
              height: "18px",
              backgroundColor: "#666666",
            }}
          />
          <Icon
            icon="mage:camera-2"
            className="h-6 w-6 text-[#333333] cursor-pointer"
            onClick={() => {
              window.location.href = "https://www.instagram.com/hkctcgovhk/";
            }}
          />
          <Icon
            icon="fa6-brands:facebook-f"
            className="h-5 w-5 text-[#333333] cursor-pointer"
            onClick={() => {
              window.location.href = "https://www.facebook.com/hkctcgovhk";
            }}
          />
        </div>
      </header>
    </>
  );
};

const headerStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "56px",
  borderBottom: "1px solid #E0E0E0",
};
