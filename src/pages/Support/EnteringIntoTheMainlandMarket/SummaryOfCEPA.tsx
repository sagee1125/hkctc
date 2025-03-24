import React, { useState } from "react";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SummaryTable } from "../TCJS";
import { SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    title: "Summary of CEPA Clauses Relating to Testing and Certification",
    table_heads: [
      "CEPA Agreement",
      "Clauses Relating to Testing and Certification",
    ],
    pre: "Previous Commitments",
  },

  cn: {
    title: `CEPA下檢測認證相關條文摘要`,
    table_heads: ["CEPA協議", "檢測認證相關條文"],
    pre: "以往的承諾",
  },
};

export const SummaryOfCEPA: React.FC = () => {
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const { title, table_heads, pre } = page_text;

  const [expanded, setExpanded] = useState<boolean>(false);

  const sumTableRows = [
    [
      <p className="text-body-m">
        Agreement on Trade in Services (amended in Nov 2019 and Oct 2024
        respectively)
      </p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#0");
          }}
        >
          Liberalisation of Trade in Services
        </p>
        <br />
        <p className="text-body-m">Implementation Guides on -</p>
        <br />
        <ul>
          <li className="text-body-m">
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_Implementation_Guide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Measure on the mutual recognition arrangement of certification and
              relevant testing business among Guangdong, Hong Kong and Macao in
              the China (Guangdong) Pilot Free Trade Zone
            </a>
          </li>
        </ul>
        <p className="italic mt-[24px]" style={{ fontSize: "14px" }}>
          (promulgated in Sep 2017)
        </p>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <>
            <br />
            <ul>
              <li className="text-body-m">
                <a
                  href="https://www.hkctc.gov.hk/en/doc/201902_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  Measure on China Compulsory Certification (CCC) product
                  testing
                </a>
              </li>
            </ul>
            <p className="italic mt-[24px]" style={{ fontSize: "14px" }}>
              (promulgated in Feb 2019)
            </p>
            <ul>
              <br />
              <li className="text-body-m">
                <a
                  href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  Further liberalisation measures on CCC product testing,
                  factory inspection and selection of post-certification test
                  samples Measure on China Compulsory Certification (CCC)
                  product testing
                </a>
              </li>
            </ul>
            <p className="italic mt-[24px]" style={{ fontSize: "14px" }}>
              (promulgated in May 2020)
            </p>
            <ul>
              <br />
              <li className="text-body-m">
                Further liberalisation measures on CCC factory inspection and
                selection of post-certification test samples
              </li>
            </ul>
            <p className="text-body-m italic">(To be promulgated)</p>
          </>
        </Collapse>
        <div className="w-full flex justify-center text-newPrimary mt-[16px]">
          <button
            className="text-highlight-s"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {!expanded ? "Show All" : "Hide"}
            <ExpandMoreIcon
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
      </>,
    ],
    [
      <p className="text-body-m">Agreement on Trade in Goods</p>,
      <p
        className="text-body-m underline text-[#233F55] cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#1");
        }}
      >
        Article 58, 59, 68
      </p>,
    ],
    [
      <p className="text-body-m">
        Agreement on Economic and Technical Cooperation
      </p>,
      <p
        className="text-body-m underline text-[#233F55] cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#2");
        }}
      >
        Article 23(4), 23(6), 23(7), 23(8)
      </p>,
    ],
  ];

  const sumTableRowsCN = [
    [
      <p className="text-body-m">
        《服務貿易協議》
        <br /> （已分別於2019年11月及2024年10月進行修訂）
      </p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#0");
          }}
        >
          服務貿易開放措施
        </p>
        <br />
        <p className="text-body-m">實施指南</p>
        <br />
        <ul>
          <li className="text-body-m">
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_Implementation_Guide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              關於在中國（廣東）自由貿易試驗區內試行粵港澳認證及相關檢測業務互認制度的措施
            </a>
          </li>
        </ul>
        <p className="italic mt-[24px]" style={{ fontSize: "14px" }}>
          （2017年9月公布）
        </p>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <>
            <br />
            <ul>
              <li className="text-body-m">
                <a
                  href="https://www.hkctc.gov.hk/en/doc/201902_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  關於強制性產品認證（CCC）產品檢測的措施
                </a>
              </li>
            </ul>
            <p className="italic mt-[24px]" style={{ fontSize: "14px" }}>
              （2019年2月公布）
            </p>
            <ul>
              <br />
              <li className="text-body-m">
                <a
                  href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  關於CCC產品檢測、工廠檢查及獲證後選取測試樣本的進一步開放措施
                </a>
              </li>
            </ul>
            <p className="italic mt-[24px]" style={{ fontSize: "14px" }}>
              （2020年5月公布）
            </p>
            <ul>
              <br />
              <li className="text-body-m">
                關於CCC產品工廠檢查及獲證後選取測試樣本的進一步開放措施
              </li>
            </ul>
            <p className="text-body-m italic">（待公佈）</p>
          </>
        </Collapse>
        <div className="w-full flex justify-center text-newPrimary mt-[16px]">
          <button
            className="text-highlight-s"
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {!expanded ? "Show All" : "Hide"}
            <ExpandMoreIcon
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
      </>,
    ],
    [
      <p className="text-body-m">《貨物貿易協議》</p>,
      <p
        className="text-body-m underline text-[#233F55] cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#1");
        }}
      >
        第五十八條
        <br />
        第五十九條
        <br />
        第六十八條
      </p>,
    ],
    [
      <p className="text-body-m">《經濟技術合作協議》</p>,
      <p
        className="text-body-m underline text-[#233F55] cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#2");
        }}
      >
        第二十三（四）條
        <br />
        第二十三（六）條
        <br />
        第二十三（七）條
        <br />
        第二十三（八）條
        <br />
      </p>,
    ],
  ];

  const preTableRows = [
    [
      <p className="text-body-m">
        Agreement between the Mainland and Hong Kong on Achieving Basic
        Liberalisation of Trade in Services in Guangdong
      </p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#3");
          }}
        >
          Liberalisation of Trade in Services
        </p>
        <br />
        <p>
          <a
            className="text-[#00E] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Implementation Guide
          </a>
        </p>
        <br />
        <p className="italic" style={{ fontSize: "14px" }}>
          (promulgated in Apr 2015)
        </p>
      </>,
    ],
    [
      <p className="text-body-m">Supplement X to CEPA</p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#4");
          }}
        >
          Liberalisation of Trade in Services and Trade and Investment
          Facilitation
        </p>
        <br />
        <p className="text-body-m">Implementation Guides on -</p>
        <br />
        <ul>
          <li className="text-body-m">
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Measure on the movement of natural persons
            </a>
          </li>
          <br />
          <li className="text-body-m">
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Other measures
            </a>
          </li>
        </ul>
        <br />
        <p className="italic" style={{ fontSize: "14px" }}>
          (promulgated in Jul 2015)
        </p>
      </>,
    ],
    [
      <p className="text-body-m">Supplement IX to CEPA</p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#5");
          }}
        >
          Liberalisation of Trade in Services
        </p>
        <br />
        <p>
          <a
            className="text-[#00E] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Implementation Guide
          </a>
        </p>

        <br />
        <p className="italic" style={{ fontSize: "14px" }}>
          (promulgated in Jan 2013)
        </p>
      </>,
    ],
    [
      <p className="text-body-m">Supplement VIII to CEPA</p>,
      <p
        className="text-[#233F55] text-body-m underline cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#6");
        }}
      >
        Liberalisation of Trade in Services
      </p>,
    ],
    [
      <p className="text-body-m">Supplement VII to CEPA</p>,
      <p
        className="text-[#233F55] text-body-m underline cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#7");
        }}
      >
        Liberalisation of Trade in Services and Trade and Investment
        Facilitation
      </p>,
    ],
  ];

  const preTableRowsCN = [
    [
      <p className="text-body-m">
        《關於內地在廣東與香港基本實現服務貿易自由化的協議》
      </p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#3");
          }}
        >
          服務貿易開放措施
        </p>
        <br />
        <p>
          <a
            className="text-[#00E] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            實施指南
          </a>
        </p>
        <br />
        <p className="italic" style={{ fontSize: "14px" }}>
          （2015年4月公布）
        </p>
      </>,
    ],
    [
      <p className="text-body-m">《CEPA補充協議十》</p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#4");
          }}
        >
          服務貿易開放措施和貿易投資便利化
        </p>
        <br />
        <p className="text-body-m">實施指南</p>
        <br />
        <ul>
          <li className="text-body-m">
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              關於自然人流動的措施
            </a>
          </li>
          <br />
          <li className="text-body-m">
            <a
              href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              其他措施
            </a>
          </li>
        </ul>
        <br />
        <p className="italic" style={{ fontSize: "14px" }}>
          （2015年7月公布）
        </p>
      </>,
    ],
    [
      <p className="text-body-m">《CEPA補充協議九》</p>,
      <>
        <p
          className="text-[#233F55] text-body-m underline cursor-pointer"
          onClick={() => {
            window.open("/support/agreement-clause#5");
          }}
        >
          服務貿易開放措施
        </p>
        <br />
        <p>
          <a
            className="text-[#00E] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            實施指南
          </a>
        </p>

        <br />
        <p className="italic" style={{ fontSize: "14px" }}>
          （2013年1月公布）
        </p>
      </>,
    ],
    [
      <p className="text-body-m">《CEPA補充協議八》</p>,
      <p
        className="text-[#233F55] text-body-m underline cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#6");
        }}
      >
        服務貿易開放措施
      </p>,
    ],
    [
      <p className="text-body-m">《CEPA補充協議七》</p>,
      <p
        className="text-[#233F55] text-body-m underline cursor-pointer"
        onClick={() => {
          window.open("/support/agreement-clause#7");
        }}
      >
        服務貿易開放措施和貿易投資便利化
      </p>,
    ],
  ];
  return (
    <div className="w-full">
      <SquareTitle title={title} />
      <div className="mt-[24px]">
        <SummaryTable
          tableHeads={table_heads}
          tableRows={isEn ? sumTableRows : sumTableRowsCN}
        />
      </div>

      <p className="my-[24px] text-heading-l">{pre}</p>
      <SummaryTable
        tableHeads={table_heads}
        tableRows={isEn ? preTableRows : preTableRowsCN}
      />
    </div>
  );
};
