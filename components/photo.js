import { urlFor } from "lib/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <>
      <Image
        src={urlFor(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        width={width}
        height={height}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    </>
  );
};
export default SampleImageComponent;
