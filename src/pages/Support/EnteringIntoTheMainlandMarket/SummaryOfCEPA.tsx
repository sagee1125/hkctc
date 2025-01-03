import React, { useState } from "react";
import { SummaryTable } from "../TCJS";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const SummaryOfCEPA: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const tableHeads = [
    "CEPA Agreement",
    "Clauses Relating to Testing and Certification",
  ];
  const sumTableRows = [
    [
      <p className="text-body-m">
        Agreement on Trade in Services (amended in Nov 2019 and Oct 2024
        respectively)
      </p>,
      <>
        <p>
          <a
            className="text-[#233F55] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/cepa/trade_clause.html#b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liberalisation of Trade in Services
          </a>
        </p>
        <br />
        <p className="text-body-m">Implementation Guides on -</p>
        <br />
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
        <p>(promulgated in Sep 2017)</p>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <>
            <br />
            <li className="text-body-m">
              <a
                href="https://www.hkctc.gov.hk/en/doc/201902_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                Measure on China Compulsory Certification (CCC) product testing
              </a>
            </li>
            <p>(promulgated in Feb 2019)</p>
            <br />
            <li className="text-body-m">
              <a
                href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                Further liberalisation measures on CCC product testing, factory
                inspection and selection of post-certification test samples
                Measure on China Compulsory Certification (CCC) product testing
              </a>
            </li>
            <p>(promulgated in May 2020)</p>
            <br />
            <li className="text-body-m">
              Further liberalisation measures on CCC factory inspection and
              selection of post-certification test samples
            </li>
            <p className="text-body-m">(To be promulgated)</p>
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
      <p className="text-body-m underline text-[#233F55]">
        Article 58, 59, 68
      </p>,
    ],
    [
      <p className="text-body-m">
        Agreement on Economic and Technical Cooperation
      </p>,
      <p className="text-body-m underline text-[#233F55]">
        Article 23(4), 23(6), 23(7), 23(8)
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
        <p>
          <a
            className="text-[#233F55] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/cepa/trade_clause.html#b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liberalisation of Trade in Services
          </a>
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
      </>,
    ],
    [
      <p className="text-body-m">Supplement X to CEPA</p>,
      <>
        <p>
          <a
            className="text-[#233F55] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/cepa/x_clause.html#a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liberalisation of Trade in Services
          </a>
          &nbsp;and&nbsp;
          <a
            className="text-[#233F55] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/cepa/x_clause.html#b"
            target="_blank"
            rel="noopener noreferrer"
          >
            and Trade and Investment Facilitation
          </a>
        </p>
        <br />
        <p className="text-body-m">Implementation Guides on -</p>
        <br />
        <li className="text-body-m">
          <a
            href="chrome-extension://kdpelmjpfafjppnhbloffcjpeomlnpah/https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Other measures
          </a>
        </li>
      </>,
      ,
    ],
    [
      <p className="text-body-m">Supplement IX to CEPA</p>,
      <>
        <p>
          <a
            className="text-[#233F55] text-body-m underline"
            href="https://www.hkctc.gov.hk/en/cepa/trade_clause.html#b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liberalisation of Trade in Services
          </a>
        </p>
        <br />
        <p>
          <a
            className="text-[#00E] text-body-m underline"
            href="chrome-extension://kdpelmjpfafjppnhbloffcjpeomlnpah/https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Implementation Guide
          </a>
        </p>
      </>,
    ],
    [
      <p className="text-body-m">Supplement VIII to CEPA</p>,
      <a
        className="text-body-m underline text-[#233F55]"
        href="https://www.hkctc.gov.hk/en/cepa/trade_clause.html#b"
        target="_blank"
        rel="noopener noreferrer"
      >
        Liberalisation of Trade in Services
      </a>,
    ],
    [
      <p className="text-body-m">Supplement VII to CEPA</p>,
      <a
        className="text-body-m underline text-[#233F55]"
        href="https://www.hkctc.gov.hk/en/cepa/trade_clause.html#b"
        target="_blank"
        rel="noopener noreferrer"
      >
        Liberalisation of Trade in Services and Trade and Investment
        Facilitation
      </a>,
    ],
  ];
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[12px] items-center">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">
          Summary of CEPA Clauses Relating to Testing and Certification
        </p>
      </div>
      <div className="mt-[24px]">
        <SummaryTable tableHeads={tableHeads} tableRows={sumTableRows} />
      </div>

      <p className="my-[24px] text-heading-l">Previous Commitments</p>
      <SummaryTable tableHeads={tableHeads} tableRows={preTableRows} />
    </div>
  );
};
