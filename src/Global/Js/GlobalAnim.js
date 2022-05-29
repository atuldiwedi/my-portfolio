export const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const H1Variants = {
  hidden: {
    y: "100hv",
  },
  visible: {
    x: 0,
    transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.5 },
  },
  transition: {
    stiffness: 60,
    type: "spring",
  },
};

export const TextVariant = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const boxVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.5 },
  },
  transition: {
    stiffness: 60,
    type: "spring",
  },
};
