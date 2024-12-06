import React from "react";
import { Breadcrumb } from "../../../components";
import { AwardSchemeContent } from "./AwardSchemeContent";

export const AwardScheme: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events", href: "/hkctc#/events-landing" },
    { label: "T&C Manpower Development Award Scheme 2023-2024" },
  ];

  return (
    <div className="w-full">
      <div className="w-full h-[460px] bg-newPrimary flex items-center justify-center">
        <video
          src={
            process.env.PUBLIC_URL +
            "/assets/eventsLanding/awardScheme/mpaward-2023-24-Compressed.mp4"
          }
          autoPlay
          muted
          loop
          playsInline
          style={{
            height: "460px", // 高度固定为460px
            width: "auto", // 宽度根据视频比例自适应
            objectFit: "contain", // 确保视频内容保持原比例
          }}
        />
      </div>
      <Breadcrumb items={breadcrumbItems} />
      <AwardSchemeContent />
    </div>
  );
};
