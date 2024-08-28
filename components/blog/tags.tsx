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
            "bg-transparent pt-3 hover:bg-purple-500/60 hover:text-white transition duration-1000 relative group"
          )}
          href={`/blog/tag/${tag.slug.toLocaleLowerCase() === "all" ? "" : tag.slug.toLocaleLowerCase()}`}
          key={tag.slug}
        >
          {tag.label} <span className="pl-1 text-purple-500 group-hover:text-white duration-1000">{"{ "}{tag.count}{" }"}</span>
        </Link>
      ))}
    </div>
  )
}

export default TagsSection