// custom component for price table
import PricingTable from "src/components/Price";

const Pricing = () => {
  return (
    <section
      className="pricing_sec section"
      style={{ paddingBottom: "60px", paddingTop: "220px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                Pricing Plans
              </p>
              <h3 className="title">My Coaching Packages</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <PricingTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
