
import type { Metadata } from 'next'
import './styles.module.css'

const PostMeta = require('./post.mdx');


export const metadata: Metadata = {
  title: PostMeta.BlogTitle
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        {children} 
    </main>
  )
}
