import { Backdrop, CircularProgress } from "@mui/material";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  isValidElement,
} from "react";
import * as pdfjsLib from "pdfjs-dist";
import { useMediaQuery } from "@mui/material";
import { t2s } from "chinese-s2t";

interface LanguageResources {
  [key: string]: string | string[] | JSX.Element;
}
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
  fontClass: string;
  pdfjsLib: typeof pdfjsLib;
  handleChangeLang: (role: Language) => void;
  setFontSize: (fontSize: "small" | "medium" | "large") => void;
  setIsLoading: (isLoading: boolean) => void;
  withLoading: (callback: () => Promise<void>) => Promise<void>;
  convertTraditionalToSimplified(
    traditionalObj: LanguageResources
  ): LanguageResources;
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
  const fontClassMapping: Record<Language, string> = {
    [Language.EN]: "",
    [Language.ZH_TW]: "traditional-chinese",
    [Language.ZH_CN]: "simplified-chinese",
  };
  const fontClass = fontClassMapping[language];

  function convertReactNode(node: ReactNode): ReactNode {
    if (typeof node === "string") {
      return t2s(node);
    }

    if (!isValidElement(node)) {
      return node;
    }

    // 處理 props 中的文本
    const newProps = { ...node.props };
    for (const prop in newProps) {
      if (typeof newProps[prop] === "string") {
        newProps[prop] = t2s(newProps[prop]);
      }
    }

    // 遞歸處理 children
    const children = React.Children.map(node.props.children, (child) => {
      return convertReactNode(child);
    });

    return React.cloneElement(node, newProps, children);
  }

  function convertTraditionalToSimplified(
    traditionalObj: LanguageResources
  ): LanguageResources {
    const simplifiedObj: LanguageResources = {};

    for (const key in traditionalObj) {
      if (Object.prototype.hasOwnProperty.call(traditionalObj, key)) {
        const value = traditionalObj[key];

        if (typeof value === "string") {
          // 處理字符串
          simplifiedObj[key] = t2s(value);
        } else if (Array.isArray(value)) {
          // 處理數組 (可能是 string[] 或 (string | JSX.Element)[])
          simplifiedObj[key] = value.map((item) =>
            typeof item === "string" ? t2s(item) : item
          );
        } else if (isValidElement(value)) {
          simplifiedObj[key] = convertReactNode(value) as JSX.Element;
        } else {
          simplifiedObj[key] = value;
        }
      }
    }

    return simplifiedObj;
  }

  return (
    <SettingsContext.Provider
      value={{
        fontSize,
        language,
        isLoading,
        isPC,
        fontClass,
        setFontSize,
        handleChangeLang,
        setIsLoading,
        withLoading,
        pdfjsLib,
        convertTraditionalToSimplified,
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
