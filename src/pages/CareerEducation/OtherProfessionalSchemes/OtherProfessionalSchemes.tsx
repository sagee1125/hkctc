import React from "react";
import { SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    title: "Other Professional Schemes",
    intro:
      "There are other organisations which have developed various professional schemes to enhance professionalism and capability of testing and certification practitioners.",
    HKIE: "HKIE Materials Engineers",
    professional: "Professional Certification Scheme for Testing Personnel",
    QMS: "Certified QMS Auditors",
    materials_engineers: (
      <>
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
          aria-label="link"
          href="https://www.hkie.org.hk/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          HKIE’s website
        </a>
        .
      </>
    ),
    developed:
      "Developed by the Hong Kong Association of Testing, Inspection and Certification (HKTIC) with a sponsorship from Government's SME Development Fund, this scheme is a comprehensive scheme which provides certification of individuals seeking to demonstrate their knowledge and/or competence in their field of testing.",
    currently: (
      <>
        Currently the scope of certification in the scheme covers Chemical
        Testing; Construction Materials Testing; Electrical Products Testing;
        Microbiological Testing; Textiles and Garments Testing; Toys and
        Hardlines Testing; Food Testing; Environmental Testing; Quality
        Assurance as well as Calibration. Full details may be obtained at its
        relevant&nbsp;
        <a
          aria-label="link"
          href="https://www.hktic.org/zh_HK/PersonnelCertification"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          webpage
        </a>
        .
      </>
    ),

    bottom: (
      <>
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
          aria-label="link"
          href="https://www.hkica.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </>
    ),
  },
  cn: {
    title: "其他專業計劃",
    intro:
      "有其他機構制定不同的專業計劃，以提升檢測認證從業員的專業水平及能力。",
    HKIE: "香港工程師學會材料工程師",
    professional: "檢測專業人員認證計劃",
    QMS: "質量管理體系專業審核師",
    developed:
      "香港測檢認證協會獲政府的中小企業發展支援基金提供資助，制定了檢測專業人員認證計劃。該計劃為專業人員提供全面的認證服務，以證明他們於某檢測範疇的知識及／或能力。",
    materials_engineers: (
      <>
        製造商、供應商、建築公司、建材實驗所等都需要材料工程師提供品質及安全管理。修讀經香港工程師學會審核/認可與材料有關的工程學學位課程（或取得屋宇、土木、化學、環境及結構工程學位，並修讀至少兩科與建築工程物料有關的科目），並累積足夠相關工作經驗，可申請專業材料工程師資格。有關詳情可瀏覽
        <a
          aria-label="link"
          href="https://www.hkie.org.hk/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港工程師學會網頁
        </a>
        。
      </>
    ),
    currently: (
      <>
        現時，該計劃的認證範圍包括化學測試、建築材料測試、電器產品測試、微生物測試、紡織及製衣測試、玩具及輕工產品測試、食品測試、環保測試、品質保證以及儀器校正。有關詳情可瀏覽其
        <a
          aria-label="link"
          href="https://www.hktic.org/zh_HK/PersonnelCertification"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          相關網頁
        </a>
        。
      </>
    ),
    bottom: (
      <>
        香港專業審核師學會按照ISO/IEC
        17024:2012《合格評定—人員認證機構通用要求》，制定了「ISO
        9001質量管理體系人員認證計劃」。該計劃獲中國合格評定國家認可委員（CNAS）認可，根據相關協議，香港專業審核師可申請成為中國認證認可協會（CCAA）審核員及國際人員認證協會（IPC）認可審核師。有關計劃的詳情可瀏覽其
        <a
          aria-label="link"
          href="https://www.hkica.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          相關網頁
        </a>
        。
      </>
    ),
  },
};

export const OtherProfessionalSchemes: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    title,
    intro,
    HKIE,
    materials_engineers,
    professional,
    developed,
    QMS,
    currently,
    bottom,
  } = page_text;
  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <p className="text-body-m mt-[24px] text-justify">{intro as string}</p>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]" role="heading" aria-level={10}>
        {HKIE as string}
      </p>

      <p className="text-body-m text-justify">
        {materials_engineers as React.ReactNode}
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <div className="text-heading-l mb-[24px] text-justify">
        {professional as React.ReactNode}
      </div>
      <p className="text-body-m">
        {developed as React.ReactNode}
        <br />
        <br />
        {currently as React.ReactNode}
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div className="text-heading-l mb-[24px]">{QMS as React.ReactNode}</div>

      <p className="text-body-m text-justify">{bottom as React.ReactNode}</p>
    </div>
  );
};
