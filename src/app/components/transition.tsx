import { motion } from "framer-motion";
import React from "react";

const Transition = (props: {title: string}) => {
    return (
        <>
            {/* slide-in */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-[#fefbf5] origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div>

            {/* slide-out */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-[#fefbf5] origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div>
        </>
    );
}

export default Transition;