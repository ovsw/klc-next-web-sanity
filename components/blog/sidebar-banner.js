import Link from "next/link";

const SidebarBanner = () => {
  return (
    <div className="sidebar_widget wow fadeInUp">
      <Link href="/blog-details">
        <a className="d-block">
          <img
            src="assets/images/blog/adv.jpg"
            alt="adv"
            className="image-fit"
          />
        </a>
      </Link>
    </div>
  );
};

export default SidebarBanner;
