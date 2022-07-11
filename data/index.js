import { groq } from "next-sanity";
import client from "lib/sanity";
import { getClient } from "lib/sanity.server";

// import { getSanityClient } from "@lib/sanity";

// import all the prepared partial queries
import * as queries from "./queries";

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
  const data = await getClient().fetch(
    `*[_type == "${doc}" && !(_id in [${queries.homeID}, ${queries.shopID}, ${queries.errorID}]) && wasDeleted != true && isDraft != true]{ "slug": slug.current }`
  );
  return data;
}

// Fetch all our page redirects
export async function getAllRedirects() {
  const data = await getClient().fetch(`*[_type == "redirect"]{ from, to }`);
  return data;
}

// Fetch a static page with our global data
export async function getStaticPage(pageData, preview) {
  const query = `
  {
    "page": ${pageData},
    ${queries.site}
  }
  `;

  const data = await getClient(preview).fetch(query);

  return data;
}

// Fetch a specific dynamic page with our global data
export async function getPage(slug, preview) {
  const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);

  const query = groq`
    {
      "page": *[_type in ["page", "post"] && slug.current in ${slugs}] | order(_updatedAt desc)[0]{
        "id": _id,
        hasTransparentHeader,
        title,
        seo,
        // ============= page specific fields =============
        _type == "page" => {
          modules[]{
            defined(_ref) => { ...@->content[0] {
               ${queries.modules}
            }},
            !defined(_ref) => {
               ${queries.modules},
            }
          },
        },
        // ============= post specific fields =============
         _type == "post" => {
          title,
          categories[],
          mainImage,
          publishedAt,
          rteBody,
          author->{name, slug},
        },
      },
      ${queries.site}
    }
  `;

  const data = await getClient(preview).fetch(query);

  return data;
}

// Fetch a specific product with our global data
export async function getProduct(slug, preview) {
  const query = `
    {
      "page": *[_type == "product" && slug.current == "${slug}" && wasDeleted != true && isDraft != true] | order(_updatedAt desc)[0]{
        "id": _id,
        hasTransparentHeader,
        modules[]{
          defined(_ref) => { ...@->content[0] {
            ${queries.modules}
          }},
          !defined(_ref) => {
            ${queries.modules},
          }
        },
        "product": ${queries.product},
        title,
        seo
      },
      ${queries.site}
    }
  `;

  const data = await getClient(preview).fetch(query);

  return data;
}

// Fetch a specific collection with our global data
export async function getCollection(slug, preview) {
  const query = `
    {
      "page": *[_type == "collection" && slug.current == "${slug}"] | order(_updatedAt desc)[0]{
        "id": _id,
        hasTransparentHeader,
        modules[]{
          defined(_ref) => { ...@->content[0] {
            ${queries.modules}
          }},
          !defined(_ref) => {
            ${queries.modules},
          }
        },
        products[wasDeleted != true && isDraft != true]->${queries.product},
        title,
        seo
      },
      ${queries.site}
    }
  `;

  const data = await getClient(preview).fetch(query);

  return data;
}

export { queries };
