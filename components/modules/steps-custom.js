// custom component based on I don't remember which one from the template
import Link from "next/link";

const StepsCustom = ({ blok }) => {
  return (
    <section className="section-padding section_counter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                My 4 Step Framework for
              </p>
              <h3 className="title">The CLIMB Kids LIfe Coaching Journey</h3>
              {/* <p>
                📆 &middot; 🗣 &middot; 📋 &middot; 🛑 &middot; 🏆 &middot; 📩
                &middot; 📞
              </p> */}
              {/* <p>
                We meet weekly 📆 and discuss 🗣 how you are doing according to
                your plan 📋 and address any obstacles 🛑 and blocks to your
                achievement 🏆. Between meetings, we keep in touch by 📩 email
                and phone 📞.
              </p> */}
              <p>
                Great ready for an exhilarating climb to reach the top of your
                mountain of success. We will help you find out what goals are
                important to you and help you get prepared to reach the
                milestones you have will set for your journey to climb your
                personal mountain.
              </p>
              {/* <p>
                We’ll give you useful tools to make the climb achieve success,
                and then guide you on how to apply your successful mountaintop
                experience to your life.
              </p> */}
            </div>
          </div>
        </div>
        {/* <PaginationLayout id="#service" sort={2}> */}
        <div className="row">
          <div className="col-lg-6" id="service">
            <div className="service_block shadow_1" wow-data-delay=".10ms">
              <div className="icon">
                <img src="/assets/images/service/1.png" alt="icon" />
              </div>
              <div className="text">
                <h5 className="title">
                  <Link href="/pricing">1. Roadmap Planning</Link>
                </h5>
                <p className="mb-0">
                  Plan the goals you want to reach before embarking on an
                  exciting journey.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" id="service">
            <div className="service_block shadow_1" wow-data-delay=".20ms">
              <div className="icon">
                <img src="/assets/images/service/2.png" alt="icon" />
              </div>
              <div className="text">
                <h5 className="title">
                  <Link href="/pricing">2. Backpack Packing</Link>
                </h5>
                <p className="mb-0">
                  Plan the goals you want to reach before embarking on an
                  exciting journey.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" id="service">
            <div className="service_block shadow_1" wow-data-delay=".30ms">
              <div className="icon">
                <img src="/assets/images/service/3.png" alt="icon" />
              </div>
              <div className="text">
                <h5 className="title">
                  <Link href="/pricing">3. Learning / instruction</Link>
                </h5>
                <p className="mb-0">
                  Learn how to improve attitude, increace confidence, build
                  grit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" id="service">
            <div className="service_block shadow_1" wow-data-delay=".40ms">
              <div className="icon">
                <img src="/assets/images/service/4.png" alt="icon" />
              </div>
              <div className="text">
                <h5 className="title">
                  <Link href="/pricing">4. Deciding & Doing</Link>
                </h5>
                <p className="mb-0">Apply the new knowledge and skills. </p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6" id="service">
            <div className="service_block shadow_1" wow-data-delay=".50ms">
              <div className="icon">
                <img src="/assets/images/service/5.png" alt="icon" />
              </div>
              <div className="text">
                <h5 className="title">
                  <Link href="/pricing">Massive Action</Link>
                </h5>
                <p className="mb-0">
                  But must explain to you how all this mistaken denouncing
                  pleasure praising
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" id="service">
            <div className="service_block shadow_1" wow-data-delay=".60ms">
              <div className="icon">
                <img src="/assets/images/service/6.png" alt="icon" />
              </div>
              <div className="text">
                <h5 className="title">
                  <Link href="/pricing">Provide Tutorials</Link>
                </h5>
                <p className="mb-0">
                  On the other hand, we denounce with righteous indignation and
                  dislike men beguiled
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* </PaginationLayout> */}
        {/* <div
          className="row mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Link href="/contact">
            <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle">
              Details on my method <i className="fal fa-chevron-right ml-2" />
            </a>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default StepsCustom;
