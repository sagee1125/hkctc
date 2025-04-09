import React from "react";
import { SquareTitle, Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Student Competitions",
    digi_science_video: `"Digi-Science" Video Production Competition for Hong Kong Secondary
        Schools`,
    raise_student_awareness: `To raise students' awareness of the importance of testing and
        certification service, HKCTC and Hong Kong Association for Science and
        Mathematics Education (HKASME) have been co-organising the
        "Digi-Science" Video Production Competition for Hong Kong Secondary
        Schools since 2016.`,
    participant_student: `Participating students need to produce a 2-minute video and a report on
        the experimental ideas relevant to the theme of the year.`,
    awardees_list: "List of awardees",
    hk_youth_science: "Hong Kong Youth Science and Technology Competition",
    since_2016: `Since 2016, HKCTC has collaborated with the Hong Kong New Generation
        Cultural Association (HKNGCA) to offer the "HKCTC Special Award for
        Outstanding Project in Testing" in the Hong Kong Youth Science and
        Technology Competition for the best entries relevant to testing. The
        list of awardees can be accessed at the `,
    hkngca_website: "website of HKNGCA",
    share: "Share",
  },
  cn: {
    title: "學生比賽",

    digi_science_video: `香港中學數碼科學短片製作比賽`,
    raise_student_awareness: `為使學生加深認識檢測和認證服務的重要性，自2016年起，香港檢測和認證局與香港數理教育學會合辦了香港中學數碼科學短片製作比賽。`,
    participant_student: `參賽學生須製作兩分鐘的短片及介紹其實驗理念的報告，內容與該年比賽主題有關。`,
    awardees_list: "得獎學生名單",
    hk_youth_science: "香港青少年科技創新大賽",
    since_2016: `自2016年起，香港檢測和認證局聯同香港新一代文化協會，於香港青少年科技創新大賽設立了香港檢測和認證局傑出檢測特別獎，頒發予比賽中與測試有關的最佳參賽作品。得獎者名單可於香港新一代文化協會的`,
    hkngca_website: "網頁瀏覽。",
    share: "分享",
  },
};

export const StudentCompetition: React.FC = () => {
  const { getPageText, isPC, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    title,
    digi_science_video,
    raise_student_awareness,
    participant_student,
    awardees_list,
    hk_youth_science,
    share,
    since_2016,
    hkngca_website,
  } = page_text;

  const awardeesList = [
    {
      title: "Testing Science - Sustainability in Daily Life",
      titleCN: "測試科學–日常生活中的可持續性",
      date: "2023-24",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_1.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2524&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
      tcHyperLink:'',
      scHyperLink:'',
      },
    {
      title: "Food Testing in Daily Life",
      titleCN: "生活中的食品檢測",
      date: "2022-23",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_2.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2377&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Materials Testing Science in Daily Life",
      titleCN: "日常中的物料檢測科學",
      date: "2021-22",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_3.png",
      hyperLink:
        "https://hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2284&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      title: "Testing Science in Daily Life - Healthcare and Hygiene",
      titleCN: "生活中的檢測科學 - 衛生保健篇",
      date: "2020-21",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_4.png",
      hyperLink:
        "https://hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=2137&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      titleCN: "檢測科學 - 綠色生活",
      date: "2018-19",
      title: "Testing Science for Green Living",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_5.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=1825&Pid=14&Version=0&Cid=85&Charset=iso-8859-1",
    },
    {
      titleCN: "檢測科學 - 改善生活質素",
      title: "Testing Science for Improving the Quality of Life",
      date: "2017-18",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_6.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=1895&Pid=14&Version=0&Cid=87&Charset=iso-8859-1",
    },
    {
      title: "Scientific Testing in Everyday Life",
      titleCN: "日常的科學測試",
      date: "2016-2017",
      maskIcon: "PRESS.png",
      imgUrl: "awardees_3.png",
      hyperLink:
        "https://www.hkasme.org/Common/Reader/News/ShowNews.jsp?Nid=1706&Pid=11&Version=0&Cid=66&Charset=iso-8859-1",
    },
  ];
  return (
    <div className="flex flex-col gap-[24px] mb-[48px]">
      <SquareTitle title={title as string} />
      <div className="text-heading-l">{digi_science_video as string}</div>

      <div className="text-body-m">{raise_student_awareness as string}</div>

      <div className="text-body-m">{participant_student as string}</div>

      <hr />
      <div className="text-heading-l">{awardees_list as string}</div>

      <div
        className={`w-full ${
          isPC
            ? "grid grid-cols-3 gap-x-[24px] gap-y-[24px]"
            : "flex flex-wrap gap-[24px]"
        } `}
      >
        {awardeesList.map((item, index) => {
          const { imgUrl, maskIcon, title, titleCN, date, hyperLink } = item;

          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full h-[282px]" : "w-full h-auto"
              }  flex flex-col gap-[14px] cursor-pointer`}
              tabIndex={0}
              role="button"
              onClick={() => {
                window.open(hyperLink, "_blank", "noopener");
              }}
            >
              <div
                className={`flex-shrink-0 relative w-full ${
                  isPC ? "h-[190px]" : "h-auto"
                }`}
              >
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
              <div className="flex flex-col items-start justify-center h-full">
                <p className="text-highlight-l h-full">
                  {getSingleText(title, titleCN)}
                </p>
                <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                  <svg
                    aria-label="icon"
                    tabIndex={0}
                    role="none"
                    xmlns="https://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3271_24860)">
                      <path
                        d="M14.5 2.19281H12.5V0.859375H10.5V2.19281H6.5V0.859375H4.5V2.19281H2.5C1.39531 2.19281 0.5 3.08812 0.5 4.19281V16.8594H16.5V4.19281C16.5 3.08812 15.6047 2.19281 14.5 2.19281ZM2.5 14.8594V7.52594H14.5V14.8594H2.5Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3271_24860">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5 0.859375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-body-s text-grey">{date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr />

      <div className="text-heading-l">{hk_youth_science as string}</div>
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
        {since_2016 as string}
        <Link outerLink="https://stic.newgen.org.hk/">
          {hkngca_website as string}
        </Link>
        .
      </div>
    </div>
  );
};
