import React from "react";
import { SquareTitle, Link } from "../../../../components";
import { useSettings } from "../../../../context";

export const StudentCompetition: React.FC = () => {
  const { isPC } = useSettings();

  const awardeesList: Array<{
    title: string;
    date: string;
    maskIcon: string;
    imgUrl: string;
    hyperLink: string;
  }> = [
    {
      title: "Testing Science - Sustainability in Daily Life",
      date: "2023-24",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_1.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2524&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Food Testing in Daily Life",
      date: "2022-23",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_2.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2377&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Materials Testing Science in Daily Life",
      date: "2021-22",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_3.png",
      hyperLink:
        "http://hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2284&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Testing Science in Daily Life - Healthcare and Hygiene",
      date: "2020-21",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_4.png",
      hyperLink:
        "http://hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2137&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Testing Science for Green Living",
      date: "2018-19",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_5.png",
      hyperLink:
        "http://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=1825&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Testing Science for Improving the Quality of Life",
      date: "2017-18",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_6.png",
      hyperLink:
        "http://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=1895&Pid=14&Version=0&Cid=87&Charset=iso-8859-1",
    },
    {
      title: "Scientific Testing in Everyday Life",
      date: "2016-2017",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_3.png",
      hyperLink:
        "http://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=1706&Pid=11&Version=0&Cid=66&Charset=iso-8859-1",
    },
  ];

  return (
    <div className="flex flex-col gap-[24px] mb-[48px]">
      <SquareTitle title="Student Competitions" />
      <p className="text-heading-l">
        "Digi-Science" Video Production Competition for Hong Kong Secondary
        Schools
      </p>

      <div>
        To raise students' awareness of the importance of testing and
        certification service, HKCTC and Hong Kong Association for Science and
        Mathematics Education (HKASME) have been co-organising the
        "Digi-Science" Video Production Competition for Hong Kong Secondary
        Schools since 2016.
      </div>

      <div>
        Participating students need to produce a 2-minute video and a report on
        the experimental ideas relevant to the theme of the year.
      </div>

      <hr />
      <p className="text-heading-l">List of awardees</p>

      <div
        className={`w-full ${
          isPC
            ? "grid grid-cols-3 gap-x-[24px] gap-y-[24px]"
            : "flex flex-wrap gap-[24px]"
        } `}
      >
        {awardeesList.map((item, index) => {
          const { imgUrl, maskIcon, title, date, hyperLink } = item;
          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full" : "w-[252px]"
              } h-[282px] flex flex-col gap-[14px] cursor-pointer`}
              onClick={() => {
                window.open(hyperLink, "_blank");
              }}
            >
              <div className="flex-shrink-0 relative w-full h-[190px]">
                <img
                  className="border-2 border-inherit w-full h-full object-cover"
                  src={`${process.env.PUBLIC_URL}/assets/eventsLanding/studentsCompetition/${imgUrl}`}
                  alt={imgUrl}
                />
                {/* Icon */}
                <img
                  className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
                  alt="PRESS Icon"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-highlight-l">{title}</p>
                <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                  <img
                    className="w-[16px] h-[16px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                    alt={"calendar"}
                  />
                  <p className="text-body-s text-grey">{date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr />

      <p className="text-heading-l">
        Hong Kong Youth Science and Technology Competition
      </p>
      <div
        className={`w-full grid grid-cols-${
          isPC ? "2 gap-x-[24px]" : "1 gap-[24px]"
        }`}
      >
        <img
          className="border-2 border-inherit w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/assets/eventsLanding/studentsCompetition/competition_1.png`}
          alt={"competition 1"}
        />
        <img
          className="border-2 border-inherit w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/assets/eventsLanding/studentsCompetition/competition_2.png`}
          alt={"competition 2"}
        />
      </div>

      <div>
        Since 2016, HKCTC has collaborated with the Hong Kong New Generation
        Cultural Association (HKNGCA) to offer the "HKCTC Special Award for
        Outstanding Project in Testing" in the Hong Kong Youth Science and
        Technology Competition for the best entries relevant to testing. The
        list of awardees can be accessed at the{" "}
        <Link outerLink="https://stic.newgen.org.hk/">website of HKNGCA</Link>.
      </div>

      <hr />

      <div className="flex flex-row items-center gap-[24px] text-newPrimary">
        <img
          className="w-[20px] h-[20px]"
          src={`${process.env.PUBLIC_URL}/assets/icons/share.svg`}
          alt="Share Icon"
        />
        Share
      </div>
    </div>
  );
};
