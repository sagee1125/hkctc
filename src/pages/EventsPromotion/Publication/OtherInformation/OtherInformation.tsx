import React from // { useState }
"react";
import {
  SquareTitle,
  // MediaDialog
} from "../../../../components";
// import { hkctcNewsletterList, MEDIA_TYPE } from "../../../../const";

export const OtherInformation: React.FC = () => {
  //   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  return (
    <div>
      <SquareTitle title="Other Useful Information" />
      {/* <div className="grid grid-cols-2 justify-start group border-2 border-inherit h-[278px] mt-[24px] gap-[24px]">
        <div className="overflow-hidden">
          <img
            className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            src={
              process.env.PUBLIC_URL +
              "/assets/eventsLanding/seminarsWorkshops/" +
              imagePath
            }
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-center py-[24px] pr-[24px] gap-[24px]">
          <div
            className="text-heading-m text-start w-full 
                group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out"
          >
            {title}
          </div>
        </div>
      </div> */}

      {/* {isPreviewOpen && (
        <MediaDialog
          mediaType={currentReport.mediaType}
          setIsPreviewOpen={setIsPreviewOpen}
          title={currentReport.title}
          link={currentReport.link}
        />
      )} */}
    </div>
  );
};
