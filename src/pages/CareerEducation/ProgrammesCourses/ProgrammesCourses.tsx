import React from "react";
import {
  activatedButtonStyle,
  normalButtonStyle,
  SquareTitle,
} from "../../../components";
import { Language, useSettings } from "../../../context";

type CertList = {
  institution: string;
  institutionCN: string;
  programmes: Array<{
    programme: string;
    programmeCN: string;
    url: string;
  }>;
};

const degreeMap: Record<
  string,
  { tab: string; tabCN: string; list: CertList[] }
> = {
  master: {
    tab: "Master's Degree",
    tabCN: "碩士課程",
    list: [
      {
        institution: "The Chinese University of Hong Kong",
        institutionCN: "香港中文大學",
        programmes: [
          {
            programme: "MSc in Accreditation Chemistry",
            programmeCN: "認證化學理學碩士",
            url: "https://www.gs.cuhk.edu.hk/admissions/programme/science#msc-in-accreditation-chemistry",
          },
        ],
      },
      {
        institution: "Hong Kong Baptist University",
        institutionCN: "香港浸會大學",
        programmes: [
          {
            programme: "MSc in Analytical Chemistry",
            programmeCN: "分析化學理學碩士",
            url: "https://chem.hkbu.edu.hk/msc/",
          },
        ],
      },
      {
        institution: "The Hong Kong University of Science and Technology",
        institutionCN: "香港科技大學",
        programmes: [
          {
            programme: "MSc in Analytical Chemistry",
            programmeCN: "分析化學理學碩士",
            url: "http://prog-crs.ust.hk/pgprog/2018-19/msc-anchem",
          },
        ],
      },
      {
        institution: "The Hong Kong Polytechnic University",
        institutionCN: "香港理工大學",
        programmes: [
          {
            programme: "MSc in Sustainable Technology for Carbon Neutrality",
            programmeCN: "碳中和可持續科技理學碩士",
            url: "https://www.polyu.edu.hk/en/abct/study/taught-postgraduate-programmes/master-of-science-in-sustainable-technology-for-carbon-neutrality/",
          },
        ],
      },
    ],
  },
  bachelor: {
    tab: "Bachelor's Degree",
    tabCN: "學士課程",
    list: [
      {
        institution: "Hong Kong Baptist University",
        institutionCN: "香港浸會大學",
        programmes: [
          {
            programme: "BSc (Hons) in Biochemical and Testing Sciences",
            programmeCN: "生物化學和檢測科學（榮譽）理學士",
            url: "https://chem.hkbu.edu.hk/programmes/bsc_bts",
          },
        ],
      },

      {
        institution: "The Hong Kong Polytechnic University",
        institutionCN: "香港理工大學",
        programmes: [
          {
            programme:
              "BSc (Hons) in Analytical Sciences for Testing and Certification",
            programmeCN: "檢測及認證分析科學（榮譽）理學士",
            url: "https://www.polyu.edu.hk/abct/study/undergraduate-programmes/senior-year/bachelor-of-science-honours-in-analytical-sciences-for-testing-and-certification/",
          },
        ],
      },
      // multi
      {
        institution: "Hong Kong Metropolitan University",
        institutionCN: "香港都會大學",
        programmes: [
          {
            programme:
              "BAppSc (Hons) in Integrated Testing, Inspection and Certification",
            programmeCN: "綜合檢測和認證（榮譽）應用理學士",
            url: "https://admissions.hkmu.edu.hk/ug/st/integrated-testing-inspection-and-certification/#:~:text=Bachelor%20of%20Applied%20Science%20with,Testing%2C%20Inspection%20and%20Certification%20-%20Admissions&text=The%20aim%20of%20the%20programme,new%20testing%20and%20certification%20methodologies.",
          },
          {
            programme: "BSc (Hons) in Food Testing Science",
            programmeCN: "食品測試科學（榮譽）理學士",
            url: "https://admissions.hkmu.edu.hk/ug/st/food-testing-science/",
          },
          {
            programme: "BSc (Hons) in Testing Science and Certification",
            programmeCN: "檢測科學和認證（榮譽）理學士",
            url: "https://admissions.hkmu.edu.hk/ug/st/testing-science-and-certification/",
          },
        ],
      },
      {
        institution:
          "Technological and Higher Education Institute of Hong Kong",
        institutionCN: "香港高等教育科技學院",
        programmes: [
          {
            programme: "BSc (Hons) in Testing and Certification",
            programmeCN: "檢測和認證（榮譽）理學士",
            url: "https://www.thei.edu.hk/programme/food-and-health-sciences/bachelor-of-science-honours-in-testing-and-certification",
          },
        ],
      },
    ],
  },
  diploma: {
    tab: "Higher Diploma",
    tabCN: "高級文憑課程",
    list: [
      {
        institution: "Vocational Training Council",
        institutionCN: "職業訓練局",
        programmes: [
          {
            programme: "Higher Diploma in Analytical Science",
            programmeCN: "化驗科學高級文憑",
            url: "http://www.vtc.edu.hk/admission/en/programme/as114103-higher-diploma-in-analytical-science/",
          },
        ],
      },
    ],
  },
};

const multilingual = {
  en: {
    title: "Programmes and Courses",
    intro: (
      <>
        {" "}
        Academic programmes related to the testing and certification industry
        include science, applied science, engineering, fashion and textiles,
        etc. The tertiary education industry in Hong Kong has been offering more
        academic programmes dedicated to testing and certification, ranging from
        the sub-degree to postgraduate levels.
        <br />
        <br />
        Launched in the 2015/16 academic year, the&nbsp;
        <a
          href="https://www.cspe.edu.hk/en/sssdp/participating-institutions.html#year=2020/21"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Study Subsidy Scheme for Designated Professions/Sectors (SSSDP)
        </a>
        &nbsp;is to subsidise students to pursue designated full-time locally
        accredited self-financing undergraduate programmes in selected
        disciplines, including testing and certification.
        <br />
        <br />A number of organisations also offer training courses and
        workshops from time to time for testing and certification practitioners
        to enhance their knowledge and skills.
      </>
    ),
    list_tertiary:
      "List of Tertiary Programmes Dedicated to Testing and Certification",
    institution: "Institution",
    prog_name: "Programme Name",
    other_course: "Other Courses for Career Development",
    VTC: "Institute of Vocational Education, Vocational Training Council (VTC/IVE)",
    VTC_detail: (
      <>
        VTC/IVE regularly organises short courses and seminars to update testing
        and certification practitioners with the latest knowledge and insight of
        the industry. Details of the courses and seminars may be obtained at
        VTC/IVE's relevant&nbsp;
        <a
          href="https://www.vtc.edu.hk/studyat/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </>
    ),
    HKPC: "Hong Kong Productivity Council (HKPC)",
    HKPC_detail: (
      <>
        The Hong Kong Productivity Council (HKPC) has been providing training
        activities for various industries to enhance the knowledge and skills of
        their workers. Details of HKPC's training activities are accessible on
        HKPC's&nbsp;
        <a
          href="https://www.hkpcacademy.org/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </>
    ),
  },
  cn: {
    title: "課程資訊",
    intro: (
      <>
        與檢測和認證業相關的學術課程包括科學、應用科學、工程及時裝與紡織等。本港的高等教育界持續開辦更多有關檢測和認證的副學位至研究生程度課程，由2015/16學年起，
        <a
          href="https://www.cspe.edu.hk/en/sssdp/participating-institutions.html#year=2020/21"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          「指定專業／界別課程資助計劃」
        </a>
        資助學生修讀選定範疇（包括檢測及認證）的指定全日制經本地評審自資學生學位課程。此外，有機構亦不時舉辦培訓課程及工作坊，讓業界人士提升及增進其知識和技能。
      </>
    ),
    list_tertiary: "與檢測認證相關的專上課程名單",
    institution: "院校",
    prog_name: "課程",
    other_course: "其他專業發展課程",
    VTC: "職業訓練局轄下的專業教育學院",
    VTC_detail: (
      <>
        職業訓練局轄下專業教育學院定期舉辦短期課程及研討會，向檢測和認證從業員提供行業的最新知識，並增進他們對行業的了解。課程及研討會詳情可於職業訓練局的
        <a
          href="https://www.vtc.edu.hk/studyat/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          專屬網站
        </a>
        瀏覽。
      </>
    ),
    HKPC: "香港生產力促進局",
    HKPC_detail: (
      <>
        香港生產力促進局經常舉辦不同的專業培訓課程，讓業界人士藉此提升及增進其業內知識和技能。有關該局課程資料，詳情請瀏覽該局
        <a
          href="https://www.hkpcacademy.org/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          網頁
        </a>
        。
      </>
    ),
  },
};

export const ProgrammesCourses: React.FC = () => {
  const buttonArr = Object.keys(degreeMap);
  const { language, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    title,
    intro,
    list_tertiary,
    institution,
    prog_name,
    other_course,
    HKPC,
    VTC,
    VTC_detail,
    HKPC_detail,
  } = page_text;

  const [activeButton, setActiveButton] = React.useState<string>(buttonArr[0]);

  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <p className="text-body-m mt-[24px] text-justify">{intro as string}</p>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l">{list_tertiary as string} </p>

      <div className="flex flex-wrap gap-[8px] my-[24px]">
        {buttonArr.map((b, i) => {
          const isActivated = activeButton === b;
          return (
            <button
              key={i}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveButton(b);
              }}
            >
              {getSingleText(degreeMap[b].tab, degreeMap[b].tabCN)}
            </button>
          );
        })}
      </div>

      <div className="flex flex-row gap-[12px] items-center text-trustfulBlue mb-[24px]">
        <div className="h-[15px] w-[15px] bg-trustfulBlue" />
        <p className="text-heading-l">
          {getSingleText(
            degreeMap[activeButton].tab,
            degreeMap[activeButton].tabCN
          )}
        </p>
      </div>
      <div className="bg-[#F7F7F5] border-[1px] border-[#E0E0E0] grid grid-cols-2 text-highlight-m">
        <div className="py-[16px] px-[10px]">{institution as string}</div>
        <div className="py-[16px] px-[10px]">{prog_name as string} </div>
      </div>
      <div className="border-x-[1px] border-[#E0E0E0] grid grid-cols-2 text-body-s">
        {degreeMap[activeButton].list.map((item, index) => (
          <React.Fragment key={index}>
            <div className="py-[16px] px-[10px] border-r-[1px] border-b-[1px] border-[#E0E0E0]">
              <p className="!text-body-m">
                {getSingleText(item.institution, item.institutionCN)}
              </p>
            </div>
            <div className="py-[16px] px-[10px] border-b-[1px] border-[#E0E0E0] flex flex-col gap-[30px]">
              {item.programmes.map((prog, index) => (
                <a
                  key={index}
                  href={prog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                  style={{
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "22px",
                  }}
                >
                  {getSingleText(prog.programme, prog.programmeCN)}
                </a>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l">{other_course as string}</p>
      <p className="text-heading-l text-trustfulBlue my-[24px]">
        {VTC as string}
      </p>
      <p className="text-body-m text-justify">{VTC_detail as string}</p>

      <p className="text-heading-l text-trustfulBlue my-[24px]">
        {HKPC as string}
      </p>
      <p className="text-body-m text-justify">{HKPC_detail as string}</p>
    </div>
  );
};
