// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";
import { getClient } from "lib/sanity.server";

// import {
//   getAllPosts,
//   getPostBySlug,
//   getAllPagesGeneric,
//   getAllPathsInfo,
// } from "lib/api";

import { usePreviewSubscription, urlFor } from "lib/sanity";
import { getAllDocSlugs, queries } from "data";

import GenericPage from "components/pages/page";
import PostPage from "components/pages/post";

// import { useDebugValue } from "react";

// import getOgImage from "../utils/getOgImageFromStory";

export default function Page({ data, preview }) {
  // subscribe to the preview data
  const { data: pageData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data.pageData,
    enabled: preview,
  });

  // console.log("PREVIEW", preview);
  // console.log("DATA", pageData);

  return (
    <>
      {/* <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <NextSeo
        title={story.content.seo_title}
        description={story.content.seo_description}
        canonical={`${SEO.openGraph.url}/${story.full_slug}`}
        noindex={story.content.seo_noindex}
        openGraph={ogContent}
      /> */}
      {/* <p>
        Page "data":
        {JSON.stringify(pageData)}
        {pageData?.page?.title} - type: {pageData?.page?._type}
      </p> */}

      {pageData?.page?._type === "page" ? (
        <GenericPage pageData={pageData} />
      ) : (
        <PostPage pageData={pageData} />
      )}
    </>
  );
}
// =========== GET DATA FROM SANITY ===========
export async function getStaticProps({ params, preview = false }) {
  // this is a catch-all route so slug param is an array, we need to join it
  const slug = params.slug.join("/");

  // set up the query, query parameters
  const query = queries.rootPageQuery;
  const queryParams = { slugVariations: [slug, `/${slug}`, `/${slug}/`] };
  // make the query
  const pageData = await getClient(preview).fetch(query, queryParams);

  return {
    props: {
      preview,
      data: {
        // pass down the query result to the page component
        pageData,
        // as well as the query and query parameters, needed for the via usePreviewSubscription()
        query,
        queryParams,
      },
    },
  };
}

// =========== GET PAGE LIST FROM SANITY ===========
export async function getStaticPaths() {
  const allPages = await getAllDocSlugs("page");
  const allPosts = await getAllDocSlugs("post");
  // const allTags = await getAllDocSlugs("tag");

  const allDocs = [...allPages, ...allPosts];

  return {
    paths:
      allDocs?.map((page) => {
        // this is a catch-all route, so  slug param needs to be an array, otherwise next will not recognize it
        const slugs = page.slug.split("/").filter(Boolean);

        return {
          params: {
            slug: slugs,
          },
        };
      }) || [], // escape hatch for when there are no pages
    fallback: false,
  };
}
