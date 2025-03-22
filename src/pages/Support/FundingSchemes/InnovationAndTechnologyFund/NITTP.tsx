import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `New Industrialisation and Technology Training Programme (NITTP)`,
    NITTP_subsidises: `NITTP subsidises local companies on a`,
    matching_basis: `2(Government):1(enterprise) matching basis`,
    to_train_their_staff: `to train their staff in advanced technologies, especially those related to "New Industrialisation". The Vocational Training Council administers the NITTP and serves as its Secretariat.`,
  },
  cn: {
    title: `New Industrialisation and Technology Training Programme (NITTP)`,
    NITTP_subsidises: `NITTP subsidises local companies on a`,
    matching_basis: `2(Government):1(enterprise) matching basis`,
    to_train_their_staff: `to train their staff in advanced technologies, especially those related to "New Industrialisation". The Vocational Training Council administers the NITTP and serves as its Secretariat.`,
  },
};

export const NITTP: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, NITTP_subsidises, matching_basis, to_train_their_staff } =
    page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.itf.gov.hk/en/funding-programmes/nurturing-talent/nittp/index.html"
          linkColor="#000"
        >
          {title}
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">
        {NITTP_subsidises}&nbsp;
        <span className="text-newPrimary font-semibold">{matching_basis}</span>
        &nbsp;{to_train_their_staff}
      </p>
    </div>
  );
};
