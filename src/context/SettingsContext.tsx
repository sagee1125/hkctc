import { Backdrop, CircularProgress } from "@mui/material";
import React, { createContext, useContext, useState, ReactNode } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { useMediaQuery } from "@mui/material";

export const enum Language {
  ZH_CN = "zh-CN",
  ZH_TW = "zh-TW",
  EN = "en",
}

type SettingsContextType = {
  isLoading: boolean;
  fontSize: "small" | "medium" | "large";
  language: Language;
  isPC: boolean;
  pdfjsLib: typeof pdfjsLib;
  handleChangeLang: (role: Language) => void;
  setFontSize: (fontSize: "small" | "medium" | "large") => void;
  setIsLoading: (isLoading: boolean) => void;
  withLoading: (callback: () => Promise<void>) => Promise<void>;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

  const isPC = useMediaQuery("(min-width:1024px)");

  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(() => {
    const memoLang = (localStorage.getItem("lang") as Language) ?? Language.EN;
    return memoLang;
  });

  const handleChangeLang = (lang: Language): void => {
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };

  const withLoading = async (callback: () => Promise<void>) => {
    try {
      setIsLoading(true);
      await callback();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        fontSize,
        language,
        isLoading,
        isPC,
        setFontSize,
        handleChangeLang,
        setIsLoading,
        withLoading,
        pdfjsLib,
      }}
    >
      {isLoading && (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
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
