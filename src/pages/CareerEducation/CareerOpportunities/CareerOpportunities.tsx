import React from "react";
import { FileTemplate, SquareTitle } from "../../../components";

export const CareerOpportunities: React.FC = () => {
  return (
    <div className="w-full">
      <SquareTitle title="Career Opportunities" />

      <div className="bg-[#F7F7F5] px-[42px] py-[36px] mt-[24px]">
        <p className="text-body-m flex-grow min-w-0">
          The nurture of young talent is essential to support the development of
          the T&C industry. HKCTC has been putting much effort to assist the
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
            HKCTC has been organising career talks for secondary school and
            university students, and participating in career fairs in local
            post-secondary educational institutes to promote the career
            prospects of the testing and certification sector to students.
            <br />
            <br />
            In career talks, representatives from the Hong Kong Accreditation
            Service will introduce the basic concepts and overview of the
            testing and certification sector. Practitioners from the testing and
            certification sector will also talk about the job nature,
            requirements and career prospects of the sector, and share their
            experience in working in the sector.
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
            Students will have the opportunities to see the facilities, and how
            testing is performed in laboratories.
          </p>
        </div>
      </div>

      <p className="mt-[24px] text-body-s text-justify">
        Schools which are interested in arranging a career talk/ laboratory
        visits can complete the application form below and fax/ email it to us.
        We will then contact you for arrangements.
      </p>

      <div className="mt-[24px]">
        <FileTemplate
          title={"Events Application Form"}
          imagePath={"assets/careerEducation/EventsApplicationForm.png"}
          iconPath={"PDF.png"}
          pdfHyperlink={"/en/doc/CareerTalk_or_Lab_visit_ReplyForm.pdf"}
        />
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l mb-[24px]">Summer Internship</p>
      <p className="text-body-m">
        Internship programme provides a good channel for students to understand
        more about the testing and certification sector and its career
        opportunities.
        <br />
        <br />
        Since 2011, HKCTC has coordinated internship opportunities from
        accredited testing, inspection and certification bodies in Hong Kong and
        forwarded them to local universities and VTC.
      </p>
    </div>
  );
};
