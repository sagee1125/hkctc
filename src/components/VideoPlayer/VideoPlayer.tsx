import React, { useEffect, useRef } from "react";

type VideoPlayerProps = {
  videoLink: string;
  thumbnail: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
  thumbnail,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCanPlay = (): void => {
    videoRef.current?.pause();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.preload = "metadata";
      video.load();
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-full h-auto relative">
      <video
        ref={videoRef}
        key={videoLink}
        className="w-full"
        loop
        muted
        onCanPlay={handleCanPlay}
        controls
        autoPlay
        preload="metadata"
        poster={"assets/careerEducation/" + thumbnail + ".png"}
      >
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
};
