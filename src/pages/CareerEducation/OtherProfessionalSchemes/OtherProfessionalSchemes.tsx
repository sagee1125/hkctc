import React from "react";
import { SquareTitle } from "../../../components";

export const OtherProfessionalSchemes: React.FC = () => {
  return (
    <div className="w-full">
      <SquareTitle title="Other Professional Schemes" />

      <p className="text-body-m mt-[24px]">
        There are other organisations which have developed various professional
        schemes to enhance professionalism and capability of testing and
        certification practitioners.
      </p>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]">HKIE Materials Engineers </p>

      <p className="text-body-m">
        Materials engineers offer necessary support to manufacturers, suppliers,
        construction companies and construction materials laboratories, etc. by
        ensuring quality and safety of construction materials and works.
        Applicants holding a materials-related engineering degree
        accredited/recognised by Hong Kong Institution of Engineers (HKIE) (or a
        degree in building, civil, chemical, environmental or structural
        engineering disciplines with two subjects in construction engineering
        materials), as well as possessing sufficient relevant working
        experience, may apply for the HKIE membership under its Materials
        Division. Details may be obtained at&nbsp;
        <a
          href="https://www.hkie.org.hk/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          HKIE’s website
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l mb-[24px]">
        Professional Certification Scheme for Testing Personnel
      </p>
      <p className="text-body-m">
        Developed by the Hong Kong Association of Testing, Inspection and
        Certification (HKTIC) with a sponsorship from Government's SME
        Development Fund, this scheme is a comprehensive scheme which provides
        certification of individuals seeking to demonstrate their knowledge
        and/or competence in their field of testing.
        <br />
        <br />
        Currently the scope of certification in the scheme covers Chemical
        Testing; Construction Materials Testing; Electrical Products Testing;
        Microbiological Testing; Textiles and Garments Testing; Toys and
        Hardlines Testing; Food Testing; Environmental Testing; Quality
        Assurance as well as Calibration. Full details may be obtained at its
        relevant&nbsp;
        <a
          href="https://www.hktic.org/zh_HK/PersonnelCertification"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          webpage
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]">Certified QMS Auditors</p>

      <p className="text-body-m">
        The Hong Kong Institution of Certified Auditors (HKICA) is operating the
        Certification Scheme for Quality Management System Auditor (CSQMSA)
        based on the ISO/IEC 17024:2012 "Conformity assessment – General
        requirements for bodies operating certification of persons". The scheme
        has been accredited by China National Accreditation Service (CNAS).
        Under relevant agreements, Hong Kong Certified QMS Auditors can apply to
        China Certification and Accreditation Association (CCAA) and
        International Personnel Certification Association (IPC) to register as
        Auditors. Details on the scheme can be obtained at its&nbsp;
        <a
          href="http://www.hkica.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </p>
    </div>
  );
};
