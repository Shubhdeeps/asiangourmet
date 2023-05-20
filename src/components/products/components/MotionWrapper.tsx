import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 200,
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
  onClick: () => void;
  children: React.ReactNode;
};

export default function MotionWrapper({ onClick, children }: Props) {
  return (
    <motion.div
      className="box noselect"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      // transition={{ type: "keyframes", stiffness: 400, damping: 10 }}
      variants={cardVariants}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
