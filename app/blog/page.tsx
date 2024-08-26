import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import { posts } from "@/data/blog"
import { cn } from "@/lib/utils"
import { calculateReadingTime, formatDate, slugify } from "@/lib/strings"
import { BookA, CalendarPlus, Contact, NotebookPen, NotepadText } from "lucide-react"

const Circle = () => {
  return (
    <div className="h-12 w-12 bg-green-500/60 rounded-full" />
  )
}

const BlogPage = () => {
  const tags = posts.map(post => post.tags)
    .flat().filter((tag, index, self) => self.indexOf(tag) === index)
    .map(tag => { return { label: tag, slug: slugify(tag) } });
  return (
    <main className="mt-24 flex flex-1 flex-col gap-8 justify-center items-center">
      {/* heading */}
      <div className="flex gap-12 justify-center items-center">
        <Circle />
        <h1 className="text-5xl">
          Find my
          <span className="text-purple-500 px-2">
            Blogs
          </span>
          here
        </h1>
        <Circle />
      </div>
      {/* Tags */}
      <div className="flex flex-wrap max-w-full gap-2 justify-center items-center">
        {tags.map(tag => (
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-transparent pt-3 hover:bg-purple-500/60 hover:text-white transition duration-1000"
            )}
            href={`/blog/tag/${tag.slug.toLocaleLowerCase() === "all" ? "" : tag.slug.toLocaleLowerCase()}`}
            key={tag.slug}
          >
            {tag.label}
          </Link>
        ))}
      </div>
      {/* Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full justify-center items-center">
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
    </main>
  )
}

export default BlogPage