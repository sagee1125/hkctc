import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";

const specificCommitments = [
  "In the area of voluntary certification, to allow testing organizations in Hong Kong to cooperate with Mainland certification bodies to undertake testing of products manufactured or processed in Hong Kong or in the Mainland. These testing organizations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region (i.e. the Hong Kong Accreditation Service) to be competent in performing testing for the relevant products.",
  `To allow testing organizations in Hong Kong to cooperate with designated Mainland organizations to undertake testing of products for the China Compulsory Certification (CCC) System. The products are under the "audio and visual apparatus" category of the CCC System, and have to be designed and prototyped in Hong Kong, as well as processed or manufactured in Guangdong Province. These testing organizations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region (i.e. the Hong Kong Accreditation Service) to be competent in performing testing for the relevant products under the CCC System.`,
];
export const GuangdongAgreementClauses: React.FC = () => {
  return (
    <div className="flex-1">
      <SquareTitle title="Guangdong Agreement - Clauses" />
      <p className="text-heading-l my-[24px]">
        Liberalisation of Trade in Services (extracted from Table 2 of Annex 1
        of the Guangdong Agreement)
      </p>
      <p className="text-heading-m mb-[24px]">Sectors or sub-sectors</p>
      <p className="text-body-m">1. Business Services</p>
      <p className="text-body-m">F. Other Business Services</p>
      <p className="text-body-m">
        e. Technical testing and analysis services (CPC8676)
      </p>
      <p className="mt-[24px] text-heading-m">Specific commitments</p>
      <ul
        style={{ listStyleType: "decimal", paddingLeft: "20px" }}
        className="text-body-m"
      >
        {specificCommitments.map((commit, index) => (
          <div key={index}>
            <br />
            <li>{commit}</li>
          </div>
        ))}
      </ul>
      <p className="text-italic-s italic mt-[24px]">
        An&nbsp;
        <a
          className="underline text-[#00E]"
          href="https://www.hkctc.gov.hk/en/doc/CEPA_GD_Agreement_imp_details_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Implementation Guide
        </a>
        &nbsp;was promulgated to provide details for the implementation of the
        two testing and certification related liberalisation measures in Table 2
        of Annex 1.
      </p>
      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
