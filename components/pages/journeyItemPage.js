import React from "react";
import Link from "next/link";
import { Module } from "components/modules";
import PostList from "components/blog/posts-list";

const Page = ({ page }) => {
  // console.log("page", page.journeyItemPosts);
  const {
    title = "[missing page title]",
    modules = [],
    journeyItemPosts = [],
  } = page;
  return (
    <>
      {/* <h1>Journey Item Page: {page.title}</h1> {children} */}
      {/* ===========  MODULES =========== */}
      {page.modules?.map((module, key) => {
        return <Module key={key} index={key} module={module} />;
      })}

      {/* =========== RELATED POSTS =========== */}
      {journeyItemPosts.posts.length > 0 && (
        <PostList
          title="Related Blog Posts"
          posts={page.journeyItemPosts.posts}
          eyebrowText={page.title}
        />
      )}
    </>
  );
};

export default Page;
