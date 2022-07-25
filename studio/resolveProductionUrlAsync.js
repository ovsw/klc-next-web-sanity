import sanityClient from "part:@sanity/base/client";

// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "HULL"; //j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://kidslifecoachingusa.vercel.app`; //http://www.kidslifecoachingusa.com
const localUrl = `http://localhost:3000`;

//

async function getJourneyItemPageParentSlug(doc) {
  const parentSlug = await sanityClient.fetch(
    `*[_type=="pageJourneyStep" && references("${doc._id}")].slug.current`
  );
  // console.log(
  //   "parentSlug QUERY",
  //   `*[_type=="pageJourneyStep" && references("${doc._id}")].slug.current`
  // );
  // console.log("parentSlug QUERY RESULT ", parentSlug);
  return parentSlug[0];
}

export default async function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  const currentPageSlug = doc?.slug?.current || "/";

  let fullFrontEndSlug = currentPageSlug;
  let parentSlug = "";

  if (doc._type === "pageJourneyItem") {
    parentSlug = await getJourneyItemPageParentSlug(doc);
    // console.log("PARENT SLUIG", parentSlug);
    fullFrontEndSlug = `the-journey/${parentSlug}/${currentPageSlug}`;
  }
  if (doc._type === "pageJourneyStep") {
    fullFrontEndSlug = `the-journey/${currentPageSlug}`;
  }
  if (doc._type === "tag") {
    fullFrontEndSlug = `tags/${currentPageSlug}`;
  }

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, fullFrontEndSlug);

  return previewUrl.toString();
}
