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
    <div className="fixed right-6 bottom-4 z-[100] bg-blue200/30 backdrop-blur-lg shadow rounded-sm">
      <button
        onClick={toggleAudioIndicator}
        className="w-10 h-10 flex items-center justify-center space-x-1 m-1 border border-blue50 hover:border-blue50/60 transition-all duration-200 rounded-xs cursor-pointer"
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
