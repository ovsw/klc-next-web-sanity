const PostComments = () => {
  return (
    <>
      <h4>Comments</h4>
      <ul className="comments mb-xl-30">
        <li className="comment">
          <div className="comment_img">
            <img
              src="assets/images/blog/comments/1.jpg"
              alt="img"
              className="image-fit"
            />
          </div>
          <div className="comment_text">
            <h6 className="mb-0">John F. Medina</h6>
            <p className="comment_date">25 May 2021</p>
            <p className="mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae{" "}
            </p>
            <a href="#" className="comment_link">
              Reply <i className="fal fa-long-arrow-right ml-2" />
            </a>
          </div>
          <ul className="children">
            <li className="comment">
              <div className="comment_img">
                <img
                  src="assets/images/blog/comments/2.jpg"
                  alt="img"
                  className="image-fit"
                />
              </div>
              <div className="comment_text">
                <h6 className="mb-0">Jeffrey T. Kelly</h6>
                <p className="comment_date">25 May 2021</p>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae{" "}
                </p>
                <a href="#" className="comment_link">
                  Reply <i className="fal fa-long-arrow-right ml-2" />
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li className="comment">
          <div className="comment_img">
            <img
              src="assets/images/blog/comments/3.jpg"
              alt="img"
              className="image-fit"
            />
          </div>
          <div className="comment_text">
            <h6 className="mb-0">Richard B. Zellmer</h6>
            <p className="comment_date">25 May 2021</p>
            <p className="mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae{" "}
            </p>
            <a href="#" className="comment_link">
              Reply <i className="fal fa-long-arrow-right ml-2" />
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default PostComments;
