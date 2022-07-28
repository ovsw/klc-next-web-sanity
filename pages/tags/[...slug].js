// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";
import { getClient } from "lib/sanity.server";
import { usePreviewSubscription } from "lib/sanity";
import { getAllDocSlugs, queries } from "data";

import Layout from "components/layout";
import TagPage from "components/pages/tag";

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

  // console.log("PREVIEW", preview);
  // console.log("pageQueryDataWithPreview", pageQueryDataWithPreview);

  const { page, site } = pageQueryDataWithPreview;

  return (
    <Layout
      page={page}
      site={site}
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
        {JSON.stringify(pageData)}
        {pageData?.page?.title} - type: {pageData?.page?._type}
      </p> */}
      <TagPage page={page} />
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
  const query = queries.tagPageQuery;
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
  const allTags = await getAllDocSlugs("tag");

  const allDocs = [...allTags];

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
