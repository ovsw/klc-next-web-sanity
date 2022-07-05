import Hero3 from "src/components/wellcon/Home3/Home3Banner";

const SectionsRenderer = ({ sections }) => {
  return (
    <>
      {/* {JSON.stringify(sections)} */}
      {sections.map((section, i) => {
        switch (section._type) {
          case "videoHeroSection":
            return <Hero3 key={i} {...section} />;
          case "someohter":
            return <p>aaa</p>;
          default:
            return (
              <p>
                missing component for section of type: <h3>{section._type}</h3>
              </p>
            );
        }
      })}
    </>
  );
};

export default SectionsRenderer;
