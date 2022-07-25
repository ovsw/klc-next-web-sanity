import { Books as Icon } from "phosphor-react";

export default {
  title: "Program Overview",
  name: "program",
  type: "object",
  icon: Icon,
  hidden: false,
  fields: [
    {
      name: "title",
      title: "Internal Title",
      type: "string",
      validation: (Rule) => Rule.required("missing Internal Title"),
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "icon",
    },
    prepare({ title, image }) {
      return {
        title: `[Program] ${title}`,
        media: image,
      };
    },
  },
};
