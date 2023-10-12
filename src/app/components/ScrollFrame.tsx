"use client"

import React, { useRef, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

// Plays a video frame by frame on scroll
// https://stackoverflow.com/questions/63890401/play-pause-video-onscroll-in-reactjs
// https://codesandbox.io/s/strange-smoke-p9hmx?file=/src/App.js
// https://web.dev/replace-gifs-with-videos/    
export default function ScrollFrame( params: {className: string, srcs: string[]}) {
    const divRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ["start center", "end center"]
    });

    // Track frames to scroll
    var currFrame = 0;
    const numFrames = params.srcs.length;
    var scrollJump = 1 / numFrames;
    var scrollTargetUpper = scrollJump;
    var scrollTargetLower = 0;
    var framesReady = false;

    useMotionValueEvent(scrollYProgress, "change", (scrollCurr) => {
        console.log("Page scroll: ", scrollCurr, scrollTargetUpper)

        if (framesReady) {
            
            // If scrolling down to frame 2
            if (scrollCurr > scrollTargetUpper && currFrame !== numFrames - 1) {
                console.log('Switching Frames to', currFrame)
                document.querySelector(`.frame-image-${currFrame+1}`)?.classList.remove("hidden");
                document.querySelector(`.frame-image-${currFrame}`)?.classList.add("hidden");
                currFrame++;
                scrollTargetUpper += scrollJump
                scrollTargetLower += scrollJump
            } 
            // Scrolling up 
            else if (scrollCurr < scrollTargetLower && currFrame !== 0) {
                console.log('Reverse Frame to', currFrame - 1)
                document.querySelector(`.frame-image-${currFrame-1}`)?.classList.remove("hidden");
                document.querySelector(`.frame-image-${currFrame}`)?.classList.add("hidden");
                currFrame--;
                scrollTargetUpper -= scrollJump
                scrollTargetLower -= scrollJump
            }
        }
    });


    useEffect( () => {
        document.querySelector('.frame-image-0')?.classList.remove("hidden");
        framesReady = true;
    }, []);


    return (
        <div ref={divRef} className="frame-div">
            {params.srcs?.map(( src, index ) => {
                return (
                    <img key={index} src={src} className={`hidden frame-image-${index} ${params.className}`}></img>
                );
            })}
        </div>
    )
}