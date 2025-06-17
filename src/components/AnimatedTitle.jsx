import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, containerClass, titleAlignClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const contxt = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => contxt.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title special-font ${containerClass}`}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className={`max-w-full flex-wrap gap-2 md:gap-3 ${
            titleAlignClass || "flex-center"
          }`}
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
