import Link from "next/link";

const SidebarCategories = ({ heading = "Categories", categories = [] }) => {
  return (
    <div className="sidebar_widget wow fadeInUp">
      <h5 className="widget_title">{heading}</h5>
      <ul className="category_widgets">
        {categories.map((journeyStepPage, i) => (
          <li key={i}>
            <Link href={`/the-journey/${journeyStepPage.slug.current}`}>
              {journeyStepPage.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategories;
