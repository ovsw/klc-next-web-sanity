import sanityClient from "@sanity/client";

const options = {
  projectId: process.env.SANITY_PROJECT_ID || "qh6kt7y6",
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2021-10-21",
  // useCdn =  faster data but cached / can be stale
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
};

export default sanityClient(options);
