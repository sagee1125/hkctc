import { Backdrop, CircularProgress } from "@mui/material";
import React, { createContext, useContext, useState, ReactNode } from "react";
import * as pdfjsLib from "pdfjs-dist";

type SettingsContextType = {
  isLoading: boolean;
  fontSize: "small" | "medium" | "large";
  language: "zh-CN" | "zh-TW" | "en";
  pdfjsLib: typeof pdfjsLib;
  setLanguage: (language: "zh-CN" | "zh-TW" | "en") => void;
  setFontSize: (fontSize: "small" | "medium" | "large") => void;
  setIsLoading: (isLoading: boolean) => void;
  withLoading: (callback: () => Promise<void>) => Promise<void>;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [language, setLanguage] = useState<"zh-CN" | "zh-TW" | "en">("zh-TW");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        setFontSize,
        setLanguage,
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
