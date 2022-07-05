// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";
import Link from "next/link";

import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

const getAllPathsInfoQuery = groq`
  *[ _type == "pageJourneyStep" && defined(slug.current)]
  {
    _type,
    "slug": slug.current,
    stepItemsRefsArr[]->{"slug": slug.current , title},
    "blogTags": categories[]->{"slug": slug.current, title}
  }
`;

import {
  getAllPosts,
  getPostBySlug,
  getAllPagesGeneric,
  getAllPathsInfo,
  getJourneyStepPageBySlug,
  getJourneyItemPageBySlug,
} from "lib/api";

import JourneyStepPage from "src/components/pages/journeyStepPage";
import JourneyItemPage from "src/components/pages/journeyItemPage";

// import { useDebugValue } from "react";

// import getOgImage from "../utils/getOgImageFromStory";

export default function Page(props) {
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

      {props.page._type === "pageJourneyStep" ? (
        <JourneyStepPage page={props.page} />
      ) : (
        <JourneyItemPage page={props.page} />
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // const page = await getPostBySlug(params.slug?.[0]);

  let page = {};

  if (params.slug.length == 1) {
    page = await getJourneyStepPageBySlug(params.slug?.[0]);
  } else {
    page = await getJourneyItemPageBySlug(params.slug?.[1]);
  }

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  // const allPathInfo = await getAllPathsInfo();

  const allPathInfo = await getClient().fetch(
    groq`*[ _type == "pageJourneyStep" && defined(slug.current)]{
      _type,
      "slug": slug.current,
      stepItemsRefsArr[]->{"slug": slug.current , title},
      "blogTags": categories[]->{"slug": slug.current, title}
    }`
  );

  // Journey Section URL Structure
  const journeyPagesSlugs = allPathInfo.filter(
    (p) => p._type == "pageJourneyStep"
  );

  // map ove all the main journey section pages (step pages)
  let journeyPagesPaths = [];
  journeyPagesSlugs.map((p) => {
    let pathsArr = [{ params: { slug: [p.slug] } }];

    // map over all sub pages (step items) and add them to the array
    p.stepItemsRefsArr.map((stepItem) => {
      pathsArr.push({ params: { slug: [p.slug, stepItem.slug] } });
    });
    journeyPagesPaths.push(...pathsArr);
  });

  return {
    paths: journeyPagesPaths,
    fallback: false,
  };
}
