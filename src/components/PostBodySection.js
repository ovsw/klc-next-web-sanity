import Link from "next/link";
import PostBodyRte from "./PostBodyRte";

const PostBody = ({ blok }) => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8 mb-md-80">
            <PostBodyRte />
          </div>

          {/* SIDEBAR START */}
          <div className="col-lg-4">
            <div className="sidebar style_2">
              <div className="sidebar_widget wow fadeInUp">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group search_widget">
                    <input
                      type="text"
                      name="#"
                      placeholder="Search"
                      className="form-control"
                      autoComplete="off"
                    />
                    <div className="input-group-append ml-0">
                      <button
                        type="submit"
                        className="thm-btn bg-thm-color-two thm-color-white thm-color-two-shadow btn-rectangle btn-small"
                      >
                        <i className="fal fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="sidebar_widget wow fadeInUp">
                <h5 className="widget_title">Category</h5>
                <ul className="category_widgets">
                  <li>
                    <Link href="/blog-grid">Life Courses</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Business Courses</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Advance Wordpress</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Basic HTML Coach</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Health Courses</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">English Learning</Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar_widget recent_widgets wow fadeInUp">
                <h5 className="widget_title">Latest News</h5>
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src="/assets/images/blog/1.jpg"
                        alt="img"
                        className="image-fit"
                      />
                    </div>
                    <div className="text">
                      <h6 className="mb-0">
                        <Link href="/blog-details">
                          Build Seamless Spreadshet Import Experience
                        </Link>
                      </h6>
                      <p className="mb-0">
                        <strong>
                          <i className="fal fa-calendar-alt" />{" "}
                        </strong>
                        <Link href="/blog-grid">25 May 2021</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="/assets/images/blog/2.jpg"
                        alt="img"
                        className="image-fit"
                      />
                    </div>
                    <div className="text">
                      <h6 className="mb-0">
                        <Link href="/blog-details">
                          Creating Online Environme Work Well Older
                        </Link>
                      </h6>
                      <p className="mb-0">
                        <strong>
                          <i className="fal fa-calendar-alt" />{" "}
                        </strong>
                        <Link href="/blog-grid">25 May 2021</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="/assets/images/blog/3.jpg"
                        alt="img"
                        className="image-fit"
                      />
                    </div>
                    <div className="text">
                      <h6 className="mb-0">
                        <Link href="/blog-details">
                          Signs Website Feels More Haunted House
                        </Link>
                      </h6>
                      <p className="mb-0">
                        <strong>
                          <i className="fal fa-calendar-alt" />{" "}
                        </strong>
                        <Link href="/blog-grid">25 May 2021</Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar_widget wow fadeInUp">
                <Link href="/blog-details">
                  <a className="d-block">
                    <img
                      src="/assets/images/blog/adv.jpg"
                      alt="adv"
                      className="image-fit"
                    />
                  </a>
                </Link>
              </div>
              <div className="sidebar_widget wow fadeInUp">
                <h5 className="widget_title">Popular Tags</h5>
                <div className="tags">
                  <Link href="/blog-grid">Business</Link>
                  <Link href="/blog-grid">Corporate</Link>
                  <Link href="/blog-grid">HTML</Link>
                  <Link href="/blog-grid">Art</Link>
                  <Link href="/blog-grid">Finance</Link>
                  <Link href="/blog-grid">Investment</Link>
                  <Link href="/blog-grid">CSS</Link>
                  <Link href="/blog-grid">Coach</Link>
                  <Link href="/blog-grid">Planing</Link>
                  <Link href="/blog-grid">Creative</Link>
                  <Link href="/blog-grid">Health</Link>
                </div>
              </div>
            </div>
          </div>
          {/* SIDEBAR END */}
        </div>
      </div>
    </div>
  );
};

export default PostBody;
