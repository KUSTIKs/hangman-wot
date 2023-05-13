import { Variants } from 'framer-motion';

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export { revealVariants };
