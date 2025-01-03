import React from "react";
import { Footer, Header, Navigator } from "./components";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Header />
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
  minWidth: "1300px",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  boxSizing: "border-box",
};
