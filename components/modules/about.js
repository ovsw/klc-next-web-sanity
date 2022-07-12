import Home3About from "src/components/wellcon/Home3/Home3About";

const About = ({ data }) => {
  // console.log({ data });
  return (
    <Home3About
      eyebrow_text="Founder of Klimb Kids Life Coaching"
      heading_text={data?.title}
      intro_text="I believe in providing our kids with the knowledge and practical skills they need to create healthy, life-long habits that will help them realize their potential."
      // main_image =
    />
  );
};

export default About;
