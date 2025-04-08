import React, { useState } from "react";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { CEPAAgreements_ids } from "./CEPAAgreements";
import { navItemEnum } from "../../../const";
import { useNavigate } from "react-router-dom";
import { Language, useSettings } from "../../../context";

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
              aria-label="link"
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
              aria-label="link"
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
              aria-label="link"
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

  const agreementQuestionCN: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question:
        "香港檢測機構參與有關中國強制性產品認證（“CCC”）目錄產品的檢測工作，申請程序為何?",
      answer: (
        <>
          <p>
            《服務貿易協議》中與檢測認證相關的條款於二○一九年十一月獲修訂。根據二○二○年五月公布的相關
            <a
              aria-label="link"
              href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              實施指南
            </a>
            ，擬從事CCC檢測工作的香港檢測機構必須取得香港認可處實驗所認可計劃的認可，以確認該實驗所具備進行CCC產品檢測的能力。該等檢測機構亦須與內地指定認證機構簽訂合作協議。有關對檢測機構的資質要求及申請與內地指定機構合作的程序，請見
            <a
              aria-label="link"
              href="https://www.itc.gov.hk/en/quality/hkas/accreditation/ccc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              香港認可處網頁
            </a>
            。
          </p>
        </>
      ),
    },
    {
      question:
        "有關二○二五年二月公布的實施指南中CCC工廠檢查員的部份，如果該等香港認證機構的工廠檢查員，日後轉換了所屬的香港認證機構，該名工廠檢查員是否需要重新按照實施指南內列明的程序，再次向中國認證認可協會（“CCAA”）提出申請及／或通過相關訓練和考試？",
      answer: (
        <>
          <p>
            目前已經在「CCAA認證人員註冊與管理系統」中註冊過的CCC工廠檢查員，在轉換機構時，只需要在該系統中使用「轉換機構申請」功能，按照系統提示程序進行轉換機構即可。該過程不再需要向CCAA進行書面申請，也不需要進行培訓考試（「CCAA認證人員註冊與管理系統」請見CCAA的
            <a
              aria-label="link"
              href="https://service.ccaa.org.cn/#/index"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              網頁
            </a>
            ）。
          </p>
        </>
      ),
    },
  ];

  const { language, getSingleNode, getSingleText } = useSettings();

  const questions =
    language === Language.EN ? agreementQuestion : agreementQuestionCN;
  return (
    <div className="w-full flex flex-col gap-[8px]">
      {questions.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${getSingleText(item.question, item.question)}`}
          details={
            <div className="text-body-m">
              {getSingleNode(item.answer, item.answer)}
            </div>
          }
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
                aria-label="link"
                href="https://www.cnca.gov.cn/zwxx/gg/2015/art/2023/art_bf698bdf2523441cb48b910caf35ca54.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                CNCA PN No. 34 of 2015 —
                《國家認監委關於發佈進一步深化強制性認證實施機構指定審批制度改革工作舉措的公告》
              </a>
              ;
            </li>
            <li>
              <a
                aria-label="link"
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
                aria-label="link"
                href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/tzgg/art/2017/art_6aaa2ee81e2946208af05ef0dcce5ca6.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                CNCA PN No. 28 of 2017 —
                《國家認監委關於進一步擴大強制性產品認證實驗室日常指定實施範圍的公告》
              </a>
              .
            </li>
          </ul>
          <p>Enquiries should be addressed to CNCA -</p>
          <br />
          <p>Electrical and Electronic Products</p>
          <p>Contact person: Mr. QIU Lei</p>
          <p>Phone number: +86-10-82262779</p>
          <p>
            Email address:&nbsp;
            <a
              aria-label="link"
              href="mailto:qiul@cnca.gov.cn"
              className="underline text-[#00E]"
            >
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
              aria-label="link"
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
              aria-label="link"
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
              aria-label="link"
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
              aria-label="link"
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
            <a
              aria-label="link"
              href="mailto:qiul@cnca.gov.cn"
              className="underline text-[#00E]"
            >
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
              aria-label="link"
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

  const agreementQuestionCN: Array<{
    question: string;
    answer: React.ReactNode;
  }> = [
    {
      question: "香港企業在內地開設的檢測機構可以成為CCC制度的指定實驗室嗎？",
      answer: (
        <>
          <p>
            根據國家認證認可監督管理委員會（“認監委”）2015年第34號公告、2017年第1號公告和第28號公告，符合上述通告指定的條件和要求的實驗室（包括香港企業在內地開設的檢測機構），可隨時向認監委提交承擔CCC相關檢測任務的申請。
          </p>
          <br />
          <p>
            至於其他尚未包含在上述通告的產品領域，有意願承擔CCC相關檢測任務的實驗室，可於每年4月1日前向認監委提交書面需求。經評估後，認監委發佈指定計劃公告，有興趣的機構可以按公告要求申請。
          </p>
          <br />
          <p>上述通告的詳情請見以下網頁：</p>
          <br />
          <ul>
            <li>
              <a
                aria-label="link"
                href="https://www.cnca.gov.cn/zwxx/gg/2015/art/2023/art_bf698bdf2523441cb48b910caf35ca54.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                認監委2015年第34號公告—《國家認監委關於發佈進一步深化強制性認證實施機構指定審批制度改革工作舉措的公告》
              </a>
              ；
            </li>
            <li>
              <a
                aria-label="link"
                href="https://www.cnca.gov.cn/zwxx/gg/2017/art/2023/art_246e083a811b481ba1f24f3770944aab.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                認監委2017年第1號公告—《國家認監委關於進一步深化汽車強制性產品認證改革的公告》
              </a>
              ；及
            </li>
            <li>
              <a
                aria-label="link"
                href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/tzgg/art/2017/art_6aaa2ee81e2946208af05ef0dcce5ca6.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                認監委2017年第28號公告—《國家認監委關於進一步擴大強制性產品認證實驗室日常指定實施範圍的公告》
              </a>
              。
            </li>
          </ul>
          <br />
          <p>如有進一步查詢，請聯絡：</p>
          <br />
          <p>國家市場監督管理總局 認證監督管理司</p>
          <p>（中國國家認證認可監督管理委員會）</p>
          <br />
          <p className="underline">電子電器產品</p>
          <p>邱磊先生</p>
          <p>電話：&nbsp;+86-10-82262779</p>
          <p>
            電郵：&nbsp;
            <a
              aria-label="link"
              href="mailto:qiul@cnca.gov.cn"
              className="underline text-[#00E]"
            >
              qiul@cnca.gov.cn
            </a>
          </p>
          <br />
          <p className="underline">非電子電器產品</p>
          <p>關鈞文先生</p>
          <p>電話：&nbsp;+86-10-82262674</p>
          <p>
            電郵：&nbsp;
            <a
              aria-label="link"
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
        "《經濟技術合作協議》第二十三（八）條「研究符合條件的香港企業在內地開設的認證機構，申請成為中國強制性產品認證（CCC）制度的指定認證機構」的實施辦法為何？",
      answer: (
        <>
          <p>
            如其他在內地合法設立的認證機構一樣（包括國有、民營、港澳資、外資機構），符合條件的香港企業在內地開設的認證機構，可根據內地現有的申請制度，直接認監委提出申請。本條文不另設實施指南。
          </p>
          <br />
          <p>
            相關申請制度、條件和程序，已載於國家市場監督管理總局（市場監管總局）的網頁，詳見市場監管總局的
            <a
              aria-label="link"
              className="underline text-[#00E]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.samr.gov.cn/fw/wsbs/rzrkjyjc/rzjgzd/"
            >
              《從事強制性認證以及相關活動的認證機構、檢查機構及實驗室指定》
            </a>
            網頁。申請者亦可參考認監委的
            <a
              aria-label="link"
              href="https://www.cnca.gov.cn/hlwfw/ywzl/qzxcprz/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              「強制性產品認證專欄」
            </a>
            。
          </p>
        </>
      ),
    },
    {
      question: "符合條件的香港企業在內地開設的認證機構何時可向認監委申請？",
      answer: (
        <>
          <p>
            根據原國家質量監督檢驗檢疫總局發佈的《強制性產品認證機構、檢查機構和實驗室管理辦法》第十二條，認監委按強制性產品認證制度的具體要求和實施需要，提出指定計劃，並以公告形式在認監委的
            <a
              aria-label="link"
              href="https://www.cnca.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              官方網頁
            </a>
            及微信公眾號（微信帳號：cnca_2015）對外發佈。
          </p>
          <br />
          <p>
            一般而言，認證機構可在每年4月1日前就有興趣於何等範疇成為CCC制度的指定認證機構向認監委表達意向。經評估後，認監委發佈指定計劃公告，有興趣的機構可以按公告要求申請。
          </p>
          <br />
          <p>
            符合條件的香港企業在內地開設的認證機構可在指定計劃規定的時限內向認監委提出申請。
          </p>
          <br />
          <p>如有進一步查詢，請聯絡：</p>
          <br />
          <p>國家市場監督管理總局 認證監督管理司</p>
          <p>（中國國家認證認可監督管理委員會）</p>

          <br />
          <p className="underline">電子電器產品</p>
          <p>邱磊先生</p>

          <p>
            電郵：&nbsp;
            <a
              aria-label="link"
              href="mailto:qiul@cnca.gov.cn"
              className="underline text-[#00E]"
            >
              qiul@cnca.gov.cn
            </a>
          </p>
          <br />
          <p className="underline">非電子電器產品</p>
          <p>關鈞文先生</p>
          <p>電話：&nbsp;+86-10-82262674</p>
          <p>
            電郵：&nbsp;
            <a
              aria-label="link"
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

  const { language, getSingleNode, getSingleText } = useSettings();

  const questions =
    language === Language.EN ? agreementQuestion : agreementQuestionCN;
  return (
    <div className="w-full flex flex-col gap-[8px]">
      {questions.map((item, index) => (
        <Accordion
          key={index}
          title={`${index + 1}. ${getSingleText(item.question, item.question)}`}
          details={
            <div className="text-body-m">
              {getSingleNode(item.answer, item.answer)}
            </div>
          }
        />
      ))}
    </div>
  );
};

const faqMap: Record<
  string,
  {
    label: string;
    labelCN: string;
    content: React.ReactNode;
  }
> = {
  tradeInServices: {
    label: "Agreement on Trade in Services",
    labelCN: "《服務貿易協議》",
    content: <Agreement />,
  },
  CCC: {
    label:
      "Hong Kong enterprise-run organisations in the Mainland designated under the China Compulsory Certification (CCC) system",
    labelCN:
      "香港企業在內地開設的機構成為中國強制性產品認證（“CCC”）制度的指定機構",
    content: <EnterpriseRun />,
  },
};

const multilingual = {
  en: {
    title: `Overview on CEPA`,
    since_the_signing: `Since the signing of Supplement VII to the Mainland and Hong Kong Closer Economic Partnership Arrangement (CEPA), the Mainland has been gradually opening up its testing and certification market to Hong Kong.`,
    time_line_title: "CEPA Agreements Timeline",
    show_all: "Show All",
    hide: "Hide",
    faq: "Frequently Asked Questions",
    faq_tabs: [
      "Agreement on Trade in Services",
      "Hong Kong enterprise-run organisations in the Mainland designated under the China Compulsory Certification (CCC) system",
    ],
  },

  cn: {
    title: `CEPA概覽`,
    since_the_signing: `自簽署《內地與香港關於建立更緊密經貿關係的安排（CEPA）補充協議七》起，中國內地逐步向香港開放其檢測和認證市場。`,
    time_line_title: "CEPA協議簽訂時間",
    show_all: "顯示全部",
    hide: "隱藏",
    faq: "常見問題",
    faq_tabs: [
      "《服務貿易協議》",
      "香港企業在內地開設的機構成為中國強制性產品認證（“CCC”）制度的指定機構",
    ],
  },
};

export const OverviewIOnCEPA: React.FC = () => {
  const { isPC, language, getPageText, getSingleText, getSingleNode } =
    useSettings();
  const page_text = getPageText(multilingual);
  const [activeFAQType, setActiveFAQType] = useState<string>(
    Object.keys(faqMap)[0]
  );
  const [timelineCollapsed, setTimelineCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();

  const timeLineData: Array<{
    date: string;
    event: React.ReactNode;
    dateCN: string;
    eventCN: React.ReactNode;
    scroll_id: CEPAAgreements_ids;
    serviceTab: string;
  }> = [
    {
      date: "Oct 2024",
      dateCN: "2024年10月",
      event:
        "Second Agreement Concerning Amendment to the Agreement on Trade in Services",
      eventCN: `修訂《服務貿易協議》的協議二`,
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "0",
    },
    {
      date: "Nov 2019",
      dateCN: "2019年11月",
      event: (
        <>
          Agreement concerning Amendment to the&nbsp;
          <span className="underline text-newPrimary">
            Agreement on Trade in Services
          </span>
        </>
      ),
      eventCN: (
        <>
          修訂
          <span className="underline text-newPrimary">《服務貿易協議》</span>
          的協議
        </>
      ),
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "2",
    },
    {
      date: "Dec 2018",
      dateCN: "2018年12月",
      event: (
        <span className="underline text-newPrimary">
          Agreement on Trade in Goods
        </span>
      ),
      eventCN: (
        <span className="underline text-newPrimary">《貨物貿易協議》</span>
      ),
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_goods,
      serviceTab: "0",
    },
    {
      date: "Jun 2017",
      dateCN: "2017年6月",
      event: (
        <span className="underline text-newPrimary">
          Agreement on Economic and Technical Cooperation
        </span>
      ),
      eventCN: (
        <span className="underline text-newPrimary">《經濟技術合作協議》</span>
      ),
      scroll_id:
        CEPAAgreements_ids.agreement_on_economic_and_technical_cooperation,
      serviceTab: "0",
    },
    {
      date: "Nov 2015",
      dateCN: "2015年11月",
      event: "Agreement on Trade in Services",
      eventCN: (
        <>
          <span className="underline text-newPrimary">《服務貿易協議》</span>
          （曾於2018年12月透過換文修訂）
        </>
      ),
      scroll_id: CEPAAgreements_ids.agreement_on_trade_in_services,
      serviceTab: "0",
    },
  ];

  const timeLineDataCollapsed: Array<{
    date: string;
    dateCN: string;
    event: string;
    eventCN: string;
    scroll_id: CEPAAgreements_ids;
  }> = [
    {
      date: "Dec 2014",
      event:
        "Agreement between the Mainland and Hong Kong on Achieving Basic Liberalisation of Trade in Services in Guangdong",
      dateCN: "2024年12月",
      eventCN: "《關於內地在廣東與香港基本實現服務貿易自由化的協議》",
      scroll_id: CEPAAgreements_ids.mainland_and_hong_kong_agreement,
    },
    {
      date: "Aug 2013",
      event: "Supplement X to CEPA",
      dateCN: "2013年8月",
      eventCN: "《CEPA補充協議十》",
      scroll_id: CEPAAgreements_ids.supplement_X_to_CEPA,
    },
    {
      date: "Jun 2012",
      event: "Supplement IX to CEPA",
      dateCN: "2012年6月",
      eventCN: "《CEPA補充協議九》",
      scroll_id: CEPAAgreements_ids.supplement_IX_to_CEPA,
    },
    {
      date: "Dec 2011",
      event: "Supplement VIII to CEPA",
      dateCN: "2011年12月",
      eventCN: "《CEPA補充協議八》",
      scroll_id: CEPAAgreements_ids.supplement_VIII_to_CEPA,
    },
    {
      date: "May 2010",
      event: "Supplement VII to CEPA",
      dateCN: "2010年5月",
      eventCN: "《CEPA補充協議七》",
      scroll_id: CEPAAgreements_ids.supplement_VII_to_CEPA,
    },
  ];
  const { title, since_the_signing, time_line_title, show_all, hide, faq } =
    page_text;
  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] text-body-m mt-[24px]">
        {since_the_signing as string}
      </div>
      <p className="text-heading-l my-[24px]">{time_line_title as string}</p>
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
                tabIndex={0}
                role="button"
                onClick={() => {
                  navigate(
                    `/support?section=${navItemEnum.entering_into_the_mainland_market}&scroll_id=${item.scroll_id}&serviceTab=${item.serviceTab}#1`
                  );
                }}
              >
                <p>{getSingleText(item.date, item.dateCN)}</p>
                <div>{getSingleNode(item.event, item.eventCN)}</div>
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
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    navigate(
                      `/support?section=${navItemEnum.entering_into_the_mainland_market}&scroll_id=${item.scroll_id}#1`
                    );
                  }}
                >
                  <p>{getSingleText(item.date, item.dateCN)}</p>
                  <p className="underline text-newPrimary">
                    {getSingleText(item.event, item.eventCN)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Collapse>
        <div className="w-full flex justify-center text-newPrimary mt-[16px]">
          <button
            tabIndex={0}
            role="button"
            className="text-highlight-m"
            onClick={() => {
              setTimelineCollapsed(!timelineCollapsed);
            }}
          >
            {timelineCollapsed ? (show_all as string) : (hide as string)}
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
      <p className="text-heading-l">{faq as string}</p>

      <div>
        <div className="flex flex-wrap gap-[8px] my-[24px]">
          {Object.keys(faqMap).map((btn, index) => {
            const isActivated = btn === activeFAQType;

            const label = getSingleText(faqMap[btn].label, faqMap[btn].labelCN);

            return (
              <button
                tabIndex={0}
                role="button"
                key={index}
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveFAQType(btn);
                }}
              >
                <p className="text-highlight-xs">
                  {label.length > 48 && !isPC
                    ? label.slice(0, 48) + "..."
                    : label}
                </p>
              </button>
            );
          })}
        </div>
        <div className="mt-[16px] text-body-m">
          {faqMap[activeFAQType].content}
        </div>
      </div>
    </div>
  );
};
