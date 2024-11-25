import React from "react";
import { VideoBox } from "../../components";
import { WhatsNew } from "./WhatsNew";
import { Publications } from "./Publications";

export const Home: React.FC = () => {
  return (
    <div
      style={{
        paddingBottom: "48px",
      }}
    >
      <VideoBox />
      <WhatsNew />
      <Publications />
    </div>
  );
};
