import React, { useState } from "react";
import { ITF, PASS, TID, TCJS } from "./SchemesSummary";
import {
  TVP,
  ESS,
  ITSP,
  PRP,
  ResearchDevelopmentCash,
  GSP,
  NITTP,
} from "./InnovationAndTechnologyFund";
import { Accordion } from "../../../components";
import {
  activatedButtonStyle,
  normalButtonStyle,
} from "../../EventsLanding/EventsLandingContent";
import {
  BUD,
  SMEExportMarketingFund,
  SMELoanGuaranteeScheme,
  TSF,
} from "./TIDFundingSchemes";

const schemesTypeMap: Record<string, React.ReactNode> = {
  "Innovation and Technology Fund (ITF)": <ITF />,
  "Professional Services Advancement Support Scheme (PASS)": <PASS />,
  "TID's Funding Schemes": <TID />,
  "Testing and Certification Sector Job Creation Scheme (TCJS)": <TCJS />,
};

const itfFundingMap: Record<string, React.ReactNode> = {
  "Technology Voucher Programme (TVP)": <TVP />,
  "Enterprise Support Scheme (ESS)": <ESS />,
  "Innovation and Technology Support Programme (ITSP)": <ITSP />,
  "Partnership Research Programme (PRP)": <PRP />,
  "Research and Development Cash Rebate Scheme": <ResearchDevelopmentCash />,
  "General Support Programme (GSP)": <GSP />,
  "New Industrialisation and Technology Training Programme (NITTP)": <NITTP />,
};

const tidMap: Record<string, React.ReactNode> = {
  "BUD Fund (Enterprise Support Programme)": <BUD />,
  "Trade and Industrial Organisation Support Fund (TSF)": <TSF />,
  "SME Export Marketing Fund": <SMEExportMarketingFund />,
  "SME Loan Guarantee Scheme": <SMELoanGuaranteeScheme />,
};

export const FundingSchemes: React.FC = () => {
  const [activeSchemesType, setActiveSchemesType] = useState<string>(
    Object.keys(schemesTypeMap)[0]
  );

  const [activeIFTFunding, setActiveIFTFunding] = useState<string>(
    Object.keys(itfFundingMap)[0]
  );

  const [activeTIDFunding, setActiveTIDFunding] = useState<string>(
    Object.keys(tidMap)[0]
  );
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[12px] items-center">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">Funding Schemes</p>
      </div>
      <div className="mt-[24px]">
        <Accordion
          title={"Schemes Summary"}
          details={
            <div>
              <div className="flex flex-wrap gap-[8px]">
                {Object.keys(schemesTypeMap).map((btn, index) => {
                  const isActivated = btn === activeSchemesType;
                  return (
                    <button
                      key={index}
                      className="p-2 transition-all duration-800 ease-in-out"
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveSchemesType(btn);
                      }}
                    >
                      <p className="px-[12px] text-highlight-xs">{btn}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-[16px]">
                {schemesTypeMap[activeSchemesType]}
              </div>
            </div>
          }
        />
      </div>
      <div className="mt-[24px]">
        <Accordion
          title={"Innovation and Technology Fund (ITF)"}
          details={
            <div>
              <p className="text-body-m">
                ITF aims to increase the added value, productivity and
                competitiveness of Hong Kong's economic activities. The
                Government hopes that, through the ITF, Hong Kong companies
                could be encouraged and assisted to upgrade their technological
                level and introduce innovative ideas to their business.
              </p>
              <br />
              <p>
                ITF is administered by Innovation and Technology Commission
                (ITC) and is open to application from all sectors. Apart from
                funding research and development (R&D) activities, ITF also
                supports non-R&D projects like conferences, surveys, training
                and the like that promote innovation and technology.
              </p>
              <div className="flex flex-wrap gap-[8px] my-[16px]">
                {Object.keys(itfFundingMap).map((btn, index) => {
                  const isActivated = btn === activeIFTFunding;
                  return (
                    <button
                      key={index}
                      className="p-2 transition-all duration-800 ease-in-out"
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveIFTFunding(btn);
                      }}
                    >
                      <p className="px-[12px] text-highlight-xs">{btn}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-[16px]">{itfFundingMap[activeIFTFunding]}</div>
            </div>
          }
        />
      </div>

      <div className="mt-[24px]">
        <Accordion
          title={"Professional Services Advancement Support Scheme (PASS)"}
          details={
            <div>
              <p className="text-body-m mb-[16px]">
                The PASS, launched by the Commerce and Economic Development
                Bureau (CEDB), provides funding support for non-profit-making
                projects aimed at increasing the exchanges and co-operation of
                Hong Kong's professional services with their counterparts in
                external markets, promoting relevant publicity activities, and
                enhancing the standards and external competitiveness of
                professional services in Hong Kong.
              </p>

              <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
                <p className="text-body-m">
                  A wide range of professional services sectors, including
                  "technical testing and analysis services", are eligible for
                  funding under PASS. Non-profit-distributing organisations
                  operating as support organisations, trade and industry
                  organisations, professional bodies or research institutes can
                  apply.
                </p>

                <div className="flex flex-row gap-[24px] items-center w-full mt-[16px]">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/pass.svg`}
                    alt={"pass"}
                  />
                  <p className="text-body-m flex-grow min-w-0">
                    There are&nbsp;
                    <span className="text-newPrimary font-semibold">
                      no particular restrictions&nbsp;
                    </span>
                    on the types of projects eligible under PASS
                  </p>
                </div>

                <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
                    alt={"rocket"}
                  />
                  <p className="text-body-m flex-grow min-w-0">
                    Each approved project will be funded for&nbsp;
                    <span className="text-newPrimary font-semibold">
                      up to 90% of the total eligible project cost
                    </span>
                    , or $3 million, whichever is lower
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-[24px]">
        <Accordion
          title={"TID's Funding Schemes"}
          details={
            <div>
              <p className="text-body-m my-[16px]">
                The Trade and Industry Department (TID) has launched various
                funding schemes to assist enterprises, including
                small-and-medium enterprises (SMEs), in enhancing their
                competitiveness.
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {Object.keys(tidMap).map((btn, index) => {
                  const isActivated = btn === activeTIDFunding;
                  return (
                    <button
                      key={index}
                      className="p-2 transition-all duration-800 ease-in-out"
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveTIDFunding(btn);
                      }}
                    >
                      <p className="px-[12px] text-highlight-xs">{btn}</p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-[16px]">{tidMap[activeTIDFunding]}</div>
            </div>
          }
        />
      </div>

      <div className="mt-[24px] mb-[48px]">
        <Accordion
          title={"Testing and Certification Sector Job Creation Scheme (TCJS)"}
          details={
            <div>
              <p className="text-body-m my-[16px]">
                The Innovation and Technology Commission (ITC) has launched the
                Testing and Certification Sector Job Creation Scheme on 24
                August, the first job creation scheme dedicated to the testing
                and certification (T&C) sector under the Hong Kong Special
                Administrative Region Government.
              </p>

              <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
                <div className="flex flex-row gap-[24px] items-center w-full">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/pass.svg`}
                    alt={"pass"}
                  />
                  <p className="text-body-m flex-grow min-w-0">
                    Each local private T&C organisation with valid accreditation
                    status given by the Hong Kong Accreditation Service may
                    apply for a monthly subsidy for up to five eligible job
                    positions.
                  </p>
                </div>

                <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
                    alt={"money"}
                  />
                  <p className="text-body-m flex-grow min-w-0">
                    For each approved position, the applicant employer will
                    receive&nbsp;
                    <span className="text-newPrimary font-semibold">
                      a monthly subsidy of HK$10,000 or 50% of the salary&nbsp;
                    </span>
                    of the position, whichever is lower, for 12 months.
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
