import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Enterprise Support Scheme (ESS)`,
    to_subsidise_non_listed: `To subsidise non-listed local enterprises/organisations in using technological services and solutions to improve productivity, or upgrade or transform their business processes.`,
    funding_of: `Funding of up to $10 million to each approved project on a dollar-for-dollar matching basis`,
    the_recipient: `The recipient organisation will own all intellectual property rights arising from the project.`,
  },
  cn: {
    title: `企業支援計劃`,
    to_subsidise_non_listed: `企業支援計劃是創新及科技基金下主要的資助計劃，旨在鼓勵私營機構進行研發。`,
    funding_of: `獲批資助項目的最高資助額為1,000萬港元，有關款額會以等額出資方式批出。`,
    the_recipient: `受資助機構將會擁有項目產生的所有知識產權。`,
  },
};
export const ESS: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, to_subsidise_non_listed, funding_of, the_recipient } =
    page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px] text-justify">
      <div className="text-heading-m ">
        <Link outerLink="https://www.itf.gov.hk/l-eng/ESS.asp" linkColor="#000">
          {title}
        </Link>
      </div>
      <p className="text-body-m my-[16px]">{to_subsidise_non_listed}</p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
        />
        <p className="text-body-m flex-grow min-w-0">{funding_of}</p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full my-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">{the_recipient}</p>
      </div>
    </div>
  );
};
