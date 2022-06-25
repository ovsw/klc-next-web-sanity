import Link from "next/dist/client/link";
import { useState } from "react";
import VideoPopup from "../../VideoPopup";

const Home3Banner = (props) => {
  const [video, setVideo] = useState(false);

  const { heading1, heading2, intro, btn_text, btn_url, video_id } = props;

  return (
    <div
      className="banner relative z-1"
      style={{ zIndex: video ? "999" : "1" }}
    >
      {video && <VideoPopup close={() => setVideo(false)} videoID={video_id} />}
      <img
        src="/assets/images/banner/element_1.png"
        className="element_1"
        alt="Element"
      />
      <img
        src="/assets/images/banner/element_line.png"
        className="element_line"
        alt="Element Line"
      />
      {/* Texts */}
      <div className="transform-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text_box">
                <h1 className="title wow fadeInUp" data-wow-delay=".30ms">
                  <span>{heading1}</span>
                  <br /> {heading2}
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".40ms">
                  {intro}
                </p>
                <Link href="/">
                  <a
                    className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rounded mr-4 mb-4 wow fadeInRight"
                    data-wow-delay=".50ms"
                  >
                    {btn_text} <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
                <a
                  onClick={() => setVideo(true)}
                  className="video_btn video_text popup-youtube mb-4 wow fadeInRight"
                  data-wow-delay=".70ms"
                >
                  <i className="fas fa-play video_icon bg-thm-color-one" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="image_box relative wow fadeInRight"
                data-wow-delay=".80ms"
              >
                <img
                  src="/assets/images/banner/banner_img.png"
                  alt="img"
                  className="image-fit"
                />
                <span className="bg-thm-color-three circle_element" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="bottom-line container" />
    </div>
  );
};

export default Home3Banner;
