// import { NextSeo } from "next-seo";
// import SEO from "../next-seo.config";
import Link from "next/link";

import { useDebugValue } from "react";

// import getOgImage from "../utils/getOgImageFromStory";

export default function Page(props) {
  // if (!story.content) {
  //   return <div>Loading...</div>;
  // }

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
      <p>Page...</p>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {}

export async function getStaticPaths() {}
