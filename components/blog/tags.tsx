import { getTags } from '@/data/blog';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const TagsSection = () => {
  const tags = getTags();
  return (
    <div className="flex flex-wrap max-w-full gap-4 justify-center items-center">
      {tags.map(tag => (
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-transparent pt-3 hover:bg-purple-500/60 hover:text-white transition duration-1000 relative"
          )}
          href={`/blog/tag/${tag.slug.toLocaleLowerCase() === "all" ? "" : tag.slug.toLocaleLowerCase()}`}
          key={tag.slug}
        >
          {tag.label}{" ("}{tag.count}{")"}
        </Link>
      ))}
    </div>
  )
}

export default TagsSection