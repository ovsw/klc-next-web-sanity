import imageUrlBuilder from "@sanity/image-url";
import client from "part:@sanity/base/client";

export const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};
