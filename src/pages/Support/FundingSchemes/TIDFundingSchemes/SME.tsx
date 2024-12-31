import * as React from "react";

export const SMEExportMarketingFund: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">SME Export Marketing Fund</p>
      <p className="text-body-m mt-[16px] mb-[24px]">
        This scheme aims to help SMEs expand their markets outside Hong Kong
        through participation in export promotion activities like exhibitions,
        trade fairs, trade missions, as well as advertising in trade
        publications targeting export markets and eligible trade websites.
      </p>

      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The maximum amount of grant for each application is&nbsp;
          <span className="text-newPrimary font-semibold">
            50% of the total approved expenditure, subject to a ceiling of
            $100,000
          </span>
          . The maximum cumulative amount of grant which an SME may obtain is
          $400,000.
        </p>
      </div>
    </div>
  );
};

export const SMELoanGuaranteeScheme: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">SME Export Marketing Fund</p>
      <p className="text-body-m mt-[16px] mb-[24px]">
        This scheme aims to help SMEs secure loans from the participating
        lending institutions (PLIs) for business installations and equipment and
        working capital. Under the scheme, the Government acts as a guarantor
        for up to 50% of the loans approved by the PLIs.
      </p>

      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/matching.svg`}
          alt={"matching"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The maximum amount of loan guarantee for&nbsp;
          <span className="text-black font-semibold">each SME</span>&nbsp;The is
          $6 million and the guarantee period is up to&nbsp;
          <span className="text-black font-semibold">5 years.</span>
        </p>
      </div>
    </div>
  );
};
