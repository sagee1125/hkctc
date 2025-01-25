import React from "react";
import {
  activatedButtonStyle,
  normalButtonStyle,
  SquareTitle,
} from "../../../components";

type CertList = {
  institution: string;
  programmes: Array<{
    programme: string;
    url: string;
  }>;
};

const degreeMap: Record<string, CertList[]> = {
  "Master's Degree": [
    {
      institution: "The Chinese University of Hong Kong",
      programmes: [
        {
          programme: "MSc in Accreditation Chemistry",
          url: "https://www.gs.cuhk.edu.hk/admissions/programme/science#msc-in-accreditation-chemistry",
        },
      ],
    },
    {
      institution: "Hong Kong Baptist University",
      programmes: [
        {
          programme: "MSc in Analytical Chemistry",
          url: "https://chem.hkbu.edu.hk/msc/",
        },
      ],
    },
    {
      institution: "The Hong Kong University of Science and Technology",
      programmes: [
        {
          programme: "MSc in Analytical Chemistry",
          url: "http://prog-crs.ust.hk/pgprog/2018-19/msc-anchem",
        },
      ],
    },
    {
      institution: "The Hong Kong Polytechnic University",
      programmes: [
        {
          programme: "MSc in Sustainable Technology for Carbon Neutrality",
          url: "https://www.polyu.edu.hk/en/abct/study/taught-postgraduate-programmes/master-of-science-in-sustainable-technology-for-carbon-neutrality/",
        },
      ],
    },
  ],
  "Bachelor's Degree": [
    {
      institution: "Hong Kong Baptist University",
      programmes: [
        {
          programme: "BSc (Hons) in Biochemical and Testing Sciences",
          url: "https://chem.hkbu.edu.hk/programmes/bsc_bts",
        },
      ],
    },

    {
      institution: "The Hong Kong Polytechnic University",
      programmes: [
        {
          programme:
            "BSc (Hons) in Analytical Sciences for Testing and Certification",
          url: "https://chem.hkbu.edu.hk/programmes/bsc_bts",
        },
      ],
    },
    // multi
    {
      institution: "Hong Kong Metropolitan University",
      programmes: [
        {
          programme:
            "BAppSc (Hons) in Integrated Testing, Inspection and Certification",
          url: "https://admissions.hkmu.edu.hk/ug/st/integrated-testing-inspection-and-certification/#:~:text=Bachelor%20of%20Applied%20Science%20with,Testing%2C%20Inspection%20and%20Certification%20-%20Admissions&text=The%20aim%20of%20the%20programme,new%20testing%20and%20certification%20methodologies.",
        },
        {
          programme: "BSc (Hons) in Food Testing Science",
          url: "https://admissions.hkmu.edu.hk/ug/st/food-testing-science/",
        },
        {
          programme: "BSc (Hons) in Testing Science and Certification",
          url: "https://admissions.hkmu.edu.hk/ug/st/testing-science-and-certification/",
        },
      ],
    },
    {
      institution: "Technological and Higher Education Institute of Hong Kong",
      programmes: [
        {
          programme: "BSc (Hons) in Testing and Certification",
          url: "https://www.thei.edu.hk/programme/food-and-health-sciences/bachelor-of-science-honours-in-testing-and-certification",
        },
      ],
    },
  ],
  "Higher Diploma": [
    {
      institution: "Vocational Training Council",
      programmes: [
        {
          programme: "Higher Diploma in Analytical Science",
          url: "http://www.vtc.edu.hk/admission/en/programme/as114103-higher-diploma-in-analytical-science/",
        },
      ],
    },
  ],
};

export const ProgrammesCourses: React.FC = () => {
  const buttonArr = Object.keys(degreeMap);
  const [activeButton, setActiveButton] = React.useState<string>(buttonArr[0]);

  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Programmes and Courses" />

        <p className="text-body-m mt-[24px]">
          Academic programmes related to the testing and certification sector
          include science, applied science, engineering, fashion and textiles,
          etc. The tertiary education sector in Hong Kong has been offering more
          academic programmes dedicated to testing and certification, ranging
          from the sub-degree to postgraduate levels.
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
          workshops from time to time for testing and certification
          practitioners to enhance their knowledge and skills.
        </p>
        <hr className="my-[24px] text-[#E0E0E0]" />

        <p className="text-heading-l">
          List of Tertiary Programmes Dedicated to Testing and Certification{" "}
        </p>

        <div className="flex flex-row gap-[8px] my-[24px]">
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
                {b}
              </button>
            );
          })}
        </div>

        <div className="flex flex-row gap-[12px] items-center text-trustfulBlue mb-[24px]">
          <div className="h-[15px] w-[15px] bg-trustfulBlue" />
          <p className="text-heading-l">{activeButton}</p>
        </div>
        <div className="bg-[#F7F7F5] border-[1px] border-[#E0E0E0] grid grid-cols-2 text-highlight-m">
          <div className="py-[16px] px-[10px]">Institution</div>
          <div className="py-[16px] px-[10px]">Programme Name</div>
        </div>
        <div className="border-x-[1px] border-[#E0E0E0] grid grid-cols-2 text-body-s">
          {degreeMap[activeButton].map((item, index) => (
            <React.Fragment key={index}>
              <div className="py-[16px] px-[10px] border-r-[1px] border-b-[1px] border-[#E0E0E0]">
                <p>{item.institution}</p>
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
                    {prog.programme}
                  </a>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
        <hr className="my-[24px] text-[#E0E0E0]" />

        <p className="text-heading-l">Other Courses for Career Development</p>
        <p className="text-heading-l text-trustfulBlue my-[24px]">
          Institute of Vocational Education, Vocational Training Council
          (VTC/IVE)
        </p>
        <p className="text-body-m">
          VTC/IVE regularly organises short courses and seminars to update
          testing and certification practitioners with the latest knowledge and
          insight of the industry. Details of the courses and seminars may be
          obtained at VTC/IVE's relevant&nbsp;
          <a
            href="http://va.vtc.edu.hk/tcert/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            website
          </a>
          .
        </p>

        <p className="text-heading-l text-trustfulBlue my-[24px]">
          Hong Kong Productivity Council (HKPC)
        </p>
        <p className="text-body-m">
          The Hong Kong Productivity Council (HKPC) has been providing training
          activities for various industries to enhance the knowledge and skills
          of their workers. Details of HKPC's training activities are accessible
          on HKPC's&nbsp;
          <a
            href="https://www.hkpcacademy.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            website
          </a>
          .
        </p>
      </div>
    </div>
  );
};
