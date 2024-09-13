import { animate, motion } from "framer-motion";

export default function Inner({children}) {
    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    
}