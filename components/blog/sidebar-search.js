const BlogSearchForm = () => {
  return (
    <div className="sidebar_widget wow fadeInUp">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-group search_widget">
          <input
            type="text"
            name="#"
            placeholder="Search"
            className="form-control"
            autoComplete="off"
          />
          <div className="input-group-append ml-0">
            <button
              type="submit"
              className="thm-btn bg-thm-color-two thm-color-white thm-color-two-shadow btn-rectangle btn-small"
            >
              <i className="fal fa-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogSearchForm;
