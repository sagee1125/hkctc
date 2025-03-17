import React from "react";
import { Language, useSettings } from "../../context";

export const AboutHKCTC: React.FC = () => {
  const { language } = useSettings();

  const multilingual = {
    en: {
      terms_of_ref: "Terms of Reference",
      to_advise: "To advise the Chief Executive on -",
      refs: [
        "the overall development strategy of the industry;",
        "new business opportunities worth exploring for the industry, having regard to latest developments in the Mainland and overseas markets; and",
        "measures needed to raise the professional standing and community awareness of the industry.",
      ],
      heading:
        "The Hong Kong Council for Testing and Certification (HKCTC) was established in September 2009 to advise the Government on the overall development strategy of the testing and certification sector. Members of the Council include practitioners from the testing and certification sector, business sector, professional organisations as well as the relevant public bodies and government departments. The Innovation and Technology Commission provides support to the Council.",
      membership: "Membership",
      chairman: "Chairman",
      prof_WWT: "Professor WONG Wing-tak",
      members: "Members",
      member_names: [
        "Ms Bess CHOI Siu-fong",
        "Mr Martin FAN",
        "Dr Crystal FOK Lo-ming",
        "Dr Gray HO Koon-sing",
        "Dr Emmie HO Ngai-man",
        "Ms Denise HOU Yuen-chi",
        "Dr Lesly LAM Lik-shan",
        "Ms Fiona LEE Tsz-ching",
        "Dr Ann LEUNG",
        "Hon Kenneth LEUNG Yuk-wai, JP",
        "Dr Wingco LO Kam-wing, BBS, JP",
        "Mr Robert Andrew LUI Chi-wang",
        "Mr Joseph POON Tim-leung",
        "Ir Dr Fanny TANG Wai-fan",
        "Ms Gilly WONG Fung-han",
        "Mr Wilson WONG Wing-wa",
      ],
      non_official_members: "Non-Official Members",
      non_official_member_name: [
        "Executive Director of Hong Kong Productivity Council or representative",
        "Executive Director of Hong Kong Trade Development Council or representative",
        "Executive Director of Vocational Training Council or representative",
        "Government Chemist or representative",
        "Commissioner for Innovation and Technology or representative",
      ],
    },
    cn: {
      terms_of_ref: "職權範圍",
      to_advise: "就以下事宜向行政長官提供意見 -",
      refs: [
        "行業的整體發展策略；",
        "因應內地及海外市場的最新發展，而適宜為行業開拓的新商機；以及",
        "為提高行業的專業地位，加強公眾對行業的認識，而須採取的措施。",
      ],
      heading:
        "The Hong Kong Council for Testing and Certification (HKCTC) was established in September 2009 to advise the Government on the overall development strategy of the testing and certification sector. Members of the Council include practitioners from the testing and certification sector, business sector, professional organisations as well as the relevant public bodies and government departments. The Innovation and Technology Commission provides support to the Council.",
      membership: "成員",
      chairman: "主席",
      prof_WWT: "黃永德教授",
      members: "成員",
      member_names: [
        "蔡少芳女士",
        "樊兆中先生",
        "霍露明博士",
        "何觀陞博士",
        "何毅雯博士",
        "侯元琪女士",
        "林力山博士",
        "李芷澄女士",
        "梁雪雁博士",
        "梁毓偉議員, JP",
        "盧金榮博士, BBS, JP",
        "呂志宏先生",
        "潘添良先生",
        "鄧慧芬博士",
        "黃鳳嫺女士",
        "黃永華先生",
      ],
      non_official_members: "非官方成員",
      non_official_member_name: [
        "香港生產力促進局總裁或代表",
        "香港貿易發展局總裁或代表",
        "職業訓練局執行幹事或代表",
        "政府化驗師或代表",
        "創新科技署署長或代表",
      ],
    },
  };
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const {
    terms_of_ref,
    refs,
    to_advise,
    member_names,
    members,
    membership,
    chairman,
    prof_WWT,
    heading,
    non_official_members,
    non_official_member_name,
  } = page_text;
  return (
    <div className="w-full mb-[48px] text-justify">
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px]">
        <p className="text-heading-m">{terms_of_ref}</p>
        <div className="text-body-m mt-[16px]">
          <p>{to_advise}</p>
          <div className="ml-1">
            {refs.map((r, index) => (
              <div key={index} className="flex flex-row gap-[8px]">
                <div>
                  <div className="w-[6px] h-[6px] bg-black rounded-full mt-2" />
                </div>

                <div className="flex flex-wrap">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="my-[24px] text-body-m">{heading}</p>
      <p className="text-heading-l">{membership}</p>
      <p className="text-italic-s italic mt-[8px]">2024-2025</p>
      <div className={`flex flex-col gap-[24px] mt-[22px]`}>
        <div>
          <p className="text-heading-m">{chairman}</p>
          <p className="text-highlight-l mt-[8px]">{prof_WWT}</p>
        </div>
        <div>
          <p className="text-heading-m mb-[8px]">{members}</p>
          {member_names.map((name, index) => (
            <p key={index} className="text-highlight-extra">
              {name}
            </p>
          ))}
        </div>
      </div>
      <p className="text-heading-m mt-[22px] mb-[8px]">
        {non_official_members}
      </p>
      {non_official_member_name.map((name, index) => (
        <p key={index} className="text-highlight-extra">
          {name}
        </p>
      ))}
    </div>
  );
};
