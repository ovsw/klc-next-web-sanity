import Home1Blog from "src/components/wellcon/Home1/Home1Blog";
import Home1Cta from "src/components/wellcon/Home1/Hom1Cta";
import PricingSection from "src/components/Pricing";

import SectionRenderer from "src/components/sections";

import { getHomePage } from "lib/api";

export default function Home({ home }) {
  // if (!story.content) {
  //   return <div>Loading...</div>;
  // }
  // console.log(home);
  return (
    <>
      {/* {JSON.stringify(home)} */}
      <SectionRenderer sections={home?.sections} />
      <PricingSection />
      <Home1Blog />
    </>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps({ preview = false }) {
  const home = await getHomePage();
  return {
    props: {
      home,
    },
  };
}
