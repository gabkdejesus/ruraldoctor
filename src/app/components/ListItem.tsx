import Link from "next/link"
import getFormattedDate from "../../../lib/getFormattedDate";

type Props = {
    post: BlogPost
}

// Component for generating a blog post item
export default function ListItem({ post }: Props) {
    // Need to format date, but since we're doing it somewhere else
    // Let's make a lib function
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li className="mt-4 text-2xl dark:text-white/90" key={id}>
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )

}