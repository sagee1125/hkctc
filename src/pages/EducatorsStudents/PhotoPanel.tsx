import React from "react";

export const PhotoPanel: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-[24px] p-[24px]">
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_1.png)`,
          minHeight: "537px",
          ...imgBox,
          cursor: "pointer",
        }}
        onClick={() => {
          window.open(
            "/career_and_education?section=learning_teaching_resources"
          );
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_2.png)`,
            ...imgBox,
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("/events-promotion?section=student_competition");
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_3.png)`,
            ...imgBox,
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(
              "/career_and_education?section=qualifications_framework"
            );
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_4.png)`,
            ...imgBox,
            cursor: "pointer",
          }}
          onClick={() => {
            window.open("/career_and_education?section=programmes_and_courses");
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
