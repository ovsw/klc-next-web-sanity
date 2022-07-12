const Home3About = (props) => {
  const {
    eyebrow_text = "[Eyebrow text goes here]",
    heading_text = "[Heading text goes here]",
    intro_text = "[Intro text goes here]",
    main_image,
  } = props;

  return (
    <section className="section-padding pt-0 about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="image_box wow fadeInLeft">
              <img
                src="/assets/images/about/image_1.jpg"
                alt="img"
                className="image-fit image_1 rounded-circle"
              />
              <img
                src="/assets/images/about/image_2.jpg"
                alt="img"
                className="image-fit image_2 rounded-circle"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title left-align wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                {eyebrow_text}
              </p>
              <h3 className="title">{heading_text}</h3>
              <p>{intro_text} </p>
            </div>
            <ul className="about_list">
              <li className=" wow fadeInDown">
                <div className="icon">
                  <img
                    src="/assets/images/icons/icon_5.png"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-2">M.S.L</h6>
                  <p className="mb-0">Masters of Science in Leadership</p>
                </div>
              </li>
              <li className=" wow fadeInDown">
                <div className="icon">
                  <img
                    src="/assets/images/icons/icon_5.png"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-2">C.L.C</h6>
                  <p className="mb-0">Certified Life Coach</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3About;
