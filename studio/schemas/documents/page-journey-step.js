import { LadderSimple as Icon, Gear, TextAlignLeft } from "phosphor-react";
import { IoFootstepsOutline } from "react-icons/io5";

export default {
  name: "pageJourneyStep",
  title: "Journey Step Page",
  type: "document",
  icon: Icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  groups: [
    { title: "Content", name: "content", icon: TextAlignLeft, default: true },
    { title: "Journey Info", name: "journey", icon: IoFootstepsOutline },
    { title: "Settings / SEO", name: "settings", icon: Gear },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: ["settings", "journey"],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "settings",
    },
    {
      title: "Step Items",
      name: "stepItemsRefsArr",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "pageJourneyItem" }],
        },
      ],
      group: "journey",
    },
    // {
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "blockContentDefaul",
    // },
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
