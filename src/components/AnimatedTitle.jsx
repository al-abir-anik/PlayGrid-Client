import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass, titleAlignClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      // ✅ Default: make words visible on small/medium screens
      mm.add("(max-width: 1023px)", () => {
        gsap.set(".animated-word", {
          opacity: 1,
          transform: "none",
        });
      });

      // ✅ Animate only on lg and up
      mm.add("(min-width: 1024px)", () => {
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
      });
    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
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
            titleAlignClass || "flex justify-center items-center"
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
