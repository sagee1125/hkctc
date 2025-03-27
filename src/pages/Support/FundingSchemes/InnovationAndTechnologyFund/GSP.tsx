import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `General Support Programme (GSP)`,
    GSP_support: `GSP supports non-R&D projects that contribute to the upgrading and development of local industries, or help to foster a culture of innovation and technology. Conferences, exhibitions, seminars, workshops, promotional events, studies and surveys, etc. are within the scope of GSP.`,
  },
  cn: {
    title: `一般支援計劃（GSP）`,
    GSP_support: `一般支援計劃專為非研發項目而設，旨在支援有助提升本港產業和推動其發展的項目，以及有助培養創新科技風氣的項目。會議、展覽、研究和調查等都是可資助項目。`,
  },
};
export const GSP: React.FC = () => {
  const { getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { title, GSP_support } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link outerLink="https://www.itf.gov.hk/l-eng/GSP.asp" linkColor="#000">
          {title as string}
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">{GSP_support as string}</p>
    </div>
  );
};
