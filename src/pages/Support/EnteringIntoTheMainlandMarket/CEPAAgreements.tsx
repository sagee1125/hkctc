import React, { useEffect, useState } from "react";
import { Accordion, SquareTitle } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { useNavigate } from "react-router-dom";

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
export const CEPAAgreements: React.FC = () => {
  const navigate = useNavigate();

  const agreementMap: Record<string, React.ReactNode> = {
    "Latest development": (
      <>
        <p className="text-body-m">
          On 9 October 2024, the Second Agreement Concerning Amendment to the
          Agreement on Trade in Services (“the Amendment Agreement II”) was
          signed between the Mainland and HKSAR. The Amendment Agreement II sets
          out the following further liberalisation measures:
        </p>
        <br />
        <li className="text-body-m">
          On the geographical coverage of&nbsp;
          <span className="text-newPrimary !text-highlight-m">
            CCC factory inspection
          </span>
          &nbsp;that can be undertaken by qualified certification bodies in Hong
          Kong in collaboration with designated Mainland organisations: To
          expand from manufacturers located in the whole Mainland&nbsp;
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
          &nbsp;that can be undertaken by qualified certification bodies in Hong
          Kong in collaboration with designated Mainland organisations: To&nbsp;
          <span className="text-newPrimary text-body-m">expand</span>&nbsp;from
          manufacturers located in the whole Mainland&nbsp;
          <span className="text-newPrimary !text-highlight-m">
            to manufacturers in any place (including places outside Mainland
            China)
          </span>
          .
        </li>
        <br />
        <p className="text-body-m">
          The above measures will come into effect on 1 March 2025. The State
          Administration for Market Regulation will promulgate the
          implementation guide in due course.
        </p>
      </>
    ),
    "November 2020": (
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
          inspection bodies related to CCC. The announcement clearly stated that
          since 13 September 2020, the State Administration for Market
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
    "November 2019": (
      <>
        <p className="text-body-m">
          On 21 November 2019, an Agreement (“
          <span
            className="text-newPrimary underline !text-highlight-s cursor-pointer"
            onClick={() => {
              navigate("/support/agreement_on_trade_in_services_clauses");
            }}
          >
            Amendment Agreement
          </span>
          ”) was signed between the Mainland and HKSAR to amend the Services
          Agreement. The Amendment Agreement sets out the following further
          liberalisation measures:
        </p>
        <br />
        <li className="text-body-m">
          On the scope of testing of CCC products that can be undertaken by
          qualified Hong Kong testing organisations in collaboration with
          designated Mainland organisations: To expand from products processed
          or manufactured in the Mainland or processed in Hong Kong to products
          processed or manufactured in any place (including places outside
          China).
        </li>
        <br />
        <li className="text-body-m">
          On the geographical coverage of CCC factory inspection that can be
          undertaken by qualified certification bodies in Hong Kong in
          collaboration with designated Mainland organisations: To expand from
          manufacturers located in the China (Guangdong) Pilot Free Trade Zone
          to manufacturers in the whole Mainland; and to add a new task that can
          be undertaken by qualified certification bodies in Hong Kong, i.e. the
          selection of post-certification test samples at factories
          manufacturing CCC products in the whole Mainland.
        </li>
        <br />
        <p className="text-body-m">
          The above measures came into effect on 1 June 2020. The Certification
          and Accreditation Administration of the People’s Republic of China
          (“CNCA”) has promulgated the&nbsp;
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
    "December 2018": (
      <>
        <p className="text-body-m">
          In December 2018, by way of Exchange of Letters, the Mainland revised
          the Services Agreement, with a view to further opening up the China
          Compulsory Certification (“CCC”) market to Hong Kong. The new measure
          allows Hong Kong testing organisations to cooperate with designated
          Mainland certification bodies to undertake&nbsp;
          <span
            className="!text-highlight-m underline text-newPrimary cursor-pointer"
            onClick={() => {
              navigate("/support/CCC_testing");
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
  };
  const [agreementType, setAgreementType] = useState<string>(
    Object.keys(agreementMap)[0]
  );
  const scrollId = new URLSearchParams(window.location.search).get("scroll_id");

  useEffect(() => {
    const element = document.getElementById(scrollId as string);

    if (scrollId && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollId]);

  return (
    <div className="w-full">
      <SquareTitle title="CEPA Agreements" />

      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.agreement_on_trade_in_services}
      >
        <Accordion
          title={"Agreement on Trade in Services"}
          details={
            <div>
              <p className="text-body-m mt-[16px]">
                The&nbsp;
                <span
                  className="text-newPrimary text-linked-m underline cursor-pointer !text-linked-m"
                  onClick={() => {
                    navigate("/support/agreement_on_trade_in_services_clauses");
                  }}
                >
                  Agreement on Trade in Services
                </span>
                &nbsp;(“The Services Agreement”) was signed between the Mainland
                and HKSAR in November 2015. In addition to introducing the new
                liberalisation measure of implementing, on a pilot basis, a
                mutual recognition arrangement of certification and relevant
                testing business among Guangdong, Hong Kong and Macao in the
                China (Guangdong) Pilot Free Trade Zone, with a view to carrying
                out "certified once, tested once, and results accepted by three
                places".
              </p>
              <br />
              <p className="text-body-m">
                The Services Agreement covers and consolidates commitments
                (relating to liberalisation of trade in services and the testing
                and certification sector) provided in CEPA and its Supplements
                and also the Guangdong Agreement. The Mainland has formulated
                an&nbsp;
                <a
                  href="https://www.hkctc.gov.hk/en/doc/201902_CEPA_TradeinServices_ImplementationGuide_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  Implementation Guide
                </a>
                , which provides further details of the new liberalisation
                measure covered in the Services Agreement.
              </p>
              <div className="mt-[16px]">
                <div className="flex flex-wrap gap-[8px]">
                  {Object.keys(agreementMap).map((btn, index) => {
                    const isActivated = btn === agreementType;
                    return (
                      <button
                        key={index}
                        className="p-2 transition-all duration-800 ease-in-out"
                        style={
                          isActivated ? activatedButtonStyle : normalButtonStyle
                        }
                        onClick={() => {
                          setAgreementType(btn);
                        }}
                      >
                        <p className="px-[12px] text-highlight-xs">{btn}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-[16px]">{agreementMap[agreementType]}</div>
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
          title={"Agreement on Trade in Goods"}
          details={
            <div className="text-body-m">
              <span
                className="!text-highlight-m underline text-newPrimary cursor-pointer"
                onClick={() => {
                  navigate("/support/agreement_on_trade_in_goods_clauses");
                }}
              >
                The Agreement on Trade in Goods
              </span>
              &nbsp;was signed between the Mainland and HKSAR in December 2018.
              It contains several exploratory provisions on mutual recognition
              of testing and certification results between the two sides.
            </div>
          }
        />
      </div>
      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.agreement_on_economic_and_technical_cooperation}
      >
        <Accordion
          title={"Agreement on Economic and Technical Cooperation"}
          details={
            <>
              <p className="text-body-m">
                <span
                  className="!text-highlight-m underline text-newPrimary cursor-pointer"
                  onClick={() => {
                    navigate(
                      "/support/agreement_on_economic&technical_cooperation_clauses"
                    );
                  }}
                >
                  The Agreement on Economic and Technical Cooperation
                </span>
                &nbsp;was signed between the Mainland and HKSAR in June 2017.
                New articles related to testing and certification include -
              </p>
              <br />
              <p className="text-body-m">
                Article 23(7): Actively consider recommending an eligible
                certification body located in Hong Kong to join the
                International Electrotechnical Commission System of Conformity
                Assessment Schemes for Electrotechnical Equipment and Components
                (IECEE) as a National Certification Body (NCB) of China; and
              </p>
              <br />
              <p className="text-body-m">
                Article 23(8): Consider applications of eligible certification
                bodies set up by Hong Kong enterprises in the Mainland to become
                designated certification bodies under the China Compulsory
                Certification (CCC) system.
              </p>
            </>
          }
        />
      </div>

      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.mainland_and_hong_kong_agreement}
      >
        <Accordion
          title={
            "Agreement between the Mainland and Hong Kong on Achieving Basic Liberalisation of Trade in Services in Guangdong"
          }
          details={
            <>
              <p className="text-body-m">
                <span
                  className="!text-highlight-m underline text-newPrimary cursor-pointer"
                  onClick={() => {
                    navigate("/support/guangdong_agreement_clauses");
                  }}
                >
                  The Agreement between the Mainland and Hong Kong on Achieving
                  Basic Liberalisation of Trade in Services in Guangdong
                  (Guangdong Agreement)
                </span>
                &nbsp;was signed between the Mainland and HKSAR in December
                2014. It includes measures allowing testing organisations in
                Hong Kong to cooperate with designated Mainland organisations to
                undertake testing of products in the "audio and visual
                apparatus" category of the&nbsp;
                <span
                  className="!text-highlight-m underline text-newPrimary cursor-pointer"
                  onClick={() => {
                    navigate("/support/CCC_testing");
                  }}
                >
                  China Compulsory Certification (CCC)
                </span>
                &nbsp;system that are designed and prototyped in Hong Kong, as
                well as processed or manufactured in Guangdong Province.
              </p>
              <br />
              <p className="text-body-m">
                The scope of testing services that can be provided by Hong Kong
                testing organisations in the area of voluntary certification has
                been expanded to products manufactured or processed in Hong Kong
                or the Mainland.
              </p>

              <p className="text-body-m">
                Moreover, with respect to the mode of commercial presence,
                except for those inconsistent/inapplicable measures reserved as
                well as the horizontal management measures, the Guangdong
                Agreement offers local testing and certification sector same
                treatment as the Mainland enterprises in terms of market access
                requirement in Guangdong Province.
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
          }
        />
      </div>

      <div className="mt-[24px]" id={CEPAAgreements_ids.supplement_X_to_CEPA}>
        <Accordion
          title={"Supplement X to CEPA"}
          details={
            <>
              <p className="text-body-m">
                <span
                  className="!text-newPrimary underline !text-highlight-m cursor-pointer"
                  onClick={() => {
                    navigate("/support/supplement_X_to_CEPA_clauses");
                  }}
                >
                  Supplement X to CEPA
                </span>
                &nbsp;was signed between the Mainland and HKSAR in August 2013.
                It introduces, on a pilot basis, the expansion of the scope from
                food testing services for the purpose of certification that can
                be undertaken by Hong Kong testing organisations from food to
                other areas of voluntary product certification.
              </p>
              <br />
              <p className="text-body-m">
                Besides, in the participation of Mainland testing and
                certification activities, same treatment is accorded to relevant
                organisations set up in the Mainland by Hong Kong service
                suppliers. Contractual service providers employed by Hong Kong
                service suppliers are allowed to provide related services in the
                Mainland in the mode of movement of natural persons.
              </p>
              <br />
              <p className="text-body-m">
                The Mainland has formulated two Implementation Guides (
                <a
                  href="https://www.hkctc.gov.hk/en/doc/CEPA_X_Implementation_details_natural_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  measure on the movement of natural persons, other measures
                </a>
                ), which provide further details for the implementation of these
                liberalisation measures. A list of Mainland certification bodies
                and their scope of services in respect of voluntary
                certification are available at the&nbsp;
                <a
                  href="https://www.cnca.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  website of CNCA
                </a>
                .
              </p>
            </>
          }
        />
      </div>

      <div className="mt-[24px]" id={CEPAAgreements_ids.supplement_IX_to_CEPA}>
        <Accordion
          title={"Supplement IX to CEPA"}
          details={
            <>
              <p className="text-body-m">
                <span
                  className="!text-newPrimary underline !text-highlight-m cursor-pointer"
                  onClick={() => {
                    navigate("/support/supplement_IX_to_CEPA_clauses");
                  }}
                >
                  Supplement IX to CEPA
                </span>
                &nbsp;was signed between the Mainland and HKSAR in June 2012.
                Starting from January 2013, the scope of testing services for
                supporting certification in the Mainland that can be undertaken
                by Hong Kong testing organisations is expanded, on a pilot basis
                in Guangdong Province, to cover food.
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
                &nbsp;for this liberalisation measure. The Guide covers, among
                others, the applicable food-related certification schemes and
                the procedures for cooperation between Hong Kong testing
                organisations and Mainland certification bodies.
              </p>
            </>
          }
        />
      </div>

      <div
        className="mt-[24px]"
        id={CEPAAgreements_ids.supplement_VIII_to_CEPA}
      >
        <Accordion
          title={"Supplement VIII to CEPA"}
          details={
            <>
              <p className="text-body-m">
                <span
                  className="!text-newPrimary underline !text-highlight-m cursor-pointer"
                  onClick={() => {
                    navigate("/support/supplement_VIII_to_CEPA_clauses");
                  }}
                >
                  Supplement VIII to CEPA
                </span>
                &nbsp;was signed between the Mainland and HKSAR in December
                2011. Starting from April 2012, the measure allows, on the basis
                of Supplement VII to CEPA, testing organisations in Hong Kong to
                cooperate with designated Mainland certification bodies to
                undertake product testing for the&nbsp;
                <span
                  className="!text-newPrimary underline !text-highlight-m cursor-pointer"
                  onClick={() => {
                    navigate("/support/CCC_testing");
                  }}
                >
                  China Compulsory Certification (CCC) System
                </span>
                &nbsp;for all existing products processed in Hong Kong that
                require CCC.
              </p>
            </>
          }
        />
      </div>

      <div className="mt-[24px]" id={CEPAAgreements_ids.supplement_VII_to_CEPA}>
        <Accordion
          title={"Supplement VII to CEPA"}
          details={
            <>
              <p className="text-body-m">
                <span
                  className="!text-newPrimary underline !text-highlight-m cursor-pointer"
                  onClick={() => {
                    navigate("/support/supplement_VII_to_CEPA_clauses");
                  }}
                >
                  Supplement VII to CEPA
                </span>
                &nbsp;was signed between the Mainland and the HKSAR in May 2010.
                It includes liberalisation measures of the&nbsp;
                <span
                  className="!text-newPrimary underline !text-highlight-m cursor-pointer"
                  onClick={() => {
                    navigate("/support/CCC_testing");
                  }}
                >
                  China Compulsory Certification (CCC) System
                </span>
                &nbsp;and arrangements to help testing organisations in Hong
                Kong to become recognised testing organisations under&nbsp;
                <span className="!text-highlight-m underline text-newPrimary">
                  international multilateral systems on mutual recognition
                </span>
                &nbsp;of testing and certification that are open to national
                member bodies (such as the IECEE/CB system). On liberalising the
                CCC market,
              </p>
              <br />
              <p className="text-body-m">
                Hong Kong testing organisations are allowed to partner with
                designated Mainland certification bodies to undertake testing on
                four selected products processed in Hong Kong (i.e. toys;
                switches, protective devices and connection devices for
                electrical installations; information technology equipment; and
                lighting apparatus) that require CCC.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
};
