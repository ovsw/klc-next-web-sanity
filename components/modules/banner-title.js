import PageTitleBanner from "components/title-banner";

const TitleBanner = ({ data }) => (
  <PageTitleBanner pageName={data.pageName} title={data.title} />
);

export default TitleBanner;
