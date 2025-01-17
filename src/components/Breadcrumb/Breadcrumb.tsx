import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  href?: string; // last one does not need href
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav id="breadcrumb" aria-label="Breadcrumb" style={breadcrumbStyle}>
      <ol className="flex space-x-[8px] text-black items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center flex-row gap-[8px]">
            {index === 0 ? (
              <div className="flex flex-row items-center gap-[8px]">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icons/home.svg`}
                  alt="Home Icon"
                  className="w-[16px] h-[16px] text-[#A7AAAD]"
                />
                <p
                  className="text-body-m cursor-pointer"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate(`${item.href}`); // back to homepage
                  }}
                >
                  {item.label}
                </p>
              </div>
            ) : item.href ? (
              <p
                className="text-body-m cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("breadcrumb");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }

                  navigate(`${item.href}`);
                }}
              >
                {item.label}
              </p>
            ) : (
              <span className="text-highlight-m">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <Icon icon="weui:arrow-outlined" className="w-4 h-4 text-grey" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const breadcrumbStyle: React.CSSProperties = {
  display: "flex",
  height: "52px",
  padding: "24px",
  borderBottom: "1px solid #E0E0E0",
  alignItems: "center",
};
