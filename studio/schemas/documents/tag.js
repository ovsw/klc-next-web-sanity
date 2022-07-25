import { AiFillTags } from "react-icons/ai";

export default {
  name: "tag",
  title: "Tag",
  type: "document",
  icon: AiFillTags,
  groups: [
    { title: "Content", name: "content", default: true },
    { title: "Settings / SEO", name: "settings" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "settings",
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      title: "Journey Item",
      name: "journeyItemRef",
      type: "reference",
      to: { type: "pageJourneyItem" },
    },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "settings",
    },
  ],
};
