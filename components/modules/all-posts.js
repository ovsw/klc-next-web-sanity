import PostList from "components/blog/posts-list";

const RecentPosts = ({ data }) => {
  return (
    <>
      {/* =========================
      {JSON.stringify(data.posts)}
      ======================= */}
      <PostList title={data?.title} posts={data.posts} />
    </>
  );
};

export default RecentPosts;
