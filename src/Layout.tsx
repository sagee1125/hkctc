import React from "react";
import { Header, Navigator, ScrollTopButton, SkipLinks } from "./components";
import { useSettings } from "./context";
import { usePageTitle } from "./hooks/usePageTitle";
import { Footer } from "./components/Footer/Footer";
type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isPC, language, fontClass } = useSettings();
  usePageTitle(language);

  return (
    <div
      className={fontClass}
      style={{
        ...layoutStyle,
        ...(isPC ? pcStyle : mobileStyle),
      }}
    >
      <SkipLinks />
      <div id="main-menu">
        {isPC && <Header />}
        <Navigator />
      </div>

      <main style={contentStyle} id="main-content">
        {children}
        <ScrollTopButton />
      </main>

      <Footer />
    </div>
  );
};

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
};

const pcStyle: React.CSSProperties = {
  minWidth: "1440px",
  width: "100%",
};
const mobileStyle: React.CSSProperties = {
  maxWidth: "1440px",
  width: "100%",
  overflow: "hidden",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
};
