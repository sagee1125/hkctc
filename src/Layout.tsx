import React from "react";
import { Footer, Header, Navigator } from "./components";
import { useSettings } from "./context";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { device } = useSettings();
  const isMobile: boolean = device === "mobile";

  return (
    <div
      style={{
        ...layoutStyle,
        ...(isMobile
          ? {
              maxWidth: "10230px",
            }
          : {
              minWidth: "1300px",
            }),
      }}
    >
      {!isMobile && <Header />}
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
