import { posts } from "@/data/blog"
import TagsSection from "@/components/blog/tags"
import PostsSection from "@/components/blog/posts"
import { Circle } from "@/components/circle"

const BlogPage = () => {
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
      <TagsSection />
      {/* Posts */}
      <PostsSection posts={posts} />
    </main>
  )
}

export default BlogPage