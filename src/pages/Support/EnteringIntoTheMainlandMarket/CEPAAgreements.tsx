import React, { useEffect, useState } from "react";
import { Accordion, SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { useNavigate } from "react-router-dom";
import { Language, useSettings } from "../../../context";

export enum CEPAAgreements_ids {
  agreement_on_trade_in_services = "agreement_on_trade_in_services",
  agreement_on_trade_in_goods = "agreement_on_trade_in_goods",
  agreement_on_economic_and_technical_cooperation = "agreement_on_economic_and_technical_cooperation",
  mainland_and_hong_kong_agreement = "mainland_and_hong_kong_agreement",
  supplement_X_to_CEPA = "supplement_X_to_CEPA",
  supplement_IX_to_CEPA = "supplement_IX_to_CEPA",
  supplement_VIII_to_CEPA = "supplement_VIII_to_CEPA",
  supplement_VII_to_CEPA = "supplement_VII_to_CEPA",
}

const multilingual = {
  en: {
    title: `CEPA Agreements`,
    agreement_on_trade_in_services: `Agreement on Trade in Services`,
    agreement_between_the_mainland_and_hk: `Agreement between the Mainland and Hong Kong on Achieving Basic Liberalisation of Trade in Services in Guangdong`,
    agreement_on_economic_and_technical_cooperation: `Agreement on Economic and Technical Cooperation`,
    agreement_on_goods: `Agreement on Trade in Goods`,

    x_to_CEPA: `Supplement X to CEPA`,
    ix_to_CEPA: `Supplement IX to CEPA`,
    viii_to_CEPA: `Supplement VIII to CEPA`,
    vii_to_CEPA: `Supplement VII to CEPA`,
  },

  cn: {
    title: `CEPA協議`,
    agreement_on_trade_in_services: `《服務貿易協議》`,
    agreement_between_the_mainland_and_hk: `《關於內地在廣東與香港基本實現服務貿易自由化的協議》`,
    agreement_on_economic_and_technical_cooperation: `《經濟技術合作協議》`,
    agreement_on_goods: `《貨物貿易協議》`,

    x_to_CEPA: `《CEPA補充協議十》`,
    ix_to_CEPA: `《CEPA補充協議九》`,
    viii_to_CEPA: `《CEPA補充協議八》`,
    vii_to_CEPA: `《CEPA補充協議七》`,
  },
};

export const CEPAAgreements: React.FC = () => {
  const navigate = useNavigate();
  const { getPageText, getSingleNode, getSingleText } = useSettings();

  const page_text = getPageText(multilingual);

  const agreementMap: Record<
    string,
    {
      tab: string;
      tabCN: string;
      content: React.ReactNode;
      contentCN: React.ReactNode;
    }
  > = {
    latestDevelopment: {
      tab: "Latest development",
      tabCN: "最新發展",
      content: (
        <>
          <p className="text-body-m">
            On 9 October 2024, the Second Agreement Concerning Amendment to the
            Agreement on Trade in Services (“the Amendment Agreement II”) was
            signed between the Mainland and HKSAR. The Amendment Agreement II
            sets out the following further liberalisation measures:
          </p>
          <br />
          <ul>
            <li className="text-body-m">
              On the geographical coverage of&nbsp;
              <span className="text-newPrimary !text-highlight-m">
                CCC factory inspection
              </span>
              &nbsp;that can be undertaken by qualified certification bodies in
              Hong Kong in collaboration with designated Mainland organisations:
              To expand from manufacturers located in the whole Mainland&nbsp;
              <span className="text-newPrimary !text-highlight-m">
                to manufacturers in any place (including places outside Mainland
                China)
              </span>
              ;
            </li>
            <br />
            <li className="text-body-m">
              On the geographical coverage of&nbsp;
              <span className="text-newPrimary !text-highlight-m">
                selection of CCC post-certification test samples
              </span>
              &nbsp;that can be undertaken by qualified certification bodies in
              Hong Kong in collaboration with designated Mainland organisations:
              To&nbsp;
              <span className="text-newPrimary text-body-m">expand</span>
              &nbsp;from manufacturers located in the whole Mainland&nbsp;
              <span className="text-newPrimary !text-highlight-m">
                to manufacturers in any place (including places outside Mainland
                China)
              </span>
              .
            </li>
          </ul>
          <br />
          <p className="text-body-m">
            The above measures will come into effect on 1 March 2025. The State
            Administration for Market Regulation will promulgate the&nbsp;
            <a
              href="https://www.hkctc.gov.hk/tc/doc/202502_CEPA_TradeinServices_ImplementationGuide_tc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              implementation guide
            </a>
            &nbsp;in due course.
          </p>
        </>
      ),
      contentCN: (
        <>
          <p className="text-body-m">
            中國內地與香港特區於二○二四年十月九日簽署關於修訂《服務貿易協議》的協議二（“《修訂協議二》”）。《修訂協議二》訂下了以下的進一步開放措施：–
          </p>
          <br />
          <ul>
            <li className="text-body-m">
              符合條件的香港認證機構可與內地指定機構開展合作進行
              <span className="text-newPrimary !text-highlight-m">
                CCC工廠檢查
              </span>
              ，範圍從現時內地全境內的CCC產品生產廠，
              <span className="text-newPrimary !text-highlight-m">
                擴展至任何地區（包括中國內地以外）的CCC產品生產廠
              </span>
              ；
            </li>
            <br />
            <li className="text-body-m">
              符合條件的香港認證機構可與內地指定機構開展合作進行的
              <span className="text-newPrimary !text-highlight-m">
                獲證後於工廠選取CCC測試樣本
              </span>
              ，範圍從現時在內地全境內的CCC產品生產廠，
              <span className="text-newPrimary text-body-m">
                擴展至任何地區（包括中國內地以外）的CCC產品生產廠
              </span>
              。
            </li>
          </ul>
          <br />
          <p className="text-body-m">
            以上措施於二○二五年三月一日起實施。詳細實施安排已載於國家認監委發布的
            <a
              href="https://www.hkctc.gov.hk/tc/doc/202502_CEPA_TradeinServices_ImplementationGuide_tc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              實施指南
            </a>
            。
          </p>
        </>
      ),
    },
    nov2020: {
      tab: "November 2020",
      tabCN: "2020年11月",
      content: (
        <>
          <p className="text-body-m">
            On 4 November 2020, the State Administration for Market Regulation
            published&nbsp;
            <a
              className="underline text-[#00E] text-[16px]"
              href="https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/rzjgs/art/2023/art_3a444d8683da4c47bd634f492e6d8f4a.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              an announcement
            </a>
            &nbsp;relating to the implementation of the&nbsp;
            <a
              className="underline text-[#00E] text-[16px]"
              href="https://www.gov.cn/zhengce/content/2020-09/21/content_5545345.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              State Council’s notice
            </a>
            &nbsp;on the cancellation of licensing work for designation of
            inspection bodies related to CCC. The announcement clearly stated
            that since 13 September 2020, the State Administration for Market
            Regulation has stopped accepting, examining and approving licensing
            applications for designation of inspection bodies related to CCC.
          </p>
          <br />
          <p className="text-body-m">
            For applications already accepted for further processing, the
            administrative approval procedures will be ceased in accordance with
            the law. After the cancellation, designated CCC certification bodies
            may conduct CCC factory inspections themselves or entrust competent
            inspection bodies to do the job, and are responsible for the factory
            inspection results. Liberalisation measures relating to CCC testing
            are not affected by the above changes.
          </p>
        </>
      ),
      contentCN: (
        <>
          <p className="text-body-m">
            為落實
            <a
              className="underline text-[#00E] text-[16px]"
              href="https://www.gov.cn/zhengce/content/2020-09/21/content_5545345.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              《國務院關於取消和下放一批行政許可事項的決定》
            </a>
            中，有關取消「與強制性認證有關的檢查機構指定」許可工作，國家市場監督管理總局於2020年11月4日發佈
            <a
              className="underline text-[#00E] text-[16px]"
              href="https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/rzjgs/art/2023/art_3a444d8683da4c47bd634f492e6d8f4a.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              《市場監管總局關於貫徹落實〈國務院關於取消和下放一批行政許可事項的決定〉有關事項的公告》（2020年第48號）
            </a>
            。該公告明確指出自2020年9月13日起，國家市場監督管理總局停止「與強制性認證有關的檢查機構指定」許可事項的受理、審查和審批。
          </p>
          <br />
          <p className="text-body-m">
            對於已經受理的申請，依法終止行政許可程序。許可取消後，強制性產品認證（CCC）指定認證機構自行或委託有能力的檢查機構實施CCC認證工廠檢查，並對工廠檢查結論負責。以上改動並不影響有關CCC檢測的開放措施。
          </p>
        </>
      ),
    },
    nov2019: {
      tab: "November 2019",
      tabCN: "2019年11月",
      content: (
        <>
          <p className="text-body-m">
            On 21 November 2019, an Agreement ("Amendment Agreement") was signed
            between the Mainland and HKSAR to amend the Services Agreement. The
            Amendment Agreement sets out the following further liberalisation
            measures:
          </p>
          <br />
          <ul>
            <li className="text-body-m">
              On the scope of testing of CCC products that can be undertaken by
              qualified Hong Kong testing organisations in collaboration with
              designated Mainland organisations: To expand from products
              processed or manufactured in the Mainland or processed in Hong
              Kong to products processed or manufactured in any place (including
              places outside China).
            </li>
            <br />
            <li className="text-body-m">
              On the geographical coverage of CCC factory inspection that can be
              undertaken by qualified certification bodies in Hong Kong in
              collaboration with designated Mainland organisations: To expand
              from manufacturers located in the China (Guangdong) Pilot Free
              Trade Zone to manufacturers in the whole Mainland; and to add a
              new task that can be undertaken by qualified certification bodies
              in Hong Kong, i.e. the selection of post-certification test
              samples at factories manufacturing CCC products in the whole
              Mainland.
            </li>
          </ul>
          <br />
          <p className="text-body-m">
            The above measures came into effect on 1 June 2020. The
            Certification and Accreditation Administration of the People’s
            Republic of China (“CNCA”) has promulgated the&nbsp;
            <a
              href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] text-[16px]"
            >
              Implementation Guide
            </a>
            &nbsp;on the revised and new liberalisation measures.
          </p>
        </>
      ),
      contentCN: (
        <>
          <p className="text-body-m">
            二○一九年十一月二十一日，中國內地與香港特區簽署關於修訂《服務貿易協議》的協議（“《修訂協議》”）。《修訂協議》訂下了以下的進一步開放措施：–
          </p>
          <br />
          <ul>
            <li className="text-body-m">
              符合條件的香港檢測機構可與內地指定機構開展合作進行CCC產品檢測，範圍從現時在內地加工或生產、或在香港加工的CCC產品，擴展至在任何地區（包括中國以外）加工或生產的CCC產品。
            </li>
            <br />
            <li className="text-body-m">
              符合條件的香港認證機構可與內地指定機構開展合作進行CCC工廠檢查，範圍從現時在中國（廣東）自由貿易試驗區內的CCC產品生產廠，擴展至內地全境內的CCC產品生產廠。符合條件的香港認證機構也可承擔新增任務，即內地全境內獲證後於工廠選取測試樣本。
            </li>
          </ul>
          <br />
          <p className="text-body-m">
            以上措施已於二○二○年六月一日起實施。國家認證認可監督管理委員會（“認監委”）已公布獲修訂和新增措施的
            <a
              href="https://www.hkctc.gov.hk/en/doc/202005_CEPA_TradeinServices_ImplementationGuide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] text-[16px]"
            >
              實施指南
            </a>
            。
          </p>
        </>
      ),
    },
    dec2018: {
      tab: "December 2018",
      tabCN: "2018年12月",
      content: (
        <>
          <p className="text-body-m">
            In December 2018, by way of Exchange of Letters, the Mainland
            revised the Services Agreement, with a view to further opening up
            the China Compulsory Certification (“CCC”) market to Hong Kong. The
            new measure allows Hong Kong testing organisations to cooperate with
            designated Mainland certification bodies to undertake&nbsp;
            <span
              className="!text-highlight-m underline text-newPrimary cursor-pointer"
              onClick={() => {
                navigate("/support/CCC_testing");
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              CCC testing
            </span>
            &nbsp;on all products that are processed or manufactured in the
            Mainland requiring CCC. The&nbsp;
            <a
              href="https://www.hkctc.gov.hk/en/doc/201902_CEPA_TradeinServices_ImplementationGuide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] text-[16px]"
            >
              Implementation Guide
            </a>
            &nbsp;of this measure, which came into effect on 1 March 2019, has
            been promulgated.
          </p>
        </>
      ),
      contentCN: (
        <>
          <p className="text-body-m">
            二○一八年十二月，內地透過換文修訂《服務貿易協議》，以進一步擴大中國強制性產品認證（"CCC"）市場的對港開放範圍。新措施允許香港的檢測機構與內地指定認證機構展開合作，承擔在內地加工或生產的CCC目錄內所有產品的{" "}
            <span
              className="!text-highlight-m underline text-newPrimary cursor-pointer"
              onClick={() => {
                navigate("/support/CCC_testing");
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              CCC檢測
            </span>
            工作。此措施已於二○一九年三月一日起實施，相關
            <a
              href="https://www.hkctc.gov.hk/en/doc/201902_CEPA_TradeinServices_ImplementationGuide_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E] text-[16px]"
            >
              實施指南
            </a>
            亦已公布。
          </p>
        </>
      ),
    },
  };
  const serviceTab = Number(
    new URLSearchParams(window.location.search).get("serviceTab") ?? 0
  );
  const [agreementType, setAgreementType] = useState<string>(
    Object.keys(agreementMap)[serviceTab]
  );
  const scrollId = new URLSearchParams(window.location.search).get("scroll_id");

  useEffect(() => {
    const element = document.getElementById(scrollId as string);

    if (scrollId && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollId]);

  const {
    title,
    x_to_CEPA,
    ix_to_CEPA,
    viii_to_CEPA,
    vii_to_CEPA,
    agreement_on_goods,
    agreement_on_economic_and_technical_cooperation,
    agreement_between_the_mainland_and_hk,
    agreement_on_trade_in_services,
  } = page_text;

  const X_to_CEPA = (
    <>
      <p className="text-body-m">
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#4");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Supplement X to CEPA
        </span>
        &nbsp;was signed between the Mainland and HKSAR in August 2013. It
        introduces, on a pilot basis, the expansion of the scope from food
        testing services for the purpose of certification that can be undertaken
        by Hong Kong testing organisations from food to other areas of voluntary
        product certification.
      </p>
      <br />
      <p className="text-body-m">
        Besides, in the participation of Mainland testing and certification
        activities, same treatment is accorded to relevant organisations set up
        in the Mainland by Hong Kong service suppliers. Contractual service
        providers employed by Hong Kong service suppliers are allowed to provide
        related services in the Mainland in the mode of movement of natural
        persons.
      </p>
      <br />
      <p className="text-body-m">
        The Mainland has formulated two Implementation Guides (
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E] text-[16px]"
        >
          measure on the movement of natural persons, other measures
        </a>
        ), which provide further details for the implementation of these
        liberalisation measures. A list of Mainland certification bodies and
        their scope of services in respect of voluntary certification are
        available at the&nbsp;
        <a
          href="https://www.cnca.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E] text-[16px]"
        >
          website of CNCA
        </a>
        .
      </p>
    </>
  );

  const X_to_CEPA_CN = (
    <>
      <p className="text-body-m">
        中國內地與香港特區於二○一三年八月簽署
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#4");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          《CEPA補充協議十》
        </span>
        ，當中包括試行放寬香港檢測機構獲准承擔的以認證為目的的檢測服務範圍，至其他自願性產品認證領域。此外，在參與內地檢測和認證活動方面，給予香港服務提供者在內地設立的相關機構同等待遇。香港服務提供者僱用的合同服務提供者亦獲允許以自然人流動的方式，在內地提供相關服務。
      </p>
      <br />
      <p className="text-body-m">
        內地已制訂實施指南（
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E] text-[16px]"
        >
          關於自然人流動的措施，其他措施
        </a>
        ），為以上開放措施的實施提供更多資訊。認監委亦已發布內地認證機構及其有關自願性產品認證的服務範圍的
        <a
          href="https://www.cnca.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E] text-[16px]"
        >
          名單
        </a>
        。
      </p>
    </>
  );

  const VII_to_CEPA = (
    <>
      <p className="text-body-m">
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#7");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Supplement VII to CEPA
        </span>
        &nbsp;was signed between the Mainland and the HKSAR in May 2010. It
        includes liberalisation measures of the&nbsp;
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/CCC_testing");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          China Compulsory Certification (CCC) System
        </span>
        &nbsp;and arrangements to help testing organisations in Hong Kong to
        become recognised testing organisations under&nbsp;
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate(
              "/support/international_multilateral_systems_on_mutual_recognition"
            );
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          international multilateral systems on mutual recognition
        </span>
        &nbsp;of testing and certification that are open to national member
        bodies (such as the IECEE/CB system). On liberalising the CCC market,
      </p>
      <br />
      <p className="text-body-m">
        Hong Kong testing organisations are allowed to partner with designated
        Mainland certification bodies to undertake testing on four selected
        products processed in Hong Kong (i.e. toys; switches, protective devices
        and connection devices for electrical installations; information
        technology equipment; and lighting apparatus) that require CCC.
      </p>
    </>
  );

  const VII_to_CEPA_CN = (
    <>
      <p className="text-body-m">
        中國內地與香港特區於二○一○年五月簽署
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#7");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          《CEPA補充協議七》
        </span>
        ，當中包括有關
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/CCC_testing");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          中國強制性產品認證制度（CCC）
        </span>
        的開放措施，以及協助香港檢測機構成為設有國家成員機構的認證檢測
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate(
              "/support/international_multilateral_systems_on_mutual_recognition"
            );
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          國際多邊互認體系
        </span>
        （如IECEE/CB體系）所接受的檢測實驗室之安排。
        <br />
        <br />
        另外，在開放CCC市場方面，現允許香港檢測機構與內地指定認證機構合作，為在香港加工而需CCC認證的四種產品（即玩具、電路開關及保護或連接用電器裝置、信息技術設備及照明電器）進行檢測。
      </p>
    </>
  );

  const VIII_to_CEPA = (
    <>
      <p className="text-body-m">
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#6");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Supplement VIII to CEPA
        </span>
        &nbsp;was signed between the Mainland and HKSAR in December 2011.
        Starting from April 2012, the measure allows, on the basis of Supplement
        VII to CEPA, testing organisations in Hong Kong to cooperate with
        designated Mainland certification bodies to undertake product testing
        for the&nbsp;
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/CCC_testing");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          China Compulsory Certification (CCC) System
        </span>
        &nbsp;for all existing products processed in Hong Kong that require CCC.
      </p>
    </>
  );

  const VIII_to_CEPA_CN = (
    <>
      <p className="text-body-m">
        中國內地與香港特區於二○一一年十二月簽署
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#6");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          《CEPA補充協議八》
        </span>
        。由二○一二年四月起，在《CEPA補充協議七》的基礎上，允許香港檢測機構與內地指定認證機構展開合作，對現行所有需
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/CCC_testing");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          中國強制性產品認證（CCC）
        </span>
        的香港本地加工的產品進行檢測。
      </p>
    </>
  );
  const IX_to_CEPA = (
    <>
      <p className="text-body-m">
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#5");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Supplement IX to CEPA
        </span>
        &nbsp;was signed between the Mainland and HKSAR in June 2012. Starting
        from January 2013, the scope of testing services for supporting
        certification in the Mainland that can be undertaken by Hong Kong
        testing organisations is expanded, on a pilot basis in Guangdong
        Province, to cover food.
      </p>
      <br />
      <p className="text-body-m">
        The Mainland has formulated an&nbsp;
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          measure on the movement of natural persons, other measures
        </a>
        &nbsp;for this liberalisation measure. The Guide covers, among others,
        the applicable food-related certification schemes and the procedures for
        cooperation between Hong Kong testing organisations and Mainland
        certification bodies.
      </p>
    </>
  );
  const IX_to_CEPA_CN = (
    <>
      <p className="text-body-m">
        中國內地與香港特區於二○一二年六月簽署
        <span
          className="!text-newPrimary underline !text-highlight-m cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#5");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          《CEPA補充協議九》
        </span>
        。由二○一三年一月起，在廣東省試點內將香港檢測機構獲准承擔，以認證為目的的檢測服務範圍，放寬至食品類別。
      </p>
      <br />
      <p className="text-body-m">
        內地已為此開放措施制訂
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_IX_Implementation_Guide_Eng.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          實施指南
        </a>
        ，其中涵蓋適用的食品認證種類，以及香港檢測機構與內地認證機構展開合作的程序等資料。
      </p>
    </>
  );

  const AgreementBetweenTheMainlandAndHK = (
    <>
      <p className="text-body-m">
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#3");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          The Agreement between the Mainland and Hong Kong on Achieving Basic
          Liberalisation of Trade in Services in Guangdong (Guangdong Agreement)
        </span>
        &nbsp;was signed between the Mainland and HKSAR in December 2014. It
        includes measures allowing testing organisations in Hong Kong to
        cooperate with designated Mainland organisations to undertake testing of
        products in the "audio and visual apparatus" category of the&nbsp;
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate("/support/CCC_testing");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          China Compulsory Certification (CCC)
        </span>
        &nbsp;system that are designed and prototyped in Hong Kong, as well as
        processed or manufactured in Guangdong Province.
      </p>
      <br />
      <p className="text-body-m">
        The scope of testing services that can be provided by Hong Kong testing
        organisations in the area of voluntary certification has been expanded
        to products manufactured or processed in Hong Kong or the Mainland.
      </p>

      <p className="text-body-m">
        Moreover, with respect to the mode of commercial presence, except for
        those inconsistent/inapplicable measures reserved as well as the
        horizontal management measures, the Guangdong Agreement offers local
        testing and certification industry same treatment as the Mainland
        enterprises in terms of market access requirement in Guangdong Province.
      </p>
      <br />
      <p className="text-body-m">
        The Mainland has formulated an&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
          href="https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
        >
          Implementation Guide
        </a>
        , which provides further details for the implementation of these
        liberalisation measures.
      </p>
    </>
  );

  const AgreementBetweenTheMainlandAndHK_CN = (
    <>
      <p className="text-body-m">
        於中國內地與香港特區於二○一四年十二月簽署
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#3");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          《關於內地在廣東與香港基本實現服務貿易自由化的協議》（廣東協議）
        </span>
        ，當中包括允許香港檢測機構與內地指定機構開展合作，承擔在港設計定型且在廣東省加工或生產的音視頻設備類產品的
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate("/support/CCC_testing");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          中國強制性產品認證（CCC）
        </span>
        檢測任務。在自願性認證領域，允許香港檢測機構對香港本地或內地生產或加工的產品進行檢測。
      </p>
      <br />
      <p className="text-body-m">
        另外，就「商業存在」的服務模式方面，除了保留的不符或不適用的措施和一般的水平管理措施外，《廣東協議》於廣東省在市場准入要求方面亦給予香港檢測和認證業界與內地企業同等待遇。
      </p>

      <br />
      <p className="text-body-m">
        內地已制訂
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
          href="https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
        >
          實施指南
        </a>
        ，為上述開放措施提供實施詳情。
      </p>
    </>
  );
  const AgreementOnEconomic = (
    <>
      <p className="text-body-m">
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#2");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          The Agreement on Economic and Technical Cooperation
        </span>
        &nbsp;was signed between the Mainland and HKSAR in June 2017. New
        articles related to testing and certification include -
      </p>
      <br />
      <p className="text-body-m">
        Article 23(7): Actively consider recommending an eligible certification
        body located in Hong Kong to join the International Electrotechnical
        Commission System of Conformity Assessment Schemes for Electrotechnical
        Equipment and Components (IECEE) as a National Certification Body (NCB)
        of China; and
      </p>
      <br />
      <p className="text-body-m">
        Article 23(8): Consider applications of eligible certification bodies
        set up by Hong Kong enterprises in the Mainland to become designated
        certification bodies under the China Compulsory Certification (CCC)
        system.
      </p>
    </>
  );

  const AgreementOnEconomic_CN = (
    <>
      <p className="text-body-m">
        中國內地與香港特區於二○一七年六月簽署
        <span
          className="!text-highlight-m underline text-newPrimary cursor-pointer"
          onClick={() => {
            navigate("/support/agreement-clause#2");
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          《經濟技術合作協議》
        </span>
        ，當中與檢測認證相關的新條文包括–
      </p>
      <br />
      <p className="text-body-m">
        第二十三（七）條：積極考慮推薦一家符合條件的位於香港的認證機構作為中國國家認證機構（NCB）加入國際電工委員會電工產品合格測試與認證組織（IECEE）；以及
      </p>
      <br />
      <p className="text-body-m">
        第二十三（八）條：研究符合條件的香港企業在內地開設的認證機構，申請成為中國強制性產品認證（CCC）制度的指定認證機構。
      </p>
    </>
  );

  const AgreementOnGoods = (
    <div className="text-body-m">
      <span
        className="!text-highlight-m underline text-newPrimary cursor-pointer"
        onClick={() => {
          navigate("/support/agreement-clause#1");
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        The Agreement on Trade in Goods
      </span>
      &nbsp;was signed between the Mainland and HKSAR in December 2018. It
      contains several exploratory provisions on mutual recognition of testing
      and certification results between the two sides.
    </div>
  );

  const AgreementOnGoods_CN = (
    <div className="text-body-m">
      內地與香港於二○一八年十二月簽署
      <span
        className="!text-highlight-m underline text-newPrimary cursor-pointer"
        onClick={() => {
          navigate("/support/agreement-clause#1");
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        《貨物貿易協議》
      </span>
      ，當中涵蓋若干有關雙方的檢測認證結果互認的探討性條文。
    </div>
  );

  const AgreementOnServices = (
    <>
      <p className="text-body-m mt-[16px]">
        The&nbsp;
        <span
          className="text-newPrimary text-linked-m underline cursor-pointer !text-linked-m"
          onClick={() => {
            navigate("/support/agreement-clause");
          }}
        >
          Agreement on Trade in Services
        </span>
        &nbsp;(“The Services Agreement”) was signed between the Mainland and
        HKSAR in November 2015.
        <br />
        <br />
        In addition to covering and consolidating commitments (relating to
        liberalisation of trade in services and the testing and certification
        sector) provided in CEPA and its Supplements and also the Guangdong
        Agreement, the Services Agreement also introduces the new liberalisation
        measure of implementing, on a pilot basis, a mutual recognition
        arrangement of certification and relevant testing business among
        Guangdong, Hong Kong and Macao in the China (Guangdong) Pilot Free Trade
        Zone, with a view to carrying out "certified once, tested once, and
        results accepted by three places".
      </p>
      <br />
      <p className="text-body-m">
        The Mainland has formulated an&nbsp;
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_Implementation_Guide_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Implementation Guide
        </a>
        , which provides further details of the new liberalisation measure
        covered in the Services Agreement.
      </p>
    </>
  );

  const AgreementOnServices_CN = (
    <>
      <p className="text-body-m mt-[16px]">
        中國內地與香港特區於二○一五年十一月簽署
        <span
          className="text-newPrimary text-linked-m underline cursor-pointer !text-linked-m"
          onClick={() => {
            navigate("/support/agreement-clause");
          }}
        >
          《服務貿易協議》
        </span>
        ，當中除新增了在中國（廣東）自由貿易試驗區內試行粵港澳認證及相關檢測業務互認制度，實行「一次認證、一次檢測、三地通行」的開放措施外，也涵蓋和歸納了CEPA各補充協議以及《廣東協議》內有關服務貿易開放、涉及檢測認證的承諾。
        <br />
      </p>
      <br />
      <p className="text-body-m">
        內地已制定
        <a
          href="https://www.hkctc.gov.hk/en/doc/CEPA_Implementation_Guide_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          實施指南
        </a>
        ，為相關開放措施的具體實施詳情提供更多資訊。
      </p>
    </>
  );
  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.agreement_on_trade_in_services}
      >
        <Accordion
          title={agreement_on_trade_in_services as string}
          details={
            <div>
              {getSingleNode(AgreementOnServices, AgreementOnServices_CN)}
              <div className="mt-[16px]">
                <div className="flex flex-wrap gap-[8px]">
                  {Object.keys(agreementMap).map((btn, index) => {
                    const isActivated = btn === agreementType;
                    const displayLabel = getSingleText(
                      agreementMap[btn].tab,
                      agreementMap[btn].tabCN
                    );
                    return (
                      <button
                        key={index}
                        style={
                          isActivated ? activatedButtonStyle : normalButtonStyle
                        }
                        onClick={() => {
                          setAgreementType(btn);
                        }}
                      >
                        <p className="text-highlight-xs">{displayLabel}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-[16px]">
                  {getSingleNode(
                    agreementMap[agreementType].content,
                    agreementMap[agreementType].contentCN
                  )}
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.agreement_on_trade_in_goods}
      >
        <Accordion
          title={agreement_on_goods as string}
          details={getSingleNode(AgreementOnGoods, AgreementOnGoods_CN)}
        />
      </div>
      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.agreement_on_economic_and_technical_cooperation}
      >
        <Accordion
          title={agreement_on_economic_and_technical_cooperation as string}
          details={getSingleNode(AgreementOnEconomic, AgreementOnEconomic_CN)}
        />
      </div>

      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.mainland_and_hong_kong_agreement}
      >
        <Accordion
          title={agreement_between_the_mainland_and_hk as string}
          details={getSingleNode(
            AgreementBetweenTheMainlandAndHK,
            AgreementBetweenTheMainlandAndHK_CN
          )}
        />
      </div>

      <div className="mt-[24px]" id={CEPAAgreements_ids.supplement_X_to_CEPA}>
        <Accordion
          title={x_to_CEPA as string}
          details={getSingleNode(X_to_CEPA, X_to_CEPA_CN)}
        />
      </div>

      <div className="mt-[24px]" id={CEPAAgreements_ids.supplement_IX_to_CEPA}>
        <Accordion
          title={ix_to_CEPA as string}
          details={getSingleNode(IX_to_CEPA, IX_to_CEPA_CN)}
        />
      </div>

      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.supplement_VIII_to_CEPA}
      >
        <Accordion
          title={viii_to_CEPA as string}
          details={getSingleNode(VIII_to_CEPA, VIII_to_CEPA_CN)}
        />
      </div>

      <div className="mt-[24px]" id={CEPAAgreements_ids.supplement_VII_to_CEPA}>
        <Accordion
          title={vii_to_CEPA as string}
          details={getSingleNode(VII_to_CEPA, VII_to_CEPA_CN)}
        />
      </div>
    </div>
  );
};
