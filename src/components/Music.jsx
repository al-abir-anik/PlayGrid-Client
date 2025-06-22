import { useEffect, useRef, useState } from "react";

const Music = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioElementRef.current?.pause();
      } else if (isAudioPlaying) {
        audioElementRef.current?.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isAudioPlaying]);

  return (
    <div className="w-10 h-10 p-1 bg-blue200/30 hover:bg-blue200/80 backdrop-blur-lg shadow rounded-sm">
      <button
        onClick={toggleAudioIndicator}
        className="w-full h-full flex items-center justify-center space-x-1 border border-blue50 hover:border-blue50/30 transition-all rounded-xs cursor-pointer"
      >
        <audio
          ref={audioElementRef}
          className="hidden"
          src="/audio/loop.mp3"
          loop
        />
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
            style={{
              animationDelay: `${bar * 0.1}s`,
            }}
          />
        ))}
      </button>
    </div>
  );
};

export default Music;
