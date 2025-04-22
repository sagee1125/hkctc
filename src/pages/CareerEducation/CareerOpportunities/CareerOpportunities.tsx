import React, { useEffect } from "react";
import { FileTemplate, SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
    summer_internship_sub: (
      <>
        Internship Opportunities for Students<sup>(NOTE)</sup>
      </>
    ),
    internship: [
      "The following information on internship opportunities provided by certain accredited testing, inspection and certification bodies are open to university and/or Vocational Training Council students for Summer 2025. Qualified students interested in the internships should apply for the position in accordance with the instructions therein.",
      "(Note: The information will be updated periodically and made available online throughout Summer 2025.)",
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
    summer_internship_sub: (
      <>
        學生暑期實習機會<sup>（註）</sup>
      </>
    ),
    internship: [
      "以下資料為部份認可檢測認證機構於2025年暑期提供予大學及/或職業訓練局學生的實習機會。符合要求又有意申請實習機會的學生須按有關資料內指定方法遞交申請。",
      "註：實習機會資料會在2025年暑期在本網頁提供，及不時更新，資料只有英文版本。）",
    ],
  },
};

export const CareerOpportunities: React.FC = () => {
  const { getPageText, language, getSingleText, processText } = useSettings();
  const page_text = getPageText(multilingual);

  const scrollId = new URLSearchParams(window.location.search).get("scroll_id");

  useEffect(() => {
    const element = document.getElementById(scrollId as string);

    if (scrollId && element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [scrollId]);

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
    summer_internship_sub,
    internship,
  } = page_text;

  const tableHeads =
    language === Language.EN
      ? [
          "Company",
          "Job Title",
          "Major/Programme/Field of Study",
          "Year of Study",
          "Details and Application Method",
        ]
      : [
          "公司",
          "職位名稱",
          "主修 / 就讀課程 / 學習範疇",
          "就讀年級",
          "詳情及報名方法",
        ];

  // English version only
  const rows = [
    {
      company: "Intertek Testing Services Hong Kong Limited",
      jobTitle: "Internship Trainee",
      majorStudy: "Science field of study",
      year: "1 - 4",
      link: "/en/doc/2025_Offer-Intertek.pdf", // https://www.hkctc.gov.hk
    },
    {
      company: "Wilson Curtain Wall Consultant (HK) Ltd.",
      jobTitle: "Assistant Engineer",
      majorStudy: "Mechanical Engineering",
      year: "1 - 3",
      link: "/en/doc/2025_Offer-Wilson_Curtain_Wall.pdf",
    },
    {
      company: "TÜV Rheinland Hong Kong Limited",
      jobTitle: "Interns (Chemical Laboratory)",
      majorStudy: "Science field of study",
      year: "1 - 3",
      link: "/en/doc/2025_Offer-TUV.pdf",
    },

    {
      company: "QIMA Testing (HK) Limited",
      jobTitle: "Lab Testing Intern (Chem)",
      majorStudy:
        "Material Science, Product Testing, Chemistry or related subjects",
      year: "1 - 4",
      link: "/en/doc/2025_Offer-QIMA.pdf",
    },
    {
      company: "",
      jobTitle: "Lab Testing Intern (CS/PM)",
      majorStudy:
        "Scientific discipline (Science, Engineering, Testing Science and Certification or another technical discipline)",

      year: "1 - 4",
      link: "",
    },
    {
      company: "",
      jobTitle: "Lab Testing Intern (Phy)",
      majorStudy: "Physics or Engineering",

      year: "1 - 4",
      link: "",
    },
    {
      company: "",
      jobTitle: "Lab Testing Intern (Ops-SC)",
      majorStudy: "Testing Science and Certification or related subjects",

      year: "1 - 4",
      link: "",
    },

    {
      company: "Lux Environmental Service Co. Ltd. - Lux Laboratory",
      jobTitle: "Assistant Inspector",
      majorStudy:
        "Environmental Engineering, Environmental Science, or a related field",

      year: "1 - 4",
      link: "/en/doc/2025_Offer-Lux_Lab_Internship.pdf",
    },
    {
      company: "",
      jobTitle: "Assistant Technical Officer ",
      majorStudy:
        "Environmental Engineering, Environmental Science, or a related field",

      year: "1 - 4",
      link: "",
    },
  ];

  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <div className="bg-[#F7F7F5] px-[42px] py-[36px] mt-[24px]">
        <p className="text-body-m flex-grow min-w-0 text-justify">
          {intro as string}
        </p>
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p
        className="text-heading-l mb-[24px]"
        role="heading"
        aria-level={10}
        id="career_visits"
      >
        {career_visits as string}
      </p>

      <div className="w-full grid grid-cols-2 gap-[8px] mb-[24px]">
        <img
          className="w-full h-auto object-cover"
          src={`${process.env.PUBLIC_URL}/assets/careerEducation/laboratoryvisits_01.png`}
          alt={"laboratory visits 1"}
          aria-hidden="true"
        />
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/assets/careerEducation/laboratoryvisits_02.png`}
          alt={"laboratory visits 2"}
          aria-hidden="true"
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

      <p
        className="text-heading-l mb-[24px]"
        role="heading"
        aria-level={10}
        id="summer_internship"
      >
        {summer_internship as string}
      </p>
      <div
        style={{ fontSize: "16px", fontWeight: 700, lineHeight: "32px" }}
        className="my-[24px]"
      >
        {summer_internship_sub as React.ReactNode}
      </div>
      <p className="text-body-m text-justify">
        {(internship as string[])[0]}
        <br />
        <br />
        {(internship as string[])[1]}
      </p>

      <TableContainer
        component={"div"}
        style={{
          border: "1px solid #E0E0E0",
          padding: "24px",
          marginTop: "24px",
        }}
      >
        <Table sx={{ minWidth: 650, minHeight: 400 }}>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  borderBottom: "2px solid black",
                },
              }}
            >
              {tableHeads.map((h, index) => (
                <TableCell key={index}>
                  <p aria-label={h} className="!text-body-s text-[#7E7E7E]">
                    {processText(h)}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const { company, jobTitle, majorStudy, year, link } = row;
              return (
                <TableRow
                  key={index}
                  sx={{
                    "& td": {
                      borderBottom:
                        index < rows.length - 1 && rows[index + 1].company
                          ? "1px dashed #C8CFD9"
                          : 0,
                    },
                    "&:last-child td": {
                      borderBottom: 0,
                    },
                    minHeight: 200,
                  }}
                >
                  <TableCell
                    sx={{
                      verticalAlign: "top",
                    }}
                  >
                    <p aria-label={company} className="!text-body-s">
                      {company}
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "top",
                    }}
                  >
                    <div aria-label={jobTitle} className="!text-body-s ">
                      {jobTitle}
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "top",
                    }}
                  >
                    <div aria-label={majorStudy} className="!text-body-s ">
                      {majorStudy}
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "top",
                    }}
                  >
                    <div
                      aria-label={year}
                      className="!text-body-s flex flex-col gap-[32px]"
                    >
                      {year}
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "top",
                    }}
                  >
                    <a
                      href={"https://www.hkctc.gov.hk" + link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Details and Application Method of ${company} (opens in new tab)`}
                      className="flex !h-full justify-start items-start"
                    >
                      <img
                        className=" w-[32px] h-[32px]"
                        src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                        alt={"file icon"}
                      />
                    </a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
