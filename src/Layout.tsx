import React from "react";
import { Footer, Header, Navigator } from "./components";
import { useSettings } from "./context";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isPC } = useSettings();

  return (
    <div
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
      <main style={contentStyle}>{children}</main>
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
