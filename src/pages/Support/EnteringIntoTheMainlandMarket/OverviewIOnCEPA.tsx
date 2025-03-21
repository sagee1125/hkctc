import React, { useState } from "react";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { CEPAAgreements_ids } from "./CEPAAgreements";
import { navItemEnum } from "../../../const";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../../context";

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
            According to the&nbsp;
            <a
              href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Implementation Guide
            </a>
            &nbsp;promulgated in May 2020 on the Articles relating to testing
            and certification in the Agreement on Trade in Services revised in
            November 2019, any testing organisations engaging in testing
            business for products under the CCC system have to be accredited by
            Hong Kong Accreditation Service (“HKAS”) under its Hong Kong
            Laboratory Accreditation Scheme (“HOKLAS”) as a proof of competence
            in performing CCC product testing.
          </p>
          <br />
          <p>
            In addition, the testing organisations concerned have to enter into
            a cooperation agreement with designated Mainland certification
            bodies. Requirements on the testing organisations concerned and
            procedures of establishing cooperation with designated Mainland
            organisations could be viewed at&nbsp;
            <a
              href="https://www.itc.gov.hk/en/quality/hkas/accreditation/ccc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              HKAS’s website.
            </a>
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
            認證人員註冊與管理系統” could be accessed at its&nbsp;
            <a
              href="https://service.ccaa.org.cn/#/index"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              website
            </a>
            &nbsp;(available in Simplified Chinese only).)
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
          <ul>
            <li>
              <a
                href="https://www.cnca.gov.cn/zwxx/gg/2015/art/2023/art_bf698bdf2523441cb48b910caf35ca54.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                CNCA PN No. 34 of 2015 —
                《國家認監委關於發佈進一步深化強制性認證實施機構指定審批制度改革工作舉措的公告》;
              </a>
            </li>
            <li>
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
            </li>
            <li>
              <a
                href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/tzgg/art/2017/art_6aaa2ee81e2946208af05ef0dcce5ca6.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                CNCA PN No. 28 of 2017 —
                《國家認監委關於進一步擴大強制性產品認證實驗室日常指定實施範圍的公告》.
              </a>
            </li>
          </ul>
          <p>Enquiries should be addressed to CNCA -</p>
          <br />
          <p>Electrical and Electronic Products</p>
          <p>Contact person: Mr. QIU Lei</p>
          <p>Phone number: +86-10-82262779</p>
          <p>
            Email address:&nbsp;
            <a href="mailto:qiul@cnca.gov.cn" className="underline text-[#00E]">
              qiul@cnca.gov.cn
            </a>
          </p>
          <br />
          <p>Non- Electrical and Electronic Products</p>
          <p>Contact person: Mr. GUAN Jun-wen</p>
          <p>Phone number: +86-10-82262674</p>
          <p>
            Email address:&nbsp;
            <a
              href="mailto:guanjw@cnca.gov.cn"
              className="underline text-[#00E]"
            >
              guanjw@cnca.gov.cn
            </a>
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
            -&nbsp;
            <a
              className="underline text-[#00E]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gov.cn/zhengce/2022-10/08/content_5723509.htm"
            >
              《強制性產品認證機構和實驗室管理辦法》
            </a>
            (available in Simplified Chinese only). Applicants may also refer to
            CNCA's&nbsp;
            <a
              href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              CCC Column
            </a>
            &nbsp; for more information (available in Simplified Chinese only).
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
            plans would be announced on CNCA's&nbsp;
            <a
              href="https://www.cnca.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              website and WeChat official
            </a>
            &nbsp; account (WeChat ID: cnca_2015).
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
            Email address:&nbsp;
            <a href="mailto:qiul@cnca.gov.cn" className="underline text-[#00E]">
              qiul@cnca.gov.cn
            </a>
          </p>
          <br />
          <p>Non- Electrical and Electronic Products</p>
          <p>Contact person: Mr. GUAN Jun-wen</p>
          <p>Phone number: +86-10-82262674</p>
          <p>
            Email address::&nbsp;
            <a
              href="mailto:guanjw@cnca.gov.cn"
              className="underline text-[#00E]"
            >
              guanjw@cnca.gov.cn
            </a>
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
  "Hong Kong enterprise-run organisations in the Mainland designated under the China Compulsory Certification (CCC) system":
    <EnterpriseRun />,
};

export const OverviewIOnCEPA: React.FC = () => {
  const { isPC } = useSettings();
  const [activeFAQType, setActiveFAQType] = useState<string>(
    Object.keys(faqMap)[0]
  );
  const [timelineCollapsed, setTimelineCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();

  const timeLineData: Array<{
    date: string;
    event: React.ReactNode;
    scroll_id: CEPAAgreements_ids;
    serviceTab: string;
  }> = [
    {
      date: "Oct 2024",
      event:
        "Second Agreement Concerning Amendment to the Agreement on Trade in Services",
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "0",
    },
    {
      date: "Nov 2019",
      event: (
        <>
          Agreement concerning Amendment to the&nbsp;
          <span className="underline text-newPrimary">
            Agreement on Trade in Services
          </span>
        </>
      ),
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "2",
    },
    {
      date: "Dec 2018",
      event: (
        <span className="underline text-newPrimary">
          Agreement on Trade in Goods
        </span>
      ),
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_goods,
      serviceTab: "0",
    },
    {
      date: "Dec 2018",
      event: (
        <span className="underline text-newPrimary">
          Agreement on Trade in Services
        </span>
      ),
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "3",
    },
    {
      date: "Jun 2017",
      event: (
        <span className="underline text-newPrimary">
          Agreement on Economic and Technical Cooperation
        </span>
      ),
      scroll_id:
        CEPAAgreements_ids.agreement_on_economic_and_technical_cooperation,
      serviceTab: "0",
    },
    {
      date: "Nov 2015",
      event: "Agreement on Trade in Services",
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "0",
    },
  ];

  const timeLineDataCollapsed: Array<{
    date: string;
    event: string;
    scroll_id: CEPAAgreements_ids;
  }> = [
    {
      date: "Dec 2014",
      event:
        "Agreement between the Mainland and Hong Kong on Achieving Basic Liberalisation of Trade in Services in Guangdong",
      scroll_id: CEPAAgreements_ids.mainland_and_hong_kong_agreement,
    },

    {
      date: "Aug 2013",
      event: "Supplement X to CEPA",
      scroll_id: CEPAAgreements_ids.supplement_X_to_CEPA,
    },
    {
      date: "Jun 2012",
      event: "Supplement IX to CEPA",
      scroll_id: CEPAAgreements_ids.supplement_IX_to_CEPA,
    },
    {
      date: "Dec 2011",
      event: "Supplement VIII to CEPA",
      scroll_id: CEPAAgreements_ids.supplement_VIII_to_CEPA,
    },
    {
      date: "May 2010",
      event: "Supplement VII to CEPA",
      scroll_id: CEPAAgreements_ids.supplement_VII_to_CEPA,
    },
  ];
  return (
    <div className="w-full">
      <SquareTitle title="Overview on CEPA" />

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
                <div
                  className={`${
                    timeLineData.length - 1 === index && timelineCollapsed
                      ? "h-[36px]"
                      : "h-full"
                  } w-[2px] bg-newPrimary absolute top-[17px]`}
                />
              </div>
              <div
                className={`text-highlight-s grid grid-cols-[auto,auto] gap-[24px] 
              p-[16px] border-[1px] border-[#E0E0E0] justify-start content-center 
              mb-[16px] w-full cursor-pointer ${
                index === 0 ? "bg-newPrimary text-white" : ""
              }`}
                onClick={() => {
                  navigate(
                    `/support?section=${navItemEnum.entering_into_the_mainland_market}&scroll_id=${item.scroll_id}&serviceTab=${item.serviceTab}#1`
                  );
                }}
              >
                <p>{item.date}</p>
                <div>{item.event}</div>
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
                  <div
                    className={`${
                      timeLineDataCollapsed.length - 1 === index
                        ? "h-[0px]"
                        : "h-full"
                    } w-[2px] bg-newPrimary absolute top-[17px]`}
                  />
                </div>
                <div
                  className="text-highlight-s grid grid-cols-[auto,auto] gap-[24px] 
              p-[16px] border-[1px] border-[#E0E0E0] justify-start content-center 
              mb-[16px] w-full cursor-pointer"
                  onClick={() => {
                    navigate(
                      `/support?section=${navItemEnum.entering_into_the_mainland_market}&scroll_id=${item.scroll_id}#1`
                    );
                  }}
                >
                  <p>{item.date}</p>
                  <p className="underline text-newPrimary">{item.event}</p>
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
                transform: !timelineCollapsed
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
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveFAQType(btn);
                }}
              >
                <p className="text-highlight-xs">
                  {btn.length > 48 && !isPC ? btn.slice(0, 48) + "..." : btn}
                </p>
              </button>
            );
          })}
        </div>
        <div className="mt-[16px] text-body-m">{faqMap[activeFAQType]}</div>
      </div>
    </div>
  );
};
