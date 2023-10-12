"use client"
import Article, { BlogTitle, BlogDate } from './post.mdx';
import { useEffect } from "react";

// We put FC here instead of /components since it's dependent on the route
// This way we have access to layout.tsx too for article specific styles
// TODO get slug based on url and use that to import from mdx folder
export default function MdxJsx() {

    // Use custom bg color to match article
    // Alternatively, could use specific layout.jsx
    useEffect( () => {  
        document.querySelector("body").classList.remove("from-zinc-950");
        document.querySelector("body").classList.remove("via-stone-900");
        document.querySelector("body").classList.remove("to-neutral-950");
        document.querySelector("body").classList.add("bg-[#592e37]")
        document.querySelector(".hide-on-article").classList.add("hide");;
    }, []);

    return (
        <>
            <main className="blog-post dark:text-white px-6c prose prose-xl prose-slate dark:prose-invert mx-auto">
            <Article /> 
        </main>
        </>
    );
}