import BlogSearchForm from "components/blog/sidebar-search";
import SidebarCategories from "components/blog/sidebar-categories";
import SidebarRecentPosts from "./sidebar-recent-posts";
import SidebarBanner from "./sidebar-banner";
import SidebarTags from "./sidebar-tags";

const BlogSidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar style_2">
        <BlogSearchForm />

        <SidebarCategories />

        <SidebarRecentPosts />

        <SidebarBanner />

        <SidebarTags />
      </div>
    </div>
  );
};

export default BlogSidebar;
