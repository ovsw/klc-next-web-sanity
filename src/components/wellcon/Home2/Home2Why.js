import Link from "next/link";
import { BaseNextRequest } from "next/dist/server/base-http";
const Home2Why = () => {
  return (
    <section className="section-padding pt-0 about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title left-align wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                Program
              </p>
              <h3 className="title">What We Work On</h3>
              <p>
                Each child is unique and so I make a point of getting to know
                their individual personality, context and circumsntances to
                provide the best support possible.
              </p>
              <p>
                During our sessions, we'll work on defining and clarifying your
                child's goals, needs, vision or career options. Later on we'll
                also be tracking and reviewing their life strategies, actions
                and progress.
              </p>
              <Link href="/about-me">
                <a className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                  Details on my Method{" "}
                  <i className="fal fa-chevron-right ml-2" />
                </a>
              </Link>

              <div
                className="row mb-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1.5rem",
                }}
              >
                <Link href="/pricing">
                  <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rounded">
                    Pricing Info
                    <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <ul className="why-us-list style_2">
              <li className="wow fadeInUp" data-wow-delay=".2s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">Positive Self Talk &amp; Motivation</h6>
                </div>
                {/* <img
                  src="/assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                /> */}
              </li>
              <li className="wow fadeInDown" data-wow-delay=".35s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">
                    Goal Setting &amp; <br /> Building Healthy Habits
                  </h6>
                </div>
                {/* <img
                  src="/assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                /> */}
              </li>
              <li className="wow fadeInUp" data-wow-delay=".40s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">
                    Leadership Skills &amp; Building Self Confidence
                  </h6>
                </div>
                {/* <img
                  src="/assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                /> */}
              </li>
              <li className="wow fadeInDown" data-wow-delay=".5s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">
                    Powerful Mindset &amp; <br /> Gratitude
                  </h6>
                </div>
                {/* <img
                  src="/assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Why;
