import { Newspaper as Icon } from "phosphor-react";

export default {
  title: "All Posts",
  name: "allPosts",
  type: "object",
  icon: Icon,
  hidden: false,
  fields: [
    {
      name: "title",
      title: "Internal Title",
      type: "string",
      validation: (Rule) => Rule.required("missing title"),
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "icon",
    },
    prepare({ title, image }) {
      return {
        title: `[All Posts] ${title}`,
        media: image,
      };
    },
  },
};
