import React, { useEffect, useState } from "react";
import { SquareTitle, VideoPlayer } from "../../../components";
import { useSettings } from "../../../context";

export const LearningTeachingResources: React.FC = () => {
  const [playVideoOneIndex, setPlayVideoOneIndex] = useState<number>(0);
  const [playVideoTwoIndex, setPlayVideoTwoIndex] = useState<number>(0);

  const scrollId = new URLSearchParams(window.location.search).get("scroll_id");
  const { isPC } = useSettings();

  useEffect(() => {
    const element = document.getElementById(scrollId as string);

    if (scrollId && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollId]);

  const downloadDataOne = [
    {
      title: "Download Teacher's Guide",
      link: "https://www.hkctc.gov.hk/en/doc/STEM_Teaching_Kit_Teachers_Guide_Eng.pdf",
    },
    {
      title: "Download Student Laboratory Manual",
      link: "https://www.hkctc.gov.hk/en/doc/STEM_Teaching_Kit_Student_Manual_Eng.pdf",
    },
  ];
  const downloadDataTwo = [
    {
      title: "Download Teachers' Guide",
      link: "https://www.hkctc.gov.hk/en/doc/Teaching_Kit_Teachers_Guide_Eng.pdf",
    },
    {
      title: "Download Student Laboratory Manual",
      link: "https://www.hkctc.gov.hk/en/doc/Teaching_Kit_Student_Manual_Eng.pdf",
    },
  ];

  const downloadDataThree = [
    {
      title: "Chinese Version Only",
      link: "https://www.hkctc.gov.hk/tc/doc/PassingThroughTheMaze.pdf",
    },
    {
      title: "Text Version",
      link: "https://www.hkctc.gov.hk/tc/doc/PassingThroughTheMaze_TextOnly.pdf",
    },
  ];
  const videoDataOne = [
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_1_Eng.mp4",
      thumbnail: "video1",
      title: "Analysis of Colorants in Food and Personal-Care Products",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_2_Eng.mp4",
      thumbnail: "video2",
      title: "Screening Test for Plastic Type of Plastic Products",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_3_Eng.mp4",
      thumbnail: "video3",
      title: "Analysis of Bacteria in Environmental Samples",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_4_Eng.mp4",
      thumbnail: "video4",
      title: "Wine-Making and Analysis of Alcohol in Beverage",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_5_Eng.mp4",
      thumbnail: "video5",
      title: "Slime-Making and Analysis of Borax in Slime",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_6_Eng.mp4",
      thumbnail: "video6",
      title: "Solar Cell Fabrication and Testing on its Electrical Properties",
    },
  ];

  const videoDataTwo = [
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp01.mp4",
      thumbnail: "video11",
      title: "Determination of NO2 in Air: Air Pollutant Analysis",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp02.mp4",
      thumbnail: "video12",
      title: "Analysis of Copper in Wastewater",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp03.mp4",
      thumbnail: "video13",
      title:
        "Determination of SO2 in Dried Food Using Optimized Monier-Williams Method",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp04.mp4",
      thumbnail: "video14",
      title:
        "Is the Dairy Product Safe? Gold Nanoparticles as a Visual Detection Tool of Melamine",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp05.mp4",
      thumbnail: "video15",
      title:
        "Differentiation of Chinese Herb Danshen from Other Similar Herbs Using Facile Test-Tube Scale Chemical Test Method",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp06.mp4",
      thumbnail: "video16",
      title:
        "Determination of Vitamin C in Commercial Sample and Fresh Fruit Juice by Iodometric Titration",
    },
  ];
  return (
    <div className="w-full">
      <SquareTitle title="Learning and Teaching Resources" />

      <p className="text-body-m mt-[24px]">
        HKCTC attach importance to promoting testing and certification to
        youngsters and students, and enhance their awareness of the value
        created by testing and certification. To this end, HKCTC has produced
        different learning and teaching materials to help youngsters to acquire
        the knowledge of testing and certification and arouse their interest to
        the sector.
      </p>

      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l mb-[24px]" id="STEM_Teaching_Kit">
        STEM Teaching Kit on Testing and Certification for Junior Secondary
        Students
      </p>

      <p className="text-body-m">
        The Innovation and Technology Commission and HKCTC have commissioned
        Hong Kong Baptist University to develop a STEM teaching kit for junior
        secondary students. The kit consists of six experiments, introducing
        some basic scientific knowledge and concepts about product testing and
        analysis. Through providing students with more practical opportunities,
        the kit aims to arouse students’ interest in STEM subjects while raising
        their awareness of the importance of testing to ensure the safety and
        quality of products commonly used in daily life. Schools are welcome to
        make use of the kit in class or extra-curricular activities.
      </p>
      <div
        className={`grid grid-cols-${isPC ? "3 gap-[24px]" : "1"}  py-[24px]`}
      >
        {downloadDataOne.map((down, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-[10px] py-[22px] px-[11px] cursor-pointer"
            onClick={() => {
              window.open(down.link, "_blank");
            }}
          >
            <img
              className="w-[64px] h-[64px]"
              src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
              alt={"file icon"}
            />
            <p className="text-highlight-l">{down.title}</p>
          </div>
        ))}
      </div>
      <p className="text-heading-l mb-[24px]">Experiment Introduction Video</p>
      {/* <img
          className="w-full h-auto"
          alt="Analysis of Colorants"
          src={`${process.env.PUBLIC_URL}/assets/careerEducation/Analysis_of_Colorants.png`}
        /> */}
      <div key={videoDataOne[playVideoOneIndex].thumbnail}>
        <VideoPlayer videoLink={videoDataOne[playVideoOneIndex].url} />
      </div>
      <div
        className={`grid grid-cols-${isPC ? "2" : "1"} gap-[22px] mt-[24px]`}
      >
        {videoDataOne.map((video, index) => (
          <div
            key={index}
            className={`w-full h-full flex flex-row items-start !text-body-s cursor-pointer ${
              playVideoOneIndex === index
                ? "bg-newPrimary text-white"
                : "bg-whiteGrey text-black"
            }`}
            onClick={() => {
              setPlayVideoOneIndex(index);
              // window.open(video.url, "_blank");
            }}
          >
            <div className="w-[37px] text-center p-[10px]">{`0${
              index + 1
            }`}</div>
            <img
              className="w-[130px] h-full"
              alt={video.thumbnail}
              src={`${process.env.PUBLIC_URL}/assets/careerEducation/${video.thumbnail}.png`}
            />
            <div className="flex flex-grow p-[10px]">
              {" "}
              {video.title.length > 48 && !isPC
                ? video.title.slice(0, 48) + "..."
                : video.title}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <p className="text-heading-l" id="Teaching_Kit">
        Teaching Kit on Chemical Testing for Senior Secondary Curriculum
      </p>
      <p className="text-body-m mt-[24px]">
        The Innovation and Technology Commission and HKCTC have commissioned
        Hong Kong Baptist University to develop a teaching kit for use by senior
        secondary Chemistry teachers. The kit consists of a total of six
        experiments, which introduces the basic chemical testing concepts.
        Through providing students with more practical opportunities, the kit
        aims to apprise students of the importance of testing and how it can
        help ensure the safety and quality of products commonly used in our
        daily life. Schools are welcome to make use of the kit in class or
        extra-curriculum activities.
      </p>

      <div
        className={`grid grid-cols-${isPC ? "3 gap-[24px]" : "1"}  py-[24px]`}
      >
        {downloadDataTwo.map((down, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-[10px] py-[22px] px-[11px] cursor-pointer"
            onClick={() => {
              window.open(down.link, "_blank");
            }}
          >
            <img
              className="w-[64px] h-[64px]"
              src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
              alt={"file icon"}
            />
            <p className="text-highlight-l">{down.title}</p>
          </div>
        ))}
      </div>
      {/* <img
          className="w-full h-auto"
          alt="Teaching Kit"
          src={`${process.env.PUBLIC_URL}/assets/careerEducation/Teaching_Ki.png`}
        /> */}
      <div key={videoDataTwo[playVideoTwoIndex].thumbnail}>
        <VideoPlayer videoLink={videoDataTwo[playVideoTwoIndex].url} />
      </div>

      <div
        className={`grid grid-cols-${isPC ? "2" : "1"} gap-[22px] mt-[24px]`}
      >
        {videoDataTwo.map((video, index) => (
          <div
            key={index}
            className={`w-full h-full flex flex-row items-start !text-body-s cursor-pointer ${
              playVideoTwoIndex === index
                ? "bg-newPrimary text-white"
                : "bg-whiteGrey text-black"
            }`}
            onClick={() => {
              setPlayVideoTwoIndex(index);
              // window.open(video.url, "_blank");
            }}
          >
            <div className="w-[37px] text-center p-[10px]">{`0${
              index + 1
            }`}</div>
            <img
              className="w-[130px] h-full"
              alt={video.thumbnail}
              src={`${process.env.PUBLIC_URL}/assets/careerEducation/${video.thumbnail}.png`}
            />
            <div className="flex flex-grow p-[10px]">
              {video.title.length > 46 && !isPC
                ? video.title.slice(0, 46) + "..."
                : video.title}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />

      <p className="text-heading-l">
        Passing Through the Maze: Learning Testing and Certification in Daily
        Life
      </p>
      <p className="text-body-m my-[24px]">
        Passing Through the Maze : Learning Testing and Certification in Daily
        Life is a Chinese comic book that tells the adventure of two young
        challengers, Samantha and Joe, who try to prove themselves by getting
        out of a maze unscathed. Through asking tough questions on testing and
        certification, the maze is not as harmless as it first appears...
      </p>

      <img
        className="w-full h-auto"
        alt="Maze"
        src={`${process.env.PUBLIC_URL}/assets/careerEducation/Maze.png`}
      />

      <div
        className={`grid grid-cols-${isPC ? "3 gap-[24px]" : "1"}  py-[24px]`}
      >
        {downloadDataThree.map((down, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-[10px] py-[22px] px-[11px] cursor-pointer"
            onClick={() => {
              window.open(down.link, "_blank");
            }}
          >
            <img
              className="w-[64px] h-[64px]"
              src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
              alt={"file icon"}
            />
            <p className="text-highlight-l">{down.title}</p>
          </div>
        ))}
      </div>
      <p className="text-body-m">
        If you want to come along and find out how fast you can beat the maze,
        click on the picture of the comic book.
      </p>
    </div>
  );
};
