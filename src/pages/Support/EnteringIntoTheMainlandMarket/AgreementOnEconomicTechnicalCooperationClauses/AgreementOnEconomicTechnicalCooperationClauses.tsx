import React from "react";
import { InternalBackButton, SquareTitle } from "../../../../components";
import { navItemEnum } from "../../../../const";

export const AgreementOnEconomicTechnicalCooperationClauses: React.FC = () => {
  return (
    <div className="flex-1">
      <SquareTitle title="Agreement on Economic and Technical Cooperation - Clauses" />
      <p className="text-heading-l my-[24px]">Article 23(4)</p>
      <p className="text-body-m">
        Relevant authorities of the two sides will make use of existing
        cooperation channels to strengthen cooperation in the innovation of
        certification and accreditation systems, and support the certification,
        accreditation, inspection and testing organisations to conduct technical
        exchanges and cooperation.
      </p>

      <hr className="my-[24px]" />

      <p className="text-heading-l">Article 23(6)</p>
      <br />
      <p className="text-body-m">
        Actively promote cooperation between Hong Kong's testing laboratories
        and Mainland's certification bodies which are members of international
        multilateral systems on mutual recognition of testing and certification
        that are open to national member bodies (such as the IECEE/CB system),
        so that Hong Kong's testing laboratories can be recognised under these
        multilateral systems.
      </p>

      <hr className="my-[24px]" />
      <p className="text-heading-l">Article 23(7)</p>
      <br />

      <p className="text-body-m">
        Actively consider recommending an eligible certification body located in
        Hong Kong to join the International Electrotechnical Commission System
        of Conformity Assessment Schemes for Electrotechnical Equipment and
        Components (IECEE) as a National Certification Body (NCB) of China.
      </p>

      <hr className="my-[24px]" />

      <p className="text-heading-l">Article 23(8)</p>
      <br />

      <p className="text-body-m">
        Consider applications of eligible certification bodies set up by Hong
        Kong enterprises in the Mainland to become designated certification
        bodies under the China Compulsory Certification (CCC) System.
      </p>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/support?section=${navItemEnum.entering_into_the_mainland_market}#2`}
      />
    </div>
  );
};
