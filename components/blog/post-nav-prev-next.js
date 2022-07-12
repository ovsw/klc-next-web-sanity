import Link from "next/link";
import Image from "next/image";
import { urlFor } from "lib/sanity";

const PostItem = ({ post, type }) => (
  <li>
    <div style={{ width: "100%" }}>
      {type == "older" ? "Previous Post" : "Next Post"}
    </div>
    <Link href={`/${post.slug?.current}`}>
      <a className="image">
        <Image
          src={urlFor(post.mainImage.image).width(140).height(140).url()}
          alt="img"
          className="image-fit"
          width={140}
          height={140}
        />
      </a>
    </Link>
    <div className="text">
      <h6 className="mb-0">
        <Link href={`/${post.slug?.current}`}>{post.title}</Link>
      </h6>
      <p className="mb-0">
        <strong>
          <i className="fal fa-calendar-alt" />{" "}
        </strong>
        <Link href="/blog-grid">{post.publishedAt}</Link>
      </p>
    </div>
  </li>
);

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
      {nextPost != null && <PostItem post={nextPost} type="newer" />}
      {previousPost != null && <PostItem post={previousPost} type="older" />}
    </ul>
  );
};

export default NavPrevNext;
