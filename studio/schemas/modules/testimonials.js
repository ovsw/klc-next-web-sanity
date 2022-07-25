import { ChatTeardropText as Icon } from "phosphor-react";

export default {
  title: "Testimonials",
  name: "testimonials",
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
        title: `[Testimonials] ${title}`,
        media: image,
      };
    },
  },
};
