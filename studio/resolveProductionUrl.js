// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "HULL"; //j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://kidslifecoachingusa.vercel.app`; //http://www.kidslifecoachingusa.com
const localUrl = `http://localhost:3000`;

// `*[_type=="pageJourneyStep" && references($id)].slug.current`;

function getFrontEndSlug(doc) {
  const currentPageSlug = doc?.slug?.current;

  // return correct full slug based on doc._type
  switch (doc._type) {
    case "page":
      return currentPageSlug || `/`;
    case "pageJourneyStep":
      return `the-journey/${currentPageSlug}`;
    // case "pageJourneyItem":
    //   return `the-journey/planning-your-journey/${currentPageSlug}`;
    case "tag":
      return `tags/${currentPageSlug}`;
    case "item":
      return `the-journey/${currentPageSlug}`;
    default:
      // return `${doc._type}`;
      return `${doc.slug.current || "/"}`;
  }
}

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, getFrontEndSlug(doc));

  return previewUrl.toString();
}
