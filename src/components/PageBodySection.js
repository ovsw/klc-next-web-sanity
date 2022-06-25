import Link from "next/link";
import BodyRte from "./PageBodyRte";
import { storyblokEditable } from "@storyblok/react";

const PostBody = ({ blok }) => {
  return (
    <div
      className="section-padding"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="container container-narrow">
        <div className="row justify-content-between">
          <div className="mb-md-80">
            <BodyRte blok={blok} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
