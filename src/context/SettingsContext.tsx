import React, { createContext, useContext, useState, ReactNode } from "react";

type SettingsContextType = {
  fontSize: "small" | "medium" | "large";
  setFontSize: (fontSize: "small" | "medium" | "large") => void;
  language: "zh-CN" | "zh-TW" | "en";
  setLanguage: (language: "zh-CN" | "zh-TW" | "en") => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [language, setLanguage] = useState<"zh-CN" | "zh-TW" | "en">("zh-TW");

  return (
    <SettingsContext.Provider
      value={{ fontSize, setFontSize, language, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
