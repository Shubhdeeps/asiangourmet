import { Variants, motion } from "framer-motion";

export default function DashWrapperUp({
  children,
}: {
  children: React.ReactNode;
}) {
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
        duration: 0.3,
      },
    },
  };
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      {children}
    </motion.section>
  );
}
