import { motion, Variants } from "framer-motion";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "just",
      bounce: 0.2,
      duration: 0.3,
    },
  },
};

type Props = {
  children: React.ReactNode;
  itemCount: number;
};

export default function MotionWrapper({ children, itemCount }: Props) {
  const [grow, setGrow] = useState(itemCount);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGrow(itemCount);
      // setGrow(false);
    }, 140);
    return () => clearTimeout(timer);
  }, [itemCount]);

  return (
    <motion.div
      className="box noselect"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
    >
      <Box
        sx={{
          transition: "all .2s ease-in-out",
          transform: `${
            grow === itemCount
              ? "scale(1)"
              : grow > itemCount
              ? "scale(0.97);"
              : "scale(1.03)"
          }`,
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
}
