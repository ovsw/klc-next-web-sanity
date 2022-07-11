import dynamic from "next/dynamic";

// import Hero from "./hero";
const Hero = dynamic(() => import("./hero"));
const RecentPosts = dynamic(() => import("./recent-posts"));

export const Module = ({ index, module }) => {
  switch (module._type) {
    case "hero":
      return <Hero key={index} data={module} />;
    case "someohter":
      return <p>aaa</p>;
    default:
      return <p>missing component for section of type: {module._type}</p>;
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
