"use client"
import Article from './post.mdx';
import { useEffect } from "react";

// We put FC here instead of /components since it's dependent on the route
// This way we have access to layout.tsx too for article specific styles
// TODO get slug based on url and use that to import from mdx folder
export default function MdxJsx() {

    // Use custom bg color to match article
    // Alternatively, could use specific layout.jsx
    useEffect( () => {  
        if (document.querySelector("body") == null) return; // current may be null
        
        const body = document.querySelector<HTMLBodyElement>("body");
        if (body == null) return;
        body.classList.remove("from-zinc-950");
        body.classList.remove("via-stone-900");
        body.classList.remove("to-neutral-950");
        body.classList.add("bg-[#592e37]")
        
        const hide = document.querySelector(".hide-on-article");
        if (hide == null) return;
        hide.classList.add("hide");
    }, []);

    return (
        <>
            <main className="blog-post dark:text-white px-6c prose prose-xl prose-slate dark:prose-invert mx-auto">
            <Article /> 
        </main>
        </>
    );
}