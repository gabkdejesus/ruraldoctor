import getFormattedDate from "../../../../lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation"
import Link from "next/link"


// Since we know our blog posts in advance
// We can turn posts from SSR (server side rendering) to SSG (static site generation)
export function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        postId: post.id
    }))
}

function generateMetaData({ params }: { params: { postId: string}}) {
    //deduped, no need to send request twice
    const posts = getSortedPostsData();
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post not Found'
        }
    }

    return {
        title: post?.title,
        
    }
}

export default async function Post({ params }: { params: { postId: string}}) {
    //deduped, no need to send request twice
    const posts = getSortedPostsData();

    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const {title, date, contentHtml } = await getPostData(postId);

    const pubDate =  getFormattedDate(date);

    return (
        <main className="blog-post dark:text-white px-6c prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                {/* <ScrollVideo className="full-width" src="/videos/shatter.mp4"/> */}
                <p>
                    <Link href="/">Back to Home</Link>
                </p>
            </article>
        </main>
    )
}