import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "lib/sanity";
import { getClient } from "lib/sanity.server";

import RecentPostsSection from "src/components/sections/recentPostsSection";
import Home1Cta from "src/components/wellcon/Home1/Hom1Cta";
import PricingSection from "src/components/Pricing";

import SectionRenderer from "src/components/sections";

// common query for sections
import { getSectionsFields } from "lib/api";

// home query, extracted because we use in both getStaticProps and the preview Subscription
const homeQuery = groq`
    *[_id == "home" ]{
      ${getSectionsFields}
      _type,
      "recentPosts": *[_type=="post"]
      {title, "slug": slug.current, author, publishedAt, rteBody} | order(publishedAt desc)[0...3]
    }[0]`;

export default function Home({ data, preview }) {
  // subscribe to the preview data
  const { data: home } = usePreviewSubscription(homeQuery, {
    // params: { slug: data.home?.slug },
    initialData: data.home,
    enabled: preview,
  });

  return (
    <>
      {/* {JSON.stringify(home)} */}
      <SectionRenderer sections={home?.sections} />
      <PricingSection />
      <RecentPostsSection posts={home?.recentPosts} />
    </>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps({ preview = false }) {
  // fetch the home page data at build time
  const home = await getClient(preview).fetch(homeQuery);

  return {
    props: {
      preview,
      data: { home },
    },
  };
}
