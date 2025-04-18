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
    title: `新型工業化及科技培訓計劃`,
    NITTP_subsidises: `「新型工業化及科技培訓計劃」資助本地企業以`,
    matching_basis: `2（政府）：1（企業）的配對形式`,
    to_train_their_staff: `讓其員工接受高端科技培訓，尤其是與「新型工業化」有關的培訓。計劃由職業訓練局管理及擔任秘書處。`,
  },
};

export const NITTP: React.FC = () => {
  const { language, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { title, NITTP_subsidises, matching_basis, to_train_their_staff } =
    page_text;

  const linkMapping: Record<Language, string> = {
    [Language.EN]:
      "https://www.itf.gov.hk/en/funding-programmes/nurturing-talent/nittp/index.html",
    [Language.ZH_TW]:
      "https://www.itf.gov.hk/tc/funding-programmes/nurturing-talent/nittp/index.html",
    [Language.ZH_CN]:
      "https://www.itf.gov.hk/sc/funding-programmes/nurturing-talent/nittp/index.html",
  };

  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link outerLink={linkMapping[language]} linkColor="#000">
          {title as string}
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">
        {NITTP_subsidises as string}&nbsp;
        <span className="text-newPrimary font-semibold">
          {matching_basis as string}
        </span>
        &nbsp;{to_train_their_staff as string}
      </p>
    </div>
  );
};
