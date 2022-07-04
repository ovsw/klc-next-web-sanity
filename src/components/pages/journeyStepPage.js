import React from "react";
import Link from "next/link";

const Page = ({ page, children }) => {
  console.log("page", page);

  // will hold all related posts from all related item pages (might contain duplicates)
  let allPostsFromItemsPpages = [];

  // loop through all Item pages and get related posts from each one
  page.stepItemsRefsArr.map((itemPage) => {
    const itemPagePosts = itemPage.journeyItemPosts.posts.map((post) => post);
    allPostsFromItemsPpages.push(...itemPagePosts);
  });

  // order chronologically
  let orderedAllPosts = allPostsFromItemsPpages.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  // remove duplicates
  let uniquePostList = removePostsWithSameSlug(orderedAllPosts);

  return (
    <>
      <h1>Journey Step Page: {page.title}</h1>
      {children}
      {uniquePostList.map((post, i) => {
        return (
          <li key={i}>
            <Link href={`/${post.slug}`}>
              <a>
                {post.title} - {new Date(post.publishedAt).toLocaleString()}
              </a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Page;

function removePostsWithSameSlug(arrayOfPosts) {
  return arrayOfPosts.filter(
    (v, i, a) => a.findIndex((v2) => v2.slug === v.slug) === i
  );
}
