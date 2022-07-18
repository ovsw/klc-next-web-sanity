import { Module } from "components/modules";

const Page = ({ page }) => {
  const { modules = [] } = page;

  return (
    <>
      {/* <h1>Page: {page?.title}</h1> */}
      {/* ===========  MODULES =========== */}
      {modules.length > 0 &&
        modules.map((module, key) => {
          return <Module key={key} index={key} module={module} />;
        })}
    </>
  );
};

export default Page;
