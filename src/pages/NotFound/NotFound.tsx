import React from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    not_found: "Page Not Found",
    back_to_home: "Back to Home",
    desc: "The page might had its name changed or is temporarily unavailable.",
  },
  cn: {
    home: `主頁`,
    not_found: "對不起，我們找不到你要的網頁。",
    back_to_home: "返回主頁",
    desc: "該頁面可能已變更名稱或暫時無法使用。",
  },
};

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const { home, not_found, back_to_home, desc } = page_text;
  const breadcrumbItems = [
    { label: home as string, href: "/" },
    { label: "404" },
  ];

  return (
    <div className="w-full">
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full flex flex-col justify-center py-[48px]">
        <div
          style={{
            textAlign: "center",
            fontFamily: "Roboto Flex",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "46px",
            textTransform: "capitalize",
          }}
        >
          404
        </div>
        <p className="text-heading-l mt-[16px] text-center">
          {not_found as string}
        </p>
        <p className="my-[24px] text-body-m text-center">{desc as string}</p>
        <div className="text-highlight-m text-white w-full flex justify-center">
          <button
            tabIndex={0}
            role="button"
            className="bg-[#233F55] w-[296px] p-[16px]"
            onClick={() => {
              navigate("/");
            }}
          >
            {back_to_home as string}
          </button>
        </div>
      </div>
    </div>
  );
};
