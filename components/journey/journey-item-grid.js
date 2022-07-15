import JourneyItemCard from "components/journey/journey-item-card";

const JourneyItemGrid = ({ items = [], pathPrefix = null }) => {
  // pathPrefix is needed in order to make the links to the journey item pages, for example
  // it contains the path to the parent step page
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          {/* Portfolio Start */}
          {items.map((item, key) => {
            return (
              <JourneyItemCard page={item} key={key} pathPrefix={pathPrefix} />
            );
          })}
          {/* Portfolio End */}
        </div>
      </div>
    </section>
  );
};

export default JourneyItemGrid;
