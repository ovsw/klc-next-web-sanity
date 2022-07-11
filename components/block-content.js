import cx from "classnames";
import { PortableText } from "@portabletext/react";

import { blockSerializers } from "components/block-serializers";

const Content = ({ blocks, className }) => {
  if (!blocks) return null;

  return (
    <PortableText
      renderContainerOnSingleChild
      className={cx("rc", className)}
      value={blocks}
      components={blockSerializers}
    />
  );
};

export default Content;
