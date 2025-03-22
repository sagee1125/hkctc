import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `General Support Programme (GSP)`,
    GSP_support: `GSP supports non-R&D projects that contribute to the upgrading and development of local industries, or help to foster a culture of innovation and technology. Conferences, exhibitions, seminars, workshops, promotional events, studies and surveys, etc. are within the scope of GSP.`,
  },
  cn: {
    title: `General Support Programme (GSP)`,
    GSP_support: `GSP supports non-R&D projects that contribute to the upgrading and development of local industries, or help to foster a culture of innovation and technology. Conferences, exhibitions, seminars, workshops, promotional events, studies and surveys, etc. are within the scope of GSP.`,
  },
};

export const GSP: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, GSP_support } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link outerLink="https://www.itf.gov.hk/l-eng/GSP.asp" linkColor="#000">
          {title}
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">{GSP_support}</p>
    </div>
  );
};
