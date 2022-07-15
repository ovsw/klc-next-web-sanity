import JourneyItemGrid from "components/journey/journey-item-grid";
import PostList from "components/blog/posts-list";
import { useRouter } from "next/router";
import { Module } from "components/modules";

const Page = ({ page }) => {
  const { modules, stepItemsRefsArr = [], title } = page;

  const uniquePostList = makeUniquePostList(stepItemsRefsArr);
  const currentStepPagePath = useRouter().asPath;

  return (
    <>
      {/* ===========  MODULES =========== */}
      {modules != null &&
        modules.map((module, key) => {
          return <Module key={key} index={key} module={module} />;
        })}

      {/* ===========  JOURNEY ITEM PAGES GRID =========== */}
      <JourneyItemGrid
        items={stepItemsRefsArr}
        pathPrefix={currentStepPagePath}
        topPaddingSmall={true}
      />

      {/* =========== RELATED POSTS =========== */}
      <PostList
        title="Related Blog Posts"
        posts={uniquePostList}
        eyebrowText={page.title}
        topPaddingSmall={true}
      />
    </>
  );
};

export default Page;

function removePostsWithSameSlug(arrayOfPosts) {
  return arrayOfPosts.filter(
    (v, i, a) => a.findIndex((v2) => v2.slug === v.slug) === i
  );
}

const makeUniquePostList = (postList) => {
  // will hold all related posts from all related item pages (might contain duplicates)
  let allPostsFromItemsPpages = [];

  // loop through all Item pages and get related posts from each one
  postList.map((itemPage) => {
    const itemPagePosts = itemPage.journeyItemPosts.posts.map((post) => post);
    allPostsFromItemsPpages.push(...itemPagePosts);
  });

  // order chronologically
  let orderedAllPosts = allPostsFromItemsPpages.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  // remove duplicates
  return removePostsWithSameSlug(orderedAllPosts);
};
