import Home1Cta from "src/components/wellcon/Home1/Hom1Cta";

const About = ({ data }) => {
  // console.log({ data });
  return (
    <div className="my-5 py-5">
      <Home1Cta
        eyebrow_text="Founder of Klimb Kids Life Coaching"
        heading_text={data?.title}
        // main_image={data?.main_image}
      />
    </div>
  );
};

export default About;
