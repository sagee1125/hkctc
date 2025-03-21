import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";

const specificCommitments = [
  {
    comments:
      "To allow testing organisations in Hong Kong to cooperate with designated Mainland organisations to undertake testing of products for the China Compulsory Certification (CCC) System on all products that require CCC. These testing organisations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent of performing testing of the relevant products under the CCC System. Cooperation arrangements should comply with relevant requirements in the Regulations on Certification and Accreditation of the People's Republic of China.",
    implementation: "(See Implementation Guide promulgated in May 2020)",
  },
  {
    comments:
      "To allow certification bodies in Hong Kong to cooperate with Mainland CCC certification bodies on CCC factory inspection through assigning inspectors to carry out such inspection of factories manufacturing CCC products. These certification bodies have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent of performing certification of relevant products under the CCC System.",
    implementation: "(See Implementation Guide promulgated in May 2020)",
  },
  {
    comments:
      "To allow certification bodies in Hong Kong to cooperate with Mainland CCC certification bodies to select post-certification test samples at factories manufacturing CCC products. These certification bodies have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent of performing certification of relevant products under the CCC System.",
    implementation: "(See Implementation Guide promulgated in May 2020)",
  },
  {
    comments:
      "In the area of voluntary certification, to allow testing organisations in Hong Kong to cooperate with Mainland certification bodies to undertake testing of products manufactured or processed in Hong Kong or the Mainland. These testing organisations have to be accredited by the accreditation body of the Government of the Hong Kong Special Administrative Region to be competent in performing testing of the relevant products.",
    implementation: "(See Implementation Guide promulgated in Apr 2015)",
  },
  {
    comments:
      'To implement, on a pilot basis, a mutual recognition arrangement of certification and relevant testing business among Guangdong, Hong Kong and Macao in the China (Guangdong) Pilot Free Trade Zone, with a view to carry out "certified once, tested once, and results accepted by three places. "',
    implementation: "(See Implementation Guide promulgated in Sep 2017)",
  },
  {
    comments:
      "On the basis of mutual trust and mutual benefit, to allow testing and certification organisations in Hong Kong to cooperate with the Mainland testing and certification organisations in respect of acceptance of testing data (results). Specific cooperation arrangements are subject to further discussion.",
  },
  {
    comments:
      "To allow contractual service providers employed by Hong Kong service suppliers, in the mode of movement of natural persons, to provide services under this industry or sub-industry on the Mainland.",
    implementation: "(See Implementation Guide promulgated in Jul 2015)",
  },
];

export const AgreementOnTradeInServicesClauses: React.FC = () => {
  return (
    <div>
      <SquareTitle title="Agreement on Trade in Services - Clauses" />
      <p className="text-heading-l my-[24px]">
        Liberalisation of Trade in Services (extracted from Table 2 of Annex 1
        of the Agreement on Trade in Services)
      </p>
      <p className="text-heading-m mb-[24px]">Sectors or sub-sectors</p>
      <p className="text-body-m">1. Business Services</p>
      <p className="text-body-m">F. Other Business Services</p>
      <p className="text-body-m">
        e. Technical testing and analysis services (CPC8676) and Product testing
        services (CPC749)
      </p>
      <p className="my-[24px] text-heading-m">Specific commitments</p>
      <p className="text-italic-s italic">Effective from 1 March 2025</p>
      <ul
        style={{ listStyleType: "decimal", paddingLeft: "20px" }}
        className="text-body-m"
      >
        {specificCommitments.map((commit, index) => (
          <div key={index}>
            <br />
            <li>{commit.comments}</li>
            {commit.implementation && (
              <p className="italic text-italic-s mt-[24px]">
                {commit.implementation}
              </p>
            )}
          </div>
        ))}
      </ul>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
