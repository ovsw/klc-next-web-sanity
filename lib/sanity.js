import sanityClient from "@sanity/client";

import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

import { config } from "./config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text components
// Read more: https://github.com/portabletext/react-portabletext
const components = {};

// Set up Portable Text
export const PortableText = (props) => (
  <PortableTextComponent components={components} {...props} />
);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

// //////////////////////////////////////////////////
// OLD CLIENT

const options = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gxq04sbj",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-10-21",
  // useCdn =  faster data but cached / can be stale
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

export default sanityClient(options);
// //////////////////////////////////////////////////
