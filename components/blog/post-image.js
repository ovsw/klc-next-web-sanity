import { urlFor } from "lib/sanity";
import Image from "next/image";

const PostImage = ({ image }) => {
  console.log("image", image);
  return (
    <div className="post_img">
      {/* <img
        src="assets/images/blog/list/1.jpg"
        alt="img"
        className="image-fit"
      /> */}
      <Image
        src={urlFor(image.image)
          .width(836)
          // .height(275)
          .fit("crop")
          .auto("format")
          .url()}
        alt={image.alt || image.image.mediaAlt || " "}
        className="image-fit"
        layout="fill"
        placeholder="blur"
        blurDataURL={image.image.lqip}
      />
    </div>
  );
};

export default PostImage;
