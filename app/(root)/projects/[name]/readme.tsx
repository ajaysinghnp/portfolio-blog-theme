import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export interface Props {
  readMe: string;
}

const ReadMePage = async ({ readMe }: Props) => {
  if (!readMe) return <div>Loading...</div>;
  const mdxSource = await serialize(readMe);
  return (
    <article className="px-4 py-12 mx-auto text-white">
      ReadMePage
      {readMe && mdxSource && <MDXRemote {...mdxSource} />}
    </article>
  );
};

export default ReadMePage;
