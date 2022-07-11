const BlogPostCommentsForm = () => {
  return (
    <div className="comment_form">
      <h4>Leave A Reply</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="#"
                placeholder="Your Full Name"
                className="form-control form-control-custom style_2"
                autoComplete="off"
              />
              <i className="fal fa-user" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="#"
                placeholder="Your Email"
                className="form-control form-control-custom style_2"
                autoComplete="off"
              />
              <i className="fal fa-envelope" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                rows={5}
                name="#"
                placeholder="Write Message"
                className="form-control form-control-custom style_2"
                autoComplete="off"
                defaultValue={""}
              />
              <i className="fal fa-pen" />
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
            >
              Send Comment <i className="fal fa-chevron-right ml-2" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogPostCommentsForm;
