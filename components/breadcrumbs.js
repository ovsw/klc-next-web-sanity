import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Breadcrumb from "components/breadcrumbs-wrapper";
import BreadcrumbItem from "components/breadcrumbs-item";

const Breadcrumbs = ({ currentPageCustomTitle }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      // const formattedPath = path.replace(/-/g, " ");
      const pathWords = path.split("-");
      for (let i = 0; i < pathWords.length; i++) {
        pathWords[i] = pathWords[i][0].toUpperCase() + pathWords[i].substr(1);
      }
      const formattedPath = pathWords.join(" ");
      const href = "/" + pathArray.slice(0, index + 1).join("/");

      const label = path.charAt(0).toUpperCase() + formattedPath.slice(1);
      return {
        href,
        label: label,
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <Breadcrumb>
      <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
        Home
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem
            key={breadcrumb.href}
            href={breadcrumb.href}
            isCurrent={breadcrumb.isCurrent}
            currentPageCustomTitle={currentPageCustomTitle}
          >
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
