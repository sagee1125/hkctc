import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

export const SMEExportMarketingFund: React.FC = () => {
  const { getPageText } = useSettings();

  const multilingual = {
    en: {
      title: `SME Export Marketing Fund`,
      this_scheme_aims_to: `This scheme aims to help SMEs expand their markets outside Hong Kong through participation in export promotion activities like exhibitions, trade fairs, trade missions, as well as advertising in trade publications targeting export markets and eligible trade websites.`,
      maximum: (
        <p className="text-body-m flex-grow min-w-0">
          The maximum amount of grant for each application is&nbsp;
          <span className="text-newPrimary font-semibold">
            50% of the total approved expenditure, subject to a ceiling of
            $100,000
          </span>
          . The maximum cumulative amount of grant which an SME may obtain is
          $400,000.
        </p>
      ),
    },
    cn: {
      title: `中小企業市場推廣基金`,
      this_scheme_aims_to: `中小企業市場推廣基金旨在鼓勵中小企業參與出口推廣活動，例如參加展覽會、商品展銷會、商業考察團，以及在以出口市場為目標對象的貿易刊物及合資格貿易網站刊登廣告，藉此協助他們擴展香港境外市場。`,

      maximum: (
        <p className="text-body-m flex-grow min-w-0">
          每宗申請可獲的最高資助額為
          <span className="text-newPrimary font-semibold">
            核准開支總額的50% ，上限為10萬元
          </span>
          。每家中小企業的累積資助上限為40萬元。
        </p>
      ),
    },
  };

  const page_text = getPageText(multilingual);

  const { title, this_scheme_aims_to, maximum } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.smefund.tid.gov.hk/english/emf/emf_objective.html"
          linkColor="#000"
        >
          {title as string}
        </Link>
      </div>

      <p className="text-body-m mt-[16px] mb-[24px]">
        {this_scheme_aims_to as string}
      </p>

      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
          aria-hidden="true"
        />
        {maximum as React.ReactNode}
      </div>
    </div>
  );
};

export const SMELoanGuaranteeScheme: React.FC = () => {
  const { getPageText } = useSettings();

  const multilingual = {
    en: {
      title: `SME Loan Guarantee Scheme`,
      this_scheme_aims_to: `This scheme aims to help SMEs secure loans from the participating lending institutions (PLIs) for business installations and equipment and working capital. Under the scheme, the Government acts as a guarantor for up to 50% of the loans approved by the PLIs.`,
      maximum: (
        <p className="text-body-m flex-grow min-w-0">
          The maximum amount of loan guarantee for&nbsp;
          <span className="text-black font-semibold">each SME</span>&nbsp;is $6
          million and the guarantee period is up to&nbsp;
          <span className="text-black font-semibold">5 years.</span>
        </p>
      ),
    },
    cn: {
      title: `中小企業信貸保證基金`,
      this_scheme_aims_to: `中小企業信貸保證基金旨在協助中小企業向參與計劃的貸款機構(參與貸款機構)取得貸款，用作購置營運設備及器材，或一般業務用途的營運資金。`,
      maximum: (
        <p className="text-body-m flex-grow min-w-0">
          根據這項計劃，政府為參與貸款機構批出的貸款提供最多50%的信貸保證。
          <span className="text-black font-semibold">每家中小企業</span>
          可獲的信貸保證上限為600萬元，保證期最長可達
          <span className="text-black font-semibold">五年</span>。
        </p>
      ),
    },
  };
  const page_text = getPageText(multilingual);

  const { title, this_scheme_aims_to, maximum } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.smefund.tid.gov.hk/english/sgs/sgs_objective.html"
          linkColor="#000"
        >
          {title as string}
        </Link>
      </div>
      <p className="text-body-m mt-[16px] mb-[24px]">
        {this_scheme_aims_to as string}
      </p>

      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/matching.svg`}
          alt={"matching"}
          aria-hidden="true"
        />
        {maximum as React.ReactNode}
      </div>
    </div>
  );
};
