import { Variants } from "framer-motion";

export const variants: Variants = {
    open: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        display: 'flex'
    },
    closed: {
        transition: { staggerChildren: 0.1, staggerDirection: -1, delayChildren: 0.1, when:'afterChildren' },
        display: 'none'
    }
}
export const itemVariants: Variants = {
    open: {
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

export const transition = {
    type: "spring",
    stiffness: 400,
    damping: 10
};