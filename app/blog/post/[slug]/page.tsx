import { MDX } from "@/components/mdx";
import { posts, type Post } from "@/data/blog";
import { calculateReadingTime, slugify } from "@/lib/strings";
import { Tag } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: Props) => {
  const { slug } = params;
  const post = posts.find((post: Post) => post.slug === slug);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-3xl tracking-wide leading-3">{post?.title}</h1>
      <div className="flex justify-between items-center pr-4">
        <p className="text-muted-foreground tracking-normal">{post?.excerpt}</p>
        <div className="flex flex-row-reverse gap-1">
          <p className="text-muted-foreground tracking-normal">{calculateReadingTime(post ? post.content : "")}</p>
          {post?.tags.map(tag => (
            <Link href={`/blog/tag/${slugify(tag)}`} key={tag}>
              <div className="w-full h-full flex gap-1 justify-between items-center pt-1 border border-slate-600/60 hover:bg-purple-500/60 hover:text-white px-1 rounded text-muted-foreground transition duration-1000" key={tag}>
                <Tag className="h-3 w-3" />
                <span className="leading-4 text-sm">{tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MDX source={post?.content} />
    </main>
  );
};

export default BlogPage;
