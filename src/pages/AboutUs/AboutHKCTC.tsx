import React from "react";
import { useSettings } from "../../context";

export const AboutHKCTC: React.FC = () => {
  const { isPC } = useSettings();

  const names = [
    "Ms Bess CHOI Siu-fong",
    "Mr Martin FAN",
    "Dr Crystal Fok Lo-ming",
    "Dr Gray HO Koon-sing",
    "Dr Emmie Ho Ngai-man",
    "Ms Denise HOU Yuen-chi",
    "Dr Lesly Lam Lik-shan",
    "Ms Fiona Lee Tsz-ching",
    "Dr Ann LEUNG",
    "Hon Kenneth LEUNG Yuk-wai, JP",
    "Dr Wingco LO Kam-wing, BBS, JP",
    "Mr Robert Andrew LUI Chi-wang",
    "Mr Joseph POON Tim-leung",
    "Ir Dr Fanny TANG Wai-fan",
    "Ms Gilly WONG Fung-han",
    "Mr Wilson WONG Wing-wa",
  ];

  const reference: string[] = [
    "the overall development strategy of the industry;",
    "new business opportunities worth exploring for the industry, having regard to latest developments in the Mainland and overseas markets; and",
    "measures needed to raise the professional standing and community awareness of the industry.",
  ];

  return (
    <div className="w-full mb-[48px] text-justify">
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px]">
        <p className="text-heading-m">Terms of Reference</p>
        <div className="text-body-m mt-[16px]">
          <p>To advise the Chief Executive on -</p>
          <div className="ml-1">
            {reference.map((r, index) => (
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
      <p className="my-[24px] text-body-m">
        The Hong Kong Council for Testing and Certification (HKCTC) was
        established in September 2009 to advise the Government on the overall
        development strategy of the testing and certification sector. Members of
        the Council include practitioners from the testing and certification
        sector, business sector, professional organisations as well as the
        relevant public bodies and government departments. The Innovation and
        Technology Commission provides support to the Council.
      </p>
      <p className="text-heading-l">Membership</p>
      <p className="text-italic-s italic mt-[8px]">2024-2025</p>
      <div
        className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px] mt-[28px]`}
      >
        <div>
          <p className="text-heading-m">Chairman</p>
          <p className="text-highlight-l mt-[8px]">Professor WONG Wing-tak</p>
          <img
            className="w-auto h-auto mt-[24px]"
            src={
              process.env.PUBLIC_URL + "/assets/about/ProfessorWONGWing-tak.png"
            }
            alt="Professor WONG Wing-tak"
          />
        </div>
        <div>
          <p className="text-heading-m mb-[8px]">Members</p>
          {names.map((name, index) => (
            <p key={index} className="text-highlight-extra">
              {name}
            </p>
          ))}
        </div>
      </div>
      <p className="text-heading-m mt-[32px] mb-[8px]">Official Members</p>
      <div
        className="text-highlight-extra"
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        <p>
          Executive Director of Hong Kong Productivity Council or representative
        </p>
        <p>
          Executive Director of Hong Kong Trade Development Council or
          representative
        </p>
        <p>
          Executive Director of Vocational Training Council or representative
        </p>
        <p>Government Chemist or representative</p>
        <p>Commissioner for Innovation and Technology or representative</p>
      </div>
    </div>
  );
};
