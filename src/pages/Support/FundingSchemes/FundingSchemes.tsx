import React, { useState } from "react";
import { ITF, TID } from "./SchemesSummary";
import {
  // TVP,
  ESS,
  ITSP,
  PRP,
  GSP,
  NITTP,
} from "./InnovationAndTechnologyFund";
import { Accordion, SquareTitle, Link } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import {
  BUD,
  SMEExportMarketingFund,
  SMELoanGuaranteeScheme,
  TSF,
} from "./TIDFundingSchemes";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    comma: ", ",
    funding_schemes: "Funding Schemes",
    ITF: {
      title: "Innovation and Technology Fund (ITF)",
      ITF_aims_to:
        "ITF aims to increase the added value, productivity and competitiveness of Hong Kong's economic activities. The Government hopes that, through the ITF, Hong Kong companies could be encouraged and assisted to upgrade their technological level and introduce innovative ideas to their business.",
      ITF_is_administered:
        "ITF is administered by Innovation and Technology Commission (ITC) and is open to application from all sectors. Apart from funding research and development (R&D) activities, ITF also supports non-R&D projects like conferences, surveys, training and the like that promote innovation and technology.",
      tabs: [
        "Summary",
        "Enterprise Support Scheme (ESS)",
        "Innovation and Technology Support Programme (ITSP)",
        "Partnership Research Programme (PRP)",
        "Research and Development Cash Rebate Scheme",
        "General Support Programme (GSP)",
        "New Industrialisation and Technology Training Programme (NITTP)",
      ],
    },
    PASS: {
      title: "Professional Services Advancement Support Scheme (PASS)",
      the_pass_launched_by: (
        <p className="text-body-m mb-[16px]">
          The&nbsp;
          <Link outerLink="https://www.pass.gov.hk/index.html">PASS</Link>,
          launched by the Commerce and Economic Development Bureau (CEDB),
          provides funding support for non-profit-making projects aimed at
          increasing the exchanges and co-operation of Hong Kong's professional
          services with their counterparts in external markets, promoting
          relevant publicity activities, and enhancing the standards and
          external competitiveness of professional services in Hong Kong.
        </p>
      ),
      a_wide_range_of: `A wide range of professional services sectors, including "technical testing and analysis services", are eligible for funding under PASS. Non-profit-distributing organisations operating as support organisations, trade and industry organisations, professional bodies or research institutes can apply.`,
      no_particular_restrictions: (
        <p className="text-body-m flex-grow min-w-0">
          There are&nbsp;
          <span className="text-newPrimary font-semibold">
            no particular restrictions&nbsp;
          </span>
          on the types of projects eligible under PASS
        </p>
      ),
      each_approved_project: (
        <p className="text-body-m flex-grow min-w-0">
          Each approved project will be funded for&nbsp;
          <span className="text-newPrimary font-semibold">
            up to 90% of the total eligible project cost
          </span>
          , or $3 million, whichever is lower
        </p>
      ),
    },
    TID: {
      title: `TID's Funding Schemes`,
      the_trade_and_industry_department: `The Trade and Industry Department (TID) has launched various funding schemes to assist enterprises, including small-and-medium enterprises (SMEs), in enhancing their competitiveness.`,
      tabs: [
        "Summary",
        "BUD Fund (Enterprise Support Programme)",
        "Trade and Industrial Organisation Support Fund (TSF)",
        "SME Export Marketing Fund",
        "SME Loan Guarantee Scheme",
      ],
    },
    TCJS: {
      title: "Testing and Certification Industry Job Creation Scheme (TCJS)",
      the_innovation_and_technology_commission:
        "The Innovation and Technology Commission (ITC) launched the Testing and Certification Industry Job Creation Scheme (the Scheme) under the Anti-Epidemic Fund (AEF) 6.0 on 24 August 2022.",
      the_scheme_was: `The Scheme was the first job creation scheme dedicated to the testing and certification (T&C) industry. It aimed to encourage private testing and certification (T&C) organisations to create more job opportunities, and attract people to join the T&C industry, so as to enrich Hong Kong’s T&C talent pool.`,
      each_local: `Each local private T&C organisation with valid accreditation status given by the Hong Kong Accreditation Service could apply for a monthly subsidy for up to five eligible job positions.`,
      for_each_approve: (
        <p className="text-body-m flex-grow min-w-0">
          For each approved position, the applicant employer would receive&nbsp;
          <span className="text-newPrimary font-semibold">
            a monthly subsidy of HK$10,000 or 50% of the salary&nbsp;
          </span>
          of the position, whichever is lower, for 12 months.
        </p>
      ),
      the_application: `The application period closed on 31 July 2023. 54 organisations have participated and collectively created over170 job positions. The total funding involved exceeded HK$16 million. The Scheme has been successfully completed, with all subsidies disbursed by 31 August 2024.`,
    },
  },
  cn: {
    comma: "，",
    funding_schemes: "資助計劃",
    ITF: {
      title: "創新及科技基金",
      ITF_aims_to:
        "政府設立創新及科技基金，旨在提升本地經濟活動的增值力、生產力及競爭力。政府希望透過基金，鼓勵和協助香港的企業提升科技水平，並為其業務注入更多創新意念。",
      ITF_is_administered:
        "基金由創新科技署管理，各界均可申請。除了資助研發活動外，基金亦資助推動創新科技的非研發項目，例如會議、培訓和調查等。",
      tabs: [
        "概要",
        "企業支援計劃",
        "創新及科技支援計劃",
        "夥伴研究計劃",
        "投資研發現金回贈計劃",
        "一般支援計劃",
        "新型工業化及科技培訓計劃",
      ],
    },
    PASS: {
      title: "專業服務協進支援計劃",
      the_pass_launched_by: (
        <p className="text-body-m mb-[16px]">
          <Link outerLink="https://www.pass.gov.hk/index.html">
            商務及經濟發展局推出專業服務協進支援計劃
          </Link>
          ，旨在資助非牟利項目以加強本港專業服務行業與境外市場相類行業的交流和合作，並且透過推動相關的推廣活動，提高本港專業服務水平和對外競爭力。
        </p>
      ),
      a_wide_range_of:
        "合資格向支援計劃申請資助的專業服務行業眾多，包括技術測試及分析服務，以支援組織、工商組織、專業團體或研究院所形式運作的非分配利潤機構均可提出申請。",

      no_particular_restrictions: (
        <p className="text-body-m flex-grow min-w-0">
          支援計劃
          <span className="text-newPrimary font-semibold">沒有特別限制</span>
          合資格的非牟利項目類型。
        </p>
      ),

      each_approved_project: (
        <p className="text-body-m flex-grow min-w-0">
          每個獲批項目的最高資助款額為
          <span className="text-newPrimary font-semibold">
            合資格項目成本總額的90%
          </span>
          ，或港幣300萬元，以較低者為準。
        </p>
      ),
    },
    TID: {
      title: "工業貿易署的資助計劃",
      the_trade_and_industry_department:
        "工業貿易署推行了多項資助計劃，協助企業包括中小企業（下稱中小企）提升其整體競爭力。",
      tabs: [
        "概要",
        "BUD專項基金（企業支援計劃）",
        "工商機構支援基金",
        "中小企業市場推廣基金",
        "中小企業信貸保證基金",
      ],
    },
    TCJS: {
      title: "檢測和認證業創造職位計劃",
      the_innovation_and_technology_commission:
        "創新科技署（創科署）於8月24日推出了「檢測和認證業創造職位計劃」，是首個香港特別行政區政府專為檢測認證業而設的創造職位計劃。",
      the_scheme_was:
        "計劃旨在鼓勵私營檢測和認證機構創造更多就業機會，吸引人才加入檢測和認證行業，以加強香港的檢測認證人才庫。",
      each_local:
        "每間獲香港認可處發出有效認可資格的私營T&C機構，可為最多五個合資格職位申請每月資助。",
      for_each_approve: (
        <p className="text-body-m flex-grow min-w-0">
          申請僱主可就每個獲批職位獲得
          <span className="text-newPrimary font-semibold">
            每月資助港幣10,000元或該職位月薪的50%
          </span>
          ，以較低者為準，為期12個月。
        </p>
      ),

      the_application:
        "申請期已於2023年7月31日結束，共有54間機構參與，合共創造超過170個職位。計劃總資助額超過港幣1,600萬元，並已於2024年8月31日成功完成，所有補助已發放。",
    },
  },
};

const tidMap: Record<
  string,
  { label: string; labelCN: string; content: React.ReactNode }
> = {
  Summary: {
    label: `Summary`,
    labelCN: `概要`,
    content: <TID />,
  },

  BUD: {
    label: "BUD Fund (Enterprise Support Programme)",
    labelCN: `UD專項基金（企業支援計劃）`,
    content: <BUD />,
  },
  TSF: {
    label: "Trade and Industrial Organisation Support Fund (TSF)",
    labelCN: `工商機構支援基金`,
    content: <TSF />,
  },
  SMEExportMarketingFund: {
    label: "SME Export Marketing Fund",
    labelCN: `中小企業市場推廣基金`,
    content: <SMEExportMarketingFund />,
  },
  SMELoanGuaranteeScheme: {
    label: "SME Loan Guarantee Scheme",
    labelCN: `中小企業信貸保證基金`,
    content: <SMELoanGuaranteeScheme />,
  },
};

const ITFMap: Record<
  string,
  { label: string; labelCN: string; content: React.ReactNode }
> = {
  Summary: {
    label: `Summary`,
    labelCN: `概要`,
    content: <ITF />,
  },

  ESS: {
    label: "Enterprise Support Scheme (ESS)",
    labelCN: `企業支援計劃`,
    content: <ESS />,
  },
  ITSP: {
    label: "Innovation and Technology Support Programme (ITSP)",
    labelCN: `創新及科技支援計劃`,
    content: <ITSP />,
  },

  PRP: {
    label: "Partnership Research Programme (PRP)",
    labelCN: `夥伴研究計劃`,
    content: <PRP />,
  },

  GSP: {
    label: "General Support Programme (GSP)",
    labelCN: "一般支援計劃",
    content: <GSP />,
  },

  NITTP: {
    label: "New Industrialisation and Technology Training Programme (NITTP)",
    labelCN: "新型工業化及科技培訓計劃",
    content: <NITTP />,
  },
};

export const FundingSchemes: React.FC = () => {
  const { isPC, language } = useSettings();

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { funding_schemes, ITF, PASS, TID, TCJS } = page_text;

  const [activeITFButton, setActiveITFButton] = useState<string>(
    Object.keys(ITFMap)[0]
  );

  const [activeTIDFunding, setActiveTIDFunding] = useState<string>(
    Object.keys(tidMap)[0]
  );
  return (
    <div className="w-full">
      <SquareTitle title={funding_schemes} />

      <div className="mt-[24px]">
        <Accordion
          title={ITF.title}
          details={
            <div className="text-body-m !text-justify w-full">
              <p>{ITF.ITF_aims_to}</p>
              <br />
              <p className="mb-[24px] text-justify">
                {ITF.ITF_is_administered}
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {Object.keys(ITFMap).map((btn, index) => {
                  const isActivated = btn === activeITFButton;
                  const label =
                    language === Language.EN
                      ? ITFMap[btn].label
                      : ITFMap[btn].labelCN;
                  return (
                    <button
                      key={index}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveITFButton(btn);
                      }}
                    >
                      <p className="text-highlight-xs">
                        {label.length > 38 && !isPC
                          ? label.slice(0, 38) + "..."
                          : label}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-[16px]">{ITFMap[activeITFButton].content}</div>
            </div>
          }
        />
      </div>

      <div className="mt-[24px]">
        <Accordion
          title={PASS.title}
          details={
            <div>
              {PASS.the_pass_launched_by}

              <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
                <p className="text-body-m">{PASS.a_wide_range_of}</p>

                <div className="flex flex-row gap-[24px] items-center w-full mt-[16px]">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/pass.svg`}
                    alt={"pass"}
                  />
                  {PASS.no_particular_restrictions}
                </div>

                <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
                    alt={"rocket"}
                  />
                  {PASS.each_approved_project}
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-[24px]">
        <Accordion
          title={TID.title}
          details={
            <div>
              <p className="text-body-m my-[16px]">
                {TID.the_trade_and_industry_department}
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {Object.keys(tidMap).map((btn, index) => {
                  const isActivated = btn === activeTIDFunding;

                  const label =
                    language === Language.EN
                      ? tidMap[btn].label
                      : tidMap[btn].labelCN;
                  return (
                    <button
                      key={index}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActiveTIDFunding(btn);
                      }}
                    >
                      <p className="text-highlight-xs">
                        {label.length > 38 && !isPC
                          ? label.slice(0, 38) + "..."
                          : label}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-[16px]">
                {tidMap[activeTIDFunding].content}
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-[24px]">
        <Accordion
          title={TCJS.title}
          details={
            <div>
              <p className="!text-body-m">
                {TCJS.the_innovation_and_technology_commission}
              </p>
              <br />
              <p className="mb-[16px] !text-body-m">{TCJS.the_scheme_was}</p>
              <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
                <div className="flex flex-row gap-[24px] items-center w-full">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/pass.svg`}
                    alt={"pass"}
                  />
                  <p className="text-body-m flex-grow min-w-0">
                    {TCJS.each_local}
                  </p>
                </div>

                <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
                  <img
                    className="w-[24px] h-[24px] flex-shrink-0"
                    src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
                    alt={"money"}
                  />
                  {TCJS.for_each_approve}
                </div>
              </div>
              <p className="my-[16px] !text-body-m">{TCJS.the_application}</p>
            </div>
          }
        />
      </div>
    </div>
  );
};
