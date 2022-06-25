import Home1Blog from "../src/components/wellcon/Home1/Home1Blog";
import Home1Cta from "../src/components/wellcon/Home1/Hom1Cta";
import PricingSection from "../src/components/Pricing";

export default function Home(props) {
  // if (!story.content) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <PricingSection />
      <Home1Blog />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
