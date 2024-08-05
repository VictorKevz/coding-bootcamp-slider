
export const imageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 1.1, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 1 },
};

export const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 1.2, ease: "easeIn" },
  },
};

export const entryVariants = {
  initial: { opacity: 0, y: "-100%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.2, stiffness: 100, damping: 30 },
  },
};
