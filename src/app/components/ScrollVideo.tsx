"use client"

import React, { useState, useRef, useEffect } from 'react';

// Plays a video on scroll 
// https://stackoverflow.com/questions/63890401/play-pause-video-onscroll-in-reactjs
// https://codesandbox.io/s/strange-smoke-p9hmx?file=/src/App.js
export default function ScrollVideo( params: {className: string, src: string}) {


    const [playing, setPlaying] = useState(false);
    const vidRef = useRef(null);

    useEffect( () => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        }

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    vidRef.current.play();
                    console.log('Video playing');
                } else {
                    vidRef.current.pause();
                    console.log('Video paused');
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(vidRef.current);
    });

    return (
        <>
            <video className={params.className} ref={vidRef} src={params.src} loop></video>
        </>
    )
}