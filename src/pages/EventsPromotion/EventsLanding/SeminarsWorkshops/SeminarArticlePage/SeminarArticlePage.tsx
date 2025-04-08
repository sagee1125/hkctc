import React from "react";
import {
  seminarsAndWorkshopsList,
  seminarsAndWorkshopsList_CN,
} from "./seminarArticles";
import { InternalBackButton, Link } from "../../../../../components";
import { Language, useSettings } from "../../../../../context";

export const SeminarArticlePage: React.FC = () => {
  const pageIndex = Number(window.location.hash.replace("#", ""));
  const { language, processText, convertReactNode } = useSettings();
  const isEn = language === Language.EN;
  const seminarsData = isEn
    ? seminarsAndWorkshopsList
    : seminarsAndWorkshopsList_CN;

  const pageContent = seminarsData[pageIndex];
  const { img, title, date, content, topics, subContent, subTopics } =
    pageContent;

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

      <div className="text-heading-l">{processText(title)}</div>
      <div className="flex flex-row gap-[8px] items-center" tabIndex={0}>
        <img
          className="w-[16px] h-[16px]"
          src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
          alt={"calendar"}
        />
        <p className="text-body-s text-grey">{processText(date)}</p>
      </div>
      <div>{convertReactNode(content)}</div>

      <div className="flex flex-col gap-[24px]">
        {topics &&
          topics.map((t) => {
            const specialTopics = [
              "Programme",
              "Presentation Material",
              "Flyer",
            ];
            const removeDot = specialTopics.includes(t.title);
            return (
              <div className="text-linked-m flex items-start flex-row gap-[8px]">
                {!removeDot ? "\u25CF " : ""}

                {t.pdfLink ? (
                  <Link linkColor="#000" outerLink={t.pdfLink}>
                    {processText(t.title)}
                  </Link>
                ) : (
                  <div color="#000">{processText(t.title)}</div>
                )}
              </div>
            );
          })}
      </div>

      {subContent && <div>{convertReactNode(subContent)}</div>}

      {subTopics && (
        <div className="flex flex-col gap-[24px]">
          {subTopics.map((t) => {
            return (
              <div className="text-linked-m flex flex-row items-center flex-wrap gap-[8px]">
                <div className="w-[6px] h-[6px] bg-black rounded-full" />
                {t.pdfLink ? (
                  <Link linkColor="#000" outerLink={t.pdfLink}>
                    {processText(t.title)}
                  </Link>
                ) : (
                  <div color="#000">{processText(t.title)}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <hr />
      <InternalBackButton targetUrl="/events-promotion?section=seminar_workshop" />
    </div>
  );
};
