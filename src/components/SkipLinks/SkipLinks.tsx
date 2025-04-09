import React from "react";
import { useSettings } from "../../context";
const multilingual = {
  en: {
    main_content: `Skip to main content`,
    main_menu: "Skip to main menu",
    footer: "Skip to footer",
  },

  cn: {
    main_content: `跳至主要内容`,
    main_menu: "跳至主選單",
    footer: "跳至頁尾",
  },
};
export const SkipLinks: React.FC = () => {
  const { getPageText } = useSettings();

  const page_text = getPageText(multilingual);
  const { main_content, main_menu, footer } = page_text;

  const focusSection = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav aria-label="Skip links">
      <div className="absolute left-[-999px] top-2 z-[9999] flex gap-2 p-2 text-white underline  focus-within:left-2 text-highlight-l">
        <button
          tabIndex={0}
          className="focus:outline-none focus:ring focus:ring-black px-[44px] py-[11px] bg-newPrimary"
          onClick={() => focusSection("main-content")}
        >
          {main_content as string}
        </button>
        <button
          tabIndex={1}
          className="focus:outline-none focus:ring focus:ring-black px-[44px] py-[11px] bg-newPrimary"
          onClick={() => focusSection("main-menu")}
        >
          {main_menu as string}
        </button>
        <button
          tabIndex={2}
          className="focus:outline-none focus:ring focus:ring-black px-[44px] py-[11px] bg-newPrimary"
          onClick={() => focusSection("footer")}
        >
          {footer as string}
        </button>
      </div>
    </nav>
  );
};
function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
