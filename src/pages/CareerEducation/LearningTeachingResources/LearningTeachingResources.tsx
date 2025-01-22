import React from "react";
import { SquareTitle } from "../../../components";

export const LearningTeachingResources: React.FC = () => {
  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Learning and Teaching Resources" />

        <p className="text-body-m mt-[24px]">
          HKCTC attach importance to promoting testing and certification to
          youngsters and students, and enhance their awareness of the value
          created by testing and certification. To this end, HKCTC has produced
          different learning and teaching materials to help youngsters to
          acquire the knowledge of testing and certification and arouse their
          interest to the sector.
        </p>

        <hr className="my-[24px] text-[#E0E0E0]" />
        <p className="text-heading-l mb-[24px]">
          STEM Teaching Kit on Testing and Certification for Junior Secondary
          Students
        </p>

        <p className="text-body-m">
          The Innovation and Technology Commission and HKCTC have commissioned
          Hong Kong Baptist University to develop a STEM teaching kit for junior
          secondary students. The kit consists of six experiments, introducing
          some basic scientific knowledge and concepts about product testing and
          analysis. Through providing students with more practical
          opportunities, the kit aims to arouse students’ interest in STEM
          subjects while raising their awareness of the importance of testing to
          ensure the safety and quality of products commonly used in daily life.
          Schools are welcome to make use of the kit in class or
          extra-curricular activities.
        </p>
        <hr className="my-[24px] text-[#E0E0E0]" />
      </div>
    </div>
  );
};
