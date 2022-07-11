import Link from "next/link";
const Hom1Cta = () => {
  return (
    <div className="cta_box style_2" style={{ marginTop: "-5em" }}>
      <div className="container relative z-2">
        <div className="bg-thm-color-two cta_box_inner z-2 mb-negative">
          {/* <img
            src="/assets/images/elements/shape.png"
            alt="shape"
            className="shape_1 zoom-fade"
          /> */}
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="text_block wow fadeInLeft">
                <div className="section-title left-align white">
                  <p className="subtitle">
                    <i className="fal fa-book" />
                    Let's talk
                  </p>
                  <h3 className="title">
                    Book a free 20 min Meet & Greet Session
                  </h3>
                  <Link href="/contact">
                    <a className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
                      Schedule Free Call{" "}
                      <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image_box relative z-1 wow fadeInRight">
                <img
                  src="/assets/images/elements/square_shape.png"
                  alt="shape"
                  className="shape_2 rotate_elem"
                />
                <img
                  src="/assets/images/cta_image.png"
                  alt="img"
                  className="image-fit"
                />
                {/* <div className="arrows slideRight">
                  <div className="arrow" />
                  <div className="arrow" />
                  <div className="arrow" />
                  <div className="arrow" />
                  <div className="arrow" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="arrows to_up slideTop">
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
        </div> */}
      </div>
    </div>
  );
};

export default Hom1Cta;
