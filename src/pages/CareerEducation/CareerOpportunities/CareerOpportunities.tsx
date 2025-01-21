import React from "react";
import { FileTemplate, SquareTitle } from "../../../components";

export const CareerOpportunities: React.FC = () => {
  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Career Opportunities" />

        <div className="bg-[#F7F7F5] px-[42px] py-[36px] mt-[24px]">
          <p className="text-body-m flex-grow min-w-0">
            The nurture of young talent is essential to support the development
            of the T&C sector. HKCTC has been putting much effort to assist the
            sector to attract new blood through arranging a wide range of
            activities for students.
          </p>
        </div>

        <hr className="my-[24px] text-[#E0E0E0]" />
        <p className="text-heading-l mb-[24px]">
          Career Talks and Fairs & Laboratory Visits
        </p>

        <div className="w-full grid grid-cols-2 gap-[8px] mb-[24px]">
          <img
            className="w-full h-auto object-cover"
            src={`${process.env.PUBLIC_URL}/assets/careerEducation/laboratoryvisits_01.png`}
            alt={"laboratory visits 1"}
          />
          <img
            className="w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/assets/careerEducation/laboratoryvisits_02.png`}
            alt={"laboratory visits 2"}
          />
        </div>
        <div className="bg-[#F7F7F5] border-[1px] border-[#E0E0E0] grid grid-cols-2 text-highlight-m">
          <div className="py-[16px] px-[24px]">Career Talks and Fairs</div>
          <div className="py-[16px] px-[24px]">Laboratory Visits</div>
        </div>
        <div className="border-x-[1px] border-b-[1px] border-[#E0E0E0] grid grid-cols-2 text-body-s">
          <div className="py-[16px] px-[24px] border-r-[1px] border-[#E0E0E0]">
            <p>
              Internship programme provides a good channel for students to
              understand more about the testing and certification sector and its
              career opportunities.
              <br />
              <br />
              Since 2011, HKCTC has coordinated internship opportunities from
              accredited testing, inspection and certification bodies in Hong
              Kong and forwarded them to local universities and VTC.
            </p>
          </div>
          <div className="py-[16px] px-[24px]">
            <p>
              To enhance the students' understanding of the work of the testing
              and certification sector, HKCTC has been organising visits to
              commercial testing laboratories in Hong Kong for secondary school
              and university students.
              <br />
              <br />
              Students will have the opportunities to see the facilities, and
              how testing is performed in laboratories.
            </p>
          </div>
        </div>
        <div className="mt-[24px]">
          <FileTemplate
            title={"Events Application Form"}
            imagePath={"assets/careerEducation/EventsApplicationForm.png"}
            iconPath={"PDF.png"}
          />
        </div>

        <hr className="my-[24px] text-[#E0E0E0]" />

        <p className="text-heading-l mb-[24px]">Summer Internship</p>
        <p className="text-body-m">
          Internship programme provides a good channel for students to
          understand more about the testing and certification sector and its
          career opportunities.
          <br />
          Since 2011, HKCTC has coordinated internship opportunities from
          accredited testing, inspection and certification bodies in Hong Kong
          and forwarded them to local universities and VTC.
        </p>
      </div>
    </div>
  );
};
