import { groq } from "next-sanity";

// old client from "@sanity/client
import client from "./sanity";

// new client from "next-sanity"
import { getClient } from "./sanity.server";

const postFields = `// groq
  title, 
  'slug': slug.current
`;

const pageGenericFields = `// groq
  title, 
  'slug': slug.current
`;
const getAnyBySlugFields = `// groq
  _type, 
  'slug': slug.current
`;

const getJourneyStepPageBySlugFields = `// groq
  _type,
    stepItemsRefsArr[]->{
      "slug": slug.current,
      title,
      "journeyItemPosts": tag->{
          "posts": *[_type == "post" && references(^._id)]
          {title, "slug": slug.current, publishedAt}
          | order(publishedAt desc)
      },
    },
    title,
`;
const getJourneyItemPageBySlugFields = `// groq
  _type,
    "journeyItemPosts": tag->{
      "posts": *[_type == "post" && references(^._id)]
          {title, "slug": slug.current, publishedAt} | order(publishedAt desc),
      ...
    },
    title,
`;

export const getSectionsFields = groq`
   modules[] {
    _type == "videoHeroSection" => {
       ...
    }
  },
`;

/* Get All */
export async function getAllPosts() {
  const results = await client.fetch(`*[_type == "post"]{${postFields}}`);
  return results;
}
export async function getAllPagesGeneric() {
  const results = await client.fetch(
    `*[_type == "pageGeneric"]{${pageGenericFields}}`
  );
  return results;
}
export async function getAllPathsInfo() {
  // fetches the slugs for all items inside sanity that have a slug
  const results = await client.fetch(
    `// groq
      *[ _type != "pageJourneyItem" && slug.current != null]
      {
        _type,
        "slug": slug.current,
        stepItemsRefsArr[]->{"slug": slug.current , title},
        "blogTags": categories[]->{"slug": slug.current, title}
      }
    `
  );
  return results;
}
/* ******** */
/* Get one */
export async function getPostBySlug(slug) {
  console.log("fetching data for ", slug);
  const results = await client.fetch(
    `*[_type == "post" && slug.current == $slug]{
      ${postFields}
    }[0]`,
    { slug }
  );

  return results;
}
export async function getAnyBySlug(slug) {
  // console.log("fetching data for ", slug);
  const results = await client.fetch(
    `*[slug.current == $slug]{
      ${getAnyBySlugFields}
    }[0]`,
    { slug }
  );

  return results;
}

export async function getJourneyStepPageBySlug(slug) {
  // console.log("fetching data for ", slug);
  const results = await client.fetch(
    `*[slug.current == $slug && _type == "pageJourneyStep" && !(_id in path('drafts.**'))]{
      ${getJourneyStepPageBySlugFields}
    }[0]`,
    { slug }
  );

  return results;
}

export async function getJourneyItemPageBySlug(slug) {
  // console.log("fetching data for ", slug);
  const results = await client.fetch(
    `*[slug.current == $slug && _type == "pageJourneyItem" && !(_id in path('drafts.**'))]{
      ${getJourneyItemPageBySlugFields}
    }[0]`,
    { slug }
  );

  return results;
}

export async function getTagsForSteps() {
  const results = await client.fetch(`//groq 
    *[ _type == 'pageJourneyStep'] {
      slug: slug.current,
      title,
      'tags': *[_type=="tag" && references(^.stepItemsRefsArr[]._ref)]._id
    }`);

  return results;
}

export async function getHomePageData(preview) {
  const results = await getClient(preview).fetch(groq`
    *[_id == "home" ]{
      ${getSectionsFields}
      _type,
      "recentPosts": *[_type=="post"]
      {title, "slug": slug.current, author, publishedAt, rteBody} | order(publishedAt desc)[0...3]
    }[0]`);

  return results;
}
