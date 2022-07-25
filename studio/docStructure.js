/*  this specifies which document types shoudl be hidden 
    from the "create new" menu inside Sanity Studio */

import S from "@sanity/base/structure-builder";

// all singletons, cause we only ever want one of each
const singletons = [
  "pageHome",
  "generalSettings",
  "cookieSettings",
  "promoSettings",
  "headerSettings",
  "footerSettings",
  "shopSettings",
  "seoSettings",
  "media.tag", // for media plugin
];

/*  all the products and variants, since they're generated based
    on Shopify, and are read - only in Sanity */
// const shopify = ["product", "productVariant"];

// Special pages, fixed in number
const specialPages = ["pageJourneyStep", "pageJourneyItem"];

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (doc) =>
      !singletons.includes(doc.spec.id) && !specialPages.includes(doc.spec.id)
    //&& !shopify.includes(doc.spec.id)
  ),
];
