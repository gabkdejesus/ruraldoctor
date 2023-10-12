"use client"

import { motion, useScroll, useSpring } from "framer-motion";

// Displays a scroll progress on top
export default function ScrollBar() {
    // Track vertical progress
    const { scrollYProgress } = useScroll();

    // Convert to horizontal value
    const scaleX = useSpring(scrollYProgress, { stiffness: 50, damping: 10 });
    
    return (
        <div>
            <motion.div className="progress-bar" style={{ scaleX }} />
        </div>
    )
}