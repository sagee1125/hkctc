import React from "react";
import { seminarsAndWorkshopsList } from "./seminarArticles";
import { InternalBackButton, Link } from "../../../../../components";

export const SeminarArticlePage: React.FC = () => {
  const pageContent = seminarsAndWorkshopsList[0];
  const { img, title, date, content, topics } = pageContent;
  return (
    <div className="flex flex-col gap-[24px]">
      {img && (
        <img
          src={
            process.env.PUBLIC_URL +
            `/assets/eventsLanding/seminarsAndWorkshopsThumbnails/${img}`
          }
          alt="seminars"
        />
      )}

      <div className="text-heading-l">{title}</div>
      <div className="flex flex-row gap-[8px] items-center">
        <img
          className="w-[16px] h-[16px]"
          src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
          alt={"calendar"}
        />
        <p className="text-body-s text-grey">{date}</p>
      </div>
      <div>{content}</div>

      <div className="flex flex-col gap-[24px]">
        {topics.map((t) => {
          return (
            <div className="text-linked-m flex flex-row items-center flex-wrap gap-[8px]">
              <div className="w-[6px] h-[6px] bg-black rounded-full" />
              <Link linkColor="#000">{t.title}</Link>
            </div>
          );
        })}
      </div>

      <hr />
      <InternalBackButton targetUrl="/events-promotion?section=seminar_workshop" />
    </div>
  );
};
