"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

// Video Component 
export default function Video() {
    const vidRef = useRef(null);
    
    // Track scrolling
    const { scrollYProgress } = useScroll();

    function handleClick() {
        const frameTime = 1/30;
        const vid = vidRef.current;
        if (!vid) return;
        vid.currentTime = Math.max(0, vid.currentTime + frameTime);
        console.log('Next frame');
    }

    return (
        <div>
            <video ref={vidRef} src="./videos/wotw.mp4"></video>
            <button className="dark:invert" onClick={handleClick}>Next frame</button>
        </div>
    )
}