import { FlagBanner as Icon } from "phosphor-react";

export default {
  title: "Top Banner",
  name: "topBanner",
  type: "object",
  icon: Icon,
  hidden: false,
  fields: [
    {
      name: "title",
      title: "Title Heading",
      type: "string",
      validation: (Rule) => Rule.required("missing heading"),
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "icon",
    },
    prepare({ title, image }) {
      return {
        title: `[Top Banner] ${title}`,
        media: image,
      };
    },
  },
};
