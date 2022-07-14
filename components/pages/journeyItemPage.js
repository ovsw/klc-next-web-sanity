import React from "react";
import Link from "next/link";

const Page = ({ page, children }) => {
  // console.log("page", page);
  return (
    <>
      <h1>Journey Item Page: {page.title}</h1> {children}
      {page.journeyItemPosts.posts.map((post, i) => {
        return (
          <li key={i}>
            <Link href={`/${post.slug}`}>
              <a>
                {post.title} - {new Date(post.publishedAt).toLocaleString()} -{" "}
                {post.slug}
              </a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Page;
