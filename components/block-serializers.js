import SampleImageComponent from "./photo";

export const blockSerializers = {
  // ========================= TYPES (images, etc) =========================
  /* An object of React components that renders different types of objects that might appear both as part of the input array, or as inline objects within text blocks - eg alongside text spans. */
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },

  // ========================= MARKS (spans, links, etc) =========================
  /* Object of React components that renders different types of marks that might appear in spans. Marks can be either be simple "decorators" (eg emphasis, underline, italic) or full "annotations" which include associated data (eg links, references, descriptions). */
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },

  // ========================= BLOCK (headings, etc) =========================
  block: {
    /* An object of React components that renders portable text blocks with different style properties. The object has the shape {styleName: ReactComponent}, where styleName is the value set in individual style attributes on blocks (normal being the default). */

    // Customize block types with ease
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,

    // Same applies to custom styles
    // customHeading: ({ children }) => (
    //   <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    // ),
  },

  // ========================= LIST =========================
};
