import React from "react";
import Link from "next/link";
import { Module } from "components/modules";
import PostList from "components/blog/posts-list";

const Page = ({ page = {} }) => {
  console.log("from tag page", page);
  const { title = "[missing title]", modules = [], relatedPosts = [] } = page;
  return (
    <>
      {/* <h1>Journey Item Page: {page.title}</h1> {children} */}
      {/* ===========  MODULES =========== */}
      {modules.map((module, key) => {
        return <Module key={key} index={key} module={module} />;
      })}

      {/* =========== RELATED POSTS =========== */}
      {relatedPosts.length > 0 ? (
        <PostList
          title={`"${title}" Posts`}
          posts={relatedPosts}
          eyebrowText={`From the Blog`}
          topPaddingSmall={true}
        />
      ) : (
        <>
          <PostList
            title={`Coming Soon!`}
            posts={relatedPosts}
            eyebrowText={`Posts tagged: "${title}"`}
            topPaddingSmall={true}
            emptyMesasage={
              <p class=" tw-text-xl tw-mx-auto">
                We're adding new posts weekly. Please check back soon!
              </p>
            }
          />
        </>
      )}
    </>
  );
};

export default Page;
