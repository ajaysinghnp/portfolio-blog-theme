import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export const options = {
  mdxOptions: {
    format: "md",
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["subheading-anchor"],
          },
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["icon", "icon--link"] },
            children: [{ type: "text", value: "🔗" }],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          defaultLang: "plaintext",
          transformers: [
            transformerCopyButton({
              visibility: "always",
              feedbackDuration: 3_000,
              // copyIcon: "📋",
              // successIcon: "🎉",
            }),
          ],
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className.push("word--highlighted");
          },
        },
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
};
