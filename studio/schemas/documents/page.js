// import { IoDocumentOutline as Icon } from "react-icons/io";
import { Browser as Icon } from "phosphor-react";
// import SlugInput from "sanity-plugin-prefixed-slug";
import { Gear, TextAlignLeft } from "phosphor-react";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: Icon,
  groups: [
    { title: "Content", name: "content", icon: TextAlignLeft, default: true },
    { title: "Settings / SEO", name: "settings", icon: Gear },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "settings",
      validation: (Rule) => Rule.required().error("Please enter a title"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        // urlPrefix: "http://www.thisisalongerurlhere.com/",
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Please enter a slug"),
      group: "settings",
    },
    {
      name: "modules",
      title: "Content",
      type: "array",
      of: [
        { type: "hero" },
        { type: "topBanner" },
        { type: "richText" },
        { type: "steps" },
        { type: "program" },
        { type: "pricing" },
        { type: "testimonials" },
        { type: "cta" },
        { type: "latestPosts" },
        { type: "allPosts" },
        { type: "about" },
      ],
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
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
