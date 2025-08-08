import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickyScrollImage = () => {
  const sectionRef = useRef(null);
  const [scrollStart, setScrollStart] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const updatePosition = () => {
      const rect = sectionRef?.current?.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollStart(rect.top + scrollTop);
    };

    updatePosition();

    const timeoutId = setTimeout(updatePosition, 500); // in case images load late

    window.addEventListener("resize", updatePosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  // Scale from 1 to 2 in first 10% of scroll
  const scale = useTransform(
    scrollY,
    [scrollStart, scrollStart + 1000],
    [1, 2]
  );

  // Scroll image vertically in 3 parts
  const translateX = useTransform(
    scrollY,
    [scrollStart, scrollStart + 1000],
    ["0%", "-100%"]
  );

  // Scroll image vertically in 3 parts
  const translateY = useTransform(
    scrollY,
    [scrollStart + 1000, scrollStart + 3000, scrollStart + 6000],
    ["0%", "-90.33%", "-180.66%"]
  );

  const text1opacity = useTransform(
    scrollY,
    [scrollStart + 1000, scrollStart + 1500, scrollStart + 2000],
    [0, 1, 0]
  );

  const text2opacity = useTransform(
    scrollY,
    [scrollStart + 1500, scrollStart + 2000, scrollStart + 2500],
    [0, 1, 0]
  );

  const text3opacity = useTransform(
    scrollY,
    [scrollStart + 2000, scrollStart + 2500],
    [0, 1]
  );

  return (
    <section ref={sectionRef} className="scroll-section">
      <div className="image-wrapper">
        <motion.img
          src="/cyclist/mainScreen.png"
          alt="Animated"
          style={{ scale, x: translateX, y: translateY }}
          className="animated-image"
        />
      </div>
      <div className="scroll-section__text">
        <motion.div style={{ opacity: text1opacity }}>
          <p>
            Provides real-time weather updates, enabling cyclists to plan their
            journey and stay safe.
          </p>
          <p>
            Offers real-time stats on rides, miles, calories, and encountered
            dangers for informed cycling.
          </p>
        </motion.div>

        <motion.div style={{ opacity: text2opacity }}>
          <p>
            Tracks consecutive rule-compliant cycling sessions to encourage safe
            and responsible riding habits.
          </p>
        </motion.div>

        <motion.div style={{ opacity: text3opacity }}>
          <p>
            Customize visuals to match personal preferences for a safe cycling
            experience.
          </p>
          <p>
            Access frequently used routes with ease for convenient and familiar
            cycling experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StickyScrollImage;
