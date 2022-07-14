import ProsableText from "components/prosable-text";

const Page = ({ pageData }) => (
  <>
    <h1>Page: {pageData?.page?.title}</h1>
    <ProsableText blocks={pageData?.page?.rteBody} />
    {/* <BodyRte /> */}
  </>
);

export default Page;
