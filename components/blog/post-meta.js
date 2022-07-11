import React from "react";

const PostMetaHeader = () => {
  return (
    <ul className="post_meta">
      <li>
        <i className="fal fa-user" />
        Nichel Jhon
      </li>
      <li>
        <i className="fal fa-calendar-alt" />
        25 Mar 2021
      </li>
      <li>
        <i className="fal fa-comment-lines" />
        Comments (05)
      </li>
    </ul>
  );
};

export default PostMetaHeader;
