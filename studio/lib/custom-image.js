// from HULL
import React from "react";
import { urlFor } from "./image";

export default ({ hasDisplayOptions = true, ...props } = {}) => {
  const crops = [
    { title: "Original", value: 0 },
    { title: "1 : 1 (square)", value: 1 },
    { title: "5 : 7", value: 0.7142857143 },
    { title: "4 : 6", value: 0.6666666667 },
    { title: "16 : 9", value: 1.7777777778 },
  ];

  return {
    title: "Photo",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      ...(hasDisplayOptions
        ? [
            {
              title: "Display Size (aspect ratio)",
              name: "customRatio",
              type: "number",
              options: {
                isHighlighted: true,
                list: crops,
              },
              validation: (Rule) => {
                return Rule.custom((field, context) =>
                  "asset" in context.parent && field === undefined
                    ? "Required!"
                    : true
                );
              },
            },
          ]
        : []),
      {
        title: "Alternative text",
        name: "alt",
        type: "string",
        description:
          "It is advised to set the alt text from the Media Library, so that it's automatically referenced everyhwere that image is used. Failing thatm you can enter an ALT tag text here.",
        // options: {
        //   isHighlighted: true, // <-- make this field easily accessible
        // },
      },
    ],
    preview: {
      select: {
        asset: "asset",
        customAlt: "alt",
        customRatio: "customRatio",
        assetAlt: "asset.alt",
        url: "asset.url",
      },
      prepare({ alt, customRatio, asset, assetAlt, url }) {
        const crop = crops.find((crop) => crop.value === customRatio);
        return {
          title: asset.alt ?? alt ?? "(alt text missing)",
          subtitle: crop.title,
          // media: asset,
          // because of a bug that prevents the image from being loaded when referencing any attribute of "asset" on an image type field
          // such as "asset.alt", we build the image url manually instead
          // it's either this, or we lose the ability to get the alt text of the image from the media asset via "asset.alt":
          media: <img src={urlFor(url).fit("max").url()} alt="placeholder" />,
        };
      },
    },
    ...props,
  };
};
