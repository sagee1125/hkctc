import React from "react";
import { SquareTitle } from "../../../../components";

export const Comics: React.FC = () => {
  const publicationsInfo = [
    {
      title: "第一話 : 講個「信」字？",
      img: "p_1.png",
      tags: [],
    },
    {
      title: "第二話：我要 check 清楚",
      img: "p_2.png",
      tags: [],
    },
    {
      title: "第三話：抗菌防臭襪",
      img: "p_3.png",
      tags: [],
    },
    {
      title: "第四話：生日禮物",
      img: "p_4.png",
      tags: [],
    },
    {
      title: "第五話：壓力煲風雲",
      img: "p_5.png",
      tags: [],
    },
    {
      title: "第六話：能源效益測試",
      img: "p_6.png",
      tags: [],
    },
    {
      title: "第七話：神奇縮水毛衣",
      img: "p_7.png",
      tags: [],
    },
    {
      title: "第八話：我很大方",
      img: "p_8.png",
      tags: [],
    },
    {
      title: "第九話：明明都是碟",
      img: "p_9.png",
      tags: [],
    },
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Comics" />
      <img
        className="w-full"
        src={`${process.env.PUBLIC_URL}/assets/publications/comics/comic_big.png`}
        alt="PDF Icon"
      />

      <div>
        Testing and certification (T&C) play a crucial role in our daily life.
        For instance, they help ensuring toy safety, examining energy efficiency
        level and ascertaining the functionality of clothings. In Hong Kong, a
        number of accredited private T&C organisations are serving the community
        by upholding the quality and safety of a wide range of products and
        services.
      </div>

      <div>
        This comic series showcase the importance of T&C in our daily life. Hope
        you enjoy reading these interesting stories!
      </div>
      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {publicationsInfo.map((item, index) => {
          const { img, title } = item;
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px]"
            >
              <div className="flex-shrink-0 relative w-full h-[190px]">
                <img
                  className="border-2 border-inherit w-full h-full object-cover"
                  src={`${process.env.PUBLIC_URL}/assets/publications/pamphlets/${img}`}
                  alt={img}
                />
                {/* Icon */}
                <img
                  className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                  alt="PDF Icon"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-highlight-l">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
