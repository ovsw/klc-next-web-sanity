import React from "react";
import Hero3 from "src/components/wellcon/Home3/Home3Banner";

const Hero = ({ data = {} }) => {
  const { title, some, props, from, module, here } = data;

  return <Hero3 title={title} />;
};

export default Hero;
