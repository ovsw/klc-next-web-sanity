import Link from "next/link";
import Image from "next/image";

export const Footer1 = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer_top section-padding">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_about wow fadeInDown">
              <Link href="/index">
                <a className="logo">
                  <img
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="image-fit"
                  />
                </a>
              </Link>
              <ul className="info">
                <li>
                  <a href="#">
                    Mountain of Youth LLC.
                    <br />
                    2012 W Plum Rd Phoenix, Arizona 85085
                  </a>
                </li>
                <li>
                  <a href="tel:+01234567899">+012 (345) 678 99</a> <br />
                  <a href="mailto:example@example.com">
                    hello@climbkidslifecoaching.com
                  </a>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li> */}
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">Coaching Services</h6>
              <ul>
                <li>
                  <a href="#">The Journey</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Schedule Free Call</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInDown">
              <h6 className="ft-title">About Us</h6>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Mission &amp; Vision</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">Legal</h6>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Accessibility Policy</a>
                </li>
              </ul>
              {/* <p className="mb-xl-20">
                Sed ut perspici unde omnis iste natus error sit voluptatem accus
              </p>
              <a href="#" className="app_img">
                <img src="/assets/images/google_store.jpg" alt="img" />
              </a>
              <a href="#" className="app_img">
                <img src="/assets/images/apple_store.jpg" alt="img" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0">
          © 2022 <a href="#">Mountain of Youth LLC.</a>. All Rights Reserved.{" "}
          Website by <a href="https://studiorovst.com">Studio Rovst</a>
        </p>
      </div>
    </div>
  </footer>
);
export const Footer2 = () => (
  <footer
    className="footer bg-thm-color-two-gradient style_2 z-1"
    style={{ backgroundImage: "url(/assets/images/elements/element_15.png)" }}
  >
    <div className="element_1">
      <Image
        src="/assets/images/elements/element_13_customized.png"
        width={332}
        height={320}
        alt="Element"
      />
    </div>
    <div className="element_2">
      <Image
        src="/assets/images/elements/element_14.png"
        width={377}
        height={380}
        alt="Element"
        // layout="fill"
      />
    </div>
    <div className="container relative z-1">
      <div className="footer_top section-padding">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_about wow fadeInDown">
              <Link href="/index">
                <a className="logo">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="image-fit"
                    width={140}
                    height={35}
                  />
                </a>
              </Link>
              <ul className="info">
                <li>
                  <a href="#"> 2012 W Plum Rd Phoenix, Arizona 85085</a>
                </li>
                <li>
                  <a href="tel:+01234567899">+012 (345) 678 99</a>
                </li>
                <li>
                  <a href="mailto:example@example.com">
                    hello@climbkidslifecoaching.com
                  </a>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">About Us</h6>
              <ul>
                <li>
                  <a href="#">The Journey</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Schedule Free Call</a>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInDown">
              <h6 className="ft-title">Services</h6>
              <ul>
                <li>
                  <a href="#">Latest Courses</a>
                </li>
                <li>
                  <a href="#">Mission &amp; Vision</a>
                </li>
                <li>
                  <a href="#">Our Approach</a>
                </li>
                <li>
                  <a href="#">Exclusive Advisors</a>
                </li>
                <li>
                  <a href="#">Join a Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_newsletter wow fadeInUp">
              <h6 className="ft-title">Newsletter</h6>
              <p className="mb-xl-20">
                Sed ut perspici unde omnis iste natus error sit voluptatem accus
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  name="#"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded"
                >
                  Subscribe Now <i className="fal fa-chevron-right ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0">
          © 2022 <a href="/">Mountain of Youth LLC.</a> All Rights Reserved.
          Website By <a href="https://studiorovst.com">Studio Rovst</a>.
        </p>
      </div>
      <img
        src="/assets/images/elements/element_16.png"
        alt="element"
        className="element_3 rotate_elem"
      />
      <div className="arrows to_up slideTop">
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
      </div>
    </div>
  </footer>
);

export const DefaultFooter = () => (
  <footer
    className="footer bg-thm-color-one style_2 style_3 z-1"
    style={{ backgroundImage: "url(/assets/images/elements/element_18.png)" }}
  >
    <div className="container relative z-1">
      <div className="footer_top section-padding">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_about wow fadeInDown">
              <Link href="/">
                <a className="logo">
                  <img
                    src="/assets/images/logo-white.png"
                    alt="logo"
                    className="image-fit"
                  />
                </a>
              </Link>
              <ul className="info">
                <li>
                  <a href="#">256 Elizaberth Ave Str, Brooklyn, CA, 90025</a>
                </li>
                <li>
                  <a href="tel:+01234567899">+012 (345) 678 99</a>
                </li>
                <li>
                  <a href="mailto:example@example.com">example@example.com</a>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInUp">
              <h6 className="ft-title">Our Coach</h6>
              <ul>
                <li>
                  <a href="#">Basic Life Coach</a>
                </li>
                <li>
                  <a href="#">Advance Helath Coach</a>
                </li>
                <li>
                  <a href="#">Advance Business Coach</a>
                </li>
                <li>
                  <a href="#">Basic Learn English</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_menu wow fadeInDown">
              <h6 className="ft-title">About Us</h6>
              <ul>
                <li>
                  <a href="#">Latest Courses</a>
                </li>
                <li>
                  <a href="#">Mission &amp; Vision</a>
                </li>
                <li>
                  <a href="#">Our Approach</a>
                </li>
                <li>
                  <a href="#">Exclusive Advisors</a>
                </li>
                <li>
                  <a href="#">Join a Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="ft_widget ft_newsletter wow fadeInUp">
              <h6 className="ft-title">Newsletter</h6>
              <p className="mb-xl-20">
                Sed ut perspici unde omnis iste natus error sit voluptatem accus
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  name="#"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
                >
                  Subscribe Now <i className="fal fa-chevron-right ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="mb-0">
          © 2021 <a href="#">Mountain of Youth LLC.</a> All Rights Reserved,
          Website by <a href="https://studiorovst.com">Studio Rovst</a>
        </p>
      </div>
      <img
        src="/assets/images/elements/element_16.png"
        alt="element"
        className="element_3 rotate_elem"
      />
      <div className="arrows to_up slideTop">
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
        <div className="arrow" />
      </div>
    </div>
  </footer>
);
