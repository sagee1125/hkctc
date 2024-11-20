import { Icon } from "@iconify/react";
import React from "react";



export const VideoBox: React.FC = () => {



    return (
        <div style={videoBoxStyle}>
            <img
                className="w-full h-auto max-w-full"
                src={
                    process.env.REACT_APP_HOST_URL +
                    "/assets/images/Video_Placeholder.png"
                }
                alt={'Video Placeholder'}
            />
        </div>
    );
};



const videoBoxStyle: React.CSSProperties = {
    width: '100%',
    display: "flex",
    height: "736px",
    borderBottom: "1px solid #E0E0E0",
};
