import React from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "404" }];
  const navigate = useNavigate();

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
        <p className="text-heading-l mt-[16px] text-center">Page Not Found</p>
        <p className="my-[24px] text-body-m text-center">
          The page might had its name changed or is temporarily unavailable.
        </p>
        <div className="text-highlight-m text-white w-full flex justify-center">
          <button
            className="bg-[#233F55] w-[296px] p-[16px]"
            onClick={() => {
              navigate("/hkctc");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
