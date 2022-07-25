import { IoFootstepsOutline as Icon } from "react-icons/io5";
import preview from "part:sanity-plugin-icon-picker/preview";
import { Gear, TextAlignLeft } from "phosphor-react";

export default {
  name: "pageJourneyItem",
  title: "Journey Item Page",
  type: "document",
  icon: Icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  groups: [
    { title: "Content", name: "content", icon: TextAlignLeft, default: true },
    { title: "Journey Info", name: "journey", icon: Icon },
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
      name: "tag",
      title: "Blog Tag",
      type: "reference",
      to: [{ type: "tag" }],
      // options: {
      //   hidden: false,
      // },
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
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        providers: [
          // "f7",
          "fa",
          // "mdi",
          // "sa",
          // "hi",
          // "fi"
        ],
        outputFormat: "react",
        filter: [
          // "FaBook",
          // "FaCalendar",
          "FaMapMarkerAlt",
          "FaUser",
          // "FaShoePrints",
          "FaStar",
          "FaRoute",
          // "FaProjectDiagram",
          "FaFlag",
          "FaUsers",
          "FaMap",
          // "FaMapSigns",
          // "FaDumbbell",
          "FaHeart",
          "FaRunning",
          "FaFeatherAlt",
          "FaShieldAlt",
          "FaSpa",
          "FaCompass",
          "FaMountain",
          // /^arrow/i
        ],
      },
      group: "journey",
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
      icon: "icon",
    },
    prepare({ title, author, media, icon }) {
      return {
        title,
        subtitle: author && `by ${author}`,
        media: icon && preview(icon),
      };
      // return Object.assign({}, selection, {
      //   subtitle: author && `by ${author}`,

      // });
    },
  },
};
