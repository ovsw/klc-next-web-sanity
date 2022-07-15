import { groq } from "next-sanity";

// Construct our "home" and "error" page GROQ
export const homeID = groq`*[_type=="generalSettings"][0].home->_id`;
export const homeSlug = groq`*[_type=="generalSettings"][0].home->slug.current`;
export const shopID = groq`*[_type=="generalSettings"][0].shop->_id`;
export const errorID = groq`*[_type=="generalSettings"][0].error->_id`;
export const journeyID = groq`*[_type=="generalSettings"][0].journey->_id`;

// Construct our "page" GROQ
const page = groq`
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isShop": _id == ${shopID}
`;

// Construct our "modules" GROQ
export const modules = groq`
    ...,
    _type == "latestPosts" => {
       
        "posts": *[_type == "post"][0...3] {
            ...,
        } | order(publishedAt desc)
    }
`;

// constuct our "post summary" GROQ
const postSummaryFields = groq`
  {title, publishedAt, mainImage, slug}
`;

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

// ============================================
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
          mainImage,
          publishedAt,
          rteBody,
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
              {title, "slug": slug.current, publishedAt}
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
              {title, "slug": slug.current, publishedAt} 
              | order(publishedAt desc),
        },
      },
      ${site}
    }
  `;
