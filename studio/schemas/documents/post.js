import { IoDocumentTextSharp as Icon } from "react-icons/io5";
import { Gear, TextAlignLeft, Tag } from "phosphor-react";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: Icon,
  groups: [
    { title: "Content", name: "content", icon: TextAlignLeft, default: true },
    { title: "Post Info", name: "info", icon: Tag },
    { title: "Settings / SEO", name: "settings", icon: Gear },
  ],
  fields: [
    {
      name: "mainImage",
      title: "Cover image",
      type: "mainImage",
      description:
        "Appers in the post litings (lists of blog posts) in various pages trhoughout the site.",
      group: "info",
      validation: (Rule) =>
        Rule.required().error("You must provide a cover image"),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      group: ["settings", "info"],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "info",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      group: "info",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: ["settings", "info"],
    },
    {
      name: "categories",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
      options: {
        layout: "tags",
      },
      group: "info",
    },
    {
      name: "rteBody",
      title: "Body",
      type: "complexPortableText",
      group: "content",
    },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "settings",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage.image",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
