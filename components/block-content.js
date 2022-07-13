import cx from "classnames";
import { PortableText } from "@portabletext/react";

import { blockSerializers } from "components/block-serializers";

const Content = ({ modules, className }) => {
  if (!modules) return null;

  return (
    <PortableText
      renderContainerOnSingleChild
      className={cx("rc", className)}
      value={modules}
      components={blockSerializers}
    />
  );
};

export default Content;
