import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function TextAnimation({ children }) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  function fisheyeEffect() {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.2, 0.5, 1)",
        "scale3d(1.4, 1.5, 1)",
        "scale3d(1.2, 0.5, 1)",
        "scale3d(1, 1, 1)",
      ],
    });
    setIsPlaying(true);
  }

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) fisheyeEffect();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
}