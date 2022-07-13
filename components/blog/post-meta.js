import React from "react";

const PostMetaHeader = ({ author = "Sheila Jones", date }) => {
  return (
    <ul className="post_meta">
      <li>
        <i className="fal fa-user" />
        {author}
      </li>
      <li>
        <i className="fal fa-calendar-alt" />
        {/* 25 Mar 2021 */}
        {date}
      </li>
      {/* <li>
        <i className="fal fa-comment-lines" />
        Comments (05)
      </li> */}
    </ul>
  );
};

export default PostMetaHeader;
