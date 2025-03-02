import React, { useState, useEffect } from "react";

type StickySidebarProps = {
  children: React.ReactNode;
};

// Why Sticky Sidebar: Only render the scrolling in this component but not influence the others
export const StickySidebar: React.FC<StickySidebarProps> = (
  props: StickySidebarProps
) => {
  const [paddingTop, setPaddingTop] = useState<number>(0);
  const { children } = props;
  const handleScroll = (): void => {
    // get the distance
    const containerTop =
      document.getElementById("sticky-container")?.getBoundingClientRect()
        .top || 0;
    if (containerTop <= 0) {
      if (containerTop > -6000) setPaddingTop(Math.abs(containerTop) + 8);
    } else {
      setPaddingTop(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="sticky-container"
      className="flex flex-col gap-[0]"
      style={{
        paddingTop: `${paddingTop}px`,
        transition: "padding-top 0.2s ease-out",
      }}
    >
      {children}
    </div>
  );
};
