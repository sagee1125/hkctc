import React from "react";
import { Language, useSettings } from "../../context";

export const PanelManpowerDevelopment: React.FC = () => {
  const { language } = useSettings();

  const multilingual = {
    en: {
      terms_of_ref: "Terms of Reference",
      refs: [
        "To serve as a platform for stakeholders to exchange views on the manpower development need of the testing and certification (T&C) industry;",
        "To promote cooperation among stakeholders to nurture the manpower needed by the T&C industry;",
        "To consider ways to strengthen the manpower resource to support the T&C industry; and",
        "To promote awareness of professional development of T&C personnel.",
      ],
      membership: "Membership",
      convener: "Convener",
      dr_WNM: "Dr Emmie HO Ngai-man",
      members: "Members",
      member_names: [
        "Mr CHOW Man-ho",
        "Dr Crystal FOK Lo-ming",
        "Dr Gray HO Koon-sing",
        "Dr Lotto LAI Kim-hung",
        "Dr Lesly LAM Lik-shan",
        "Dr George LAU Hing-keung",
        "Mr Daniel LEE",
        "Ms Fiona LEE Tsz-ching",
        "Mr Robert Andrew LUI Chi-wang",
        "Mr Joseph POON Tim-leung",
        "Ms SUEN Wai-lam",
        "Ms Gilly WONG Fung-han",
      ],
      official_members: "Official Members",
      official_member_name: [
        "General Manager, Qualifications Framework Secretariat or representative",
        "Executive Director of Vocational Training Council or representative",
        "Assistant Commissioner for Innovation and Technology (Quality Services)",
      ],
    },
    cn: {
      terms_of_ref: "職權範圍",
      refs: [
        "提供平台讓持份者就檢測和認證業的人力發展需求交流意見；",
        "促進各持份者之間的合作，培育檢測和認證業所需的人才；",
        "考慮加強人力資源的方法以支援檢測和認證業；以及",
        "提高對檢測和認證人員專業發展的認識。",
      ],

      membership: "成員",
      convener: "召集人",
      dr_WNM: "何毅雯博士",
      members: "成員",
      member_names: [
        "周文灝先生",
        "霍露明博士",
        "何觀陞博士",
        "黎劍虹博士",
        "林力山博士",
        "劉慶強博士",
        "李浩華先生",
        "李芷澄女士",
        "呂志宏先生",
        "潘添良先生",
        "孫瑋琳女士",
        "黃鳳嫺女士",
      ],
      official_members: "非官方成員",
      official_member_name: [
        "資歷架構秘書處總經理或其代表",
        "職業訓練局執行幹事或其代表",
        "創新科技署助理署長（品質事務）",
      ],
    },
  };
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const {
    terms_of_ref,
    refs,
    member_names,
    members,
    membership,
    convener,
    dr_WNM,
    official_members,
    official_member_name,
  } = page_text;

  return (
    <div className="w-full">
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] mb-[24px]">
        <p className="text-heading-m">{terms_of_ref}</p>
        <ul className="text-body-m mt-[16px]">
          {refs.map((r, index) => (
            <li key={index}>{r}</li>
          ))}
        </ul>
      </div>
      <p className="text-heading-l">{membership}</p>
      <p
        className="mt-[8px]"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "20px",
        }}
      >
        2024-2025
      </p>
      <div className="mt-[28px]">
        <p className="text-heading-m">{convener}</p>
        <p className="text-highlight-l mt-[8px]">{dr_WNM}</p>
      </div>

      <p className="text-heading-m mt-[32px] mb-[8px]">{members}</p>
      {member_names.map((name, index) => (
        <p key={index} className="text-body-m">
          {name}
        </p>
      ))}
      <p className="mt-[24px] text-heading-m mb-[8px]">{official_members}</p>
      <div className="text-body-m">
        {official_member_name.map((m, index) => (
          <p key={index}>{m}</p>
        ))}
      </div>
    </div>
  );
};
