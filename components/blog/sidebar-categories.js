import Link from "next/link";

const SidebarCategories = () => {
  return (
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
  );
};

export default SidebarCategories;
