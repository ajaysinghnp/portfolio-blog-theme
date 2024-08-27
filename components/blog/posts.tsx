import Link from "next/link"

import { calculateReadingTime, formatDate } from "@/lib/strings"
import { cn } from "@/lib/utils"
import { Contact, NotebookPen, NotepadText } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Post } from "@/data/blog"

interface Props {
  posts: Post[]
}

const PostsSection = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full justify-center items-center">
      {posts.map(post => (
        <article className="flex flex-col gap-4 border border-zinc-600/60 rounded p-4" key={post.slug}>
          <div className="flex justify-between text-sm">
            <div className="flex gap-1">
              {post.tags.map(tag => (
                <span className="bg-purple-500/60 px-2 py-1 rounded text-white" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">{calculateReadingTime(post.content)}</p>
          </div>
          <Link href={`/blog/post/${post.slug}`}>
            <h2 className="text-2xl hover:text-purple-500 transition duration-1000">
              {post.title}
            </h2>
          </Link>
          <p className="text-muted-foreground">{post.excerpt}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-sm">
              <p className="flex gap-1">
                <Contact size={16} />
                {post.author}
              </p>
              <p className="flex gap-1">
                <NotebookPen size={16} />
                {formatDate(post.created_at)}
              </p>
              <p className="flex gap-1">
                <NotepadText size={16} />
                {formatDate(post.updated_at)}
              </p>
            </div>
            <Link href={`/blog/post/${post.slug}`}>
              <button className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full text-sm hover:bg-transparent hover:text-purple-500 transition duration-1000"
              )}>
                Read more <span className="px-2 pt-1">→</span>
              </button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PostsSection