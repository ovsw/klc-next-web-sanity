import BodyRte from "components/body-rte";
import PortableText from "components/block-content";

const Page = ({ pageData }) => (
  <>
    <h1>Page: {pageData?.page?.title}</h1>
    <PortableText blocks={pageData?.page?.rteBody} />
    {/* <BodyRte /> */}
  </>
);

export default Page;
