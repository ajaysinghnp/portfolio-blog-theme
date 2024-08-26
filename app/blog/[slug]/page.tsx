import { posts, type Post } from "@/data/blog";


type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return posts.map((post: Post) => ({ slug: post.slug }));
}

const BlogPage = ({ params }: Props) => {
  const slug = params?.slug;
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