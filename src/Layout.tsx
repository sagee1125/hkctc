import React, {
  type ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useRef,
  useEffect,
  ReactElement,
} from "react";
import { Footer, Header, Navigator } from "./components";
import { Language, useSettings } from "./context";
import { t2s } from "chinese-s2t";

type LayoutProps = {
  children: React.ReactNode;
};

/**
 * 深度转换 React 节点中的所有繁体文本为简体
 */

export const convertNodeToSimplified = (node: ReactNode): ReactNode => {
  return Children.map(node, (child) => {
    // 处理基本类型
    if (typeof child === "string") {
      return t2s(child);
    }

    if (
      typeof child === "number" ||
      typeof child === "boolean" ||
      child == null
    ) {
      return child;
    }

    // 处理 React 元素
    if (isValidElement(child)) {
      // 类型断言确保我们知道这是一个 ReactElement
      const element = child as ReactElement<any>;

      // 转换所有字符串类型的 props
      const convertedProps = Object.entries(element.props).reduce(
        (acc, [key, value]) => {
          if (typeof value === "string") {
            acc[key] = t2s(value);
          } else {
            acc[key] = value;
          }
          return acc;
        },
        {} as Record<string, unknown>
      );

      // 安全的 cloneElement 调用
      return cloneElement(element, {
        ...convertedProps,
        children: convertNodeToSimplified(element.props.children),
      } as React.Attributes & { children?: ReactNode }); // 明确的类型断言
    }

    return child;
  });
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isPC, fontClass, language } = useSettings();
  const isTraditional = language === Language.ZH_TW;

  console.log(t2s("繁體字測試")); // 應該輸出 "繁体字测试"

  return (
    <div
      className={fontClass}
      style={{
        ...layoutStyle,
        ...(isPC
          ? {
              minWidth: "1300px",
            }
          : {
              maxWidth: "1024px",
              width: "100%",
              overflow: "hidden",
            }),
      }}
    >
      {isPC && <Header />}
      <Navigator />
      <main style={contentStyle}>
        {isTraditional ? children : convertNodeToSimplified(children)}
      </main>
      <Footer />
    </div>
  );
};

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
};
