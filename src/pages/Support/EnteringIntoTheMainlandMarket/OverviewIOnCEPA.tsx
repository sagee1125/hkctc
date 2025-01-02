import React, { useState } from "react";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  activatedButtonStyle,
  normalButtonStyle,
} from "../../EventsLanding/EventsLandingContent";
import { Accordion } from "../../../components";

const Agreement: React.FC = () => {
  const agreementQuestion: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question:
        "What are the application procedures for testing organisations in Hong Kong to participate in testing of products requiring the China Compulsory Certification (“CCC”)?",
      answer: (
        <>
          <p>
            According to the Implementation Guide promulgated in May 2020 on the
            Articles relating to testing and certification in the Agreement on
            Trade in Services revised in November 2019, any testing
            organisations engaging in testing business for products under the
            CCC system have to be accredited by Hong Kong Accreditation Service
            (“HKAS”) under its Hong Kong Laboratory Accreditation Scheme
            (“HOKLAS”) as a proof of competence in performing CCC product
            testing.
          </p>
          <br />
          <p>
            In addition, the testing organisations concerned have to enter into
            a cooperation agreement with designated Mainland certification
            bodies. Requirements on the testing organisations concerned and
            procedures of establishing cooperation with designated Mainland
            organisations could be viewed at{" "}
            <span className="underline text-[#00E]">HKAS’s website.</span>
          </p>
        </>
      ),
    },
    {
      question:
        "Regarding the part on CCC factory inspector in the Implementation Guide promulgated in May 2020, if that factory inspector, who is from a Hong Kong certification body, later works for another certification body, does he/she need to re-submit an application to China Certification and Accreditation Association (“CCAA”) and/or retake related training and examinations in accordance with the procedures set out in the Implementation Guide?",
      answer: (
        <>
          <p>
            Registered CCC factory inspector on the “CCAA認證人員註冊與管理系統”
            (CCAA Personnel Registration and Management System) is only required
            to submit an application using the “轉換機構申請” (apply for
            changing the institution) function in the system when they work for
            another certification body. The factory inspector is neither
            required to submit a written application to CCAA nor to retake
            relevant training courses and examinations. (The system “CCAA
            認證人員註冊與管理系統” could be accessed at its website (available
            in Simplified Chinese only).)
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {agreementQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const EnterpriseRun: React.FC = () => {
  const agreementQuestion: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question:
        "Can the testing organisations set up by Hong Kong enterprises in the Mainland become designated laboratories under the CCC system?",
      answer: (
        <>
          <p>
            According to the Certification and Accreditation Administration of
            the People's Republic of China (“CNCA”) Public Notice (“PN”) No. 34
            of 2015, PN No. 1 and PN No. 28 of 2017, testing laboratories
            meeting the conditions and requirements set out in the above PNs
            (including those set up by Hong Kong enterprises in the Mainland)
            may submit applications to CNCA any time for undertaking relevant
            testings for CCC.
          </p>
          <br />
          <p>
            As for other product categories that are not covered in the above
            PNs, testing laboratories that are interested in undertaking
            relevant testing for CCC may submit written requests to CNCA before
            1 April of each year. After evaluation, CNCA will announce its
            designated plans, and interested bodies may submit applications in
            accordance with the requirements prescribed in such announcements.
          </p>
          <br />

          <p>
            Details of the above PNs could be accessed at the links below
            (available in Simplified Chinese only) -
          </p>
          <br />

          <p>
            <a
              href="https://www.hkctc.gov.hk/en/cepa/faq.html#:~:text=CNCA%20PN%20No.%2034%20of%202015%20%E2%80%94%20%E3%80%8A%E5%9C%8B%E5%AE%B6%E8%AA%8D%E7%9B%A3%E5%A7%94%E9%97%9C%E6%96%BC%E7%99%BC%E4%BD%88%E9%80%B2%E4%B8%80%E6%AD%A5%E6%B7%B1%E5%8C%96%E5%BC%B7%E5%88%B6%E6%80%A7%E8%AA%8D%E8%AD%89%E5%AF%A6%E6%96%BD%E6%A9%9F%E6%A7%8B%E6%8C%87%E5%AE%9A%E5%AF%A9%E6%89%B9%E5%88%B6%E5%BA%A6%E6%94%B9%E9%9D%A9%E5%B7%A5%E4%BD%9C%E8%88%89%E6%8E%AA%E7%9A%84%E5%85%AC%E5%91%8A%E3%80%8B"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              CNCA PN No. 34 of 2015 —
              《國家認監委關於發佈進一步深化強制性認證實施機構指定審批制度改革工作舉措的公告》;
            </a>
          </p>
          <p>
            <a
              href="https://www.cnca.gov.cn/zwxx/gg/2017/art/2023/art_246e083a811b481ba1f24f3770944aab.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              CNCA PN No. 1 of 2017 —
              《國家認監委關於進一步深化汽車強制性產品認證改革的公告》
            </a>
            ;&nbsp;and&nbsp;
            <a
              href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/tzgg/art/2017/art_6aaa2ee81e2946208af05ef0dcce5ca6.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              CNCA PN No. 28 of 2017 —
              《國家認監委關於進一步擴大強制性產品認證實驗室日常指定實施範圍的公告》.
            </a>
            <p>Enquiries should be addressed to CNCA -</p>
            <br />
            <p>Electrical and Electronic Products</p>
            <p>Contact person: Mr. QIU Lei</p>
            <p>Phone number: +86-10-82262779</p>
            <p>
              Email address:{" "}
              <span className="underline text-[#00E]">qiul@cnca.gov.cn</span>
            </p>
            <br />
            <p>Non- Electrical and Electronic Products</p>
            <p>Contact person: Mr. GUAN Jun-wen</p>
            <p>Phone number: +86-10-82262674</p>
            <p>
              Email address:{" "}
              <span className="underline text-[#00E]">guanjw@cnca.gov.cn</span>
            </p>
          </p>
        </>
      ),
    },
    {
      question:
        "What is the implementation method for Article 23(8) of the Agreement on Economic and Technical Cooperation “Consider applications of eligible certification bodies set up by Hong Kong enterprises in the Mainland to become designated certification bodies under the CCC system”?",
      answer: (
        <>
          <p>
            Like other certification bodies legally established in the Mainland
            (including those that are state-owned, private-owned, Hong
            Kong/Macao-invested, and foreign invested), eligible certification
            bodies set up by Hong Kong enterprises in the Mainland may submit
            application direct to CNCA under the existing application regime in
            the Mainland. There is no separate implementation guide for Article
            23(8).
          </p>
          <br />
          <p>
            The relevant application regime, requirements and procedures are set
            out on the website of the State Administration for Market Regulation
            -{" "}
            <span className="underline text-[#00E]">
              《從事強制性認證以及相關活動的認證機構、檢查機構及實驗室指定》
            </span>
            (available in Simplified Chinese only). Applicants may also refer to
            CNCA's{" "}
            <a
              href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              CCC Column
            </a>{" "}
            for more information (available in Simplified Chinese only).
          </p>
        </>
      ),
    },
    {
      question:
        "When can eligible certification bodies set up by Hong Kong enterprises in the Mainland submit applications to CNCA?",
      answer: (
        <>
          <p>
            According to Article 12 of the
            《強制性產品認證機構、檢查機構和實驗室管理辦法》 promulgated by the
            former General Administration of Quality Supervision, Inspection and
            Quarantine, CNCA may make designated plans in accordance with the
            detailed CCC requirements and implementation needs. Such designated
            plans would be announced on CNCA's website and WeChat official
            account (WeChat ID: cnca_2015).
          </p>
          <br />
          <p>
            Generally speaking, certification bodies may, before 1 April of each
            year, express their intention to CNCA on the areas they are
            interested in becoming designated certification bodies under the CCC
            system. After evaluation, CNCA will announce its designated plans,
            and interested bodies may submit applications in accordance with the
            requirements prescribed in such announcements.
          </p>
          <br />
          <p>
            Eligible certification bodies set up by Hong Kong enterprises in the
            Mainland may submit applications to CNCA within the timeframe
            prescribed in such designated plans.
          </p>
          <br />
          <p>Enquiries should be addressed to CNCA -</p>
          <br />

          <p>Electrical and Electronic Products</p>
          <p>Contact person: Mr. QIU Lei</p>
          <p>Phone number: +86-10-82262779</p>
          <p>
            Email address:{" "}
            <span className="underline text-[#00E]">qiul@cnca.gov.cn</span>
          </p>
          <br />
          <p>Non- Electrical and Electronic Products</p>
          <p>Contact person: Mr. GUAN Jun-wen</p>
          <p>Phone number: +86-10-82262674</p>
          <p>
            Email address:{" "}
            <span className="underline text-[#00E]">guanjw@cnca.gov.cn</span>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[8px]">
      {agreementQuestion.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${item.question}`}
          details={<div className="text-body-m">{item.answer}</div>}
        />
      ))}
    </div>
  );
};

const faqMap: Record<string, React.ReactNode> = {
  "Agreement on Trade in Services": <Agreement />,
  "Hong Kong enterprise-run organizations in the Mainland designated under the China Compulsory Certification (CCC) system":
    <EnterpriseRun />,
};

export const OverviewIOnCEPA: React.FC = () => {
  const [activeFAQType, setActiveFAQType] = useState<string>(
    Object.keys(faqMap)[0]
  );
  const [timelineCollapsed, setTimelineCollapsed] = useState<boolean>(true);

  const timeLineData: Array<{ date: string; event: string }> = [
    {
      date: "Oct 2024",
      event:
        "Second Agreement Concerning Amendment to the Agreement on Trade in Services",
    },
    {
      date: "Nov 2019",
      event:
        "Agreement concerning Amendment to the Agreement on Trade in Services",
    },
    {
      date: "Dec 2018",
      event: "Agreement on Trade in Goods",
    },
    {
      date: "Jun 2017",
      event: "Agreement on Economic and Technical Cooperation",
    },
    {
      date: "Nov 2015",
      event:
        "Agreement on Trade in Services (Revised by way of Exchange of Letters in Dec 2018)",
    },
  ];

  const timeLineDataCollapsed: Array<{ date: string; event: string }> = [
    {
      date: "Dec 2014",
      event:
        "Agreement between the Mainland and Hong Kong on Achieving Basic Liberalisation of Trade in Services in Guangdong",
    },

    {
      date: "Aug 2013",
      event: "Supplement X to CEPA",
    },
    {
      date: "Jun 2012",
      event: "Supplement IX to CEPA",
    },
    {
      date: "Dec 2011",
      event: "Supplement VIII to CEPA",
    },
    {
      date: "May 2010",
      event: "Supplement VII to CEPA",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[12px] items-center">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">Overview on CEPA</p>
      </div>
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] text-body-m mt-[24px]">
        Since the signing of Supplement VII to the Mainland and Hong Kong Closer
        Economic Partnership Arrangement (CEPA), the Mainland has been gradually
        opening up its testing and certification market to Hong Kong.
      </div>
      <p className="text-heading-l my-[24px]">CEPA Agreements Timeline</p>
      <div>
        <div className="w-full flex flex-col">
          {timeLineData.map((item, index) => (
            <div key={index} className="flex flex-row gap-[24px]">
              <div className="relative flex flex-col items-center">
                {/* ball */}
                <div className="bg-newPrimary rounded-full h-[17px] w-[17px] relative" />
                {/* line */}
                <div className="h-full w-[2px] bg-newPrimary absolute top-[17px]" />
              </div>
              <div className="text-highlight-s grid grid-cols-[auto,auto] gap-[24px] p-[16px] border-[1px] border-[#E0E0E0] justify-start content-center mb-[16px] w-full">
                <p>{item.date}</p>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>

        <Collapse in={!timelineCollapsed} timeout="auto" unmountOnExit>
          <div className="w-full flex flex-col">
            {timeLineDataCollapsed.map((item, index) => (
              <div key={index} className="flex flex-row gap-[24px]">
                <div className="relative flex flex-col items-center">
                  {/* ball */}
                  <div className="bg-newPrimary rounded-full h-[17px] w-[17px] relative" />
                  {/* line */}
                  <div className="h-full w-[2px] bg-newPrimary absolute top-[17px]" />
                </div>
                <div className="text-highlight-s grid grid-cols-[auto,auto] gap-[24px] p-[16px] border-[1px] border-[#E0E0E0] justify-start content-center mb-[16px] w-full">
                  <p>{item.date}</p>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Collapse>
        <div className="w-full flex justify-center text-newPrimary mt-[16px]">
          <button
            className="text-highlight-m"
            onClick={() => {
              setTimelineCollapsed(!timelineCollapsed);
            }}
          >
            {timelineCollapsed ? "Show All" : "Hide"}
            <ExpandMoreIcon
              sx={{
                transform: timelineCollapsed
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l">Frequently Asked Questions</p>

      <div>
        <div className="flex flex-wrap gap-[8px] my-[24px]">
          {Object.keys(faqMap).map((btn, index) => {
            const isActivated = btn === activeFAQType;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveFAQType(btn);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-[16px] text-body-m">{faqMap[activeFAQType]}</div>
      </div>
    </div>
  );
};
