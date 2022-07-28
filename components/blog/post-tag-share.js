import Link from "next/link";

const PostTagsAndShare = ({ tags }) => {
  return (
    <div className="post_tags_share mt-5">
      <div className="post_tags">
        <h6>Tags for this post: </h6>
        <div className="tags">
          {tags.map((tag, i) => (
            <Link href={`/tags/${tag?.slug?.current}`} key={i}>
              <a>{tag?.title}</a>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="post_share">
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
      </div> */}
    </div>
  );
};

export default PostTagsAndShare;
