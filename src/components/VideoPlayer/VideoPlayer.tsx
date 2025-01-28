import React, { useRef, useState } from "react";
import { PlayCircleOutline, Pause } from "@mui/icons-material";

type VideoPlayerProps = {
  videoLink: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

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

  const onMouseEnter = () => {
    setShowControls(true);
  };

  const onMouseLeave = () => {
    setShowControls(false);
  };
  return (
    <div
      className="w-full h-auto cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showControls && (
        <div
          className="h-auto absolute text-[#ffffff] "
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause /> : <PlayCircleOutline />}
        </div>
      )}
      <video ref={videoRef} className="w-full" onClick={handlePlayPause} loop>
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
};
