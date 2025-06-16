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

  return (
    <div className="bg-blue200 rounded-sm fixed right-6 bottom-4 z-[100]">
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
