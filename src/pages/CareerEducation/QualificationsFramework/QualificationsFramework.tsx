import React from "react";
import { SquareTitle } from "../../../components";

// TODO  to update the hyperlinks
export const QualificationsFramework: React.FC = () => {
  return (
    <div className="w-full">
      <SquareTitle title="Other Professional Schemes" />

      <p className="text-body-m mt-[24px]">
        The&nbsp;
        <span style={{ fontWeight: 700 }}>Qualifications Framework</span>
        <a
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
          href="http://www.hkqr.gov.hk/HKQRPRD/web/hkqr-en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          Qualifications Register
        </a>
        .
      </p>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]">
        Specification of Competency Standards
      </p>

      <p className="text-body-m">
        Established in 2010 under QF, the Industry Training Advisory Committee
        of the Testing, Inspection and Certification Industry has completed the
        Specification of Competency Standards (SCS) for the sector and released
        it in July 2014. The SCS consists of 242 Units of Competency (UoCs)
        which are distributed in 7 major functional areas at various levels. It
        sets out the skills, knowledge and competency standards required of
        practitioners to perform various job functions effectively. More details
        can be found in its relevant&nbsp;
        <a
          href="https://www.hkqf.gov.hk/tic/en/scs/introduction/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          webpage
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l mb-[24px]">
        Award Scheme for Learning Experience
      </p>
      <p className="text-body-m">
        QF has launched the Award Scheme for Learning Experience to encourage
        outstanding or emerging practitioners to broaden their horizons through
        participating in various learning activities (e.g. international
        competitions, seminars, sharing sessions and study tours, etc.) in
        different places around the world and to develop network with industry
        partners in and outside Hong Kong. Details of the scheme can be found at
        its&nbsp;
        <a
          href="https://www.hkqf.gov.hk/tic/en/award_scheme/introduction/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          website
        </a>
        .
      </p>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]">Recognition of Prior Learning</p>

      <p className="text-body-m">
        As a measure to recognise work experiences and competencies acquired by
        practitioners at the workplace, a Recognition of Prior Learning (RPL)
        mechanism under the QF provides an alternative route for practitioners
        to obtain QF-recognised qualifications without undergoing a training
        programme, thus facilitates their subsequent progression in learning,
        and probably in careers. It is particularly useful to practitioners who
        do not possess high academic attainment but have acquired substantial
        practical experience in industry.
        <br />
        <br />
        Based on the SCS formulated by the Testing, Inspection and Certification
        Industry, the RPL is conducted in the form of clusters of units.
        Applicants may decide on the level of qualification for the clusters
        they wish to apply for recognition based on their prior working
        experience and relevant experience.
      </p>
      <br />
      <p className="text-body-m">
        The School of Science and Technology of Open University of Hong Kong has
        been appointed by the Secretary for Education as the independent
        assessment agency for the RPL for the Testing, Inspection and
        Certification Industry. For details of the RPL mechanism and application
        method, please visit its&nbsp;
        <a
          href="http://rpl.ouhk.edu.hk/"
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
