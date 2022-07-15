import ProsableText from "components/prosable-text";

const RichTextModule = ({ data }) => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8 mb-md-80">
            <ProsableText value={data.rteBody} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichTextModule;
