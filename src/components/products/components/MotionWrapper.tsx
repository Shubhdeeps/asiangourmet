import { motion, Variants } from "framer-motion";

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
};

export default function MotionWrapper({ children }: Props) {
  return (
    <motion.div
      className="box noselect"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      // transition={{ type: "keyframes", stiffness: 400, damping: 10 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}
