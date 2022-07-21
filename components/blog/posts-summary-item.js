import Link from "next/link";
import Image from "next/image";
import { urlFor } from "lib/sanity";

const PostsSummaryItem = ({ post, label = null }) => {
  return (
    <li>
      <div style={{ width: "100%" }}>{label != null && label}</div>
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
          <Link href={`/${post.slug?.current || post.slug}`}>{post.title}</Link>
        </h6>
        <p className="mb-0">
          <strong>
            <i className="fal fa-calendar-alt" />{" "}
          </strong>
          <Link href={`/${post.slug?.current || post.slug}`}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              // weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Link>
        </p>
      </div>
    </li>
  );
};

export default PostsSummaryItem;
