import Image from "next/image";

const Author = () => {
  return (
    <div className="post_author">
      <div className="img">
        <Image
          src="/assets/images/blog/sheila-jones-headshot.jpg"
          alt="Sheila Jones"
          // className="image-fit"
          layout="fill"
        />
      </div>
      <div className="text">
        <h5 className="mb-2">Sheila Jones</h5>
        <p className="mb-2">
        I am on a mission to help empower our children to realize their potential, by giving them the tools to be successful no matter where they go in life.
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
