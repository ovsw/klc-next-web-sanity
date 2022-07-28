import { groq } from "next-sanity";

// Construct our "home" and "error" page GROQ
export const homeID = groq`*[_type=="generalSettings"][0].home->_id`;
export const homeSlug = groq`*[_type=="generalSettings"][0].home->slug.current`;
export const shopID = groq`*[_type=="generalSettings"][0].shop->_id`;
export const journeyHomeID = groq`*[_type=="generalSettings"][0].journey->_id`;
export const tagsHomeID = groq`*[_type=="generalSettings"][0].tags->_id`;
export const errorID = groq`*[_type=="generalSettings"][0].error->_id`;

// =====================================
// =========== MENU QUERIES ============

// Construct our "page" GROQ
const page = groq`
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isShop": _id == ${shopID}
`;

// Construct our "link" GROQ
const link = `
  _key,
  _type,
  title,
  url,
  "page": page->{
    ${page}
  }
`;

// ===================
// CONTENT SUB-QUERIES

// Construct our "image meta" GROQ
export const imageMeta = `
  "alt": coalesce(alt, asset->altText),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`;

// get the alt attribute specified in the Media Library when fetching images inside portable text field
export const rteBodyWithImageAltFromLibrary = groq`
  rteBody[] {
    ...,
    _type == "image" => {
      ...,
      "mediaAlt": asset->altText,
      "lqip": asset->metadata.lqip
    }
  },
  `;

// constuct our "post summary" GROQ
const postSummaryFields = groq`
  {
    title, 
    publishedAt, 
    mainImage {
      ...,
      image {
       ...,
       "mediaAlt": asset->altText,
       "lqip": asset->metadata.lqip
      }
    }, 
    "slug": slug.current
  }
`;

// Construct our "modules" GROQ
export const modules = groq`
    ...,
    type == "richText" => {
      ...,
      ${rteBodyWithImageAltFromLibrary}
    },
    _type == "latestPosts" => {
       
        "posts": *[_type == "post"][0...3] ${postSummaryFields} | order(publishedAt desc)
    },
    _type == "allPosts" => {
        "posts": *[_type == "post"] ${postSummaryFields} | order(publishedAt desc)
    }
`;

// ==========================
// Construct our "site" GROQ
export const site = groq`
  "site": {
    "title": *[_type == "generalSettings"][0].siteTitle,
    "rootDomain": *[_type == "generalSettings"][0].siteURL,
    "cookieConsent": *[_type == "cookieSettings"][0]{
      enabled,
      message,
      "link": link->{"type": _type, "slug": slug.current}
    },
    "seo": *[_type == "seoSettings"][0]{
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      "shareGraphic": shareGraphic.asset->url,
      "favicon": favicon.asset->url,
      "faviconLegacy": faviconLegacy.asset->url,
      "touchIcon": touchIcon.asset->url,
    },
    "gtmID": *[_type == "generalSettings"][0].gtmID,
    "recentPosts": *[_type == "post" && defined(slug) ]| order(publishedAt desc)[0...3] ${postSummaryFields},
    "tags": *[_type == "tag" && defined(slug)] {title, slug, journeyItemRef->{title, slug}},
    "journeySteps": *[_type == "pageJourneyStep" && defined(slug)] | order(_createdAt asc) {title, slug} ,
  }
`;
// ================
// PAGE SUB-QUERIES

// Construct our "fixerd page" GROQ that gets the page data with site data
export function formFixedPageQueryWSiteData(pageQuery) {
  return groq`{
    "page": ${pageQuery},
    ${site}
  }`;
}

// ===============
// PAGE QUERIES

//  for [...slug]
export const rootPageQuery = groq`
    {
      "page": *[_type in ["page", "post"] && slug.current in $slugVariations] | order(_updatedAt desc)[0]{
        "id": _id,
        _type,
        hasTransparentHeader,
        title,
        seo,
        // ============= page specific fields =============
        _type == "page" => {
          modules[]{
            defined(_ref) => { ...@->content[0] {
               ${modules}
            }},
            !defined(_ref) => {
               ${modules},
            }
          },
        },
        // ============= post specific fields =============
         _type == "post" => {
          title,
          categories[]->{title, slug, journeyItemRef->{title, slug}},
          mainImage {
            ...,
            image {
            ...,
            "mediaAlt": asset->altText,
            "lqip": asset->metadata.lqip
            }
          },
          publishedAt,
          ${rteBodyWithImageAltFromLibrary}
          author->{name, slug},
          'previousPost': *[_type == 'post' && publishedAt < ^.publishedAt] 
            | order(publishedAt desc)[0]
            ${postSummaryFields},
          'nextPost': *[_type == 'post' && publishedAt > ^.publishedAt] 
            | order(publishedAt asc)[0]
            ${postSummaryFields},
        },
      },
      ${site}
    }
  `;

//  for /the-journey/[...slug]
export const journeyStepPageQuery = groq`
    {
      "page": *[_type == "pageJourneyStep" && slug.current in $slugVariations] | order(_updatedAt desc)[0]{
        "id": _id,
        _type,
        hasTransparentHeader,
        title,
        seo,
        // ============= page specific fields =============
        modules[]{
          defined(_ref) => { ...@->content[0] {
              ${modules}
          }},
          !defined(_ref) => {
              ${modules},
          }
        },
        stepItemsRefsArr[]->{
          "slug": slug.current,
          title,
          icon,
          "journeyItemPosts": tag->{
              "posts": *[_type == "post" && references(^._id) && defined(slug)]
              ${postSummaryFields}
              | order(publishedAt desc)
          },
        },
      },
      ${site}
    }
  `;
export const journeyItemPageQuery = groq`
    {
      "page": *[_type == "pageJourneyItem" && slug.current in $slugVariations] | order(_updatedAt desc)[0]{
        "id": _id,
        _type,
        hasTransparentHeader,
        title,
        seo,
        // ============= posts related to this journey item page =============
        modules[]{
          defined(_ref) => { ...@->content[0] {
              ${modules}
          }},
          !defined(_ref) => {
              ${modules},
          }
        },
        icon,
        "journeyItemPosts": tag->{
          "posts": *[_type == "post" && references(^._id) && defined(slug)]
              ${postSummaryFields} 
              | order(publishedAt desc),
        },
      },
      ${site}
    }
  `;

//  for tags/[...slug]
export const tagPageQuery = groq`
    {
      "page": *[_type == "tag" && slug.current in $slugVariations] | order(_updatedAt desc)[0]{
        "id": _id,
        _type,
        hasTransparentHeader,
        title,
        seo,
        // ============= tag page specific fields =============        
        "relatedPosts": *[_type == "post" && references(^._id) && defined(slug)]
        ${postSummaryFields}
        | order(publishedAt desc),
      },
      ${site}
    }
  `;
