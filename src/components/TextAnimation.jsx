import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function TextAnimation({ children }) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  function rubberBand() {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    });
    setIsPlaying(true);
  }

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) 
        rubberBand()
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
}
