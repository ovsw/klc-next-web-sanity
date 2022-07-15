import React from "react";
import Link from "next/link";

import Icon from "components/dynamic-icon";
// import Icon from "components/dynamic-icon-real";

const JourneyItemCard = ({ page, pathPrefix = null }) => {
  const {
    title = "[missing title]",
    subTitle = "[sub-title]",
    slug,
    icon,
  } = page;

  // attach the optional path prefix
  const link = pathPrefix != null ? `${pathPrefix}/${slug}` : `/${slug}`;

  return (
    <div className="col-lg-4 col-md-6 masonry-item all lifestyle business health">
      <div className="portfolio_box">
        <div className="portfolio_img" style={{ height: "260px" }}>
          {page.icon == null && (
            <img
              src="/assets/images/portfolio/1.jpg"
              className="image-fit"
              alt="img"
            />
          )}
          <div className="tw-flex tw-h-full tw-justify-center tw-items-center">
            {page.icon != null && (
              <Icon name={icon.name} size="6em" color="#f57d62" />
            )}
          </div>
        </div>
        <div className="portfolio_caption" style={{ paddingTop: "0" }}>
          <div className="text_box">
            <h4 className="title mb-0">
              <Link href={link}>{title}</Link>
            </h4>
            <p>{subTitle}</p>
          </div>
          <div className="btn_box mb-xl-30">
            <Link href={link}>
              <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                <i className="fal fa-chevron-right font-weight-bold" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyItemCard;
