import { posts } from "@/data/blog"
import TagsSection from "@/components/blog/tags"
import PostsSection from "@/components/blog/posts"
import { Circle } from "@/components/circle"

const BlogPage = () => {
  return (
    <main className="mt-20 flex flex-1 flex-col gap-12 justify-center items-center">
      {/* heading */}
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">
          Find my
          <span className="text-purple-500 px-2">
            Blogs
          </span>
          here
        </h1>
      </div>
      {/* Tags */}
      <TagsSection />
      {/* Posts */}
      <PostsSection posts={posts} />
    </main>
  )
}

export default BlogPage