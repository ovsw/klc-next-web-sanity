// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";

import { getClient } from "../../lib/sanity.server";

import { usePreviewSubscription } from "lib/sanity";
import { getJourneyDocSlugs, queries } from "data";

import JourneyStepPage from "components/pages/journeyStepPage";
import JourneyItemPage from "components/pages/journeyItemPage";

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
      {/* {JSON.stringify(props)}
      <hr />
      {JSON.stringify(props.page.stepItemsRefsArr)} */}

      {/* <h1>{pageData.page._type}</h1> */}

      {/* ================================== */}
      {pageData.page._type === "pageJourneyStep" ? (
        <JourneyStepPage page={pageData.page} />
      ) : (
        <JourneyItemPage page={pageData.page} />
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  let slug = "";
  let query = "";

  // decide if we're dealing with a journey step or journey item
  // a journey step page will have a slug array with a length of 1
  // while an item page will have a slug arr with a length of 2 (including the parent step page slug)
  if (params.slug.length == 1) {
    slug = params.slug?.[0];
    query = queries.journeyStepPageQuery;
  } else {
    slug = params.slug?.[1];
    query = queries.journeyItemPageQuery;
  }

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
  // const allPathInfo = await getAllPathsInfo();

  const allPathInfo = await getJourneyDocSlugs();

  // Journey Section URL Structure
  const journeyPagesSlugs = allPathInfo.filter(
    (p) => p._type == "pageJourneyStep"
  );

  // array to hold all paths for this section
  let journeyPagesPaths = [];
  // map over all the main journey section pages (step pages)
  journeyPagesSlugs.map((p) => {
    let pathsArr = [{ params: { slug: [p.slug] } }];

    // map over all sub pages (step items) and add them to the array
    p.stepItemsRefsArr.map((stepItem) => {
      pathsArr.push({ params: { slug: [p.slug, stepItem.slug] } });
    });
    // push them all to the main paths array
    journeyPagesPaths.push(...pathsArr);
  });

  return {
    paths: journeyPagesPaths,
    fallback: false,
  };
}
