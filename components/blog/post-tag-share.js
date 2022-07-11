import Link from "next/link";

const PostTagsAndShare = () => {
  return (
    <div className="post_tags_share">
      <div className="post_tags">
        <h6>Popular Tags: </h6>
        <div className="tags">
          <Link href="/blog-grid">Cleaning</Link>
          <Link href="/blog-grid">House</Link>
          <Link href="/blog-grid">Office</Link>
          <Link href="/blog-grid">Kitchen</Link>
        </div>
      </div>
      <div className="post_share">
        <h6>Share: </h6>
        <ul className="social">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-behance" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostTagsAndShare;
