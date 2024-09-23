import RelatedPosts from "@/components/blog/related-posts";

interface Props {
  tags?: string[];
  slug?: string;
}

const RightSideBar = ({ tags, slug }: Props) => {
  return (
    <aside
      className="flex flex-col gap-2 p-4 border border-zinc-600/60 rounded">
      <RelatedPosts tags={tags} slug={slug} />
    </aside>
  )
}

export default RightSideBar