import Link from "next/link";

const BreadcrumbItem = ({
  children,
  href,
  isCurrent,
  currentPageCustomTitle = null,
  ...props
}) => {
  return (
    <>
      {!isCurrent ? (
        <li {...props} className="breadcrumb-item">
          <Link href={href} passHref>
            <a>{children}</a>
          </Link>
        </li>
      ) : (
        <li {...props} className="breadcrumb-item active" aria-current="page">
          {currentPageCustomTitle != null ? currentPageCustomTitle : children}
        </li>
      )}
    </>
  );
};

export default BreadcrumbItem;
