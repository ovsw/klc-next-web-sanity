import { Children, Fragment } from "react";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return <Fragment key={index}>{child}</Fragment>;
    }
    return child;
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;
