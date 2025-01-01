import React from "react";

export const PanelManpowerDevelopment: React.FC = () => {
  const names = [
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
    "Ms Gilly WONG Fung-han,",
  ];

  return (
    <div className="w-full mb-[48px]">
      <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] mb-[24px]">
        <p className="text-heading-m">Terms of Reference</p>
        <div className="text-body-m mt-[16px]">
          <li>
            To serve as a platform for stakeholders to exchange views on the
            manpower development need of the testing and certification (T&C)
            sector;
          </li>
          <li>
            To promote cooperation among stakeholders to nurture the manpower
            needed by the T&C sector;
          </li>
          <li>
            To consider ways to strengthen the manpower resource to support the
            T&C sector; and
          </li>
          <li>
            To promote awareness of professional development of T&C personnel.
          </li>
        </div>
      </div>
      <p className="text-heading-l">Membership</p>
      <p className="text-italic-s italic mt-[8px]">2024-2025</p>
      <div className="mt-[28px]">
        <p className="text-heading-m">Convener</p>
        <p className="text-highlight-l mt-[8px]">Dr Emmie HO Ngai-man</p>
      </div>

      <p className="text-heading-m mt-[32px] mb-[8px]">Members</p>
      {names.map((name, index) => (
        <p key={index} className="text-highlight-extra">
          {name}
        </p>
      ))}
      <p className="mt-[24px] text-heading-m mb-[8px]">Official Members</p>
      <div className="text-highlight-extra mb-[48px]">
        <p>
          General Manager, Qualifications Framework Secretariat or
          representative
        </p>
        <p>
          Executive Director of Vocational Training Council or representative
        </p>
        <p>
          Assistant Commissioner for Innovation and Technology (Quality
          Services)
        </p>
      </div>
    </div>
  );
};
