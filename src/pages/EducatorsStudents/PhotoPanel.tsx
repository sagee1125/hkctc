import React from "react";
import { useSettings } from "../../context";
import { navItemEnum } from "../../const";

const multilingual = {
  en: {
    learning_teaching_resources: "Learning and Teaching Resources",
    student_competition: "Student Competitions",
    qualifications_framework: "Qualifications Framework",
    programmes_and_courses: "Programmes and Courses",
  },
  cn: {
    learning_teaching_resources: "學習及教學資源",
    student_competition: "學生比賽",
    qualifications_framework: "資歷架構",
    programmes_and_courses: "課程資訊",
  },
};

export const PhotoPanel: React.FC = () => {
  const { getPageText, isPC } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    learning_teaching_resources,
    student_competition,
    qualifications_framework,
    programmes_and_courses,
  } = page_text;

  if (isPC)
    return (
      <div className="w-full h-full grid grid-cols-2 gap-[24px] p-[24px]">
        <a
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_1.png)`,
            minHeight: "537px",
            ...imgBox,
            cursor: "pointer",
          }}
          href={`/career_and_education?section=${navItemEnum.learning_teaching_resources}`}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              {learning_teaching_resources as string}
            </p>
          </div>
        </a>
        <div className="grid grid-cols-2 gap-[24px]">
          <a
            className="col-span-2"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_2.png)`,
              ...imgBox,
              cursor: "pointer",
            }}
            href={`/events-promotion?section=${navItemEnum.student_competition}`}
          >
            <div style={overlayStyle} />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-10"}>
                {student_competition as string}
              </p>
            </div>
          </a>
          <a
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_3.png)`,
              ...imgBox,
              cursor: "pointer",
            }}
            href={`/career_and_education?section=qualifications_framework`}
          >
            <div style={overlayStyle} />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-10"}>
                {qualifications_framework as string}
              </p>
            </div>
          </a>

          <a
            href={`/career_and_education?section=${navItemEnum.programmes_and_courses}`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_4.png)`,
              ...imgBox,
              cursor: "pointer",
            }}
          >
            <div style={overlayStyle} />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-10"}>
                {programmes_and_courses as string}
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  else
    return (
      <div className={`w-full flex flex-col gap-[24px] p-[24px]`}>
        <a
          href={`/events-promotion?section=${navItemEnum.learning_teaching_resources}`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_1.png)`,
            backgroundSize: "cover",
            paddingTop: "56.25%", // 16:9
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            position: "relative",
            cursor: "pointer",
          }}
          role="button"
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              {learning_teaching_resources as string}
            </p>
          </div>
        </a>
        <a
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_2.png)`,
            backgroundSize: "cover",
            paddingTop: "56.25%", // 16:9
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            position: "relative",
            cursor: "pointer",
          }}
          role="button"
          href={`/events-promotion?section=${navItemEnum.student_competition}`}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              {student_competition as string}
            </p>
          </div>
        </a>
        <a
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_3.png)`,
            backgroundSize: "cover",
            paddingTop: "56.25%", // 16:9
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            position: "relative",
            cursor: "pointer",
          }}
          href={`/events-promotion?section=${navItemEnum.qualifications_framework}`}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              {qualifications_framework as string}
            </p>
          </div>
        </a>

        <a
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/banner_4.png)`,
            backgroundSize: "cover",
            paddingTop: "56.25%", // 16:9
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            position: "relative",
            cursor: "pointer",
          }}
          role="button"
          href={`/events-promotion?section=${navItemEnum.programmes_and_courses}`}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              {programmes_and_courses as string}
            </p>
          </div>
        </a>
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
