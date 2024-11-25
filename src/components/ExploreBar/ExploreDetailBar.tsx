import React from "react";


export const ExploreDetailBar: React.FC = () => {
    return (
        <div style={barStyle}>

        </div>

    );
};


const barStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    height: "168px",
    borderBottom: "1px solid #E0E0E0",
    paddingLeft: "2rem",
};
