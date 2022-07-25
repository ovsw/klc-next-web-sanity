import { ArrowArcRight as Icon } from "phosphor-react";

export default {
  title: "Call to Action",
  name: "cta",
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
        title: `[CTA] ${title}`,
        media: image,
      };
    },
  },
};
