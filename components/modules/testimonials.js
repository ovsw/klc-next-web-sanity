import Slider from "react-slick";
import { testimonial_slider } from "../../src/sliderProps";

const TestimonialsSection = ({ blok }) => {
  return (
    <section
      className="section section-bg relative z-1 about_bg"
      style={{ backgroundImage: "url(assets/images/bg/bg_6.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title left-align wow fadeInLeft">
              <p className="subtitle mb-4">
                <i className="fal fa-book" />
                Testimonials
              </p>
              <h3 className="title mb-0">
                What My Clients
                <br /> Say About Me
              </h3>
            </div>
          </div>
        </div>
        <Slider
          {...testimonial_slider}
          className="testimonial_slider style_2 row wow fadeInDown"
        >
          {/* Testimonial Item */}
          <div className="slide-item col-12">
            <div className="testimonial_item style_4">
              <div className="author">
                <div className="image bg-thm-color-two">
                  <img
                    src="/assets/images/author/1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">Herminia F.</h6>
                  <p className="mb-0 font-weight-bold thm-color-two">
                    Parent of a 10 year old
                  </p>
                </div>
              </div>
              <p className="comment">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <div className="ratings">
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                {/* <i className="fal fa-star active" /> */}
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className="slide-item col-12">
            <div className="testimonial_item style_4">
              <div className="author">
                <div className="image bg-thm-color-two">
                  <img
                    src="/assets/images/author/2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">Robert M.</h6>
                  <p className="mb-0 font-weight-bold thm-color-two">
                    Parent of a 12 year old
                  </p>
                </div>
              </div>
              <p className="comment">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <div className="ratings">
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                {/* <i className="fal fa-star active" />
                <i className="fal fa-star active" /> */}
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className="slide-item col-12">
            <div className="testimonial_item style_4">
              <div className="author">
                <div className="image bg-thm-color-two">
                  <img
                    src="/assets/images/author/3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">Nicolas V.</h6>
                  <p className="mb-0 font-weight-bold thm-color-two">Parent</p>
                </div>
              </div>
              <p className="comment">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <div className="ratings">
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className="slide-item col-12">
            <div className="testimonial_item style_4">
              <div className="author">
                <div className="image bg-thm-color-two">
                  <img
                    src="/assets/images/author/1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">Herminia F.</h6>
                  <p className="mb-0 font-weight-bold thm-color-two">Parent</p>
                </div>
              </div>
              <p className="comment">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <div className="ratings">
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                {/* <i className="fal fa-star active" /> */}
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className="slide-item col-12">
            <div className="testimonial_item style_4">
              <div className="author">
                <div className="image bg-thm-color-two">
                  <img
                    src="/assets/images/author/2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">Robert M.</h6>
                  <p className="mb-0 font-weight-bold thm-color-two">Parent</p>
                </div>
              </div>
              <p className="comment">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <div className="ratings">
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className="slide-item col-12">
            <div className="testimonial_item style_4">
              <div className="author">
                <div className="image bg-thm-color-two">
                  <img
                    src="/assets/images/author/3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">Nicolas V.</h6>
                  <p className="mb-0 font-weight-bold thm-color-two">Parent</p>
                </div>
              </div>
              <p className="comment">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <div className="ratings">
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
                <i className="fal fa-star active" />
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
