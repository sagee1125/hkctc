import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

export const SMEExportMarketingFund: React.FC = () => {
  const { language } = useSettings();

  const multilingual = {
    en: {
      title: `SME Export Marketing Fund`,
      this_scheme_aims_to: `This scheme aims to help SMEs expand their markets outside Hong Kong through participation in export promotion activities like exhibitions, trade fairs, trade missions, as well as advertising in trade publications targeting export markets and eligible trade websites.`,
      maximum: `The maximum amount of grant for each application is 50% of the total approved expenditure, subject to a ceiling of $100,000. The maximum cumulative amount of grant which an SME may obtain is $400,000.`,
    },
    cn: {
      title: `SME Export Marketing Fund`,
      this_scheme_aims_to: `This scheme aims to help SMEs expand their markets outside Hong Kong through participation in export promotion activities like exhibitions, trade fairs, trade missions, as well as advertising in trade publications targeting export markets and eligible trade websites.`,
      maximum: `The maximum amount of grant for each application is 50% of the total approved expenditure, subject to a ceiling of $100,000. The maximum cumulative amount of grant which an SME may obtain is $400,000.`,
    },
  };

  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, this_scheme_aims_to } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.smefund.tid.gov.hk/english/emf/emf_objective.html"
          linkColor="#000"
        >
          {title}
        </Link>
      </div>

      <p className="text-body-m mt-[16px] mb-[24px]">{this_scheme_aims_to}</p>

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
  const { language } = useSettings();

  const multilingual = {
    en: {
      title: `SME Loan Guarantee Scheme`,
      this_scheme_aims_to: `This scheme aims to help SMEs secure loans from the participating lending institutions (PLIs) for business installations and equipment and working capital. Under the scheme, the Government acts as a guarantor for up to 50% of the loans approved by the PLIs.`,
      maximum: `The maximum amount of loan guarantee for each SME The is $6 million and the guarantee period is up to 5 years.`,
    },
    cn: {
      title: `SME Loan Guarantee Scheme`,
      this_scheme_aims_to: `This scheme aims to help SMEs secure loans from the participating lending institutions (PLIs) for business installations and equipment and working capital. Under the scheme, the Government acts as a guarantor for up to 50% of the loans approved by the PLIs.`,
      maximum: `The maximum amount of loan guarantee for each SME The is $6 million and the guarantee period is up to 5 years.`,
    },
  };
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, this_scheme_aims_to } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.smefund.tid.gov.hk/english/sgs/sgs_objective.html"
          linkColor="#000"
        >
          {title}
        </Link>
      </div>
      <p className="text-body-m mt-[16px] mb-[24px]">{this_scheme_aims_to}</p>

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
