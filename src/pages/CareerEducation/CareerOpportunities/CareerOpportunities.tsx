import React from "react";
import { FileTemplate, SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    title: "Career Opportunities",
    intro:
      "The nurture of young talent is essential to support the development of the T&C industry. HKCTC has been putting much effort to assist the industry to attract new blood through arranging a wide range of activities for students.",
    career_visits: "Career Talks and Fairs & Laboratory Visits",
    career_fairs: "Career Talks and Fairs",
    laboratory_visits: "Laboratory Visits",
    HKCTC_organising:
      "HKCTC has been organising career talks for secondary school and university students, and participating in career fairs in local post-secondary educational institutes to promote the career prospects of the testing and certification industry to students.",
    in_career_talks:
      "In career talks, representatives from the Hong Kong Accreditation Service will introduce the basic concepts and overview of the testing and certification industry. Practitioners from the testing and certification industry will also talk about the job nature, requirements and career prospects of the industry, and share their experience in working in the industry.",
    to_enhance: `To enhance the students' understanding of the work of the testing and certification industry, HKCTC has been organising visits to commercial testing laboratories in Hong Kong for secondary school and university students.`,
    student_will:
      "Students will have the opportunities to see the facilities, and how testing is performed in laboratories.",
    school_which:
      "Schools which are interested in arranging a career talk/ laboratory visits can complete the application form below and fax/ email it to us. We will then contact you for arrangements.",
    application_form: "Application Form",
    summer_internship: "Summer Internship",
    internship: [
      "Internship programme provides a good channel for students to understand more about the testing and certification industry and its career opportunities.",
      "Since 2011, HKCTC has coordinated internship opportunities from accredited testing, inspection and certification bodies in Hong Kong and forwarded them to local universities and VTC.",
    ],
  },
  cn: {
    title: "就業機會",
    intro:
      "培育年青人才對檢測和認證業的發展十分重要。香港檢測和認證局一直透過安排多項活動，致力協助行業吸納新血。",
    career_visits: "職業講座和展覽 & 實驗所參觀",
    career_fairs: "職業講座和展覽",
    laboratory_visits: "實驗所參觀",
    HKCTC_organising:
      "香港檢測和認證局一直為中學及大學生安排職業講座，亦有參與不同大專院校的職業展覽，向學生推廣檢測和認證業的職業前景。",
    in_career_talks:
      "在職業講座中，香港認可處的代表會介紹檢測認證的基本概念及行業的概況，而檢測認證業的從業員會講解工作性質、入職要求和行業前景，以及分享他們業內工作經驗。",
    to_enhance:
      "為了加強學生對檢測和認證工作的了解，本局一直為中學及大學生安排参觀本地私營的測試實驗所，讓他們有機會參觀檢測的設施，以及觀摩實驗所測試工作的情況。",
    student_will: "",
    school_which:
      "有興趣安排職業講座/實驗所參觀活動的學校可以填妥申請表格並傳真至本局。我們會稍後聯絡學校以作安排。",
    application_form: "申請表格",
    summer_internship: "暑期實習",
    internship: [
      "實習計劃提供理想途徑，讓學生加深了解有關檢測認證業及其事業發展機會。",
      "自2011年起，香港檢測和認證局都會邀請本港的認可檢測認證機構提供實習機會，並把有關實習空缺資料轉交本地大學及職業訓練局。",
    ],
  },
};

export const CareerOpportunities: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    title,
    intro,
    career_visits,
    career_fairs,
    laboratory_visits,
    HKCTC_organising,
    in_career_talks,
    to_enhance,
    student_will,
    school_which,
    application_form,
    summer_internship,
    internship,
  } = page_text;
  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <div className="bg-[#F7F7F5] px-[42px] py-[36px] mt-[24px]">
        <p className="text-body-m flex-grow min-w-0 text-justify">
          {intro as string}
        </p>
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]">{career_visits as string}</p>

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
        <div className="py-[16px] px-[24px]">{career_fairs as string}</div>
        <div className="py-[16px] px-[24px]">{laboratory_visits as string}</div>
      </div>
      <div className="border-x-[1px] border-b-[1px] border-[#E0E0E0] grid grid-cols-2 text-body-s">
        <div className="py-[16px] px-[24px] border-r-[1px] border-[#E0E0E0]">
          <p className="text-justify">
            {HKCTC_organising as string}
            <br />
            <br />
            {in_career_talks as string}
          </p>
        </div>
        <div className="py-[16px] px-[24px] text-justify">
          <p>
            {to_enhance as string}
            {student_will && (
              <>
                <br />
                <br />
                {student_will}
              </>
            )}
          </p>
        </div>
      </div>

      <p className="mt-[24px] text-body-s text-justify">
        {school_which as string}
      </p>

      <div className="mt-[24px]">
        <FileTemplate
          title={application_form as string}
          imagePath={"assets/careerEducation/EventsApplicationForm.png"}
          iconPath={"PDF.png"}
          pdfHyperlink={"/en/doc/CareerTalk_or_Lab_visit_ReplyForm.pdf"}
        />
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l mb-[24px]">{summer_internship as string}</p>
      <p className="text-body-m text-justify">
        {(internship as string[])[0]}
        <br />
        <br />
        {(internship as string[])[1]}
      </p>
    </div>
  );
};
