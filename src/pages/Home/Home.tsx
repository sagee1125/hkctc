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
  const { isPC } = useSettings();

  return (
    <div style={fullContainer}>
      <VideoBox />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        <WhatsNew />
        <Publications />
      </div>
    </div>
  );
};
