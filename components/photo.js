import { urlFor } from "lib/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <div className="my-5">
      <Image
        src={urlFor(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || value.mediaAlt || " "}
        width={width}
        height={height}
        loading="lazy"
        // style={{
        //   // Display alongside text if image appears inside a block text span
        //   display: isInline ? "inline-block" : "block",

        //   // Avoid jumping around with aspect-ratio CSS property
        //   aspectRatio: width / height,
        // }}
      />
    </div>
  );
};
export default SampleImageComponent;
