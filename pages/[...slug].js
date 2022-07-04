// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";
import Link from "next/link";

import {
  getAllPosts,
  getPostBySlug,
  getAllPagesGeneric,
  getAllPathsInfo,
} from "lib/api";

// import { useDebugValue } from "react";

// import getOgImage from "../utils/getOgImageFromStory";

export default function Page() {
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
      <p>
        Page:
        {/* {page?.slug} */}
      </p>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  // const page = await getPostBySlug(params.slug?.[0]);
  return {
    props: {
      title: "title",
      something: "other",
    },
  };
}

export async function getStaticPaths() {
  const allPathInfo = await getAllPathsInfo();

  // // Journey Section URL Structure
  // const journeyPagesSlugs = allPathInfo.filter(
  //   (p) => p._type == "pageJourneyStep"
  // );

  // // map ove all the main journey section pages (step pages)
  // let journeyPagesPaths = [];
  // journeyPagesSlugs.map((p) => {
  //   let pathsArr = [{ params: { slug: [p.slug] } }];

  //   // map over all sub pages (step items) and add them to the array
  //   p.stepItemsRefsArr.map((stepItem) => {
  //     pathsArr.push({ params: { slug: [p.slug, stepItem.slug] } });
  //   });
  //   journeyPagesPaths.push(...pathsArr);
  // });

  const postsInfo = allPathInfo.filter((p) => p._type == "post");
  const postPaths = postsInfo?.map((p) => {
    return { params: { slug: [p.slug] } };
  });

  return {
    paths: [...postPaths],
    fallback: false,
  };
}

// export async function getServerSideProps({ params }) {
//   const page = await getPostBySlug(params.slug);
//   return {
//     props: { page },
//   };
// }
