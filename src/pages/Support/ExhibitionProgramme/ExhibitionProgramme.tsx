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
    hkctc_exhibition_programme: "HKCTC Exhibition Programme",
    hkctc_sets_up:
      "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services to worldwide buyers and traders across the world.",
    hkctc_invites:
      "HKCTC invites accredited T&C organisations every year to make use of the HKCTC booth at selected trade shows to reach out to potential users all over the world. HKCTC will bear the booth rental, design and production costs, and coordinate the logistics arrangements, whereas the T&C organisations will deploy their staff at the booth to assist in promoting the strengths of the Hong Kong T&C industry.",
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
