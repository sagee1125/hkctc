import React from "react";

export const ExhibitionProgramme: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[12px] items-center">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">HKCTC Exhibition Programme</p>
      </div>
      <p className="mt-[24px]">
        With a view to encouraging the testing and certification (T&C) bodies to
        invest in talent training and development, while also commending those
        T&C practitioners who has striven for continuous learning and
        professional development, and/or contributed to service quality
        improvement.
      </p>
      <br />
      <p>
        The Hong Kong Council for Testing and Certification (HKCTC) launched the
        first “Testing and Certification Manpower Development Award Scheme” in
        2021. Having regard to the favourable feedback from the T&C sector,
        HKCTC organised in 2023 again the Award Scheme (the 2023 - 24 Award
        Scheme).
      </p>
    </div>
  );
};
