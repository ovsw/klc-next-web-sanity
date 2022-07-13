import PostsSummaryItem from "components/blog/posts-summary-item";

const NavPrevNext = ({ previousPost, nextPost }) => {
  let justifyValue = "space-between";
  if (previousPost == null) {
    justifyValue = "flex-start";
  } else if (nextPost == null) {
    justifyValue = "flex-end";
  }

  return (
    <ul
      className="post_navigation"
      // style={{ justifyContent: `${justifyValue}` }}
    >
      {nextPost != null && <PostsSummaryItem post={nextPost} label="Next Post" />}
      {previousPost != null && <PostsSummaryItem post={previousPost} label="Previous Post" />}
    </ul>
  );
};

export default NavPrevNext;
