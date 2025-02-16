import React from "react";
import {
  VideoBox,
  maxPCContainer,
  fullContainer,
  maxMobileContainer,
} from "../../components";
import { WhatsNew } from "./WhatsNew";
import { Publications } from "./Publications";
import { useSettings } from "../../context";

export const Home: React.FC = () => {
  const { device } = useSettings();
  const isMobile: boolean = device === "mobile";

  return (
    <div style={fullContainer}>
      <VideoBox />
      <div style={isMobile ? maxMobileContainer : maxPCContainer}>
        <WhatsNew />
        <Publications />
      </div>
    </div>
  );
};
