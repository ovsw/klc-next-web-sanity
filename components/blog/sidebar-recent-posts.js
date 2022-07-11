import Link from "next/link";

const SidebarRecentPosts = () => {
  return (
    <div className="sidebar_widget recent_widgets wow fadeInUp">
      <h5 className="widget_title">Latest News</h5>
      <ul>
        <li>
          <div className="image">
            <img
              src="assets/images/blog/1.jpg"
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
              src="assets/images/blog/2.jpg"
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
              src="assets/images/blog/3.jpg"
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
  );
};

export default SidebarRecentPosts;
