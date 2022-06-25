import Home1Blog from "src/components/wellcon/Home1/Home1Blog";
import Home1Cta from "src/components/wellcon/Home1/Hom1Cta";
import PricingSection from "src/components/Pricing";

import { getAllPosts } from "lib/api";

export default function Home({ posts }) {
  // if (!story.content) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {JSON.stringify(posts)}
      <PricingSection />
      <Home1Blog />
    </>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps({ preview = false }) {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
