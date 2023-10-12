
import type { Metadata } from 'next'

import { BlogTitle, BlogDate } from './post.mdx';


export const metadata: Metadata = {
  title: BlogTitle,
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
