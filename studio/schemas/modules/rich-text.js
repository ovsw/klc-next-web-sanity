import { TextT as Icon } from "phosphor-react";

export default {
  title: "Rich Text",
  name: "richText",
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
    {
      name: "rteBody",
      title: "Body",
      type: "complexPortableText",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "icon",
    },
    prepare({ title, image }) {
      return {
        title: `[Rich Text] ${title}`,
        media: image,
      };
    },
  },
};
