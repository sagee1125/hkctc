import * as React from "react";
import { Link } from "../../../../components";

export const GSP: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link outerLink="https://www.itf.gov.hk/l-eng/GSP.asp" linkColor="#000">
          General Support Programme (GSP)
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">
        GSP supports non-R&D projects that contribute to the upgrading and
        development of local industries, or help to foster a culture of
        innovation and technology. Conferences, exhibitions, seminars,
        workshops, promotional events, studies and surveys, etc. are within the
        scope of GSP.
      </p>
    </div>
  );
};
