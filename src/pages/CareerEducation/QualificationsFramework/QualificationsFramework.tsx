import React from "react";
import { Accordion, SquareTitle } from "../../../components";
import { Language, useSettings } from "../../../context";

export const QualificationsFramework: React.FC = () => {
  const { language, getPageText } = useSettings();

  const multilingual = {
    en: {
      title: "Qualifications Framework",
      framework: (
        <>
          The&nbsp;
          <span style={{ fontWeight: 700 }}>Qualifications Framework</span>
          &nbsp;
          <a
            aria-label="Qualifications Framework"
            href="https://www.hkqf.gov.hk/en/home/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            (QF)
          </a>
          &nbsp; was launched in 2008 to provide a platform to encourage and
          facilitate lifelong learning, with a view to enhancing the capability
          and competitiveness of the workforce in Hong Kong. It is a seven-level
          hierarchy of qualifications covering the academic, vocational and
          professional as well as continuing education sectors. Qualifications
          recognised under the QF are quality assured and level-rated in
          accordance with objective and well-defined standards. The list of such
          qualifications and courses can be found in the&nbsp;
          <a
            aria-label="Qualifications Register"
            href="https://www.hkqr.gov.hk/HKQRPRD/web/hkqr-en/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Qualifications Register
          </a>
          .
        </>
      ),
      specification: `Specification of Competency Standards`,
      established: (
        <>
          Established in 2010 under QF, the Industry Training Advisory Committee
          of the Testing, Inspection and Certification Industry has completed
          the Specification of Competency Standards (SCS) for the industry and
          released it in July 2014. The SCS consists of 242 Units of Competency
          (UoCs) which are distributed in 7 major functional areas at various
          levels. It sets out the skills, knowledge and competency standards
          required of practitioners to perform various job functions
          effectively. More details can be found in its relevant&nbsp;
          <a
            aria-label="relevant webpage"
            href="https://www.hkqf.gov.hk/tic/en/scs/introduction/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            webpage
          </a>
          .
        </>
      ),
      award_scheme: `Award Scheme for Learning Experience`,
      QF_has_launched: (
        <>
          QF has launched the Award Scheme for Learning Experience to encourage
          outstanding or emerging practitioners to broaden their horizons
          through participating in various learning activities (e.g.
          international competitions, seminars, sharing sessions and study
          tours, etc.) in different places around the world and to develop
          network with industry partners in and outside Hong Kong. Details of
          the scheme can be found at its&nbsp;
          <a
            aria-label="award scheme introduction"
            href="https://www.hkqf.gov.hk/tic/en/award_scheme/introduction/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            website
          </a>
          .
        </>
      ),
      recognition: `Recognition of Prior Learning`,
      as_a_measure:
        "As a measure to recognise work experiences and competencies acquired by practitioners at the workplace, a Recognition of Prior Learning (RPL) mechanism under the QF provides an alternative route for practitioners to obtain QF-recognised qualifications without undergoing a training programme, thus facilitates their subsequent progression in learning, and probably in careers. It is particularly useful to practitioners who do not possess high academic attainment but have acquired substantial practical experience in industry.",
      based_on:
        "Based on the SCS formulated by the Testing, Inspection and Certification Industry, the RPL is conducted in the form of clusters of units. Applicants may decide on the level of qualification for the clusters they wish to apply for recognition based on their prior working experience and relevant experience.",
      the_school: (
        <>
          The School of Science and Technology of Hong Kong Metropolitan
          University has been appointed by the Secretary for Education as the
          independent assessment agency for the RPL for the Testing, Inspection
          and Certification Industry. For details of the RPL mechanism and
          application method, please visit its&nbsp;
          <a
            aria-label="website"
            href="https://www.hkmu.edu.hk/st/rpl/?repeat=w3tc"
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
      title: "資歷架構",
      framework: (
        <>
          <span style={{ fontWeight: 700 }}>資歷架構</span>&nbsp;
          <a
            aria-label="資歷架構"
            href={
              language === Language.ZH_TW
                ? "https://www.hkqf.gov.hk/tc/home/index.html"
                : "https://www.hkqf.gov.hk/sc/home/index.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            (QF)
          </a>
          於2008年展開，主要目的是提供一個鼓勵及促進終身學習的平台，以提升香港工作人口的技能及競爭力。資歷架構是個共有七級的資歷級別制度，涵蓋學術、職業專才及持續教育及培訓等不同界別。所有資歷架構認可的資歷皆通過質素保證，並按照客觀及明確的標準去釐定其級別。這些認可資歷及課程載於「
          <a
            aria-label="資歷名冊"
            href={
              language === Language.ZH_TW
                ? "http://www.hkqr.gov.hk/HKQRPRD/web/hkqr-tc/index.html"
                : "http://www.hkqr.gov.hk/HKQRPRD/web/hkqr-sc/index.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            資歷名冊
          </a>
          」。
        </>
      ),
      specification: `能力標準說明`,
      established: (
        <>
          檢測及認證業行業培訓諮詢委員會於2010年在資歷架構下成立，並於2014年7月推出專為檢測及認證業界撰寫的《能力標準說明》。《能力標準說明》包含242個「能力單元」，按能力級別分佈於7個主要職能範疇之中，載列從業員於不同的工作職能範疇下所需要的技能、知識及成效標準。有關詳情可瀏覽其相關
          <a
            aria-label="相關網頁"
            href={
              language === Language.ZH_TW
                ? "https://www.hkqf.gov.hk/tic/tc/scs/introduction/index.html"
                : "https://www.hkqf.gov.hk/tic/sc/scs/introduction/index.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            網頁
          </a>
          。
        </>
      ),
      award_scheme: "學習體驗獎勵計劃",
      QF_has_launched: (
        <>
          資歷架構設立的學習體驗獎勵計劃，旨在鼓勵業內表現出色或嶄露頭角的從業員參與世界各地不同的學習活動（如國際比賽、研討會、交流會及考察等），以擴闊他們的視野，並與本地或境外業界夥伴建立網絡。計劃詳情可瀏覽
          <a
            aria-label="相關網頁"
            href={
              language === Language.ZH_TW
                ? "https://www.hkqf.gov.hk/tc/award_scheme/index.html"
                : "https://www.hkqf.gov.hk/sc/award_scheme/index.html"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            網頁
          </a>
          。
        </>
      ),
      recognition: "「過往資歷認可」機制",
      as_a_measure:
        "資歷架構下的「過往資歷認可」機制是確認從業員在職場上所積累的工作經驗和能力的一個機制。有關機制提供另一個途徑，讓從業員取得資歷架構認可的資歷，提升他們在學習甚至工作上的進階機會。對於學歷不高但已獲得豐富行業經驗的從業員，「過往資歷認可」機制尤其有用。",
      based_on:
        "檢測及認證業的「過往資歷認可」機制以《能力標準說明》為基礎，以能力單元組合形式進行。申請人可根據其工作年資及相關工作經驗，決定申請的能力單元組合和資格級別。",
      the_school: (
        <>
          香港公開大學科技學院獲教育局局長委任為獨立評估機構，進行檢測及認證業的「過往資歷認可」的評估工作。有關「過往資歷認可」機制的詳情及申請方法，可瀏覽
          <a
            aria-label="瀏覽網頁"
            href={
              language === Language.ZH_TW
                ? "https://www.hkmu.edu.hk/st/tc/rpl/"
                : "https://www.hkmu.edu.hk/st/sc/rpl/"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            網頁
          </a>
          。
        </>
      ),
    },
  };

  const page_text = getPageText(multilingual);

  const {
    title,
    framework,
    specification,
    established,
    award_scheme,
    QF_has_launched,
    recognition,
    as_a_measure,
    based_on,
    the_school,
  } = page_text;

  return (
    <div className="w-full text-justify">
      <SquareTitle title={title as string} />

      <p className="text-body-m my-[24px] text-justify">
        {framework as string}
      </p>
      <div className="mb-[24px]">
        <Accordion
          title={specification as string}
          details={
            <p className="text-body-m">{established as React.ReactNode}</p>
          }
        />
      </div>

      <div className="mb-[24px]">
        <Accordion
          title={award_scheme as string}
          details={
            <p className="text-body-m">{QF_has_launched as React.ReactNode}</p>
          }
        />
      </div>

      <div className="mb-[24px]">
        <Accordion
          title={recognition as string}
          details={
            <>
              <p className="text-body-m">
                {as_a_measure as React.ReactNode}
                <br />
                <br />
                {based_on as React.ReactNode}
              </p>
              <br />
              <p className="text-body-m">{the_school as React.ReactNode} </p>
            </>
          }
        />
      </div>
    </div>
  );
};
