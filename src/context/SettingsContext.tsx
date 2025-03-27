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

export interface LanguageResources {
  [key: string]: string | string[] | JSX.Element | LanguageResources;
}

interface MultilingualResources {
  en: LanguageResources;
  cn: LanguageResources;
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
  getPageText(multilingualObj: MultilingualResources): LanguageResources;
  getSingleText(singleText: string, singleCNText: string): string;
  getSingleNode(node: React.ReactNode, nodeCN: React.ReactNode): JSX.Element;
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
      console.log("????");
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
          // 處理數組 (可能是 string[] 或 (string | JSX.Element | LanguageResources)[])
          simplifiedObj[key] = value.map((item) => {
            if (typeof item === "string") {
              return t2s(item);
            } else if (typeof item === "object" && item !== null) {
              if (isValidElement(item)) {
                return convertReactNode(item) as JSX.Element;
              } else {
                return convertTraditionalToSimplified(
                  item as LanguageResources
                );
              }
            }
            return item;
          }) as string | string[] | JSX.Element | LanguageResources;
        } else if (isValidElement(value)) {
          simplifiedObj[key] = convertReactNode(value) as JSX.Element;
        } else if (typeof value === "object" && value !== null) {
          // 處理嵌套對象
          simplifiedObj[key] = convertTraditionalToSimplified(
            value as LanguageResources
          );
        } else {
          simplifiedObj[key] = value;
        }
      }
    }

    return simplifiedObj;
  }

  // 辅助函数：检查是否是React元素
  function isValidElement(value: any): value is JSX.Element {
    return value && typeof value === "object" && "$$typeof" in value;
  }

  function getSingleNode(
    node: React.ReactNode,
    nodeCN: React.ReactNode
  ): JSX.Element {
    switch (language) {
      case Language.EN:
        return node as JSX.Element;
      case Language.ZH_TW:
        return nodeCN as JSX.Element;
      case Language.ZH_CN:
        return convertReactNode(nodeCN) as JSX.Element;
      default:
        return node as JSX.Element;
    }
  }

  function getPageText(
    multilingualObj: MultilingualResources
  ): LanguageResources {
    switch (language) {
      case Language.EN:
        return multilingualObj.en;
      case Language.ZH_TW:
        return multilingualObj.cn;
      case Language.ZH_CN:
        return convertTraditionalToSimplified(multilingualObj.cn);
      default:
        return multilingualObj.en;
    }
  }

  function getSingleText(singleText: string, singleCNText: string): string {
    switch (language) {
      case Language.EN:
        return singleText;
      case Language.ZH_TW:
        return singleCNText;
      case Language.ZH_CN:
        return t2s(singleCNText);
      default:
        return singleText;
    }
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
        getPageText,
        getSingleText,
        getSingleNode,
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
