import { posts, type Post } from "@/data/blog";

interface Props {
  params: {
    slug: string;
  }
}

const BlogPage = ({ params }: Props) => {
  const { slug } = params;
  const post = posts.find((post: Post) => post.slug === slug);
  return (
    <main
      className="flex flex-1 flex-col gap-4 p-4">
      <h1>{post?.title}</h1>
      <p>
        {post?.content}
      </p>
    </main>
  )
}

export default BlogPage