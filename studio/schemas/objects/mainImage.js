export default {
  title: "Main image",
  name: "mainImage",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alt text",
      type: "string",
      description:
        "Alternative text that describes the image. Really important for SEO. If left empty, the image ALT text from the media library will be used.",
    },
  ],
};
