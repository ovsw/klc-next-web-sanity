import BlogSearchForm from "components/blog/sidebar-search";
import SidebarCategories from "components/blog/sidebar-categories";
import SidebarRecentPosts from "./sidebar-recent-posts";
import SidebarBanner from "./sidebar-banner";
import SidebarTags from "./sidebar-tags";

const BlogSidebar = ({ site }) => {
  console.log("site", site);
  return (
    <div className="col-lg-4">
      <div className="sidebar style_2">
        <BlogSearchForm />

        <SidebarCategories />

        <SidebarRecentPosts heading="Latest Posts" posts={site?.recentPosts} />

        <SidebarBanner />

        <SidebarTags tags={site?.tags} />
      </div>
    </div>
  );
};

export default BlogSidebar;
