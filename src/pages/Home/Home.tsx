import React from "react";
import { VideoBox } from "../../components";
import { WhatsNew } from "./WhatsNew";
import { Publications } from "./Publications";

export const Home: React.FC = () => {
  return (
    <div>
      <VideoBox />
      <WhatsNew />
      <Publications />
    </div>
  );
};
