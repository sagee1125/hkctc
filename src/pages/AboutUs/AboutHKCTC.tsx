import React from "react";
import { useSettings } from "../../context";

export const AboutHKCTC: React.FC = () => {
  const { getPageText } = useSettings();

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
        "The Hong Kong Council for Testing and Certification (HKCTC) was established in September 2009 to advise the Government on the overall development strategy of the testing and certification industry. Members of the Council include practitioners from the testing and certification industry, business industry, professional organisations as well as representatives of the relevant public bodies and government departments. The Innovation and Technology Commission provides support to the Council.",
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
      secretary: "Secretary",
      secretary_manager: "Senior Manager (Testing and Certification)",
      about_logo: "About HKCTC Logo",
      inspired_by: `Inspired by the unified precision of a microscope, which is a combination of meticulous accuracy of scientific enquiry and the harmony represented by circles, the new HKCTC logo encapsulates the essence of the inclusivity and collaboration; innovation and quality; unifying force and scientific rigour.  This new logo is a cornerstone of HKCTC’s brand evolution, visually expressing our tagline - Catalysing Excellence.`,
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
        "香港檢測和認證局於2009年9月成立，就行業的整體發展策略向政府提供意見。成員包括業界從業員，以及商界、專業團體、相關公營機構和政府部門的代表。",
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
      secretary: "秘書",
      secretary_manager: "高級經理（檢測和認證）",
      about_logo: "關於香港檢測和認證局的標誌",
      inspired_by:
        "香港檢測和認證局的全新標誌設計靈感源於顯微鏡所體現的統一精準概念，它融合了科學研究的嚴謹精確以及圓形所代表的和諧。新標誌充分展現了包容與協作、創新與品量、凝聚力與科學嚴謹的精髓，是香港檢測和認證局品牌發展歷程中的基石，以視覺形式詮釋了我們的標語：匯創卓越。",
    },
  };
  const page_text = getPageText(multilingual);

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
    secretary,
    secretary_manager,
    about_logo,
    inspired_by,
  } = page_text;
  return (
    <div className="w-full text-justify">
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px]">
        <p className="text-heading-m">{terms_of_ref as string}</p>
        <div className="text-body-m mt-[16px]">
          <p>{to_advise as string}</p>
          <ul className="ml-1">
            {(refs as string[]).map((r, index) => (
              <li className="flex flex-wrap text-justify" key={index}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="my-[24px] text-body-m text-justify">{heading as string}</p>
      <div className="text-heading-l">{membership as string}</div>
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
      <div className={`flex flex-col gap-[24px] mt-[22px]`}>
        <div>
          <p className="text-heading-m">{chairman as string}</p>
          <p className="text-highlight-l mt-[8px]">{prof_WWT as string}</p>
        </div>
        <div>
          <p className="text-heading-m mb-[8px]">
            {non_official_members as string}
          </p>
          {(member_names as string[]).map((name, index) => (
            <p key={index} className="text-body-m">
              {name}
            </p>
          ))}
        </div>
      </div>
      <p className="text-heading-m mt-[22px] mb-[8px]">{members as string}</p>
      {(non_official_member_name as string[]).map((name, index) => (
        <p key={index} className="text-body-m">
          {name}
        </p>
      ))}

      <p className="text-heading-m mt-[22px] mb-[8px]">{secretary as string}</p>
      <p className="text-body-m">{secretary_manager as string}</p>

      <hr className="mt-[24px]" />
      <div className="mt-[22px] flex flex-col gap-[24px]">
        <p className="text-heading-l">{about_logo as string}</p>
        <img
          className="w-full"
          src={`${process.env.PUBLIC_URL}/assets/about/transition.gif`}
          alt={"pass"}
        />
        <p className="text-body-m">{inspired_by as string}</p>
      </div>
    </div>
  );
};
