import Link from "next/link";
import Breadcrumbs from "components/breadcrumbs";
import Image from "next/image";

const PageTitleBanner = ({ title = "[title]", pageName = "[page name]" }) => {
  return (
    <div
      className="subheader relative z-1"
      // style={{ backgroundImage: "url(/assets/images/subheader.jpg)" }}
      // style={{ display: "block" }}
    >
      <Image
        priority={true}
        src="/assets/images/subheader.jpg"
        alt="subheader"
        layout="fill"
        objectFit="cover"
        objectPosition="center left"
      />
      <div className="container relative z-2">
        <div className="row">
          <div className="col-12">
            <h1 className="page_title">{title}</h1>
            <div className="page_breadcrumb">
              {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav> */}
              <Breadcrumbs />
            </div>
          </div>
        </div>
        {/* <img
          src="/assets/images/elements/element_19.png"
          alt="element"
          className="element_1 slideRightTwo"
        /> */}
        {/* <img
          src="/assets/images/elements/element_10.png"
          alt="element"
          className="element_2 zoom-fade"
        /> */}
        <img
          src="/assets/images/elements/element_20.png"
          alt="element"
          className="element_3 rotate_elem"
        />
        <img
          src="/assets/images/elements/element_21.png"
          alt="element"
          className="element_4 rotate_elem"
        />
      </div>
    </div>
  );
};

export default PageTitleBanner;
