const Author = () => {
  return (
    <div className="post_author">
      <img
        src="assets/images/blog/author.jpg"
        alt="img"
        className="image-fit"
      />
      <div className="text">
        <h5 className="mb-2">Nathan George</h5>
        <p className="mb-2">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatu vel illum qui dolorem eum fugiat quo
          voluptas nulla pariano one rejects, dislikes, or avoids pleasure
          itself, because
        </p>
        <ul className="social">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-behance" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Author;
