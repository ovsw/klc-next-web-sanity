import dynamic from "next/dynamic";

// import Hero from "./hero";
const Hero = dynamic(() => import("./hero"));
const RecentPosts = dynamic(() => import("./recent-posts"));
const Steps = dynamic(() => import("./steps-custom"));
const Pricing = dynamic(() => import("./pricing"));
const About = dynamic(() => import("./about"));
const Program = dynamic(() => import("./program"));
const Testimonials = dynamic(() => import("./testimonials"));
const Cta = dynamic(() => import("./cta"));
const TitleBanner = dynamic(() => import("./banner-title"));
const RichText = dynamic(() => import("./rich-text"));
const AllPosts = dynamic(() => import("./all-posts"));

export const Module = ({ index, module }) => {
  // console.log({ module });
  switch (module._type) {
    case "hero":
      return <Hero key={index} data={module} />;
    case "topBanner":
      return <TitleBanner key={index} data={module} />;
    case "richText":
      return <RichText key={index} data={module} />;
    case "steps":
      return <Steps key={index} data={module} />;
    case "pricing":
      return <Pricing key={index} data={module} />;
    case "testimonials":
      return <Testimonials key={index} data={module} />;
    case "cta":
      return <Cta key={index} data={module} />;
    case "latestPosts":
      return <RecentPosts key={index} data={module} />;
    case "allPosts":
      return <AllPosts key={index} data={module} />;
    case "about":
      return <About key={index} data={module} />;
    case "program":
      return <Program key={index} data={module} />;
    default:
      return <p>missing component for section {module._type}</p>;
  }
  // return (
  //   <>
  //     {/* {JSON.stringify(sections)} */}
  //     {}
  //     {sections.map((section, i) => {

  //     })}
  //   </>
  // );
};
