import Link from "next/link";

const SidebarTags = ({ heading = "Popular Tags", tags }) => {
  return (
    <div className="sidebar_widget wow fadeInUp">
      <h5 className="widget_title">{heading}</h5>
      <div className="tags">
        {tags?.map((tag, i) => (
          <Link href={`/${tag.slug.current}`} key={i}>
            {tag.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarTags;
