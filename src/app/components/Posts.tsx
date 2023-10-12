import {getSortedPostsData} from "../../../lib/posts"
import ListItem from "./ListItem";

// Get posts from lib and render them
export default function Posts() {
    // Not awaiting anymore, since it's in server
    const posts = getSortedPostsData();
    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            <ul className="w-full">
                {posts.map(post =>  (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}