import { Quotes as Icon } from "phosphor-react";
import React from "react";

export default {
  name: "quote",
  type: "object",
  title: "Quote",
  icon: Icon,
  fields: [
    {
      name: "text",
      type: "text", // <= This can also be a Portable Text field
      title: "Text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      type: "string", // <= This could be a reference to an author document type, if you had that
      title: "Author",
    },
    // {
    //   name: "url",
    //   type: "url",
    //   title: "URL",
    //   description: "Source on the web",
    // },
  ],
  preview: {
    select: {
      text: "text",
      author: "author",
    },
    prepare({ text, author }) {
      return {
        title: text ?? "(quote text missing)",
        subtitle: author ?? "(author missing)",
        media: <Icon />,
      };
    },
  },
};
