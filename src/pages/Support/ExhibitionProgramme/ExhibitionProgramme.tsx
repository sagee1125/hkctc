import React from "react";
import { SquareTitle } from "../../../components";

export const ExhibitionProgramme: React.FC = () => {
  return (
    <div className="w-full">
      <SquareTitle title="HKCTC Exhibition Programme" />
      <p className="mt-[24px]">
        HKCTC sets up booths at major trade shows in Hong Kong, Mainland and
        overseas to promote Hong Kong's testing and certification (T&C) services
        to worldwide buyers and traders across the world.
      </p>
      <br />
      <p>
        HKCTC invites accredited T&C organisations every year to make use of the
        HKCTC booth at selected trade shows to reach out to potential users all
        over the world. HKCTC will bear the booth rental, design and production
        costs, and coordinate the logistics arrangements, whereas the T&C
        organisations will deploy their staff at the booth to assist in
        promoting the strengths of the Hong Kong T&C sector.
      </p>
    </div>
  );
};
