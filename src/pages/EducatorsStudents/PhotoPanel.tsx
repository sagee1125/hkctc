import React from "react";

export const PhotoPanel: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-[24px] p-[24px]">
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/Learning.png)`,
          minHeight: "537px",
          ...imgBox,
        }}
      >
        <div style={overlayStyle} />
        <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
          <p className={"text-heading-l-extra text-white z-10"}>
            Learning and Teaching Resources
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[24px]">
        <div
          className="col-span-2"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/Student_Competitions.png)`,
            ...imgBox,
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Student Competitions
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/Qualifications_Framework.png)`,
            ...imgBox,
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Qualifications Framework
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/Programmes_Courses.png)`,
            ...imgBox,
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Programmes and Courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const overlayStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "140px",
  background:
    "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
  pointerEvents: "none",
  zIndex: 1,
};

export const imgBox: React.CSSProperties = {
  display: "flex",
  backgroundSize: "100% auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  position: "relative",
};
