import Link from "next/link";
import { urlFor } from "lib/sanity";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";

const PostCard = ({ post }) => {
  // console.log("post from post card", urlFor(post.mainImage?.image).url());
  return (
    <div className="col-xl-4 col-md-6">
      <article className="post style_2 wow fadeInDown" data-wow-delay=".20ms">
        <div className="post_img">
          <Image
            src={urlFor(post.mainImage.image)
              .width(350)
              .height(275)
              .fit("crop")
              .auto("format")
              .url()}
            alt={post.mainImage.image.asset.alt || " "}
            className="image-fit"
            layout="fill"
          />
        </div>
        <div className="post_caption">
          <ul className="post_meta">
            <li>
              <i className="fal fa-calendar-alt" />
              {/* 25 Mar 2021 */}
              {post.publishedAt}
            </li>
            {/* <li>
                        <i className="fal fa-comment-lines" />
                        Comments (05)
                      </li> */}
          </ul>
          <h4 className="post_title">
            <Link href="/blog-details">{post.title}</Link>
          </h4>
          <p className="post_text">
            Quis autem vel eumiure reprehenderit quis volupta velit esse quam
            nihil molestiae conse quatur vel illum qui dolorem
          </p>
          <Link href={`/${post.slug.current || post.slug}`}>
            <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
              Read More <i className="fal fa-chevron-right ml-2" />
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default PostCard;
