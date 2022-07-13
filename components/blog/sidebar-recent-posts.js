import PostsSummaryItem from "components/blog/posts-summary-item";

const SidebarRecentPosts = ({ heading = "Latest News", posts }) => {
  return (
    <div className="sidebar_widget recent_widgets wow fadeInUp">
      <h5 className="widget_title">{heading}</h5>
      <ul>
        {posts?.map((post, i) => (
          <PostsSummaryItem post={post} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarRecentPosts;
