// import React from "react";
// import Emoji from "a11y-react-emoji";
// const Icon = () => <Emoji style={{ fontSize: "2rem" }} symbol="📺" />;
import { AppWindow as Icon } from "phosphor-react";

export default {
  title: "Hero",
  name: "hero",
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
    // {
    //   name: "text",
    //   title: "Paragraph text",
    //   type: "simpleBlockTextEnhanced",
    //   validation: (Rule) => Rule.required("missing text"),
    // },
    // {
    //   name: "video",
    //   title: "Video Background",
    //   type: "string",
    //   validation: (Rule) => Rule.required("missing video"),
    //   options: {
    //     list: [
    //       {
    //         title: "Performances Video",
    //         value: "performances1",
    //       },
    //       {
    //         title: "MST Live Video",
    //         value: "live1",
    //       },
    //     ],
    //   },
    // },
    // {
    //   name: "image",
    //   title: "Background Image",
    //   description: "Acts as a backdrop for the hero.",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    //   validation: (Rule) => Rule.required().error("missing image"),
    // },
    // {
    //   name: "buttonText",
    //   title: "Button Text",
    //   type: "string",
    // },
    // {
    //   name: "url",
    //   title: "Button Link",
    //   type: "string",
    // },
  ],
  preview: {
    select: {
      title: "title",
      image: "icon",
    },
    prepare({ title, image }) {
      return {
        title: `[Hero] ${title}`,
        media: image,
      };
    },
  },
};
