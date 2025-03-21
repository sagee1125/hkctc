import React from "react";
import { SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    hkctc_exhibition_programme: "HKCTC Exhibition Programme",
    hkctc_sets_up:
      "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services to worldwide buyers and traders across the world.",
    hkctc_invites:
      "HKCTC invites accredited T&C organisations every year to make use of the HKCTC booth at selected trade shows to reach out to potential users all over the world. HKCTC will bear the booth rental, design and production costs, and coordinate the logistics arrangements, whereas the T&C organisations will deploy their staff at the booth to assist in promoting the strengths of the Hong Kong T&C industry.",
  },
  cn: {
    hkctc_exhibition_programme: "香港檢測和認證局展覽計劃",
    hkctc_sets_up:
      "香港檢測和認證局在本港、內地及海外的主要貿易展覽會設置攤位，向全球的買家、供應商和貿易商推廣香港檢測認證服務的優勢。",
    hkctc_invites:
      "香港檢測和認證局不時邀請獲認可而在港提供服務的檢測認證機構，在選定的貿易展覽會上，利用香港檢測和認證局的攤位，進行宣傳和接觸來自世界各地潛在的檢測認證服務用家。香港檢測和認證局會負責攤位的租賃、設計和設置費用，以及整體安排的統籌工作，而參與的檢測認證機構需派員駐場接待訪客並協助相關的推廣活",
  },
};

export const ExhibitionProgramme: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { hkctc_exhibition_programme, hkctc_sets_up, hkctc_invites } =
    page_text;

  return (
    <div className="w-full">
      <SquareTitle title={hkctc_exhibition_programme} />
      <p className="mt-[24px] text-body-m">
        {hkctc_sets_up}
        <br />
        <br />
        {hkctc_invites}
      </p>
    </div>
  );
};
