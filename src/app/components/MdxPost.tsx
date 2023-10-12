import Article, { BlogTitle, BlogDate } from '../mdx/page.mdx';

// Todo: Set meta
// We import entire article, so that we can set FC inside MDX itself

export default function MdxPost() {
    return (
        <main className="blog-post dark:text-white px-6c prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{BlogTitle}</h1>
            <h2>{BlogDate}</h2>
            <Article /> 
        </main>
    );
}