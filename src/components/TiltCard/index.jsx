import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import './TiltCard.scss';

export const TiltCard = ({ children, width = 300, height = 400 }) => {
  const cardRef = useRef(null);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothed motion
  const rotateX = useSpring(useTransform(y, [-1, 1], [10, -10]), { stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-10, 10]), { stiffness: 200 });

  // Handle mouse movement inside card
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const percentX = (offsetX / rect.width) * 2 - 1; // -1 to 1
    const percentY = (offsetY / rect.height) * 2 - 1;

    x.set(percentX);
    y.set(percentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card"
      style={{
        // width,
        // height,
        // borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        perspective: 1000,
        background: "#fff",
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "#fff",
          boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
          borderRadius: "inherit",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};