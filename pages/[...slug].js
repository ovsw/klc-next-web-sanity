// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";
import { getClient } from "lib/sanity.server";
import { usePreviewSubscription } from "lib/sanity";
import { getAllDocSlugs, queries } from "data";

import Layout from "components/layout";
import GenericPage from "components/pages/page";
import PostPage from "components/pages/post";

// import { useDebugValue } from "react";

// import getOgImage from "../utils/getOgImageFromStory";

export default function Page({ data, preview }) {
  // subscribe to the preview data
  const { data: pageQueryDataWithPreview } = usePreviewSubscription(
    data?.query,
    {
      params: data?.queryParams ?? {},
      initialData: data.pageQueryData,
      enabled: preview,
    }
  );

  const { page, site } = pageQueryDataWithPreview;

  // console.log("PREVIEW", preview);
  // console.log("pageQueryData", pageQueryData);

  return (
    <Layout
      site={site}
      page={page}
      noHeaderTop
      sideBar
      headerStyle={1}
      absolute
      footerStyle={2}
    >
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
        {JSON.stringify(pageQueryData)}
        {pageQueryData?.page?.title} - type: {pageQueryData?.page?._type}
      </p> */}

      {page?._type === "page" ? (
        <GenericPage page={page} />
      ) : (
        <PostPage data={pageQueryDataWithPreview} />
      )}
    </Layout>
  );
}

// TODO: add next and prev posts info to the page
// https://stackoverflow.com/questions/62594914/how-to-auto-reference-to-other-post-in-sanity-io

// =========== GET DATA FROM SANITY ===========
export async function getStaticProps({ params, preview = false }) {
  // this is a catch-all route so slug param is an array, we need to join it
  const slug = params.slug.join("/");

  // set up the query, query parameters
  const query = queries.rootPageQuery;
  const queryParams = { slugVariations: [slug, `/${slug}`, `/${slug}/`] };
  // make the query
  const pageQueryData = await getClient(preview).fetch(query, queryParams);

  return {
    props: {
      preview,
      data: {
        // pass down the query result to the page component
        pageQueryData,
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
