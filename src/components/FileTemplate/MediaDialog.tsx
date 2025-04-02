import React, { memo, useRef, useState } from "react";
import { MEDIA_TYPE } from "../../const";
import { useSettings } from "../../context";
import { type ProxyDomain } from "./MediaTemplateWithDialog";

type MediaDialogProps = {
  setIsPreviewOpen: (open: boolean) => void;
  title: string;
  link: string;
  mediaType: MEDIA_TYPE;
  mediaDomain?: ProxyDomain;
};

// export const proxyHeadMapping: Record<ProxyDomain, string> = {
//   hkctc: "/hkctc-proxy",
//   "cpas-icac": "/cpas-icac-proxy",
//   hkbedc: "/hkbedc-proxy",
//   devb: "/devb-proxy",
//   takungpao: "/takungpao-proxy",
//   youtube: "/",
// };

// export const handleGetWholePDFUrl = (
//   domain: ProxyDomain,
//   link: string
// ): string => {
//   switch (domain) {
//     case "hkctc":
//       return `https://www.hkctc.gov.hk` + link;
//     case "cpas-icac":
//       return "https://cpas.icac.hk" + link;
//     case "hkbedc":
//       return `https://www.hkbedc.icac.hk` + link;
//     case "takungpao":
//       return `https://paper.takungpao.com` + link;
//     case "devb":
//       return `https://www.devb.gov.hk` + link;

//     default:
//       return link;
//   }
// };

export const MediaDialog: React.FC<MediaDialogProps> = ({
  setIsPreviewOpen,
  title,
  link: pdfHyperlink,
  mediaType,
  mediaDomain = "hkctc",
}: MediaDialogProps) => {
  const { withLoading, isPC, getSingleText } = useSettings();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePdfDownload = async () => {
    if (!pdfHyperlink) return;
    await withLoading(async () => {
      try {
        // const proxyHead = proxyHeadMapping[mediaDomain];
        // const response = await fetch(proxyHead + link);
        // const pdfBlob = await response.blob();
        // const pdfHyperlink = document.createElement("a");

        // pdfHyperlink.href = URL.createObjectURL(pdfBlob);
        // const originalFileName =
        //   link.split("/").pop() || title.replaceAll(" ", "_") + ".pdf";
        // pdfHyperlink.download = decodeURIComponent(originalFileName);
        // document.body.appendChild(pdfHyperlink);
        // pdfHyperlink.click();
        // document.body.removeChild(pdfHyperlink);
        // URL.revokeObjectURL(pdfHyperlink.href);

        const link = document.createElement("a");
        link.href = pdfHyperlink;

        const originalFileName =
          pdfHyperlink.split("/").pop() || title.replaceAll(" ", "_") + ".pdf";

        link.download = decodeURIComponent(originalFileName);

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    });
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // const pdfLink = `https://docs.google.com/viewer?url=${encodeURIComponent(
  //   handleGetWholePDFUrl(mediaDomain, pdfHyperlink)
  // )}&embedded=true&chrome=false`;

  const MemoizedIframe: React.FC<{
    src: string;
  }> = memo(({ src }) => {
    return (
      <iframe
        className="w-full h-full pt-[24px]"
        title="PDF Viewer"
        src={src}
      />
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[48px] bg-black bg-opacity-70">
      <div
        className={`bg-[#D4D4D4] p-4 ${
          isPC ? "w-[70vw] h-[90vh]" : "w-[80%] aspect-[384/240]"
        } relative `}
      >
        <button
          className="absolute top-2 right-2 px-2 cursor-pointer"
          onClick={() => setIsPreviewOpen(false)}
        >
          ✕
        </button>
        <div className="w-full h-full">
          {mediaType === MEDIA_TYPE.VIDEO && (
            <>
              {mediaDomain === "hkctc" ? (
                <video
                  ref={videoRef}
                  className="w-full h-full pt-[24px] object-cover"
                  title={title}
                  controls
                  onClick={handlePlayPause}
                >
                  <source src={pdfHyperlink} type="video/mp4" />
                </video>
              ) : (
                <iframe
                  className="w-full h-full pt-[24px]"
                  src={pdfHyperlink}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={title}
                />
              )}
            </>
          )}
          {mediaType === MEDIA_TYPE.PDF && (
            <>
              {/* instead of passing pdfLink */}
              <MemoizedIframe src={pdfHyperlink} />
              {mediaDomain === "hkctc" && isPC && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    className="bg-newPrimary text-white px-4 py-2"
                    onClick={handlePdfDownload}
                  >
                    {getSingleText("Download", "下載")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
