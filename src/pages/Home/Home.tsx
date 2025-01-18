import React from "react";
import { VideoBox, maxContainer, fullContainer } from "../../components";
import { WhatsNew } from "./WhatsNew";
import { Publications } from "./Publications";

export const Home: React.FC = () => {
  return (
    <div style={fullContainer}>
      <VideoBox />
      <div style={maxContainer}>
        <WhatsNew />
        <Publications />
      </div>
    </div>
  );
};
